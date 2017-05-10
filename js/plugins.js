/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright В© 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright В© 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */

/*
 * jQuery Background video plugin for jQuery
 * ---
 * Copyright 2011, Victor Coulon (http://victorcoulon.fr)
 * Released under the MIT, BSD, and GPL Licenses.
 * based on jQuery Plugin Boilerplate 1.3
 */
(function(e){e.backgroundVideo=function(t,n){var r={videoid:"video_background"};var i=this;i.settings={};var s=function(){i.settings=e.extend({},r,n);i.el=t;o()};var o=function(){var t="";t+='<video id="'+i.settings.videoid+'" preload="auto" autoplay="autoplay" loop="loop"';if(i.settings.poster){t+=' poster="'+i.settings.poster+'" '}t+='style="display:none;position:fixed;top:0;left:0;bottom:0;right:0;z-index:-100;width:100%;height:100%;">';for(var n=0;n<i.settings.types.length;n++){t+='<source src="'+i.settings.path+i.settings.filename+"."+i.settings.types[n]+'" type="video/'+i.settings.types[n]+'" />'}t+="bgvideo</video>";i.el.prepend(t);i.videoEl=document.getElementById(i.settings.videoid);i.$videoEl=e(i.videoEl);i.$videoEl.fadeIn(2e3);u()};var u=function(){var e=a();i.$videoEl.width(e*i.settings.width);i.$videoEl.height(e*i.settings.height);if(typeof i.settings.align!=="undefined"){f()}};var a=function(){var t=e(window).width();var n=e(window).height();var r=t/n;var s=i.settings.width/i.settings.height;var o=n/i.settings.height;if(r>=s){o=t/i.settings.width}return o};var f=function(){var t=(e(window).width()>>1)-(i.$videoEl.width()>>1)|0;var n=(e(window).height()>>1)-(i.$videoEl.height()>>1)|0;if(i.settings.align=="centerXY"){i.$videoEl.css({left:t,top:n});return}if(i.settings.align=="centerX"){i.$videoEl.css("left",t);return}if(i.settings.align=="centerY"){i.$videoEl.css("top",n);return}};s();e(window).resize(function(){u()});i.$videoEl.bind("ended",function(){this.play()})}})(jQuery);

/*
 * skrollr core
 *
 * Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr
 *
 * Free to use under terms of MIT license
 */
