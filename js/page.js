/* TABS */

var li_elements = document.querySelectorAll(".wrapper_left ul li");
var item_elements = document.querySelectorAll(".item");
for (var i = 0; i < li_elements.length; i++) {
  li_elements[i].addEventListener("click", function() {
    li_elements.forEach(function(li) {
      li.classList.remove("active");
    });
    this.classList.add("active");
    var li_value = this.getAttribute("data-li");
    item_elements.forEach(function(item) {
      item.style.display = "none";
    });
    if (li_value == "tema1") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "tema2") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "tema3") {
      document.querySelector("." + li_value).style.display = "block";
    } else if (li_value == "tema4") {
      document.querySelector("." + li_value).style.display = "block";
    } else {
      console.log("");
    }
  });
}


/* PDF */

function criarPDFAnotacao(){
  var anotacao = document.getElementById('anotacao').value;

  var win = window.open('', '', 'height=1000,width=1000');
  win.document.write('<html><head>');
  win.document.write('<title>Anotações</title>');                                       
  win.document.write('</head>');
  win.document.write('<body>');
  win.document.write('<p><b>Anotações</b><p>');
  win.document.write('<br>');
  win.document.write(anotacao);                         
  win.document.write('</body></html>');
  win.document.close(); 	                                         
  win.print();                                
}