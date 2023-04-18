/* MODAL */
$(document).ready(function(){
    $('.modal').modal();
});

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

/* VIDEOS */

$(function() {
  $("#playlist li").on("click", function() {
      $("#videoarea").attr({
          "src": $(this).attr("movieurl"),
          "poster": "",
          
      })
  })
  $("#videoarea").attr({
      "src": $("#playlist li").eq(0).attr("movieurl"),
      "poster": $("#playlist li").eq(0).attr("moviesposter")
  })
})

$(function() {
   $("#playlist2 li").on("click", function() {
       $("#videoarea2").attr({
           "src": $(this).attr("movieurl"),
           "poster": "",
           
       })
   })
   $("#videoarea2").attr({
       "src": $("#playlist2 li").eq(0).attr("movieurl"),
       "poster": $("#playlist2 li").eq(0).attr("moviesposter")
   })
})



