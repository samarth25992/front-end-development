/**
 * @method enqueue 
 * @method dequeue
 * @method print
 * @method size
 * @method front
 * @method isEmpty
 */

class PriorityQueue {

    constructor(values = []) {
        this.values = values;
    }

    enqueue = (element) => {

        if(this.isEmpty()) {
            this.values.push(element);
        } else {
            let added = false;
            for(let i = 0; i < this.size(); i++) {
                if(this.values[i][1] >= element[1]) {
                    this.values.splice(i, 0, element);
                    added = true;
                    break;
                }
            }
            if(!added) {
                this.values.push(element);
            }
        }
    }

    dequeue = () => {
        return this.values.shift();
    }

    size = () => {
        return this.values.length;
    }

    print = () => {
        console.log(this.values);
    }

    front = () => {
        return this.values[0];
    }

    isEmpty = () => {
        return (this.values.length === 0)
    }
}

let priorityQueue = new PriorityQueue();
priorityQueue.enqueue(["Samarth", 5]);
priorityQueue.enqueue(["Gaurang", 6]);
priorityQueue.enqueue(["Grishma", 1]);
priorityQueue.enqueue(["Sejal", 2]);
priorityQueue.enqueue(["Kalpana", 1]);
priorityQueue.enqueue(["Tanvi", 1]);

priorityQueue.print();
priorityQueue.dequeue();
priorityQueue.print();
