let primaPartePassword = prompt('Come ti chiami?');
console.log(primaPartePassword)

let secondaPartePassword = prompt('Quale è il tuo cognome?');
console.log(secondaPartePassword)

let terzaPartePassword = prompt('Quale è il tuo colore preferito?');
console.log(terzaPartePassword)

let datiUser = primaPartePassword + secondaPartePassword + terzaPartePassword;
let numero = '21';

let totPassword = datiUser + numero

// let passwordHTML
const spanPwd = document.getElementById('password')

spanPwd.innerHTML = totPassword

 spanPwd.innerHTML = spanPwd.innerHTML + totPassword