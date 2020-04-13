const express = require('express');


const app = express();
const port = 3000;

app.use(express.static("public")); //or single quotes
app.set('view engine', 'ejs');



const QuizController = require('./QuizController');
const quizController = new QuizController();


app.get('/MyPlantBud', function (req, res) {
    res.render('mainscreen');
});


app.get('/Quiz', function (req, res) {
    //res.render('quizForm');
    quizController.create(req, res);
});


//Show result of quiz number #id
app.post('/QuizResult/:id', function (req, res) {
    quizController.show(req, res);
   // res.render('quizResult');
});


app.listen(port, () => console.log('On port!'))