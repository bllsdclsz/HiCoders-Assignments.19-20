/**
 * Maktul görüntü classini olusturur.
 */
class VictimView{
    constructor(pVictim){
        this.victim = pVictim;
    }

    /**
     * Maktulleri DOM'a yazdirir.
     */
    toString(){
        let victimAddress = this.victim.victims.map(address => `<li class="list-group-item">${new AddressView(address)}</li>`).join("");

        return `<ul class="list-group" data-victim>
                    ${victimAddress}
                </ul>`
    }
}