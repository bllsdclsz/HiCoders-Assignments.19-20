/**
 * Maktul class olusturur.
 */
class Victim{
    constructor(pName){
        this.name = pName;
        this.addresses = [];
        this.utility = new Utility();
        this.addAddress(this.returnAddress(), this.returnCompanyAddress())
    }

    /**
     * Iki ayri adres ekler.
     */
    addAddress(pAddress, pCompanyAddress){
        this.addresses.push(pAddress);
        this.addresses.push(pCompanyAddress);
    }

    /**
     * Rastgele maktul ev adresi döndürür.
     */
    returnAddress(){
        return new Address(this.utility.generateRandomSecondaryAddress(), 
                            this.utility.generateRandomAddress(), 
                            this.utility.generateRandomCity());
    }

    /**
     * Rasetgele maktul is adresi döndürür.
     */
    returnCompanyAddress(){
        return new Address(this.utility.generateRandomCompanySecondaryAddress(),
                            this.utility.generateRandomCompanyAddress(), 
                            this.utility.generateRandomCity());
    }
}