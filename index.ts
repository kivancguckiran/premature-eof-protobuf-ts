import { Test } from './api';

/////////////
console.log('first test');

const test = Test.create({
  name: '﻿',
});

const binary = Test.toBinary(test);
const fromBinary = Test.fromBinary(binary);

console.log(test.name.length);
console.log(fromBinary.name.length);

/////////////
console.log('second test');

const test2 = Test.create({
  name: '﻿test﻿',
});

const binary2 = Test.toBinary(test2);
const fromBinary2 = Test.fromBinary(binary2);

console.log(test2.name.length);
console.log(fromBinary2.name.length);
