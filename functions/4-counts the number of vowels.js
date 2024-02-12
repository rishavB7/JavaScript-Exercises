// Write a JavaScript function that accepts a string as a parameter      and counts the number of vowels within the string.

const a = "Hello World"

const vowels = 'aeiouAEIOU'

function vowelsCounter(str) {
    let vowelCount = 0 

    for(let i=0; i<str.length; i++) {
        if(vowels.indexOf(str[i]) !== -1) {
            vowelCount++
        }
    }
    return vowelCount
}

console.log(vowelsCounter(a))