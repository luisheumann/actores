!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){function b(a){if(a.minTime&&(a.minTime=s(a.minTime)),a.maxTime&&(a.maxTime=s(a.maxTime)),a.durationTime&&"function"!=typeof a.durationTime&&(a.durationTime=s(a.durationTime)),a.disableTimeRanges.length>0){for(var b in a.disableTimeRanges)a.disableTimeRanges[b]=[s(a.disableTimeRanges[b][0]),s(a.disableTimeRanges[b][1])];a.disableTimeRanges=a.disableTimeRanges.sort(function(a,b){return a[0]-b[0]});for(var b=a.disableTimeRanges.length-1;b>0;b--)a.disableTimeRanges[b][0]<=a.disableTimeRanges[b-1][1]&&(a.disableTimeRanges[b-1]=[Math.min(a.disableTimeRanges[b][0],a.disableTimeRanges[b-1][0]),Math.max(a.disableTimeRanges[b][1],a.disableTimeRanges[b-1][1])],a.disableTimeRanges.splice(b,1))}return a}function c(b){var c=b.data("timepicker-settings"),f=b.data("timepicker-list");if(f&&f.length&&(f.remove(),b.data("timepicker-list",!1)),c.useSelect){f=a("<select />",{"class":"ui-timepicker-select"});var g=f}else{f=a("<ul />",{"class":"ui-timepicker-list"});var g=a("<div />",{"class":"ui-timepicker-wrapper",tabindex:-1});g.css({display:"none",position:"absolute"}).append(f)}if(c.noneOption)if(c.noneOption===!0&&(c.noneOption=c.useSelect?"Time...":"None"),a.isArray(c.noneOption))for(var i in c.noneOption){var k=d(c.noneOption[i],c.useSelect);f.append(k)}else{var k=d(c.noneOption,c.useSelect);f.append(k)}c.className&&g.addClass(c.className),null===c.minTime&&null===c.durationTime||!c.showDuration||g.addClass("ui-timepicker-with-duration");var l=c.minTime;"function"==typeof c.durationTime?l=s(c.durationTime()):null!==c.durationTime&&(l=c.durationTime);var n=null!==c.minTime?c.minTime:0,o=null!==c.maxTime?c.maxTime:n+v-1;n>=o&&(o+=v),o===v-1&&-1!==c.timeFormat.indexOf("H")&&(o=v);for(var t=c.disableTimeRanges,u=0,w=t.length,i=n;o>=i;i+=60*c.step){var x=i,z=r(x,c.timeFormat);if(c.useSelect){var A=a("<option />",{value:z});A.text(z)}else{var A=a("<li />");A.data("time",86400>=x?x:x%86400),A.text(z)}if((null!==c.minTime||null!==c.durationTime)&&c.showDuration){var B=q(i-l);if(c.useSelect)A.text(A.text()+" ("+B+")");else{var C=a("<span />",{"class":"ui-timepicker-duration"});C.text(" ("+B+")"),A.append(C)}}w>u&&(x>=t[u][1]&&(u+=1),t[u]&&x>=t[u][0]&&x<t[u][1]&&(c.useSelect?A.prop("disabled",!0):A.addClass("ui-timepicker-disabled"))),f.append(A)}if(g.data("timepicker-input",b),b.data("timepicker-list",g),c.useSelect)f.val(e(b.val(),c)),f.on("focus",function(){a(this).data("timepicker-input").trigger("showTimepicker")}),f.on("blur",function(){a(this).data("timepicker-input").trigger("hideTimepicker")}),f.on("change",function(){m(b,a(this).val(),"select")}),b.hide().after(f);else{var D=c.appendTo;"string"==typeof D?D=a(D):"function"==typeof D&&(D=D(b)),D.append(g),j(b,f),f.on("click","li",function(){b.off("focus.timepicker"),b.on("focus.timepicker-ie-hack",function(){b.off("focus.timepicker-ie-hack"),b.on("focus.timepicker",y.show)}),h(b)||b[0].focus(),f.find("li").removeClass("ui-timepicker-selected"),a(this).addClass("ui-timepicker-selected"),p(b)&&(b.trigger("hideTimepicker"),g.hide())})}}function d(b,c){var d,e,f;return"object"==typeof b?(d=b.label,e=b.className,f=b.value):"string"==typeof b?d=b:a.error("Invalid noneOption value"),c?a("<option />",{value:f,"class":e,text:d}):a("<li />",{"class":e,text:d}).data("time",f)}function e(b,c){if(a.isNumeric(b)||(b=s(b)),null===b)return null;var d=60*c.step;return r(Math.round(b/d)*d,c.timeFormat)}function f(){return new Date(1970,1,1,0,0,0)}function g(b){var c=a(b.target),d=c.closest(".ui-timepicker-input");0===d.length&&0===c.closest(".ui-timepicker-wrapper").length&&(y.hide(),a(document).unbind(".ui-timepicker"))}function h(a){var b=a.data("timepicker-settings");return(window.navigator.msMaxTouchPoints||"ontouchstart"in document)&&b.disableTouchKeyboard}function i(b,c,d){if(!d&&0!==d)return!1;var e=b.data("timepicker-settings"),f=!1,g=30*e.step;return c.find("li").each(function(b,c){var e=a(c);if("number"==typeof e.data("time")){var h=e.data("time")-d;return Math.abs(h)<g||h==g?(f=e,!1):void 0}}),f}function j(a,b){b.find("li").removeClass("ui-timepicker-selected");var c=s(l(a));if(null!==c){var d=i(a,b,c);if(d){var e=d.offset().top-b.offset().top;(e+d.outerHeight()>b.outerHeight()||0>e)&&b.scrollTop(b.scrollTop()+d.position().top-d.outerHeight()),d.addClass("ui-timepicker-selected")}}}function k(){if(""!==this.value){var b=a(this);if(!b.is(":focus")){var c=s(this.value);if(null===c)return b.trigger("timeFormatError"),void 0;var d=b.data("timepicker-settings"),e=!1;if(null!==d.minTime&&c<d.minTime?e=!0:null!==d.maxTime&&c>d.maxTime&&(e=!0),a.each(d.disableTimeRanges,function(){return c>=this[0]&&c<this[1]?(e=!0,!1):void 0}),d.forceRoundTime){var f=c%(60*d.step);f>=30*d.step?c+=60*d.step-f:c-=f}var g=r(c,d.timeFormat);e?m(b,g,"error")&&b.trigger("timeRangeError"):m(b,g)}}}function l(a){return a.is("input")?a.val():a.data("ui-timepicker-value")}function m(a,b,c){if(a.is("input")){a.val(b);var d=a.data("timepicker-settings");d.useSelect&&a.data("timepicker-list").val(e(b,d))}return a.data("ui-timepicker-value")!=b?(a.data("ui-timepicker-value",b),"select"==c?a.trigger("selectTime").trigger("changeTime").trigger("change"):"error"!=c&&a.trigger("changeTime"),!0):(a.trigger("selectTime"),!1)}function n(b){var c=a(this),d=c.data("timepicker-list");if(!d||!d.is(":visible")){if(40!=b.keyCode)return!0;h(c)||c.focus()}switch(b.keyCode){case 13:return p(c)&&y.hide.apply(this),b.preventDefault(),!1;case 38:var e=d.find(".ui-timepicker-selected");return e.length?e.is(":first-child")||(e.removeClass("ui-timepicker-selected"),e.prev().addClass("ui-timepicker-selected"),e.prev().position().top<e.outerHeight()&&d.scrollTop(d.scrollTop()-e.outerHeight())):(d.find("li").each(function(b,c){return a(c).position().top>0?(e=a(c),!1):void 0}),e.addClass("ui-timepicker-selected")),!1;case 40:return e=d.find(".ui-timepicker-selected"),0===e.length?(d.find("li").each(function(b,c){return a(c).position().top>0?(e=a(c),!1):void 0}),e.addClass("ui-timepicker-selected")):e.is(":last-child")||(e.removeClass("ui-timepicker-selected"),e.next().addClass("ui-timepicker-selected"),e.next().position().top+2*e.outerHeight()>d.outerHeight()&&d.scrollTop(d.scrollTop()+e.outerHeight())),!1;case 27:d.find("li").removeClass("ui-timepicker-selected"),y.hide();break;case 9:y.hide();break;default:return!0}}function o(b){var c=a(this),d=c.data("timepicker-list");if(!d||!d.is(":visible"))return!0;if(!c.data("timepicker-settings").typeaheadHighlight)return d.find("li").removeClass("ui-timepicker-selected"),!0;switch(b.keyCode){case 96:case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:case 105:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:case 65:case 77:case 80:case 186:case 8:case 46:j(c,d);break;default:return}}function p(a){var b=a.data("timepicker-settings"),c=a.data("timepicker-list"),d=null,e=c.find(".ui-timepicker-selected");if(e.hasClass("ui-timepicker-disabled"))return!1;if(e.length?d=e.data("time"):l(a)&&(d=s(l(a)),j(a,c)),null!==d)if("string"==typeof d)a.val(d);else{var f=r(d,b.timeFormat);m(a,f,"select")}return!0}function q(a){var b,c=Math.round(a/60);if(Math.abs(c)<60)b=[c,x.mins];else if(60==c)b=["1",x.hr];else{var d=(c/60).toFixed(1);"."!=x.decimal&&(d=d.replace(".",x.decimal)),b=[d,x.hrs]}return b.join(" ")}function r(a,b){if(null!==a){var c=new Date(u.valueOf()+1e3*a);if(!isNaN(c.getTime())){for(var d,e,f="",g=0;g<b.length;g++)switch(e=b.charAt(g)){case"a":f+=c.getHours()>11?x.pm:x.am;break;case"A":f+=c.getHours()>11?x.PM:x.AM;break;case"g":d=c.getHours()%12,f+=0===d?"12":d;break;case"G":f+=c.getHours();break;case"h":d=c.getHours()%12,0!==d&&10>d&&(d="0"+d),f+=0===d?"12":d;break;case"H":d=c.getHours(),a===v&&(d=24),f+=d>9?d:"0"+d;break;case"i":var h=c.getMinutes();f+=h>9?h:"0"+h;break;case"s":a=c.getSeconds(),f+=a>9?a:"0"+a;break;default:f+=e}return f}}}function s(a){if(""===a)return null;if(!a||a+0==a)return a;"object"==typeof a&&(a=a.getHours()+":"+t(a.getMinutes())+":"+t(a.getSeconds())),a=a.toLowerCase(),new Date(0);var b;if(-1===a.indexOf(":")?(b=a.match(/^([0-9]):?([0-5][0-9])?:?([0-5][0-9])?\s*([pa]?)m?$/),b||(b=a.match(/^([0-2][0-9]):?([0-5][0-9])?:?([0-5][0-9])?\s*([pa]?)m?$/))):b=a.match(/^(\d{1,2})(?::([0-5][0-9]))?(?::([0-5][0-9]))?\s*([pa]?)m?$/),!b)return null;var c,d=parseInt(1*b[1],10);c=b[4]?12==d?"p"==b[4]?12:0:d+("p"==b[4]?12:0):d;var e=1*b[2]||0,f=1*b[3]||0;return 3600*c+60*e+f}function t(a){return("0"+a).slice(-2)}var u=f(),v=86400,w={className:null,minTime:null,maxTime:null,durationTime:null,step:30,showDuration:!1,timeFormat:"g:ia",scrollDefaultNow:!1,scrollDefaultTime:!1,selectOnBlur:!1,disableTouchKeyboard:!1,forceRoundTime:!1,appendTo:"body",orientation:"ltr",disableTimeRanges:[],closeOnWindowScroll:!1,typeaheadHighlight:!0,noneOption:!1},x={am:"am",pm:"pm",AM:"AM",PM:"PM",decimal:".",mins:"mins",hr:"hr",hrs:"hrs"},y={init:function(d){return this.each(function(){var e=a(this),f=[];for(var g in w)e.data(g)&&(f[g]=e.data(g));var h=a.extend({},w,f,d);h.lang&&(x=a.extend(x,h.lang)),h=b(h),e.data("timepicker-settings",h),e.addClass("ui-timepicker-input"),h.useSelect?c(e):(e.prop("autocomplete","off"),e.on("click.timepicker focus.timepicker",y.show),e.on("change.timepicker",k),e.on("keydown.timepicker",n),e.on("keyup.timepicker",o),k.call(e.get(0)))})},show:function(b){b&&b.preventDefault();var d=a(this),e=d.data("timepicker-settings");if(e.useSelect)return d.data("timepicker-list").focus(),void 0;h(d)&&d.blur();var f=d.data("timepicker-list");if(!d.prop("readonly")&&(f&&0!==f.length&&"function"!=typeof e.durationTime||(c(d),f=d.data("timepicker-list")),!f.is(":visible"))){y.hide(),f.show();var j={};j.left="rtl"==e.orientation?d.offset().left+d.outerWidth()-f.outerWidth()+parseInt(f.css("marginLeft").replace("px",""),10):d.offset().left+parseInt(f.css("marginLeft").replace("px",""),10),j.top=d.offset().top+d.outerHeight(!0)+f.outerHeight()>a(window).height()+a(window).scrollTop()?d.offset().top-f.outerHeight()+parseInt(f.css("marginTop").replace("px",""),10):d.offset().top+d.outerHeight()+parseInt(f.css("marginTop").replace("px",""),10),f.offset(j);var k=f.find(".ui-timepicker-selected");if(k.length||(l(d)?k=i(d,f,s(l(d))):e.scrollDefaultNow?k=i(d,f,s(new Date)):e.scrollDefaultTime!==!1&&(k=i(d,f,s(e.scrollDefaultTime)))),k&&k.length){var m=f.scrollTop()+k.position().top-k.outerHeight();f.scrollTop(m)}else f.scrollTop(0);return a(document).on("touchstart.ui-timepicker mousedown.ui-timepicker",g),e.closeOnWindowScroll&&a(document).on("scroll.ui-timepicker",g),d.trigger("showTimepicker"),this}},hide:function(){var b=a(this),c=b.data("timepicker-settings");return c&&c.useSelect&&b.blur(),a(".ui-timepicker-wrapper:visible").each(function(){var b=a(this),c=b.data("timepicker-input"),d=c.data("timepicker-settings");d&&d.selectOnBlur&&p(c),b.hide(),c.trigger("hideTimepicker")}),this},option:function(d,e){var f=this,g=f.data("timepicker-settings"),h=f.data("timepicker-list");if("object"==typeof d)g=a.extend(g,d);else if("string"==typeof d&&"undefined"!=typeof e)g[d]=e;else if("string"==typeof d)return g[d];return g=b(g),f.data("timepicker-settings",g),h&&(h.remove(),f.data("timepicker-list",!1)),g.useSelect&&c(f),this},getSecondsFromMidnight:function(){return s(l(this))},getTime:function(a){var b=this,c=l(b);if(!c)return null;a||(a=new Date);var d=s(c),e=new Date(a);return e.setHours(d/3600),e.setMinutes(d%3600/60),e.setSeconds(d%60),e.setMilliseconds(0),e},setTime:function(a){var b=this,c=r(s(a),b.data("timepicker-settings").timeFormat);return m(b,c),b.data("timepicker-list")&&j(b,b.data("timepicker-list")),this},remove:function(){var a=this;if(a.hasClass("ui-timepicker-input"))return a.removeAttr("autocomplete","off"),a.removeClass("ui-timepicker-input"),a.removeData("timepicker-settings"),a.off(".timepicker"),a.data("timepicker-list")&&a.data("timepicker-list").remove(),a.removeData("timepicker-list"),this}};a.fn.timepicker=function(b){return this.length?y[b]?this.hasClass("ui-timepicker-input")?y[b].apply(this,Array.prototype.slice.call(arguments,1)):this:"object"!=typeof b&&b?(a.error("Method "+b+" does not exist on jQuery.timepicker"),void 0):y.init.apply(this,arguments):this}});