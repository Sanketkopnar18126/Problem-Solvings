let num = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0];

let sortnum = (n) => {
  let store = [];
  for (let i = 0; i < n.length; i++) {
    for (let j = i + 1; j < n.length; j++) {
      if (n[i] > n[j + 1]) {
        n[i] = n[j + 1];
      }
    }
  }
};

console.log(sortnum(num));
