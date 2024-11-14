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
    5.돌아가기
  `);
  console.log(`${calchoice}를 선택했습니다.`);
  switch (calchoice) {
    case "1":
      console.log(add());
      console.log("\n사칙연산 선택지로 돌아갑니다")
      calculator();
    case "2":
      console.log(subtract());
      console.log("\n사칙연산 선택지로 돌아갑니다")
      calculator();
    case "3":
      console.log(multiply());
      console.log("\n사칙연산 선택지로 돌아갑니다")
      calculator();
    case "4":
      console.log(divide());
      console.log("\n사칙연산 선택지로 돌아갑니다")
      calculator();
    case "5": main()
    default:console.log("잘못된 선택입니다 다시 선택해주세요");
      calculator();
  }
}

function add(a, b) {
  a = readlineSync.question("덧셈할 첫번째 수를 입력하세요: ");
  b = readlineSync.question("덧셈할 두번째 수를 입력하세요: ");
  return Number(a) + Number(b);
}

function subtract(a, b) {
  a = readlineSync.question("뺄셈할 첫번째 수를 입력하세요: ");
  b = readlineSync.question("뺄셈할 두번째 수를 입력하세요: ");
  return Number(a) - Number(b);
}

function multiply(a, b) {
  a = readlineSync.question("곱셈할 첫번째 수를 입력하세요: ");
  b = readlineSync.question("곱셈할 두번째 수를 입력하세요: ");
  return Number(a) * Number(b);
}

function divide(a, b) {
  a = readlineSync.question("나눗셈할 첫번째 수를 입력하세요: ");
  b = readlineSync.question("나눗셈할 두번째 수를 입력하세요: ");
  return Number(a) / Number(b);
}

// 구구단 출력 함수
function printMultiplicationTable() {
  // 여기에 코드를 작성하세요.
  let a = readlineSync.question("구구단할 단수를 입력하세요: ");
  for(let i=1; i<10; i++) {
    console.log(a*i)
  }
  console.log("\n처음 선택지로 돌아갑니다")
  main()
}

// 프로그램 실행
main();

// 시작전 chcp 65001 입력  //입력폰트깨짐해결
