//    1.study 
// A nested list is a list that appears as an element in another list.
// A list can store both integers and strings  
// example: nbl = ["a", 12 , 34, 56]


// ex3:
// let items= ["T-shirt", "sweater"]
// let answer=prompt("Welcome to our shop, your desire?(C, R, U,D")
// if (answer=== "r")
// {
//     console.log(items)
// }
// else if(answer === "c")
// {
//     let newitem= prompt("enter new item")
//     items.push(newitem)
//     console.log(items)
// }
// else if(answer=== "u")
// {
//     let items2=["T-Shirt", "Sweater", "Jeans"]
//     let answer1= prompt("Update position?")
//     let answer2= prompt("your new item?")
//     items2[answer1-1]=answer2
//     console.log(items2)
// }
// else if(answer==="d")
// {
//     let items1=["T-Shirt", "Skirt", "Jeans"]
//     let answer3=prompt("Delete position?")
//     items1.splice(answer3-1, 1)
//     console.log(items1)


// ex4:
// const flock = [5, 7, 300, 90, 24, 50, 75]
// console.log(`Hello, My name is Thinh and these are my sheep size: [${flock.join(', ')}]`)
// function sold(){
//  let max = flock[0]
// for(i=0;i<flock.length;i++){
//     if (max < flock[i]){
//         max = flock[i]
//     }
// } console.log(`Now my biggest sheep has size ${max} and let shear it`)
// flock[flock.indexOf(max)] = 8;
// console.log(`After shearing, here are my flock [${flock.join(', ')}]`)
// }
// sold()
// for(m=1;m<4;m++){
// for(i=0;i<flock.length;i++){
//     flock[i]=flock[i]+50
// }
// console.log(`Month ${m} :One month has passed, now here is my flock \n [${flock.join(', ')}]`);
// if (m===3){continue;}
// sold();
// }
// let total = flock[0]
// for (i=1;i<flock.length;i++) {
//     total = total + flock[i];
// }
// console.log(`My flock has size in total: ${total}`)
// console.log(`I would get ${total} * 2$ = ${total * 2}$`);