
let key = true
let documents = true
let pen = true
let apple = false
let orange = true
let shouldGoToWork

if ((key && documents && pen) && (apple || orange)) {
    shouldGoToWork=("You can go to work");
    console.log (shouldGoToWork);
} else {
    shouldGoToWork=("You can't go to work");
    console.log (shouldGoToWork);
};