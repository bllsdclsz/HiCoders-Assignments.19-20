class Login{
    constructor(){
        this.userName = "ismet";
        this.password = "password";
        this.loginPassword = document.querySelector("#login");
        this.loginContainer = document.querySelector("#login-container");
        this.login();
    }

    show(){
        this.loginContainer.style.display = "block";
    }

    hide(){
        this.loginContainer.style.display = "none";
    }

    getPassword(){
        const password = this.loginPassword.value;
        if(!password){
            return this.loginContainer.innerHTML += "Lütfen gecerli sifeyi giriniz.";
        }
        return password;
    }

    login(){
        if(this.getPassword()!=this.password){
            return this.loginContainer.innerHTML += "Baska zaman."
        }else{
            return this.hide();
        }
    }
}