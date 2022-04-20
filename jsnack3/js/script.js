// Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente.

const userNum = parseInt(prompt("Dimmi un numero"));
console.log(userNum);


let listNum = [];
for (let i = 0; i <= userNum ; i++) {
    listNum.push(i);  
}
console.log(listNum);

let cube = [];
for (let i = 0; i <= userNum; i++) {
    cube.push(i ** 3);
}
console.log(cube);