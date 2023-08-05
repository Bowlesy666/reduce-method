  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => acc + curr, 0); // acc = accumulator, curr = current value, should give last parameter to avoid bugs, can be any var or starting point
console.log(sum);
let sum2 = nums.reduce((acc, curr) =>{
  console.log(
    'Accumulator: ', acc,
    'Current Value: ', curr,
    'Total: ', acc + curr
  );
  return acc + curr;
}, 0); // last parameter explicitly tells where to start before iterating else, if last paramter not given will use first value of array

console.log(sum2);


const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  },
  {
    name: 'David',
    profession: 'Junior',
    yrsExperience: 2
  }
];

// Totaling a specific object property

let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0); // all as normal but dial down to object value you want to reduce in function part of arrow, also starting value is very important here!
console.log(totalExperience);

// Grouping by a property, and totaling it too
let experienceByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (!acc[key]) {
    acc[key] = curr.yrsExperience;
  } else {
    acc[key] += curr.yrsExperience;
  }
  return acc;
}, {});

console.log(experienceByProfession);