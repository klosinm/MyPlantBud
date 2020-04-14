class Quiz{

    constructor(description) {
        // if description is null or undefined, we want to create an "empty" Toy object.
        if (description) {
            this.sunlight = description.sunlight;
            this.direction = description.direction;
            this.days = description.days;
            this.daytime = description.daytime;
            this.pet = description.pet;
            this.plantsize = description.plantsize;
            this.plantplacement = description.plantplacement;
            this.HemLocation = description.HemLocation;
            this.TypeofPlant = description.TypeofPlant;
            this.colorful = description.colorful;
        }
     
        this.errors = [];
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

module.exports = Quiz;