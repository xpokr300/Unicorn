function formHandler(form) {
  //helping function
  let inputcount = form.elements["count"].value
    ? form.elements["count"].value
    : 5;
  let inputMinAge = form.elements["min"].value
    ? form.elements["min"].value
    : 25;
  let inputMaxAge = form.elements["max"].value
    ? form.elements["max"].value
    : 35;
  const dtoIn = {
    count: inputcount,
    age: {
      min: inputMinAge,
      max: inputMaxAge,
    },
  };
  //data type validation - Count has to be integer, Min and Max age is a number.
  if(Number.isInteger(Number(inputcount)) && !Number.isNaN(Number(inputMinAge)) && !Number.isNaN(Number(inputMaxAge))){
      document.getElementById(
        "result"
    ).innerHTML = `V případě, že jste vynechali nějaké vstupy, byly použity výchozí hodnoty:<br>Počet: ${inputcount}<br>Minimální věk: ${inputMinAge}<br>Maximální věk: ${inputMaxAge}<br>Výsledek byl vepsán do konzole`;
    const dtoOut = main(dtoIn);
    console.log(dtoOut);
  }
  else {
    alert("Špatně zadané vstupy. Zkuste to znovu.");
  }
}


function main(dtoIn){
  let employeeData = generateEmployeeData(dtoIn);
  let dtoOut = getEmployeeChartContent(employeeData);
  return dtoOut;
}

function getEmployeeChartContent(dtoIn){
  let dtoOut = {};
  //variable definition
  let names = {
    "all":{},
    "male":{},
    "female":{},
    "femalePartTime":{},
    "maleFullTime":{}
  };

  //main loop object names{}
  for(let i=0;i<dtoIn.length;i++){
    //object all
    let name = dtoIn[i].name
    insertOrCreate(name,names.all);
    //object male
    if(dtoIn[i].gender ==='male'){
      insertOrCreate(name,names.male);
      //workload decision / FIXME - fulltime workload should be editable as enumeration, not hardcoded.
      if(dtoIn[i].workload === 40){
        insertOrCreate(name,names.maleFullTime);
      }
    }
    //object female
    else{
      insertOrCreate(name,names.female);
      //workload decision / FIXME - fulltime workload should be editable as enumeration, not hardcoded.
      if(dtoIn[i].workload!== 40){
        insertOrCreate(name,names.femalePartTime);
      }
    }
  };

  //object chartData {}
  let chartData = {
    "all":[],
    "male":[],
    "female":[],
    "femalePartTime":[],
    "maleFullTime":[]
  };
  //transfer of all {}
  fromObjectToArray(names.all,chartData.all);
  //transfer of male {}
  fromObjectToArray(names.male,chartData.male);
  //transfer of female {}
  fromObjectToArray(names.female,chartData.female);
  //transfer of femalePartTime {}
  fromObjectToArray(names.femalePartTime,chartData.femalePartTime);
  //transfer of maleFullTime {}
  fromObjectToArray(names.maleFullTime,chartData.maleFullTime);

  //concat of objects to output
  dtoOut.names = names;
  dtoOut.chartData = chartData;
  return dtoOut;
}

function  fromObjectToArray(source,destination){
  for(let key in source){
    let input = {};
    input.label = key;
    input.value = source[key];
    destination.push(input);
  }
  return true;
}

//increase the count of  input value in the object or create if missing with value 1
function insertOrCreate(input,destination){
  if(destination[input]){
    destination[input] += 1;
  }
  else{
    destination[input] = 1;
  }
  return true;
}

function getEmployeesDataStatistic(dtoIn) {
  //initialization of variables
  let dtoOut;
  let dtoListOfEmployees;
  let dtoStatistics;

  //calling of generateEmployeeData
  dtoListOfEmployees = generateEmployeeData(dtoIn);
  //calling of getEmployeeStatistics
  dtoStatistics = getEmployeeStatistics(dtoListOfEmployees);
  //adding statistics to dtoOut
  dtoOut = dtoStatistics;
  //adding list of employees to dtoOut
  dtoOut["sortedByWorkload"] = dtoListOfEmployees.sort(
    (a, b) => a.workload - b.workload
  
  );
  return dtoOut;
}

