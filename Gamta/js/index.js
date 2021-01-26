import {tiles} from './data.js';
import Library from './library.js';

class Gamta {

    constructor() {
        this.template = document.querySelector("#blogTile").content;
        this.tileImage = this.template.querySelector(".tile-image img");
        this.tileDescription = this.template.querySelector(".tile-description p");
        this.tileAction = this.template.querySelector(".tile-action button");
    }
    
    onLoad = () => {
        this.loadTiles();
        this.setListeners();
    }

    loadTiles = () => {
        if (library.supportsTemplate()) {
            let flex = document.querySelector(".flex");     

            for (let tile of tiles) {
                let node = this.createTile(tile);
                flex.appendChild(node);
            }

        } else {
            console.log("Templates are not supported!");
        }
    }

    createTile = (tile) => {

        this.tileImage.src = tile.image;
        this.tileDescription.innerHTML = tile.short_description;
        this.tileAction.textContent = "View more";
        this.tileAction.id = tile.id;

        return document.importNode(this.template, true);
    }

    setListeners = () => {
        document.querySelector(".flex").addEventListener("click", (event) => {
            const isButton = event.target.nodeName === 'BUTTON';

            if(!isButton) {
                return;
            }

            const buttonId = event.target.id;
            let url = library.getSiteURL() + "details.html?id=" + encodeURIComponent(buttonId);

            document.location.href = url;
        });
    }
}

let gamta = new Gamta();
let library = new Library();
gamta.onLoad();
