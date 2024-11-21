// [함수 연습 문제]

// 문제 1: 두 숫자를 더하는 함수를 작성하고 결과를 출력하세요.
function sum(a,b){
    return a+b
}
console.log(sum(2,3))
// 문제 2: 이름을 매개변수로 받아서 "안녕하세요, [이름]님!"을 출력하는 함수를 작성하세요.
function say(name){
    console.log(`안녕하세요, ${name}님!`)
}
say("홍길동")
// 문제 3: 세 개의 숫자 중 가장 큰 수를 반환하는 함수를 작성하세요.
function maxNumber(a,b,c){
    return Math.max(a,b,c);
}

function num(number1,number2,number3) {
    let max = number1
    if(number2>max){
        max = number2
    }
    if (number3>max) {
        max = number3
    }
    return max
}

console.log(maxNumber(1,8,3))
console.log(num(10,5,13))
// 문제 4: 숫자를 매개변수로 받아 짝수인지 홀수인지 반환하는 함수를 작성하세요.
function oddeven(number) {
    if(number%2 === 0){
        return '짝수'
    } else {
        return '홀수'
    }
}
console.log(oddeven(5))
// 문제 5: 배열을 매개변수로 받아 모든 요소를 출력하는 함수를 작성하세요.
function all(arr) {
    console.log(...arr)
}
all(["사과","복숭아","수박","바나나"])

function print(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}
print(['강아지','고양이','알파카'])