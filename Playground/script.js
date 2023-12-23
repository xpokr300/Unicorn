//definice funkci

//1 klasika

function mojeFunkce(parametr){

    console.log(`Klasicka funkce + ${parametr}`);
}


//2 anonymni - ulozim ji do promenne

let mojeAnonymniFunkce = function(parametr){console.log(`Anonymni funkce + ${parametr}`);}


//arrow funkce 1 - misto slova function tam dam tu sipku

let mojePrvniArrowFunkce = (parametr) => {console.log(`Arrow hezka funkce + ${parametr}`);}

//arrow funkce 2 - misto slova function tam dam tu sipku, vice radnova verze

let mojeDruhaArrowFunkce = (parametr) => {
    console.log(`Arrow viceradkova funkce + ${parametr}`);
}

//arrow funkce 3 - mohu zjednodusit, jeden parametr nemusi byt v zavorkach a statement nemusi byt v {} / plati pro jednoradkovy zapis

let mojeEasyArrowFunkce = parametr => console.log(`Arrow matouci funkce + ${parametr}`);

let hovno = 'Ahoj';
mojeFunkce(hovno);
mojeAnonymniFunkce(hovno);
mojePrvniArrowFunkce(hovno);
mojeDruhaArrowFunkce(hovno);
mojeEasyArrowFunkce(hovno);

let i = 1;
setInterval(()=>{console.log('Ahoj ' + i); i++},1000, i);

