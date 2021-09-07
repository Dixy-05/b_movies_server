const secret = require('crypto').pseudoRandomBytes(64).toString('hex');
console.log('SECRET', secret);
