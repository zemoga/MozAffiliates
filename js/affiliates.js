
/**
 * Page Initialization
 */
$(
	function(event){
		void HomePage.init();
	}
);

/**
 * Home Page Class
 */
var HomePage = {

	/**
	 * Home Page Initialization
	 */
	init: function(){
		void HomePage.addEventListeners();
	},
	
	/**
	 *
	 */
	addEventListeners: function(){
		if ($(".js_no_action").length) {
			$(".js_no_action").click(function(e){
				e.preventDefault();
			})
		}
		if ($(".show_tooltip").length) {
			$(".show_tooltip").click(function(e){
				e.preventDefault();
			});
			$(".show_tooltip").hover(
				function(e){
					HomePage.toggleToolTip($(this).attr('target'), e.type);
				}, 
				function(e){
					HomePage.toggleToolTip($(this).attr('target'), e.type);
				});
		}
		if($.browser.msie) {
			$('input[placeholder], textarea[placeholder]').placeholder();
		}
		if ($(".js_uniform").length) {
			$(".js_uniform").uniform();
		}
	},
	toggleToolTip: function(rel, e){
		var toolTip = $('#'+rel), 
			timer;
		
		if (e == "mouseenter") {
			toolTip.show();
		} else {
			toolTip.hide();
		}
	}
}
