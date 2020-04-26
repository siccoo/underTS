const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
        return num1 + num2;
}

button.addEventListener("click", function() {
    console.log(add(+input1.value, +input2.value));
});

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    if(showResult) {
        console.log(phrase + n1 + n2);
    } else {
        return n1 + n2;
    }  
}

const number1 = 2;
const number2 = 5.8;
const printResult = true;
const resultPhrase = 'Result is: ';

add(number1, number2, printResult, resultPhrase);



