const Quiz = require('./Quiz');

class plantOptionsDB {


    static all() {
        return this.allQuizes;
    }

    static find(id) {
        return this.allQuizes.find((item) => item.id == id);
    }

    static create(quizDescription) {

        let newQuiz = new Quiz(quizDescription)
        if (newQuiz.isValid()) {

            newQuiz.id = this.allQuiz.length;
            this.allQuizes.push(newQuiz);
            //console.log("IN CREATE", newUser);
        }
        //console.log("IN CREATE AFTER", newUser);
        return newQuiz;
    }

}

module.exports = plantOptionsDB;
