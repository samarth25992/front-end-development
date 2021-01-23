class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
        this.length = 0;
    }

    size = () => {
        return this.length;
    }

    head = () => {
        return this.head;
    }

    add = (element) => {
        let node = new Node(element);

        if(this.head === null) {
            this.head = node;
        } else {
            let currentNode = this.head;

            while(currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;           
        }
        this.length++;
    }

    remove = (element) => {
        let currentNode = this.head;
        let previousNode;

        if(element === currentNode.element) {
            head = currentNode.next;
        } else {
            while(element !== currentNode.element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }

            previousNode.next = currentNode.next;
        }
        this.length--;
    }

    isEmpty = () => {
        return this.length === 0;
    }

    indexOf = (element) => {
        let currentNode = this.head;
        let index = 0;

        while(currentNode.element !== element) {
            currentNode = currentNode.next;
            index++;
        }

        return index ? index : -1;
    }

    elementAt = (index) => {
        let currentNode = this.head;
        let count = 0;
        while(count < index) {
            currentNode = currentNode.next;
            count++;
        }
        return currentNode.element;
    }

    addAt = (index, element) => {
        let node = new Node(element);
        let currentNode = this.head;
        let previousNode;
        let currentIndex = 0;

        if(index > this.length) {
            return false;
        }

        if(index === 0) {
            node.next = currentNode;
            this.head = node;
        } else {

            while(currentIndex < index) {
                previousNode = currentNode;
                currentNode = currentNode.next;
                currentIndex++;
            }

            node.next = currentNode;
            previousNode.next = node;
        }
    }
}

let linkedlist = new LinkedList();
linkedlist.add(0);
linkedlist.add(12);
linkedlist.add(5);
linkedlist.add(1);
linkedlist.add(100);

console.log(linkedlist.size());
console.log(linkedlist.indexOf(5));
console.log(linkedlist.addAt(4));
console.log(linkedlist.elementAt(4));
