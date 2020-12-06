const Manager = require('../lib/Manager');
const { test, expect } = require('@jest/globals');

test('creates manager object', () => {
  const manager = new Manager('Dave', 1, 'test@email.com', 10);

  expect(manager.officeNumber).toBe(10);
})

test('gets manager role', () => {
  const manager = new Manager('Dave', 1, 'test@email.com', 10);

  expect(manager.getRole()).toBe('Manager');
})