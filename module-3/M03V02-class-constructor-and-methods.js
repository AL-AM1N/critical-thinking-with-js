//? Basic Class constructor and methods
/**
 * !Note:
 * We can use class multiple times, because it works seperately or independantly
 */

class Counter {
    constructor(count){
        this.count = count;
    }

    add(amount) {
        this.count = this.count + amount;
    }

    print(){
        console.log(this.count);
    }
}

const counter1 = new Counter(0);

counter1.add(2);
counter1.add(3);
counter1.print(); //output: 5

const counter2 = new Counter(10);

counter2.add(20);
counter2.add(30);
counter2.print(); // output: 60