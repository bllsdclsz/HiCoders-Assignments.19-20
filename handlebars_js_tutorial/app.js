const personObject = {
    persons : [
        {
            firstname : "ahmet",
            lastname  : "bey",
            age       : "30",
            job       : "teacher",
            country   : "Turkey",
            permission: "Accepted"
        },
        {
            firstname : "ali",
            lastname  : "veli",
            age       : "35",
            job       : "police",
            country   : "Germany",
            permission: "Denied"
        },
        {
            firstname : "kamil",
            lastname  : "ekin",
            age       : "36",
            job       : "engineer",
            country   : "England",
            permission: "Denied"
        },
        {
            firstname : "murat",
            lastname  : "ucan",
            age       : "32",
            job       : "chef",
            country   : "United States of America",
            permission: "Accepted"
        },
        {
            firstname : "yasin",
            lastname  : "bayi",
            age       : "41",
            job       : "manager",
            country   : "China",
            permission: "Denied"
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
let singlePerson = {
    person1 : {
        firstname : "bilal",
        lastname : "cilesiz",
        age :"26",
        job : "Web-Dev"},
    person2 : {
        firstname : "brad",
        lastname : "bootstrap",
        age :"44",
        job : "Senior Web-Dev"}
}

let mainDom = document.querySelector("#main-bar")

/**template fonksiyonu icinde obje olusturma */
// let myInfo = "<p>My name is {{firstname}}\n{{lastname}}. I am {{age}} years old and my job is {{job}}.</p>"
// let template = Handlebars.compile(myInfo);
// mainDom.innerHTML = template({firstname:"bilal", lastname:"cilesiz", age:"26", job:"Web-Dev"})

/**template fonksiyonu disindaki bir objeden cagirma */
// let myPets = "<ul>{{#each pet}}<li>My name is {{name}} and {{age}} years old.</li>{{/each}}</ul>"
// let template = Handlebars.compile(myPets)
// mainDom.innerHTML = template(pets);

/**triple-stash örnegi */
// let quoteInfo = "<p>My favorite quote is {{{quote}}}</p>";
// let template = Handlebars.compile(quoteInfo);
// mainDom.innerHTML = template({quote : "<strong><em>'Two things are infinite: the universe and human stupidity; and I'm not sure about the universe'.</em></strong>"})

/**singlePerson objesi-#with örnegi*/
// let myInfo = "{{#with person1}}<p>My name is {{firstname}}\n{{lastname}}. I am {{age}} years old and my job is {{job}}.</p>{{/with}}"
// let template = Handlebars.compile(myInfo);
// mainDom.innerHTML = template(singlePerson);

/**Is basvuru degerlendirme kartlari-#each örnegi */
// let personInfo = `  {{#each persons}}<div class="card">
//                     <div class="card-header">From {{country}}</div>
//                     <div class="card-body">
//                     <p>Firstname:{{firstname}}</p>
//                     <p>Lastname:{{lastname}}</p>
//                     <p>Age:{{age}}</p>
//                     <p>Job:{{job}}</p>
//                     </div>
//                     <div class="card-footer"><h2>Apply:{{permission}}</h2></div>
//                     </div><br>{{/each}}`;
// let template = Handlebars.compile(personInfo);
// mainDom.innerHTML = template(personObject);

/**Youtube yazisina youtube linkini baglama */
// Handlebars.registerHelper("createLink", function(text, url){
//     text = Handlebars.escapeExpression(text);
//     url = Handlebars.escapeExpression(url);
//     let theLink = `<a href="${url}">${text}</a>`;
//     return new Handlebars.SafeString(theLink);
// })

// let linkMaker = `<p>{{createLink "Youtube" "https://www.youtube.com/"}}</p>`
// let template = Handlebars.compile(linkMaker);
// mainDom.innerHTML = template()



