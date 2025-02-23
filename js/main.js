(function(){

  $("#nav-button").on("click", function(){
    $(this).toggleClass("nav-button-open");
    $("#nav-button span").toggleClass("open");
    $("#nav-menu").toggleClass("nav-off");
    $(".click-to-close").toggleClass("hide");
  });

  $(".click-to-close").on("click", function(){
    $("#nav-button").toggleClass("nav-button-open");
    $("#nav-button span").toggleClass("open");
    $("#nav-menu").toggleClass("nav-off");
    $(this).toggleClass("hide");
  });

  $('#fullpage').fullpage({
				sectionsColor: ['white'],
				anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
				menu: '#menu',
				scrollingSpeed: 1000,
        navigation: true,
				navigationPosition: 'right'
			});

})();
