let arr1 = ["asw", "fdfd", "bgf", "rer", "lo"];
let str = "fswfivnwoihckfwo";

function getFirstValue(arr) {
    if (typeof(arr) === "string"){
        arr = Array.from(arr);
    }
    if (arr.length == 0) {
        return "";
    } else if (arr.length == 1) {
        return arr[0];
    } else {
        arr.sort();
        return arr[arr.length-1];
    }
} 

console.log(getFirstValue(arr1));
console.log(getFirstValue(str));
