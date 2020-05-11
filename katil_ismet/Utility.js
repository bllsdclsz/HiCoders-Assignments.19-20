class Utility {
    constructor() {}

    generateRandomNumber() {
        return Math.floor(Math.random() * 20) + 1;
    }

    generateRandomName() {
        return faker.name.findName();
    }

    generateRandomAge() {
        return Math.floor(Math.random() * 80) + 18;
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

    generateRandomJob() {
        return faker.name.jobType();
    }

    generateRandomCompanyName() {
        return faker.company.companyName();
    }

    generateRandomCompanySecondaryAddress() {
        return faker.address.secondaryAddress();
    }

    generateRandomCompanyAddress() {
        return faker.address.streetAddress();
    }

    generateRandomHeight() {
        return Math.floor(Math.random() * 50) + 150;
    }

    generateRandomWeight() {
        return Math.floor(Math.random() * 60) + 50;
    }
}