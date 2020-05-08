/**
 * Islemlerin control edildigi class.
 */
class Controller {
    constructor() {
        this.bigBag = 0;
        this.mediumBag = 0;
        this.smallBag = 0;
    }

    /**
     * Butona tiklandiginda sepete ekler ve sekerlerin sayisi kadar hacmini hesaplayip
     * ne kadar poset gerektigini hesaplar ve sonucu günceller.
     */
    control(pCandyList, pBagList, pPrice, pVolume) {
        let addedCandy = "";
        pCandyList.map((candy) => {
            if (candy.piece !== 0) {
                addedCandy += `<tr><td>${candy.name}</td><td>${candy.piece}</td><td>${candy.price}</td></tr>`
            }
        }).join("");
        document.querySelector("#order-list").innerHTML = addedCandy;

        this.bigBag = Math.floor(pVolume / pBagList[2].volume) * pBagList[2].price;
        pVolume / pBagList[2].volume;
        if (pVolume < pBagList[1].volume && pVolume > pBagList[0].volume) {
            this.mediumBag = Math.ceil(pVolume / pBagList[1].volume) * pBagList[1].price
            this.smallBag = 0;
        } else {
            this.mediumBag = Math.floor(pVolume / pBagList[1].volume) * pBagList[1].price;
            pVolume / pBagList[1].volume;
            this.smallBag = Math.ceil(pVolume / pBagList[0].volume) * pBagList[0].price;
        }
        let totalBagPrice = this.bigBag + this.mediumBag + this.smallBag;
        let total = totalBagPrice + pPrice;

        document.querySelector("#total-price").innerHTML = total;
    }
}