const Quiz = require('./Quiz');
const QuizDB = require('./plantOptionsDB');
class QuizController{

    newQuiz(req, res) {
        res.render('quizForm', { quiz: new Quiz() });
        console.log("In quiz controller, rendering quiz form from newQuiz")
    }

    async create(req, res) {
        console.log("About to show quiz results in create method");
        console.log(req.body); 
        let AnswersFromQuiz = await QuizDB.create(req.body.quiz);

        if (AnswersFromQuiz.isValid()) {

        } else {
            res.render('quizForm', { quiz: NewAnswer });
        }
    }

    //where quiz gets submitted to
    async show(req, res) {

        console.log(req.body); 
        let newQuiz = await QuizDB.create(req.body.quiz);
        console.log("show in quizControler: ", newQuiz);
        if (newQuiz.isValid()) {
            res.render('quizResult', { quiz: req.body.quiz });
           
        } else {
            res.render('quizForm', { quiz: req.body.quiz });
            //req.body as a render, to have that data
            /*req is request to bundle data body has quez object in it
            with all subparts*/
        }
    }



}

module.exports = QuizController;