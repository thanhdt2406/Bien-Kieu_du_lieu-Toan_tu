function result() {
    let r = document.getElementById("radius").value;
    if(r<=0){
        document.getElementById("area").innerHTML = "Input error. Try again!";
    } else{
        document.getElementById("area").innerHTML = "The area is: " + r * r * 3.14;
    }

}