//  Write a JavaScript program to check a pair of numbers
//  and return true if one of the numbers is 50 or if their sum is 50.

function isNum_Sum_50(n1, n2) {
    if(n1 === 50 || n2 === 50 || (n1 + n2) === 50) {
        return true
    }else{
       return false
    }
}

console.log(isNum_Sum_50(20,30));
console.log(isNum_Sum_50(20,10));
console.log(isNum_Sum_50(0,50));
console.log(isNum_Sum_50(10,12));
