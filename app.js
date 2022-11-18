const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    var today = new Date();

    var options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };

    var day = today.toLocaleDateString("en-US", options)
    res.render('list', { kindOfDay: day });
})

app.post('/', (req, res) => {
    var newItem = req.body.toDo;
    console.log(newItem)
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})