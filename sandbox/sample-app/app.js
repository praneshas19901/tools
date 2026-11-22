/**
 * Sample Utility Functions for Gemini CLI Sandbox Testing
 */

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function formatGreeting(name) {
  if (!name) return 'Hello, Guest!';
  return `Hello, ${name}!`;
}

module.exports = {
  add,
  multiply,
  formatGreeting
};
