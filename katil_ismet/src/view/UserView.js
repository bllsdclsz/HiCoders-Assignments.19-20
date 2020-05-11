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
            pVictimList.map(victim => {
                view += `<ul id="${item.name}" class="list-group">${item.name}
                <li class="list-group-item">${victim.name}
                        <ul class="list-group">
                                <li class="list-group-item">${victim.age}</li>
                                <li class="list-group-item">${victim.height}</li>
                                <li class="list-group-item">${victim.weight}</li>
                                <li class="list-group-item">${victim.city}/ ${victim.address}/ ${victim.secondaryAddress}</li>
                                <li class="list-group-item">${victim.job}/ ${victim.companyName}</li>
                                <li class="list-group-item">${victim.companyAddress}/ ${victim.companySecondaryAddress}</li>
                        </ul>
                    </li>
                </ul>`
            }).join("")
            this.userContainer.innerHTML += view;
        })
    }
}