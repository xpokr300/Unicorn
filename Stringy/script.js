//tady si projdu string

/*
charAt() - vrátí konkrétní znak na dané pozici (jako například pole)
toUpperCase() - převedení textu na všechna velká písmena
toLowerCase() - převedení textu na malá písmena
indexOf() - vyhledá pozici, na které se vyskytuje určitý znak, nebo dokonce i jiný string, pozor – vyhledává tzv. case-sensitive (rozlišuje velká a malá písmena)
includes() - podobně jako indexOf, ale vrací pouze true nebo false
startsWith() - ověří, zda daný string začíná některým textem
endsWith() - ověří, zda daný string končí některým textem
slice(), substring(), substr() - metody na získání části stringu, které se liší definováním vstupních hodnot
split() - rozdělení textu do pole na základě daného substringu

*/

let slovo = "Nejlepsi slovo je hovno a testuju s nim vsechno";

let objektos = {
    Id:1,
    "Jmeno":"Richard",
    "Prijmeni":"Pokorny"
};

console.log(slovo);
console.log(objektos);

//tady vypisu objekt jako string
JSONstring = JSON.stringify(objektos);
console.log(JSONstring);

//tady si zase ze stringu udelam JSON
JSONjson = JSON.parse(JSONstring);
console.log(JSONjson);

//-------------------------------------------------------

//hledam konkretni znak ve stingu podle indexu
let index = slovo.charAt(1);
console.log(index);

//tady naopak hledam index podle charu 
let char = slovo.indexOf("h");
console.log(char);

let char2 = slovo.indexOf("hovno");
console.log(char2);


//---------------------------------------------------------
//obsahuje konkretni znak? vraci true false

let bol = slovo.includes("hovno");
console.log(bol);

//--------------------------------------------------------

//zvedam 
let upper = slovo.toUpperCase();
console.log(upper);

//snizuju 
let lower = upper.toLowerCase();
console.log(lower);

//-----------------------------------------------------------

//zacina na? - je to case sensitve

let ano = slovo.startsWith("n");
console.log(ano);

//zacina na - osetrim sensitivitu 

let urciteano = slovo.toLowerCase().startsWith("n");
console.log(urciteano);

//konci na?

let takyAno = slovo.endsWith("o");
console.log(takyAno);

//
let urciteAnota = slovo.toUpperCase().endsWith("O");
console.log(urciteAnota);
//---------------------------------------------------------------

//slice - definuju zacatek a konec indexove 
sliceSlovo = slovo.slice(0,10);
console.log(sliceSlovo);

//kdyz to dam naopak tak to nevrati nic 
sliceSlovospatne = slovo.slice(10,0);
console.log("Hovno:" + sliceSlovospatne);

//substring - to samy co slice ale kdyz je start vetis nez end tak je prohodi 

substringSlovo = slovo.substring(0,10);
console.log(substringSlovo);

substringSlovoSpravne = slovo.substring(10,0);
console.log(substringSlovoSpravne);

//substr bere jako druhy parametr delku 

subSlovo = slovo.substr(0,2);
console.log(subSlovo);


//-----------------------------------------------------------------

//jedu split - napriklad radek v csvecku

let splitovaciSLovo = 'Id;Richard;Pokorny;1;64'

let splitSlovo = splitovaciSLovo.split("-");
console.log(splitSlovo);