document.getElementById('titulo').classList.remove('titulo')
let titulos=document.querySelector('h1')
titulos.forEsech(element =>{
    element.classList.add("titulo2")
})

console.log(titulos[0].classList.contains('titulo2'))
titulos[1].classList.toggle("titulo")