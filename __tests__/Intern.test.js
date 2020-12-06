const Intern = require('../lib/Intern');
const { test, expect } = require('@jest/globals');
const { stringContaining } = require('expect');

test('creates intern object', () => {
  const intern = new Intern('Dave',1,'test@email.com','UMN')

  expect(intern.name).toBe('Dave');
  expect(intern.id).toBe(1);
  expect(intern.email).toBe('test@email.com');
  expect(intern.school).toBe('UMN');
})

test('gets intern school', () => {
  const intern = new Intern('Dave',1,'test@email.com','UMN')

  expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school))
})

test('gets intern role', () => {
  const intern = new Intern('Dave',1,'test@email.com','UMN')

  expect(intern.getRole()).toEqual(expect.stringContaining('Intern'))
})