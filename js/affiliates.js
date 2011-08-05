
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
		if ($("div.tool-tip").length) {
			HomePage.toggleToolTip();
		}
		if($.browser.msie) {
			$('input[placeholder], textarea[placeholder]').placeholder();
		}
	},
	toggleToolTip: function(){
		var toolTip = $("div.tool-tip"),
			showToolTip = $("#show-tool-tip");
		
		toolTip.hide();
		showToolTip.mouseenter(function() {
			toolTip.fadeIn("slow");
		}).mouseleave(function() {
			toolTip.fadeOut("slow");
		});
	}
}
