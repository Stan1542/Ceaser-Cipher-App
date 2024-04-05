//Create varibales to reference from the html elements such as the buttons and the key which is a input
const btnEncrypt = document.querySelector('#encrpyt');
const btnDecrypt = document.querySelector("#decrypt");
const key = document.querySelector('#key');

//Create a array list that will contain the alphabets that we will refer to
const listLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n','o','p', 'q',
'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'] ;

let newText = ''; //We going set it to nthe new text

//create a button that will encrypt the text 
btnEncrypt.addEventListener('click', () => {

  //We first going to get the text area input from the user
  const textarea = document.querySelector('#textarea');
  //const keyValue = Number(key.value); //Convert the string to number from the input box
  const keyValue = 3;

  //Create a for loop that will loop through the letters as they typed
  for(let letter of textarea.value){
    letter = letter.toLowerCase();
    if (!listLetters.includes(letter)){
      continue; // So if we type any characters that are not alphabet or part of the list letters e.g ? or : or space it will
      //it will ignore and continue to loop the letters.
    }

    const indexLetter = listLetters.findIndex((item) => item === letter); //indexLetter is equals to listLetters inside the array list
    //findindex is the method that is part of the array claaslist 
    //that performs to find the index within the arraylist
    let indexNewLetter = indexLetter + keyValue; // This is the formula for Caeser Cipher encryption wha this means is that the indexNewLetter
    //is obtained from adding our keyvalue with the user input which is the indexLetter
    
    if(indexNewLetter > 25 ){
      indexNewLetter -= 26; //if the index letter is greater then 25 subtract by 26
    }
    newText += listLetters[indexNewLetter] //newText was an empty string but when adding the listLetters it contains the indexLetters within the array
    textarea.value = newText; // the text area is now equal to the new text that contains the array list letters (encrpytpion)
    
  }

  newText = ''; // we reset the text after the loop
});

//create a button that will decrypt the text 
btnDecrypt.addEventListener('click', () => {

  //We first going to get the text area input from the user
  const textarea = document.querySelector('#textarea');
  //const keyValue = Number(key.value); //Convert the string to number from the input box
  const keyValue = 3;

  //Create a for loop that will loop through the letters as they typed
  for(let letter of textarea.value){
    letter = letter.toLowerCase();
    if (!listLetters.includes(letter)){
      continue; // So if we type any characters that are not alphabet or part of the list letters e.g ? or : or space it will
      //it will ignore and continue to loop the letters.
    }

    const indexLetter = listLetters.findIndex((item) => item === letter); //indexLetter is equals to listLetters inside the array list
    //findindex is the method that is part of the array claaslist 
    //that performs to find the index within the arraylist
    let indexNewLetter = indexLetter - keyValue; // This is the formula for Caeser Cipher encryption wha this means is that the indexNewLetter
    //is obtained from adding our keyvalue with the user input which is the indexLetter
    
    if(indexNewLetter < 0 ){
      indexNewLetter += 26; //if the index letter is less then 0 add by 26
    }
    newText += listLetters[indexNewLetter] //newText was an empty string but when adding the listLetters it contains the indexLetters within the array
    textarea.value = newText; // the text area is now equal to the new text that contains the array list letters (encrpytpion)
    
  }

  newText = ''; // we reset the text after the loop
});
