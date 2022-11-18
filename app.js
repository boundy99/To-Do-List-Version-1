const express = require('express');
const bodyParser = require('body-parser');

let newItems = ['Buy Food', 'Cook Food', 'Eat Food'];

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    var today = new Date();

    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };

    let day = today.toLocaleDateString("en-US", options)
    res.render('list', { kindOfDay: day, newElement: newItems });
})

app.post('/', (req, res) => {
    let newItem = req.body.toDo;
    newItems.push(newItem);
    res.redirect('/');
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})