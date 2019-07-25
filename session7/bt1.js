let btnAdd = document.getElementById('btn-add');
let foodInput = document.getElementById('foot-input');
let menu = document.getElementById('menu');
let deleteBtn = document.getElementById('btn-delete');
let btnDeleteSelect = document.getElementById("btn-deleteselect")
btnAdd.addEventListener('click' , () =>{
    let newFood = `<li>${footInput.value}</li>`
    menu.innerHTML += newFood;
    
})
btnDelete.addEventListener('click' ,( => {
    menu.lastElementChild.remove();
}))
btnDeleteSelect.addEventListener('click' , () =>{
    for(let i = 0; i < menu.children.length; i++) {
        eachFood.remove();
    }
})
