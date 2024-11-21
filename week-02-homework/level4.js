//1.filter 구현
const objArray = [
    { name: 'apple', price: 100 },
    { name: 'banana', price: 200 },
    { name: 'grape', price: 300 },
  ]
  
  // myFilter 를 구현하여 arr.filter 와 동일한 값이 나오도록 하기.

  /*시도한 코드 */
  function myFilter(arr, callback) {
    // myFilter 구현
    for(let i=0; i<arr.length; i++){
      if(callback(arr[i])){
        return arr[i]
      }
    }
  }
  const arrayFilter = myFilter(objArray,function(obj){
    return obj.price >= 200
  })
  console.log(arrayFilter)
  
  /*알아온 해답코드 */
  // function myFilter(arr, callback) {
  //   // myFilter 구현
  //   answer = [];
  //   for(let i=0; i<arr.length; i++){
  //     if(callback(arr[i])){
  //       answer.push(arr[i])
  //     }
  //   }
  //   return answer
  // }
  // const arrayFilter = myFilter(objArray,function(obj){
  //   return obj.price >= 200
  // })
  // console.log(arrayFilter)


//2.map 구현
const objArrayMap = [
    { name: 'apple', price: 100 },
    { name: 'banana', price: 200 },
    { name: 'grape', price: 300 },
  ]
  
  // myMap를 구현하여 arr.map과 동일한 값이 나오도록 하기.
  function myMap(arr, callback) {
    // myMap 구현
    answer = []
    for(let i=0; i<arr.length; i++){
      if(callback(arr[i])){
        answer.push(arr[i].price)
      }
    } 
    return answer
  }
  const arrayMap = myMap(objArrayMap,function(obj){
    return obj.price
  })
  console.log(arrayMap)


//3.reduce 사용
const arr = [1, 2, 3, 4, 5];

// reduce를 이용하여 arr의 모든 값에 곱하기 2를 한 값의 총합을 구하기.
const arrReduce = arr.reduce(function(prev,current){
  return prev+current*2
},0)
console.log(arrReduce)