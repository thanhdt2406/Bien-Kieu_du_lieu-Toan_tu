function convert(){
    let c = document.getElementById("Celsius").value
    document.getElementById("Fahrenheit").value = c / 5 * 9 + 32;
}