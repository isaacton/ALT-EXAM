// a class with constructor

class mathHelper {

    constructor(num1, num2, instanceName){
        // code in constructor runs before creating instance
        // check if num1 and num2 are numbers
        if(typeof num1 !== "number" || typeof num2 !== "number"){
            throw new Error("Arguments must be numbers please don't be angry biko");
        }
        this.num1 = num1;
        this.num2 = num2;
        this.instanceName = `this instance is:${instanceName}`;
    }
    add(){
        return this.num1 + this.num2;
    }
    substract(){
        return this.num1 - this.num2;
    }
    multiply(){
        return this.num1 * this.num2;
    }
    divide(){
        return this.num1 / this.num2;
    }
    modulo(){
        return this.num1 % this.num2;
    }
    power(){
        return this.num1 ** this.num2;
    }
}

// Create an instance from the class
const mathHelper1 = new mathHelper(300, 500);
const mathHelper5 = new mathHelper(400, 700, "math 1 instance");

// use the instance
alert(mathHelper1.add());
alert(mathHelper1.substract());
alert(mathHelper1.multiply());
alert(mathHelper1.divide());
alert(mathHelper1.modulo());
alert(mathHelper1.power());
alert(mathHelper5.instanceName);

const mathHelper2 = new mathHelper(1000, 300);

alert(mathHelper2.add());
alert(mathHelper2.substract());
alert(mathHelper2.multiply());
alert(mathHelper2.divide());
alert(mathHelper2.modulo());
alert(mathHelper2.power());

// intance with a wrong argument from the class
const mathHelper3 = new mathHelper(500, "isaac");
console.log(mathHelper3.add());
