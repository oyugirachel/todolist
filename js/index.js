window.onload = function(){
    added();
    closed();
    checked();
};
function added(){
var myNodelist = document.getElementsByTagName("LI");
var boxy= document.getElementById("box_id");
var todo= document.getElementById("to_do");
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
 
 
}
}


function closed(){
var close = document.getElementsByClassName("close");

for (var i = 0; i < close.length; i++){
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
   
  }
}
}

function checked(){
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
}

function addnew() {
   var close = document.getElementsByClassName("close");

    for (var i = 0; i < close.length; i++){
        close[i].onclick = function() {
        var div = this.parentElement;
         div.style.display = "none";
   
     }
    } 
    
  var li = document.createElement("li");
  var inputs = document.getElementById("new").value;
  var t = document.createTextNode(inputs);
  li.appendChild(t);
  if (inputs === '') {
    alert("You forgot something🤔");
  } 
  else {  document.getElementById("list").appendChild(li);
  }
  document.getElementById("new").value = "";
   var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
     div.style.display = "none";
    }
  }


}


$(function(){
$('.add_new').click(function() {

  $(this).toggleClass('rotate_button');
    setTimeout(function(){  
    $('.add_new').toggleClass('rotate_back_button');
      setTimeout(function(){  
    $('.add_new').removeClass('rotate_button rotate_back_button');
      }, 1000);
      }, 800);
     
      })
});