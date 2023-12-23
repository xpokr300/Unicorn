let result;
let num = prompt("Zadejte cislo ");

console.log(num);
function fakt(number) {
  if (number === 0) {
    return 1;
  } else {
    return number * fakt(number - 1);
  }
}

result = fakt(num);
document.getElementById("result").innerHTML = "Faktorial je:" + result;