!function(e,t,r){"use strict";function n(r){if(o=t.documentElement,a=t.body,K(),it=this,r=r||{},ut=r.constants||{},r.easing)for(var n in r.easing)U[n]=r.easing[n];yt=r.edgeStrategy||"set",ct={beforerender:r.beforerender,render:r.render,keyframe:r.keyframe},ft=r.forceHeight!==!1,ft&&(Vt=r.scale||1),mt=r.mobileDeceleration||x,dt=r.smoothScrolling!==!1,gt=r.smoothScrollingDuration||E,vt={targetTop:it.getScrollTop()},Gt=(r.mobileCheck||function(){return/Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent||navigator.vendor||e.opera)})(),Gt?(st=t.getElementById("skrollr-body"),st&&at(),X(),Dt(o,[y,S],[T])):Dt(o,[y,b],[T]),it.refresh(),St(e,"resize orientationchange",function(){var e=o.clientWidth,t=o.clientHeight;(t!==$t||e!==Mt)&&($t=t,Mt=e,_t=!0)});var i=Y();return function l(){Z(),bt=i(l)}(),it}var o,a,i={get:function(){return it},init:function(e){return it||new n(e)},VERSION:"0.6.26"},l=Object.prototype.hasOwnProperty,s=e.Math,c=e.getComputedStyle,f="touchstart",u="touchmove",m="touchcancel",p="touchend",d="skrollable",g=d+"-before",v=d+"-between",h=d+"-after",y="skrollr",T="no-"+y,b=y+"-desktop",S=y+"-mobile",k="linear",w=1e3,x=.004,E=200,A="start",F="end",C="center",D="bottom",H="___skrollable_id",I=/^(?:input|textarea|button|select)$/i,P=/^\s+|\s+$/g,N=/^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,O=/\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,V=/^(@?[a-z\-]+)\[(\w+)\]$/,z=/-([a-z0-9_])/g,q=function(e,t){return t.toUpperCase()},L=/[\-+]?[\d]*\.?[\d]+/g,M=/\{\?\}/g,$=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,_=/[a-z\-]+-gradient/g,B="",G="",K=function(){var e=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(c){var t=c(a,null);for(var r in t)if(B=r.match(e)||+r==r&&t[r].match(e))break;if(!B)return void(B=G="");B=B[0],"-"===B.slice(0,1)?(G=B,B={"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"}[B]):G="-"+B.toLowerCase()+"-"}},Y=function(){var t=e.requestAnimationFrame||e[B.toLowerCase()+"RequestAnimationFrame"],r=Pt();return(Gt||!t)&&(t=function(t){var n=Pt()-r,o=s.max(0,1e3/60-n);return e.setTimeout(function(){r=Pt(),t()},o)}),t},R=function(){var t=e.cancelAnimationFrame||e[B.toLowerCase()+"CancelAnimationFrame"];return(Gt||!t)&&(t=function(t){return e.clearTimeout(t)}),t},U={begin:function(){return 0},end:function(){return 1},linear:function(e){return e},quadratic:function(e){return e*e},cubic:function(e){return e*e*e},swing:function(e){return-s.cos(e*s.PI)/2+.5},sqrt:function(e){return s.sqrt(e)},outCubic:function(e){return s.pow(e-1,3)+1},bounce:function(e){var t;if(.5083>=e)t=3;else if(.8489>=e)t=9;else if(.96208>=e)t=27;else{if(!(.99981>=e))return 1;t=91}return 1-s.abs(3*s.cos(e*t*1.028)/t)}};n.prototype.refresh=function(e){var n,o,a=!1;for(e===r?(a=!0,lt=[],Bt=0,e=t.getElementsByTagName("*")):e.length===r&&(e=[e]),n=0,o=e.length;o>n;n++){var i=e[n],l=i,s=[],c=dt,f=yt,u=!1;if(a&&H in i&&delete i[H],i.attributes){for(var m=0,p=i.attributes.length;p>m;m++){var g=i.attributes[m];if("data-anchor-target"!==g.name)if("data-smooth-scrolling"!==g.name)if("data-edge-strategy"!==g.name)if("data-emit-events"!==g.name){var v=g.name.match(N);if(null!==v){var h={props:g.value,element:i,eventType:g.name.replace(z,q)};s.push(h);var y=v[1];y&&(h.constant=y.substr(1));var T=v[2];/p$/.test(T)?(h.isPercentage=!0,h.offset=(0|T.slice(0,-1))/100):h.offset=0|T;var b=v[3],S=v[4]||b;b&&b!==A&&b!==F?(h.mode="relative",h.anchors=[b,S]):(h.mode="absolute",b===F?h.isEnd=!0:h.isPercentage||(h.offset=h.offset*Vt))}}else u=!0;else f=g.value;else c="off"!==g.value;else if(l=t.querySelector(g.value),null===l)throw'Unable to find anchor target "'+g.value+'"'}if(s.length){var k,w,x;!a&&H in i?(x=i[H],k=lt[x].styleAttr,w=lt[x].classAttr):(x=i[H]=Bt++,k=i.style.cssText,w=Ct(i)),lt[x]={element:i,styleAttr:k,classAttr:w,anchorTarget:l,keyFrames:s,smoothScrolling:c,edgeStrategy:f,emitEvents:u,lastFrameIndex:-1},Dt(i,[d],[])}}}for(Et(),n=0,o=e.length;o>n;n++){var E=lt[e[n][H]];E!==r&&(J(E),et(E))}return it},n.prototype.relativeToAbsolute=function(e,t,r){var n=o.clientHeight,a=e.getBoundingClientRect(),i=a.top,l=a.bottom-a.top;return t===D?i-=n:t===C&&(i-=n/2),r===D?i+=l:r===C&&(i+=l/2),i+=it.getScrollTop(),i+.5|0},n.prototype.animateTo=function(e,t){t=t||{};var n=Pt(),o=it.getScrollTop();return pt={startTop:o,topDiff:e-o,targetTop:e,duration:t.duration||w,startTime:n,endTime:n+(t.duration||w),easing:U[t.easing||k],done:t.done},pt.topDiff||(pt.done&&pt.done.call(it,!1),pt=r),it},n.prototype.stopAnimateTo=function(){pt&&pt.done&&pt.done.call(it,!0),pt=r},n.prototype.isAnimatingTo=function(){return!!pt},n.prototype.isMobile=function(){return Gt},n.prototype.setScrollTop=function(t,r){return ht=r===!0,Gt?Kt=s.min(s.max(t,0),Ot):e.scrollTo(0,t),it},n.prototype.getScrollTop=function(){return Gt?Kt:e.pageYOffset||o.scrollTop||a.scrollTop||0},n.prototype.getMaxScrollTop=function(){return Ot},n.prototype.on=function(e,t){return ct[e]=t,it},n.prototype.off=function(e){return delete ct[e],it},n.prototype.destroy=function(){var e=R();e(bt),wt(),Dt(o,[T],[y,b,S]);for(var t=0,n=lt.length;n>t;t++)ot(lt[t].element);o.style.overflow=a.style.overflow="",o.style.height=a.style.height="",st&&i.setStyle(st,"transform","none"),it=r,st=r,ct=r,ft=r,Ot=0,Vt=1,ut=r,mt=r,zt="down",qt=-1,Mt=0,$t=0,_t=!1,pt=r,dt=r,gt=r,vt=r,ht=r,Bt=0,yt=r,Gt=!1,Kt=0,Tt=r};var X=function(){var n,i,l,c,d,g,v,h,y,T,b,S;St(o,[f,u,m,p].join(" "),function(e){var o=e.changedTouches[0];for(c=e.target;3===c.nodeType;)c=c.parentNode;switch(d=o.clientY,g=o.clientX,T=e.timeStamp,I.test(c.tagName)||e.preventDefault(),e.type){case f:n&&n.blur(),it.stopAnimateTo(),n=c,i=v=d,l=g,y=T;break;case u:I.test(c.tagName)&&t.activeElement!==c&&e.preventDefault(),h=d-v,S=T-b,it.setScrollTop(Kt-h,!0),v=d,b=T;break;default:case m:case p:var a=i-d,k=l-g,w=k*k+a*a;if(49>w){if(!I.test(n.tagName)){n.focus();var x=t.createEvent("MouseEvents");x.initMouseEvent("click",!0,!0,e.view,1,o.screenX,o.screenY,o.clientX,o.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null),n.dispatchEvent(x)}return}n=r;var E=h/S;E=s.max(s.min(E,3),-3);var A=s.abs(E/mt),F=E*A+.5*mt*A*A,C=it.getScrollTop()-F,D=0;C>Ot?(D=(Ot-C)/F,C=Ot):0>C&&(D=-C/F,C=0),A*=1-D,it.animateTo(C+.5|0,{easing:"outCubic",duration:A})}}),e.scrollTo(0,0),o.style.overflow=a.style.overflow="hidden"},j=function(){var e,t,r,n,a,i,l,c,f,u,m,p=o.clientHeight,d=At();for(c=0,f=lt.length;f>c;c++)for(e=lt[c],t=e.element,r=e.anchorTarget,n=e.keyFrames,a=0,i=n.length;i>a;a++)l=n[a],u=l.offset,m=d[l.constant]||0,l.frame=u,l.isPercentage&&(u*=p,l.frame=u),"relative"===l.mode&&(ot(t),l.frame=it.relativeToAbsolute(r,l.anchors[0],l.anchors[1])-u,ot(t,!0)),l.frame+=m,ft&&!l.isEnd&&l.frame>Ot&&(Ot=l.frame);for(Ot=s.max(Ot,Ft()),c=0,f=lt.length;f>c;c++){for(e=lt[c],n=e.keyFrames,a=0,i=n.length;i>a;a++)l=n[a],m=d[l.constant]||0,l.isEnd&&(l.frame=Ot-l.offset+m);e.keyFrames.sort(Nt)}},W=function(e,t){for(var r=0,n=lt.length;n>r;r++){var o,a,s=lt[r],c=s.element,f=s.smoothScrolling?e:t,u=s.keyFrames,m=u.length,p=u[0],y=u[u.length-1],T=f<p.frame,b=f>y.frame,S=T?p:y,k=s.emitEvents,w=s.lastFrameIndex;if(T||b){if(T&&-1===s.edge||b&&1===s.edge)continue;switch(T?(Dt(c,[g],[h,v]),k&&w>-1&&(xt(c,p.eventType,zt),s.lastFrameIndex=-1)):(Dt(c,[h],[g,v]),k&&m>w&&(xt(c,y.eventType,zt),s.lastFrameIndex=m)),s.edge=T?-1:1,s.edgeStrategy){case"reset":ot(c);continue;case"ease":f=S.frame;break;default:case"set":var x=S.props;for(o in x)l.call(x,o)&&(a=nt(x[o].value),0===o.indexOf("@")?c.setAttribute(o.substr(1),a):i.setStyle(c,o,a));continue}}else 0!==s.edge&&(Dt(c,[d,v],[g,h]),s.edge=0);for(var E=0;m-1>E;E++)if(f>=u[E].frame&&f<=u[E+1].frame){var A=u[E],F=u[E+1];for(o in A.props)if(l.call(A.props,o)){var C=(f-A.frame)/(F.frame-A.frame);C=A.props[o].easing(C),a=rt(A.props[o].value,F.props[o].value,C),a=nt(a),0===o.indexOf("@")?c.setAttribute(o.substr(1),a):i.setStyle(c,o,a)}k&&w!==E&&("down"===zt?xt(c,A.eventType,zt):xt(c,F.eventType,zt),s.lastFrameIndex=E);break}}},Z=function(){_t&&(_t=!1,Et());var e,t,n=it.getScrollTop(),o=Pt();if(pt)o>=pt.endTime?(n=pt.targetTop,e=pt.done,pt=r):(t=pt.easing((o-pt.startTime)/pt.duration),n=pt.startTop+t*pt.topDiff|0),it.setScrollTop(n,!0);else if(!ht){var a=vt.targetTop-n;a&&(vt={startTop:qt,topDiff:n-qt,targetTop:n,startTime:Lt,endTime:Lt+gt}),o<=vt.endTime&&(t=U.sqrt((o-vt.startTime)/gt),n=vt.startTop+t*vt.topDiff|0)}if(Gt&&st&&i.setStyle(st,"transform","translate(0, "+-Kt+"px) "+Tt),ht||qt!==n){zt=n>qt?"down":qt>n?"up":zt,ht=!1;var l={curTop:n,lastTop:qt,maxTop:Ot,direction:zt},s=ct.beforerender&&ct.beforerender.call(it,l);s!==!1&&(W(n,it.getScrollTop()),qt=n,ct.render&&ct.render.call(it,l)),e&&e.call(it,!1)}Lt=o},J=function(e){for(var t=0,r=e.keyFrames.length;r>t;t++){for(var n,o,a,i,l=e.keyFrames[t],s={};null!==(i=O.exec(l.props));)a=i[1],o=i[2],n=a.match(V),null!==n?(a=n[1],n=n[2]):n=k,o=o.indexOf("!")?Q(o):[o.slice(1)],s[a]={value:o,easing:U[n]};l.props=s}},Q=function(e){var t=[];return $.lastIndex=0,e=e.replace($,function(e){return e.replace(L,function(e){return e/255*100+"%"})}),G&&(_.lastIndex=0,e=e.replace(_,function(e){return G+e})),e=e.replace(L,function(e){return t.push(+e),"{?}"}),t.unshift(e),t},et=function(e){var t,r,n={};for(t=0,r=e.keyFrames.length;r>t;t++)tt(e.keyFrames[t],n);for(n={},t=e.keyFrames.length-1;t>=0;t--)tt(e.keyFrames[t],n)},tt=function(e,t){var r;for(r in t)l.call(e.props,r)||(e.props[r]=t[r]);for(r in e.props)t[r]=e.props[r]},rt=function(e,t,r){var n,o=e.length;if(o!==t.length)throw"Can't interpolate between \""+e[0]+'" and "'+t[0]+'"';var a=[e[0]];for(n=1;o>n;n++)a[n]=e[n]+(t[n]-e[n])*r;return a},nt=function(e){var t=1;return M.lastIndex=0,e[0].replace(M,function(){return e[t++]})},ot=function(e,t){e=[].concat(e);for(var r,n,o=0,a=e.length;a>o;o++)n=e[o],r=lt[n[H]],r&&(t?(n.style.cssText=r.dirtyStyleAttr,Dt(n,r.dirtyClassAttr)):(r.dirtyStyleAttr=n.style.cssText,r.dirtyClassAttr=Ct(n),n.style.cssText=r.styleAttr,Dt(n,r.classAttr)))},at=function(){Tt="translateZ(0)",i.setStyle(st,"transform",Tt);var e=c(st),t=e.getPropertyValue("transform"),r=e.getPropertyValue(G+"transform"),n=t&&"none"!==t||r&&"none"!==r;n||(Tt="")};i.setStyle=function(e,t,r){var n=e.style;if(t=t.replace(z,q).replace("-",""),"zIndex"===t)n[t]=isNaN(r)?r:""+(0|r);else if("float"===t)n.styleFloat=n.cssFloat=r;else try{B&&(n[B+t.slice(0,1).toUpperCase()+t.slice(1)]=r),n[t]=r}catch(o){}};var it,lt,st,ct,ft,ut,mt,pt,dt,gt,vt,ht,yt,Tt,bt,St=i.addEvent=function(t,r,n){var o=function(t){return t=t||e.event,t.target||(t.target=t.srcElement),t.preventDefault||(t.preventDefault=function(){t.returnValue=!1,t.defaultPrevented=!0}),n.call(this,t)};r=r.split(" ");for(var a,i=0,l=r.length;l>i;i++)a=r[i],t.addEventListener?t.addEventListener(a,n,!1):t.attachEvent("on"+a,o),Yt.push({element:t,name:a,listener:n})},kt=i.removeEvent=function(e,t,r){t=t.split(" ");for(var n=0,o=t.length;o>n;n++)e.removeEventListener?e.removeEventListener(t[n],r,!1):e.detachEvent("on"+t[n],r)},wt=function(){for(var e,t=0,r=Yt.length;r>t;t++)e=Yt[t],kt(e.element,e.name,e.listener);Yt=[]},xt=function(e,t,r){ct.keyframe&&ct.keyframe.call(it,e,t,r)},Et=function(){var e=it.getScrollTop();Ot=0,ft&&!Gt&&(a.style.height=""),j(),ft&&!Gt&&(a.style.height=Ot+o.clientHeight+"px"),Gt?it.setScrollTop(s.min(it.getScrollTop(),Ot)):it.setScrollTop(e,!0),ht=!0},At=function(){var e,t,r=o.clientHeight,n={};for(e in ut)t=ut[e],"function"==typeof t?t=t.call(it):/p$/.test(t)&&(t=t.slice(0,-1)/100*r),n[e]=t;return n},Ft=function(){var e=st&&st.offsetHeight||0,t=s.max(e,a.scrollHeight,a.offsetHeight,o.scrollHeight,o.offsetHeight,o.clientHeight);return t-o.clientHeight},Ct=function(t){var r="className";return e.SVGElement&&t instanceof e.SVGElement&&(t=t[r],r="baseVal"),t[r]},Dt=function(t,n,o){var a="className";if(e.SVGElement&&t instanceof e.SVGElement&&(t=t[a],a="baseVal"),o===r)return void(t[a]=n);for(var i=t[a],l=0,s=o.length;s>l;l++)i=It(i).replace(It(o[l])," ");i=Ht(i);for(var c=0,f=n.length;f>c;c++)-1===It(i).indexOf(It(n[c]))&&(i+=" "+n[c]);t[a]=Ht(i)},Ht=function(e){return e.replace(P,"")},It=function(e){return" "+e+" "},Pt=Date.now||function(){return+new Date},Nt=function(e,t){return e.frame-t.frame},Ot=0,Vt=1,zt="down",qt=-1,Lt=Pt(),Mt=0,$t=0,_t=!1,Bt=0,Gt=!1,Kt=0,Yt=[];"function"==typeof define&&define.amd?define([],function(){return i}):"undefined"!=typeof module&&module.exports?module.exports=i:e.skrollr=i}(window,document);

