const DEBUG = false;

class SiviGenerator {
    constructor(sivi_data) {
        this.sivi_data = sivi_data;
        this.setTitle();
        this.resetSection();
        this.fillData();
    }

    setTitle() {
        let fullName = this.sivi_data["aboutMe"]["profile"]["name"];
        fullName += " " + this.sivi_data["aboutMe"]["profile"]["surnames"];
        let title = fullName + " - Sivi";
        document.title = title;
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

    makeElem(key, value, parent = this.section) {
        let container = this.createAndAppendElement("div", { className: key }, '', parent);
        this.createAndAppendElement(key, {}, value, container);
    }

    makeImg(key, value, parent = this.section) {
        this.createAndAppendElement("img", { src: value }, '', parent);
    }

    makeLink(key, value, parent = this.section) {
        this.createAndAppendElement("a", { href: value }, value, parent);
    }

    makeNumber(key, value, parent = this.section) {
        this.createAndAppendElement("div", {}, value, parent);
    }

    makeBool(key, value, parent = this.section) {
        let container = this.createAndAppendElement("div", {}, '', parent);
        let label = this.createAndAppendElement("label", {}, key, container);
        this.createAndAppendElement("input", { type: "checkbox", checked: value }, '', container);
    }

    processSection(key, data, level = 0, parent = this.section) {
        let container = this.createAndAppendElement("div", { className: key }, '', parent);

        switch (typeof (data[key])) {
            case 'string':
                if (key === 'link') this.makeImg(key, data[key], container);
                else if (key === 'URL') this.makeLink(key, data[key], container);
                else this.makeElem('h' + level, data[key], container);
                break;
            case 'object':
                this.makeSection(data[key], level + 1, container);
                break;
            case 'number':
                this.makeNumber(key, data[key], container);
                break;
            case 'boolean':
                this.makeBool(key, data[key], container);
                break;
            default:
                console.error(`TYPE NOT MANAGED ${typeof (data[key])}`);
        }
    }

    makeSection(data, level = 0, parent = this.section) {
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                if (level === 0) {
                    this.resetSection();
                }
                this.debugLog(typeof (data[key]), data[key]);
                this.processSection(key, data, level, parent);
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
