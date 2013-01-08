ResponsiveNav = function (nav, breakPoint, navControlText) {
	//variables
	var docWidth = $(document).width();
	
	//add open class to nav
	nav.addClass("open");
	
	//add nav controls
	var navControl = $('<div class="navControl" id="navControl"/>').prependTo(nav);
	var navControlLink = $('<a/>', {"text": navControlText}).prependTo(navControl);
	
	//open or close nav
	function toggleNav() {
		//toggle open class
		nav.toggleClass("open");
		 
		//open or close nav
		nav.find("ul").first().slideToggle();
	}

	$('#navControl a').on('click', function() {
		toggleNav();
	});

	//hide or show nav controls depending on breakpoint
	function checkNav() {
		if(docWidth >= breakPoint) {
			navControl.hide();

			//if nav is hidden, open it
			if(!nav.hasClass("open")) {
				nav.find("ul").first().css("display", "block");
				nav.addClass("open");
			}
		}
		else {
			navControl.show();

			//if nav is open, hide it
			if(nav.hasClass("open")) {
				nav.find("ul").first().css("display", "none");
				nav.removeClass("open");
			}
		}
	}

	//check if to hide or show controls
	checkNav();
	
	//listener for screen width
	$(window).resize(function() {
		docWidth = $(document).width();
		checkNav();
	});
};
$(".nav").each(function(){
	new ResponsiveNav($(this), 640, "Menu");
});
