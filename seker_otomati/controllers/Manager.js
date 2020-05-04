class Manager {
    constructor() {
        this.otomat = new Otomat();
        this.button = document.querySelector("#button")
        this.resetButton = document.querySelector("#reset-button");
    }

    addEventButton() {
        this.button.addEventListener('click', () => {
            this.otomat.createOrderList();
            console.log("hello")
        })
    }

    addEventResetButton() {
        this.resetButton.addEventListener('click', () => {
            location.reload();
        })
    }

    start() {
        this.otomat.addToDom();
        this.addEventButton();
        this.addEventResetButton();
    }
}