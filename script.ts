const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;

enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
    name: "Helen",
    age: 25,
    hobbies: ["Cooking", "Singing", "Praying"],
    role: Role.ADMIN
};

// person.role.push('admin');
// person.role[1] = 10;

console.log(person);

for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase()); 
}

if(person.role === Role.AUTHOR){
    console.log('is author');
    
}
