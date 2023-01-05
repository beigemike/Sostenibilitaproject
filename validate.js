
let inputList = [];

function emailValidate(myInput){
    let myInputValue = myInput.value.trim();
    let myInputCheck = document.getElementById(myInput.id + "_check");
    let emailRegex = /\S+@\S+\.\S+/;
    if(myInputValue == undefined || myInputValue == "" || !emailRegex.test(myInputValue)){
        myInputCheck.classList.remove("okCheck");
        myInputCheck.classList.add("errorCheck");
        myInputCheck.innerHTML = "Inserisci un indirizzo e-mail valido.";
        inputList[myInput.id] = 0;
        document.getElementById("validate").disabled = true
    } else {
        myInputCheck.classList.remove("errorCheck");
        myInputCheck.classList.add("okCheck");
        myInputCheck.innerHTML = "Indirizzo e-mail valido.";
        inputList[myInput.id] = 1;
        document.getElementById("validate").disabled = false
    }
}