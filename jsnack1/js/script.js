// Il software deve chiedere per 5 volte all'utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.


// let userSum = 0;
// for (let i = 0; i < 5; i++) {
//      const userNum = parseInt(prompt("Dimmi un numero"));
//      console.log(userNum);
//      userSum += userNum;
// }
// console.log(userSum);



let counter = 0;
let userSum = 0;

while (counter < 5){
    const userNum = parseInt(prompt("Dimmi un numero"));
    console.log(userNum);
      userSum += userNum;
      counter++;   
}
console.log(userSum);
