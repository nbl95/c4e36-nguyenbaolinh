let low = 0;
let high = 100;

for(;;){
    let mid = Math.floor((low + high)/2);
    console.log(mid);
let answer = prompt("answer?").toLowerCase();

if (answer === "s"){
    low = mid;
}else if (answer === "l") {
    high = mid;

}else if (answer === "c"){
    console.log("I know IT");
break;
    
}
}