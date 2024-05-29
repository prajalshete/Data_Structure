function searchnumber(array, target) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[0].length; j++) {
            if (array[i][j] === target) {
                return true; 
            }
        }
    }
    return false;  
}

let array = [
    [10, 20, 30, 40],
    [15, 35, 25, 45]
];

let target = 45;
let result = searchnumber(array, target);
console.log(result);  
