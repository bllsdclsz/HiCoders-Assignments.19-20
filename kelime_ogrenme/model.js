/**
 * Her bir soru grubunu class yardimiyla ayri ayri degiskenlere atadim.
 */
const q1 = new Question("What does 'Teller' mean?", ["Tabak", "Telefon", "Kalem", "Yol"], "Tabak");
const q2 = new Question("What does 'Nuss' mean?", ["Sandalye", "Gökyüzü", "Askilik", "Ceviz"], "Ceviz");
const q3 = new Question("What does 'Seife' mean?", ["Yastik", "Sabun", "Tabak", "Ceviz"], "Sabun");
const q4 = new Question("What does 'Erde' mean?", ["Kalemlik", "Tas", "Yeryüzü", "Süt"], "Yeryüzü");
const q5 = new Question("What does 'Tee' mean?", ["Cay", "Süt", "Su", "Kulaklik"], "Cay");
const q6 = new Question("What does 'Wolke' mean?", ["Kitap", "Cay", "Tabak", "Bulut"], "Bulut");
const q7 = new Question("What does 'April' mean?", ["Nisan", "Yaz", "Ördek", "Ceviz"], "Nisan");
const q8 = new Question("What does 'Eis' mean?", ["Hokey", "Buz", "Su", "Sandalye"], "Buz");

/**
 * Atanan degiskenleri bir arrayde siraladim.
 */
const questionArray = [q1, q2, q3, q4, q5, q6, q7, q8];

/**
 * Arrayi metodlar yardimiyla baska bir arrayde döndürdüm.
 */
let randomedArray = questionArray
    .map((a) => ({
        sort: Math.random(),
        value: a
    }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)