class counterIteratorResult {
  constructor(value, done) {
    this.value = value;
    this.done = done;
  }
}

class counterIterator {
  constructor(value, max) {
    this.value = value;
    this.max = max;
  }

  next() {
    try {
      if (this.value > this.max) {
        return new counterIteratorResult(this.value, true);
      } else {
        return new counterIteratorResult(this.value, false);
      }
    } finally {
      this.value++;
    }
  }
}

class Counter {
  constructor(value, max) {
    this.value = value;
    this.max = max;
  }

  [Symbol.iterator]() {}
}

const counter = new Counter(1, 10);
for (const value of counter) {
  console.log(value);
}
