function Convert(){
    let amount = parseFloat(document.getElementById("amount").value);
    let from = parseFloat(document.getElementById("from").value);
    let to = parseFloat(document.getElementById("to").value);
    if(amount<0){
        document.getElementById("result").innerHTML = "Error";
    }else{
        document.getElementById("result").innerHTML = "Result: " + amount * from/to;
    }
}