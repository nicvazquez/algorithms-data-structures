// Naive String Search

function searchString(long, short) {
    let count = 0;
    for(let i = 0; i < long.length; i++) {
        for(var j = 0; j < short.length; j++) {
            if(short[j] !== long[i+j]) break
            if(j === short.length - 1) count++
        }
    }
    return count
}

console.log(searchString("wowomgzomg", "omg"))