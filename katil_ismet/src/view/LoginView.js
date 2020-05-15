/**
 * Login görüntü classini olusturur.
 */
class LoginView {
    constructor() {
        this.userName = "ismet";
        this.password = "password";
        this.loginPassword = document.querySelector("#login");
        this.loginContainer = document.querySelector("#login-container");
        this.show();
    }

    /**
     * Login görüntü classini gösterir. 
     */
    show() {
        this.loginContainer.style.display = "";
    }

    /**
     * Login görüntü classini saklar.
     */
    hide() {
        this.loginContainer.style.display = "none";
    }

    /**
     * Girilen sifreyi döndürür.
     */
    getPassword() {
        const password = this.loginPassword.value;
        return password;
    }

    /**
     * Sisteme girisi saglar.
     */
    login() {
        if (this.getPassword() != this.password) {
            this.addToDom('.message', `Lütfen gecerli sifeyi giriniz.`)
            return false
        } else {
            return true;
        }
    }

    /**
     * Girilen yer ve degere göre DOM'a yazdirir.
     */
    addToDom(block, value) {
        return document.querySelector(block).innerHTML = value;
    }
}