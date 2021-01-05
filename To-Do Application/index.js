(function() {
  let ul = document.getElementById("list");
  let input = document.getElementById("data");
  let form = document.getElementById("list-form");
  let deleteBtn = document.getElementById("delete");
  let items = localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : [];

  localStorage.setItem("data",JSON.stringify(items));
  let data = JSON.parse(localStorage.getItem("data"));

  input.focus();

  let addToList = function(value) {
    let li = liMaker();
    let item = inputMaker("checkbox");
    let span = spanMaker(value);
    li.appendChild(item);
    li.appendChild(span);
    ul.appendChild(li);
  }

  let liMaker = () => {
    return document.createElement("li");
  };

  let inputMaker = (type) => {
    let input = document.createElement("input");
    input.type = type;
    return input;
  };

  let spanMaker = (value) => {
    let span = document.createElement("span");
    span.innerHTML = value;
    return span;
  };

  let storeInLocalStorage = (value) => {
    let item = { item: value };
    items.push(item);
    localStorage.setItem("data",JSON.stringify(items));
  };

  let removeFromLocalStorage = (items) => {
    let allItems = JSON.parse(localStorage.getItem("data"));
    items.forEach(item => {
      allItems = allItems.filter(data => data.item !== item.nextSibling.innerHTML);
    });
    localStorage.setItem("data",JSON.stringify(allItems));
  };

  data.forEach(data => {
    addToList(data.item);
  });

  let deleteFromList = function() {
    let items = document.querySelectorAll("input[type=checkbox]:checked");

    removeFromLocalStorage(items);
    items.forEach(item => {
      item.nextSibling.remove();
      item.remove();
    });
  };

  let checkForDuplicates = (value) => {
    let items = JSON.parse(localStorage.getItem("data"));
    for(let data of items) {
      if(data.item === value) {
        alert("You already have the same item in the list! Please add another one.");
        return true;
      }
    }
    return false;
  };
  deleteBtn.addEventListener("click",deleteFromList);

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    let isDuplicate = checkForDuplicates(input.value);
    if(!isDuplicate) {
      storeInLocalStorage(input.value);
      addToList(input.value);
      input.value = '';
    }
  });
})();
