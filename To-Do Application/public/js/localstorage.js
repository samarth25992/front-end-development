let localstorage = (function() {

    let data = [];

    let insert = function(key, item) {
        if(read(key)) {
            data = read(key);
        }
        data.push(item);
        localStorage.setItem(key, JSON.stringify(data));
    };

    let remove = function(key, items) {
        let data = read(key);
        items.forEach(item => {
            data = data.filter(i => i.data !== item.nextSibling.innerHTML);
        });
        update(key, data);
    };

    let read = function(key) {
        return JSON.parse(localStorage.getItem(key));
    };

    let update = function(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    };

    return {
        insert: insert,
        remove: remove,
        read: read,
        update: update
    };
})();