class Pets {
    constructor() {
        this.petSpecies = [{
                ownerName: new PetOwners().owner,
                species: "anchovy",
                age: this.generateRandomAge(),
                treatment: 2,
                fee: 40
            },
            {
                ownerName: new PetOwners().owner,
                species: "cat",
                age: this.generateRandomAge(),
                treatment: 6,
                fee: 100
            },
            {
                ownerName: new PetOwners().owner,
                species: "crow",
                age: this.generateRandomAge(),
                treatment: 4,
                fee: 150
            }
        ]
        
    }

    generateRandomAge() {
        return Math.ceil(Math.random() * 10);
    }

    
}