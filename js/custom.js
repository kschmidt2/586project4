;(function ($) {
  $('#main').smoothState();

})(jQuery);

;(function($) {
  'use strict';
  var $body = $('html, body'),
      content = $('#main').smoothState({
        // Runs when a link has been activated
        onStart: {
          duration: 250, // Duration of our animation
          render: function (url, $container) {
            // toggleAnimationClass() is a public method
            // for restarting css animations with a class
            content.toggleAnimationClass('is-exiting');
            // Scroll user to the top
            $body.animate({
              scrollTop: 0
            });

          }
        }
      }).data('smoothState');
      //.data('smoothState') makes public methods available
})(jQuery);

// $(function() {
//     var $body = $('html, body'),
//     content = $('#main').smoothState({
//         prefetch: true,
//         pageCacheSize: 4,
//         // blacklist anything you dont want targeted
//         blacklist : '',
//         development : false,
//         // Runs when a link has been activated
//         onStart: {
//             duration: 250, // Duration of our animation
//             render: function (url, $container) {
//                 // toggleAnimationClass() is a public method
//                 // for restarting css animations with a class
//                 content.toggleAnimationClass('is-exiting');
//                 // Scroll user to the top
//                 $body.animate({
//                     scrollTop: 0
//                 });
//             }
//         },
//         onEnd : {
//             duration: 0, // Duration of the animations, if any.
//             render: function (url, $container, $content) {
//                 $body.css('cursor', 'auto');
//                 $body.find('a').css('cursor', 'auto');
//                 $container.html($content);
//                 // Trigger document.ready and window.load
//                 $(document).ready();
//                 $(window).trigger('load');
//             }
//         },
//         onAfter : function(url, $container, $content) {
//
//         }
//     }).data('smoothState');
//     //.data('smoothState') makes public methods available
// });
//
// ;(function($){
// 	var  $doc = $(document);
//
// 	/** create mod exec controller */
// 	$.readyFn = {
// 		list: [],
// 		register: function(fn) {
// 			$.readyFn.list.push(fn);
// 		},
// 		execute: function() {
// 			for (var i = 0; i < $.readyFn.list.length; i++) {
// 				try {
// 				   $.readyFn.list[i].apply(document, [$]);
// 				}
// 				catch (e) {
// 					throw e;
// 				}
// 			};
// 		}
// 	};
//
// 	/** run all functions */
// 	$doc.ready(function(){
// 		$.readyFn.execute();
// 	});
//
// 	/** register function */
// 	$.fn.ready = function(fn) {
// 		$.readyFn.register(fn);
// 	};
//
// })(jQuery);
