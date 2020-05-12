class Manager {
    constructor() {
        this.customerManager = new CustomerManager;
        this.setViews();
        this.showCurrentView(this.views.login);
        this.addEventButton();
    }

    setViews() {
        this.views = {
            login: new LoginView(),
            user: new UserView()
        }
    }

    showCurrentView(view) {
        Object.values(this.views).forEach(a => a.hide());
        view.show();
    }


    show(place) {
        place.style.display = '';
    }

    hide(place) {
        place.style.display = 'none';
    }

    addEventButton() {
        document.querySelector("#login-button").addEventListener('click', () => {
            if (this.views.login.login()) {
                this.showCurrentView(this.views.user);
            }
        })
    }

    addEventToCustomers() {
        document.querySelectorAll(`[data-customer]`).forEach(item =>
            item.addEventListener('click', () => {
                if (item.nextElementSibling.style.display == '') {
                    this.hide(item.nextElementSibling)
                } else if (item.nextElementSibling.style.display == 'none') {
                    this.show(item.nextElementSibling)
                }
            })
        )
    }

    addEventToVictims() {
        document.querySelectorAll(`[data-victim]`).forEach(item =>
            item.addEventListener('click', () => {
                if (item.nextElementSibling.style.display == '') {
                    this.hide(item.nextElementSibling)
                } else if (item.nextElementSibling.style.display == 'none') {
                    this.show(item.nextElementSibling)
                }
            })
        )
    }

    addEventToCheckboxes() {
        let checkbox = document.querySelectorAll(`[data-victim]>input[type=checkbox]`);
        checkbox.forEach(item => {
                item.addEventListener('click', ()=>{
                    item.parentElement.setAttribute(".checkedbox")
                })
                console.log(checkbox)
            })
        }

        start() {
            this.addEventToCustomers();
            this.addEventToVictims();
            this.addEventToCheckboxes();
        }
    }