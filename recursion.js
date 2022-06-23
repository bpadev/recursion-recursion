const calc = {
  // the recursive calls do not use arrow functions because 'this' needed to be implemented.
  fact: (n) => {
    let fact = n;

    do {
      fact = fact * (n - 1);
      n--;
    } while (n > 1);
  
    return fact;
  },
  recurFact: function(n) {
    if (n == 1) {
      return n;
    } else {
      return n * this.recurFact(n - 1);
    }
  },
  tailRecurFact: function(n, accum) {
    // recursive procedure, but an iterative process. Last call is recursive, we do not need to then go back and multiply. We do not need to remember anything we did previously.
    if (n == 1) {
      return accum;
    } else {
      accum = this.tailRecurFact(n - 1, n * accum)
    }
    return accum;
  }
};

console.log( calc.recurFact(10) );