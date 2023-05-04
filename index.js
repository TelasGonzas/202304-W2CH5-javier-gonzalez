const coders = ["Marta", "Luis", "Pere"];
export const lengthFunction = (coder) => {
  let i = 0;

  for (i in coder) {
    i++;
  }

  return i;
};

export const pushFunction = (coder, ...newPush) => {
  const actualArray = [...coder];
  const all = [...actualArray, ...newPush];

  return lengthFunction(all);
};

export const findFunction = (coder, parameter) => {
  const length = lengthFunction(coder);

  for (let i = 0; i < length; i++) {
    if (coder[i] === parameter) {
      return true;
    }
  }

  return false;
};
