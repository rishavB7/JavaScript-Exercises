// Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g

function possibleStrings(str) {
    let arr = [];
    let i,j=0
    for (i=0; i<str.length; i++) {
        str[i] = str.substring(i,j)
        arr.push(str[i])
        j++
    }
    let comb = [];
    let temp ="";
    let strLn = Math.pow(2, arr.length);

    for (let k = 0; k < strLn; k++) {
        temp = "";
        for (let m = 0; m<arr.length; m++) {
            if(k & Math.pow(2,m)) {
                temp += arr[m]
            }
        }
        if(temp !== "") {
            comb.push(temp);
        }
    }
    console.log(comb.join('\t'));
}

possibleStrings("Dog")

