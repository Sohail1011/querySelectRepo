const container = document.getElementById('content')
container.classList.add('container')

const titleElement = document.getElementById('content')
titleElement.classList.add('primary')

const tables = document.getElementById('tables')
tables.classList.add('major')

const subtitle = document.querySelector('h2')
subtitle.textContent = 'DOM'

const text = document.querySelector('p')
text.innerHTML = `Su significado es: 'Document Object Document'. <br> Y sirve para dar al Javascript, la posibilidad de
modificar <br> el frontend junto con los selectores de HTML.`