const searchinput = document.getElementById("search-input")
const products = document.querySelectorAll(".help-card")
const noResult = document.getElementById("noResults")
searchinput.addEventListener("input",function(){
    const query =
searchinput.value.toLowerCase().trim();
    let matchfound = false;

    products.forEach(Product => {
        const text =
        Product.innerText.toLowerCase();
        if (text.includes(query)) {
            Product.style.display = "";
            matchfound= true;
        }
        else{
            Product.style.display = "none";


        }
        });
        noResult.style.display = matchfound ? "none" : "block" ;
        
    });

const search = document.getElementById("search-btn");
const container = document.getElementById("search-input")

search.onclick = () => {

        container.style.display = "block";

    }
// Side Nav Toggle
const navOpen = document.getElementById('navOpen');
const navClose = document.getElementById('navClose');
const navOverlay = document.getElementById('navOverlay');

function openNav() {
  document.body.classList.add('nav-open');
}

function closeNav() {
  document.body.classList.remove('nav-open');
}

navOpen?.addEventListener('click', openNav);
navClose?.addEventListener('click', closeNav);
navOverlay?.addEventListener('click', closeNav);

// Close on ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeNav();
});

// Highlight active page in side nav
document.querySelectorAll('.side-nav-links a').forEach(link => {
  if (link.href === window.location.href) {
    link.style.background = 'var(--bg, #f8f9fa)';
    link.style.fontWeight = '600';
  }
});
