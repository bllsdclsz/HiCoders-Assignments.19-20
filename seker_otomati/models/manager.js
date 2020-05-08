/**
 * Manager yönetici class.
 */
class Manager {
    candyList = new Candies().listCandy();
    bagList = new Bags().listBag();
    constructor(pViewBox, pViewController) {
        this.viewBox = pViewBox;
        this.viewController = pViewController;
        this.candyPrice = 0;
        this.candiesVolume = 0;
    }

    /**
     * Butona tiklandiginda islemleri gerceklestirir.
     */
    addCandyToBox(pCandy) {
        pCandy.piece++;
        this.candyPrice += pCandy.price;
        this.candiesVolume += pCandy.volume;
        this.viewController(this.candyList, this.bagList, this.candyPrice, this.candiesVolume)
    }

    /**
     * Secilen öge ile cagrilan ögenin ayni olup olmadigini sorguluyor.
     */
    checkCandyIds(pItem) {
        this.candyList.map((candy) => {
            if (pItem.target.id === candy.name) this.addCandyToBox(candy);
        })
    }

    /**
     * Her seker butonuna EventListener ekler.
     */
    addEventCandies() {
        document.querySelectorAll('[data-candy]').forEach(candy =>
            candy.addEventListener('click', this.checkCandyIds.bind(this)))
    }

    addEventPayButton() {
        document.querySelector("#payment").addEventListener('click', () => {
            this.showSweetAlert()
        })
    }

    showSweetAlert() {
        Swal.fire({
            title: "<b>All order paid</b>",
            text: "Thank you for choosing us!",
            icon: "success",
            focusConfirm : true,
            confirmButtonText : `<i onclick="location.reload();">Come Again!</i>`
        })
    }

    /**
     * Programi baslatir.
     */
    start() {
        this.viewBox(this.candyList);
        this.addEventCandies();
        this.addEventPayButton();
    }
}