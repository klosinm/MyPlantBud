class Quiz{

    constructor(description) {
        // if description is null or undefined, we want to create an "empty" Toy object.
        if (description) {
            //this.id = description.id;
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

        if (!this.sunlight == "Select") {
            console.log("1");
            this.errors.push("Please select the amount of sunlight you have at home.");
        }
        if (!this.direction == "Select") {
            console.log("2");
            this.errors.push("Please select the direction your windows face.");
        }
        if (!this.days == "Select") {
            console.log("3");
            this.errors.push("Please select how oftern you are home.");
        }
        if (!this.daytime == "Select") {
            console.log("4");
            this.errors.push("Please select the time of the day you are home to water your plant.");
        }


        //Do this for the next 6 questions


        console.log(this.errors.length);
        return this.errors.length <= 0;
    }

}

module.exports = Quiz;