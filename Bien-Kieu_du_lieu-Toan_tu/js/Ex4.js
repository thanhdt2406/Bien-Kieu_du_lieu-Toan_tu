function result() {
    let r = document.getElementById("radius").value;
    if(r<=0){
        document.getElementById("perimeter").innerHTML = "Input error. Try again!";
    } else{
        document.getElementById("perimeter").innerHTML = "The Perimeter is: " + r * 2 * 3.14;
    }
}