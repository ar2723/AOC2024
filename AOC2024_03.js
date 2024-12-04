// node js 파일 처리 모듈 import
const fs = require('fs');

// 글로벌 함수 선언
mul = (a, b) =>  a * b;

function arrangeMemory() {
    // maxLine 토큰화 이슈로 인해 로컬파일로 읽어와서 스트링으로 변환
    fs.readFile('./AOC2024_03_INPUT.txt', 'utf-8', function(err, data) {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }
        const inputStr = data.toString();
        // mul(num,num) 형태의 문자열 모두 검색하기 위한 정규식
        const regEx = /(mul)\((\d+),(\d+)\)/g;
        const matchArr = [...inputStr.matchAll(regEx)];
        let answer = 0;
        
        // match = ['mul(num,num)', 'mul', 'num', 'num']
        matchArr.forEach(match => {
            const arg1 = parseInt(match[2], 10);
            const arg2 = parseInt(match[3], 10);
    
            answer += mul(arg1, arg2);
        });
        console.log('arrangeMemory :', answer);
    });
}

arrangeMemory();

function arrangeMemory2() {
    fs.readFile('./AOC2024_03_INPUT.txt', 'utf-8', function(err, data) {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }
        const inputStr = data.toString();
        // mul(num,num), do(), don't() 형태의 문자열 모두 검색하기 위한 정규식
        const regEx = /(mul)\((\d+),(\d+)\)|do\(\)|don't\(\)/g;
        const matchArr = [...inputStr.matchAll(regEx)];
    
        let answer = 0;

        // do(), don't 나오기 전에 초기 함수는 활성화 상태
        let isEnabled = true;

        // match = ['mul(num,num)', 'mul', 'num', 'num']
        // match = ['do()']
        // match = ['don't()']
        matchArr.forEach(match => {
            // console.log(match[0], match.index);

            if(match[0] == 'do()') isEnabled = true
            else if(match[0] == `don't()`) isEnabled = false;

            if(isEnabled && match[0].substr(0,3) == 'mul') {
                const arg1 = parseInt(match[2], 10); 
                const arg2 = parseInt(match[3], 10);

                answer += mul(arg1, arg2);
            }
        });
        console.log('arrangeMemory2 :', answer);
    });
}

arrangeMemory2();
