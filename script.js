// Cursor animation 
const cursor = document.getElementById('cursor');
const cursorBlur = document.getElementById('cursor-blur');
const pointerElements = document.querySelectorAll('.cursor-pointer');
cursor.style.scale = 'calc(20/78)';

document.addEventListener('mousemove', e => {
  cursor.style.zIndex = 500;
  cursorBlur.style.zIndex = 500;
  const posX = e.x;
  const posY = e.y;
  cursor.style.left = `${posX - (cursor.offsetWidth / 2)}px`;
  cursor.style.top = `${posY - (cursor.offsetHeight / 2)}px`;
  cursorBlur.style.left = `${posX - (cursorBlur.offsetWidth / 2)}px`;
  cursorBlur.style.top = `${posY - (cursorBlur.offsetHeight / 2)}px`;
}, { once: true });

const mouseMove = document.addEventListener('mousemove', e => {
  const posX = e.x;
  const posY = e.y;

  // Smooth animation
  cursor.animate({
    left: `${posX - (cursor.offsetWidth / 2)}px`,
    top: `${posY - (cursor.offsetHeight / 2)}px`,
  }, { duration: 500, fill: 'forwards' });
  cursorBlur.animate({
    left: `${posX - (cursorBlur.offsetWidth / 2)}px`,
    top: `${posY - (cursorBlur.offsetHeight / 2)}px`,
  }, { duration: 1700, fill: 'forwards' });
});

let timer;
pointerElements.forEach(el => {
  el.addEventListener('mouseover', () => {
    cursor.style.scale = '1';
    cursor.style.backgroundColor = 'white';
    timer = setTimeout(() => {
      cursor.style.backgroundColor = 'transparent';
    }, 100);
    cursor.style.borderColor = 'white';
  });

  el.addEventListener('mouseleave', () => {
    clearTimeout(timer);
    cursor.style.scale = 'calc(20/78)';
    cursor.style.backgroundColor = '#83d6fd';
    cursor.style.borderColor = '#83d6fd';
  })
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let titlePage = document.querySelector(".title-page");
let titleText = document.querySelector(".title-page p");
let titleImageOverlay = document.querySelector(".title-page .image-overlay");
let section1 = document.querySelector(".section-1");

window.addEventListener('scroll', () => {
  let scrollValue = window.scrollY;
  // Title page
  titleText.style.bottom = (-scrollValue * 0.6) + 160 + "px";
  titleText.style.opacity = `${1 - (0.0035 * scrollValue)}`;
  titleText.style.filter = `blur(${0.04 * scrollValue}px)`;
  titleText.style.scale = `${1 - (scrollValue * 0.00015)}`;
  titlePage.style.backgroundColor = `rgb(${255 - (0.5 * scrollValue)}, ${255 - (0.5 * scrollValue)}, ${255 - (0.5 * scrollValue)})`;
  titleImageOverlay.style.background = `linear-gradient(rgba(255, 255, 255, 0), 40%, rgb(${255 - (0.7 * scrollValue)}, ${255 - (0.7 * scrollValue)}, ${255 - (0.7 * scrollValue)}))`;

  // Section 1
  section1.style.backgroundColor = `rgb(${255 - (0.7 * scrollValue)}, ${255 - (0.7 * scrollValue)}, ${255 - (0.7 * scrollValue)})`;
})

const unblur = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.parentElement.classList.add("unblur")
    } else {
      entry.target.parentElement.classList.remove("unblur")
    }
  })
})
let blurredElements = document.querySelectorAll(".blur ul");
blurredElements.forEach(el => unblur.observe(el))