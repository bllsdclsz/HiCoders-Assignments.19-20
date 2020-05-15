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
     * Müsterilerin üzerine tiklandiginda maktul listesi acilmasi icin müsteriye EventListener ekler.
     */
    addEventButtonCustomer(){
        document.querySelector("[data-customer]").forEach(customer => 
            customer.addEventListener('click', ()=>{
                if(document.querySelector(`${[data-customer]}>li`).style.display=="none"){
                    document.querySelector(`${[data-customer]}>li`).style.display=="";
                }else{
                    return false;
                }
            }))
    }

    /**
     * Maktullerin üzerine tiklandiginda adres listesi acilmasi icin maktule EventListener ekler.
     */
    addEventButtonVictim(){
        document.querySelector("[data-victim]").forEach(victim => 
            victim.addEventListener('click', ()=>{
                if(document.querySelector(`${[data-victim]}>li`).style.display=="none"){
                    document.querySelector(`${[data-victim]}>li`).style.display=="";
                }else{
                    return false;
                }
            }))
    }

    /**
     * Programi baslatir.
     */
     start() {
        this.addEventButton();
        this.createCustomerList(new CustomerManager());
        this.addEventButtonCustomer();
        this.addEventButtonVictim();
    }
}