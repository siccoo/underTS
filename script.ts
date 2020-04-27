const person = {
    name: "Helen",
    age: 25,
    hobbies: ["Cooking", "Singing", "Praying"]
};

console.log(person);

for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    
}
