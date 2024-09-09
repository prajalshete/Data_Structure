function spiralOrder(arr){
    let row = 0;
    let col = 0;
    let spiralOrder = [];
for(i=row;i<arr[i];i++){
    for(j=col;j<arr[j];j++){
        if (j >= arr[j].length) {
            j++;
        } 
        spiralOrder.push(arr[i][j]);
    }
}
return spiralOrder; 
}
let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let result = spiralOrder(arr);

console.log(result);