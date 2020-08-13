function Add() {
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    let num1 = parseFloat(n1);
    let num2 = parseFloat(n2);
    document.getElementById("result").innerHTML = "Result Addition: " + (num1 + num2);
}

function Sub() {
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    let num1 = parseFloat(n1);
    let num2 = parseFloat(n2);
    document.getElementById("result").innerHTML = "Result Addition: " + (num1 - num2);

}

function Mul() {
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    let num1 = parseFloat(n1);
    let num2 = parseFloat(n2);
    document.getElementById("result").innerHTML = "Result Addition: " + (num1 * num2);

}

function Div() {
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    let num1 = parseFloat(n1);
    let num2 = parseFloat(n2);
    document.getElementById("result").innerHTML = "Result Addition: " + (num1 / num2);
}