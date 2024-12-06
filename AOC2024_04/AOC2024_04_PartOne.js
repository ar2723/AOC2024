const fs = require('fs');

fs.readFile('./AOC2024_04_INPUT.txt', 'utf-8', function(err, data) {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }

    // 변환된 string을 2차원 배열로 변환
    const strArr = data.split('\n').map(i => i.split(''));

    let count = 0;
    // 가로 문자열 검색
    strArr.forEach(arr => {
        for(let i = 0; i < arr.length - 3; i++) {
            const str = arr[i] 
                      + arr[i + 1] 
                      + arr[i + 2] 
                      + arr[i + 3]  
            if(str == 'XMAS') count++;
        }
    })
    // 가로 문자열 역순 검색
    strArr.forEach(arr => {
        for(let i = arr.length - 1; i > 2; i--) {
            const str = arr[i] 
                      + arr[i - 1] 
                      + arr[i - 2] 
                      + arr[i - 3]
            if(str == 'XMAS') count++;
        }
    })
    // 세로 문자열 검색
    for(let i = 0; i < strArr.length - 3; i++) {
        for(let j = 0; j < strArr[i].length; j++) {
            const str = strArr[i][j] 
                      + strArr[i + 1][j] 
                      + strArr[i + 2][j]
                      + strArr[i + 3][j]
            if(str == 'XMAS') count++;
        }
    }
    // 세로 문자열 역순 검색
    for(let i = strArr.length - 1; i > 2; i--) {
        for(let j = 0; j < strArr[i].length; j++) {
            const str = strArr[i][j] 
                      + strArr[i - 1][j] 
                      + strArr[i - 2][j]
                      + strArr[i - 3][j]
            if(str == 'XMAS') count++;
        }
    }
    // 대각선 위 -> 아래 문자열 검색
    for(let i = 0; i < strArr.length - 3; i++) {
        // 좌 -> 우 검색
        for(let j = 0; j < strArr[i].length - 3; j++) {
            const str = strArr[i][j] 
                      + strArr[i + 1][j + 1] 
                      + strArr[i + 2][j + 2]
                      + strArr[i + 3][j + 3]
            if(str == 'XMAS') count++;
        }
        // 우 -> 좌 검색
        for(let j = strArr[i].length - 1; j > 2; j--) {
            const str = strArr[i][j] 
                      + strArr[i + 1][j - 1] 
                      + strArr[i + 2][j - 2]
                      + strArr[i + 3][j - 3]
            if(str == 'XMAS') count++;
        }
    }
    // 대각선 아래 -> 위 문자열 검색
    for(let i = strArr.length - 1; i > 2; i--) {
        // 좌 -> 우 검색
        for(let j = 0; j < strArr[i].length - 3; j++) {
            const str = strArr[i][j] 
                      + strArr[i - 1][j + 1] 
                      + strArr[i - 2][j + 2]
                      + strArr[i - 3][j + 3]
            if(str == 'XMAS') count++;
        }
        // 우 -> 좌 검색
        for(let j = strArr[i].length - 1; j > 2; j--) {
            const str = strArr[i][j] 
                      + strArr[i - 1][j - 1] 
                      + strArr[i - 2][j - 2]
                      + strArr[i - 3][j - 3]
            if(str == 'XMAS') count++;
        }
    }
    console.log(count);
});