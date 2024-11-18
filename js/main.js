const topBar = document.querySelector('#top-bar')

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
}

// Event Listeners
window.addEventListener('scroll', () => requestAnimationFrame(handleScroll))