function toggleTheme() {
  document.body.classList.toggle('dark');
}

const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('shrink', window.scrollY > 50);
});