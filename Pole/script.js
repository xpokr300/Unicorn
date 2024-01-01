//vypis poli------------------------------------------

let arr = ["a","a","c","d","e"];

let arr2  = new Array ("1","2","3","4","5");

//vypis for loopem
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

console.log("--");
//vypis klasickou funkci 

function vypis(i){
    console.log(i);
}

arr.forEach(vypis);

console.log("--");

//vypis anonymni funkci
arr.forEach(function(i){console.log(i)});

console.log("--");

//vypis zkracenou funkci 

arr.forEach((i)=>{console.log(i)});

console.log("--");


//vypis zkracenou funkci 2

arr.forEach(i=>console.log(i));

//--------------------------------------------------------------
//map - provede jakoukoliv funkci nad kazdym prvek

let arrmap = arr.map(i=>i+" hovno");

console.log(arrmap);

let arrmap2 = arr.map((i)=>{return i+" hovno"});

console.log(arrmap2);

//slice  - vytvori duplicitni pole

let derivace = arrmap.slice();

for(let i=0; i<derivace.length;i++){
    console.log(derivace[i])
}



console.log(derivace);
console.log(arrmap);

console.log(derivace==arrmap);
console.log(arrmap==arrmap);

//filter - filtruje podle dodane funkce a vytvari nove pole

let filter = derivace.filter((i)=>i.includes("a"));
console.log(filter);

//find - filtruje ale vraci jen prvni vyhovujici 

let find = derivace.find((i)=>i.includes("a"));
console.log(find);

//sort - razeni ale pozor , samotna sort() radi podle abecedy, kdyz chci naopak musim pouzit localeCompare a u cisel musi byt alespon funkce a-b

derivace.sort((a,b)=>b.localeCompare(a));
console.log(derivace);

//------------------------------------------------------------ priklady

//Napište algoritmus, který z pole vybere pouze číselné hodnoty. Každou číselnou hodnotu vynásobí 5. Vrátí nové pole s výsledky. Vstup bude následující pole:

let array = [0, "ahoj", 5, 20, null, true, "svět", 185, -15];


let newArray = array.filter((i)=> (typeof(i)==="number")).map((i)=>i*5);
console.log(newArray);

let newArray2 = array.filter((i)=> Number.isInteger(i)).map;
console.log(newArray2);


let neco = array.map((i)=>i+"-hovno");
console.log(neco);



let pro = neco.map((i)=>i.split("-"));
console.log(pro);
//-------------------------------------------------------------

// tri druhy duplikace poli

let pole1 = [0, "ahoj"];
let pole2 = [ 5, 20, null, true];
let pole3 = [185, -15];

// pomoci slice
let slicePole = pole1.slice();
console.log(slicePole);
console.log(pole1===slicePole);

//pomoci concatu
let concatPole = pole1.concat();
console.log(concatPole);
console.log(concatPole===pole1);

//pomoci spread operatoru
let spreadPole = [...pole1];
console.log(spreadPole);
console.log(pole1===spreadPole);

//--------------------------------------------------------------

//operace s polem

let policko = [ 5, 20, null, true];


//push - pridavam na konec , necastejsi 
policko.push("hovno");
console.log(policko);

//unshift - davam na zacatek
policko.unshift(1);
console.log(policko);

//na konkretni index - pozor premazava
policko[10] = "deset";
console.log(policko);

//odbiram na konci 
let odebranoPopem = policko.pop();
console.log(odebranoPopem);
console.log(policko);


//odebiram na zacatku 
let odebranoShiftem = policko.shift();
console.log(odebranoShiftem);
console.log(policko);

//---------------------------------------------------------------