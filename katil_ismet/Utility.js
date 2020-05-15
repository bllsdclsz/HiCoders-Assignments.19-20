class Utility {
    constructor() {}

    generateRandomNumber() {
        return Math.floor(Math.random() * 20) + 1;
    }

    generateRandomName() {
        return faker.name.findName();
    }

    generateRandomSecondaryAddress() {
        return faker.address.secondaryAddress();
    }

    generateRandomAddress() {
        return faker.address.streetAddress();
    }
    generateRandomCity() {
        return faker.address.city();
    }

    generateRandomCompanySecondaryAddress() {
        return faker.address.secondaryAddress();
    }

    generateRandomCompanyAddress() {
        return faker.address.streetAddress();
    }
}