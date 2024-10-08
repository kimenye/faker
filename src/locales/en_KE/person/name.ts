export default [
  { value: '{{person.firstName}} {{person.lastName}}', weight: 4 },
  { value: '{{person.middleName}} {{person.lastName}}', weight: 2 },
  {
    value: '{{person.firstName}} {{person.middleName}} {{person.lastName}}',
    weight: 4,
  },
];
