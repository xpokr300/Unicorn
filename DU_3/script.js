function formHandler(form){
    //helping function
    let inputcount  = form.elements["count"].value;
    let inputMinAge = form.elements["min"].value;
    let inputMaxAge = form.elements["max"].value;
    //call my function
    const dtoIn = {
        "count": inputcount,
        "age": {
            "min": inputMinAge,
            "max": inputMaxAge
        }
    }
    
    const dtoOut = main(dtoIn);
    if (dtoOut == false){
        alert("Toto není celé číslo. Zkuste to znovu.");
    }
    else{
        document.getElementById('result').innerHTML = JSON.stringify(dtoOut);
    }   
}

function main(dtoIn){
    //initialization of variables
    dtoIn = dtoIn;
    if(Number.isInteger(Number(dtoIn.count)) && Number.isInteger(Number(dtoIn.age.max)) && Number.isInteger(Number(dtoIn.age.min))){
        let dtoOut = [];
        let menNames = ["Petr", "Pavel", "Richard", "Jan", "Martin"];
        let womenNames = ["Anna", "Marie", "Jana", "Petra", "Pavla"];
        let menSurnames = ["Pokorný", "Malý","Novák", "Záludný", "Sličný"];
        let womenSurnames = ["Pokorná", "Malá","Nováková", "Záludná", "Sličná"];
        let gender = ["man","woman"];
        let workload = [10,20,30,40];
        let ageMin = dtoIn.age.min;
        let ageMax = dtoIn.age.max;
        let countEmployees = dtoIn.count;
        //
        //main loop
        while(countEmployees>0){
            //gender generating
            let identity = {};

            identity["gender"] = gender[Math.floor(Math.random()*gender.length)];
            //date of birth generating
            let currentYear  = new Date().getFullYear();    
            let minYear = currentYear-ageMax;
            let maxYear = currentYear - ageMin;
            let randomYear = minYear + Math.floor((Math.random() * (maxYear-minYear +1)));
            let randomMonth = Math.floor(Math.random()*12);
            let randomDay = Math.floor(Math.random() * new Date(randomYear,randomMonth+1,0).getDate())+1;
            let randomDate = new Date(randomYear,randomMonth,randomDay);

            identity["birthdate"] = randomDate;
            //given name generating
            if(identity.gender == "man"){

                identity["name"] = menNames[Math.floor(Math.random()*menNames.length)];
            }
            else{

                identity["name"] = womenNames[Math.floor(Math.random()*womenNames.length)];
            }
            //given surname generating
            if(identity.gender == "man"){
                identity["surname"] = menSurnames[Math.floor(Math.random()*menNames.length)];
            }
            else{
                identity["surname"] = womenSurnames[Math.floor(Math.random()*womenNames.length)];
            }
            //workload generating
            identity["workload"] = workload[Math.floor(Math.random()*workload.length)];

            //adding one complete identity the list dtoOut
            dtoOut.push(identity);

            countEmployees --;
            
        }

        console.log(dtoOut);
        return dtoOut; 

    }
    else{
        return false;

    }
    
 
}

