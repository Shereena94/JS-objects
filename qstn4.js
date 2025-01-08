// const company = {
//     name: "TechCorp",
//     employees: [
//       { id: 1, name: "Alice", department: "Engineering", salary: 70000 },
//       { id: 2, name: "Bob", department: "Marketing", salary: 50000 },
//       { id: 3, name: "Charlie", department: "Engineering", salary: 80000 },
//       { id: 4, name: "Diana", department: "HR", salary: 60000 }
//     ],
//     location: "New York",
//     established: 2010
//   };
// //   How do you find the total salary of all employees in the "Engineering" department?



const company = {
    name: "TechCorp",
    employees: [
      { id: 1, name: "Alice", department: "Engineering", salary: 70000 },
      { id: 2, name: "Bob", department: "Marketing", salary: 50000 },
      { id: 3, name: "Charlie", department: "Engineering", salary: 80000 },
      { id: 4, name: "Diana", department: "HR", salary: 60000 }
    ],
    location: "New York",
    established: 2010
  };

let TotalEngineeringSalary=company['employees'].filter((a)=>a['department']=="Engineering").reduce((a,b)=>a+b['salary'],0)

console.log(TotalEngineeringSalary)