function add(a,b) {
    return a + b;
}

function subtract(c,d) {
    return c - d;
}

function multiply(e,f) {
    return e * f;
}

function divide(g,h) {
    return g / h;
}

function increment(y = 7) {
    return (y += 1);
}

function decrement(z = 3){
    return (z -= 1);
}

function makeInt(n = 0.57){
    return parseInt(n, 10);
}
function preserveDecimal(n = 2){
    return parseFloat(n);
}