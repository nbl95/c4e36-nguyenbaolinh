const numbarr = ["-7", "3", "5", "-6", "2"];

const n = prompt("enter number");
let foundIndex = -1

numbarr.forEach((numb, i) => {
    if (numb === n){
        foundIndex = i;

    }

})
if (foundIndex === -1) {
    alert("Not found")
}else{
    console.log(`Number ${n} at ${foundIndex} position`);
}