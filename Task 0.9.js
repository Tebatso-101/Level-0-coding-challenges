function showVowels(word){
  var x = 0;
  var vowArr = [];
    for (var i = 0; i <= word.length-1; i++){
    x = word[i];
    if (x=="a"|| x=="e" || x=="i" || x=="o" || x=="u" ||
    x=="A"|| x=="E"|| x=="I" || x=="O" || x=="U")
    vowArr.push(x);}
  console.log("Vowels: " + vowArr);}
showVowels("UTebatso");