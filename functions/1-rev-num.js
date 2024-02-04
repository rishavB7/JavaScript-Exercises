let rev = 0;
let remainder;

function reverseNumber(num) {
    while(num % 10 >= 1) {
        remainder = num % 10;
        num /= 10;
        rev = Math.floor(rev * 10 + remainder);
    }
    console.log(rev);
}

reverseNumber(123456789)