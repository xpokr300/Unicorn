let fz = {
    "TimeStamp":"DateTime",
    "Code":"HttpCode",
    "Finanční způsobilost":
    {
        "Datum prokázání":"DateTime",
        "Stav":"Boolean",
        "Způsob prokázání":"String"
    }
}



let kontroly =  {
    "TimeStamp":"DateTime",
    "Code":"HttpCode",
    "Seznam kontrol":{
        "Počet kontrol": "Integer",
        "Kontrola":{
            
        }

    }

}

console.log(fz);