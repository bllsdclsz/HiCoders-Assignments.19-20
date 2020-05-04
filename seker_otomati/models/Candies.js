class Candies {
    constructor(pName, pVolume, pPrice) {
        this.name = pName;
        this.volume = pVolume;
        this.price = pPrice;
    }

    returnCandy() {
        let candies = [new Candies("round lollipop", 50, 3),
            new Candies("twisty lollipop", 20, 2.5),
            new Candies("jelibon", 45, 2.75),
            new Candies("rock candy", 26, 5),
            new Candies("lokum", 8, 1.5)
        ]
        return candies;
    }
}