// LOOPS => for loops
for(let i=0; i<5; i++){
    alert("isaac is a developer!");
}

// while
let i=0;
 while (i < 5) { //shows 0, then 1, then 2, then 3, then 4, then 5
    alert(i);
    //any code
    i++;//increment
}

//do..while loop

// let j=10;
// do {
    // alert("am a fine-boy");
    // j++;
// } while (j < 5);

//for..0f while loop it used to iterate through iterables or arrays
const iterable = [500,800,1000,2000,4000,7000];
for (const value of iterable) {
    console.log("this is the value: ", value);
}

const cars = ["Benz","toyota","bmw","camry"];
for (const value of cars) {
    console.log("this is the value: ", value);
}

const names = "isaac";
for (const char of names) {
    console.log(char);
}