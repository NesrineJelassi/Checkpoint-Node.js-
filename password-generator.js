const passwordGenerator = require('generate-password');

// Generate a random password
const password = passwordGenerator.generate({
  length: 10,
  numbers: true,
  symbols: true,
});

console.log(password);