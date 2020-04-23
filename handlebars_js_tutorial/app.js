const personObject = {
    persons : [
        {
            firstname : "ahmet",
            lastname  : "bey",
            age       : "30",
            job       : "teacher",
        },
        {
            firstname : "ali",
            lastname  : "veli",
            age       : "35",
            job       : "police",
        },
        {
            firstname : "kamil",
            lastname  : "ekin",
            age       : "36",
            job       : "engineer",
        },
        {
            firstname : "murat",
            lastname  : "ucan",
            age       : "32",
            job       : "chef",
        },
        {
            firstname : "yasin",
            lastname  : "bayi",
            age       : "41",
            job       : "manager",
        }
]};

const pets = {
        pet:[{
            name : "chipchap",
            age : 2
        },
        {
            name : "reynar",
            age : 5
        },
        {
            name : "kaputer",
            age : 4
        }]
}
let mainDom = document.querySelector("#main-bar")

// let myInfo = "<p>My name is {{firstname}}\n{{lastname}}. I am {{age}} years old and my job is {{job}}.</p>"
// let template = Handlebars.compile(myInfo);
// mainDom.innerHTML = template({firstname:"bilal", lastname:"cilesiz", age:"26", job:"Web-Dev"})

// let myPets = "<ul>{{#each pet}}<li>My name is {{name}} and {{age}} years old.</li>{{/each}}</ul>"
// let template = Handlebars.compile(myPets)
// mainDom.innerHTML = template(pets);

// let quoteInfo = "<p>My favorite quote is {{{quote}}}</p>";
// let template = Handlebars.compile(quoteInfo);
// mainDom.innerHTML = template({quote : "<strong><em>'Two things are infinite: the universe and human stupidity; and I'm not sure about the universe'.</em></strong>"})

let personInfo = /**Bir tane card hazirla */
