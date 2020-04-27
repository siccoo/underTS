var person = {
    name: "Helen",
    age: 25,
    hobbies: ["Cooking", "Singing", "Praying"],
    role: 'READ ONLY USER'
};
// person.role.push('admin');
// person.role[1] = 10;
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (person.role === 'READ-ONLY-USER') {
    console.log('is read only');
}
