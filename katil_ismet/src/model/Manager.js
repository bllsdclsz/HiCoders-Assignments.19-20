class Manager {
    constructor() {
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

    addEventButton() {
        document.querySelector("#login-button").addEventListener('click', () => {
            if (this.views.login.login()) {
                this.showCurrentView(this.views.user);
            }
        })
    }
}