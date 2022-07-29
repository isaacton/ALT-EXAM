// destructuring array
let cities = ["abuja","lagos","enugu","kano"];
// let[firstCity1, secondCity, thirdCity] = cities;
// alert(firstCity, secondCity, thirdCity);

// destructuring array get the firstCity only
// let[, name3] = cities;
// alert(name3);

// destructuring array get the thirdCity only
// let[, , name3] = cities;
// alert(name3);

// destructuring array get the rest of 
//the names using rest operator only

// let[name, ...restOfNames] = cities;
// alert(restOfNames);


// destructuring objects 
// let human = {eye: "blue", height: 5, skinColor: "fair", house: "duplex"};
// let {eye, height, skinColor, house} = human;
// alert(eye,height, skinColor,house);
// 
// assigne object value to new variable
// let{house: myHouse} = human;
// alert(myHouse);
// let{eye, height,...rest} = human;
// console.log(rest);


// destructuring in function
function getUserInfo(user){
console.log (user);
}



let user = {
    name:"isaac",
    car: "benz",
    cloths:"jeans"
}

getUserInfo(user.car);