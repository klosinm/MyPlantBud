/*****
 *  Class where the quiz answers get checked and 
 * rendered
 *
 * By: Monica Klosin
 * April 2020
 ******/
class Quiz{

    constructor(description) {
        if (description) {
            this.sunlight = description.sunlight;
            this.water = description.water;
            this.plantplacement = description.plantplacement;
            this.TypeofPlant = description.TypeofPlant;
            this.colors = description.colors;
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
        if (this.water == "null2") {
            console.log("error 2 (in quiz)");
            this.errors.push("Please select water.");
        }
        if (this.plantplacement == "null3") {
            console.log("error 3 (in quiz)");
            this.errors.push("Please select plant placement.");
        }
        if (this.TypeofPlant == "null4") {
            console.log("error 4 (in quiz)");
            this.errors.push("Please select the type of plant.");
        }
        if (this.colors == "null5") {
            console.log("error 5 (in quiz)");
            this.errors.push("Please select colors.");
        }
     
        //console.log(this.errors.length); 
        return this.errors.length <= 0;
    }

}
Quiz.Quizid = 0;
Quiz.quizCollection = [];
console.log("Quiz Collection in Quiz.js: " + Quiz.quizCollection);
module.exports = Quiz;