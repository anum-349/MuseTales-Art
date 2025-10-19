// routes/auth.js
const express = require("express");
const User = require("../Models/User"); 
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config()
const fetch = require("node-fetch")
const { OAuth2Client } =  require("google-auth-library");

const router = express.Router();

const client = new OAuth2Client(process.env.CLIENT_ID, process.env.CLIENT_SECRET, "postmessage");

router.post("/google-login", async (req, res) => {
  try {
    const { code } = req.body;

    // Exchange auth code for tokens
    const { tokens } = await client.getToken(code);
    const idToken = tokens.id_token; // ✅ this is now a real ID token

    const ticket = await client.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { email, given_name, family_name } = payload;

    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({
        firstName: given_name,
        lastName: family_name,
        email,
        provider: "google",
      });
    }

    const jwtToken = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      message: "Google login successful",
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
      token: jwtToken,
    });
  } catch (err) {
    console.error("Google login failed:", err);
    res.status(500).json({ message: "Google login failed" });
  }
});

// Register API
router.post("/register", async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existing = await User.findOne({ email });
        if (existing) return res.status(400).json({ message: "Email already registered" });

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ firstName, lastName, email, password: hashedPassword, provider: "manual" });
        await user.save();

        res.status(201).json({ message: "Registered successfully", userId: user._id });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
});

router.post("/google", async(req, res)=>{
  try{
    const {token} = req.body

    const response = await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${token}`)
    const data = await response.json()

    if(data.error_description){
      return res.status(400).json({ message: "Invalid Google Token"})
    }

    const {email, given_name, family_name} = data;

    let user = await User.findOne({email})
    if(!user){
      user = await User.create({
        firstName: given_name,
        lastName: family_name,
        email,
        password: "",
        provider: "google"
      })
    }

    const jwtToken = jwt.sign({id: user._id, email: user.email}, process.env.JWT_SECRET, {expiresIn: "7d"})

    res.json({
      message: "Google Login Successful",
      user,
      token: jwtToken
    })
  }catch(err){
    console.log(err)
    res.status(500).json({message: "Google Login Error"})
  }
})

// Login API
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "Invalid credentials" });

        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.json({ message: "Login successful", token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
});

router.post("/forgot-password", async (req, res) => {
  try {
    const { email, new_password } = req.body;

    if (!email || !new_password) {
      return res.status(400).json({ message: "Email and new password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    // Hash new password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(new_password, salt);

    await user.save();

    res.json({ message: "Password reset successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
