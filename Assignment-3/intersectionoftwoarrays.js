function intersection(arr1, arr2) {
    const result = [];

    
    for (let i = 0; i < arr1.length; i++) {
       
        if (arr2.includes(arr1[i]) && !result.includes(arr1[i])) {
            result.push(arr1[i]);
        }
    }

    return result;
}


const array1 = [1, 2, 2, 1];
const array2 = [2, 2];
const result = intersection(array1, array2);
console.log(result);
