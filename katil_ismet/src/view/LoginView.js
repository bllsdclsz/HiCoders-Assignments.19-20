class LoginView {
    constructor() {
        this.userName = "ismet";
        this.password = "password";
        this.loginPassword = document.querySelector("#login");
        this.loginContainer = document.querySelector("#login-container");
        this.show();
    }

    show() {
        this.loginContainer.style.display = "";
    }

    hide() {
        this.loginContainer.style.display = "none";
    }

    getPassword() {
        const password = this.loginPassword.value;
        return password;
    }

    login() {
        if (this.getPassword() != this.password) {
            this.addToDom('.message', `Lütfen gecerli sifeyi giriniz.`)
            return false
        } else {
            return true;
        }
    }

    addToDom(block, value) {
        return document.querySelector(block).innerHTML = value;
    }
}