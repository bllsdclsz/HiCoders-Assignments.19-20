class CustomerManager {
    constructor() {
        this.utility = new Utility();
        this.customerArray = [];
        this.victimArray = [];
        this.addToCustomerArray();
        this.addToVictimArray();
    }

    returnCustomer() {
        return new Customer(this.utility.generateRandomName());
    }

    returnVictim() {
        return new Victim(this.utility.generateRandomName(), 
                            this.utility.generateRandomAge(), 
                            this.utility.generateRandomJob());
    }

    returnAddress(){
        return new Address(this.utility.generateRandomSecondaryAddress(), 
                            this.utility.generateRandomAddress(), 
                            this.utility.generateRandomCity());
    }

    returnCompanyAddress(){
        return new Address(this.utility.generateRandomCompanySecondaryAddress(),
                            this.utility.generateRandomCompanyAddress(), 
                            this.utility.generateRandomCity());
    }

    addToCustomerArray() {
        for (let i = 0; i < this.utility.generateRandomNumber(); i++) {
            this.customerArray.push(this.returnCustomer());
        }
    }

    addToVictimArray() {
        for (let i = 0; i < this.utility.generateRandomNumber(); i++) {
            this.victimArray.push(this.returnVictim());
        }
    }

}