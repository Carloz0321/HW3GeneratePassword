


document.querySelector("#generate").addEventListener("click", writePassword)

var Upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var Lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var SPC = ["!", "#", "%", "$", ">", "<", "?", "=", "~", "&", "-", ";", "+"]
var Num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

var confirmLength ="";
var confirmSpecialCharater;
var confirmNumbericCharater;
var confirmUpperCase;
var confirmLowerCase;

function generatePassword() {
    var confirmLength = (prompt("How many charaters would you like your password to contain?"));

    while(confirmLength <= 7 || confirmLength >= 40) {
        alert("Password lenth must be between 8-40 charaters Try again");
        var confirmLength = (prompt("How many charaters would you like your password to contain?"))
    }

    alert(`Your Password will have ${confirmLength} charaters`);

    var confirmSpecialCharater = confirm("Click OK to confirm if you would like to include special characters");
    var confirmNumbericCharater = confirm("Click OK to confirm if you would like to include numeric characters");
    var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
    var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
            
        while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharater === false && confirmNumbericCharater === false) {
            var confirmSpecialCharater = confirm("Click OK to confirm if you would like to include special characters");
            var confirmNumbericCharater = confirm("Click OK to confirm if you would like to include numeric characters");
            var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
            var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
        }
    var passwordCharaters = []

    if (confirmUpperCase) {
        passwordCharaters = passwordCharaters.concat(Upper)
    }

    if (confirmLowerCase) {
        passwordCharaters = passwordCharaters.concat(Lower)
    }

    if (confirmSpecialCharater) {
        passwordCharaters = passwordCharaters.concat(SPC)
    }

    if (confirmNumbericCharater) {
        passwordCharaters = passwordCharaters.concat(Num)
    }

        console.log(passwordCharaters)


        var randomPassword = ""

        for (var i = 0; i < confirmLength; i++) {
            randomPassword = randomPassword + passwordCharaters[Math.floor(Math.random() * passwordCharaters.length)];
            console.log(randomPassword)
        }
        return randomPassword;
}


function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password")

    passwordText.value = password;
}