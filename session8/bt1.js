const context = {
    users: null,
}

window.onload = async () => {
    await getUsers();
    renderUsers();

}

const getUsers = async () => {
    const res = await fetch('https://reqres.in/api/users');
    const usersDb = await res.json();
    console.log(usersDb)
    context.users = usersDb.data;
}

const renderUsers = () => {
    context.users.forEach( user => {
        let userDiv = document.getElementById('container')
        console.log(user)
        let userElement = `
        <div>
           <img src = ${user.avatar}> 
           <b>Full name: </b> ${user.last_name}${user.first_name}
           <b>Email: </b>${user.email}
           </div>

        
        `
        userDiv.innerHTML += userElement


    })
}
