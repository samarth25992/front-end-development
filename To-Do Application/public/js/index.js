(function() {
  let ul = document.getElementById("list");
  let input = document.getElementById("data");
  let form = document.getElementById("list-form");
  let deleteBtn = document.getElementById("delete");
  let select = document.getElementById("storage");
  let inputFile = document.getElementById("todoFile");
  let dataStorage = "";

  if(select.value === "File") {
    dataStorage = file;
  } else if(select.value === "LocalStorage") {
    dataStorage = localstorage;
  } else if(select.value === "API") {

  }

  let addToList = function(item) {
    let li = createElement({element: "li"});
    let input = createElement({element: "input", type: "checkbox"});
    let span = createElement({element: "span", value: item["data"]});
    li.appendChild(input);
    li.appendChild(span);
    ul.appendChild(li);
  };

  let createElement = function(elementAttr) {
    let element = document.createElement(elementAttr.element);
    if(elementAttr.type) {
      element["type"] = elementAttr["type"];
      //element.type = elementAttr.type;
    }

    if(elementAttr.value) {
      element["innerHTML"] = elementAttr["value"];
    }

    if(elementAttr.name) {
      element["name"] = elementAttr["name"];
    }
    return element;
  };

  let deleteFromList = function(items) {
    dataStorage.remove("data", items);
    items.forEach(item => {
      item.nextSibling.remove();
      item.remove();
    });
  };

  let checkForDuplicates = function(item) {
    let items = dataStorage.read("data");
    if(items) {
      for(let i of items) {
        if(i.data === item.data)
          return true;
      }
    }
    return false;
  };

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    let item = { data: input.value };
    let isDuplicate = checkForDuplicates(item);

    if(!isDuplicate) {
      dataStorage.insert("data", item);
      addToList(item);
      input.value = '';
    } else {
      alert("You already have the same item in the list! Please add another one.");
    }
  });

  deleteBtn.addEventListener("click",function(e) {
    let items = document.querySelectorAll("input[type=checkbox]:checked");
    deleteFromList(items);
  });

  inputFile.addEventListener('change',function(event) {
    let reader = new FileReader();
    reader.readAsText(event.target.files[0]);

    reader.onload = function() {
      
      let result = JSON.parse(reader.result);
      for(let i of result) {       
        let item = { data: i.data };
        addToList(item);
      }
    }  
  });

  if(dataStorage.read("data")) {
    let data = dataStorage.read("data");
    for(let i of data) {
      let item = { data: i.data};
      addToList(item);
    }
  }

  input.focus();

})();
