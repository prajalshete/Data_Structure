function rotatearray( array) {
    const n =  array.length;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            [ array[i][j],  array[j][i]] = [ array[j][i],  array[i][j]];
        }
    }
    for (let i = 0; i < n; i++) {
        array[i].reverse();
    }
    return  array;
}
let array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let rotatedarray = rotatearray( array);


console.log(rotatedarray);
