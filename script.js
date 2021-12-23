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
while (sum <= 100) {
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

let n = 15;
for (let m = 1; m <= n; m++) {
    console.log(m + " cm = " + (m / 2.54).toFixed(2) + " in" + "  ||  " + m + " in = " + (m * 2.54).toFixed(2) + " cm");
}


// 11 uzd - Bankas moka 2% metinių palūkanų. Indėlininkas pasidėjo į banką 100e. Sudarykite kasmetinę banko ataskaitą klientui iki n metų. Ataskaitoje pateikite: metus, palūkanas, indėlį.
console.log("--------11--------");



// function 
let metai = 5;
let indelis = 100;
let palukanuNorma = 0.02;
let palukanos;

for (let i = 1; i <= metai; i++) {
    palukanos = (indelis * palukanuNorma);
    indelis = indelis + palukanos;
    console.log("metai " + i + " | palūkanos " + palukanos.toFixed(2) + " | indelio suma " + indelis.toFixed(2));
}


// 12 uzd - Dviženklio skaičiaus dešimčių skaitmuo tris kartus didesnis už vienetų skaitmenį. Jei tuos skaitmenis sukeistume vietomis, tai gautume skaičių, 36 vienetais mažesnį už duotąjį, raskite tą skaičių.

console.log("--------12--------");

for (let i = 10; i < 100; i++) {
    let vienetai = i % 10;
    let desimtys = Math.floor(i / 10);
    if (desimtys == (vienetai * 3) && (vienetai * 10 + desimtys) + 36 == i) {
        console.log(i);
    }
}


// 13 uzd - Raskite keturženklius skaičius, kurių pirmasis skaitmuo yra lyginis, o skaičius nesidalina iš 998 ?
console.log("--------13--------");






// 16. Duotas natūralus skaičius n. Raskite pirmą skaitmenį

console.log("--------16--------");

function skaicius1(skaicius) {
    while (skaicius > 9) {
        skaicius = Math.floor(skaicius / 10);
    }
    console.log("Pirmas skaitmuo = " + skaicius);
}
skaicius1(576556);


// 17. Duotas natūralusis skaičius n. Raskite skaitmenų sumą.
console.log("--------17--------");

function skaitmenuSuma(skaicius) {
    let suma = 0;
    while (skaicius > 0) {
        suma += skaicius % 10; //suma = suma + skaicius % 10
        skaicius = Math.floor(skaicius / 10);
    }
    console.log("Skaitenu suma = " + suma)
}
skaitmenuSuma(125635657553);

// 18. Duotas natūralusis skaičius n. Raskite atvirkščią skaičių duotajam. Pvz.: n=123, atv =321
console.log("--------18--------");

function reverse(skaicius){
    let atgalinisSkaicius = 0;
    while (skaicius > 0){
        let paskutinisSkaitmuo = skaicius % 10;
        atgalinisSkaicius = atgalinisSkaicius * 10 + paskutinisSkaitmuo;
        skaicius = Math.floor(skaicius / 10);
    }
    console.log("Atgalinis skaicius "+atgalinisSkaicius);

}
reverse(8743)

// 19. Duotas natūralus skaičius n. Sudarykite programą, kuri rastų didžiausią ir mažiausią skaitmenį.
// console.log("--------19--------");

// function littleBig(skaicius){
//     let maziausias = 10;
//     let didziausias = -1;
//     while (skaicius > 0){
//         let paskutinisSkaitmuo = skaicius % 10;
//         if (paskutinisSkaitmuo > didziausias){
//             didziausias = paskutinisSkaitmuo;
//         }
//         if (paskutinisSkaitmuo < maziausias){
//             maziausias = paskutinisSkaitmuo;
//         }
//     }
//     console.log("Max = "+didziausias+" || Min = "+maziausias);
// }
// littleBig(654023787);


// 20. Bankas moka indėlininkui p (p>0) procentų palūkanų per metus. Parašykite programą, kuri apskaičiuotų, po kiek metų šimto eurų indėlis taps didesnis už 100000.
// console.log("--------20--------");
// let p = 2;
// let ind = 100;
// let indMax = 100000;

// while (ind < indMax){
//     ind += ind*p/100;
//     metai++;
// }
// console.log(metai);

// 21. Ežere pražydo viena lelija. Kiekvieną dieną žiedų skaičius padvigubėdavo. Parašykite programą, kuri apskaičiuotų: a. Kiek žiedų buvo po n dienų b. Kelintą dieną žiedai užklojo pusę ežero, jeigu visame ežere gali tilpti m žiedų.

// 22. Pavasarį pradėjęs dirbti sode sodininkas pirmąją dieną išgenėjo m1, antrąją – m medžių daugiau negu pirmąją, trečiąją – m medžių daugiau negu antrąją ir t.t. Parašykite programą, skaičiuojančią, kiek dienų d dirbs sodininkas, kol išgenės n sode augančių medžių. Paskutinei dienai gali likti mažiau medžių. Visi duomenys yra sveikojo tipo. Pasitikrinkite: kai m1 = 3, m = 1, n = 16, tuomet kompiuterio ekrane turi būti rodoma: Sodininkas dirbs 4 dienas.






// -----------------------MASYVAI----------------------
// 1. Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.
console.log("--------Masyvai-1--------");

let masyvas = [];
for (let i=0; i<30; i++){
    masyvas[i]=Math.floor(Math.random()*21)+5; //Math.floor(Math.random()*(max-min)+1)+min; [5,25]
}
console.log(masyvas);

// 2. Naudodamiesi 1 uždavinio masyvu:
// a. Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;
console.log("--------Masyvai-2a--------");
let daugiauUz10 = 0;
for (i=0; i<masyvas.length; i++){
    if(masyvas[i]>10){
        daugiauUz10++;
    }
}
console.log("Reiksmiu didesniu uz 10 yra "+daugiauUz10);

// b. Raskite didžiausią masyvo reikšmę ir jos indeksą arba indeksus jeigu yra keli;
console.log("--------Masyvai-2b--------");

let max = 0;
let indeksas = [];

for (let i=0; i<masyvas.length; i++){
    if(masyvas[i] > max){
        max = masyvas[i];
    }
}

for (let i=0; i<masyvas.length; i++){
    if (max === masyvas[i]){
        indeksas.push(i);
    }
}
console.log("Didz. skaicius "+max+"indeksas# "+indeksas);

// c. Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;
// d. Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;
// e. Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;
// f. Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių indekso reikšmių, o kitas iš porinių;
// g. Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;
// h. Suraskite pirmą (mažiausią) indeksą, kurio elemento reikšmė didesnė už 10;

// 3. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.
// 4. Išrūšiuokite 3 uždavinio masyvą pagal abecėlę.
// 5. Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).
// 6. Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 5 uždavinio masyve, bet nėra antrame 5 uždavinio masyve.
// 7. Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 5 uždavinio masyvuose.
// 8. Sugeneruokite 10 skaičių masyvą pagal taisyklę: Du pirmi skaičiai- atsitiktiniai nuo 5 iki 25. Trečias, pirmo ir antro suma. Ketvirtas- antro ir trečio suma. Penktas trečio ir ketvirto suma ir t.t.