class StaticArray {
  constructor(n){
    this.data = new Array(n).fill(null);
  }

  getAt(i){
    if(!(0 <= i && i < this.data.length)){
      throw new Error("IndexError");
    }
    return this.data[i];
  }

  setAt(i, value){
    if(!(0 <= i && i < this.data.length)){
      throw new Error("IndexError");
    }
    return this.data[i] = value;
  }
}

const birthday_match = (students) => {
  const n = students.length;
  const record = new StaticArray(n);
  for(let i=0;i<n;i++){
    const [name, bday]  = students[i];
    for(let k=0;k<i;k++){
      const [name1, bday1] = record.getAt(k);
      if(bday1 === bday){
        return [name1, name];
      }
    }
    record.setAt(i, [name, bday]);
  }
  return null;
}

const students = [
  ["John", "1990/02/15"],
  ["Alice", "1990/08/17"],
  ["Dale", "1990/08/17"],
];

console.log(birthday_match(students)); // [ 'Alice', 'Dae' ]

// const arr = new StaticArray(3);
// arr.setAt(0, 0);
// arr.setAt(1, 1);
// arr.setAt(2, 2);
// console.log(arr); // StaticArray { data: [ 0, 1, 2 ] }
// console.log(arr.data); // [ 0, 1, 2 ]
// console.log(arr.getAt(1)); // 1