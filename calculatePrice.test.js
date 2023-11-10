const calculatePrice = require('./calculatePrice');

describe('test users between ages 21-25 buying prohibited products', () => {
  test('Test user between aged 21 buying C product', () => {
    expect(calculatePrice.applyAgeRestrictions(21, 'C')).toBe(false);
  });

  test('Test user between aged 25 buying D product', () => {
    expect(calculatePrice.applyAgeRestrictions(25, 'D')).toBe(false);
  });
});

describe('test age restriction', () => {
  test('Test 20-year-old user buying A product', () => {
    expect(calculatePrice.calculateProductPrice(20, 'A', false, false)).toBe('Customer does not meet the purchase requirements.');
  });

  test('Test 21-year-old user buying A product', () => {
    expect(calculatePrice.calculateProductPrice(21, 'A', false, false)).toBe(15);
  });

  test('Test user buying A product', () => {
    expect(calculatePrice.calculateProductPrice(55, 'A', false, false)).toBe(15);
  });

  test('Test user buying D product', () => {
    expect(calculatePrice.calculateProductPrice(55, 'D', false, false)).toBe(18);
  });
});

describe('member has made returns', () => {
  test('Test user buying A product', () => {
    expect(calculatePrice.calculateProductPrice(55, 'A', true, false)).toBe(165);
  });

  test('Test user buying B product', () => {
    expect(calculatePrice.calculateProductPrice(55, 'B', true, false)).toBe(165);
  });

  test('Test user buying D product', () => {
    expect(calculatePrice.calculateProductPrice(55, 'D', true, false)).toBe(168);
  });
});

describe('member is a loyalty member', () => {
  test('Test user buying A product', () => {
    expect(calculatePrice.calculateProductPrice(55, 'A', false, true)).toBe(13.5);
  });

  test('Test user buying B product', () => {
    expect(calculatePrice.calculateProductPrice(55, 'A', false, true)).toBe(13.5);
  });
});
