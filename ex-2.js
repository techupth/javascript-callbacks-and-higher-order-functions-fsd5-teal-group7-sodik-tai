//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  let count=0
  for (let i=0 ; i<array.length ; i++){
    if(operation(array[i])=== true){
      count= count+1
    }
  }
  return count>=5
}
function moreThan70(number){
  if(number>70){
    return true
  }else{
    return false  // return number>70  เขียนได้บรรทัดเดียวไม่ต้องใช้if else
  }
}
const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here
let scoreRoom1Result=atLeastFive(studentScoresRoom1,moreThan70)
let scoreRoom2Result=atLeastFive(studentScoresRoom2,moreThan70)
let scoreRoom3Result=atLeastFive(studentScoresRoom3,moreThan70)
console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);