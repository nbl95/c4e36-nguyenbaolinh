window.onload = () => {
    const x = Math.floor(Math.random() *11);
const y = Math.floor(Math.random() *11);
const ops = ['+', '-', '*', '/'];
const op = ops[Math.floor(Math.random() *ops.length)];
 
const result = calc(x,y,op);




const errors = [-1 , 0 , 1];
const error = errors[Math.floor(Math.random() *errors.length)];
const displayResult = result+error;
alert(`${x} ${op} ${y} = ${displayResult} `);

const answer = prompt("Y/N").toLocaleLowerCase();

if (error === 0){
    if (answer ==="y"){
        alert("good");
    }else if (answer === "n"){
        alert("Wrong");
    }
}else{
    if (answer ==="y"){
        alert("good");
    }else if (answer === "n"){
        alert("Wrong");
    }

}

}








