(function($){
    $.fn.extend({ 
    	
    	colorSelect: function(options){
    		
    		var defaults = {
    			style : "colorSelect"
    		};
    		
    		var options = $.extend(defaults,options);
    		
    		
    		return this.each(function(){
					$("option").hide();
    				alert("ok");
    		});
    		
    		
    	}
    
    
    	
 });
})(jQuery);