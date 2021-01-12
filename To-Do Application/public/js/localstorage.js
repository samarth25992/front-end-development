export default class Localstorage { 

    constructor(key) {
        this.key = key;
    }

    insert = (item) => {
        let data = this.read(this.key) ? this.read(this.key) : [];
        data.push(item);
        localStorage.setItem(this.key, JSON.stringify(data));
    }

    add = (key, value) => {
        localStorage.setItem(key, value);
    }

    remove = (items) => {
        let data = this.read(this.key);
        items.forEach(item => {
            data = data.filter(i => i.data !== item.nextSibling.innerHTML);
        });
        this.update(data);
    }

    read = () => {
        return JSON.parse(localStorage.getItem(this.key));
    }

    update = (data) => {
        localStorage.setItem(this.key, JSON.stringify(data));
    }

    checkForDuplicates = (item) => {
        let items = this.read(this.key);
        if(items) {
          for(let i of items) {
            if(i.data === item.data)
              return true;
          }
        }
        return false;
    }
}
