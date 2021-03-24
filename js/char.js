const app = document.getElementById('image-space')

fetch("https://rickandmortyapi.com/api/character?page=20")
.then(res => res.json())
.then(data =>{
  var i = Math.floor((Math.random() * 20) + 1);
  

  const image=document.createElement('img')
  image.src=data.results[i].image

  app.appendChild(image)


})


   