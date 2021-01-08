export default class Library {

    createElement = (data) => {
        let element = document.createElement(data.element);
        for(let item of data.attributes) {
          if(item.attr !== undefined) {
            element[item.attr] = item.value;
          }    
        }
        return element;
    }

    setCSS = (data) => {
        let element = data.element;
        data.properties.forEach(i => {
            element.style[i.name] = i.value;
        });
    }

    getItems = (data) => {
        return document.querySelectorAll(data.selector);
    }
}