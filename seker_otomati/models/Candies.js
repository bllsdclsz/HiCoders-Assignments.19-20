class Candies {
    candyList = [];
    constructor(pId, pName, pVolume, pPrice) {
        this.id = pId;
        this.name = pName;
        this.volume = pVolume;
        this.price = pPrice;
        this.currentAmount = 0;
    }

    returnCandy() {
            this.candyList.push(new Candies("c1", "round lollipop", 50, 3));
            this.candyList.push(new Candies("c2", "twisty lollipop", 20, 2.5));
            this.candyList.push(new Candies("c3", "jelibon", 45, 2.75));
            this.candyList.push(new Candies("c4", "rock candy", 26, 5));
            this.candyList.push(new Candies("c5", "lokum", 8, 1.5));
    }
}