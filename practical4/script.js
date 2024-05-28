function MyMathPower(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    console.log(`The ${exponent}th power of ${base} equals ${result}`);
    return result;
}

function MyMathPowerDefault1(base, exponent) {
    base = (base !== undefined) ? base : 2; 
    exponent = (exponent !== undefined) ? exponent : 3; 
    MyMathPower(base, exponent);
}


function MyMathPowerDefault2(base = 2, exponent = 3) {
    MyMathPower(base, exponent);
}

function TestAllFunctions() {
    console.log('Testing MyMathPowerDefault1 with both parameters:');
    MyMathPowerDefault1(2, 4); 

    console.log('Testing MyMathPowerDefault1 with only base provided:');
    MyMathPowerDefault1(4); 

    console.log('Testing MyMathPowerDefault1 with only exponent provided:');
    MyMathPowerDefault1(undefined, 4);

    console.log('Testing MyMathPowerDefault1 with neither parameter provided:');
    MyMathPowerDefault1(); 

    console.log("\n\n\n");

    console.log('Testing MyMathPowerDefault2 with both parameters:');
    MyMathPowerDefault2(2, 4); 

    console.log('Testing MyMathPowerDefault2 with only base provided:');
    MyMathPowerDefault2(4); 

    console.log('Testing MyMathPowerDefault2 with only exponent provided:');
    MyMathPowerDefault2(undefined, 4); 

    console.log('Testing MyMathPowerDefault2 with neither parameter provided:');
    MyMathPowerDefault2(); 
}


TestAllFunctions();

