let A = 0, B = 0;
let o = '++';
function number(x) {
    if (document.getElementById("sec_display").innerHTML.substring(document.getElementById("sec_display").innerHTML.length - 1, document.getElementById("sec_display").innerHTML.length) == "=") {
        document.getElementById("display").innerText = x;
        document.getElementById("sec_display").innerText = '';
        return;
    }
    if (document.getElementById("display").innerText == '0') {
        document.getElementById("display").innerText = x;
    }
    else document.getElementById("display").innerText = document.getElementById("display").innerText + x;
}
function operator(a) {
    o = a;
    if (document.getElementById("sec_display").innerText == "") {
        A = document.getElementById("display").innerHTML;
        document.getElementById("sec_display").innerText = document.getElementById("display").innerText + ' ' + a;
        document.getElementById("display").innerText = 0;
    }
    else if (document.getElementById("sec_display").innerHTML.substring(document.getElementById("sec_display").innerHTML.length - 1, document.getElementById("sec_display").innerHTML.length) == "=") {
        A = document.getElementById("display").innerText;
        document.getElementById("sec_display").innerText = A + ' ' + o;
        document.getElementById("display").innerText = 0;
    }
    else if (document.getElementById("display").innerText != 0) {
        let Z;
        let op = document.getElementById("sec_display").innerHTML.substring(document.getElementById("sec_display").innerHTML.length - 1, document.getElementById("sec_display").innerHTML.length);
        B = document.getElementById("display").innerHTML;
        if (op == '+') {
            Z = (parseFloat(A) + parseFloat(B));
        }
        else if (op == '×') {
            Z = (parseFloat(A) * parseFloat(B)).toFixed(4);
        }
        else if (op == '-') {
            Z = (parseFloat(A) - parseFloat(B));
        }
        else if (op == '/') {
            Z = (parseFloat(A) / parseFloat(B)).toFixed(4);
        }
        A = Z;
        document.getElementById("sec_display").innerHTML = Z + ' ' + o;
        document.getElementById("display").innerHTML = 0;
    }
    else {
        document.getElementById("sec_display").innerText = document.getElementById("sec_display").innerText.substring(0, document.getElementById("sec_display").innerText.length - 1) + a;
        document.getElementById("display").innerText = 0;
    }
}
function backspace() {
    var display = document.getElementById("display");
    var val = display.innerHTML;
    val = val.substring(0, val.length - 1);
    display.innerHTML = val;
    if (display.innerHTML == "") display.innerHTML = 0;
}
function cal() {
    if (document.getElementById("sec_display").innerHTML.substring(document.getElementById("sec_display").innerHTML.length - 1, document.getElementById("sec_display").innerHTML.length) == '=') {
        if (o == '+') {
            document.getElementById("display").innerHTML = (parseFloat(A) + parseFloat(B)).toFixed(4);
        }
        else if (o == '×') {
            document.getElementById("display").innerHTML = (parseFloat(A) * parseFloat(B)).toFixed(4);
        }
        else if (o == '-') {
            document.getElementById("display").innerHTML = (parseFloat(A) - parseFloat(B)).toFixed(4);
        }
        else if (o == '/') {
            document.getElementById("display").innerHTML = (parseFloat(A) / parseFloat(B)).toFixed(4);
        }
        document.getElementById("sec_display").innerHTML = A + ' ' + o + ' ' + B + ' ' + '=';
        A = document.getElementById("display").innerHTML;
    }
    else if (o == '++') {
        A = document.getElementById("display").innerHTML;
        document.getElementById("sec_display").innerHTML = A + ' ' + '=';
    }
    else {
        B = document.getElementById("display").innerHTML;
        if (o == '+') {
            document.getElementById("display").innerHTML = (parseFloat(A) + parseFloat(B)).toFixed(4);
        }
        else if (o == '×') {
            document.getElementById("display").innerHTML = (parseFloat(A) * parseFloat(B)).toFixed(4);
        }
        else if (o == '-') {
            document.getElementById("display").innerHTML = (parseFloat(A) - parseFloat(B)).toFixed(4);
        }
        else if (o == '/') {
            document.getElementById("display").innerHTML = (parseFloat(A) / parseFloat(B)).toFixed(4);
        }
        document.getElementById("sec_display").innerHTML = A + ' ' + o + ' ' + B + ' ' + '=';
        A = document.getElementById("display").innerHTML;
    }
}
// Function for "."
function decimal() {
    if (document.getElementById("display").innerHTML == 0) {
        document.getElementById("display").innerHTML = "0.";
    }
    else number('.');
}
// Function for C
function clear1() {
    A = 0;
    B = 0;
    o = '++'
    document.getElementById("display").innerText = 0;
    document.getElementById("sec_display").innerText = " ";
}
// Function for %
function per() {
    if (document.getElementById("sec_display").innerText == "") {
        document.getElementById("sec_display").innerText = 0;
        document.getElementById("display").innerText = 0;
    }
    else if (o == '×' || o == '/') {
        B = document.getElementById("display").innerText;
        document.getElementById("display").innerText = parseFloat(B) / 100;
        document.getElementById("sec_display").innerText = A + ' ' + o + ' ' + (parseFloat(B) / 100);
    }
    else {
        B = document.getElementById("display").innerText;
        document.getElementById("display").innerText = A * B / 100;
        document.getElementById("sec_display").innerText = A + ' ' + o + ' ' + (A * B / 100);
    }
}