//add  dynamic date
window.onload = addDynamicDate;
 
function addDynamicDate() {
  const year = new Date().getFullYear()
  const copyright = document.getElementById("myList")
  .appendChild(document.createTextNode(` .© Copyright ${year}`));
};

 // Reset Form Input
document.getElementById('handleSubmit').addEventListener('click', resetForm);

function resetForm() {
  document.getElementById("myForm").reset();
};

