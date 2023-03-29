function Login() {

    var login = window.document.getElementById('login').value
    var senha = window.document.getElementById('senha').value

    if (login == 'admin' && senha == 'admin') {

        alert('Login bem-sucedido!')
        window.location.href = "./pag/menu/menu.html"

    } else {

        alert('Login incorreto!')

    }

}

function Register() {
    window.alert('Dica:\n\n-Usuário e senha padrão para administradores.\n-Tudo minúsculo.')
}
