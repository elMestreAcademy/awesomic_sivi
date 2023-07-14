console.log("JS here");

document.addEventListener("DOMContentLoaded", function (e) {
    console.log("document onload");
    document.getElementById('nombre-apellidos').onmouseover = function () {
        document.getElementById('nombre-apellidos').className = "center azul";
    }

    document.getElementById('nombre-apellidos').onmouseleave = function () {
        document.getElementById('nombre-apellidos').className = "center";
    }
});