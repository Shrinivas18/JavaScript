// Group items by a property
const people = [
  { name: "John", age: 20 },
  { name: "Sarah", age: 20 },
  { name: "Bob", age: 30 },
];

const groupedItem = people.reduce((acc, item) => {
  acc[item.age] = acc[item.age] || [];
  acc[item.age].push(item);
  return acc;
}, {});

console.log(groupedItem);
