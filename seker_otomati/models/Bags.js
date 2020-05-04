class Bags {
    constructor(pSize, pVolume, pPrice) {
        this.size = pSize;
        this.volume = pVolume;
        this.price = pPrice;
    }

    returnBag() {
        let bag = [new Bags("little", 250, 0.20),
            new Bags("middle", 400, 0.35),
            new Bags("big", 750, 0.70)
        ]
        return bag;
    }
}