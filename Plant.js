
//Where plant information is stored
class Plant {

    constructor(info) {

        if (info) {
            console.log("Plant info");
            this.Title = info.Title;
            this.Description = info.Description;
            this.Watering = info.Watering;
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
    Description: "A very easy to care plant with striking foliage.",
    Watering: "Water when the top two inches of soil are dry - do not let this plant sit in very wet soil ",
    Sunlight: "Can tolerate both bright and low light levels - but it does not like direct sun",
    Picture: "Images/zzPlant.jpg"
});
Plant.create({
    Title: "Monstera Adansonii",
    Description: "Monstera means \"abnormal\" in latin - and leaves on this plant are definitly unique. The leaves develope cute little holes. ",
    Watering: "It likes humidity - so feel free to spritz it with a mister. Water when the top inch of the soil is dry - do not let it sit in soggy soil ",
    Sunlight: "Likes indirect light - but can also grow in lower light conditions",
    Picture: "Images/monstera.jpg"
});
Plant.create({
    Title: "Stromanthe Trio Star",
    Description: "Called \"Trio\" for the three colors in its leaves - white, pink, green. The brighter the light, the more pink in the leaves.",
    Watering: "It likes humidity - so feel free to spritz it with a mister. ",
    Sunlight: "Likes bright light, but watch that it does not burn with too much direct light ",
    Picture: "Images/trioStar.jpg"
});
Plant.create({
    Title: "Pothos",
    Description: "Ideal plant for beginners ... ",
    Watering: "Keep the soil moist but not soggy. If you have not watered in a while and the leaves are drooping it is time to water again.",
    Sunlight: "Can tolerate both bright and low light levels - but it does not like direct sun",
    Picture: "Images/pothos.jpg"
});

Plant.create({
    Title: "Hoya Carnosa",
    Description: "A beautiful climing plant that has pink, white, and green leaves! It loves light and high humidity. Be careful not to overwater this one. If you take good care of it can bloom pink flowers!",
    Watering: "Wait untill the soil is compleatly dry ~ 1 month. When you water it make sure to fully saturate the soil." ,
    Sunlight: "likes sun",
    Picture: "Images/hoya.jpg"
});
Plant.create({
    Title: "Christmas Cactus",
    Description: "Though called a cactus - these are not desert natives. They are jungle cacti! That means that they do not like the soil to be bone dry. Take good care of it and it will give you flowers during the winter!",
    Watering: "Water when the top inch of the soil is dry - do not let it sit in soggy soil",
    Sunlight: "They like bright indirect light.",
    Picture: "Images/christmasCactus.png"
});


console.log("Plant.js: " + Plant.plantCollection);

module.exports = Plant;
