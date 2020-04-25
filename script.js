var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
function add(n1, n2) {
    return n1 + n2;
}
var number1 = 2;
var number2 = 5.8;
var result = add(number1, number2);
console.log(result);
