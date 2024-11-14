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
console.log(maxNumber(1,8,3))
// 문제 4: 숫자를 매개변수로 받아 짝수인지 홀수인지 반환하는 함수를 작성하세요.
function oddeven(number) {
    if(number%2 === 0){
        console.log(`${number}은(는) 짝수`)
    } else {
        console.log(`${number}은(는) 홀수`)
    }
}
oddeven(5)
// 문제 5: 배열을 매개변수로 받아 모든 요소를 출력하는 함수를 작성하세요.
function all(arr) {
    console.log(...arr)
}
all(["사과","복숭아","수박","바나나"])