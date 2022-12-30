let result
let currentNum = ""
let previousNum = ""
let op
let displayOne = document.querySelector("#displayOne")
let displayTwo = document.querySelector("#displayTwo")
let clear = document.querySelector("#clearBtn")


let time = new Date().getHours() + ":" + new Date().getMinutes()
let statusbarTime = document.querySelector("#timeDiv")
    statusbarTime.textContent = time;

    

let decimal = document.querySelector("#decimalBtn")
decimal.addEventListener("click", disableDecimal)
function disableDecimal() {
    decimal.disabled = true
}
function enableDecimal() {
    decimal.disabled = false
}
clear.addEventListener("click", () => {
    operatorBtns.forEach((btn) => {
        btn.style.backgroundColor = "rgb(254, 149, 4)"
        btn.style.color = "white"
});
    displayOne.textContent = ""
    displayTwo.textContent = ""
    currentNum = ""
    previousNum = ""
    enableDecimal()
})

let numBtns = document.querySelectorAll(".numBtn")
numBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        negativeBtn.disabled = false
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

let negativeBtn = document.querySelector("#negativeBtn")
negativeBtn.disabled = true
negativeBtn.addEventListener("click", () => {
    currentNum *= -1
    displayOne.textContent = currentNum
})


let equals = document.querySelector("#equalsBtn")
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
}

function populateDisplay(val) {
    displayOne.textContent += val
    displayOne.textContent = displayOne.textContent.substring(0,8)
    currentNum += val
    currentNum = currentNum.substring(0, 8)
}
