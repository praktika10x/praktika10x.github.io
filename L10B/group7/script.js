const buttons = document.querySelectorAll('.toggle-button');
const texts = document.querySelectorAll('.text');


buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
   
    texts[index].classList.toggle('active');

    if (texts[index].classList.contains('active')) {
      button.textContent = 'Hide Text';
    } else {
      button.textContent = 'Show Text';
    }
  });
});
