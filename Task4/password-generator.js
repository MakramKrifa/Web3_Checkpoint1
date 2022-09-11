var generator = require('generate-password');

// Generate one password.
var password = generator.generate({
	length: 15, // defaults to 10
	numbers: true, // defaults to false
	symbols: '!@#$%&*_-', // defaults to false
	uppercase: true, // defaults to true
	strict: true // defaults to false
});
console.log("Generated password :",password);