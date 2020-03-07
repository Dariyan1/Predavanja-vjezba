var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");
// Form submit event
form.addEventListener("submit", addItem);
// Delete event
itemList.addEventListener("click", removeItem);
// Filter event
filter.addEventListener("keyup", filterItems);
// Add item
function addItem(e) {
  e.preventDefault();
  //Get input value
  var inputValue = document.getElementById("item").value;
  // Create new li element
  var litem = document.createElement("li");
  // Add class
  litem.classList.add("list-group-item")
  // Add text node with input value
  var text=document.createTextNode(inputValue);
  litem.appendChild(text);
  itemList.appendChild(litem);

  // Create del button elemement
  var delButton=document.createElement("button");
  // Add classes to del button
  delButton.setAttribute("class", "btn btn-danger btn-sm float-right delete");
  delButton.innerText="X"
  // Append text node
  // Append button to li
  litem.appendChild(delButton);
  // Append li to list
}
// Remove item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
        itemList.removeChild(e.target.parentNode);
    }
  }
}
// Filter items
function filterItems(e) {
  // convert text to lowercase  
  var text = e.target.value.toLowerCase();
  // Get list items
  var items = itemList.getElementsByTagName("li");
  // Convert HTMLCollection to an array
  Array.from(items).forEach(function(item) {
    var itemName = item.firstChild.textContent.toLowerCase;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}