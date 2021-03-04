const id = 1;
const term = 'Object';
const definitions = [
  {
    id: 1,
    term: 'Object',
    description: 'A collection of name/value pairs (in terms of Javascript)',
    tags: 'js, objects',
    slug: 'object',
    publish: true,
    order: 1,
    synonym: {
      term: 'thing',

    }
  },
  {
    id: 2,
    term: 'Object Literal',
    description: 'An object _literally_ coded using proper object notation.',
    tags: 'js, objects, literals',
    slug: 'object-literal',
    publish: false,
    order: 1
  },
  // TODO: do the rest
  'Object Property - A fancy term for a name/value pair where the _value_ is anything but a function.',
  'Object Method - A fancy term for name/value pair where the _value_ is a function.',
];
console.log(definitions);
