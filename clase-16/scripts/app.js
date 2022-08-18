// console.log(sessionStorage.setItem('variable', '29'))
// console.log(sessionStorage.getItem('variable'))


console.log(localStorage.setItem('variable', '230715'))
console.log(localStorage.getItem('variable'))

const usuario={
    nombre:"sebastian mora",
    edad : 29,
    correo : "cbax0619@gmail.com"
}

const jsonUsuario=JSON.stringify(usuario, undefined,4)

localStorage.setItem(usuario.correo, jsonUsuario)
console.log (localStorage.getItem(usuario.correo))