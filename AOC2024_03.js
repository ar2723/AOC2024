const fs = require('fs');

function mul(a, b) {
    return a * b;
}

fs.readFile('./AOC2024/AOC2024_03_INPUT.txt', 'utf-8', function(err, data) {
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

