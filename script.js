const enter = document.getElementById("login__enter");
let input_user = document.getElementById('login__user');
let input_password = document.getElementById('login__password')

enter.addEventListener('click', function() {
    let user = input_user.value;
    let password = input_password.value;
    console.log(`user: ${user} 
password: ${password}`);
    }
)


