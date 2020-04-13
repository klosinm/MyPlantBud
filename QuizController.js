const Quiz = require('./Quiz');
const QuizDB = require('./plantOptionsDB');
class QuizController{

    newQuiz(req, res) {
        res.render('quizNew', { quiz: new Quiz() });
    }

    async create(req, res) {
        console.log("About to show quiz results");
        console.log(req.body);
        let AnswersFromQuiz = await QuizDB.create(req.body.quiz);

        if (AnswersFromQuiz.isValid()) {
            // Send a redirect to the "show" route for the new user.
           // res.writeHead(302, { 'Location': `/Answer/${AnswersFromQuiz.id}` });
            //res.end();
        } else {
            res.render('quizForm', { quiz: NewAnswer });
        }
    }


    async show(req, res) {
        let id = req.params.id;
        let quiz = await QuizDB.find(id);

        if (!quiz) {
            res.send("Could not find quiz with id of " + id);
        } else {
            res.render('quizResult', { quiz: quiz });
        }
    }



}

module.exports = QuizController;