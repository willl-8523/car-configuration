const topBar = document.querySelector('#top-bar');
const exteriorColorSection = document.querySelector('#exterior-buttons');
const interiorColorSection = document.querySelector('#interior-buttons');
const exteriorImage = document.querySelector('#exterior-image');
const interiorImage = document.querySelector('#interior-image');
const wheelButtonsSection = document.querySelector('#wheel-buttons');
const performanceBtn = document.querySelector('#performance-btn');

let selectedColor = 'Stealth Grey';
const selectedOptions = {
  'Performance wheels': false,
  'Performance Package': false,
  'Full Self-Driving': false,
};

// Handle Top Bar On Scroll
const handleScroll = () => {
  const atTop = window.scrollY === 0;

  /**
   * element.classList.toggle('class-name', condition)
   * => Add class-name if condition is true
   * => Remove class-name if condition is false
   */
  topBar.classList.toggle('visible-bar', atTop);
  topBar.classList.toggle('hidden-bar', !atTop);
};

// Image Mapping
const exteriorImages = {
  'Stealth Grey': './images/model-y-stealth-grey.jpg',
  'Pearl White': './images/model-y-pearl-white.jpg',
  'Deep Blue': './images/model-y-deep-blue-metallic.jpg',
  'Solid Black': './images/model-y-solid-black.jpg',
  'Ultra Red': './images/model-y-ultra-red.jpg',
  Quicksilver: './images/model-y-quicksilver.jpg',
};

const interiorImages = {
  Dark: './images/model-y-interior-dark.jpg',
  Light: './images/model-y-interior-light.jpg',
};

// Handle Color Selection
const handleColorButtonClick = (event) => {
  let button;

  if (event.target.tagName === 'IMG') {
    button = event.target.closest('button');
  } else if (event.target.tagName === 'BUTTON') {
    button = event.target;
  }

  if (button) {
    const buttons = event.currentTarget.querySelectorAll('button');

    buttons.forEach((btn) => btn.classList.remove('btn-selected'));
    button.classList.add('btn-selected');

    // Change exterior image
    if (event.currentTarget === exteriorColorSection) {
      selectedColor = button.querySelector('img').alt;
      updateExteriorImage();
    }

    // Change interior image
    if (event.currentTarget === interiorColorSection) {
      const color = button.querySelector('img').alt;
      interiorImage.src = interiorImages[color];
    }
  }
};

// Update exterior image based on color and wheels
const updateExteriorImage = () => {
  const performanceSuffix = selectedOptions['Performance wheels']
    ? '-performance'
    : '';

  /**
   * The 'in' operator checks whether selectedColor is a key in the exteriorImages object
   */
  const colorKey =
    selectedColor in exteriorImages ? selectedColor : 'Stealth Grey';

  exteriorImage.src = exteriorImages[colorKey].replace(
    '.jpg',
    `${performanceSuffix}.jpg`
  );
};

// Wheel Selection
const handleWheelButtonClick = (event) => {
  if (event.target.tagName === 'BUTTON') {
    const buttons = document.querySelectorAll('#wheel-buttons button');
    buttons.forEach((btn) => btn.classList.remove('bg-gray-700', 'text-white'));

    // Add selected styles to clicked button
    event.target.classList.add('bg-gray-700', 'text-white');

    selectedOptions['Performance wheels'] =
      event.target.textContent.includes('Performance');

    updateExteriorImage();
  }
};

// Performance Package
const handlerPerformanceButtonClick = () => {
  performanceBtn.classList.toggle('bg-gray-700')
  performanceBtn.classList.toggle('text-white')
}

// Event Listeners
window.addEventListener('scroll', () => requestAnimationFrame(handleScroll));
exteriorColorSection.addEventListener('click', handleColorButtonClick);
interiorColorSection.addEventListener('click', handleColorButtonClick);
wheelButtonsSection.addEventListener('click', handleWheelButtonClick);
performanceBtn.addEventListener('click', handlerPerformanceButtonClick);
