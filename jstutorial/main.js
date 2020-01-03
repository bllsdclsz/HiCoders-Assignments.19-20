let mounth = 3;
let day = 12;

if((mounth==1 && day>21) || (mounth==2 && day<19)){
    console.log("Aquarius");
}else if((mounth==2 && day>=19) || (mounth==3 && day<=20)){
    console.log("Pisces");
}else if((mounth==3 && day>=21) || (mounth==4 && day<=19)){
    console.log("Aries");
}else if((mounth==4 && day>=20) || (mounth==5 && day<=20)){
    console.log("Taurus");
}else if((mounth==5 && day>=21) || (mounth==6 && day<=20)){
    console.log("Gemini");
}else if((mounth==6 && day>=21) || (mounth==7 && day<=22)){
    console.log("Cancer");
}else if((mounth==7 && day>=23) || (mounth==8 && day<=22)){
    console.log("Leo");
}else if((mounth==8 && day>=23) || (mounth==9 && day<=22)){
    console.log("Virgo");
}else if((mounth==9 && day>=23) || (mounth==10 && day<=22)){
    console.log("Libra");
}else if((mounth==10 && day>=23) || (mounth==11 && day<=21)){
    console.log("Scorpio");
}else if((mounth==11 && day>=22) || (mounth==12 && day<=21)){
    console.log("Sagittarius");
}else if((mounth==12 && day>=22) || (mounth==1 && day<=19)){
    console.log("Capricorn");
}