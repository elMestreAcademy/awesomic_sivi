
const DEBUG = false;

var sivi_generator = class {
    constructor(sivi_data) {
        this.sivi_data = sivi_data;
        this.fillData();
        this.section = document.getElementById("main_wrapper");


    }

    fillData() {
        if (DEBUG) {
            console.log("Filling data:");
            console.log(this.sivi_data);
            console.log("--------");
        }

        this.makeSection(this.sivi_data);
    }

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
        var container = document.createElement("div");
        container.className = key;
        var elem = document.createElement(key);
        elem.innerHTML = value;

        container.appendChild(elem)
        this.section.appendChild(container);
    }

    makeNumber(key, value) {
        var elem = document.createElement("div");
        elem.innerHTML = value;
        this.section.appendChild(elem);
    }

    makeBool(key, value) {
        var container = document.createElement("div");
        var label = document.createElement("label");
        label.innerHTML = key;
        var elem = document.createElement("input");
        elem.type = "checkbox";
        elem.checked = value;
        container.appendChild(label);
        container.appendChild(elem);
        this.section.appendChild(container);
    }

    makeSection(data, level = 0, sectionName = null) {

        for (const key in data) {
            if (level == 0) {
                this.section = document.getElementById("main_wrapper");
            }

            if (data.hasOwnProperty(key)) {
                if (DEBUG && level > 0) {
                    console.log(typeof (data[key]))
                    console.log(`${data[key]}`)
                }

                var section = document.createElement("div");
                section.id = key;
                this.section.appendChild(section);

                if (level == 0) {
                    this.section = document.getElementById(key);
                }

                var sectionType = typeof (data[key]);

                switch (sectionType) {
                    case 'string':
                        if (key == 'link')
                            this.makeImg(key, data[key]);
                        else if (key == 'URL')
                            this.makeLink(key, data[key]);
                        else {
                            var regex = /\b\d+\b/;
                            if (regex.test(key)) {
                                console.log(`h${level}`);
                                this.makeElem('h' + level, data[key]);
                            }
                            else
                                this.makeElem(key, data[key]);
                        }

                        break;

                    case 'object':
                        this.makeSection(data[key], level + 1, key);
                        break;

                    case 'number':
                        this.makeNumber(key, data[key]);
                        break;

                    case 'boolean':
                        this.makeBool(key, data[key]);
                        break;

                    default:
                        console.error(`TYPE OF this.section NOT MANAGED ${sectionType}`)

                        break;
                }
            }
        }
    }
}

function getData(url, callback_class) {

    var req = new XMLHttpRequest();
    req.responseType = 'json';
    req.open('GET', url, true);
    req.onload = function () {
        var jsonResponse = req.response;
        new callback_class(jsonResponse);
    };
    req.send(null);
}

document.addEventListener("DOMContentLoaded", function (event) {
    var url = "./default_sample_ES.json"
    getData(url, sivi_generator)
});
