<htmL>
<h1>TO DO APPS</h1>

// Create form with to catch input from user
// Remember default behaviour of form in HTML is to send data elsewhere and reload the page
<form id="inputForm"> // id "inputForm" to be used in javascript
  <input id="inputField" type="text" autocomplete="off">
  <button>Create Item</button>
</form>

<h3>List</h3>
<ul id="viewList">
</ul>
</html>

<script>
//select HTML form with specific ID and save the object in ourForm variable
let ourForm = document.getElementById("inputForm")

//select HTML form with specific ID and save the object in ourField variable
let ourField = document.getElementById("inputField")

//select HTML form with specific ID and save the object in ourView variable
let ourView = document.getElementById("viewList")

//Create eventListener to listen any input submitted by user
//Create e to catch input from user
ourForm.addEventListener("submit", (e) => {
  e.preventDefault() //Stop default action by HTML and let Javascript handle the data
  createItem(ourField.value)
})

function createItem(a) {
  //Template literal for HTML item and ${a} to send the value into the template, and save to ourHTML
  //"Onclick" is HTML command to catch input on click
  //JS consider each HTML element as object, so the one calling "this" is HTML element
  let ourHTML = `<li>${a} <button onclick="deleteItem(this)">Delete</button>`
  
  //insert HTML object, 1st argument is position in HTML, 2nd argument is what to input
  viewList.insertAdjacentHTML("beforeend", ourHTML)
  
  //To empty the field after submit
  ourField.value = ""
  
  //To focus to element after submit, without clicking the form 
  ourField.focus()
}

//Now create function to delete with element created in the future (not avail at the moment)
//And we cannot use addEventListener as the element not defined yet, so below is the trick to remove element defined in the future
function deleteItem(x) {
  x.parentElement.remove() //.remove() to remove the selected element
}
</script>
