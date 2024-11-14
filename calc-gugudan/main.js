// 필요한 모듈을 불러옵니다.
import readlineSync from "readline-sync";

// 프로그램 시작
function main() {
  // 사용자로부터 입력을 받습니다.
  const choice = readlineSync.question(`선택하세요:
1. 사칙연산 계산기
2. 구구단 출력기 (2~9단)
`);
  console.log(`${choice}를 선택했습니다.`);
  // 입력에 따라 해당 기능을 실행합니다.
  switch (choice) {
    case "1":
      calculator();
      break;
    case "2":
      printMultiplicationTable();
      break;
    default:
      console.log("잘못된 선택입니다 다시 선택해주세요");
      main();
  }
}

// 사칙연산 계산기 함수
function calculator() {
  // 여기에 코드를 작성하세요.
  const calchoice = readlineSync.question(`선택하세요:
    1.덧셈
    2.뺄셈
    3.곱셈
    4.나눗셈
  `);
  console.log(`${calchoice}를 선택했습니다.`);
  switch (choice) {
    case "1":
      add();
      break;
    case "2":
      subtract();
      break;
    case "3":
      multiply();
      break;
    case "4":
      divide();
      break;
  }
}

function add(){

}

function subtract(){
  
}

// 구구단 출력 함수
function printMultiplicationTable() {
  // 여기에 코드를 작성하세요.
}

// 프로그램 실행
main();

// 시작전 chcp 65001 입력  //입력폰트깨짐해결
