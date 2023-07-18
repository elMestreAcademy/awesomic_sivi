document.getElementsByClassName("boton-style")[0].addEventListener('click', cambia_estilo_1)
document.getElementsByClassName("boton-style")[1].addEventListener('click', cambia_estilo_2)

function cambia_estilo_1() {
    document.getElementById('estilos').href = '/css/style1.css';
}

function cambia_estilo_2() {
    document.getElementById('estilos').href = '/css/style2.css';
}