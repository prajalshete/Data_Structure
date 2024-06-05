function isOperator(char) {
    return char === '+' || char === '-' || char === '*' || char === '/';
}


function postfixToInfix(postfix) {
    const stack = [];

    
    for (let i = 0; i < postfix.length; i++) {
        if (isOperator(postfix[i])) {
            let operand2 = stack.pop();
            let operand1 = stack.pop();
            let infixExp = `(${operand1}${postfix[i]}${operand2})`;
            stack.push(infixExp);
        } else {
            stack.push(postfix[i]);
        }

    }
    return stack.pop();
}



const postfixExpression = "AB+CD-*";
const infixExpression = postfixToInfix(postfixExpression);
console.log("Postfix Expression:", postfixExpression);
console.log("Infix Expression:", infixExpression);