function generateEmployeeData(dtoIn) {
  let dtoOut = [];
  let menNames = ["Petr", "Antonín", "Richard", "Jiří", "Matyáš"];
  let womenNames = ["Anna", "Šárka", "Kristýna", "Anna-Marie", "Pavla"];
  let menSurnames = ["Pokorný", "Malý", "Novák", "Záludný", "Sličný"];
  let womenSurnames = ["Pokorná", "Malá", "Nováková", "Záludná", "Sličná"];
  let gender = ["male", "female"];
  let workload = [10, 20, 30, 40];
  let ageMin = dtoIn.age.min;
  let ageMax = dtoIn.age.max;
  let countEmployees = dtoIn.count;
  //main loop
  while (countEmployees > 0) {
    //gender generating
    let identity = {};

    identity["gender"] = gender[Math.floor(Math.random() * gender.length)];
    //date of birth generating
    let currentYear = new Date().getFullYear();
    let minYear = currentYear - ageMax;
    let maxYear = currentYear - ageMin;
    let randomYear =
      minYear + Math.floor(Math.random() * (maxYear - minYear + 1));
    let randomMonth = Math.floor(Math.random() * 12);
    let randomDay =
      Math.floor(
        Math.random() * new Date(randomYear, randomMonth + 1, 0).getDate()
      ) + 1;
    let randomDate = new Date(randomYear, randomMonth, randomDay);

    identity["birthdate"] = randomDate;
    //given name generating
    if (identity.gender == "male") {
      identity["name"] =
        menNames[Math.floor(Math.random() * menNames.length)];
    } else {
      identity["name"] =
        womenNames[Math.floor(Math.random() * womenNames.length)];
    }
    //given surname generating
    if (identity.gender == "male") {
      identity["surname"] =
        menSurnames[Math.floor(Math.random() * menNames.length)];
    } else {
      identity["surname"] =
        womenSurnames[Math.floor(Math.random() * womenNames.length)];
    }
    //workload generating
    identity["workload"] =
      workload[Math.floor(Math.random() * workload.length)];

    //adding one complete identity the list dtoOut
    dtoOut.push(identity);

    countEmployees--;
  }
  return dtoOut;
}

function getEmployeeStatistics(dtoListOfEmployees) {
  //inicialization of variables
  let total = dtoListOfEmployees.length;
  let workload10 = 0;
  let workload20 = 0;
  let workload30 = 0;
  let workload40 = 0;
  let listOfAges = [];
  let listOfWorkloads = [];
  let listOfFemaleWorkload = [];
  //return value
  let statistics = {};

  //main loop
  for (let i = 0; i < total; i++) {
    //get list of Ages
    listOfAges.push(
      new Date().getFullYear() - dtoListOfEmployees[i].birthdate.getFullYear()
    );
    //workload
    //count of each workload
    listOfWorkloads.push(dtoListOfEmployees[i].workload);
    if (dtoListOfEmployees[i].gender == "female") {
      listOfFemaleWorkload.push(dtoListOfEmployees[i].workload);
    }
    switch (dtoListOfEmployees[i].workload) {
      case 10:
        workload10++;
        break;
      case 20:
        workload20++;
        break;
      case 30:
        workload30++;
        break;
      case 40:
        workload40++;
        break;
      default:
        break;
    }
  }
  //set the total of employees
  statistics.total = total;
  //get the average age
  statistics.averageAge = average(listOfAges);
  //get the average workload
  statistics.averageWomenWorkload = average(listOfFemaleWorkload);
  //get min and max age
  listOfAges.sort((a, b) => a - b);
  statistics.minAge = listOfAges[0];
  statistics.maxAge = listOfAges[listOfAges.length - 1];
  //get median of ages
  statistics.medianAge = median(listOfAges);
  //get median of workload
  statistics.medianWorkload = median(listOfWorkloads);
  //filling the workloads from variables
  statistics.workload10 = workload10;
  statistics.workload20= workload20;
  statistics.workload30 = workload30;
  statistics.workload40 = workload40;

  return statistics;
}

//simple average with 2 decimals
function average(list) {
  let sum = 0;
  for (let j = 0; j < list.length; j++) {
    sum += list[j];
  }
  return Math.round((sum / list.length) * 100) / 100;
}

//simple median with 2 decimals
function median(list) {
  let median = 0;
  //even count of numbers
  if (list.length % 2 !== 0) {
    median = list[(list.length + 1) / 2 - 1];
  }
  //odd count of numbers
  else {
    let firstMiddle = list[list.length / 2 - 1];
    let secondMiddle = list[list.length / 2];
    median = Math.round(((firstMiddle + secondMiddle) / 2) * 100) / 100;
  }
  return median;
}
