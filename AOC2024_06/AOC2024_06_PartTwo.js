const fs = require('fs');

fs.readFile('./AOC2024_06/AOC2024_06_EXAMPLE.txt', 'utf-8', function(err, data) {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    const arr = data.split('\r\n').map(i => i.split(''));

    let startPostion = [];

    arr.forEach((el, idx)=> {
        const colIdx = el.indexOf('^');
        if(colIdx > 0) {
            console.log(`row : ${idx} | column : ${colIdx}`);
            startPostion = [...[idx, colIdx]];
        }
    })

    let [row, col] = startPostion;

    let direction = 'up'
    
    while(row < arr.length - 1 && col < arr[0].length - 1) {
        switch (direction) {
            case 'up' : 
                row--;
                if(arr[row][col] == '.') arr[row][col] = 'X'
                else if (arr[row][col] == '#') {
                    direction = 'right';
                    row++;
                }
                break;

            case 'right' : 
                col++;
                if(arr[row][col] == '.') arr[row][col] = 'X'
                else if (arr[row][col] == '#') {
                    direction = 'down';
                    col--;
                }
                break;

            case 'down' : 
                row++;
                if(arr[row][col] == '.') arr[row][col] = 'X'
                else if (arr[row][col] == '#') {
                    direction = 'left';
                    row--;
                }
                break;

            case 'left' : 
                col--;
                if(arr[row][col] == '.') arr[row][col] = 'X'
                else if (arr[row][col] == '#') {
                    direction = 'up';
                    col++;
                }
                break;
        }
    }
    let count = 0;
    arr.forEach(el => {
        console.log(el.join(''));
        count += el.filter(i => i == 'X').length;
    })
    console.log(count);
})