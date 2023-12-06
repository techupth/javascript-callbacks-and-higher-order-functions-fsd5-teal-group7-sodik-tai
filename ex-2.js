//Exercise #2: At Least Five Function
let count;
function atLeastFive(array, operation) {
  count = 0;
  for (let i = 0; i < array.length; i++) {
    if (operation(array[i]) >= 5) {
      return true;
    }
  }
  return false;
}
const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

function scoreCal(array2) {
  if (array2 > 70) {
    count++;
    console.log(count);
  }
  return count;
}

let scoreRoom1Result = atLeastFive(studentScoresRoom1, scoreCal);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, scoreCal);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, scoreCal);

console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);
