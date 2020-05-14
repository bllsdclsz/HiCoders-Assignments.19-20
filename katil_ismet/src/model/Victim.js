class Victim{
    constructor(pName){
        this.name = pName
        this.addresses = [];
    }

    addAddress(pAddress){
        this.addresses.push(pAddress);
    }
}