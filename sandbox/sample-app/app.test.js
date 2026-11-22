const test = require('node:test');
const assert = require('node:assert');
const { add, multiply, formatGreeting } = require('./app.js');

test('add function adds two numbers correctly', () => {
  assert.strictEqual(add(2, 3), 5);
  assert.strictEqual(add(-1, 1), 0);
});

test('multiply function multiplies two numbers correctly', () => {
  assert.strictEqual(multiply(4, 5), 20);
  assert.strictEqual(multiply(3, 0), 0);
});

test('formatGreeting returns proper greeting', () => {
  assert.strictEqual(formatGreeting('Alice'), 'Hello, Alice!');
  assert.strictEqual(formatGreeting(''), 'Hello, Guest!');
  assert.strictEqual(formatGreeting(null), 'Hello, Guest!');
});
