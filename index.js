const coders = [3, 8, 10, 2];

const lengthFunction = (coder) => {
  let i = 0;
  for (i in coder) {
    i++;
  }

  return i;
};

console.log(lengthFunction(coders));
