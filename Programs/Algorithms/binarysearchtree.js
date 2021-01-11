class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.right = right;
        this.left = left;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert = (data) => {
        let node = new Node(data);
        if(this.root === null) {
            this.root = node;
        } else {
            this.insertNode(this.root, node);
        }
    }

    insertNode = (node, newNode) => {
        if(newNode.data < node.data) {
            if(node.left === null) {
                node.left = newNode;
                return;
            } else {
                return this.insertNode(node.left, newNode);
            }
        } else if(newNode.data > node.data) {
            if(node.right === null) {
                node.right = newNode;
                return;
            } else {
                return this.insertNode(node.right, newNode);
            }
        }
    }

    findMin = () => {
        let node = this.root;
        while(node.left !== null) {
            node = node.left;
        }
        return node.data;
    }

    findMax = () => {
        let node = this.root;
        while(node.right !== null) {
            node = node.right;
        }
        return node.data;
    }

    isPresent = (data) => {
        let current = this.root;
        while(current) {
            if(data === current.data) {
                return true;
            }
            if(data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    inOrder = (node) => {
        if(node !== null) {
            this.inOrder(node.left);
            console.log(node.data);
            this.inOrder(node.right);
        }
    }

    preOrder = (node) => {
        if(node !== null) {
            console.log(node.data);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }

    postOrder = (node) => {
        if(node !== null) {
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.data);
        }
    }
}

let bst = new BST();
let arr = [15,25,10,7,22,17,13,5,9,27];

arr.forEach(i => bst.insert(i));
bst.preOrder(bst.root);


