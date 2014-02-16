// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++
!function ($) {
jQuery.easing['jswing'] = jQuery.easing['swing'];
jQuery.extend(jQuery.easing, {
    def: 'easeOutQuad',
    swing: function(x, t, b, c, d) {
        //alert(jQuery.easing.default);
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
    },
    easeInQuad: function(x, t, b, c, d) {
        return c * (t /= d) * t + b;
    },
    easeOutQuad: function(x, t, b, c, d) {
        return - c * (t /= d) * (t - 2) + b;
    },
    easeInOutQuad: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return - c / 2 * ((--t) * (t - 2) - 1) + b;
    },
    easeInCubic: function(x, t, b, c, d) {
        return c * (t /= d) * t * t + b;
    },
    easeOutCubic: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    },
    easeInOutCubic: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    },
    easeInQuart: function(x, t, b, c, d) { //..
        return c * (t /= d) * t * t * t + b;
    },
    easeOutQuart: function(x, t, b, c, d) {
        return - c * ((t = t / d - 1) * t * t * t - 1) + b;
    },
    easeInOutQuart: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
        return - c / 2 * ((t -= 2) * t * t * t - 2) + b;
    },
    easeInQuint: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    },
    easeOutQuint: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    },
    easeInOutQuint: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    },
    easeInSine: function(x, t, b, c, d) {
        return - c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    },
    easeOutSine: function(x, t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
    },
    easeInOutSine: function(x, t, b, c, d) {
        return - c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    },
    easeInExpo: function(x, t, b, c, d) {
        return (t == 0) ? b: c * Math.pow(2, 10 * (t / d - 1)) + b;
    },
    easeOutExpo: function(x, t, b, c, d) {
        return (t == d) ? b + c: c * ( - Math.pow(2, -10 * t / d) + 1) + b;
    },
    easeInOutExpo: function(x, t, b, c, d) {
        if (t == 0) return b;
        if (t == d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * ( - Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function(x, t, b, c, d) {
        return - c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    },
    easeOutCirc: function(x, t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    },
    easeInOutCirc: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return - c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    },
    easeInElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return - (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    },
    easeOutElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    },
    easeInOutElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d / 2) == 2) return b + c;
        if (!p) p = d * (.3 * 1.5);
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        if (t < 1) return - .5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
    },
    easeInBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    },
    easeOutBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },
    easeInOutBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
    },
    easeInBounce: function(x, t, b, c, d) {
        return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
    },
    easeOutBounce: function(x, t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
            return c * (7.5625 * t * t) + b;
        } else if (t < (2 / 2.75)) {
            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
        } else if (t < (2.5 / 2.75)) {
            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
        } else {
            return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
        }
    },
    easeInOutBounce: function(x, t, b, c, d) {
        if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
        return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
    }
});
$.fn.DynamicToTop = function(options) {
	var defaults = {
		text: "",
		min: "200",
		fade_in: 600,
		fade_out: 400,
		speed: "1000",
		easing: "easeInOutExpo",
		version: "",
		id: 'dynamic-to-top'
	};
	var settings = $.extend(defaults, options);
	if (settings.version == "") {
		settings.text = '';
	}
	var $toTop = $('<a href=\"#\" id=\"' + settings.id + '\"></a>').html(settings.text);
	$toTop.appendTo(document.body);
	$toTop.hide().click(function() {
		$('html, body').stop().animate({
			scrollTop: 0
		},
		settings.speed, settings.easing);
		return false;
	});
	$(window).scroll(function() {
		var sd = $(window).scrollTop();
		if (typeof document.body.style.maxHeight === "undefined") {
			$toTop.css({
				'position': 'absolute',
				'top': $(window).scrollTop() + $(window).height() - mv_dynamic_to_top.margin
			});
		}
		if (sd > settings.min) {
			$toTop.fadeIn(settings.fade_in);
		} else {
			$toTop.fadeOut(settings.fade_out);
		}
	});
};
$('body').DynamicToTop();
$(function(){
	$('.jumbotron').outerHeight($(window).height()-$('.footer').height() - $('.navbar').height());
	
	$(window).resize(function() {
		$('.jumbotron').outerHeight($(window).height()-$('.footer').height() - $('.navbar').height());
	});

	var $window = $(window);
	// Disable certain links in docs
	$('section [href^=#]').click(function (e) {
	  e.preventDefault()
	});

	// side bar
	$('.bs-docs-sidenav').affix();

	// make code pretty
	window.prettyPrint && prettyPrint();

// example
var content = '好雨知时节， 当春乃发生。随风潜入夜， 润物细无声。野径云俱黑， 江船火独明。晓看红湿处， 花重锦官城。';

$('#tooltips').pt({
	content: content
});

$('#tooltips-top').pt({
	position: 't',
	content: content
});
$('#tooltips-bottom').pt({
	position: 'b',
	content: content
});
$('#tooltips-left').pt({
	position: 'l',
	content: content
});
$('#tooltips-right').pt({
	position: 'r',
	content: content
});

$('#tooltips-top-left').pt({
	position: 't',
	align: 'l',
	content: content
});
$('#tooltips-top-right').pt({
	position: 't',
	align: 'r',
	content: content
});
$('#tooltips-bottom-left').pt({
	position: 'b',
	align: 'l',
	content: content
});
$('#tooltips-bottom-right').pt({
	position: 'b',
	align: 'r',
	content: content
});
$('#tooltips-left-top').pt({
	position: 'l',
	align: 't',
	content: content
});
$('#tooltips-left-bottom').pt({
	position: 'l',
	align: 'b',
	content: content
});
$('#tooltips-right-top').pt({
	position: 'r',
	align: 't',
	content: content
});
$('#tooltips-right-bottom').pt({
	position: 'r',
	align: 'b',
	content: content
});
$('#tooltips-top-right-long').pt({
	position: 't',
	align: 'r',
	content: content
});
$('#tooltips-right-top-high').pt({
	position: 'r',
	align: 't',
	content: content
});

$('#tooltips-mouse').pt({
	content: content
});
$('#tooltips-click').click(function() {
	var self = this;
	$.pt({
		target: self,
		content: content
	});
});

$('#tooltips-square').pt({
	width: 100,
	height: 100,
	content: content
});

$('#tooltips-close-callback').pt({
	content:content,
	close:function() {
		alert('closed');
	}
});

$('#tooltips-no-arrow').pt({
	arrow:false,
	content:content
});


});
}(window.jQuery)