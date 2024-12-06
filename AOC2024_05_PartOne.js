const fs = require('fs');

// 검증용 페이지 리스트 txt 파일 읽어와서 배열로 변환
fs.readFile('./AOC2024_05_INPUT_One.txt', 'utf-8', function(err, data) {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    const arr = data.split('\n').map(i => i.split("|"));

    if(arr != null) {
        // 검증대상 페이지 리스트 txt 파일 읽어와서 배열로 변환
        fs.readFile('./AOC2024_05_INPUT_Two.txt', 'utf-8', function(err, data) {
            if (err) {
                console.error("Error reading file:", err);
                return;
            }
            let answer = 0;

            const dataArr = data.split("\r\n").map(i => i.split(","));

            dataArr.forEach(el => {
                let isRightOrderedArr = true;
                
                for(let i in arr) {
                    // 각각 페이지 리스트에서 각각 검증 페이지 순서 별로 인덱스를 찾은 다음
                    const firstPageIdx = el.indexOf(arr[i][0]);
                    const secondPageIdx = el.indexOf(arr[i][1]);
                    // 두 개 페이지 모두 페이지 리스트 안에 존재하는 경우
                    // 첫번째 페이지 인덱스가 두번째 페이지 인덱스 보다 큰 경우 = 첫번째 페이지가 뒤에 있는 경우
                    if(firstPageIdx >= 0 && secondPageIdx >= 0 && firstPageIdx > secondPageIdx) {
                        // 해당 페이지 리스트는 제대로 정렬되어지 있지 않음
                        isRightOrderedArr = false;
                        break;
                    }
                }
                // 페이지 리스트가 모든 페이지 순서에 대해 검증을 통과했다면, 통과된 페이지 리스트의 가운데 원소를 더해줌
                if(isRightOrderedArr) {
                    console.log(JSON.stringify(el));
                    answer += +el[parseInt(el.length / 2)];
                }
            })
            console.log(answer)
        })
    } 
})