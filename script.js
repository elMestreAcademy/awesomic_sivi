const DEBUG = true;

const profile = {
    "name": "David",
    "surnames": "Bonilla Fuertes",
    "title": "Fundador en Manfred / C-Level Executive",
    "description": "Llevo casi dos décadas desarrollando software, ocupando puestos a lo largo de toda la cadena de valor -programacion, diseño de producto, marketing, ventas y gestión de equipos, departamentos y empresas- pero creo que el rol donde se cruzan mi vocación, mis habilidades y las necesidades de la mayoría de las empresas es en la gestión de equipos y proyectos de construcción de activos digitales.\n\nMe apasiona contribuir en todo el ciclo de vida de un producto o servicio informático, desde la definición hasta el mantenimiento o soporte a clientes, y también involucrarme en la comercialización del mismo.\n\nMe gusta trabajar con gente y para la gente. Como responsable de equipos, mi principal prioridad siempre es eliminar cualquier problema que les impida alcanzar todo su potencial. También procuro devolver a la Comunidad informática parte del valor y el conocimiento que me han aportado a lo largo de mi carrera profesional, dando charlas o colaborando con grupos de usuarios y conferencias técnicas; y, a veces, organizándolos.\n",
    "avatar": {
        "alt": "foto de David Bonilla",
        "link": "https://pbs.twimg.com/profile_images/1387692137664458758/-Z8bTzmY_400x400.jpg"
    },
    "birthday": "1977-07-26"
};

var sivi_generator = class {



    constructor() {
        this.profile = profile;
        this.fillData()
        // this.getData("./default_sample_ES.json", this.profile, this.fillData)
    }

    fillData() {
        console.log("Filling data:");
        console.log(this.profile);
        console.log("--------");

        this.section = document.getElementsByTagName("profile")[0];
        console.log(this.section);

        var h5 = document.createElement("h5");
        h5.innerHTML = this.profile.name + " " + this.profile.surnames;
        this.section.appendChild(h5);

        this.makeSection(this.profile);
    }

    // getData(url, dataContainer, callback) {

    //     var req = new XMLHttpRequest();
    //     req.responseType = 'json';
    //     req.open('GET', url, true);
    //     req.onload = function () {
    //         var jsonResponse = req.response;
    //         console.log(jsonResponse);
    //         dataContainer = jsonResponse["profile"];
    //         callback();
    //     };
    //     req.send(null);
    // }

    makeImg(key, value) {
        var elem = document.createElement("img");
        elem.src = value;

        this.section.appendChild(elem);
    }

    makeLink(key, value) {
        var elem = document.createElement("a");
        elem.href = value;
        elem.innerHTML = value;

        this.section.appendChild(elem);
    }

    makeElem(key, value) {
        var container = document.createElement("p");
        var elem = document.createElement(key);
        elem.innerHTML = value;

        container.appendChild(elem)
        this.section.appendChild(container);
    }

    makeSection(data, level = 0, sectionName = null) {

        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                if (level > 0) {
                    console.log(typeof (data[key]))
                    console.log(`${data[key]}`)
                }

                var sectionType = typeof (data[key]);

                if (sectionType == 'string') {

                    if (DEBUG) console.log(`sectionName: ${sectionName} -- key: ${key}`);

                    if (sectionName == "avatar" && key == 'link') {
                        this.makeImg(key, data[key]);
                    } else if (key == 'link') {
                        this.makeLink(key, data[key]);
                    }
                    else {
                        this.makeElem(key, data[key]);
                    }
                }
                else if (sectionType == 'object') {
                    this.makeSection(data[key], level + 1, key);
                }
                else {
                    console.error(`TYPE OF this.section NOT MANAGED ${sectionType}`)
                }
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    new sivi_generator();
});