function isOperator(char) {
    return char === '+' || char === '-' || char === '*' || char === '/';
}

function prefixToInfix(prefix) {
    const stack = [];
    for (let i = prefix.length - 1; i >= 0; i--) {
        if (isOperator(prefix[i])) {
            let operand1 = stack.pop();
            let operand2 = stack.pop();
            let infixExp = `(${operand1}${prefix[i]}${operand2})`;
            stack.push(infixExp);
        } else {
            stack.push(prefix[i]);
        }
    }
    return stack.pop();
}

// Example usage:
const prefixExpression = "-+AB*CD";
const infixExpression = prefixToInfix(prefixExpression);
console.log("Prefix Expression:", prefixExpression);
console.log("Infix Expression:", infixExpression);
