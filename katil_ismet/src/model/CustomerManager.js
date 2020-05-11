class CustomerManager {
    constructor() {
        this.utility = new Utility;
        this.customerArray = [];
        this.victimArray = [];
        this.addToCustomerArray();
        this.addToVictimArray();
    }

    returnCustomer() {
        return new Customer(this.utility.generateRandomName());
    }

    returnVictim() {
        return new Victim(this.utility.generateRandomName(), this.utility.generateRandomAge(),
            this.utility.generateRandomSecondaryAddress(), this.utility.generateRandomAddress(), this.utility.generateRandomCity(),
            this.utility.generateRandomJob(), this.utility.generateRandomCompanyName(),
            this.utility.generateRandomCompanySecondaryAddress(), this.utility.generateRandomCompanyAddress(),
            this.utility.generateRandomHeight(), this.utility.generateRandomWeight());
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