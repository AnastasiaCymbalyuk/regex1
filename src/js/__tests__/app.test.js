import Validator from '../app';

it('Validator true', () => {
  const result = new Validator('lo-_76gin').validateUsername();
  expect(result).toBe(true);
});

it('Validator false (-)', () => {
  const result = new Validator('-login').validateUsername();
  expect(result).toBe(false);
});

it('Validator false (_)', () => {
  const result = new Validator('_login').validateUsername();
  expect(result).toBe(false);
});

it('Validator false (number/center)', () => {
  const result = new Validator('lo7777gin').validateUsername();
  expect(result).toBe(false);
});

it('Validator false (number/end)', () => {
  const result = new Validator('login5').validateUsername();
  expect(result).toBe(false);
});
