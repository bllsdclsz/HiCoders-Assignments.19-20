class Customer{
    
    #victims = [];

    constructor(pName){
        this.name = pName;
        
    }

    addVictim(pVictim){
        this.#victims.push(pVictim);
    }
}