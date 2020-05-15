/**
 * Müsteri tanimlarini yapar.
 */
class Customer{
    constructor(pName){
        this.name = pName;
        this.utility = new Utility();
        this.victims = [];
        this.addVictim(this.addToVictimArray())
    }

    /**
     * maktulleribir arraye gönderir.
     */
    addVictim(pVictim){
        this.victims.push(pVictim);
    }

    /**
     * Maktul ismi döndürür.
     */
    returnVictim() {
        return new Victim(this.utility.generateRandomName());
    }

    /**
     * Rastgele sayida maktulu döndürür.
     */
    addToVictimArray() {
        for (let i = 0; i < this.utility.generateRandomNumber(); i++) {
            this.victims.push(this.returnVictim());
        }
    }
}