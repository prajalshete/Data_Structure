function isOperator(char) {
    return char === '+' || char === '-' || char === '*' || char === '/';
}


function prefixToPostfix(prefix) {
    const stack = [];
    
    for (let i = prefix.length - 1; i >= 0; i--) {
        if (isOperator(prefix[i])) {
            let operand1 = stack.pop();
            let operand2 = stack.pop();
            let postfixExp = operand1 + operand2 + prefix[i];
            stack.push(postfixExp);
        } else {
            stack.push(prefix[i]);
        }
    }
    return stack.pop();
}



const prefixExpression = "-+AB*CD";
const postfixExpression = prefixToPostfix(prefixExpression);
console.log("Prefix Expression:", prefixExpression);
console.log("Postfix Expression:", postfixExpression);
