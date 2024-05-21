function reversearray(array){
    const reversearray=[ ];
    for(let i=array.length-1; i>=0;i--){
        reversearray.push(array[i]);
    }
    return reversearray;
}
const Array=[1,2,3,4,5];
const ReverseArray=reversearray(Array);
console.log(ReverseArray);