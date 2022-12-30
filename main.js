// create functions for add/subtract/multiply/divide
let result
let currentNum = ""
let previousNum = ""
let op
let displayOne = document.querySelector("#displayOne")
let displayTwo = document.querySelector("#displayTwo")
let clear = document.querySelector("#clearBtn")
let equals = document.querySelector("#equalsBtn")
let body = document.querySelector("body")

let decimal = document.querySelector("#decimalBtn")
decimal.addEventListener("click", disableDecimal)
function disableDecimal() {
    decimal.disabled = true
}
function enableDecimal() {
    decimal.disabled = false
}
clear.addEventListener("click", () => {
    displayOne.textContent = ""
    displayTwo.textContent = ""
    currentNum = ""
    previousNum = ""
    enableDecimal()
})

let numBtns = document.querySelectorAll(".numBtn")
numBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        populateDisplay(e.target.value)
    })
});

let operatorBtns = document.querySelectorAll(".operatorBtn")
operatorBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        handleOperator(e.target.value)
        btn.style.backgroundColor = "white"
        btn.style.color = "rgb(254, 149, 4)"
    })
});
function handleOperator(val) {
    op = val
    previousNum = currentNum
    currentNum = 0
    displayTwo.textContent = displayOne.textContent
    displayOne.textContent = ""
    decimal.disabled = false
    equals.addEventListener("click", () => {
        operatorBtns.forEach((btn) => {
                btn.style.backgroundColor = "rgb(254, 149, 4)"
                btn.style.color = "white"
        });
        enableDecimal()
        if (op === "/") {
            divide(previousNum, currentNum)
        } else if (op === "*") {
            multiply(previousNum, currentNum)
        } else if (op === "-") {
            subtract(previousNum, currentNum)
        } else if (op === "+") {
            add(previousNum, currentNum)
        }
    })
}
function add(a, b) {
    result = (Number(a) + Number(b)).toString()
    result = result.substring(0,8)
    displayOne.textContent = result
    displayTwo.textContent = ""

}

function subtract(a, b) {
    result = (Number(a) - Number(b)).toString()
    result = result.substring(0,8)
    displayOne.textContent = result
    displayTwo.textContent = ""
}

function multiply(a, b) {
    result = (Number(a) * Number(b)).toString()
    result = result.substring(0,8)
    displayOne.textContent = result
    displayTwo.textContent = ""
}

function divide(a, b) {
    result = (Number(a) / Number(b)).toString()
    result = result.substring(0,8)
    console.log(result);
    displayOne.textContent = result
    displayTwo.textContent = ""
    body.addEventListener("click", () => {
        // displayOne.textContent = ""
    })
}

function populateDisplay(val) {
    displayOne.textContent += val
    displayOne.textContent = displayOne.textContent.substring(0,8)
    currentNum += val
    currentNum = currentNum.substring(0, 8)
}




// onclick of any operator button, save the first number that is input by the user, also save the operation that has been chosen


