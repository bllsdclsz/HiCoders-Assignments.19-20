class PetOwners{
    constructor(){
        this.owner = this.generateRandomName();
    }

    generateRandomName(){
        return faker.name.findName();
    }
}