var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
   if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function add_Close(parent_li){

   var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
   parent_li.appendChild(span);
}

function action_Close(){
  var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display="none"
  }
}
}


function newElement() {
  debugger;
  var inputValue = document.getElementById("myInput").value;
  document.getElementById("myInput").value="";
  if (inputValue){
  var li = document.createElement("li");
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
 
  add_Close(li);
  action_Close();
  
}
  
}
s