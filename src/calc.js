export function compoundInterest(initial, rate, years) {
  return initial * Math.pow(1 + rate, years);
}
