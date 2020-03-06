function generate(){ //function to generate password upon onclick event


    //sets variable for the length of the password, determined by the user input value
    var complexity = document.getElementById("userlength").value;

   //the avaiable characters and symbols for the generate function to utilize
    var values = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

    var password = ""; //sets the variable for the end result

    //how the password is generated, will choose a rounded integer that corresponds to a chacter within the set values.
    for(var i = 0; i < complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length -1)));
    }
    //sends the generated password to the display box for viewing.
    document.getElementById("display").value = password;

}

//function to copy generated password to clipboard for ease of use.
function copyPassword(){

    document.getElementById("display").select();

    document.execCommand("Copy");

    alert("Copied, ready to paste!");

}

