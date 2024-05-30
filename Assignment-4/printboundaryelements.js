function printBoundary(matrix) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;

    if (matrix.length === 0 || matrix[0].length === 0) {
        return; 
    }

    for (let i = 0; i <matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (i === 0 || i === matrix.length - 1 || j === 0 || j ===matrix[0].length - 1) {
                console.log(matrix[i][j]);
            }
        }
    }
}

const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

printBoundary(matrix);
