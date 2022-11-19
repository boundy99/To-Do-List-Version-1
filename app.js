const express = require('express');
const bodyParser = require('body-parser');

let newItems = ['Buy Food', 'Cook Food', 'Eat Food'];
let workItems = [];

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
    res.render('list', { listTitle: day, newElement: newItems });
})

app.post('/', (req, res) => {
    console.log(req.body)

    let newItem = req.body.toDo;
    if (req.body.list === "Work") {
        workItems.push(newItem);
        res.redirect('/work')
    }
    newItems.push(newItem);
    res.redirect('/');
})

app.get('/work', (req, res) => {
    res.render('list', { listTitle: "Work List", newElement: workItems })
})

app.get('/about', (req, res) => {
    res.render('about');
})

app.post('/work', (req, res) => {
    let workItem = req.body.toDo;
    workItems.push(workItem);
    res.redirect('/work');
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})