$(document).ready(function(){
	$('.btn-navbar').click(function(){
		$('#navbar-btns').toggle(800);
	});

	$('#navbar-btns').hide();
	$('.custom-navbar').hide();
	
	/*$('#cont1').hover(function(){
		$('#icon_cont1').removeClass('glyphicon-th-large',1000);
		$('#icon_cont1').addClass('glyphicon-th',1000);
	}, function(){
		$('#icon_cont1').addClass('glyphicon-th-large',1000);
		$('#icon_cont1').removeClass('glyphicon-th',1000);
	});*/
	new WOW().init();
	
});

$(window).scroll(function(){
	if($(this).scrollTop() > 50){
		$('.custom-navbar').fadeIn(700);
	}else{
		$('.custom-navbar').fadeOut(700);
	}
});