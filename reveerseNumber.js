// I need to reverse a number
// Steps
//Create a Function
function reverseNumber(number) {
    let string = String(number);
    // one more approach 
    // let string = number.toString();
    // 1. I will make two variables one being the current number and one being the number that is currently reversed
    let currentNumber = "";
    let reversedNumber = "";
    // 2.By looping I will take the current number and put it in the reversed number
    for (let i = 0; i < string.length; i++) {
        // if there is a negative sign I have to place it at the start always
        if (string[i] == "-") {
            currentNumber = "";
        }
        else {
            currentNumber = string[i];
            reversedNumber = currentNumber + reversedNumber;
        }
    }
    if (string[0] == "-") {
        reversedNumber = string[0] + reversedNumber;
    }
    // 3.return the reversed number
    console.log(reversedNumber);
    return (reversedNumber);
}

reverseNumber(123);
// problem Solved in 23 minutes but had to learn something new so it was solved in 33 minutes 