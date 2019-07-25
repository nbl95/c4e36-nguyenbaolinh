const context = {
    users: null,
}

window.onload = () => {
    getUsers();

}

const getUsers = async () => {
    const res = await fetch('https://reqres.in/api/users');
    console.log(await res.json());
    context.users = users.data;
}

const renderUsers = () => {
    
}