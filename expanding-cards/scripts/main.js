const slides = document.querySelectorAll('.slide')

const clearActiveClasses = () => {
  for (const slide of slides) {
    slide.classList.remove('active')
  }
}

for (const slide of slides) {
  slide.addEventListener('click', () => {
    clearActiveClasses()
    slide.classList.add('active')
  })
}