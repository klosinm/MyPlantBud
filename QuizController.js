const Quiz = require('./Quiz');
const QuizDB = require('./plantOptionsDB');
const Plant = require('./Plant');

/*****
 *  Class where all the pages get linked together.
 * 
 * By: Monica Klosin
 * April 2020
 ******/
class QuizController {

    /*****
     *  Renders the list of plants in database (simple design)
     ******/
    index(req, res) {
        let plants = Plant.all();
        console.log(plants);
        res.render('plantIndex', { plants: plants });
    }

    /*****
    *  Renders the menu for My Plant Bud
    ******/
    menu(req, res) {
        let plants = Plant.all();
        console.log(plants);
        res.render('mainscreen', { plants: plants });
    }

    /*****
     *  In My Plant Bud menu, clicking "new Quiz" will send user
     * to quizForm page.
     ******/
    newQuiz(req, res) {
        res.render('quizForm', { quiz: new Quiz() });
        console.log("In quiz controller, rendering quiz form from newQuiz")
    }

    /*****
     *  Renders page where user will verify there quiz answers.
     * If the quiz answers chosen by user are valid (no null id's)
     * then user will be sent to the quizResult page.
     * If the answers are not valid, then they will be informed,
     * and will stay at the quizForm page.
     ******/
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
        }
    }


    /*****
    *  Update the quiz answer if user wants to change their mind
    
        Did not get this function to work in version 1.0.0
    ******/
    editQuiz(req, res) {
        let id = req.params.id;
        let quiz = Quiz.get(id);
        res.render('quizForm', { quiz: quiz });
    }

    /*****
     *  render plantShow page
     ******/
    showPlant(req, res) {
        let plants = Plant.all();
        console.log(plants);
        let id = req.params.id;
        let plant = Plant.get(id);
        console.log("Plant in showPlant: " + plant);

        //Check if there is a plant in database
        if (!plant) {
            alert(" Whoops!  We only have 6 plants. No plant number " + id + "!");
        }
        else {
            res.render('plantShow', { plants: plants, plant: plant });
        }
    }
}

module.exports = QuizController;