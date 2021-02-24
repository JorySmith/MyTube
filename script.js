
const overFlow = document.getElementsByClassName('overflow');
const downArrow = document.getElementById('down-arrow');
const upArrow = document.getElementById('up-arrow');

downArrow.addEventListener('click', toggleHidden);
upArrow.addEventListener('click', toggleHidden);


function toggleHidden() {
  // toggle hidden on subscriptions
  Array.from(overFlow).forEach(element => element.classList.toggle('hidden'));

  // toggle hidden on up/down-arrow, and show less vs show more
  downArrow.classList.toggle('hidden');
  upArrow.classList.toggle('hidden');
};