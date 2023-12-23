function returnBinary (form) {
    try{
        //input variable
        let inputValue = form.inputbox.value;
        //output variable
        let outputValue = '';
        //validation for data type
        if(Number.isInteger(Number(inputValue))){
            //result variable - this is the base
            let result = inputValue;
            //rests - results are 0/1. It is stored as s string concatenation
            let rest = '';
            //loop iteration 
            while(result>0){
                rest += result % 2;
                result  = Math.floor(result/2);
            }
            //set output -change the order of numbers in rest
            for(let i = rest.length -1; i>-1;i--){
                outputValue += rest[i];
            }
        //print the result     
        document.getElementById('result').innerHTML = 'Výsledek je: ' + outputValue; 
        //log the console
        console.log("Proběhlo prověření čísla "+inputValue + ". Výsledek je: " + outputValue);
        }
        else{
            alert("Toto není celé číslo. Zkuste to znovu.");
            return false;
        }
    }catch(error){
        alert('Šéfe, mně se asi něco nepovedlo');
        console.log("Proběhlo prověření čísla "+inputValue + ". Výsledkem je chyba.");
    }

    }
