const enter = document.getElementById("login__enter");
let inputUser = document.getElementById('login__user');
let inputPassword = document.getElementById('login__password')

enter.addEventListener('click', function() {
    let user = inputUser.value;
    let password = inputPassword.value;
    console.log(`user: ${user} 
password: ${password}`);
    }
)


