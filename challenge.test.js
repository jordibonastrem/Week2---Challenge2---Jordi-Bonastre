function strictEquals(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return false;
  }
  if (isNaN(a / b)) {
    return true;
  }

  return Object.is(a, b);
}
describe("funcion strictEquals", function () {
  test("[test_strictEquals(1,1)-->true]", () => {
    const a = 1;
    const b = 1;
    const expected = true;
    const result = strictEquals(a, b);

    expect(result).toBe(expected);
  });
  test("[test_strictEquals(NaN,NaN)]-->false", () => {
    const a = NaN;
    const b = NaN;
    const expected = false;
    const result = strictEquals(a, b);

    expect(result).toBe(expected);
  });

  test("[test_strictEquals(0,-0)]-->true", () => {
    const a = 0;
    const b = -0;
    const expected = true;
    const result = strictEquals(a, b);

    expect(result).toBe(expected);
  });

  test("[test_strictEquals(-0,0)]-->true", () => {
    const a = 0;
    const b = -0;
    const expected = true;
    const result = strictEquals(a, b);

    expect(result).toBe(expected);
  });

  test("[test_strictEquals(1,'1')]-->false", () => {
    const a = 1;
    const b = "1";
    const expected = false;
    const result = strictEquals(a, b);

    expect(result).toBe(expected);
  });

  test("[test_strictEquals(true,false)]-->false", () => {
    const a = true;
    const b = false;
    const expected = false;
    const result = strictEquals(a, b);

    expect(result).toBe(expected);
  });

  test("[test_strictEquals(false,false)]-->true", () => {
    const a = false;
    const b = false;
    const expected = true;
    const result = strictEquals(a, b);

    expect(result).toBe(expected);
  });

  test("[test_strictEquals(Water,oil)]-->false", () => {
    const a = "Water";
    const b = "oil";
    const expected = false;
    const result = strictEquals(a, b);

    expect(result).toBe(expected);
  });
});
