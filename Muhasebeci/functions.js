/**
 * Model class Üc degiskeni barindiran modeldir.
 */
class Model {
    constructor(pName, pSurname, pKanton) {
        this.name = pName;
        this.surname = pSurname;
        this.kanton = pKanton;
    }
}
/**
 * Information class bilgilerin alinip islenmesini saglar.
 */
class Information {
    constructor() {
        this.nameInfo = document.querySelector("#name");
        this.surnameInfo = document.querySelector("#surname");
        this.kantonInfo = document.querySelector("#kanton");
        this.button = document.querySelector("#saveButton");
        this.arrayIndex = 0;
    }
    /**
     * pushValue() metodu formda girilen degerleri disarida bulunan bir array gönderir. Her bir form-deger grubu modele sahiptir.
     */
    pushValue() {
        info.push(new Model(`${this.nameInfo.value}`, `${this.surnameInfo.value}`, `${this.kantonInfo.value}`));
    }
    /**
     * render() metodu "Save" buttonuna tiklandiginda bilgileri arraye gonderir, DOM'a yazdirir ve form input alanlarini temizler.
     */
    render() {
        this.button.addEventListener('click', () => {
            if (this.nameInfo.value === "" || this.surnameInfo.value === "" || this.kantonInfo.value === "") {
                return false;
            } else {
                this.pushValue();
                this.addToDom();
                this.cleanBoard();
            }
        })
    }
    /**
     * addToDom() metodu liste olusturarak bilgileri DOM'a yazdirir.
     */
    addToDom() {
        let list = `<li class="list-group-item list-group-item-action"><span>${info[this.arrayIndex].name} ${info[this.arrayIndex].surname} ${info[this.arrayIndex].kanton}</span></li>`
        document.querySelector("#infoList").innerHTML += list;
    }
    /**
     * cleanBoard() metodu formdaki input alanlarini temizler ve indexi her kayitta bir kere arttirir.
     */
    cleanBoard() {
        this.nameInfo.value = "";
        this.surnameInfo.value = "";
        this.kantonInfo.value = "";
        this.arrayIndex++;
    }
}
/**
 * Search class listeden arama yapmamizi saglayan siniftir.
 */
class Search {
    constructor() {
        this.searchBar = document.forms['searchForm'].querySelector("input");
        this.searchArea = document.querySelector("#searchArea ul");
    }
    /**
     * searchItem() metodu arama cubugundan arama yapmamizi saglar.
     */
    searchItem() {
        this.searchBar.addEventListener('keyup', (e) => {
            const term = e.target.value.toLowerCase();
            const persons = this.searchArea.getElementsByTagName("li");
            Array.from(persons).forEach(function (person) {
                const title = person.firstElementChild.textContent;
                if (title.toLowerCase().indexOf(term) != -1) {
                    person.style.display = "block";
                } else {
                    person.style.display = "none";
                }
            })

        })
    }
}
/**
 * Manager class programi baslatmayi ve siralama fonksiyonlarini calistirmayi saglar.
 */
class Manager {
    constructor() {
        this.information = new Information();
        this.search = new Search();
    }
    /**
     * addSortEvent() metodu siralama butonlarina Event ekler.
     */
    addSortEvent() {
        document.querySelector("#sortName").addEventListener('click', this.sortName());
        document.querySelector("#sortSurname").addEventListener('click', this.sortSurname());
        document.querySelector("#sortKanton").addEventListener('click', this.sortKanton());
    }
    /**
     * sortName() metodu isimleri siralamyi saglar.
     */
    sortName() {
        info.sort(function (a, b) {
            if (a.name.toLowerCase() < b.name.toLowerCase())
                return -1;
            if (a.name.toLowerCase() > b.name.toLowerCase())
                return 1;
            return 0;
        });
        this.information.render();
    }
    /**
     * sortSurname() metodu soyisimleri siralamayi saglar.
     */
    sortSurname() {
        info.sort(function (a, b) {
            if (a.surname.toLowerCase() < b.surname.toLowerCase())
                return -1;
            if (a.surname.toLowerCase() > b.surname.toLowerCase())
                return 1;
            return 0;
        });
        this.information.render();
    }
    /**
     * sortKanton() metodu kantonlari siralamayi saglar.
     */
    sortKanton() {
        info.sort(function (a, b) {
            if (a.kanton.toLowerCase() < b.kanton.toLowerCase())
                return -1;
            if (a.kanton.toLowerCase() > b.kanton.toLowerCase())
                return 1;
            return 0;
        });
        this.information.render();
    }
    /**
     * start() metodu programi baslatir.
     */
    start() {
        this.information.render();
        this.search.searchItem();
        this.addSortEvent();
    }
}