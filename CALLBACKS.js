// A callback with success and error handler.
function getData(url, success, error) {
  if(!url){
    return;
  }


  // load content of a page from url
const xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.send();
xhr.onload = function() {
  if(xhr.status == 200){
    success(this.responseText);
  }else{
    error(xhr.status);
  }
};  
}


function success(result) {
  alert("successful");
  alert(result);
}


function error(status) {
  alert(`what the fuck is this hun! please enter a reasonable url error occur with the code ${status}`);
}

const url = prompt("Enter a valid URL");

getData(url, success, error);

// function add(num1,num2){
  // var result = num1 + num2
  // console.log(`${result}`);
// }
// 
// add(100000,5000);
// const children = ["paul","james","isaac"];
// 








