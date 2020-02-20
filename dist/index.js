//add  dynamic date
// window.onload = 
 
function addDynamicDate() {
  const year = new Date().getFullYear()
  const copyright = document.getElementById("myList")
  .appendChild(document.createTextNode(`© Copyright ${year}`));
};
addDynamicDate();


const form = document.getElementById('form1').addEventListener('submit', retrieveFormData);
console.log(form);


function retrieveFormData() {
  const form = document.getElementById('form1');
   let msg  = "";
   let i;
   for(i = 0; i < form.length; i++) {
     msg += `${form.elements[i].value}`
     msg.split(', ');
     console.log(msg)
   }
};

retrieveFormData()

//document.getElementById("form1").addEventListener('submit', retrieveFormData);

// function functSubmit(event) {
//   var msg = document.getElementById("input1").value;
//   alert(msg);
// }