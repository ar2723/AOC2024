import {arr, arr2} from "./AOC2024_02_data.js"

// 주어진 배열이 오름차순 또는 내림차순으로 정렬되어있는지 검증
function checkArrRightSorted(arr){
    const arrASC = [...arr].sort((a, b) => (a - b));
    const arrDESC = [...arr].sort((a, b) => (b - a));
    return JSON.stringify(arr) === JSON.stringify(arrASC) 
        || JSON.stringify(arr) === JSON.stringify(arrDESC);
}

// 주어진 배열에 대해 각각의 차순에서 차이 값이 1이상 3이하인지 검증
function checkInnerArray(arr) {
    for(let j in arr) {
        const deduct = Math.abs(arr[j] - arr[j - 1]);
        if( deduct < 1 || deduct > 3 ) return false;
    }
    return true;
}

function findSafeReport(arr) {
    let answer = [];
    for(let i in arr) {
        // 대상 배열에 대해 차순 검증 및 차이값 검증을 모두 통과하면 safe level
        if(checkArrRightSorted(arr[i]) && checkInnerArray(arr[i])) {
            answer.push(arr[i]);
        }
    }
    console.log('findSafeReport : ', answer.length);
}

findSafeReport(arr);

// Problem Dampener (원소 1개에 대해서 제거했을 때를 검증) 추가
function findSafeReport2(arr) {
    let answer = [];
    for(let i in arr) {
        if(checkArrRightSorted(arr[i])) {
            if(checkInnerArray(arr[i])) answer.push(arr[i]);
            // Problem Dampener 검증 수행
            else {
                for(let j in arr[i]) {
                    const slicedArr = [...arr[i]];
                    slicedArr.splice(j, 1);
                    // 차순 검증을 통과한 배열에서 순차적으로 원소를 제거했을 때,
                    // 해당 배열의 차이값 검증을 통과하면 바로 break
                    if(checkInnerArray(slicedArr)) {
                        answer.push(arr[i]);
                        break;
                    };
                }
            }
        }
        // Problem Dampener 검증
        else {
            for(let j in arr[i]) {
                const slicedArr = [...arr[i]];
                slicedArr.splice(j, 1);
                // 검증 대상 배열에서 순차적으로 원소를 제거했을 때,
                // 해당 배열에 대해 차순 검증 및 차이값 검증을 모두 통과하면 바로 break
                if(checkArrRightSorted(slicedArr) && checkInnerArray(slicedArr)) {
                    answer.push(arr[i]);
                    break;
                }
            }
        }
    }
    console.log('findSafeReport2 : ', answer.length);
}

findSafeReport2(arr);