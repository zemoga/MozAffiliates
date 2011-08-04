/*tool tip */
$(function() {
	if($("div.tool-tip"))
	{
		$("div.tool-tip").hide();
		if($("#show-tool-tip")){
			$("#show-tool-tip").mouseenter(function() {
				$("div.tool-tip").fadeIn("slow");
			}).mouseleave(function() {
				$("div.tool-tip").fadeOut("slow");
			});
		}
	}
		
	
});