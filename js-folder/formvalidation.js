  
  function formValidation(){
    var numberInput = document.getElementById("Number").value;

    if(numberInput < 10){
        return false
    }
    else{
        return true 
    }
  }