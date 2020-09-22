function sumFibs(num) {
  let a = 1;
  let b = 1;
  let total = a + b;
  let c = a + b;

  while (c <= num) {
    if (c % 2 == 1) {
      total += c;
    }

    a = b;
    b = c;
    c = a + b;
  }

  return total;
}

function cacheFunction(cb) {
  let cache = {};
  return function (arg) {
    if (arg in cache) {
      return cache[arg];
    } else {
      return (cache[arg] = cb(arg));
    }
  };
}

export { sumFibs, cacheFunction };
