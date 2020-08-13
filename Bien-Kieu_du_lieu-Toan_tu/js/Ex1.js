function Diem(){
    let physical = parseFloat(prompt("Nhập điểm môn Vật lý"));
    let chemistry = parseFloat(prompt("Nhập điểm môn Hoá học"));
    let biology = parseFloat(prompt("Nhập điểm môn Sinh học"));

    while(physical<0 || physical>10||chemistry<0||chemistry>10||biology<0||biology>10){
        alert("Error. Try again!");
        physical = parseFloat(prompt("Nhập điểm môn Vật lý"));
        chemistry = parseFloat(prompt("Nhập điểm môn Hoá học"));
        biology = parseFloat(prompt("Nhập điểm môn Sinh học"));
    }
    let sum = physical+chemistry+biology;
    let avg = sum/3;

    document.getElementById("Physical").innerHTML = "Điểm Lý: " +physical;
    document.getElementById("Chemistry").innerHTML = "Điểm Hoá: " +chemistry;
    document.getElementById("Biology").innerHTML = "Điểm Sinh: " +biology;
    document.getElementById("sum").innerHTML = "Tổng: " +sum;
    document.getElementById("avg").innerHTML = "Trung bình: " +avg;

}