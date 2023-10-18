// Write your solution here!

const cats =["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    cats.push(name);
}
function destructivelyPrependCat(name){
    cats.unshift(name);
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name){
    
     let newCats = [...cats, name];
     return newCats;
}
function prependCat(name){
    
    let newCats = [ name, ...cats];;
    return newCats;
}
function removeLastCat(){
    let newCats = [...cats];
    newCats.pop();
    return newCats ;
}
function removeFirstCat(){
    let newCats = [...cats];
    newCats.shift();
    return newCats ;
}

console.log(removeLastCat());