class Line{
    constructor(){
        this.pets = new Pets();
        this.petInTheLine = [];
        this.anchovyLine = [];
        this.catLine = [];
        this.crowLine = []; 
    }

    returnPets() {
        let randomer = this.pets.petSpecies[Math.floor(Math.random() * 3)];
        this.petInTheLine.push(randomer);
        return this.pets;
    }

    addPetsToArray() {
        let randomer = Math.ceil(Math.random() * 100);
        for (let i = 0; i < randomer; i++) {
            this.returnPets();
        }

        console.log(this.petInTheLine)
    }
}