
const keys = document.querySelectorAll('.key')

keys.forEach(key => {
  key.addEventListener('click', () => playNote(key))
})

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note)
  noteAudio.currentTime = 0
  noteAudio.play()
  key.classList.add('active')
  setTimeout(() => { 
    key.classList.remove('active')
    }, 300);
}