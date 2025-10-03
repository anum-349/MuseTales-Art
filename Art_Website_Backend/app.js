const express = require('express')
const database = require('./Config/config')
const user_routes = require('./Routes/userApis')
const auth = require('./Routes/Auth')
const art_detail_routes = require('./Routes/artDetailApis')
const author_routes = require('./Routes/authorDetailsApis')
const category_routes = require('./Routes/CategoryDetailsApis')
const collection_routes = require('./Routes/collectionsApis')
const feedback_routes = require('./Routes/feedbackApis')
const support_routes = require('./Routes/supportApis')
const cart_routes = require('./Routes/cartApis')
const stories_routes = require('./Routes/storiesApis')
const curator_routes = require('./Routes/curatorsApis')
const testimonal_routes = require('./Routes/testimonalApis')
const inquiryRoutes = require('./Routes/Advisory')
const search_routes = require('./Routes/SearchApi')
const cors = require('cors')
const accessability = require('./Routes/Accessability')
const app = express()

database()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded( {extended: true}))

app.get('/test', (req, res) => {
    res.send('Server is running');
});

app.use('/api/auth', auth)
app.use('/api/', user_routes)
app.use('/api/', art_detail_routes)
app.use('/api/', author_routes)
app.use('/api/', category_routes)
app.use('/api/', collection_routes)
app.use('/api/', feedback_routes)
app.use('/api/', support_routes)
app.use('/api/', cart_routes)
app.use('/api/', stories_routes)
app.use('/api/', curator_routes)
app.use('/api/', testimonal_routes)
app.use('/api/', search_routes)
app.use('/api/', accessability)
app.use("/api/inquiries", inquiryRoutes);

app.listen(5000, ()=>{
    console.log("http://localhost:5000")
})