/*
 * Copyright (c) 2007-2014 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 1.4.13
 */
;(function(k){'use strict';k(['jquery'],function($){var j=$.scrollTo=function(a,b,c){return $(window).scrollTo(a,b,c)};j.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:!0};j.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(f,g,h){if(typeof g=='object'){h=g;g=0}if(typeof h=='function')h={onAfter:h};if(f=='max')f=9e9;h=$.extend({},j.defaults,h);g=g||h.duration;h.queue=h.queue&&h.axis.length>1;if(h.queue)g/=2;h.offset=both(h.offset);h.over=both(h.over);return this._scrollable().each(function(){if(f==null)return;var d=this,$elem=$(d),targ=f,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=win?$(targ):$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}var e=$.isFunction(h.offset)&&h.offset(d,targ)||h.offset;$.each(h.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=j.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(h.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=e[pos]||0;if(h.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*h.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(h.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&h.queue){if(old!=attr[key])animate(h.onAfterFirst);delete attr[key]}});animate(h.onAfter);function animate(a){$elem.animate(attr,g,h.easing,a&&function(){a.call(this,targ,h)})}}).end()};j.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return $.isFunction(a)||typeof a=='object'?a:{top:a,left:a}}return j})}(typeof define==='function'&&define.amd?define:function(a,b){if(typeof module!=='undefined'&&module.exports){module.exports=b(require('jquery'))}else{b(jQuery)}}));

/*
 * Copyright (c) 2007-2014 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 1.3.5
 */
;(function(a){if(typeof define==='function'&&define.amd){define(['jquery'],a)}else{a(jQuery)}}(function($){var g=location.href.replace(/#.*/,'');var h=$.localScroll=function(a){$('body').localScroll(a)};h.defaults={duration:1000,axis:'y',event:'click',stop:true,target:window};$.fn.localScroll=function(a){a=$.extend({},h.defaults,a);if(a.hash&&location.hash){if(a.target)window.scrollTo(0,0);scroll(0,location,a)}return a.lazy?this.on(a.event,'a,area',function(e){if(filter.call(this)){scroll(e,this,a)}}):this.find('a,area').filter(filter).bind(a.event,function(e){scroll(e,this,a)}).end().end();function filter(){return!!this.href&&!!this.hash&&this.href.replace(this.hash,'')==g&&(!a.filter||$(this).is(a.filter))}};h.hash=function(){};function scroll(e,a,b){var c=a.hash.slice(1),elem=document.getElementById(c)||document.getElementsByName(c)[0];if(!elem)return;if(e)e.preventDefault();var d=$(b.target);if(b.lock&&d.is(':animated')||b.onBefore&&b.onBefore(e,elem,d)===false)return;if(b.stop)d._scrollable().stop(true);if(b.hash){var f=elem.id===c?'id':'name',$a=$('<a> </a>').attr(f,c).css({position:'absolute',top:$(window).scrollTop(),left:$(window).scrollLeft()});elem[f]='';$('body').prepend($a);location.hash=a.hash;$a.remove();elem[f]=c}d.scrollTo(elem,b).trigger('notify.serialScroll',[elem])};return h}));

/*! WOW - v1.0.2 - 2014-09-24
* Copyright (c) 2014 Matthieu Aussaguel; Licensed MIT */
(function(){var a,b,c,d,e,f=function(a,b){return function(){return a.apply(b,arguments)}},g=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in b)d=b[c],null==a[c]&&(a[c]=d);return a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a.prototype.addEvent=function(a,b,c){return null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c},a.prototype.removeEvent=function(a,b,c){return null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]},a.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function a(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return a.notSupported=!0,a.prototype.observe=function(){},a}()),d=this.getComputedStyle||function(a){return this.getPropertyValue=function(b){var c;return"float"===b&&(b="styleFloat"),e.test(b)&&b.replace(e,function(a,b){return b.toUpperCase()}),(null!=(c=a.currentStyle)?c[b]:void 0)||null},this},e=/(\-([a-z]){1})/g,this.WOW=function(){function e(a){null==a&&(a={}),this.scrollCallback=f(this.scrollCallback,this),this.scrollHandler=f(this.scrollHandler,this),this.start=f(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),this.animationNameCache=new c}return e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0},e.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},e.prototype.start=function(){var b,c,d,e;if(this.stopped=!1,this.boxes=function(){var a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.all=function(){var a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else{for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);this.util().addEvent(window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)}return this.config.live?new a(function(a){return function(b){var c,d,e,f,g;for(g=[],e=0,f=b.length;f>e;e++)d=b[e],g.push(function(){var a,b,e,f;for(e=d.addedNodes||[],f=[],a=0,b=e.length;b>a;a++)c=e[a],f.push(this.doSync(c));return f}.call(a));return g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},e.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},e.prototype.sync=function(){return a.notSupported?this.doSync(this.element):void 0},e.prototype.doSync=function(a){var b,c,d,e,f;if(null==a&&(a=this.element),1===a.nodeType){for(a=a.parentNode||a,e=a.querySelectorAll("."+this.config.boxClass),f=[],c=0,d=e.length;d>c;c++)b=e[c],g.call(this.all,b)<0?(this.boxes.push(b),this.all.push(b),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(b,!0),f.push(this.scrolled=!0)):f.push(void 0);return f}},e.prototype.show=function(a){return this.applyStyle(a),a.className=""+a.className+" "+this.config.animateClass},e.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},e.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),e.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.style.visibility="visible");return e},e.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},e.prototype.vendors=["moz","webkit"],e.prototype.vendorSet=function(a,b){var c,d,e,f;f=[];for(c in b)d=b[c],a[""+c]=d,f.push(function(){var b,f,g,h;for(g=this.vendors,h=[],b=0,f=g.length;f>b;b++)e=g[b],h.push(a[""+e+c.charAt(0).toUpperCase()+c.substr(1)]=d);return h}.call(this));return f},e.prototype.vendorCSS=function(a,b){var c,e,f,g,h,i;for(e=d(a),c=e.getPropertyCSSValue(b),i=this.vendors,g=0,h=i.length;h>g;g++)f=i[g],c=c||e.getPropertyCSSValue("-"+f+"-"+b);return c},e.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=d(a).getPropertyValue("animation-name")}return"none"===b?"":b},e.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},e.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},e.prototype.scrollHandler=function(){return this.scrolled=!0},e.prototype.scrollCallback=function(){var a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},e.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},e.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=window.pageYOffset,e=f+Math.min(this.element.clientHeight,this.util().innerHeight())-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},e.prototype.util=function(){return null!=this._util?this._util:this._util=new b},e.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},e}()}).call(this);

