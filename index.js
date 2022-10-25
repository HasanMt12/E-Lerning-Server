const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())

const list = require('./CustomFakeDb/CoursesList.json')
const courses = require('./CustomFakeDb/courses.json')


app.get('/', (req, res) => {
    res.send('E-learning API running')
})

app.get('/courses-list', (req, res) => {
    res.send(list)
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const chooseCourses = courses.filter( course => course.id === id);
    res.send(chooseCourses);
})

app.get('/courses', (req, res) => {
    res.send(courses);
});



app.listen(port, () => {
    console.log('E-learning web server running in port',port);
})