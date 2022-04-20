// Generatore di "nomi cognomi" casuali: prendendo una lista di nomi e una
// lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.


const naMe = ["Simone", "Francesco", "Luca", "Gianni", "Dende"];
const lastname = ["Verdi", "Pascoli", "Manzoni", "Leopardi"];
console.log(naMe);
console.log(lastname);

const fakeGuests = [];

for (let i = 0; i < 3; i++) {
    let randName = naMe[Math.floor(Math.random() * naMe.length)];
    console.log(randName);
    let randLastName = lastname[Math.floor(Math.random() * lastname.length)];
    console.log(randLastName);

    let fakeName = `${randName}` +` `+ `${randLastName}`;
    console.log(fakeName);

    fakeGuests.push(fakeName);
}

console.log(fakeGuests);


