window.onload = function(){

	var map;

	function initialize(){
		var mapProp = {
			center: new google.maps.LatLng(-23.4219504,-46.8587911),
			scrollwheel:false,
			zoom:12,
			mapTypeId:google.maps.MapTypeId.ROADMAP
		}

		map = new google.maps.Map(document.getElementById("mapa"),mapProp);
	}

	function addMarker(lat,long,icon,content,click){
		var latLng = {'lat':lat,'lng':long};

		var marker = new google.maps.Marker({
			position:latLng,
			map:map,
			icon:icon
		});

		var infoWindow = new google.maps.InfoWindow({
			content:content,
			maxWidth:200,
			pixelOffset: new google.maps.Size(0,20)
		});

		if(click == true){
			google.maps.event.addListener(marker,'click',function(){
				infoWindow.open(map,marker);
			});
		}else{
			infoWindow.open(map,marker);
		}
		
	}

	initialize();

	var conteudo = '<p style="color:black;font-size:13px;padding:10px 0;border-bottom:1px solid black;">Meu endereço</p>';
	addMarker(-27.616637,-48.5923228,'',conteudo,true);

	/*
	setTimeout(function(){
		map.panTo({'lat':-23.550520,'lng':-46.633309});
		map.setZoom(8);
	},4000);
	
	*/


}

$(function(){

	var delay = 3000;
	var curIndex = 0;
	var amt;

	initSlider();
	autoPlay();

	function initSlider(){
		amt = $('.sobre-autor').length;
		var sizeContainer = 100 * amt;
		var sizeBoxSingle = 100 / amt;
		$('.sobre-autor').css('width',sizeBoxSingle+'%');
		$('.scroll-wraper').css('width',sizeContainer+'%'); 


		for(var i = 0; i < amt; i++){
			if(i == 0)
				$('.slider-bullets').append('<span style="background-color:rgb(170,170,170);"></span>');
			else
				$('.slider-bullets').append('<span></span>');
		}

	}

	function autoPlay(){
		setInterval(function(){
			curIndex++;
			if(curIndex == amt)
				curIndex = 0;
			goToSlider(curIndex);
		},delay)
	}

	function goToSlider(curIndex){
		var offSetX = $('.sobre-autor').eq(curIndex).offset().left - $('.scroll-wraper').offset().left;
		$('.slider-bullets span').css('background-color','rgb(200,200,200)');
		$('.slider-bullets span').eq(curIndex).css('background-color','rgb(170,170,170)');
		$('.scrollEquipe').stop().animate({'scrollLeft':offSetX+'px'});

	}

	$(window).resize(function(){
		$('.scrollEquipe').stop().animate({'scrollLeft':0});
	})


})