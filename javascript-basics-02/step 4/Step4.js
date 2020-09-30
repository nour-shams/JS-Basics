function yndialog(){
    var answer = window.confirm("Clear data?");
    if (answer) {
        document.getElementById("myForm").reset();
    }
   
}