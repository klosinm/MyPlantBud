
//Where plant information is stored
class Plant {

    constructor(info) {

        if (info) {
            console.log("Plant info");
            this.Title = info.Title;
            this.Description = info.Description;
            this.WaterNeed = info.WaterNeed;
            this.Sunlight = info.Sunlight;
            this.Picture = info.Picture;
        }
       
    }

    static get(id) {
        
        return this.plantCollection.find((item) => item.id == id);
    }

    static all() {
        return this.plantCollection;
    }

    static create(plantInfo) {
        let newPlant = new Plant(plantInfo);
        this.plantCollection.push(newPlant);
        newPlant.id = ++Plant.Plantid;

        return newPlant;
    }

}

Plant.Plantid = 0;
Plant.plantCollection = [];

Plant.create({
    Title: "Fig",
    Description: "Green plant lots of love",
    WaterNeed: "Lots",
    Sunlight: "Good Amount",
    Picture: 'Images/hoya.jpg'
});
Plant.create({
    Title: "Cactus",
    Description: "Spiky Boy",
    WaterNeed: "Not a lot",
    Sunlight: "A lot!",
    Picture: 'Images/hoya.jpg'
});
Plant.create({
    Title: "Tulips",
    Description: "Colorful lady",
    WaterNeed: "daily ",
    Sunlight: "likes sun",
    Picture: 'Images/hoya.jpg'
});

console.log("Plant.js: " + Plant.plantCollection);

module.exports = Plant;
