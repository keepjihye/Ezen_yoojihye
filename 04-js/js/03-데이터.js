// 문자열
const string1 = "hello";
const string2 = "javascript";
// 리터럴 방식
const string3 = `${string1} world ${string2}`;

const string4 = 'world' + string1 + string2

console.log(string3);
console.log(string4);

// 숫자
const number1 = 123;
console.log(number1 + 1);

// 데이터 타입 확인하기
console.log(typeof (number1));

// 데이터 타입 바꾸기
const a = 0.1;
const b = 0.2;

console.log(a + b); // 부동 소수점 방식으로 인해 0.3이 아닌 0.30000000000000004가 나옴
console.log((a + b).toFixed(1)); // toFixed() : 소수점 자리수를 지정해주는 메소드, 문자열로 반환
console.log(typeof (a + b).toFixed(1)); // 문자열이기 때문에 typeof로 확인해보면 string이 나옴
console.log(Number((a + b).toFixed(1))); // Number로 감싸주면 number로 반환

// 배열 (순서가 있는 집합)
const array1 = [1, 2, 3, 4, "마지막"];
console.log(array1);
console.log(array1[0], array1[3]);
console.log(array1[array1.length - 1]);

// 객체 (순서가 없는 집합)
const user = {
    name: '지혜',
    age: 3
}
console.log(`${user.name}는 ${user.age}살입니다.`);

