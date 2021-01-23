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

    isBalanced = () => {
        return (this.findMinHeight() >= this.findMaxHeight() - 1);
    }

    findMinHeight = (node = this.root) => {
        if(node === null)
            return 0;
        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);

        return Math.min(left, right) + 1;
    }

    findMaxHeight = (node = this.root) => {
        if(node === null)
            return 0;
        let left = this.findMaxHeight(node.left);
        let right = this.findMaxHeight(node.right);

        return Math.max(left, right) + 1;
    }

    levelOrder = () => {
        let result = [];
        let queue = [];
        if(this.root !== null) {
            queue.push(this.root);
            while(queue.length > 0) {
                let node = queue.shift();
                result.push(node.data);
                if(node.left) {
                    queue.push(node.left);
                }
                if(node.right) {
                    queue.push(node.right);
                }
            }
        } else {
            return null;
        }
        return result;
    }
}

let bst = new BST();
let arr = [9,4,17,3,6,10,22,5,7,20];

arr.forEach(i => bst.insert(i));
console.log(bst.findMaxHeight());
console.log(bst.findMinHeight());
console.log(bst.isBalanced());
console.log(bst.levelOrder());


