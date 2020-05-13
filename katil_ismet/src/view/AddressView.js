class AddressView {
    #address = null;
    constructor(pAddress){
        this.#address = pAddress;
    }

    toString(){
        return `<address>
                <p>Home Address: ${this.#address.secondaryAddress, this.#address.address, this.#address.city}</p><br>
                <p>Company Address: ${this.#address.secondaryAddress, this.#address.address, this.#address.city}</p>
                </address>`
    }
}