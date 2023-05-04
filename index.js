const coders = ["Marta", "Luis", "Pere"];

export const lengthFunction = (coder) => {
  let i = 0;
  for (i in coder) {
    i++;
  }

  return i;
};

const pushFunction = (coder, ...newPush) => {
  const actualArray = [...coder];
  const all = [...actualArray, ...newPush];

  return lengthFunction(all);
};
