/**
 * Müsteri yönetici classini tanmlar.
 */
class CustomerManager {
    constructor() {
        this.utility = new Utility();
        this.customerArray = [];
        this.addToCustomerArray();
    }

    /**
     * Müsteri ismi döndürür.
     */
    returnCustomer() {
        return new Customer(this.utility.generateRandomName());
    }

    /**
     * Rastgele sayida müsteri döndürür.
     */
    addToCustomerArray() {
        for (let i = 0; i < this.utility.generateRandomNumber(); i++) {
            this.customerArray.push(this.returnCustomer());
        }
    }
}