// Write your solution here!
// assigned varable cat an initial value

let cats = ["Milo", "Otis","Garfield"]
// both .push &.unshift
// They take one or more arguments (the element or elements you want to add)
// They return the length of the modified array
// They are destructive methods

// .push array methods adds elements to the end of an Array
function destructivelyAppendCat (name){
    return cats.push(name);
}
// .unshift array methods adds elements to the beginning of an Array
function destructivelyPrependCat(name){
    return cats.unshift(name);
}
// The .pop() method removes the last element in an Array:
function destructivelyRemoveLastCat(name){
    return cats.pop(name);
}
// The .shift() method removes the last element in an Array:
function destructivelyRemoveFirstCat(name){
    return cats.shift(name);
}
// .slice method =remove elements from an Array nondestructively
// .slice returns a portion of an Array
function appendCat(name){
    let newCats = cats.slice()
    newCats.push(name)
    return newCats;
}

function prependCat(name){
    let newCats = cats.slice()
    newCats.unshift(name)
    return newCats;
}

function removeLastCat(){
    let bigCats = cats.slice()
    bigCats.pop()
    return bigCats;
}

function removeFirstCat(){
    let smallCats = cats.slice()
    smallCats.shift()
    return smallCats}