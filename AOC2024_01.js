import {arr3, arr4} from "./AOC2024_01_data.js"

function findLocationId(list1, list2) {
    const arr1 = list1.sort((a, b) => a - b);
    const arr2 = list2.sort((a, b) => a - b);
    
    let totalDistance = 0;

    for(let i in arr1) {
        totalDistance += Math.abs(arr1[i] - arr2[i])
    }
    console.log('totalDistance :', totalDistance);
    return totalDistance;
}

function findLocationId2(list1, list2) {
    let similarityScore = 0;
    for(let i in list1) {
        const arr = list2.filter(j => j == list1[i]);
        similarityScore += list1[i] * arr.length;
    }
    console.log('similarityScore : ', similarityScore);
    return similarityScore;
}

findLocationId(arr3, arr4);

findLocationId2(arr3, arr4);