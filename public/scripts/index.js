(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.validated')

    // Loop over them and prevent submission
    Array.from(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})();


function flip(event){
	var element = event.currentTarget;
	if (element.className === "flipper") {
    if(element.style.transform == "rotateY(180deg)") {
      element.style.transform = "rotateY(0deg)";
    }
    else {
      element.style.transform = "rotateY(180deg)";
    }
  }
};

$('.navbar-nav>li>a').on('click', function(){
  $('.navbar-collapse').collapse('hide');
});

$(window).scroll(function(){
  var wh = $(window).height()-1;
  if($(window).scrollTop() > $('.headShot').offset().top-wh){
  	$('.headShot').addClass('onScroll');
  }
  if($(window).scrollTop() > $('.about-content').offset().top-wh){
  	$('.about-content').addClass('onScroll');
  }
});

$(window).scroll(function(){
  var wh = $(window).height()-50; 
  if($(window).scrollTop() > $('.animated').offset().top-wh){
  	$('.animated').addClass('onScroll');
  }
});

$(window).scroll(function(){
  var wh = $(window).height()-100;
  if($(window).scrollTop() > $('.scoop').offset().top-wh){
  	$('.scoop').addClass('onScroll');
  }
	if($(window).scrollTop() > $('.wellness').offset().top-wh){
  	$('.wellness').addClass('onScroll');
  }
  if($(window).scrollTop() > $('.serving').offset().top-wh){
  	$('.serving').addClass('onScroll');
  }
  if($(window).scrollTop() > $('.brianna').offset().top-wh){
  	$('.brianna').addClass('onScroll');
  }
  if($(window).scrollTop() > $('.mike').offset().top-wh){
  	$('.mike').addClass('onScroll');
  }
});





document.documentElement.style.setProperty('--animate-duration', '1.5s');