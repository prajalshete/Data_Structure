let row=5;
let pattern="";
for(let i=1; i<=row; i++){
    for(let j=1; j<=i; j++){
        pattern+="*"
    }
    pattern+="\n";
}
console.log(pattern);