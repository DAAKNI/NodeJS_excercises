let counter = 1;

const interval = setInterval(function() {
    console.log(`${counter}te Iteration`);
    console.log('hello')
    if (counter++ > 5) {
        clearInterval(interval);
    }
}, 1000);

console.log('test');