// //Write a program that takes an array of objects and a property name, and returns the first object where the property exists


const obj = [
    { id: 1, name: "Alice", aa: 'house' },
    { id: 2, name: "Bob", property: "villa" },
    { id: 3, name: "Charlie", property: "home" }
  ];


console.log(obj.find((a)=>a['property']?a:''))