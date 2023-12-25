let result;
let num = prompt("Zadejte cislo ");

console.log(num);
function fakt1(num){
  result = 1;
  while(num>0){
    result *=num;
    num--; 
  }
  return result;
}

function fakt2(num){
  result = 1;
  for(num;num>0;num--){
    result*=num;
    console.log("h");
  }
  return result;
}


result = fakt1(num);
document.getElementById("result").innerHTML = "Faktorial je:" + result;
