
//Where plant information is stored
class Plant {

    constructor(info) {

        if (info) {
            console.log("Plant info");
            this.Title = info.Title;
            this.Description = info.Description;
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
    Title: "ZZ Plant",
    Description: "Green plant lots of love",
    Sunlight: "Good Amount",
    Picture: "Images/zzPlant.jpg"
});
Plant.create({
    Title: "Monstera Adansonii",
    Description: "This plat is also known as the Krimson Queen. loves to be dry (~ once a month). Be sure not to over water! It does well in bright light conditions.",
    Sunlight: "A lot!",
    Picture: "Images/monstera.jpg"
});
Plant.create({
    Title: "Stromanthe Trio Star",
    Description: "Colorful lady",
    Sunlight: "likes sun",
    Picture: "Images/trioStar.jpg"
});
Plant.create({
    Title: "Pothos",
    Description: "Colorful lady",
    Sunlight: "likes sun",
    Picture: "Images/pothos.jpg"
});

Plant.create({
    Title: "Hoya Carnosa",
    Description: "Colorful lady",
    Sunlight: "likes sun",
    Picture: "Images/hoya.jpg"
});
Plant.create({
    Title: "Christmas Cactus",
    Description: "Colorful lady",
    Sunlight: "likes sun",
    Picture: "Images/christmasCactus.png"
});


console.log("Plant.js: " + Plant.plantCollection);

module.exports = Plant;
