/**
 * Highcharts JS v11.2.0 (2023-10-30)
 *
 * Highcharts funnel module
 *
 * (c) 2010-2021 Kacper Madej
 *
 * License: www.highcharts.com/license
 */!function(t){"object"==typeof module&&module.exports?(t.default=t,module.exports=t):"function"==typeof define&&define.amd?define("highcharts/modules/funnel3d",["highcharts","highcharts/highcharts-3d","highcharts/modules/cylinder"],function(e){return t(e),t.Highcharts=e,t}):t("undefined"!=typeof Highcharts?Highcharts:void 0)}(function(t){"use strict";var e=t?t._modules:{};function r(t,e,r,i){t.hasOwnProperty(e)||(t[e]=i.apply(null,r),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:e,module:t[e]}})))}r(e,"Series/Funnel3D/SVGElement3DFunnel.js",[e["Core/Color/Color.js"],e["Core/Globals.js"],e["Core/Renderer/RendererRegistry.js"],e["Core/Utilities.js"]],function(t,e,r,i){var n,o=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),s=t.parse,a=e.charts,h=r.getRendererType().prototype.Element3D,d=i.merge;return function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.mainParts=["top","bottom"],e.parts=["top","bottom","frontUpper","backUpper","frontLower","backLower","rightUpper","rightLower"],e.sideGroups=["upperGroup","lowerGroup"],e.sideParts={upperGroup:["frontUpper","backUpper","rightUpper"],lowerGroup:["frontLower","backLower","rightLower"]},e.pathType="funnel3d",e}return o(e,t),e.prototype.opacitySetter=function(t,e,r){var i=parseFloat(t),n=this.parts,o=a[this.renderer.chartIndex],s="group-opacity-"+i+"-"+o.index;if(this.parts=this.mainParts,this.singleSetterForParts("opacity",i),this.parts=n,!o.renderer.filterId){o.renderer.definition({tagName:"filter",attributes:{id:s},children:[{tagName:"feComponentTransfer",children:[{tagName:"feFuncA",attributes:{type:"table",tableValues:"0 "+i}}]}]});for(var h=0,d=this.sideGroups;h<d.length;h++){var l=d[h];this[l].attr({filter:"url(#"+s+")"})}if(this.renderer.styledMode){o.renderer.definition({tagName:"style",textContent:".highcharts-"+s+" {filter:url(#"+s+")}"});for(var p=0,u=this.sideGroups;p<u.length;p++){var l=u[p];this[l].addClass("highcharts-"+s)}}}return this},e.prototype.fillSetter=function(t){var e=s(t),r=e.rgba[3],i={top:s(t).brighten(.1).get(),bottom:s(t).brighten(-.2).get()};if(r<1?(e.rgba[3]=1,e=e.get("rgb"),this.attr({opacity:r})):e=t,e.linearGradient||e.radialGradient||!this.gradientForSides||(e={linearGradient:{x1:0,x2:1,y1:1,y2:1},stops:[[0,s(t).brighten(-.2).get()],[.5,t],[1,s(t).brighten(-.2).get()]]}),e.linearGradient)for(var n=0,o=this.sideGroups;n<o.length;n++)for(var a=o[n],h=this[a].gradientBox,l=e.linearGradient,p=d(e,{linearGradient:{x1:h.x+l.x1*h.width,y1:h.y+l.y1*h.height,x2:h.x+l.x2*h.width,y2:h.y+l.y2*h.height}}),u=0,c=this.sideParts[a];u<c.length;u++){var g=c[u];i[g]=p}else if(d(!0,i,{frontUpper:e,backUpper:e,rightUpper:e,frontLower:e,backLower:e,rightLower:e}),e.radialGradient)for(var f=0,y=this.sideGroups;f<y.length;f++)for(var a=y[f],w=this[a].gradientBox,x=w.x+w.width/2,m=w.y+w.height/2,v=Math.min(w.width,w.height),b=0,C=this.sideParts[a];b<C.length;b++){var g=C[b];this[g].setRadialReference([x,m,v])}if(this.singleSetterForParts("fill",null,i),this.color=this.fill=t,e.linearGradient)for(var S=0,F=[this.frontLower,this.frontUpper];S<F.length;S++){var j=F[S].element,_=j&&this.renderer.gradients[j.gradient];_&&"userSpaceOnUse"!==_.attr("gradientUnits")&&_.attr({gradientUnits:"userSpaceOnUse"})}return this},e.prototype.adjustForGradient=function(){for(var t,e=0,r=this.sideGroups;e<r.length;e++){for(var i=r[e],n={x:Number.MAX_VALUE,y:Number.MAX_VALUE},o={x:-Number.MAX_VALUE,y:-Number.MAX_VALUE},s=0,a=this.sideParts[i];s<a.length;s++)t=this[a[s]].getBBox(!0),n={x:Math.min(n.x,t.x),y:Math.min(n.y,t.y)},o={x:Math.max(o.x,t.x+t.width),y:Math.max(o.y,t.y+t.height)};this[i].gradientBox={x:n.x,width:o.x-n.x,y:n.y,height:o.y-n.y}}},e.prototype.zIndexSetter=function(){return this.finishedOnAdd&&this.adjustForGradient(),this.renderer.Element.prototype.zIndexSetter.apply(this,arguments)},e.prototype.onAdd=function(){this.adjustForGradient(),this.finishedOnAdd=!0},e}(h)}),r(e,"Series/Funnel3D/Funnel3DComposition.js",[e["Series/Funnel3D/SVGElement3DFunnel.js"],e["Core/Globals.js"],e["Core/Utilities.js"]],function(t,e,r){var i=e.charts,n=r.error,o=r.extend,s=r.merge,a=r.pushUnique,h=[];function d(t){var e=this.element3d("funnel3d",t),r=this.styledMode,i={"stroke-width":1,stroke:"none"};e.upperGroup=this.g("funnel3d-upper-group").attr({zIndex:e.frontUpper.zIndex}).add(e);for(var n=0,o=[e.frontUpper,e.backUpper,e.rightUpper];n<o.length;n++){var s=o[n];r||s.attr(i),s.add(e.upperGroup)}e.lowerGroup=this.g("funnel3d-lower-group").attr({zIndex:e.frontLower.zIndex}).add(e);for(var a=0,h=[e.frontLower,e.backLower,e.rightLower];a<h.length;a++){var d=h[a];r||d.attr(i),d.add(e.lowerGroup)}return e.gradientForSides=t.gradientForSides,e}function l(t){this.getCylinderEnd||n("A required Highcharts module is missing: cylinder.js",!0,i[this.chartIndex]);var e,r=i[this.chartIndex],o=t.alphaCorrection=90-Math.abs(r.options.chart.options3d.alpha%180-90),a=this.cuboidPath.call(this,s(t,{depth:t.width,width:(t.width+t.bottom.width)/2})),h=a.isTop,d=!a.isFront,l=!!t.middle,p=this.getCylinderEnd(r,s(t,{x:t.x-t.width/2,z:t.z-t.width/2,alphaCorrection:o})),u=t.bottom.width,c=s(t,{width:u,x:t.x-u/2,z:t.z-u/2,alphaCorrection:o}),g=this.getCylinderEnd(r,c,!0),f=u,y=c,w=g,x=g;l&&(f=t.middle.width,y=s(t,{y:t.y+t.middle.fraction*t.height,width:f,x:t.x-f/2,z:t.z-f/2}),w=this.getCylinderEnd(r,y,!1),x=this.getCylinderEnd(r,y,!1));var m={top:p,bottom:g,frontUpper:this.getCylinderFront(p,w),zIndexes:{group:a.zIndexes.group,top:0!==h?0:3,bottom:1!==h?0:3,frontUpper:d?2:1,backUpper:d?1:2,rightUpper:d?2:1}};return m.backUpper=this.getCylinderBack(p,w),e=Math.min(f,t.width)/Math.max(f,t.width)!=1,m.rightUpper=this.getCylinderFront(this.getCylinderEnd(r,s(t,{x:t.x-t.width/2,z:t.z-t.width/2,alphaCorrection:e?-o:0}),!1),this.getCylinderEnd(r,s(y,{alphaCorrection:e?-o:0}),!l)),l&&(e=Math.min(f,u)/Math.max(f,u)!=1,s(!0,m,{frontLower:this.getCylinderFront(x,g),backLower:this.getCylinderBack(x,g),rightLower:this.getCylinderFront(this.getCylinderEnd(r,s(c,{alphaCorrection:e?-o:0}),!0),this.getCylinderEnd(r,s(y,{alphaCorrection:e?-o:0}),!1)),zIndexes:{frontLower:d?2:1,backLower:d?1:2,rightLower:d?1:2}})),m}return{compose:function(e){if(a(h,e)){var r=e.prototype;r.Element3D.types.funnel3d=t,o(r,{funnel3d:d,funnel3dPath:l})}}}}),r(e,"Series/Funnel3D/Funnel3DSeriesDefaults.js",[],function(){return{center:["50%","50%"],width:"90%",neckWidth:"30%",height:"100%",neckHeight:"25%",reversed:!1,gradientForSides:!0,animation:!1,edgeWidth:0,colorByPoint:!0,showInLegend:!1,dataLabels:{align:"right",crop:!1,inside:!1,overflow:"allow"}}}),r(e,"Series/Funnel3D/Funnel3DPoint.js",[e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],function(t,e){var r,i=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),n=t.seriesTypes.column,o=e.extend,s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.dlBoxRaw=void 0,e.options=void 0,e.series=void 0,e.y=void 0,e}return i(e,t),e}(n.prototype.pointClass);return o(s.prototype,{shapeType:"funnel3d"}),s}),r(e,"Series/Funnel3D/Funnel3DSeries.js",[e["Series/Funnel3D/Funnel3DComposition.js"],e["Series/Funnel3D/Funnel3DSeriesDefaults.js"],e["Series/Funnel3D/Funnel3DPoint.js"],e["Core/Globals.js"],e["Core/Math3D.js"],e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],function(t,e,r,i,n,o,s){var a,h=this&&this.__extends||(a=function(t,e){return(a=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),d=i.noop,l=n.perspective,p=o.series,u=o.seriesTypes.column,c=s.extend,g=s.merge,f=s.pick,y=s.relativeLength,w=function(r){function i(){var t=null!==r&&r.apply(this,arguments)||this;return t.center=void 0,t.data=void 0,t.options=void 0,t.points=void 0,t}return h(i,r),i.prototype.alignDataLabel=function(t,e,r){var i=t.dlBoxRaw,n=this.chart.inverted,o=t.plotY>f(this.translatedThreshold,this.yAxis.len),s=f(r.inside,!!this.options.stacking),a={x:i.x,y:i.y,height:0};r.align=f(r.align,!n||s?"center":o?"right":"left"),r.verticalAlign=f(r.verticalAlign,n||s?"middle":o?"top":"bottom"),"top"!==r.verticalAlign&&(a.y+=i.bottom/("bottom"===r.verticalAlign?1:2)),a.width=this.getWidthAt(a.y),this.options.reversed&&(a.width=i.fullWidth-a.width),s?a.x-=a.width/2:"left"===r.align?(r.align="right",a.x-=1.5*a.width):"right"===r.align?(r.align="left",a.x+=a.width/2):a.x-=a.width/2,t.dlBox=a,u.prototype.alignDataLabel.apply(this,arguments)},i.prototype.bindAxes=function(){p.prototype.bindAxes.apply(this,arguments),c(this.xAxis.options,{gridLineWidth:0,lineWidth:0,title:void 0,tickPositions:[]}),g(!0,this.yAxis.options,{gridLineWidth:0,title:void 0,labels:{enabled:!1}})},i.prototype.translate=function(){p.prototype.translate.apply(this,arguments);var t,e,r,i,n,o,s,a,h,d=this.chart,u=this.options,g=u.reversed,w=u.ignoreHiddenPoint,x=d.plotWidth,m=d.plotHeight,v=u.center,b=y(v[0],x),C=y(v[1],m),S=y(u.width,x),F=y(u.height,m),j=y(u.neckWidth,x),_=y(u.neckHeight,m),U=C-F/2+F-_,L=this.data,G=0,A=0;this.getWidthAt=e=function(t){return t>U||F===_?j:j+(S-j)*(1-(t-(C-F/2))/(F-_))},this.center=[b,C,F],this.centerX=b;for(var D=0;D<L.length;D++){var E=L[D];w&&!1===E.visible||(G+=E.y)}for(var k=0;k<L.length;k++){var E=L[k];s=null,r=G?E.y/G:0,o=(n=C-F/2+A*F)+r*F,t=e(n),a=o-n,h={gradientForSides:f(E.options.gradientForSides,u.gradientForSides),x:b,y:n,height:a,width:t,z:1,top:{width:t}},t=e(o),h.bottom={fraction:r,width:t},n>=U?h.isCylinder=!0:o>U&&(s=o,t=e(U),o=U,h.bottom.width=t,h.middle={fraction:a?(U-n)/a:0,width:t}),g&&(h.y=n=C+F/2-(A+r)*F,h.middle&&(h.middle.fraction=1-(a?h.middle.fraction:0)),t=h.width,h.width=h.bottom.width,h.bottom.width=t),E.shapeArgs=c(E.shapeArgs,h),E.percentage=100*r,E.plotX=b,g?E.plotY=C+F/2-(A+r/2)*F:E.plotY=(n+(s||o))/2,i=l([{x:b,y:E.plotY,z:g?-(S-e(E.plotY))/2:-e(E.plotY)/2}],d,!0)[0],E.tooltipPos=[i.x,i.y],E.dlBoxRaw={x:b,width:e(E.plotY),y:n,bottom:h.height||0,fullWidth:S},w&&!1===E.visible||(A+=r)}},i.compose=t.compose,i.defaultOptions=g(u.defaultOptions,e),i}(u);return c(w.prototype,{pointClass:r,translate3dShapes:d}),o.registerSeriesType("funnel3d",w),w}),r(e,"masters/modules/funnel3d.src.js",[e["Core/Renderer/RendererRegistry.js"],e["Series/Funnel3D/Funnel3DSeries.js"]],function(t,e){return e.compose(t.getRendererType()),e})});//# sourceMappingURL=funnel3d.js.map