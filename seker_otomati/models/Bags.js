/**
 * Posetleri olusturan class.
 */
class Bags {
    constructor(pSize, pVolume, pPrice) {
        this.size = pSize;
        this.volume = pVolume;
        this.price = pPrice;
    }

    /**
     * Icinde posetler olan bir array döndürür.
     */
    listBag() {
        let bags = [
            new Bags("small", 250, 0.2),
            new Bags("medium", 400, 0.35),
            new Bags("big", 750, 0.7)
        ];
        return bags;
    }
}