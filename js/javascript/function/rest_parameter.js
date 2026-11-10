
// REST PARAMETER
// DATA CANT RECEIVE ARRAY IN PARAMETER

function dataNaming(dataName, ...data) { 
    let total = 0;
    for (const value of data) {
        total += value;
    }
    console.log(`Total ${dataName}: ${total}`);
}

dataNaming("Score", 80, 90, 70); // Output: Total Score: 240

// SPEAD SYNTAX
dataNaming("Score", ...[80, 90, 70]); // Output: Total Score: 240

// ARGUMENTS OBJECT
function sumArguments() {
    let total = 0;
    for (const value of arguments) {
        total += value;
    }
    return total;
}

const resultArguments = sumArguments(5, 10, 15);
console.log(resultArguments); // Output: 30