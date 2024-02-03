//  Write a JavaScript program to compute the absolute difference 
//  between a specified number and 19. Returns triple the absolute difference
//  if the specified number is greater than 19.  

const cst = 19;

function difference(n) {
    let diff = Math.abs(n - cst);

    if(n > cst) {
        diff = Math.abs(3 * diff);
        console.log(diff);
    } else {
        console.log(diff);
    }
}

difference(12);
difference(19);
difference(22);

