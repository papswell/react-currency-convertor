const convert = convertor => (value, coeff) => {
  return parseFloat(convertor(value, coeff).toFixed(2));
}

export const to = convert((v, c) => v / c);
export const from = convert((v, c) => v * c);
