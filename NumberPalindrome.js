function isPalindrome(number) {
    let num = number + "";
    let answer = true;
    for (let j=0, i = num.length - 1; i >= 0; i--,j++) {
        let currentNumberFromStart = num[j];
        if (num[i] === currentNumberFromStart) {
            answer = true;
        } else {
            answer = false;
            break;
        }


    }
    return (answer)
}
isPalindrome(-121);
console.log(isPalindrome(-121));