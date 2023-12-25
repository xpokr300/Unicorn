var text = prompt("Zadejte text:");
var pismeno = prompt("Zadejte pismeno:");
var result = sifra(text,pismeno);

function generujAbecedu() {
    let abeceda = [];
    for (let i = 0; i < 26; i++) {
      let pismeno = String.fromCharCode(65 + i); // ASCII hodnoty písmen
      abeceda.push(pismeno);
    }
    return abeceda;
  }



function sifra(text,pismeno){

  let abc = generujAbecedu();
  let abcAlt = [];
  let prvniAlt = "";
  let sifrText = "";

  //ziskam index posunu
  for(let i=0;i<abc.length;i++){
    if(abc[i]===pismeno){
      prvniAlt=i;
    }
  }
  //generuju abecedu
  for(let i =0;i<abc.length;i++){

    abcAlt[i]=abc[(i+prvniAlt) % abc.length] ;
  }

  //prepis text
  for(let i=0; i<text.length;i++){
    for(let j=0; j<abc.length;j++){
      if(text[i]===abc[j]){
        console.log("Pismeno z abecedy je "+ abc[j]);
        console.log("Pismeno z novy abecedy je "+ abcAlt[j]);
        sifrText+=abcAlt[j];
      }
    }
  }

  console.log(abc);
  console.log(abcAlt);

  return sifrText;
}


document.getElementById("result").innerHTML = result;