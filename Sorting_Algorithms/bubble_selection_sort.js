const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const array=[ 4,3,2,5,1];
const length = array.length;

function sorting_algorithms(){
    console.log('welcome');
    console.log('Choose Option\n');
    console.log('1. Bubble Sort,\n2. Selection Sort,\n3. Quick Sort,\n4. Insertion Sort,\n5. Merge Sort');
    rl.question("Enter Your Choice: ", (choice) => {
        console.log("Your choice is: " + choice);
    
if(choice==1){
bubble_sort(array);
console.log('sorted array:', array);
}

else if(choice==2){  
    selection_sort(array);
    console.log('sorted array:', array);
}


else if(choice==3){  
    console.log('Coming Soon...');
}


else if(choice==4){  
    console.log('Coming Soon...');
}


else if(choice==5){  
    console.log('Coming Soon...');
}

else{
   console.log('enter correct choice');
}
sorting_algorithms();

});
}
    
                
          
function bubble_sort(array){

for(let i=0; i<length-1; i++){
    for(let j=0; j<length-1-i;j++){
        if(array[j]>array[j+1]){

           let temp=array[j];
            array[j]=array[j+1];
            array[j+1]=temp;
        }
    }
}
}



function selection_sort(array){
    for(let i=0; i<array.length-1; i++){
        let min=i;
        for(let j=i+1; j<array.length;j++){
            if(array[j]<array[min]){
                min=j;
            }
        }

            if(min!==i){
                let temp=array[min];
                array[min]=array[i];
                array[i]=temp;
            }

               
            }
        }

     
sorting_algorithms();