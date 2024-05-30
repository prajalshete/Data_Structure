function isSubset(arr1, arr2) {
    
    for (let i = 0; i < arr2.length; i++) {
        let found = false;
       
        for (let j = 0; j < arr1.length; j++) {
            if (arr1[j] === arr2[i]) {
                found = true;
                break;
            }
        }
       
        if (!found) {
            return false;
        }
    }
    
    return true;
}
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 4, 5,7];
console.log(isSubset(arr1, arr2)); 
