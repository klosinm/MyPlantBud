class Quiz{

    constructor(description) {
        // if description is null or undefined, we want to create an "empty" Toy object.
        if (description) {
            this.sunlight = description.sunlight;
            this.direction = description.direction;
         
        }
     
        this.errors = [];
    }


    static get(id) {
        return this.quizCollection.find((item) => item.id == id);
    }

    static create(quizInfo) {
        let newQuiz = new Quiz(quizInfo);

        if (newQuiz.isValid()) {

            newQuiz.id = ++Quiz.Quizid;
            this.quizCollection.push(newQuiz);
        }
        return newQuiz;
    }

    isValid() {
        this.errors = [];

        if (this.sunlight == "null1") {
            console.log("error 1 (in quiz)");
            this.errors.push("Please select the amount of sunlight you have at home.");
        }
        if (this.direction == "null2") {
            console.log("error 2 (in quiz)");
            this.errors.push("Please select the direction your windows face.");
        }
        if (this.days == "null3") {
            console.log("error 3 (in quiz)");
            this.errors.push("Please select how oftern you are home.");
        }
        if (this.daytime == "null4") {
            console.log("error 4 (in quiz)");
            this.errors.push("Please select the time of the day you are home to water your plant.");
        }

        //Do this for the next 6 questions


        console.log(this.errors.length); //works
        
        return this.errors.length <= 0;
    }

}
Quiz.Quizid = 0;
Quiz.quizCollection = [];

console.log("Quiz Collection in Quiz.js: " + Quiz.quizCollection);
module.exports = Quiz;