// Sort an Array of 0s, 1s, and 2s

// You are given an array arr consisting only of 0s, 1s, and 2s. The task is to sort the array in increasing order in linear time (i.e., O(n)) without using any extra space. This means you need to rearrange the array in-place.

// Input:
// An integer array arr of size n where each element is either 0, 1, or 2.
// Example : arr = [0, 1, 2, 1, 0, 2, 1, 0]

// Output:
// The sorted array, arranged in increasing order of 0s, 1s, and 2s.
// Example: [0, 0, 0, 1, 1, 1, 2, 2]

// Constraints:
// The input array may have up to 105 elements.
// The values in the array are limited to 0, 1, and 2.
// The sorting algorithm must operate in linear time (i.e., O(n)) and in-place (i.e., without using extra space beyond a few variables).

// Approach:
// You can solve this problem using the Dutch National Flag Algorithm developed by Edsger Dijkstra.

// Test Cases:
// Test Case 1
// Input: [0, 1, 2, 1, 0, 2, 1, 0]
// Output: [0, 0, 0, 1, 1, 1, 2, 2]
// Test Case 2:
// Input: [2, 2, 2, 2]
// Output: [2, 2, 2, 2]
// Test Case 3:
// Input: [0, 0, 0, 0]
// Output: [0, 0, 0, 0]
// Test Case 4:
// Input: [1, 1, 1, 1]
// Output: [1, 1, 1, 1]
// Test Case 5:
// Input: [2, 0, 1]
// Output: [0, 1, 2]
// Test Case 6:
// Input: []
// Output: []

// Edge Cases:
// Empty array.
// Array with all elements the same (all 0s, all 1s, or all 2s).
// Array already sorted.




function sortArray(arr) {
    let l = 0;
    let m = 0;
    let h = arr.length - 1;

    
    while (m <= h) {
        if (arr[m] === 0) {
            [arr[l], arr[m]] = [arr[m], arr[l]];  
            l++;
            m++;
        } else if (arr[m] === 1) {
            m++;  
        } else {
            [arr[m], arr[h]] = [arr[h], arr[m]];  
            h--;
        }
    }
    return arr;
}

// Test cases
console.log(sortArray([0, 1, 2, 1, 0, 2, 1, 0])); 
console.log(sortArray([2, 2, 2, 2]));            
console.log(sortArray([0, 0, 0, 0]));            
console.log(sortArray([1, 1, 1, 1]));           
console.log(sortArray([2, 0, 1]));              
console.log(sortArray([]));                      
