const Engineer = require('../lib/Engineer');
const { test, expect } = require('@jest/globals');

test('creates engineer object', () => {
  const engineer = new Engineer('Dave',1,'test@email.com','calvinj24');

  expect(engineer.name).toBe('Dave');
  expect(engineer.id).toBe(1);
  expect(engineer.email).toBe('test@email.com');
  expect(engineer.gitHub).toBe('calvinj24');
})

test('gets engineer github', () => {
  const engineer = new Engineer('Dave',1,'test@email.com','calvinj24');

  expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.gitHub));
})