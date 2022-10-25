const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('E-learning API running')
})

app.listen(port, () => {
    console.log('E-learning web server running in port',port);
})