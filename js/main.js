showModal()

function showModal() {
  document
    .querySelector('.image-container')
    .addEventListener('click', function () {
      this.classList.toggle('clicked')
      var spanElement = document.querySelector('.image-container span')
      spanElement.style.display = 'inline-block'

      console.log(spanElement)
      console.log('hello')
    })
}
