function findSaddlePoint(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j <matrix[0].length; j++) {
            const currentElement = matrix[i][j];

            let isMinInRow = true;
            for (let k = 0; k < matrix[0].length; k++) {
                if (matrix[i][k] < currentElement) {
                    isMinInRow = false;
                    break;
                }
            }

            let isMaxInCol = true;
            for (let k = 0; k < matrix.length; k++) {
                if (matrix[k][j] > currentElement) {
                    isMaxInCol = false;
                    break;
                }
            }

            if (isMinInRow && isMaxInCol) {
                return { row: i, col: j, value: currentElement };
            }
        }
    }
    return null;
}
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(findSaddlePoint(matrix));
