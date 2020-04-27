const person = {
    name: "Helen",
    age: 25,
    hobbies: ["Cooking", "Singing", "Praying"],
    role: 'READ ONLY USER'
};

// person.role.push('admin');
// person.role[1] = 10;

console.log(person);

for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase()); 
}

if(person.role === 'READ-ONLY-USER'){
    console.log('is read only');
    
}
