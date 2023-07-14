const DEBUG = false;

var sivi_generator = class {
    constructor(sivi_data) {
        this.sivi_data = sivi_data;
        this.fillData()
    }

    fillData() {
        if (DEBUG) {
            console.log("Filling data:");
            console.log(this.sivi_data);
            console.log("--------");
        }

        this.section = document.getElementById("main_wrapper");
        if (DEBUG) {
            console.log(this.section);
        }

        var h5 = document.createElement("h5");
        h5.innerHTML = this.sivi_data.name + " " + this.sivi_data.surnames;
        this.section.appendChild(h5);

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

    makeSection(data, level = 0, sectionName = null) {

        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                if (DEBUG && level > 0) {
                    console.log(typeof (data[key]))
                    console.log(`${data[key]}`)
                }

                var sectionType = typeof (data[key]);

                if (sectionType == 'string') {

                    if (DEBUG) console.log(`sectionName: ${sectionName} -- key: ${key}`);

                    if (key == 'link') {
                        this.makeImg(key, data[key]);
                    } else if (key == 'URL') {
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
