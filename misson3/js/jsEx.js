let name = "서명진";
const birthYear = 1999;
let favoriteColor = "검정색";
let isStudent = false;

console.log(name);
console.log(birthYear);
console.log(favoriteColor);
console.log(isStudent);

let username = "admin";
let score = 85;

if (username === "admin") {
  console.log("관리자입니다.");
} else {
  console.log("일반 사용자입니다.");
}

if (score >= 90) {
  console.log("수");
} else if (score >= 80) {
  console.log("우");
} else {
  console.log("재시험");
}

function divide(x, y) {
  console.log("몫:", Math.floor(x / y));
}

divide(10, 3);

function introduce(name, age) {
  console.log("안녕하세요, 저는 " + name + "이고, 나이는 " + age + "살입니다.");
}

introduce("명진", 27);