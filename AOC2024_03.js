import { readFile } from 'fs';

function mul(a, b) {
    return a * b;
}

function findFn() {
    readFile('./AOC2024_03_INPUT.txt', 'utf-8', function(err, data) {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }
        const inputStr = data.toString();
        const regEx = /(mul)\((\d+),(\d+)\)/g;
        const matchArr = inputStr.matchAll(regEx);
    
        let answer = 0;
    
        matchArr.forEach(match => {
            const arg1 = parseInt(match[2], 10); // 첫 번째 인자
            const arg2 = parseInt(match[3], 10); // 두 번째 인자
    
            answer += mul(arg1, arg2); // 함수 호출
            // console.log(`${funcName}(${arg1}, ${arg2}) = ${result}`);
        });
        console.log(answer);
    });
}

// findFn();

function findFn2() {
    readFile('./AOC2024_03_INPUT.txt', 'utf-8', function(err, data) {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }
        const inputStr = data.toString();
        const regEx = /(mul)\((\d+),(\d+)\)|do\(\)|don't\(\)/g;
        const matchArr = inputStr.matchAll(regEx);
    
        let answer = 0;
        let isEnabled = true;

        matchArr.forEach(match => {
            // console.log(match[0], match.index);

            if(match[0] == 'do()') isEnabled = true
            else if(match[0] == `don't()`) isEnabled = false;

            if(isEnabled && match[0].substr(0,3) == 'mul') {
                const arg1 = parseInt(match[2], 10); // 첫 번째 인자
                const arg2 = parseInt(match[3], 10); // 두 번째 인자
                answer += mul(arg1, arg2); // 함수 호출
            }
        });
        console.log(answer);
    });
}

findFn2();
