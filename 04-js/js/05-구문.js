// 구조 분해 할당
// 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 자바스크립트 표현식

const arr = [1, 2, 3];
console.log(arr[0], arr[1], arr[2]);

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

const [a, b, c] = arr;
console.log(a, b, c);

// 재할당
let x = 0;
let y = 0;
let z = 0;
const arr1 = [1, 2, 3];

[x, y, z] = arr1;
console.log(x, y, z);

// 나머지할당
const arr2 = [1, 2, 3, 4, 5];
const [a1, ...rest] = arr2;
console.log(a1, rest);

// 객체 구조 분해
const mini = {
    w: 100,
    // h: 200,
    bg: "red",
};
const { bg, w: width, h = 199 } = mini;

console.log(mini.w, mini.h, mini.bg);
console.log(mini);
console.log(width, h, bg);

// 선택적 체이닝
const user = null;
console.log(user?.name);

const user1 = {
    name: 'jihye',
    age: 44,
};

const user2 = {
    name: "jiho",
};
console.log(user2.age);

function printAge(user) {
    console.log(user?.age || '나이 정보 없음');

};

printAge(user1);
printAge(user2);

// 조건문
// if(조건){

// }else{

// }

function isPositive(num) {
    console.log(num);
    if (num > 0) {
        console.log('양수입니다.');
    }
    else if (num === 0) {
        console.log("0입니다.");
    }
    else {
        console.log('음수입니다');
    }
};

isPositive(0);

// switch
// switch (조건) {
//     case 1:
//         return '실행구문';
// };

function Header(type) {
    switch (type) {
        case "type1":
            return "타입1 헤더";
        case "type2":
            return "타입2 헤더";
        case "type3":
            return "타입3 헤더";
        default:
            return "기본 헤더";
    }
};

console.log(Header('type1'));

