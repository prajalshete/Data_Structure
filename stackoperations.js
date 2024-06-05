const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let stack = [];

function stackOperations() {
    console.log("Select Operations from list.....");
    console.log("\n1. push\n2. pop\n3. peek\n4. isempty\n5. exit");
    rl.question("Enter Your Choice: ", (choice) => {
        console.log("Your choice is: " + choice);
        if (choice === '1') {
            rl.question("Enter Number to push: ", (number) => {
                push(number);
                stackOperations();
            });
        } else if (choice === '2') {
            pop();
            stackOperations();
        } else if (choice === '3') {
            peek();
            stackOperations();
        } else if (choice === '4') {
            isEmpty();
            stackOperations();
        } else if (choice === '5') {
            rl.close();
        } else {
            console.log("Invalid choice, please try again.");
            stackOperations();
        }
    });
}

function push(number) {
    stack.push(number);
    console.log("Pushed number: " + number);
}

function pop() {
    if (stack.length > 0) {
        let number = stack.pop();
        console.log("Popped number: " + number);
    } else {
        console.log("Stack is empty, nothing to pop.");
    }
}

function peek() {
    if (stack.length > 0) {
        console.log("Top number: " + stack[stack.length - 1]);
    } else {
        console.log("Stack is empty.");
    }
}

function isEmpty() {
    if (stack.length === 0) {
        console.log("Stack is empty.");
    } else {
        console.log("Stack is not empty.");
    }
}

stackOperations();
