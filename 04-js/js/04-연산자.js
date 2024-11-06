function isEven(num) {
    if (num % 2 === 0) {
        console.log("짝수입니다.")
    }
    else {
        console.log("홀수입니다.");

    }
};
isEven(5);

console.log(false || 0 || null);

// nullish 병합 연산자(??)
const h = 0;
console.log(h || 7); // 7
console.log(h ?? 7); // 0
console.log(null ?? 1); // 1
console.log(null ?? undefined); // undefined

// 삼항연산자
const i = 5;
console.log(i < 3 ? '참!!' : '거짓'); // 참!!

// 전개 연산자
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

function sum(a, b, c) {
    console.log(a + b + c);
}

console.log(arr1.concat(arr2));
console.log([...arr1, ...arr2]);

const numbers = [2, 4, 7, 9, 3];
sum(numbers[0], numbers[1], 9);
sum(...numbers);
