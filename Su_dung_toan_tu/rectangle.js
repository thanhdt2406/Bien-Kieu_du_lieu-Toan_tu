function rectangle(){
    let width = parseInt(prompt("Enter the width: "));
    let height = parseInt(prompt("Enter the height: "));

    while(width <=0 || height<=0){
        alert("Error! Try again");
        width = parseInt(prompt("Enter the width: "));
        height = parseInt(prompt("Enter the height: "));
    }
    document.getElementById("width").innerHTML = "Width: " + width;
    document.getElementById("height").innerHTML = "Height: " + height;
    let area = width * height;
    document.getElementById("area").innerHTML = "The area is:  " + area;
}

