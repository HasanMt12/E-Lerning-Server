const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())

const list = require('./CustomFakeDb/CoursesList.json')

app.get('/', (req, res) => {
    res.send('E-learning API running')
})

app.get('/courses-list', (req, res) => {
    res.send(list)
})
app.listen(port, () => {
    console.log('E-learning web server running in port',port);
})