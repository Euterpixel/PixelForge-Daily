// What to do I need to reverse a phrase
//Steps:
// 1.A word ends usually with a space so I need to find where the spaces are
function reverseSentence(string){
    let word = ""
    let reversePhrase = ""
for(i=0; i<string.length; i++){
    // 2.I shpuld take the word and save it in a variable 
    if(string[i] == " " || string[i] == "."){
        word = string[i] + word;
        reversePhrase = word + reversePhrase;
        console.log("if"+ i);
        console.log(word);
        console.log(reversePhrase);
        word = "";
        
}
    // 3. Find the next word and save it in another variable 
    else{
        word = word + string[i];
        console.log("else" + i);
        console.log(word);

    }
    // 4.Include the variable from step 3 into step 2.
}
reversePhrase = word + reversePhrase;
console.log(reversePhrase);
return(reversePhrase);
}
reverseSentence("Coded by Euterpixel");