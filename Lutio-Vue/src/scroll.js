export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export function scrollToElementById(id) {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}