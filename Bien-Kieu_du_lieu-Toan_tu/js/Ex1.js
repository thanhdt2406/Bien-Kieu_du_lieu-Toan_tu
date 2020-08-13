function Diem(){
    let inputPhysical = prompt("Nhập điểm môn Vật lý");
    let inputChemistry = prompt("Nhập điểm môn Hoá học");
    let inputBiology = prompt("Nhập điểm môn Sinh học");

    let physical = parseFloat(inputPhysical);
    let chemistry = parseFloat(inputChemistry);
    let biology = parseFloat(inputBiology);
    let sum = physical+chemistry+biology;
    let avg = sum/3;

    document.getElementById("Physical").innerHTML = "Điểm Lý: " +physical;
    document.getElementById("Chemistry").innerHTML = "Điểm Hoá: " +chemistry;
    document.getElementById("Biology").innerHTML = "Điểm Sinh: " +biology;
    document.getElementById("sum").innerHTML = "Tổng: " +sum;
    document.getElementById("avg").innerHTML = "Trung bình: " +avg;

}