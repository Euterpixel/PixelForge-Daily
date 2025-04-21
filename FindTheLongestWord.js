// I think a word finishes before and after a space so I believe that the program should
// take a word (from one space to the next space) and count the letters of it
// compare the current size of the word and if there are more letters in the next word then save it as the new longest word 



function findLongestWord(str){
// let str = "parrot puppy encephalus cagagagagagagagag";
    let letterCount = 0;
    let word = "";
    let currentLongestLetterCount = 0;
    let currentLongestWord = ""; 
    let i = 0
    for( i = 0; i < str.length; i++){
        if(str[i] != " "){
        word += str[i];
        letterCount ++;
        }
        else if(str[i] == " "){
            if(currentLongestLetterCount < letterCount){
                currentLongestLetterCount = letterCount;
                currentLongestWord = word;
            }
            else if (currentLongestLetterCount == letterCount || currentLongestLetterCount > letterCount){
                currentLongestWord = currentLongestWord;

            }
            word = "";
            letterCount = 0;
        }

        
    }
    return(currentLongestWord);
}
console.log(findLongestWord("Eeshan Mariana Navdeep"));
// solved in 1hour 10 minutes on 08/04/2025