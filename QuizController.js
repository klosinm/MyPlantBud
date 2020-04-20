const Quiz = require('./Quiz');
const QuizDB = require('./plantOptionsDB');

const Plant = require('./Plant');

class QuizController{

    index(req, res) {
        let plants = Plant.all();
        console.log(plants);
        res.render('plantIndex', { plants: plants });
    }

    menu(req, res) {
        let plants = Plant.all();
        console.log(plants);
        res.render('mainscreen', { plants: plants });
    }

    newQuiz(req, res) {
        res.render('quizForm', { quiz: new Quiz() });
        console.log("In quiz controller, rendering quiz form from newQuiz")
    }

    async create(req, res) {
        console.log("About to show quiz results in create method");
        console.log(req.body); 
        let AnswersFromQuiz = await QuizDB.create(req.body.quiz);

        if (AnswersFromQuiz.isValid()) {
            console.log("Answers Form Quiz, QuizCont: ", AnswersFromQuiz);
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
            console.log("In valid show controller");
            res.render('quizResult', { quiz: req.body.quiz });
           
        } else {
            console.log("In not valid show controller");
            res.render('quizForm', { quiz: req.body.quiz });
            //req.body as a render, to have that data
            /*req is request to bundle data body has quez object in it
            with all subparts*/
        }
    }

    // update
    editQuiz(req, res) {
        let id = req.params.id;
        let quiz = Quiz.get(id);
       
        res.render('quizForm', { quiz: quiz });
        
    }



    showPlant(req, res) {
        let id = req.params.id;
        let plant = Plant.get(id);
        console.log("Plant in showPlant: " + plant);
        res.render('plantShow', { plant: plant });
        
    }



}

module.exports = QuizController;