let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Bunny Helen';
if(typeof userInput === 'string') {
    userName = userInput;
}

function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code}
}

generateError('An error occured!!!', 500);

const button = document.querySelector('button')!;

button?.addEventListener('click', () => {
    console.log("Clicked");
});