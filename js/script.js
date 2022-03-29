function tambah() {
    var a = parseFloat(document.f1.bil1.value);
    var b = parseFloat(document.f1.bil2.value);
    var c = a + b;

    document.f1.hasil.value = c;
}

function kali() {
    var a = parseFloat(document.f1.bil1.value);
    var b = parseFloat(document.f1.bil2.value);
    var c = a * b;

    document.f1.hasil.value = c;
}

function mines() {
    var a = parseFloat(document.f1.bil1.value);
    var b = parseFloat(document.f1.bil2.value);
    var c = a - b;

    document.f1.hasil.value = c;
}

function bagi() {
    var a = parseFloat(document.f1.bil1.value);
    var b = parseFloat(document.f1.bil2.value);
    var c = a / b;

    document.f1.hasil.value = c;
}

function tampil1() {
    document.getElementById("tab2").style.display = "none";
    document.getElementById("tab1").style.display = "block";

}

function formReset() {
    document.getElementById("f1").reset();
}