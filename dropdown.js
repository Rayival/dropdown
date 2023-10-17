const aktif = document.querySelector(".dropdown")
const content = document.querySelector(".dropdown-content")
aktif.onclick = () => {
  content.classList.toggle("active")
}