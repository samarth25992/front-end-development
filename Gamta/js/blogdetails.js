import Library from './library.js';
import {tiles} from './data.js';

class BlogDetails {
    constructor() {
        this.blogImage = document.querySelector(".tile-image img");
        this.blogDescription = document.querySelector(".tile-description p");
    }

    onLoad = () => {

        let params = this.getParams();
        this.createBlogPost(params);
    }

    getParams = () => {

        let params = {};

        const urlSearchParams = new URLSearchParams(window.location.search);
        const id = urlSearchParams.get("id");

        params.id = id;
        return params;
    }

    createBlogPost = (params) => {
        let blogData = tiles.filter(tile => String(tile.id) === params.id)[0];

        library.setPageTitle(document, blogData.title);
        
        this.blogImage.src = blogData.image;
        this.blogDescription.innerHTML = blogData.long_description;
    }
}

let blogDetails = new BlogDetails();
let library = new Library();
blogDetails.onLoad();