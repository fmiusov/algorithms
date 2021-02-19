// Given 1 <= n <= 10, standard input is numerical, etc.
// Boilerplate for testing
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

//input sanitization
process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}


// Most elegant
function elegantFactorial(n) {
    if (n > 1) {
        return n * elegantFactorial(n-1)
    }
    return 1;
}

// Allow for greater inputs
function elegantFactorialInputs(n) {
    if (n < 0) {
        return -1;
    }
    else if (n == 0) {
        return 1;
    }
    else {
        return (n * elegantFactorialInputs(n-1))
    }
}

// Gets the job done

//WHILE
function whileFactorial(n) {
    let result = n;
    if (n === 0 || n === 1)
        return 1;
    while (n > 1) {
        n--;
        result *= n;
    }
    return result;
}

//FOR
function forFactorial(n) {
    if (n === 0 || n === 1)
        return 1;
    for (let i = n - 1; i >= 1; i--) {
        n *= i;
    }
    return n;
}


// Boilerplate for output
function main() {
    const n = +(readLine());
    
    console.log(factorial(n));
}