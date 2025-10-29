export function closeWindow(id) {
  const targetWindowElement = document.querySelector(`#${id}`);
  targetWindowElement.style = "display: none";
}

export function openWindow(id) {
  const targetWindowElement = document.querySelector(`#${id}`);
  targetWindowElement.style = "";
}




