const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){
    return cats.push("Ralph");
}
function destructivelyPrependCat(){
    return cats.unshift("Bob");
}
function destructivelyRemoveLastCat(){
    return cats.pop("Garfield");
}
function destructivelyRemoveFirstCat(){
    return cats.shift("Milo");
}
function appendCat(Broom){
    return appendCat = [...cats, "Broom"];
}
function prependCat(Arnold){
    return prependCat = ["Arnold", ...cats];
}
function removeLastCat(){
    return removeLastCat = [...cats.slice(0,-1)];
}
function removeFirstCat(){
    return removeFirstCat = [...cats.slice(1)];
}