/*
 * ******************************************************************************
 *  jquery.mb.components
 *  file: jquery.mb.browser.js
 *
 *  Copyright (c) 2001-2014. Matteo Bicocchi (Pupunzi);
 *  Open lab srl, Firenze - Italy
 *  email: matteo@open-lab.com
 *  site: 	http://pupunzi.com
 *  blog:	http://pupunzi.open-lab.com
 * 	http://open-lab.com
 *
 *  Licences: MIT, GPL
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 *
 *  last modified: 27/01/14 19.58
 *  *****************************************************************************
 */

/*******************************************************************************
 *
 * jquery.mb.browser
 * Author: pupunzi
 * Creation date: 16/01/13
 *
 ******************************************************************************/
/*Browser detection patch*/

if(!jQuery.browser){

	jQuery.browser = {};
	jQuery.browser.mozilla = false;
	jQuery.browser.webkit = false;
	jQuery.browser.opera = false;
	jQuery.browser.safari = false;
	jQuery.browser.chrome = false;
	jQuery.browser.msie = false;
	jQuery.browser.android = false;
	jQuery.browser.blackberry = false;
	jQuery.browser.ios = false;
	jQuery.browser.operaMobile = false;
	jQuery.browser.windowsMobile = false;
	jQuery.browser.mobile = false;

	var nAgt = navigator.userAgent;
	jQuery.browser.ua = nAgt;

	jQuery.browser.name  = navigator.appName;
	jQuery.browser.fullVersion  = ''+parseFloat(navigator.appVersion);
	jQuery.browser.majorVersion = parseInt(navigator.appVersion,10);
	var nameOffset,verOffset,ix;

// In Opera, the true version is after "Opera" or after "Version"
	if ((verOffset=nAgt.indexOf("Opera"))!=-1) {
		jQuery.browser.opera = true;
		jQuery.browser.name = "Opera";
		jQuery.browser.fullVersion = nAgt.substring(verOffset+6);
		if ((verOffset=nAgt.indexOf("Version"))!=-1)
			jQuery.browser.fullVersion = nAgt.substring(verOffset+8);
	}

// In MSIE < 11, the true version is after "MSIE" in userAgent
	else if ( (verOffset=nAgt.indexOf("MSIE"))!=-1) {
		jQuery.browser.msie = true;
		jQuery.browser.name = "Microsoft Internet Explorer";
		jQuery.browser.fullVersion = nAgt.substring(verOffset+5);
	}

// In TRIDENT (IE11) => 11, the true version is after "rv:" in userAgent
	else if (nAgt.indexOf("Trident")!=-1 ) {
		jQuery.browser.msie = true;
		jQuery.browser.name = "Microsoft Internet Explorer";
		var start = nAgt.indexOf("rv:")+3;
		var end = start+4;
		jQuery.browser.fullVersion = nAgt.substring(start,end);
	}

// In Chrome, the true version is after "Chrome"
	else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
		jQuery.browser.webkit = true;
		jQuery.browser.chrome = true;
		jQuery.browser.name = "Chrome";
		jQuery.browser.fullVersion = nAgt.substring(verOffset+7);
	}
// In Safari, the true version is after "Safari" or after "Version"
	else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
		jQuery.browser.webkit = true;
		jQuery.browser.safari = true;
		jQuery.browser.name = "Safari";
		jQuery.browser.fullVersion = nAgt.substring(verOffset+7);
		if ((verOffset=nAgt.indexOf("Version"))!=-1)
			jQuery.browser.fullVersion = nAgt.substring(verOffset+8);
	}
// In Safari, the true version is after "Safari" or after "Version"
	else if ((verOffset=nAgt.indexOf("AppleWebkit"))!=-1) {
		jQuery.browser.webkit = true;
		jQuery.browser.name = "Safari";
		jQuery.browser.fullVersion = nAgt.substring(verOffset+7);
		if ((verOffset=nAgt.indexOf("Version"))!=-1)
			jQuery.browser.fullVersion = nAgt.substring(verOffset+8);
	}
// In Firefox, the true version is after "Firefox"
	else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
		jQuery.browser.mozilla = true;
		jQuery.browser.name = "Firefox";
		jQuery.browser.fullVersion = nAgt.substring(verOffset+8);
	}
// In most other browsers, "name/version" is at the end of userAgent
	else if ( (nameOffset=nAgt.lastIndexOf(' ')+1) < (verOffset=nAgt.lastIndexOf('/')) ){
		jQuery.browser.name = nAgt.substring(nameOffset,verOffset);
		jQuery.browser.fullVersion = nAgt.substring(verOffset+1);
		if (jQuery.browser.name.toLowerCase()==jQuery.browser.name.toUpperCase()) {
			jQuery.browser.name = navigator.appName;
		}
	}

	/*Check all mobile environments*/
	jQuery.browser.android = (/Android/i).test(nAgt);
	jQuery.browser.blackberry = (/BlackBerry/i).test(nAgt);
	jQuery.browser.ios = (/iPhone|iPad|iPod/i).test(nAgt);
	jQuery.browser.operaMobile = (/Opera Mini/i).test(nAgt);
	jQuery.browser.windowsMobile = (/IEMobile/i).test(nAgt);
	jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile;


// trim the fullVersion string at semicolon/space if present
	if ((ix=jQuery.browser.fullVersion.indexOf(";"))!=-1)
		jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix);
	if ((ix=jQuery.browser.fullVersion.indexOf(" "))!=-1)
		jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,ix);

	jQuery.browser.majorVersion = parseInt(''+jQuery.browser.fullVersion,10);
	if (isNaN(jQuery.browser.majorVersion)) {
		jQuery.browser.fullVersion  = ''+parseFloat(navigator.appVersion);
		jQuery.browser.majorVersion = parseInt(navigator.appVersion,10);
	}
	jQuery.browser.version = jQuery.browser.majorVersion;
}

var txt = '' + 'navigator.appName = ' + navigator.appName + '<br>' + 'navigator.userAgent = ' + navigator.userAgent + '<br><br><br>' + 'jQuery.browser.name  = ' + jQuery.browser.name + '<br>' + 'jQuery.browser.fullVersion  = ' + jQuery.browser.fullVersion + '<br>' + 'jQuery.browser.version = ' + jQuery.browser.version + '<br>' + 'jQuery.browser.majorVersion = ' + jQuery.browser.majorVersion + '<br><br><br>' + 'jQuery.browser.msie = ' + jQuery.browser.msie + '<br>' + 'jQuery.browser.mozilla = ' + jQuery.browser.mozilla + '<br>' + 'jQuery.browser.opera = ' + jQuery.browser.opera + '<br>' + 'jQuery.browser.chrome = ' + jQuery.browser.chrome + '<br>'+ 'jQuery.browser.webkit = ' + jQuery.browser.webkit + '<br>' + '<br>' + 'jQuery.browser.android = ' + jQuery.browser.android + '<br>' + 'jQuery.browser.blackberry = ' + jQuery.browser.blackberry + '<br>' + 'jQuery.browser.ios = ' + jQuery.browser.ios + '<br>' +  'jQuery.browser.operaMobile = ' + jQuery.browser.operaMobile + '<br>' + 'jQuery.browser.windowsMobile = ' + jQuery.browser.windowsMobile + '<br>' + 'jQuery.browser.mobile = ' + jQuery.browser.mobile;

$("#result").html(txt);

// SmoothScroll v0.9.9
// Licensed under the terms of the MIT license.

