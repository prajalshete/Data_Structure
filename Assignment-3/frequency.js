function countFrequency(arr) {
    
    const frequencyMap = {};

   
    arr.forEach(element => {
       
        if (frequencyMap[element]) {
            frequencyMap[element]++;
        } else {
           
            frequencyMap[element] = 1;
        }
    });

   
    return frequencyMap;
}


const arr = [1, 2, 1, 3, 4, 2, 1];
const frequencyMap = countFrequency(arr);
console.log(frequencyMap);
