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

            /**
             * 페이지리스트 검증 함수
             * @param {Array} arrToBeChecked 검증할 페이지 리스트 
             * @param {Array} compareArr 검증용 페이지 배열
             * @returns boolean
             */
            function checkRightOrder(arrToBeChecked, compareArr) {
                let isRightOrderedArr = true;
                for(let i in compareArr) {
                    const firstPageIdx = arrToBeChecked.indexOf(compareArr[i][0]);
                    const secondPageIdx = arrToBeChecked.indexOf(compareArr[i][1]);
                    if(firstPageIdx >= 0 && secondPageIdx >= 0 && firstPageIdx > secondPageIdx) {
                        isRightOrderedArr = false;
                        // 페이지 순서가 잘못되어 있는 경우
                        // 페이지 리스트 내에서 두 페이지 위치를 바꿔 줌
                        arrToBeChecked[firstPageIdx] = compareArr[i][1];
                        arrToBeChecked[secondPageIdx] = compareArr[i][0];
                        break;
                    }
                }
                // 검증 결과 반환
                return isRightOrderedArr;
            }
            
            dataArr.forEach(el => {
                const isRightOrderedArr = checkRightOrder(el, arr);
                // 최초 페이지 리스트 정렬 순서 검증을 통과하지 못한 리스트에 한해서 수행
                if(!isRightOrderedArr) {
                    let isRevisedRightly = false;
                    // 페이지 리스트 정렬 순서 검증 실패 -> 페이지 순서 재정렬 -> 페이지 리스트 재검증
                    // 재검증 과정에서 검증을 통과할 때까지 계속 반복
                    // 재검증 과정에서 검증 통과 시 가운데 원소 더해줌
                    while(!isRevisedRightly) {
                        isRevisedRightly = checkRightOrder(el, arr);
                        console.log(JSON.stringify(el), isRevisedRightly);
                    }
                    if(isRevisedRightly) {
                        answer += +el[parseInt(el.length / 2)];
                    }
                }
            })
            console.log(answer);
        })
    } 
})