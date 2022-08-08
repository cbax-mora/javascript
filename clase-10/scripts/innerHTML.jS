const animales = ["araña,perro,escorpión,tigre,serpiente"]

let ul = document.querySelector("ul")
// ul.innerHTML =
// `<li>HTML</li>
// <li>CSS</li>
// <li>JS</li>`;

let skillsConcat = "";

for (let i = 0; i < animales.length; i++) {
skillsConcat = skillsConcat + `<li>${animales[i].toUpperCase()}</li>`;
}

ul.innerHTML = skillsConcat