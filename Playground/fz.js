console.log("Vypočet FZ");

var middle = prompt("Počet středních vozidel: \n");
var big = prompt("Počet velkých vozidel: \n");
var eur = 23.5;
var result= 0;

function vypocetFz(middle,big){
    //only big cars
    if(!middle && big){
        return (9000 + 5000 * (big- 1)) * eur;       
    }
    else if(middle && big){
        return (9000 + 5000 * (big- 1) + 900 * middle) * eur;
    }
    else if(!big && middle){
        return (1800 + 900 * (middle - 1)) * eur;
    }
    else{
        return "Není možné vypočítat";
    }

}

result = vypocetFz(middle,big).toLocaleString();

document.getElementById("result").innerHTML = "Částka k prokázání je:" + result;