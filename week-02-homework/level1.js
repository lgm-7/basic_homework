//1.forEach 사용
const objArray = [
    { name: 'apple', price: 100 },
    { name: 'banana', price: 200 },
    { name: 'grape', price: 300 },
  ]
  
  // forEach를 이용하여 objArray의 name을 모두 출력
objArray.forEach(function (person){
  console.log(person.name)
})

console.log('-----------')
//2.indexOf 구현
  // myIndexOf를 구현하여 arr.indexOf와 동일한 값이 나오도록 하기.
const arr = [1, 2, 3, 4, 5];
function myIndexOf(arr, value) {
  // myIndexOf 구현
  for(let i=0; i<arr.length; i++){
    if(arr[i] === value){
      return i
   }
  }
}
const index1 = arr.indexOf(3); // 2
const index2 = myIndexOf(arr, 3); // 2
console.log(index1 === index2); // true

console.log('-----------')
//3.includes 구현
// myIncludes를 구현하여 arr.myIncludes와 동일한 값이 나오도록 하기.
const arrIncludes = [1, 2, 3, 4, 5];
function myIncludes(arr, value) {
  // myIncludes 구현
  for(let i=0; i<arr.length; i++) {
    if(arr[i] === value){
      return true
    }
  }
}

const includes1 = arrIncludes.includes(3); // true
const includes2 = myIncludes(arrIncludes, 3); // true
console.log(includes1 === includes2); // true