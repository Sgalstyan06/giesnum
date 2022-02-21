let giesBtn = document.querySelector("button");
let inpNum1 = document.querySelector("input");
let randNumOut = document.querySelector(".random-number-js");
let outputGies = document.querySelector(".output");
let message = document.querySelector(".message");
let randNum = Math.ceil(Math.random() * 6);
function giesNum(value) {
  return new Promise((resolve, reject) => {
    if (value == randNum) {
      resolve(2);
    } else if (Math.abs(value - randNum) === 1) {
      resolve(1);
    }else {
        reject("you dont gies try again")
    }
  });
}

giesBtn.addEventListener("click", function () {
  randNumOut.innerHTML = randNum;
  let inpNum = Number(inpNum1.value);
  giesNum(inpNum).then((result) => {
    outputGies.innerHTML = result;
  }).catch(result=>{
    message.innerHTML = result;
  });
});
