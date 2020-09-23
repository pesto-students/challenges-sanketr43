const sumEvenArgs = (...args) => {
  if (!Array.isArray(args)) {
    return false;
  }

  return args.reduce(
    (total, value) => (value % 2 == 0 ? total + value : total),
    0
  );
};

export { sumEvenArgs };
