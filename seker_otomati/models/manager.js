class Manager {
    candyPrice = 0;
    bagPrice = 0;
    total = 0;
    addedCandy = [];
    constructor() {
        this.candy = new Candies;
        this.candy.returnCandy();
        this.otomatview = new Otomat();
    }

    addToOrderList() {
        document.querySelector("#add-box").addEventListener('click', () => {
            this.candy.currentAmount = document.querySelector("#number").value;
            document.querySelector("#number").value > 0 ? this.addedCandy.push(this.otomatview.addToList()) : false;
            console.log(this.addedCandy)
            console.log(document.querySelector("select").options[document.querySelector("select").selectedIndex].text)
            console.log(this.checkCandyName());
        })
    }

    addEventPayButton() {
        document.querySelector("#pay-order").addEventListener('click', () => {
            location.reload();
        })
    }

    checkCandyName() {
        let selectedItem = document.querySelector("select").selectedIndex;
        let filteredcandies = this.addedCandy.map(item => item[1])
            .filter((candyName) =>
                candyName == document.querySelector("select").options[selectedItem].text) ?
            false : this.addToOrderList();
            console.log(filteredcandies)
            return filteredcandies;
    }

    start() {
        this.otomatview.addToDom(this.candy.candyList, this.candyPrice, this.bagPrice, this.total);
        this.addToOrderList();
        this.checkCandyName();
        this.addEventPayButton();
    }
}