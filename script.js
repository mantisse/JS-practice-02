console.log("Test");
console.log("--------1--------");
// 1 uzd - naudojant ciklą atspausdinti penkias eilutes ‘Labas’;

for (let i = 1; i < 6; i++) {
    console.log("Labas");
}

console.log("--------2--------");

// 2 uzd - naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 1 2 3 4 (vienas skaičius vienoje eilutėje);

for (let a = 0; a < 5; a++) {
    console.log(a);
}

console.log("--------3--------");


// 3 uzd - naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 10 20 30 40 (vienas skaičius vienoje eilutėje);

for (let b = 0; b < 5; b++) {
    console.log(b * 10);
}

console.log("--------4--------");

// 4 uzd - naudojant ciklą penkiose eilutėse atspausdinti skaičius 49 50 51 52 53 (vienas skaičius vienoje eilutėje);
for (let c = 49; c < 54; c++) {
    console.log(c);
}

console.log("--------5--------");

// 5 uzd - naudojant ciklą penkiose eilutėse atspausdinti skaičius 4 3 2 1 0 (vienas skaičius vienoje eilutėje);
for (let a = 4; a >= 0; a--) {
    console.log(a);
}

console.log("--------6--------");

// 6 uzd - naudojant ciklą penkiose eilutėse atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje);

for (let i = 0; i < 5; i++) {
    let j = Math.floor(Math.random() * 11);
    console.log(j);
}


// Math.floor(Math.random() * (max - min) ) + min;

console.log("--------7--------");

// 7 uzd - naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5;

let i;
while (i != 5) {
    i = Math.floor(Math.random() * 11);
    console.log(i);
}

console.log("--------8--------");

// 8 uzd - naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 100;

let d;
let sum = 0;
while (sum < 100) {
    d = Math.floor(Math.random() * 11);
    sum += d;
    console.log(d);
}
console.log(sum);

console.log("--------9--------");

// 9 uzd - naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5 arba 7; Suskaičiuoti kiek ciklų prasisuko;

let e;
let f = 0;
while (e != 5 && e != 7) {
    e = Math.floor(Math.random() * 11);
    f++;
    console.log(e);
}
console.log("Ciklas prasisuko x" + f);



// 10 uzd - Vienas colis yra 2,54 cm. Sudarykite programą kuri pateiktų ekrane lentelę nuo 1 iki n centimetrus coliais ir atvirkščiai.
console.log("--------10--------");

// var n;
// const centimeters = inches * 2.54;

// function centimetersToInches (centimeters, inches){
//     n 
//     console.log()
// }



