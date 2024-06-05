function isOperator(char) {
    return char === '+' || char === '-' || char === '*' || char === '/';
}

function postfixToPrefix(postfix) {
    const stack = [];
    for (let i = 0; i < postfix.length; i++) {
        if (isOperator(postfix[i])) {
            let operand2 = stack.pop();
            let operand1 = stack.pop();
            let prefixExp = postfix[i] + operand1 + operand2;
            stack.push(prefixExp);
        } else {
            stack.push(postfix[i]);
        }
    }
    return stack.pop();
}


const postfixExpression = "AB+CD-*";
const prefixExpression = postfixToPrefix(postfixExpression);
console.log("Postfix Expression:", postfixExpression);
console.log("Prefix Expression:", prefixExpression);
