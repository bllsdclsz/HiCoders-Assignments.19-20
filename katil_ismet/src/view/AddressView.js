/**
 * Adreslerin görüntü classini olusturur.
 */
class AddressView {
    constructor(pAddress){
        this.address = pAddress;
    }

    /**
     * Adresleri DOM'a yazdirir.
     */
    toString(){
        return `<address>
                <p>Home Address: ${this.address.addresses[0]}</p><br>
                <p>Company Address: ${this.address.addresses[1]}</p>
                </address>`
    }
}