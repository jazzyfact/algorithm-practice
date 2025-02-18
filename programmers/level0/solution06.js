// 문자열 섞기
// 문제 설명
// 길이가 같은 두 문자열 str1과 str2가 주어집니다.
//
// 두 문자열의 각 문자가 앞에서부터 서로 번갈아가면서 한 번씩 등장하는 문자열을 만들어 return 하는 solution 함수를 완성해 주세요.
//
// 제한사항
// 1 ≤ str1의 길이 = str2의 길이 ≤ 10
// str1과 str2는 알파벳 소문자로 이루어진 문자열입니다.
// 입출력 예
// str1	str2	result
// "aaaaa"	"bbbbb"	"ababababab"

function solution(str1, str2) {
    let result = ""; // 최종 문자열을 저장할 변수

    // 문자열의 길이만큼 반복
    for (let i = 0; i < str1.length; i++) {
        result += str1[i] + str2[i]; // str1과 str2의 i번째 문자를 번갈아 추가
    }

    return result; // 결과 반환
}
