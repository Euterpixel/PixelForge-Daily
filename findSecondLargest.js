// I need to find the second largest number in an Array
// steps
// 1.create the function
function findSecondLargest(array) {
    // create two variables
    let largestNumber = array[0];
    let secondLargestNumber = 0;
    // loop through the array
    for (let i = 1; i < array.length; i++) {
        // check if the number is larger than the largest number or second largest number
        if (array[i] > largestNumber) {
            secondLargestNumber = largestNumber;
            largestNumber = array[i];
            // console.log("if " + i);
            // console.log(largestNumber);
            // console.log(secondLargestNumber);
        }
        else if(array[i] < largestNumber && array[i] > secondLargestNumber){
                 secondLargestNumber = array[i];
                //  console.log("else " + i);
                //  console.log(largestNumber);
                //  console.log(secondLargestNumber);
                 
        }
    }
    console.log(secondLargestNumber, largestNumber);
    return (secondLargestNumber);
}

a=[]
for(let i =0;i<50000000;i++){
    a.push(Math.random()*(10 ** (Math.random()*10)))
}
const start = performance.now();
findSecondLargest(a);
const end = performance.now();
console.log(`Execution time: ${end - start} milliseconds`);
// The problem was finished in 26 minutes I had made a basic mistake and in the first if 
// the secondLargestNumber variable was being replaced by the largestNumber after the largestNumber was already replaced.