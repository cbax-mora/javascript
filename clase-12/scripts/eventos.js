//evento unload
//document.body.addEventListener("onload", alert('hola'))

//evento click
// document.querySelector("#btn1").addEventListener("click", (e)=>{
//     alert(e.target.textContent)  
// })

let age = document.querySelector('#age')
let boton = document.querySelector('#btn1')

boton.addEventListener("click", ()=>{
    alert(`Su edad es: ${age.value}`)
})
