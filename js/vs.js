const app = document.getElementById('root')
const container = document.createElement('div')
container.setAttribute('class', 'container')
app.appendChild(container)


fetch("https://rickandmortyapi.com/api/character?page=20")
.then(res => res.json())
.then(data =>{
  var i=0;
  const card = document.createElement('div')
  card.setAttribute('class', 'card')
  const image=document.createElement('image')
  image.src=data.results[1].image
  const button=document.createElement('button')
  button.textContent=data.results[1].name
  container.appendChild(card)
  card.appendChild(button)
  card.appendChild(image)
 /* card.appendChild(p)
  card.appendChild(p1)
*/
})
  
  
  /*for(i=0;i<12;i++){
  const card = document.createElement('div')
  card.setAttribute('class', 'card')*/