// People involved
// - Balazs Galambosi: maintainer (CHANGELOG.txt)
// - Patrick Brunner (patrickb1991@gmail.com)
// - Michael Herf: ssc_pulse Algorithm
$ = jQuery.noConflict();
function ssc_init(){if(!document.body)return;var e=document.body;var t=document.documentElement;var n=window.innerHeight;var r=e.scrollHeight;ssc_root=document.compatMode.indexOf("CSS")>=0?t:e;ssc_activeElement=e;ssc_initdone=true;if(top!=self){ssc_frame=true}else if(r>n&&(e.offsetHeight<=n||t.offsetHeight<=n)){ssc_root.style.height="auto";if(ssc_root.offsetHeight<=n){var i=document.createElement("div");i.style.clear="both";e.appendChild(i)}}if(!ssc_fixedback){e.style.backgroundAttachment="scroll";t.style.backgroundAttachment="scroll"}if(ssc_keyboardsupport){ssc_addEvent("keydown",ssc_keydown)}}function ssc_scrollArray(e,t,n,r){r||(r=1e3);ssc_directionCheck(t,n);ssc_que.push({x:t,y:n,lastX:t<0?.99:-.99,lastY:n<0?.99:-.99,start:+(new Date)});if(ssc_pending){return}var i=function(){var s=+(new Date);var o=0;var u=0;for(var a=0;a<ssc_que.length;a++){var f=ssc_que[a];var l=s-f.start;var c=l>=ssc_animtime;var h=c?1:l/ssc_animtime;if(ssc_pulseAlgorithm){h=ssc_pulse(h)}var p=f.x*h-f.lastX>>0;var d=f.y*h-f.lastY>>0;o+=p;u+=d;f.lastX+=p;f.lastY+=d;if(c){ssc_que.splice(a,1);a--}}if(t){var v=e.scrollLeft;e.scrollLeft+=o;if(o&&e.scrollLeft===v){t=0}}if(n){var m=e.scrollTop;e.scrollTop+=u;if(u&&e.scrollTop===m){n=0}}if(!t&&!n){ssc_que=[]}if(ssc_que.length){setTimeout(i,r/ssc_framerate+1)}else{ssc_pending=false}};setTimeout(i,0);ssc_pending=true}function ssc_wheel(e){if(!ssc_initdone){init()}var t=e.target;var n=ssc_overflowingAncestor(t);if(!n||e.defaultPrevented||ssc_isNodeName(ssc_activeElement,"embed")||ssc_isNodeName(t,"embed")&&/\.pdf/i.test(t.src)){return true}var r=e.wheelDeltaX||0;var i=e.wheelDeltaY||0;if(!r&&!i){i=e.wheelDelta||0}if(Math.abs(r)>1.2){r*=ssc_stepsize/120}if(Math.abs(i)>1.2){i*=ssc_stepsize/120}ssc_scrollArray(n,-r,-i);e.preventDefault()}function ssc_keydown(e){var t=e.target;var n=e.ctrlKey||e.altKey||e.metaKey;if(/input|textarea|embed/i.test(t.nodeName)||t.isContentEditable||e.defaultPrevented||n){return true}if(ssc_isNodeName(t,"button")&&e.keyCode===ssc_key.spacebar){return true}var r,i=0,s=0;var o=ssc_overflowingAncestor(ssc_activeElement);var u=o.clientHeight;if(o==document.body){u=window.innerHeight}switch(e.keyCode){case ssc_key.up:s=-ssc_arrowscroll;break;case ssc_key.down:s=ssc_arrowscroll;break;case ssc_key.spacebar:r=e.shiftKey?1:-1;s=-r*u*.9;break;case ssc_key.pageup:s=-u*.9;break;case ssc_key.pagedown:s=u*.9;break;case ssc_key.home:s=-o.scrollTop;break;case ssc_key.end:var a=o.scrollHeight-o.scrollTop-u;s=a>0?a+10:0;break;case ssc_key.left:i=-ssc_arrowscroll;break;case ssc_key.right:i=ssc_arrowscroll;break;default:return true}ssc_scrollArray(o,i,s);e.preventDefault()}function ssc_mousedown(e){ssc_activeElement=e.target}function ssc_setCache(e,t){for(var n=e.length;n--;)ssc_cache[ssc_uniqueID(e[n])]=t;return t}function ssc_overflowingAncestor(e){var t=[];var n=ssc_root.scrollHeight;do{var r=ssc_cache[ssc_uniqueID(e)];if(r){return ssc_setCache(t,r)}t.push(e);if(n===e.scrollHeight){if(!ssc_frame||ssc_root.clientHeight+10<n){return ssc_setCache(t,document.body)}}else if(e.clientHeight+10<e.scrollHeight){overflow=getComputedStyle(e,"").getPropertyValue("overflow");if(overflow==="scroll"||overflow==="auto"){return ssc_setCache(t,e)}}}while(e=e.parentNode)}function ssc_addEvent(e,t,n){window.addEventListener(e,t,n||false)}function ssc_removeEvent(e,t,n){window.removeEventListener(e,t,n||false)}function ssc_isNodeName(e,t){return e.nodeName.toLowerCase()===t.toLowerCase()}function ssc_directionCheck(e,t){e=e>0?1:-1;t=t>0?1:-1;if(ssc_direction.x!==e||ssc_direction.y!==t){ssc_direction.x=e;ssc_direction.y=t;ssc_que=[]}}function ssc_pulse_(e){var t,n,r;e=e*ssc_pulseScale;if(e<1){t=e-(1-Math.exp(-e))}else{n=Math.exp(-1);e-=1;r=1-Math.exp(-e);t=n+r*(1-n)}return t*ssc_pulseNormalize}function ssc_pulse(e){if(e>=1)return 1;if(e<=0)return 0;if(ssc_pulseNormalize==1){ssc_pulseNormalize/=ssc_pulse_(1)}return ssc_pulse_(e)}var ssc_framerate=150;var ssc_animtime=500;var ssc_stepsize=150;var ssc_pulseAlgorithm=true;var ssc_pulseScale=6;var ssc_pulseNormalize=1;var ssc_keyboardsupport=true;var ssc_arrowscroll=50;var ssc_frame=false;var ssc_direction={x:0,y:0};var ssc_initdone=false;var ssc_fixedback=true;var ssc_root=document.documentElement;var ssc_activeElement;var ssc_key={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36};var ssc_que=[];var ssc_pending=false;var ssc_cache={};setInterval(function(){ssc_cache={}},10*1e3);var ssc_uniqueID=function(){var e=0;return function(t){return t.ssc_uniqueID||(t.ssc_uniqueID=e++)}}();$.browser.chrome=/chrome/.test(navigator.userAgent.toLowerCase());if($.browser.chrome){ssc_addEvent("mousedown",ssc_mousedown);ssc_addEvent("mousewheel",ssc_wheel);ssc_addEvent("load",ssc_init)};

/*
 *  jQuery OwlCarousel v1.3.3
 *
 *  Copyright (c) 2013 Bartosz Wojciechowski
 *  http://www.owlgraphic.com/owlcarousel/
 *
 *  Licensed under MIT
 *
 */
