// 두 수의 연산값 비교
function solution(a, b) {

    const concatValue = Number(String(a) + String(b));


    const multiplyValue = 2 * a * b;


    return Math.max(concatValue, multiplyValue);
}


console.log(solution(2, 91)); // 364
console.log(solution(91, 2)); // 912
