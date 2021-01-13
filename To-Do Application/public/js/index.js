import "regenerator-runtime/runtime";
import Localstorage from './localstorage.js';
import File from './file.js';
import Library from './library.js';
import API from './api.js';

class BuildTodoList {

  //Setting the DOM elements
  constructor() {
    this.ul = document.getElementById("list"),
    this.input = document.getElementById("data"),
    this.form = document.getElementById("list-form"),
    this.deleteBtn = document.getElementById("delete"),
    this.select = document.getElementById("storage"),
    this.uploadFile = document.getElementById("todoFile"),
    this.dataStorage = localstorage;
    this.clicked = false;
  }

  initialize() {

    //At the time of refresh, if there is data in localstorage, load that and create the list 
    if(this.dataStorage.read("data") !== null) {
      this.constructData(this.dataStorage.read("data"));   
    } else {
      this.dataStorage.insert("data", []);
    }

    //Setting the counter for the names of list items
    if(!this.dataStorage.read("counter")) {
      this.dataStorage.insert("counter", 0);
    }
    
    this.addListeners();
    this.input.focus();
  }

  constructData(data) {
    for(let i of data) {
        let item = { data: i.data, name: i.name };
        this.addToList(item);
    }
  }

  addListeners() {

    //When the user enters the item and hits enter, check for duplicate and add to todo list
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();

      const item = { data: this.input.value, name: "check-" + this.dataStorage.read("counter") };
      if(!(this.dataStorage.checkForDuplicates("data", item.data))) {

        let data = this.dataStorage.read("data");
        data.push(item);
        this.dataStorage.update("data", data);
        this.dataStorage.update("counter", parseInt(this.dataStorage.read("counter")) + 1);

        this.addToList(item);
        this.input.value = '';
        
      } else {
        alert("You already have the same item in the list! Please add another one.");
      }
    });

    //Gets the checked todo items for deletion
    this.deleteBtn.addEventListener("click", () => {
      this.deleteFromList(library.getItems({ selector: "input[type=checkbox]:checked" }));
    });

    this.select.addEventListener('change', () => {
      this.sourceSelection();
    });


    // Edit functionality is pending - improvise the codebase and make less DOM calls
    
    /*this.ul.addEventListener("mouseover", (e) => {
      let editIcon = library.createElement({element: "img", attributes: [{attr: "src", value: "images/edit.png"}, {attr: "id", value: "editIcon"}]});
      library.setCSS({ element: editIcon, properties: [{name: "height", value: "16px"}, {name: "margin-left", value: "5px"}]});
      if(e.target.tagName.toLowerCase() === "li") {
        e.target.appendChild(editIcon);
      } else if(e.target.tagName.toLowerCase() === "span") {
        e.target.parentElement.appendChild(editIcon);
      }  
    });

    this.ul.addEventListener("mouseout", (e) => {
      document.getElementById("editIcon").remove();
    });

    
    this.ul.addEventListener("click", (e) => {
      if(!this.clicked) {
        let parent = e.target.parentElement;
        let editBox = library.createElement({element: "input", attributes: [{attr: "type", value: "text"}, {attr: "id", value: "editBox"}]});
        editBox.appendChild(e.target);
        editBox.value = e.target.innerHTML;
        parent.appendChild(editBox);
        editBox.focus();
        editBox.addEventListener("focusout", this.onEditingComplete);
        this.clicked = true;
      }
    });*/
  }

  /*onEditingComplete = (e) => {
    console.log(e);
    this.clicked = false;
    let span = e.target.childNodes[0];
    span.innerHTML = e.target.value;
    e.target.parentElement.appendChild(span);
    e.target.remove();
  }*/

  //Creates a new <li> item and adds it to the todo list
  addToList(item) {
    let li = library.createElement({element: "li", attributes:[]});
    let input = library.createElement({element: "input", attributes: [{ attr: "type", value: "checkbox" }, { attr: "name", value: item.name}]});
    let span = library.createElement({element: "span", attributes: [{ attr: "innerHTML", value: item.data }]});   
    li.appendChild(input);
    li.appendChild(span);
    this.ul.appendChild(li);
  };

  //Deletes the selected items from the todo list
  deleteFromList(items) {
    this.dataStorage.remove("data", items);
    items.forEach(item => {
      item.nextSibling.remove();
      item.remove();
    });
  };

  sourceSelection() {

    switch(this.select.value) {
      case "LocalStorage": 
      this.dataStorage = localstorage;
      library.setCSS({ element: this.uploadFile, properties: [{name: "display", value: "none"}]});
      this.ul.innerHTML = "";
      this.constructData(this.dataStorage.read("data"));
      break;
      
      case "API":
        this.dataStorage = API;
        this.ul.innerHTML = "";

        /*let response = api.usingAsyncAwait("https://jsonplaceholder.typicode.com/todos").then(
          response => {
            let data = [];
            response.forEach(i => data.push({ data: i.title }));
            this.constructData(data);
          }
        );*/
        
        let response = api.usingFetch("https://jsonplaceholder.typicode.com/todos");
        response.then(response => {
          let data = [];
          response.forEach(i => data.push({ data: i.title }));
          this.constructData(data);
        });
        break;
    }
  }

}

const localstorage = new Localstorage(),
      file = new File([]),
      library = new Library(),
      api = new API(),
      todoList = new BuildTodoList();

todoList.initialize();

