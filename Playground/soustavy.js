let dec = prompt("Zadejte cislo desitkove soustavy");
let tax = prompt("Zadejte soutavu, do ktere chcete cislo prevest");
result = "";

function trans(dec,tax){
    let result = "";
    let reverse = "";
    let midresult =dec;
    while(midresult>0){
        console.log(midresult%tax);
        result+=midresult%tax;
        console.log(result);
        midresult = Math.floor(midresult/tax);
        console.log(result);
    }

    for(let i = result.length-1;i>=0;i--){
        reverse += result[i];
    }
    result = reverse;
    return result
}   

result = trans(dec,tax);


document.getElementById("result").innerHTML = result;