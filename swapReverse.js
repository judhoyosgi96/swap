'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'almostSorted' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function almostSorted(arr) {
    // Write your code here
    var almostSorted_true = false;
    var arr_aux = new Array;
    var arr_sorted = JSON.stringify([...arr].sort(function(a, b){return a - b}));
    for (var i = 0; i < arr.length-1; i++) {   
        for (var j = i+1; j < arr.length; j++) {
            arr_aux = [...arr];                        
            [arr_aux[i], arr_aux[j]] = [arr_aux[j], arr_aux[i]];  //Swap 
            if (JSON.stringify(arr_aux) === arr_sorted){
                almostSorted_true = true;
                console.log('yes');
                console.log('swap ' + (i+1) + ' ' + (j+1) );
                break;
            }
            
            arr_aux = [...arr];
            arr_aux = [].concat(arr_aux.slice(0,i),  //Reverse
                        arr_aux.slice(i,j+1).reverse(), 
                        arr_aux.slice(j+1));
                         
            if (JSON.stringify(arr_aux) === arr_sorted){
                almostSorted_true = true;
                console.log('yes');
                console.log('reverse ' + (i+1) + ' ' + (j+1) );
                break;
            }
        }
    }
    
    if (almostSorted_true == false){
        console.log('no');
    }
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    almostSorted(arr);
}
