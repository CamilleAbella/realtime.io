/**
 * @param {string[]} elements
 */
export function switchElements(elements = []) {
  Array.from(document.getElementsByClassName("switchable")).forEach((e) => {
    e.style.display = "none"
  })
  elements.forEach((id) => {
    document.getElementById(id).style.display = "block"
  })
}
