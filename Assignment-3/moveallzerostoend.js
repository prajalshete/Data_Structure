
function moveZerosToEnd(arr) {
   
    const nonZeros = arr.filter(element => element !== 0);
    const zeros = arr.filter(element => element === 0);

    
    return nonZeros.concat(zeros);
}


const arr = [0, 1, 0, 3, 12];
const modifiedArr = moveZerosToEnd(arr);
console.log(modifiedArr);
