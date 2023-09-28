//retrieves an HTML element with the ID "insert" and stores it in the insert variable
const insert = document.getElementById("insert");


//adding eventlistner on window object & using call back function
window.addEventListener('keydown', (event) => {
  //using template literal
  insert.innerHTML =`
  <div class="key">
  ${event.key === ""? "Space" : event.key}
  <small>event.key</small>
  </div>
  <div class="key">
  ${event.keyCode}
  <small>event.keycode</small>
  </div>
  <div class="key">
  ${event.code}
  <small>event.code</small>
  </div>
  `
})




































