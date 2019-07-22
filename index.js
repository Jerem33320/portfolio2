AOS.init();


// =======href link scroll
$(document).ready(function(){
    $("a").on('click', function(event) {
  
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          window.location.hash = hash;
        });
      } 
    });
  });

  // ====== Alert HOME =======
  function sweet() {   
    // Swal.fire(
    //   'Bienvenue sur mon Portfolio !',
    //   'Coding is <i class="fas fa-heart"></i>'
    // )

    Swal.fire({
      html: '<div style="color: white; font-size: 30px; font-weight: bold;">Bienvenue sur mon Portfolio !</div>',
      width: 430,
      padding: '140px',
      background: '#fff url(./images/grid.png)',
      backdrop: `
      url("./images/nyan.gif")
      center left
      no-repeat
      `,
      confirmButtonText:
      'Explorer',
      footer: '<div style="color : white; font-size: 22px;"> Coding is <i class="fas fa-heart" style="color: red"></i></div>',
    })
  };


  // ===== Scroll to Top ==== 
$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {  
      $('#return-to-top').fadeIn(200);
  } else {
      $('#return-to-top').fadeOut(200); 
  }
});
$('#return-to-top').click(function() {
  $('body,html').animate({
      scrollTop : 0    
  }, 500);
});
