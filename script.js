const buttons = [
    'slide1',
    'slide2',
    'slide3',
    'slide4',
    'slide5',
];

buttons.forEach((b) => {
    document.getElementById(b).addEventListener('click', (e) => {
        console.log(e)
    })
})
const data = [
  { name: 'Dream', url: 'colors.html' },
  { name: 'Adore Dream', url: 'colors.html' },
  { name: 'Adore', url: 'colors.html' },
  { name: 'Baby Color', url: 'colors.html' },
  { name: 'Coral', url: 'colors.html' },
  { name: 'Coral Dream', url: 'colors.html' },
  { name: 'Symphony', url: 'colors.html' },
  { name: 'Cotton Fusion', url: 'colors.html' },

];

function showSuggestions() {
  const input = document.getElementsByClassName('search-input')[0];
  const suggestionsBox = document.getElementById('suggestionsBox');
  const filter = input.value.toLowerCase();

  suggestionsBox.innerHTML = ''; // Clear previous suggestions

  if (filter) {
    const suggestions = data.filter(item => item.name.toLowerCase().includes(filter));
    suggestions.forEach(suggestion => {
      const li = document.createElement('li');
      li.textContent = suggestion.name;
      li.style.cssText = 'padding: 10px; cursor: pointer;';
      li.onclick = () => {
        window.location.href = suggestion.url; // Navigate to the target page
      };
      suggestionsBox.appendChild(li);
    });

    suggestionsBox.style.display = 'block';
  } else {
    suggestionsBox.style.display = 'none';
  }
}
let index = 0;

function moveSlide(direction) {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slider img');

    index += direction;

    if (index < 0) {
        index = slides.length - 1;
    } else if (index >= slides.length) {
        index = 0;
    }

    const offset = -index * 100;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}