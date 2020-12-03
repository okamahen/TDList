<htmL>
<h1>TO DO APPS</h1>

<form id="inputForm">
  <input id="inputField" type="text" autocomplete="off">
  <button>Create Item</button>
</form>

<h3>List</h3>
<ul id="viewList">
</ul>
</html>

<script>
let ourForm = document.getElementById("inputForm")
let ourField = document.getElementById("inputField")
let ourView = document.getElementById("viewList")

ourForm.addEventListener("submit", (e) => {
  e.preventDefault()
  createItem(ourField.value)
})

function createItem(a) {
  let ourHTML = `<li>${a} <button onclick="deleteItem(this)">Delete</button>`
  viewList.insertAdjacentHTML("beforeend", ourHTML)
  ourField.value = ""
  ourField.focus()
}

function deleteItem(x) {
  x.parentElement.remove()
}
</script>
