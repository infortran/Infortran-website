$(document).ready(function(){
	$('.btn-navbar').click(function(){
		$('#navbar-btns').toggle(800);
	});

	$('#navbar-btns').hide();
	$('.custom-navbar').hide();
	
});

$(window).scroll(function(){
	if($(this).scrollTop() > 50){
		$('.custom-navbar').fadeIn(700);
	}else{
		$('.custom-navbar').fadeOut(700);
	}
});