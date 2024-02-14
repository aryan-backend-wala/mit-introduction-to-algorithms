class ArraySeq {
  constructor() {
      this.A = [];
      this.size = 0;
  }

  get length() {
      return this.size;
  }

  [Symbol.iterator]() {
      return this.A[Symbol.iterator]();
  }

  build(X) {
      this.A = Array.from(X);
      this.size = this.A.length;
  }

  getAt(i) {
      return this.A[i];
  }

  setAt(i, x) {
      this.A[i] = x;
  }
  // i = originalArrIndex j = newArrIndex n = originallength
  // A = newArr
  _copyForward(i, n, A, j) {
      for (let k = 0; k < n; k++) {
          A[j + k] = this.A[i + k];
      }
  }

  // _copyBackward(i, n, A, j) {
  //     for (let k = n - 1; k >= 0; k--) {
  //         A[j + k] = this.A[i + k];
  //     }
  // }

  insertAt(i, x) {
      const n = this.length;
      const A = new Array(n + 1);
      this._copyForward(0, i, A, 0);
      A[i] = x;
      this._copyForward(i, n - i, A, i + 1);
      this.build(A);
  }

  deleteAt(i) {
      const n = this.length;
      const A = new Array(n - 1);
      this._copyForward(0, i, A, 0);
      const x = this.A[i];
      this._copyForward(i + 1, n - i - 1, A, i);
      this.build(A);
      return x;
  }

  insertFirst(x) {
      this.insertAt(0, x);
  }

  deleteFirst() {
      return this.deleteAt(0);
  }

  insertLast(x) {
      this.insertAt(this.length, x);
  }

  deleteLast() {
      return this.deleteAt(this.length - 1);
  }
}

// Example usage:
const arraySeq = new ArraySeq();
arraySeq.build([1, 2, 3]);

console.log(arraySeq.length); // Output: 3
console.log([...arraySeq]);   // Output: [1, 2, 3]

arraySeq.insertLast(4);
console.log([...arraySeq]);   // Output: [1, 2, 3, 4]

arraySeq.deleteFirst();
console.log([...arraySeq]);   // Output: [2, 3, 4]

arraySeq.deleteAt(1);
console.log([...arraySeq]);

arraySeq.insertAt(2, 5);
console.log([...arraySeq]);

arraySeq.insertAt(1, 15);
console.log([...arraySeq]);

