let students = [
    { name: "Adwaith", marks: 85 },
    { name: "Jerolin", marks: 92 },
    { name: "Prasanna", marks: 76 },
    { name: "Ankit", marks: 88 }
];

students.pop();
students.sort((a, b) => a.marks - b.marks);
console.log(students); 

// Output:
// [
//   { name: 'Prasanna', marks: 76 },
//   { name: 'Adwaith', marks: 85 },
//   { name: 'Jerolin', marks: 92 }
// ]