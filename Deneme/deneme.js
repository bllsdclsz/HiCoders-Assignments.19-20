let enterInputElement = document.querySelector("#enter");
enterInputElement.addEventListener("click", clickEventHandler)

let inputElement = document.querySelector("#sayi");
inputElement.addEventListener("focus", focusEventHandler)


function clickEventHandler(event){
    let sayiInputElement = document.querySelector("#sayi");
    alert(sayiInputElement.value);
}

function focusEventHandler(event){
    let sayiInputElement = document.querySelector("#sayi");
    sayiInputElement.value = "";
}