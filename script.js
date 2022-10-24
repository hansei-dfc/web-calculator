// 계산 해줘

const btn_clear = document.querySelector(".btn--clear");
const btn_sign = document.querySelector(".btn--sign");
const btn_number = document.querySelectorAll(".btn--number");
const btn_operator = document.querySelectorAll(".btn--operator");
const btn_dot = document.querySelector(".btn--dot");
const btn_equal = document.querySelector(".btn--equal");

var display = document.querySelector(".display__input");

var firstNumber = "";
var secondNumber = "";
var operator = "";
var result = 0;

btn_clear.addEventListener("click", () => {
  display.innerText = "0";
  firstNumber = "";
  secondNumber = "";
  operator = "";
  result = 0;
});


btn_number.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (operator === "") {
      firstNumber += btn.innerText;
      display.innerText = firstNumber;
    } else {
      secondNumber += btn.innerText;
      display.innerText = secondNumber;
    }
  })
});

btn_operator.forEach((btn) => {
  btn.addEventListener("click", () => {
    operator = btn.innerText;
  })
});

btn_equal.addEventListener("click", () => {
  if (operator === "+") {
    result = Number(firstNumber) + Number(secondNumber);
  }
  else if (operator === "-") {
    result = Number(firstNumber) - Number(secondNumber);
  }
  else if (operator === "*") {
    result = Number(firstNumber) * Number(secondNumber);
  }
  else if (operator === "/") {
    result = Number(firstNumber) / Number(secondNumber);
  }
  display.innerText = result;
  firstNumber = result;
  secondNumber = "";
  operator = "";
});

btn_sign.addEventListener("click", () => {
  if (operator === "") {
    firstNumber = -firstNumber;
    display.innerText = firstNumber;
  } else {
    secondNumber = -secondNumber;
    display.innerText = secondNumber;
  }
});

btn_dot.addEventListener("click", () => {
  if (operator === "") {
    firstNumber += ".";
    display.innerText = firstNumber;
  } else {
    secondNumber += ".";
    display.innerText = secondNumber;
  }
});