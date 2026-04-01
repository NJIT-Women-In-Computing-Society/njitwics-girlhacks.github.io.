let scrolled = false;

const backgroundB = document.getElementById('backgroundB');
const backgroundBGroup = document.getElementById('backgroundBGroup');
const backgroundAGroup = document.getElementById('backgroundAGroup');
const contentWrapper = document.querySelector('.content-wrapper');
const enterBtn = document.getElementById('enterSiteBtn');

// Button trigger
enterBtn.addEventListener('click', () => {
  if (!scrolled) {
    transitionToMainContent();
    scrolled = true;
  }
});

// Shared transition logic
function transitionToMainContent() {
  // Hide backgroundA
  backgroundAGroup.style.display = 'none';

  // Show backgroundB and content
  backgroundBGroup.style.display = 'block';
  contentWrapper.style.display = 'block';

  // Optional fade-in
  backgroundB.classList.add('fade-in');
  backgroundBGroup.style.opacity = 0;
  contentWrapper.style.opacity = 0;

  setTimeout(() => {
    backgroundBGroup.style.transition = 'opacity 1s';
    contentWrapper.style.transition = 'opacity 1s';
    backgroundBGroup.style.opacity = 1;
    contentWrapper.style.opacity = 1;
  }, 100);
}

// Scroll function: scrolls smoothly to a target element
function scrollToPage(pageId) {
  const target = document.getElementById(pageId);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}

// Add click event listeners for each statue image
document.querySelector('.statue-1').addEventListener('click', () => {
  scrollToPage('whoAreWePage');
});

document.querySelector('.statue-2').addEventListener('click', () => {
  scrollToPage('faqsPage');
});

document.querySelector('.statue-3').addEventListener('click', () => {
  scrollToPage('sponsorsPage');
});

document.querySelector('.statue-4').addEventListener('click', () => {
  scrollToPage('agendaPage');
});

