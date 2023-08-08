// import { useState } from 'react';

var activado = 0;

var cv = {
    "aboutMe": {
        "profile": {
            "name": "Hedy",
            "surnames": "Lamarr",
            "title": "Fundador en Manfred / C-Level Executive",
            "description": "Llevo casi dos décadas desarrollando software, ocupando puestos a lo largo de toda la cadena de valor -programacion, diseño de producto, marketing, ventas y gestión de equipos, departamentos y empresas- pero creo que el rol donde se cruzan mi vocación, mis habilidades y las necesidades de la mayoría de las empresas es en la gestión de equipos y proyectos de construcción de activos digitales.\n\nMe apasiona contribuir en todo el ciclo de vida de un producto o servicio informático, desde la definición hasta el mantenimiento o soporte a clientes, y también involucrarme en la comercialización del mismo.\n\nMe gusta trabajar con gente y para la gente. Como responsable de equipos, mi principal prioridad siempre es eliminar cualquier problema que les impida alcanzar todo su potencial. También procuro devolver a la Comunidad informática parte del valor y el conocimiento que me han aportado a lo largo de mi carrera profesional, dando charlas o colaborando con grupos de usuarios y conferencias técnicas; y, a veces, organizándolos.\n",
            "avatar": {
                "alt": "foto de David Bonilla",
                "link": "https://upload.wikimedia.org/wikipedia/commons/1/14/Randall_Packer_400x400.jpg"
            },
            "birthday": "1977-07-26",
            "imageUrl": '/img/yXOvdOSs.jpg',
            "imageSize": 90,
        }
    }
}

function Hello() {
    var llave = "profile";

    return <>
        <h1>Hello {cv["aboutMe"][llave]["name"]} {cv.aboutMe.profile.surnames}!</h1>
        <img
            className="avatar"
            src={cv.aboutMe.profile.imageUrl}
            alt={'Foto de ' + cv.aboutMe.profile.name}
            style={{
                width: cv.aboutMe.profile.imageSize,
                height: cv.aboutMe.profile.imageSize
            }}
            crossorigin
        />
    </>;
}

function MyButton() {
    const texto = "I'm a button";

    function handleClick() {
        document.body.style.backgroundColor = activado % 2 ? "#fff" : "#700";
        activado += 1;
        if (activado % 10 == 0) {
            document.body.style.backgroundColor = "#00a";
        }
        console.log(activado);
    }

    return (
        <button
            className="rojo"
            onClick={handleClick}>
            {texto}
        </button>
    );
}

function ShoppingList() {
    const products = [
        { title: 'Col', isFruit: false, id: 1 },
        { title: 'Ajo', isFruit: false, id: 2 },
        { title: 'Manzana', isFruit: true, id: 3 },
    ];

    const listItems = products.map(product =>
        <li
            key={product.id}
            id={product.id}
            style={{
                color: product.isFruit ? 'magenta' : 'darkgreen'
            }}
        >
            {product.title}
        </li>
    );

    return (
        <ul>{listItems}</ul>
    );
}

function Wrapper() {
    return <>
        <Hello />
        <MyButton />
        <ShoppingList />
    </>

}

const container = document.getElementById('mydiv');
const root = ReactDOM.createRoot(container);
root.render(<Wrapper />)
