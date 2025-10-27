export function closeWindow(id) {
console.log(id)
  const targetWindowElement = document.querySelector(`#${id}`);
  targetWindowElement.style = "display: none";
}

export function openWindow(id) {
  const targetWindowElement = document.querySelector(`#${id}`);
  targetWindowElement.style = "";
}




