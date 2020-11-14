export function switchElements(forms = []) {
  Array.from(document.getElementsByClassName("switchable")).forEach((e) => {
    e.style.display = "none"
  })
  forms.forEach((form) => {
    document.getElementById(form).style.display = "block"
  })
}
