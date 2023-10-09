const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let pwdLength = 12;
let gernerateBtn = document.getElementById("generate-btn")
let pwdOutputOne = document.getElementById("pwd-outputOne")
let pwdOutputTwo = document.getElementById("pwd-outputTwo")
let generateRandomPwBtn = document.getElementById("generate-btn")


function getRandomPw() {
    let randomChar = Math.floor( Math.random()* characters.length)
    return characters[randomChar]
}

gernerateBtn.addEventListener("click", function(){
    let randomPwd= ""
    for (let i = 0; i < pwdLength; i++) {
       randomPwd += getRandomPw()
    }
     pwdOutputOne.value = randomPwd
})

gernerateBtn.addEventListener("click", function(){
    let randomPwd= ""
    for (let i = 0; i < pwdLength; i++) {
       randomPwd += getRandomPw()
    }
     pwdOutputTwo.value = randomPwd
})

clearInputFieldEl()

function clearInputFieldEl() {
    pwdOutputOne.value = ""
    pwdOutputTwo.value = ""
}




/*const copyBtn = document.getElementById("copy");
copyBtn.addEventListener("click", () => {
  passwordTxt.select();
  document.execCommand("copy");
  alert("Password Copied");
});
*/





