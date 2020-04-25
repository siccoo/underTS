const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
        return num1 + num2;
}

button.addEventListener("click", function() {
    console.log(add(+input1.value, +input2.value));
});

function add(n1, n2) {
    return n1 + n2;
}

const number1 = 2;
const number2 = 5.8;

const result = add(number1, number2)
console.log(result);


