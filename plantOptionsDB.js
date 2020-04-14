const Quiz = require('./Quiz');

class plantOptionsDB {


    static all() {
        return this.allQuizes;
    }

    static create(quizDescription) {

        let newQuiz = new Quiz(quizDescription);
        console.log("In DB, create method: ", newQuiz);
        //if (newQuiz.isValid()) {
            //newQuizLength = this.allQuizes.length;
            //console.log("New quiz length", newQuizLength);
           // this.allQuizes.push(newQuiz);
            //res.render('quizResult', { quiz: req.body.quiz  });
      //  }
        console.log("IN CREATE AFTER", newQuiz);
        return newQuiz;
    }

}

module.exports = plantOptionsDB;
