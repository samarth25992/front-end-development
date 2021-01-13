export default class Localstorage { 

    constructor(key) {
        this.key = key;
    }

    insert = (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    }

    remove = (key, items) => {
        let data = this.read(key);
        items.forEach(item => {
            data = data.filter(i => i.name !== item.name);
        });
        this.update(key, data);
    }

    read = (key) => {
        return JSON.parse(localStorage.getItem(key));
    }

    update = (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    }

    checkForDuplicates = (key, value) => {
        let items = this.read(key);
        if(items) {
          for(let i of items) {
            if(i.data === value)
              return true;
          }
        }
        return false;
    }
}
