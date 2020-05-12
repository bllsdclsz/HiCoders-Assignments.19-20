class UserView {
    constructor() {
        this.userContainer = document.querySelector("#user-container");
        this.customerManager = new CustomerManager;
        this.addToUserViewDom(this.customerManager.customerArray, this.customerManager.victimArray);
        this.hide();
    }

    show() {
        this.userContainer.style.display = "";
    }

    hide() {
        this.userContainer.style.display = "none";
    }

    addToUserViewDom(pCustomerList, pVictimList) {
        let view = ``
        pCustomerList.forEach((item) => {
            view += `<ul id="${item.name}" class="list-group mt-4">
                        <input type="button" id="${item.name}-button" class="btn btn-dark" data-customer value="${item.name}">`
            pVictimList.forEach(victim => {
                view += `   <li id="${victim.name}" class="list-group-item" style="display:none">
                                <input type="button" class="btn btn-primary float-left" value="Check" data-victim name="victim" id="${victim.name}-checkbox">
                                <input type="button" class="btn btn-warning" data-victim value="${victim.name}">
                                 <div class="card" style="display:none">
                                    <div class="card-body">
                                    <strong>Victim Age:</strong>${victim.age}
                                    <strong>Victim Height:</strong>${victim.height}cm
                                    <strong>Victim Weight:</strong>${victim.weight}kg<br>
                                    <strong>Victim Address:</strong>${victim.city} / ${victim.address} / ${victim.secondaryAddress}<br>
                                    <strong>Victim Job:</strong>${victim.job} / ${victim.companyName}
                                    <strong>Victim Company Address:</strong>   ${victim.companyAddress}/ ${victim.companySecondaryAddress}
                                    </div>
                                </div>
                            </li>`
            })
            view += `</ul>`
        })
        this.userContainer.innerHTML += view;
    }
}