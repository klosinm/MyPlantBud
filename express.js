const express = require('express');


const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public")); //or single quotes
app.set('view engine', 'ejs');


/* Import the body-parser module.  (Used for parsing Post data) */
const bodyParser = require('body-parser');

const QuizController = require('./QuizController');
const quizController = new QuizController();


app.get('/MyPlantBud', function (req, res) {
    //res.render('mainscreen');
    quizController.menu(req, res);
});

/* Parse the request body if there is POST data */
app.use(bodyParser.urlencoded({ extended: true }));



/*Submit quiz page */
app.get('/quiz', function (req, res) {
    res.render('quizForm');
    quizController.create(req, res);
});

//User edits answers
app.get('/quiz/:id/edit', function (req, res) {
    quizController.editQuiz(req, res);
});



//List of all plants
app.get('/plant', function (req, res) {
    quizController.index(req, res);
});


//List of specific plant
app.post('/plant/:id', function (req, res) {
    quizController.showPlant(req, res);
});

//List of specific plant
app.get('/plant/:id', function (req, res) {
    quizController.showPlant(req, res);
});



//Show result of quiz number #id
app.post('/quizResult', function (req, res) {
//app.post('/QuizResult/:id', function (req, res) {
    quizController.show(req, res);
   // res.render('quizResult');
});


//Show result of quiz number #id
app.get('/quizResult', function (req, res) {
    //app.post('/QuizResult/:id', function (req, res) {
    quizController.show(req, res);
    // res.render('quizResult');
});



app.listen(port, () => console.log('On port!'))