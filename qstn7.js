//Use Object.entries() to iterate through an object and log each key-value pair.

const person = {
    name: "shereena",
    age: 30,
    city: "TVM"
  };
  
  Object.entries(person).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });

// console.log(Object.entries(person));