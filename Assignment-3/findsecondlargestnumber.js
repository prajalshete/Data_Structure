function findSecondLargest(arr) {
   
    arr.sort((a, b) => b - a);
    
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[0]) {
            return arr[i];
        }
    }
    
    
    return undefined;
}


const arr = [12,35,1,10,34,1];
const secondLargest = findSecondLargest(arr);
console.log(secondLargest);
