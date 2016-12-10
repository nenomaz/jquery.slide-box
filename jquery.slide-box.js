/*
 * jQuery Slide Box Plugin
 *
 * Copyright 2016 Nazzareno Mazzitello
 * This program is released under the Apache 2.0 License
 */
(function($){
	$.fn.slideBox = function(action, options) {

		var $target = $(this);

		if (!$target.data('slideBox.initiated'))
			$target.data('slideBox.initiated', true);
		
		if (typeof action == 'undefined')
			var action = 'hide';
		var options = $.extend({
			'visibleHeight': "50px",
			'slideBarHtmlBoxHidden': "<div class='slidebox-bar box-hidden' style='position:absolute; bottom:0px; width:100%; height:18px; background-color:rgba(0,0,0,0.5); text-align:center;'><span class='glyphicon glyphicon-chevron-down' aria-hidden='true' style='color:#fff; cursor:pointer;'></span></div>",
			'slideBarHtmlBoxVisible': "<div class='slidebox-bar box-visible' style='position:absolute; bottom:0px; width:100%; height:18px; background-color:rgba(0,0,0,0.5); text-align:center;'><span class='glyphicon glyphicon-chevron-up' aria-hidden='true' style='color:#fff; cursor:pointer;'></span></div>"
		}, options);

		function hide() {
			$target.data('slideBox.originalHeight', $target.height());
			if ($target.css('overflow') != 'hidden')
				$target.css('overflow', 'hidden');
			$target.animate({ height: options.visibleHeight }, {duration: 400, done: function(){ $target.height(options.visibleHeight) }});
			if ($target.css('position') == 'static')
				$target.css('position', 'relative');
			$target.find("div.slidebox-bar.box-visible").remove();
			if (!$target.find("div.slidebox-bar.box-hidden").length)
				$target.append(options.slideBarHtmlBoxHidden);
			$target.data('slideBox.state', 'hidden');
		}

		function show() {
			var originalHeight = $target.data('slideBox.originalHeight');
			$target.animate({height: originalHeight}, {duration: 400, done: function() { $target.height(originalHeight) }});
			$target.data('slideBox.state', 'visible');
			$target.find("div.slidebox-bar").remove();
			$target.find("div.slidebox-bar.box-hidden").remove();
			if (!$target.find("div.slidebox-bar.box-visible").length)
				$target.append(options.slideBarHtmlBoxVisible);
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
