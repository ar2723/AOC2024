const fs = require('fs');

fs.readFile('./AOC2024_04_INPUT.txt', 'utf-8', function(err, data) {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }

    // 변환된 string을 2차원 배열로 변환
    const strArr = data.split('\n').map(i => i.split(''));

    let count = 0;

    for(let i = 1; i < strArr.length - 1; i ++) {
        for(let j = 1; j < strArr[i].length - 1; j++) {
            // 중심점 'A'를 중심으로 문자열 검색
            // 'M', 'S' 위치는 상관없고 대각선 대칭 방향으로 각각 1개씩만 존재하면 통과
            if(strArr[i][j] == 'A') {
                const a = 
                   (strArr[i - 1][j - 1] == 'M' && strArr[i + 1][j + 1] == 'S')
                || (strArr[i - 1][j - 1] == 'S' && strArr[i + 1][j + 1] == 'M')
                
                const b = 
                   (strArr[i - 1][j + 1] == 'M' && strArr[i + 1][j - 1] == 'S') 
                || (strArr[i - 1][j + 1] == 'S' && strArr[i + 1][j - 1] == 'M') 
                
                // 대칭쌍이 모두 존재하면 X자 모양이라고 판단
                if(a && b) count++;
            }
        }
    }
    console.log(count);
});