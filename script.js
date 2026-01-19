function getNumbers() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    return { num1, num2 };
}

function calculate(operator) {
    //get numbers
    const {num1, num2} = getNumbers();

    // input 
    if (isNaN(num1) || isNaN(num2)) {
        return "NOT VALID NUMBERS. DIE";
    }

    let result;
    
    // calculate based on operator input
    switch (operator){
        case 'add':
            // wuh
            result = num1+num2;
            console.log(result);
            break;
        
        case 'subtract':
            // la
            result = num1-num2;
            break;

        case 'multiply':
            // wuh
            result = num1*num2;
            break;

        case 'divide':
            // holy shit

            if (num2!=0){
                result = num1/num2;
            }
            else{
                // message saying u cant divide by 0 idk
                result = "CANNOT DIVIDE BY 0";
            }
            break;

        default:
            result = "INVALID OPERATION" ;
            //i love lesbians
    }

    return result;
}


//          /////   BUTTONS     /////
document.getElementById('add').addEventListener("click", function(){
    // simpler way
    result = calculate("add");
    document.getElementById('result').textContent = "Result: " +result;

    // condensed way 
    document.getElementById('result').textContent = `Result: ${calculate('add')}`;
});

document.getElementById('subtract').addEventListener("click", function(){
    // condensed way 
    document.getElementById('result').textContent = `Result: ${calculate('subtract')}`;
}); 

document.getElementById('multiply').addEventListener("click", function(){
    // condensed way 
    document.getElementById('result').textContent = `Result: ${calculate('multiply')}`;
}); 

document.getElementById('divide').addEventListener("click", function(){
    // condensed way 
    document.getElementById('result').textContent = `Result: ${calculate('divide')}`;
}); 

document.getElementById('clear').addEventListener("click", function(){
    // aa
    document.getElementById('result').textContent = "";
    document.getElementById('num1').textContent = "";
    document.getElementById('num2').textContent = "";

}); 