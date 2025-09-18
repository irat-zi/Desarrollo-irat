document.getElementById('year').textContent = new Date().getFullYear();

// Endpoints de ejemplo
const API_POSTS = 'https://jsonplaceholder.typicode.com/posts?_limit=3'; // posts demo
const API_USERS = 'https://randomuser.me/api/?results=4&nat=us,es,gb';    // perfiles demo

function makeNewsItem(post) {
  const div = document.createElement('div');
  div.className = 'card news-item';
  const img = document.createElement('img');
  img.src = `https://picsum.photos/seed/post${post.id}/200/140`;
  img.alt = 'foto noticia';
  const body = document.createElement('div');
  const h4 = document.createElement('h4');
  h4.textContent = post.title;
  h4.style.margin = '0 0 6px';
  h4.style.fontFamily = 'Montserrat';
  const p = document.createElement('p');
  p.style.margin = 0;
  p.style.color = 'var(--muted)';
  p.textContent = post.body.slice(0,140) + (post.body.length>140?'…':'');
  body.appendChild(h4);
  body.appendChild(p);
  div.appendChild(img);
  div.appendChild(body);
  return div;
}

function makeVolunteer(user) {
  const cont = document.createElement('div');
  cont.className = 'vol';
  const img = document.createElement('img');
  img.className = 'avatar';
  img.src = user.picture.medium;
  img.alt = user.name.first;
  const meta = document.createElement('div');
  const name = document.createElement('div');
  name.textContent = user.name.first + ' ' + user.name.last;
  name.style.fontWeight = '700';
  const role = document.createElement('div');
  role.textContent = user.location.city + ', ' + user.nat;
  role.style.color = 'var(--muted)';
  role.style.fontSize = '0.9rem';
  meta.appendChild(name);
  meta.appendChild(role);
  cont.appendChild(img);
  cont.appendChild(meta);
  return cont;
}

// Fetch posts (JSONPlaceholder)
fetch(API_POSTS)
  .then(r => r.json())
  .then(posts => {
    const news = document.getElementById('news');
    news.innerHTML = '';
    posts.forEach(p => news.appendChild(makeNewsItem(p)));
  })
  .catch(err => {
    console.error('Error cargando posts', err);
    document.getElementById('news').innerHTML = '<div class="card">No se pudieron cargar las noticias.</div>';
  });

// Fetch volunteers (RandomUser)
fetch(API_USERS)
  .then(r => r.json())
  .then(resp => {
    const users = resp.results || [];
    const vols = document.getElementById('vols');
    vols.innerHTML = '';
    users.forEach(u => vols.appendChild(makeVolunteer(u)));
  })
  .catch(err => {
    console.error('Error cargando usuarios', err);
    document.getElementById('vols').innerHTML = '<div class="card">No se pudieron cargar los perfiles.</div>';
  });

// Contact form demo
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Gracias — tu mensaje se ha registrado (demo).');
  e.target.reset();
});