"function"!==typeof Object.create&&(Object.create=function(f){function g(){}g.prototype=f;return new g});
(function(f,g,k){var l={init:function(a,b){this.$elem=f(b);this.options=f.extend({},f.fn.owlCarousel.options,this.$elem.data(),a);this.userOptions=a;this.loadContent()},loadContent:function(){function a(a){var d,e="";if("function"===typeof b.options.jsonSuccess)b.options.jsonSuccess.apply(this,[a]);else{for(d in a.owl)a.owl.hasOwnProperty(d)&&(e+=a.owl[d].item);b.$elem.html(e)}b.logIn()}var b=this,e;"function"===typeof b.options.beforeInit&&b.options.beforeInit.apply(this,[b.$elem]);"string"===typeof b.options.jsonPath?
(e=b.options.jsonPath,f.getJSON(e,a)):b.logIn()},logIn:function(){this.$elem.data("owl-originalStyles",this.$elem.attr("style"));this.$elem.data("owl-originalClasses",this.$elem.attr("class"));this.$elem.css({opacity:0});this.orignalItems=this.options.items;this.checkBrowser();this.wrapperWidth=0;this.checkVisible=null;this.setVars()},setVars:function(){if(0===this.$elem.children().length)return!1;this.baseClass();this.eventTypes();this.$userItems=this.$elem.children();this.itemsAmount=this.$userItems.length;
this.wrapItems();this.$owlItems=this.$elem.find(".owl-item");this.$owlWrapper=this.$elem.find(".owl-wrapper");this.playDirection="next";this.prevItem=0;this.prevArr=[0];this.currentItem=0;this.customEvents();this.onStartup()},onStartup:function(){this.updateItems();this.calculateAll();this.buildControls();this.updateControls();this.response();this.moveEvents();this.stopOnHover();this.owlStatus();!1!==this.options.transitionStyle&&this.transitionTypes(this.options.transitionStyle);!0===this.options.autoPlay&&
(this.options.autoPlay=5E3);this.play();this.$elem.find(".owl-wrapper").css("display","block");this.$elem.is(":visible")?this.$elem.css("opacity",1):this.watchVisibility();this.onstartup=!1;this.eachMoveUpdate();"function"===typeof this.options.afterInit&&this.options.afterInit.apply(this,[this.$elem])},eachMoveUpdate:function(){!0===this.options.lazyLoad&&this.lazyLoad();!0===this.options.autoHeight&&this.autoHeight();this.onVisibleItems();"function"===typeof this.options.afterAction&&this.options.afterAction.apply(this,
[this.$elem])},updateVars:function(){"function"===typeof this.options.beforeUpdate&&this.options.beforeUpdate.apply(this,[this.$elem]);this.watchVisibility();this.updateItems();this.calculateAll();this.updatePosition();this.updateControls();this.eachMoveUpdate();"function"===typeof this.options.afterUpdate&&this.options.afterUpdate.apply(this,[this.$elem])},reload:function(){var a=this;g.setTimeout(function(){a.updateVars()},0)},watchVisibility:function(){var a=this;if(!1===a.$elem.is(":visible"))a.$elem.css({opacity:0}),
g.clearInterval(a.autoPlayInterval),g.clearInterval(a.checkVisible);else return!1;a.checkVisible=g.setInterval(function(){a.$elem.is(":visible")&&(a.reload(),a.$elem.animate({opacity:1},200),g.clearInterval(a.checkVisible))},500)},wrapItems:function(){this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>');this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');this.wrapperOuter=this.$elem.find(".owl-wrapper-outer");this.$elem.css("display","block")},
baseClass:function(){var a=this.$elem.hasClass(this.options.baseClass),b=this.$elem.hasClass(this.options.theme);a||this.$elem.addClass(this.options.baseClass);b||this.$elem.addClass(this.options.theme)},updateItems:function(){var a,b;if(!1===this.options.responsive)return!1;if(!0===this.options.singleItem)return this.options.items=this.orignalItems=1,this.options.itemsCustom=!1,this.options.itemsDesktop=!1,this.options.itemsDesktopSmall=!1,this.options.itemsTablet=!1,this.options.itemsTabletSmall=
!1,this.options.itemsMobile=!1;a=f(this.options.responsiveBaseWidth).width();a>(this.options.itemsDesktop[0]||this.orignalItems)&&(this.options.items=this.orignalItems);if(!1!==this.options.itemsCustom)for(this.options.itemsCustom.sort(function(a,b){return a[0]-b[0]}),b=0;b<this.options.itemsCustom.length;b+=1)this.options.itemsCustom[b][0]<=a&&(this.options.items=this.options.itemsCustom[b][1]);else a<=this.options.itemsDesktop[0]&&!1!==this.options.itemsDesktop&&(this.options.items=this.options.itemsDesktop[1]),
a<=this.options.itemsDesktopSmall[0]&&!1!==this.options.itemsDesktopSmall&&(this.options.items=this.options.itemsDesktopSmall[1]),a<=this.options.itemsTablet[0]&&!1!==this.options.itemsTablet&&(this.options.items=this.options.itemsTablet[1]),a<=this.options.itemsTabletSmall[0]&&!1!==this.options.itemsTabletSmall&&(this.options.items=this.options.itemsTabletSmall[1]),a<=this.options.itemsMobile[0]&&!1!==this.options.itemsMobile&&(this.options.items=this.options.itemsMobile[1]);this.options.items>this.itemsAmount&&
!0===this.options.itemsScaleUp&&(this.options.items=this.itemsAmount)},response:function(){var a=this,b,e;if(!0!==a.options.responsive)return!1;e=f(g).width();a.resizer=function(){f(g).width()!==e&&(!1!==a.options.autoPlay&&g.clearInterval(a.autoPlayInterval),g.clearTimeout(b),b=g.setTimeout(function(){e=f(g).width();a.updateVars()},a.options.responsiveRefreshRate))};f(g).resize(a.resizer)},updatePosition:function(){this.jumpTo(this.currentItem);!1!==this.options.autoPlay&&this.checkAp()},appendItemsSizes:function(){var a=
this,b=0,e=a.itemsAmount-a.options.items;a.$owlItems.each(function(c){var d=f(this);d.css({width:a.itemWidth}).data("owl-item",Number(c));if(0===c%a.options.items||c===e)c>e||(b+=1);d.data("owl-roundPages",b)})},appendWrapperSizes:function(){this.$owlWrapper.css({width:this.$owlItems.length*this.itemWidth*2,left:0});this.appendItemsSizes()},calculateAll:function(){this.calculateWidth();this.appendWrapperSizes();this.loops();this.max()},calculateWidth:function(){this.itemWidth=Math.round(this.$elem.width()/
this.options.items)},max:function(){var a=-1*(this.itemsAmount*this.itemWidth-this.options.items*this.itemWidth);this.options.items>this.itemsAmount?this.maximumPixels=a=this.maximumItem=0:(this.maximumItem=this.itemsAmount-this.options.items,this.maximumPixels=a);return a},min:function(){return 0},loops:function(){var a=0,b=0,e,c;this.positionsInArray=[0];this.pagesInArray=[];for(e=0;e<this.itemsAmount;e+=1)b+=this.itemWidth,this.positionsInArray.push(-b),!0===this.options.scrollPerPage&&(c=f(this.$owlItems[e]),
c=c.data("owl-roundPages"),c!==a&&(this.pagesInArray[a]=this.positionsInArray[e],a=c))},buildControls:function(){if(!0===this.options.navigation||!0===this.options.pagination)this.owlControls=f('<div class="owl-controls"/>').toggleClass("clickable",!this.browser.isTouch).appendTo(this.$elem);!0===this.options.pagination&&this.buildPagination();!0===this.options.navigation&&this.buildButtons()},buildButtons:function(){var a=this,b=f('<div class="owl-buttons"/>');a.owlControls.append(b);a.buttonPrev=
f("<div/>",{"class":"owl-prev",html:a.options.navigationText[0]||""});a.buttonNext=f("<div/>",{"class":"owl-next",html:a.options.navigationText[1]||""});b.append(a.buttonPrev).append(a.buttonNext);b.on("touchstart.owlControls mousedown.owlControls",'div[class^="owl"]',function(a){a.preventDefault()});b.on("touchend.owlControls mouseup.owlControls",'div[class^="owl"]',function(b){b.preventDefault();f(this).hasClass("owl-next")?a.next():a.prev()})},buildPagination:function(){var a=this;a.paginationWrapper=
f('<div class="owl-pagination"/>');a.owlControls.append(a.paginationWrapper);a.paginationWrapper.on("touchend.owlControls mouseup.owlControls",".owl-page",function(b){b.preventDefault();Number(f(this).data("owl-page"))!==a.currentItem&&a.goTo(Number(f(this).data("owl-page")),!0)})},updatePagination:function(){var a,b,e,c,d,g;if(!1===this.options.pagination)return!1;this.paginationWrapper.html("");a=0;b=this.itemsAmount-this.itemsAmount%this.options.items;for(c=0;c<this.itemsAmount;c+=1)0===c%this.options.items&&
(a+=1,b===c&&(e=this.itemsAmount-this.options.items),d=f("<div/>",{"class":"owl-page"}),g=f("<span></span>",{text:!0===this.options.paginationNumbers?a:"","class":!0===this.options.paginationNumbers?"owl-numbers":""}),d.append(g),d.data("owl-page",b===c?e:c),d.data("owl-roundPages",a),this.paginationWrapper.append(d));this.checkPagination()},checkPagination:function(){var a=this;if(!1===a.options.pagination)return!1;a.paginationWrapper.find(".owl-page").each(function(){f(this).data("owl-roundPages")===
f(a.$owlItems[a.currentItem]).data("owl-roundPages")&&(a.paginationWrapper.find(".owl-page").removeClass("active"),f(this).addClass("active"))})},checkNavigation:function(){if(!1===this.options.navigation)return!1;!1===this.options.rewindNav&&(0===this.currentItem&&0===this.maximumItem?(this.buttonPrev.addClass("disabled"),this.buttonNext.addClass("disabled")):0===this.currentItem&&0!==this.maximumItem?(this.buttonPrev.addClass("disabled"),this.buttonNext.removeClass("disabled")):this.currentItem===
this.maximumItem?(this.buttonPrev.removeClass("disabled"),this.buttonNext.addClass("disabled")):0!==this.currentItem&&this.currentItem!==this.maximumItem&&(this.buttonPrev.removeClass("disabled"),this.buttonNext.removeClass("disabled")))},updateControls:function(){this.updatePagination();this.checkNavigation();this.owlControls&&(this.options.items>=this.itemsAmount?this.owlControls.hide():this.owlControls.show())},destroyControls:function(){this.owlControls&&this.owlControls.remove()},next:function(a){if(this.isTransition)return!1;
this.currentItem+=!0===this.options.scrollPerPage?this.options.items:1;if(this.currentItem>this.maximumItem+(!0===this.options.scrollPerPage?this.options.items-1:0))if(!0===this.options.rewindNav)this.currentItem=0,a="rewind";else return this.currentItem=this.maximumItem,!1;this.goTo(this.currentItem,a)},prev:function(a){if(this.isTransition)return!1;this.currentItem=!0===this.options.scrollPerPage&&0<this.currentItem&&this.currentItem<this.options.items?0:this.currentItem-(!0===this.options.scrollPerPage?
this.options.items:1);if(0>this.currentItem)if(!0===this.options.rewindNav)this.currentItem=this.maximumItem,a="rewind";else return this.currentItem=0,!1;this.goTo(this.currentItem,a)},goTo:function(a,b,e){var c=this;if(c.isTransition)return!1;"function"===typeof c.options.beforeMove&&c.options.beforeMove.apply(this,[c.$elem]);a>=c.maximumItem?a=c.maximumItem:0>=a&&(a=0);c.currentItem=c.owl.currentItem=a;if(!1!==c.options.transitionStyle&&"drag"!==e&&1===c.options.items&&!0===c.browser.support3d)return c.swapSpeed(0),
!0===c.browser.support3d?c.transition3d(c.positionsInArray[a]):c.css2slide(c.positionsInArray[a],1),c.afterGo(),c.singleItemTransition(),!1;a=c.positionsInArray[a];!0===c.browser.support3d?(c.isCss3Finish=!1,!0===b?(c.swapSpeed("paginationSpeed"),g.setTimeout(function(){c.isCss3Finish=!0},c.options.paginationSpeed)):"rewind"===b?(c.swapSpeed(c.options.rewindSpeed),g.setTimeout(function(){c.isCss3Finish=!0},c.options.rewindSpeed)):(c.swapSpeed("slideSpeed"),g.setTimeout(function(){c.isCss3Finish=!0},
c.options.slideSpeed)),c.transition3d(a)):!0===b?c.css2slide(a,c.options.paginationSpeed):"rewind"===b?c.css2slide(a,c.options.rewindSpeed):c.css2slide(a,c.options.slideSpeed);c.afterGo()},jumpTo:function(a){"function"===typeof this.options.beforeMove&&this.options.beforeMove.apply(this,[this.$elem]);a>=this.maximumItem||-1===a?a=this.maximumItem:0>=a&&(a=0);this.swapSpeed(0);!0===this.browser.support3d?this.transition3d(this.positionsInArray[a]):this.css2slide(this.positionsInArray[a],1);this.currentItem=
this.owl.currentItem=a;this.afterGo()},afterGo:function(){this.prevArr.push(this.currentItem);this.prevItem=this.owl.prevItem=this.prevArr[this.prevArr.length-2];this.prevArr.shift(0);this.prevItem!==this.currentItem&&(this.checkPagination(),this.checkNavigation(),this.eachMoveUpdate(),!1!==this.options.autoPlay&&this.checkAp());"function"===typeof this.options.afterMove&&this.prevItem!==this.currentItem&&this.options.afterMove.apply(this,[this.$elem])},stop:function(){this.apStatus="stop";g.clearInterval(this.autoPlayInterval)},
checkAp:function(){"stop"!==this.apStatus&&this.play()},play:function(){var a=this;a.apStatus="play";if(!1===a.options.autoPlay)return!1;g.clearInterval(a.autoPlayInterval);a.autoPlayInterval=g.setInterval(function(){a.next(!0)},a.options.autoPlay)},swapSpeed:function(a){"slideSpeed"===a?this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)):"paginationSpeed"===a?this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)):"string"!==typeof a&&this.$owlWrapper.css(this.addCssSpeed(a))},
addCssSpeed:function(a){return{"-webkit-transition":"all "+a+"ms ease","-moz-transition":"all "+a+"ms ease","-o-transition":"all "+a+"ms ease",transition:"all "+a+"ms ease"}},removeTransition:function(){return{"-webkit-transition":"","-moz-transition":"","-o-transition":"",transition:""}},doTranslate:function(a){return{"-webkit-transform":"translate3d("+a+"px, 0px, 0px)","-moz-transform":"translate3d("+a+"px, 0px, 0px)","-o-transform":"translate3d("+a+"px, 0px, 0px)","-ms-transform":"translate3d("+
a+"px, 0px, 0px)",transform:"translate3d("+a+"px, 0px,0px)"}},transition3d:function(a){this.$owlWrapper.css(this.doTranslate(a))},css2move:function(a){this.$owlWrapper.css({left:a})},css2slide:function(a,b){var e=this;e.isCssFinish=!1;e.$owlWrapper.stop(!0,!0).animate({left:a},{duration:b||e.options.slideSpeed,complete:function(){e.isCssFinish=!0}})},checkBrowser:function(){var a=k.createElement("div");a.style.cssText="  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)";
a=a.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g);this.browser={support3d:null!==a&&1===a.length,isTouch:"ontouchstart"in g||g.navigator.msMaxTouchPoints}},moveEvents:function(){if(!1!==this.options.mouseDrag||!1!==this.options.touchDrag)this.gestures(),this.disabledEvents()},eventTypes:function(){var a=["s","e","x"];this.ev_types={};!0===this.options.mouseDrag&&!0===this.options.touchDrag?a=["touchstart.owl mousedown.owl","touchmove.owl mousemove.owl","touchend.owl touchcancel.owl mouseup.owl"]:
!1===this.options.mouseDrag&&!0===this.options.touchDrag?a=["touchstart.owl","touchmove.owl","touchend.owl touchcancel.owl"]:!0===this.options.mouseDrag&&!1===this.options.touchDrag&&(a=["mousedown.owl","mousemove.owl","mouseup.owl"]);this.ev_types.start=a[0];this.ev_types.move=a[1];this.ev_types.end=a[2]},disabledEvents:function(){this.$elem.on("dragstart.owl",function(a){a.preventDefault()});this.$elem.on("mousedown.disableTextSelect",function(a){return f(a.target).is("input, textarea, select, option")})},
gestures:function(){function a(a){if(void 0!==a.touches)return{x:a.touches[0].pageX,y:a.touches[0].pageY};if(void 0===a.touches){if(void 0!==a.pageX)return{x:a.pageX,y:a.pageY};if(void 0===a.pageX)return{x:a.clientX,y:a.clientY}}}function b(a){"on"===a?(f(k).on(d.ev_types.move,e),f(k).on(d.ev_types.end,c)):"off"===a&&(f(k).off(d.ev_types.move),f(k).off(d.ev_types.end))}function e(b){b=b.originalEvent||b||g.event;d.newPosX=a(b).x-h.offsetX;d.newPosY=a(b).y-h.offsetY;d.newRelativeX=d.newPosX-h.relativePos;
"function"===typeof d.options.startDragging&&!0!==h.dragging&&0!==d.newRelativeX&&(h.dragging=!0,d.options.startDragging.apply(d,[d.$elem]));(8<d.newRelativeX||-8>d.newRelativeX)&&!0===d.browser.isTouch&&(void 0!==b.preventDefault?b.preventDefault():b.returnValue=!1,h.sliding=!0);(10<d.newPosY||-10>d.newPosY)&&!1===h.sliding&&f(k).off("touchmove.owl");d.newPosX=Math.max(Math.min(d.newPosX,d.newRelativeX/5),d.maximumPixels+d.newRelativeX/5);!0===d.browser.support3d?d.transition3d(d.newPosX):d.css2move(d.newPosX)}
function c(a){a=a.originalEvent||a||g.event;var c;a.target=a.target||a.srcElement;h.dragging=!1;!0!==d.browser.isTouch&&d.$owlWrapper.removeClass("grabbing");d.dragDirection=0>d.newRelativeX?d.owl.dragDirection="left":d.owl.dragDirection="right";0!==d.newRelativeX&&(c=d.getNewPosition(),d.goTo(c,!1,"drag"),h.targetElement===a.target&&!0!==d.browser.isTouch&&(f(a.target).on("click.disable",function(a){a.stopImmediatePropagation();a.stopPropagation();a.preventDefault();f(a.target).off("click.disable")}),
a=f._data(a.target,"events").click,c=a.pop(),a.splice(0,0,c)));b("off")}var d=this,h={offsetX:0,offsetY:0,baseElWidth:0,relativePos:0,position:null,minSwipe:null,maxSwipe:null,sliding:null,dargging:null,targetElement:null};d.isCssFinish=!0;d.$elem.on(d.ev_types.start,".owl-wrapper",function(c){c=c.originalEvent||c||g.event;var e;if(3===c.which)return!1;if(!(d.itemsAmount<=d.options.items)){if(!1===d.isCssFinish&&!d.options.dragBeforeAnimFinish||!1===d.isCss3Finish&&!d.options.dragBeforeAnimFinish)return!1;
!1!==d.options.autoPlay&&g.clearInterval(d.autoPlayInterval);!0===d.browser.isTouch||d.$owlWrapper.hasClass("grabbing")||d.$owlWrapper.addClass("grabbing");d.newPosX=0;d.newRelativeX=0;f(this).css(d.removeTransition());e=f(this).position();h.relativePos=e.left;h.offsetX=a(c).x-e.left;h.offsetY=a(c).y-e.top;b("on");h.sliding=!1;h.targetElement=c.target||c.srcElement}})},getNewPosition:function(){var a=this.closestItem();a>this.maximumItem?a=this.currentItem=this.maximumItem:0<=this.newPosX&&(this.currentItem=
a=0);return a},closestItem:function(){var a=this,b=!0===a.options.scrollPerPage?a.pagesInArray:a.positionsInArray,e=a.newPosX,c=null;f.each(b,function(d,g){e-a.itemWidth/20>b[d+1]&&e-a.itemWidth/20<g&&"left"===a.moveDirection()?(c=g,a.currentItem=!0===a.options.scrollPerPage?f.inArray(c,a.positionsInArray):d):e+a.itemWidth/20<g&&e+a.itemWidth/20>(b[d+1]||b[d]-a.itemWidth)&&"right"===a.moveDirection()&&(!0===a.options.scrollPerPage?(c=b[d+1]||b[b.length-1],a.currentItem=f.inArray(c,a.positionsInArray)):
(c=b[d+1],a.currentItem=d+1))});return a.currentItem},moveDirection:function(){var a;0>this.newRelativeX?(a="right",this.playDirection="next"):(a="left",this.playDirection="prev");return a},customEvents:function(){var a=this;a.$elem.on("owl.next",function(){a.next()});a.$elem.on("owl.prev",function(){a.prev()});a.$elem.on("owl.play",function(b,e){a.options.autoPlay=e;a.play();a.hoverStatus="play"});a.$elem.on("owl.stop",function(){a.stop();a.hoverStatus="stop"});a.$elem.on("owl.goTo",function(b,e){a.goTo(e)});
a.$elem.on("owl.jumpTo",function(b,e){a.jumpTo(e)})},stopOnHover:function(){var a=this;!0===a.options.stopOnHover&&!0!==a.browser.isTouch&&!1!==a.options.autoPlay&&(a.$elem.on("mouseover",function(){a.stop()}),a.$elem.on("mouseout",function(){"stop"!==a.hoverStatus&&a.play()}))},lazyLoad:function(){var a,b,e,c,d;if(!1===this.options.lazyLoad)return!1;for(a=0;a<this.itemsAmount;a+=1)b=f(this.$owlItems[a]),"loaded"!==b.data("owl-loaded")&&(e=b.data("owl-item"),c=b.find(".lazyOwl"),"string"!==typeof c.data("src")?
b.data("owl-loaded","loaded"):(void 0===b.data("owl-loaded")&&(c.hide(),b.addClass("loading").data("owl-loaded","checked")),(d=!0===this.options.lazyFollow?e>=this.currentItem:!0)&&e<this.currentItem+this.options.items&&c.length&&this.lazyPreload(b,c)))},lazyPreload:function(a,b){function e(){a.data("owl-loaded","loaded").removeClass("loading");b.removeAttr("data-src");"fade"===d.options.lazyEffect?b.fadeIn(400):b.show();"function"===typeof d.options.afterLazyLoad&&d.options.afterLazyLoad.apply(this,
[d.$elem])}function c(){f+=1;d.completeImg(b.get(0))||!0===k?e():100>=f?g.setTimeout(c,100):e()}var d=this,f=0,k;"DIV"===b.prop("tagName")?(b.css("background-image","url("+b.data("src")+")"),k=!0):b[0].src=b.data("src");c()},autoHeight:function(){function a(){var a=f(e.$owlItems[e.currentItem]).height();e.wrapperOuter.css("height",a+"px");e.wrapperOuter.hasClass("autoHeight")||g.setTimeout(function(){e.wrapperOuter.addClass("autoHeight")},0)}function b(){d+=1;e.completeImg(c.get(0))?a():100>=d?g.setTimeout(b,
100):e.wrapperOuter.css("height","")}var e=this,c=f(e.$owlItems[e.currentItem]).find("img"),d;void 0!==c.get(0)?(d=0,b()):a()},completeImg:function(a){return!a.complete||"undefined"!==typeof a.naturalWidth&&0===a.naturalWidth?!1:!0},onVisibleItems:function(){var a;!0===this.options.addClassActive&&this.$owlItems.removeClass("active");this.visibleItems=[];for(a=this.currentItem;a<this.currentItem+this.options.items;a+=1)this.visibleItems.push(a),!0===this.options.addClassActive&&f(this.$owlItems[a]).addClass("active");
this.owl.visibleItems=this.visibleItems},transitionTypes:function(a){this.outClass="owl-"+a+"-out";this.inClass="owl-"+a+"-in"},singleItemTransition:function(){var a=this,b=a.outClass,e=a.inClass,c=a.$owlItems.eq(a.currentItem),d=a.$owlItems.eq(a.prevItem),f=Math.abs(a.positionsInArray[a.currentItem])+a.positionsInArray[a.prevItem],g=Math.abs(a.positionsInArray[a.currentItem])+a.itemWidth/2;a.isTransition=!0;a.$owlWrapper.addClass("owl-origin").css({"-webkit-transform-origin":g+"px","-moz-perspective-origin":g+
"px","perspective-origin":g+"px"});d.css({position:"relative",left:f+"px"}).addClass(b).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend",function(){a.endPrev=!0;d.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");a.clearTransStyle(d,b)});c.addClass(e).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend",function(){a.endCurrent=!0;c.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");a.clearTransStyle(c,e)})},clearTransStyle:function(a,
b){a.css({position:"",left:""}).removeClass(b);this.endPrev&&this.endCurrent&&(this.$owlWrapper.removeClass("owl-origin"),this.isTransition=this.endCurrent=this.endPrev=!1)},owlStatus:function(){this.owl={userOptions:this.userOptions,baseElement:this.$elem,userItems:this.$userItems,owlItems:this.$owlItems,currentItem:this.currentItem,prevItem:this.prevItem,visibleItems:this.visibleItems,isTouch:this.browser.isTouch,browser:this.browser,dragDirection:this.dragDirection}},clearEvents:function(){this.$elem.off(".owl owl mousedown.disableTextSelect");
f(k).off(".owl owl");f(g).off("resize",this.resizer)},unWrap:function(){0!==this.$elem.children().length&&(this.$owlWrapper.unwrap(),this.$userItems.unwrap().unwrap(),this.owlControls&&this.owlControls.remove());this.clearEvents();this.$elem.attr("style",this.$elem.data("owl-originalStyles")||"").attr("class",this.$elem.data("owl-originalClasses"))},destroy:function(){this.stop();g.clearInterval(this.checkVisible);this.unWrap();this.$elem.removeData()},reinit:function(a){a=f.extend({},this.userOptions,
a);this.unWrap();this.init(a,this.$elem)},addItem:function(a,b){var e;if(!a)return!1;if(0===this.$elem.children().length)return this.$elem.append(a),this.setVars(),!1;this.unWrap();e=void 0===b||-1===b?-1:b;e>=this.$userItems.length||-1===e?this.$userItems.eq(-1).after(a):this.$userItems.eq(e).before(a);this.setVars()},removeItem:function(a){if(0===this.$elem.children().length)return!1;a=void 0===a||-1===a?-1:a;this.unWrap();this.$userItems.eq(a).remove();this.setVars()}};f.fn.owlCarousel=function(a){return this.each(function(){if(!0===
f(this).data("owl-init"))return!1;f(this).data("owl-init",!0);var b=Object.create(l);b.init(a,this);f.data(this,"owlCarousel",b)})};f.fn.owlCarousel.options={items:5,itemsCustom:!1,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsTabletSmall:!1,itemsMobile:[479,1],singleItem:!1,itemsScaleUp:!1,slideSpeed:200,paginationSpeed:800,rewindSpeed:1E3,autoPlay:!1,stopOnHover:!1,navigation:!1,navigationText:["prev","next"],rewindNav:!0,scrollPerPage:!1,pagination:!0,paginationNumbers:!1,
responsive:!0,responsiveRefreshRate:200,responsiveBaseWidth:g,baseClass:"owl-carousel",theme:"owl-theme",lazyLoad:!1,lazyFollow:!0,lazyEffect:"fade",autoHeight:!1,jsonPath:!1,jsonSuccess:!1,dragBeforeAnimFinish:!0,mouseDrag:!0,touchDrag:!0,addClassActive:!1,transitionStyle:!1,beforeUpdate:!1,afterUpdate:!1,beforeInit:!1,afterInit:!1,beforeMove:!1,afterMove:!1,afterAction:!1,startDragging:!1,afterLazyLoad:!1}})(jQuery,window,document);