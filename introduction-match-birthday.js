const students = [
  ["John", "1990-05-17"],
  ["Jane", "1990-05-16"],
  ["Bob", "1990-05-16"],
  ["Alice", "1990-05-19"]
];

const matchBirthday = (students) => {
  const n = students.length;
  const record = Array(n);
  for(let [i, student] of students.entries()){
    const [name1, bDay1 ] = student;
    for(let field of record){
      if(field !== undefined){
        const [name2, bDay2] = field;
        if(bDay2 === bDay1){
          return [name1, name2];
        }
      }
      
    }
    record[i] = student;
  }
  return null;
}

const result = matchBirthday(students);
console.log(result);