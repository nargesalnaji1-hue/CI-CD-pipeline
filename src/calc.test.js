import { describe, it, expect } from "vitest";
import { compoundInterest } from "./calc";

describe("compoundInterest", () => {
  it("calculates correctly", () => {
    const result = compoundInterest(1000, 0.05, 2);
    expect(result).toBeCloseTo(1102.5);
  });
});
