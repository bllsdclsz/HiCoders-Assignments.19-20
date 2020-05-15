/**
 * Müsteri görüntü classini olusturur.
 */
class CustomerView {
    constructor(pCustomer) {
        this.customer = pCustomer;
        this.page = document.querySelector("#customer-list")
    }

    /**
     * Müsteri listesi sayfasini gösterir.
     */
    show() {
        this.page.style.display = '';
    }

    /**
     * Müsteri listesi sayfasini saklar
     */
    hide() {
        this.page.style.display = 'none';
    }

    /**
     * Müsteri listesini DOM'a yazdirir.
     */
    toString(){
        let customerView = this.customer.customerArray.map(victim => `<li class="list-group-item">${new VictimView(victim)}</li>`).join("");

        return `<ul class="list-group list-group-dark">
                ${customerView}
                </ul>`
    }
}