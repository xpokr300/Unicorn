function formHandler(form){
    //helping function
    let inputcount  = form.elements["count"].value ? form.elements["count"].value: 5;
    let inputMinAge = form.elements["min"].value ? form.elements["min"].value:25;
    let inputMaxAge = form.elements["max"].value ? form.elements["max"].value: 35;
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
        document.getElementById('result').innerHTML  = `Byly použity výchozí hodnoty:<br>Počet: ${inputcount}<br>Minimální věk: ${inputMinAge}<br>Maximální věk: ${inputMaxAge}<br>Výsledek byl vepsán do konzole`;
        console.log(dtoOut);
    }   
}



function main(dtoIn){
    //initialization of variables
    dtoIn = dtoIn;
    let dtoOut;
    let dtoListOfEmployees;
    let dtoStatistics;

    //calling of generateEmployeeData 
    dtoListOfEmployees  = generateEmployeeData (dtoIn);
    dtoStatistics = getEmployeeStatistics(dtoListOfEmployees);
    dtoOut = dtoStatistics;
    dtoOut["sortedByWorkload"] = dtoListOfEmployees.sort((a,b) => a.workload - b.workload);
    return dtoOut; 
}

function generateEmployeeData(dtoIn){
    dtoIn = dtoIn;
    if(Number.isInteger(Number(dtoIn.count)) && Number.isInteger(Number(dtoIn.age.max)) && Number.isInteger(Number(dtoIn.age.min))){
        let returnValue = [];
        let menNames = ["Petr", "Pavel", "Richard", "Jan", "Martin"];
        let womenNames = ["Anna", "Marie", "Jana", "Petra", "Pavla"];
        let menSurnames = ["Pokorný", "Malý","Novák", "Záludný", "Sličný"];
        let womenSurnames = ["Pokorná", "Malá","Nováková", "Záludná", "Sličná"];
        let gender = ["male","female"];
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

            //adding one complete identity the list returnValue
            returnValue.push(identity);

            countEmployees --;
            
        }
        return returnValue; 

    }
    else{
        return false;

    }
    
}

function getEmployeeStatistics(dtoListOfEmployees){
    dtoListOfEmployees=dtoListOfEmployees;
    //inicialization of variables
    let total;
    let workload10=0;
    let workload20=0;
    let workload30=0;
    let workload40=0;
    let averageAge;
    let minAge;
    let maxAge;
    let medianAge;
    let medianWorkload;
    let averageWomenWorkload;
    //return value
    let statistics = {};

    // //clear values;
    total=dtoListOfEmployees.length;

    //getting of values 
    //helping variables definition
    let listOfAges = [];
    let listOfWorkloads = [];
    let listOfFemaleWorkload = [];

    //main loop 
    for(let i = 0; i< total;i++){
        //get list of Ages
        listOfAges.push(new Date().getFullYear() - dtoListOfEmployees[i].birthdate.getFullYear());
        //workload
        //count of each workload
        listOfWorkloads.push(dtoListOfEmployees[i].workload);
        if(dtoListOfEmployees[i].gender == 'female'){
            listOfFemaleWorkload.push(dtoListOfEmployees[i].workload);
        }
        switch(dtoListOfEmployees[i].workload){
            case 10:
                workload10 ++;
                break;
            case 20:
                workload20 ++;
                break;
            case 30:
                workload30 ++;
                break;
            case 40:
                workload40 ++;
                break;
            default:
                break;

        }  
    }

    //get the average age
    averageAge = average(listOfAges);
    //get the average workload
    averageWomenWorkload = average(listOfFemaleWorkload);
    //get min and max age
    listOfAges.sort((a,b)=> a-b);
    minAge = listOfAges[0];
    maxAge = listOfAges[listOfAges.length-1];
    //get median of ages
    medianAge = median(listOfAges);
    //get median of workload
    medianWorkload = median(listOfWorkloads);

    //filling the output of function
    statistics["total"]= total;
    statistics["workload10"] = workload10;
    statistics["workload20"] = workload20;
    statistics["workload30"] = workload30;
    statistics["workload40"] = workload40;
    statistics["averageAge"] = averageAge;
    statistics["minAge"] = minAge;
    statistics["maxAge"] = maxAge;
    statistics["medianAge"] = medianAge;
    statistics["medianWorkload"]= medianWorkload;
    statistics["averageWomenWorkload"] = averageWomenWorkload;

    return statistics;
}

//simple average with 2 decimals
function average(list){
    let sum = 0;
    for(let j=0;j<list.length;j++){
        sum +=list[j];
    }
    return Math.round(sum/list.length *100)/100;   
}

//simple median with 2 decimals
function median(list){
    let median = 0;
    
    if (list.length%2 !==0){
        median =  list[((list.length+1)/2)-1];

    }
    //odd count of employees
    else{
        let firstMiddle = list[(list.length/2)-1];
        let secondMiddle = list[(list.length/2)];
        median=  Math.round((firstMiddle+secondMiddle)/2*100)/100;
    }
    return median;
}