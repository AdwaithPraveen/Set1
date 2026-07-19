let students = [
    { name: "Adwaith", marks: 85 },
    { name: "Jerolin", marks: 35 },
    { name: "Prasanna", marks: 76 },
    { name: "Ankit", marks: 88 }
];

for (let student of students) {
    if (student.marks < 40) {
        continue;
    }

    console.log(student.name, student.marks);
}