function rectangle(){
    let inputWidth = prompt("Enter the width: ");
    let inputHeight = prompt("Enter the height: ");

    let width = parseInt(inputWidth);
    let height = parseInt(inputHeight);

    document.getElementById("width").innerHTML = "Entered width: " + width;
    document.getElementById("height").innerHTML = "Entered height: " + height;
    let area = width * height;
    document.getElementById("area").innerHTML = "The area is:  " + area;
}

