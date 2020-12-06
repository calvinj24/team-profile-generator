const Employee = require('../lib/Employee');
const { expect, test } = require('@jest/globals');

test('creates an employee object', () => {
  const employee = new Employee("Dave",1,"test@email.com");

  expect(employee.name).toBe('Dave');
  expect(employee.id).toBe(1);
  expect(employee.email).toBe('test@email.com');
});

test('gets employee name', () => {
  const employee = new Employee("Dave",1,"test@email.com");

  expect(employee.getName()).toBe('Dave');
})

test('gets employee id', () => {
  const employee = new Employee("Dave",1,"test@email.com");

  expect(employee.getId()).toBe(1);
})

test('gets employee email', () => {
  const employee = new Employee("Dave",1,"test@email.com");

  expect(employee.getEmail()).toBe('test@email.com');
})

test('gets employee role', () => {
  const employee = new Employee("Dave",1,"test@email.com");

  expect(employee.getRole()).toBe('Employee');
})

