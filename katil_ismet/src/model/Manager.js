/**
 * Tüm programi yöneten class.
 */
class Manager {
    constructor() {
        this.customerManager = new CustomerManager();
        this.setViews();
        this.showCurrentView(this.views.login);
    }

    /**
     * Görüntüleri tutar.
     */
    setViews() {
        this.views = {
            login: new LoginView(),
            customer: new CustomerView()
        }
    }

    /**
     * Ekrandaki göstrilecek olan görüntüyü ayarlar.
     */
    showCurrentView(view) {
        Object.values(this.views).forEach(a => a.hide());
        view.show();
    }

    /**
     * Görüntüyü gösterir.
     */
    show(place) {
        place.style.display = '';
    }

    /**
     * Görüntüyü saklar.
     */
    hide(place) {
        place.style.display = 'none';
    }

    /**
     * Login butonuna EventListener ekler.
     */
    addEventButton() {
        document.querySelector("#login-button").addEventListener('click', () => {
            if (this.views.login.login()) {
                this.showCurrentView(this.views.user);
            }
        })
    }

    /**
     * Müsteri listesini DOM'a yazdirir.
     */
    createCustomerList(pCustomerList){
        let customerList = document.querySelector("#customer-list");
        customerList.innerHTML += `${new CustomerView(pCustomerList)}`;
    }

    /**
     * Programi baslatir.
     */
     start() {
        this.addEventButton();
        this.createCustomerList(new CustomerManager());
    }
}