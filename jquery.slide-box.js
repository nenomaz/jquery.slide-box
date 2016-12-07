(function($){
	$.fn.slideBox = function(action, options) {

		var $target = $(this);

		if (!$target.data('slideBox.initiated'))
			$target.data('slideBox.initiated', true);
		
		if (typeof action == 'undefined')
			var action = 'hide';
		var options = $.extend({
			'visibleHeight': "50px",
			'slideBarHtml': "<div class='slidebox-bar' style='position:absolute; bottom:0px; width:100%; height:12px; background-color:rgba(0,0,0,0.5); text-align:center;'><i class='fa fa-angle-double-down'></i></div>"
		}, options);

		function hide() {
			$target.data('slideBox.originalHeight', $target.height());
			if ($target.css('overflow') != 'hidden')
				$target.css('overflow', 'hidden');
			$target.animate({ height: options.visibleHeight }, {duration: 400, done: function(){ $target.height(options.visibleHeight) }});
			if ($target.css('position') == 'static')
				$target.css('position', 'relative');
			if (!$target.find("div.slidebox-bar").length)
				$target.append(options.slideBarHtml);
			$target.data('slideBox.state', 'hidden');
		}

		function show() {
			var originalHeight = $target.data('slideBox.originalHeight');
			$target.animate({height: originalHeight}, {duration: 400, done: function() { $target.height(originalHeight) }});
			$target.data('slideBox.state', 'visible');
			$target.find("div.slidebox-bar").remove();
			$target.append(options.slideBarHtml);
		}
		
		switch(action) {
			case "hide":
				hide();
				break;
			case "show":
				show();
				break;
			case "toggle":
					switch($target.data('slideBox.state')) {
						case 'hidden':
							show();
							break;
						case 'visible':
							hide();
							break;
					}	
				break;
		}	
	}

	return this;
}(jQuery));
