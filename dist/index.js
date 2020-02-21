//add  dynamic date
window.onload = addDynamicDate;

function addDynamicDate() {
  const year = new Date().getFullYear();
  let node = document.createElement("LI");
  let nodeText = document.createTextNode(` .© Copyright ${year}`);
  node.appendChild(nodeText);
  document.getElementById("myList").appendChild(node);
};

// Reset Form Input
document.getElementById("handleSubmit").addEventListener("click", resetForm);

function resetForm() {
  document.getElementById("myForm").reset();
};
