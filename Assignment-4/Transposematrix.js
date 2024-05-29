function transposeMatrix(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;
    
    let transposedMatrix = [];
    for (let i = 0; i < m; i++) {
        transposedMatrix.push([]);
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            transposedMatrix[j][i] = matrix[i][j];
        }
    }
    return transposedMatrix;
}
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let transposedMatrix = transposeMatrix(matrix);
console.log("Transposed Matrix:");
console.log(transposedMatrix);
