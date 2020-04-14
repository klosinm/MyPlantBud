const express = require('express');


const app = express();
const port = 3000;

app.use(express.static("public")); //or single quotes
app.set('view engine', 'ejs');


/* Import the body-parser module.  (Used for parsing Post data) */
const bodyParser = require('body-parser');

const QuizController = require('./QuizController');
const quizController = new QuizController();


app.get('/MyPlantBud', function (req, res) {
    res.render('mainscreen');
});

/* Parse the request body if there is POST data */
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/Quiz', function (req, res) {
    //res.render('quizForm');
    quizController.newQuiz(req, res);
});


//Show result of quiz number #id
app.post('/QuizResult', function (req, res) {
//app.post('/QuizResult/:id', function (req, res) {
    quizController.show(req, res);
   // res.render('quizResult');
});


app.listen(port, () => console.log('On port!'))