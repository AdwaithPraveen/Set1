let students = [
    { name: "Adwaith", marks: 85 },
    { name: "Jerolin", marks: 92 },
    { name: "Prasanna", marks: 76 },
    { name: "Ankit", marks: 88 }
];

students.push({ name: "Amit", marks: 95 });

let highest = students[0];
for (let student of students) {
    if (student.marks > highest.marks) {
        highest = student;
    }
}

console.log("Highest Marks Student:");
console.log(highest);