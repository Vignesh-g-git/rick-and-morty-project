const app = document.getElementById('root');
const container = document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(container);

fetch('https://rickandmortyapi.com/api/character?page=20')
  .then((res) => res.json())
  .then((data) => {
    let i = 0;
    for (i = 0; i < 12; i++) {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = data.results[i].name;

      const image = document.createElement('img');
      image.src = data.results[i].image;

      const p = document.createElement('p');
      p.textContent = `Gender : ${data.results[i].gender}`;

      const p1 = document.createElement('p');
      p1.textContent = `Status : ${data.results[i].status}`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(image);
      card.appendChild(p);
      card.appendChild(p1);
    }
  });
