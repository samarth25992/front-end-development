let addToList = function() {

  let createItem = function(list, data){
    let item = document.createElement("input");
    item.type = "checkbox";
    item.name = "TODOList";

    let value = document.createElement("span");
    value.innerHTML = data.value + "</br>";

    list.appendChild(item);
    list.appendChild(value);
  }

  let list = document.getElementById("list");
  let data = document.getElementById("data");
  let item = createItem(list, data);

}

let deleteFromList = function() {
  //let items = document.getElementsByName("TODOList");
  let items = document.querySelectorAll("input[type=checkbox]");
  console.log(items);

  let deleteItems = function(items) {
    for(let i = 0; i < items.length; i++) {
      let node = items.item(i);
      if(node.checked) {
        node.nextSibling.remove();
        node.remove();
      }
    }
  }
  deleteItems(items);
}
