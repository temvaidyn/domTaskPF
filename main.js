
function roundUp(x) {
    return Math.ceil(x);
}

function CalculateMagic(a, b) {
    // add your code here
    let number = a + b + b;
    number += 90;
    number = number + 90;
    number = number / 10;

    if (number % 5 == 0 ){
        number = number - 8;
    }
    else{
        number - number + 9;
    }

    number = number ** 2;
    // or number = number ** 2;

    let G = number / 3;

    return roundUp(G);

    // remember to call roundUp() with your result before returning
    // return roundUp(g);
}