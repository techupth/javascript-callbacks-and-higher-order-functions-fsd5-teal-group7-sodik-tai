// Exercise #1: For Each Function

function forEach(array, operation) {
  // Start coding here
  for (let i=0; i<array.length; i++) {
    operation(array[i])
 }
}
//newEmployeeSalaries = forEach
const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

// Using `forEach` function here
function plus(m) {let afterBonus = m + 5000;
newEmployeeSalaries.push(afterBonus)}

forEach(employeeSalaries,plus); 

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
