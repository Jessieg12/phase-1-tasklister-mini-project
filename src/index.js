document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    handleCreation(e.target['new-task-description'].value)
    form.reset()
  })
})

const handleCreation = (value) => {
  let p = document.createElement('p')
  let btn = document.createElement('button')
  p.textContent = `${value} `
  p.style.color = 'blue'
  btn.textContent = ' X '
  btn.style.color = 'red'
  btn.addEventListener('click', handleDelete)
  document.querySelector('#tasks').appendChild(p)
  p.appendChild(btn)
}

const handleDelete = (e) => {
  e.target.parentNode.remove()
}