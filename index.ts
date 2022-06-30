import { Test } from './api';

const test = Test.create({
  name: '﻿test﻿',
});

const binary = Test.toBinary(test);
const fromBinary = Test.fromBinary(binary);

console.log('Result of Test.create()');
for (let i = 0; i < test.name.length; i++) {
  process.stdout.write(`${test.name.charCodeAt(i)}, `);
}

process.stdout.write('\n\n');

console.log('Result of Test.fromBinary()');
for (let i = 0; i < fromBinary.name.length; i++) {
  process.stdout.write(`${fromBinary.name.charCodeAt(i)}, `);
}
