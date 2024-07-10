/**
 * Highcharts Gantt JS v11.2.0 (2023-10-30)
 *
 * CurrentDateIndicator
 *
 * (c) 2010-2021 Lars A. V. Cabrera
 *
 * License: www.highcharts.com/license
 */!function(t){"object"==typeof module&&module.exports?(t.default=t,module.exports=t):"function"==typeof define&&define.amd?define("highcharts/modules/current-date-indicator",["highcharts"],function(e){return t(e),t.Highcharts=e,t}):t("undefined"!=typeof Highcharts?Highcharts:void 0)}(function(t){"use strict";var e=t?t._modules:{};function n(t,e,n,o){t.hasOwnProperty(e)||(t[e]=o.apply(null,n),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:e,module:t[e]}})))}n(e,"Extensions/CurrentDateIndication.js",[e["Core/Utilities.js"]],function(t){var e=t.addEvent,n=t.merge,o=t.wrap,a=[],i={color:"#ccd3ff",width:2,label:{format:"%a, %b %d %Y, %H:%M",formatter:function(t,e){return this.axis.chart.time.dateFormat(e||"",t)},rotation:0,style:{fontSize:"0.7em"}}};function r(){var t=this.options,e=t.currentDateIndicator;if(e){var o="object"==typeof e?n(i,e):n(i);o.value=Date.now(),o.className="highcharts-current-date-indicator",t.plotLines||(t.plotLines=[]),t.plotLines.push(o)}}function s(){this.label&&this.label.attr({text:this.getLabelText(this.options.label)})}function c(t,e){var n=this.options;return n&&n.className&&-1!==n.className.indexOf("highcharts-current-date-indicator")&&n.label&&"function"==typeof n.label.formatter?(n.value=Date.now(),n.label.formatter.call(this,n.value,n.label.format)):t.call(this,e)}return{compose:function(n,i){t.pushUnique(a,n)&&e(n,"afterSetOptions",r),t.pushUnique(a,i)&&(e(i,"render",s),o(i.prototype,"getLabelText",c))}}}),n(e,"masters/modules/current-date-indicator.src.js",[e["Core/Globals.js"],e["Extensions/CurrentDateIndication.js"]],function(t,e){e.compose(t.Axis,t.PlotLineOrBand)})});//# sourceMappingURL=current-date-indicator.js.map