function start(a) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let opera = a.value;
    let rs, rs_text;
    // switch (opera) {
    //     case "+":
    //         rs = num1 + num2;
    //         rs_text = "  Addition "
    //         break;
    //     case "-":
    //         rs = num1 - num2;
    //         rs_text = " Subtraction "
    //         break;
    //     case "*":
    //         rs = num1 * num2;
    //         rs_text = " Multiplication "
    //         break;
    //     case "/":
    //         rs = num1 / num2;
    //         rs_text = " Division "
    //         break;
    // }
    if (opera == "+") {
        rs = parseFloat(num1) + parseFloat(num2);
        rs_text = "  Addition "
    }
    if (opera == "-") {
        rs = parseFloat(num1) - parseFloat(num2);
        rs_text = "  Subtraction "
    }
    if (opera == "*") {
        rs = parseFloat(num1) * parseFloat(num2);
        rs_text = "  Multiplication "
    }
    if (opera == "/") {
        rs = parseFloat(num1) / parseFloat(num2);
        rs_text = "  Division "
    }

    document.getElementById("result").innerHTML = "Resul" + rs_text + ": " + rs;
}