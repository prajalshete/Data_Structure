function findMissingNumber(arr, n) {
   
    const expectedSum = n * (n + 1) / 2;

    
    let actualSum = 0;
    for (let i = 0; i < arr.length; i++) {
        actualSum += arr[i];
    }

   
    return expectedSum - actualSum;
}



const arr = [1, 2, 4, 6,3,7,8]; 
const n = 8;
const missingNumber = findMissingNumber(arr, n);
console.log(missingNumber); 
