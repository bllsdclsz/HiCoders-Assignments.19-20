class Otomat {
    constructor() {
        this.candy = new Candies();
        this.optionList = document.querySelector("#option-list");
        this.orderList = document.querySelector("#order-list");
        this.pieces = document.querySelector("#pieces");
    }

    createCandyOtomat() {
        for (let i = 0; i < this.candy.returnCandy().length; i++) {
            this.optionList.innerHTML += `<option>${this.candy.returnCandy()[i].name}</option>`
        }
    }

    createOrderList() {
        let selectedItem = this.optionList.selectedIndex;
        let order = `<li class="list-group-item">${this.optionList.options[selectedItem].text}\n\n${this.pieces.value}</li>`
        this.orderList.innerHTML += order;
    }

    addToDom() {
        this.createCandyOtomat();
    }
}