// searsh liste .
const input = document.getElementById('searchInput');
const items = document.querySelectorAll('#results .card');

input.addEventListener('input', function () {
  const searchTerm = this.value.toLowerCase();
  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(searchTerm) ? 'list-item' : 'none';
  });
});

// ......


//  copy button
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".copy-btn");
  if (!btn) return;
  const id = btn.dataset.target;
  const el = document.getElementById(id);
  if (!el) return;
  const text = el.innerText;
  navigator.clipboard.writeText(text).then(() => {
    const old = btn.innerText;
    btn.innerText = "Copied ✓";
    setTimeout(() => btn.innerText = old, 1200);
  }).catch(() => {
    alert("Copy failed — use Ctrl+C");
  });
});









//searshe file
const searchInput = document.getElementById('searchInputt');
const resultItems = document.querySelectorAll('#resultst .carddd');
searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();

  resultItems.forEach(item => {
    const itemText = item.textContent.toLowerCase();
    item.style.display = itemText.includes(searchTerm) ? 'list-item' : 'none';
  });
});
//....






const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('.section');

function updateActiveNav() {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveNav);

const menuToggle = document.getElementById('menuToggle');
const navLinksContainer = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinksContainer.classList.toggle('active');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinksContainer.classList.remove('active');
  });
});

document.addEventListener('click', (e) => {
  if (!menuToggle.contains(e.target) && !navLinksContainer.contains(e.target)) {
    navLinksContainer.classList.remove('active');
  }
});





//project filter.
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.getAttribute('data-filter');
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    projectCards.forEach(card => {
      const cat = card.getAttribute('data-cat');
      const show = (filter === 'all' || filter === cat);
      card.style.opacity = show ? '1' : '0';
      card.style.transform = show ? '' : 'translateY(10px)';
      card.style.pointerEvents = show ? 'auto' : 'none';
      card.style.transition = 'opacity .25s ease, transform .25s ease';
      setTimeout(() => { card.style.display = show ? '' : 'none'; }, show ? 0 : 200);
    });
  });
});














//searsh project

const inpiut = document.getElementById('inputes');
const look = document.querySelectorAll('#projects-grid .project-card');

inpiut.addEventListener('input', function () {
  const searchTerm = this.value.toLowerCase();
  look.forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(searchTerm) ? 'list-item' : 'none';
  });
});


//................