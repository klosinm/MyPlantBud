const Quiz = require('./Quiz');

class plantOptionsDB {


    static all() {
        return this.allQuizes;
    }

    static find(id) {
        return this.allQuizes.find((item) => item.id == id);
    }


    static create(quizDescription) {

        let newQuiz = new Quiz(quizDescription);
        console.log("In DB, create method: ", newQuiz);
        if (newQuiz.isValid()) {

            this.allQuizes.push(newQuiz);
            newQuiz.id = ++Quiz.Quizid;
            //newQuizLength = this.allQuizes.length;
            //console.log("New quiz length", newQuizLength);
           // this.allQuizes.push(newQuiz);
            //res.render('quizResult', { quiz: req.body.quiz  });
       }
        console.log("IN CREATE AFTER", newQuiz);
        return newQuiz;
    }

}
plantOptionsDB.allQuizes = [];

module.exports = plantOptionsDB;
