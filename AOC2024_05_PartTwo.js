const fs = require('fs');

fs.readFile('./AOC2024_05_EXAMPLE_One', 'utf-8', function(err, data) {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }

    const arr = data.split('\r\n').map(i => i.split("|"));

    if(arr != null) {
        fs.readFile('./AOC2024_05_EXAMPLE_Two.txt', 'utf-8', function(err, data) {
            if (err) {
                console.error("Error reading file:", err);
                return;
            }
            let answer = 0;
            const dataArr = data.split("\r\n").map(i => i.split(","));

            dataArr.forEach(el => {
                let isRightOrderedArr = true;
                for(let i in arr) {
                    const firstPageIdx = el.indexOf(arr[i][0]);
                    const secondPageIdx = el.indexOf(arr[i][1]);
                    if(firstPageIdx >= 0 && secondPageIdx >= 0 && firstPageIdx > secondPageIdx) {
                        isRightOrderedArr = false;

                    }
                }
                if(isRightOrderedArr) {
                    console.log(JSON.stringify(el));
                    answer += +el[parseInt(el.length / 2)];
                }
            })
            console.log(answer)
        })
    } 
})