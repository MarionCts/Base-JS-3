// Exo 1

const nom = "Jean"
let age = 25
let ageFutur = 5

console.log(`${nom} a ${age} ans aujourd'hui, mais dans 5 ans il aura ${age + ageFutur} ans.`)

// Exo 2

let a = 10
let b = 20
let somme = a + b

console.log(somme);

somme = a * b

console.log(somme);

// Exo 3

let nombre = prompt("Entrez un nombre :")

if (nombre > 10) {
    console.log(`${nombre} est supérieur à 10.`);
} else {
    console.log(`${nombre} est plus petit ou égal à 10.`);
}

// Exo 4

const numero = 4

if (numero % 2 === 0) {
    console.log(`${numero} est un chiffre pair.`);
} else {
    console.log(`${numero} est un chiffre impair.`);
}

// Exo 5

let ageUtilisateur = prompt("Quel âge as-tu ?")

if (ageUtilisateur < 18) {
    console.log(`Tu es mineur.`);
} else if (ageUtilisateur < 65) {
    console.log(`Tu es adulte.`);
} else {
    console.log(`Tu es senior.`);
}

Exo 6

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Exo 7

let nombreUtilisateur = prompt("Entrez un chiffre de votre choix :")

for (let i = 1; i <= 10; i++) {
    console.log(nombreUtilisateur * i);
}

// Exo 8

const chiffreInitial = 1
let chiffreBoucle = chiffreInitial + 1

for (i = 1; i <= 100 ; i++) {
    console.log(chiffreBoucle * i);
}

// Exo 9

let chiffreDevine = prompt("Devine un chiffre entre 1 et 10 :")

function chiffreAleatoire(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let chiffreCorrect = chiffreAleatoire(1, 10);

if (chiffreDevine == chiffreCorrect) {
    console.log(`C'était bien le ${chiffreCorrect}, c'est gagné !`);
} else {
    console.log(`Eh non, c'était le ${chiffreCorrect}, essaie encore !`);
}

// Exo 10

    for (let i = 0; i <= 50; i++) {
        if (i % 2 === 0) {
        console.log(i);
        }
    }

    // Exo 11

for (let i = 10; i>= 0; i--) {
    console.log(i);
    if (i === 0) {
        console.log("C'est terminé !");
    }
}

// Exo 12

let premierNombre = prompt("Donne-moi un premier nombre :")
let secondNombre = prompt("Donne-moi un deuxième nombre :")
let choixOperation = prompt("Choisis entre effectuer une addition, une soustraction, une multiplication ou une division :")

const operations = {
    addition: (premierNombre, secondNombre) => premierNombre + secondNombre,
    soustraction: (premierNombre, secondNombre) => premierNombre - secondNombre,
    multiplication: (premierNombre, secondNombre) => premierNombre * secondNombre,
    division: (premierNombre, secondNombre) => premierNombre / secondNombre,
};

if (operations[choixOperation]) {
    console.log(`Le résultat de l'opération demandée est ${operations[choixOperation] (premierNombre, secondNombre)}`);
} else {
    console.log(`Je n'ai pas compris ta demande, reformule-la.`);
    
}

// Exo 13

const nombres = [12, 45, 3, 22, 34, 90];

console.log(`Le plus grand nombre est ${Math.max(...nombres)}`);

// Exo 13 bonus

function plusieursNbAleatoires(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const nombresAleatoires = [];

for (let i = 1 ; i <= 50 ; i++) {
    nombresAleatoires.push(plusieursNbAleatoires(1, 500));
}

console.log(nombresAleatoires);

console.log(`Le plus grand nombre est ${Math.max(...nombresAleatoires)}`);