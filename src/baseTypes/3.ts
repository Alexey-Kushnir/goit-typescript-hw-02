let some: unknown;
some = 'Text';
let str: string;

if (typeof some === 'string') {
  str = some;
} else {
  console.error('Invalid type for "some"');
}

export {};
