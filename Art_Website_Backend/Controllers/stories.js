const Stories = require('../Models/Stories')

exports.createStory = async (req, res) => {
    try {
        const {name} = req.body
        const existingData = await Stories.find({name})
        if (existingData){
            return res.status(409).send({StoryExist: "Story already exists."})
        }
        
        const data = new Stories(req.body);
        const saved = await data.save();
        return res.status(201).send({ message: "Stories Saved Successful.", data: saved });
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message })
    }
};

exports.getStories = async (req, res) => {
    try {
        const data = await Stories.find();
        return res.status(200).send(data)
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message })
    }
};

exports.getStoryById =  async (req, res) => {
    try {
        const data = await Stories.findById(req.params._id);
        if (!data) {
            return res.status(404).send({ StoryError: "Enter valid story id." })
        }
        return res.status(200).send(data)
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message })
    }
};

exports.updateStory =  async (req, res) => {
    try {
        const data = await Stories.findByIdAndUpdate(req.params._id, req.body, {new: true})
        if (!data) {
            return res.status(404).send({ StoriesError: "Stories Not Found." })
        }
        return res.status(200).send({ message: "Stories Updated Successful.", data })
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message })
    }
};

exports.deleteStory =  async (req, res) => {
    try {
        const data = await Stories.findByIdAndDelete(req.params._id)
        if (!data) {
            return res.status(404).send({ StoriesError: "Stories Not Found." })
        }
        return res.status(200).send({ message: "Stories Deleted Successful." })
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message })
    }
};