const ARABIC_ROMAN_MAP = [
  ["M", 1000],
  ["CM", 900],
  ["D", 500],
  ["CD", 400],
  ["C", 100],
  ["XC", 90],
  ["L", 50],
  ["XL", 40],
  ["X", 10],
  ["IX", 9],
  ["V", 5],
  ["IV", 4],
  ["I", 1]
];

function romanToArabic(n) {
  let result = '';
  ARABIC_ROMAN_MAP.forEach(([roman, val]) => {
    while (n >= val) {
      result += roman;
      n -= val;
    }
  });
  return result;
}

// Jest tests suite

describe('roman-arabic convert', () => {
  it('1 to I', () => {
    expect(romanToArabic(1)).toBe('I');
  });

  it('2 to II', () => {
    expect(romanToArabic(2)).toBe('II');
  });

  it('3 to III', () => {
    expect(romanToArabic(3)).toBe('III');
  });

  it('4 to IV', () => {
    expect(romanToArabic(4)).toBe('IV');
  });

  it('423 to CDXXIII', () => {
    expect(romanToArabic(423)).toBe('CDXXIII');
  });
});

