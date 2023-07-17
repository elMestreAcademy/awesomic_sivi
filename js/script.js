const DEBUG = false;

class SiviGenerator {
    constructor(sivi_data) {
        this.sivi_data = sivi_data;
        this.resetSection();
        this.fillData();
    }

    resetSection() {
        this.section = document.getElementById("main_wrapper");
    }

    debugLog(...args) {
        if (DEBUG) {
            console.log(...args);
        }
    }

    fillData() {
        this.debugLog("Filling data:", this.sivi_data, "--------");
        this.makeSection(this.sivi_data);
    }

    createAndAppendElement(type, attrs = {}, innerHTML = '', parent = this.section) {
        let elem = document.createElement(type);
        Object.assign(elem, attrs);
        elem.innerHTML = innerHTML;
        parent.appendChild(elem);
        return elem;
    }

    makeElem(key, value) {
        let container = this.createAndAppendElement("div", { className: key });
        this.createAndAppendElement(key, {}, value, container);
    }

    makeImg(key, value) {
        this.createAndAppendElement("img", { src: value });
    }

    makeLink(key, value) {
        this.createAndAppendElement("a", { href: value }, value);
    }

    makeNumber(key, value) {
        this.createAndAppendElement("div", {}, value);
    }

    makeBool(key, value) {
        let container = this.createAndAppendElement("div");
        let label = this.createAndAppendElement("label", {}, key, container);
        this.createAndAppendElement("input", { type: "checkbox", checked: value }, '', container);
    }

    processSection(key, data, level = 0) {
        parent = this.createAndAppendElement("div", { id: key });

        switch (typeof (data[key])) {
            case 'string':
                if (key === 'link') this.makeImg(key, data[key]);
                else if (key === 'URL') this.makeLink(key, data[key]);
                else this.makeElem('h' + level, data[key]);
                break;
            case 'object':
                this.makeSection(data[key], level + 1);
                break;
            case 'number':
                this.makeNumber(key, data[key]);
                break;
            case 'boolean':
                this.makeBool(key, data[key]);
                break;
            default:
                console.error(`TYPE NOT MANAGED ${typeof (data[key])}`);
        }
    }

    makeSection(data, level = 0) {
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                if (level === 0) {
                    this.resetSection();
                }
                this.debugLog(typeof (data[key]), data[key]);
                this.processSection(key, data, level);
            }
        }
    }
}

function getData(url, callback_class) {
    fetch(url)
        .then(response => response.json())
        .then(data => new callback_class(data))
        .catch(error => console.error('Error:', error));
}

document.addEventListener("DOMContentLoaded", function (event) {
    const url = "./json/default_sample_ES.json";
    getData(url, SiviGenerator);
});
