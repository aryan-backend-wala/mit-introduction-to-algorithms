class ArraySeq {
  constructor() {
    this.A = [];
    this.size = 0;
  }

  get length() {
    return this.size;
  }

  *[Symbol.iterator]() {
    yield* this.A;
  }

  build(X) {
    this.A = [...X];
    this.size = this.A.length;
  }

  getAt(i) {
    return this.A[i];
  }

  setAt(i, x) {
    this.A[i] = x;
  }
}

// here how it works
const stru = new ArraySeq();
const arr = [1, 2, 3, 4, 5];
stru.build(arr);
stru.setAt(2, 45);
console.log(stru);
for(let num of stru){
  console.log(num);
}
