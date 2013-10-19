/*
  _________                          
 /   _____/____ ___  _____  _____.__.
 \_____  \\__  \\  \/ /\  \/ <   |  |
 /        \/ __ \\   /  \   / \___  |
/_______  (____  /\_/    \_/  / ____|
        \/     \/             \/     
Version: 3.0.0

Copyright (c) 2013 Avoca Learning

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

var _this=this;window._global={};window._screen={};window.subscribe=function(e,p,r){"undefined"===typeof r&&(r=_this);Savvy.subscribe(e,p,r)};window.unsubscribe=function(e,p){Savvy.unsubscribe(e,p)};window.getInfo=function(){return Savvy.getInfo()};var Savvy;
(function(e){function p(a,c){for(var b=0;b<m.length;b++)m[b].type===a&&m[b].action===c&&(m.splice(b,1),b--)}function r(a){for(var c=0;c<m.length;c++)m[c].screen===a&&(m.splice(c,1),c--)}function w(a,c){"undefined"===typeof c&&(c=null);var b=!0;m.forEach(function(d,k,Q){d.type===a&&"function"===typeof d.action&&(b=!(!1===d.action.call(d.screen,c)||!1===b))});return b}function x(a,c){function b(){for(var c=0,b=h.length;c<b;c++)try{delete window[h[c].id]}catch(k){window[h[c].id]=null}r(window._screen);
window._screen={};y(l+"-BUFFER",t.buffer);f(a.screen.html).forEach(function(a,c,b){e.getScreen().innerHTML+=n(a.url).data});var K=window[a.screen.id]=new J;"undefined"===typeof window[a.screen.id]&&console.warn('"window.'+a.screen.id+'" could not be created.');f(a.screen.js).forEach(function(a,c,b){D(a.url,K)});e.getInfo=function(){return E(a)};w(e.READY)?d():u=d}function d(){u=L;z(l);for(var b=0;b<=k;b++)z(l+"-CSS-"+b);f(a.screen.css).forEach(function(a,c,b){F(a.url)});e.getScreen().id=l;e.getScreen().setAttribute("style",
t.screen);document.title=a.screen.title||"";c||(A=!0,window.location.hash="!/"+a.screen.id);w(e.ENTER)}"undefined"===typeof c&&(c=!1);var k=G-1;w(e.EXIT)?b():u=b}function B(a){a=window.location.hash;var c;if(""==a||"#!"==a)c=s;else for(var b=0,d=h.length;b<d;b++)if(RegExp("#!/"+h[b].id+"(?=/|$)").test(a)){c=h[b];break}b="";b=a.indexOf("/");b=-1==b?"/":a.substr(b);return{screen:c,path:b}}function E(a){"undefined"===typeof a&&(a=B());return{id:a.screen.id,title:a.screen.title,isDefault:s==a.screen,
path:a.path}}function M(a){N(f(a.image));O(f(a.screens.screen));f(a.css).forEach(function(a,b,d){F(a)});f(a.html).forEach(function(a,b,d){e.getGlobal().innerHTML+=n(a).data});f(a.json).forEach(function(a,b,d){b=a["@name"];b||(b=a.toString(),b=b.substr(b.lastIndexOf("/")+1),b=b.substr(0,b.indexOf(".")));a:{d=void 0;"undefined"===typeof d&&(d=window);var k=n(a).data,e;try{e=k.constructor===Document?C(k):JSON.parse(k)}catch(g){console.error("Cannot parse data file (%s). Only JSON or XML formats are supported.",
a);break a}try{d[b]=e}catch(f){console.error("Could not set data loaded from %s.",a)}}});f(a.js).forEach(function(a,b,d){D(a)})}function F(a,c){var b=v.isRemoteUrl.test(a)||-1!=window.navigator.appVersion.indexOf("MSIE 8"),d;b?(d=document.createElement("link"),d.setAttribute("rel","stylesheet"),d.setAttribute("type","text/css"),d.setAttribute("href",a)):(d=document.createElement("style"),d.setAttribute("type","text/css"));void 0!==c&&(d.id=l+"-CSS-"+G++);try{if(!b){var k=n(a).data,e=a.toString().lastIndexOf("/");
if(-1!=e)var g=a.toString().substr(0,e+1),k=k.replace(v.css.noQuotes,"url("+g).replace(v.css.doubleQuotes,'url("'+g).replace(v.css.singleQuotes,"url('"+g);d.appendChild(document.createTextNode(k))}document.getElementsByTagName("head")[0].appendChild(d)}catch(f){console.error("Error appending CSS file (%s): %s ",a,f.toString())}}function D(a,c){var b=n(a).data;try{void 0===c?(window.execScript||function(a){window.eval.call(window,a)})(b):function(a){eval(a)}.call(c,b)}catch(d){console.error("%s (%s)",
d.toString(),a)}}function N(a){for(var c=0,b=a.length;c<b;c++){var d=new Image;d.src=a[c];q.add({url:d.src,data:d})}}function O(a){for(var c=0,b=a.length;c<b;c++){var d={id:a[c]["@id"],title:a[c]["@title"],html:[],js:[],data:[],css:[]};f(a[c].html).forEach(function(a,b,c){a=n(a.toString());q.add(a);d.html.push(a)});f(a[c].js).forEach(function(a,b,c){a=n(a.toString());q.add(a);d.js.push(a)});f(a[c].css).forEach(function(a,b,c){a=n(a.toString());q.add(a);d.css.push(a)});void 0!==a[c]["@default"]&&(null===
s?s=d:console.warn("More than one screen is set as the default in app.xml. Ignoring."));h.push(d)}if(null===s)throw"No default screen set.";}function y(a,c){z(a);var b=document.createElement("div");b.id=a;b.setAttribute("style",c);document.body.appendChild(b)}function z(a){(a=document.getElementById(a))&&a.parentNode&&a.parentNode.removeChild(a)}function f(a){return[].concat(a||[])}function n(a){var c;c=q.get(a);if(null!==c.data)return c;c=new XMLHttpRequest;c.open("GET",a,!1);c.send();return 200!==
c.status&&0!==c.status?(console.warn("HTTP status "+c.status+" returned for file: "+a),{url:a,data:""}):c={url:a,data:null!==c.responseXML?c.responseXML:c.responseText}}function C(a){function c(a){return/^\s*$/.test(a)?null:/^(?:true|false)$/i.test(a)?"true"===a.toLowerCase():isFinite(a)?parseFloat(a):isFinite(Date.parse(a))?new Date(a):a}var b=new H,d=0,e="";if(a.attributes&&0<a.attributes.length)for(d;d<a.attributes.length;d++){var f=a.attributes.item(d);b["@"+f.name.toLowerCase()]=c(f.value.trim())}if(a.childNodes&&
0<a.childNodes.length)for(var g,h=0;h<a.childNodes.length;h++)g=a.childNodes.item(h),4===g.nodeType?e+=g.nodeValue:3===g.nodeType?e+=g.nodeValue.trim():1!==g.nodeType||g.prefix||(0===d&&(b={}),f=g.nodeName.toLowerCase(),g=C(g),b.hasOwnProperty(f)?(b[f].constructor!==Array&&(b[f]=[b[f]]),b[f].push(g)):(b[f]=g,d++));b.constructor===H&&b.setValue(c(e));return b}var J=function(){function a(){window._screen=this}a.prototype._eval=function(a){return eval(a)};a.prototype.subscribe=function(a,b,d){"undefined"===
typeof d&&(d=this);e.subscribe(a,b,d)};a.prototype.unsubscribe=function(a,b){e.unsubscribe(a,b)};a.prototype.getInfo=function(){return e.getInfo()};return a}(),I=function(){function a(c){"undefined"===typeof c&&(c=a.AUTO);this.rule=c;this._files=[]}a.AUTO="auto";a.NEVER="never";a.prototype.add=function(c){if(this.rule!=a.NEVER&&null==this.get(c.url).data)return this._files.push(c),c};a.prototype.get=function(a){for(var b=0,d=this._files.length;b<d;b++)if(this._files[b].url===a)return this._files[b];
return{url:a,data:null}};return a}(),h=[],s=null,q=new I,v={isRemoteUrl:/(http|ftp|https):\/\/[a-z0-9-_]+(.[a-z0-9-_]+)+([a-z0-9-.,@?^=%&;:/~+#]*[a-z0-9-@?^=%&;/~+#])?/i,css:{singleQuotes:/url\('(?!https?:\/\/)(?!\/)/gi,doubleQuotes:/url\("(?!https?:\/\/)(?!\/)/gi,noQuotes:/url\((?!https?:\/\/)(?!['"]\/?)/gi}},l="SAVVY-"+function(){function a(){return(65536*(1+Math.random())|0).toString(16).substring(1)}return a()+a()+"-"+a()+"-"+a()+"-"+a()+"-"+a()+a()+a()}(),L=function(){};e.go=function(a,c){"undefined"===
typeof a&&(a=null);"undefined"===typeof c&&(c="/");if(null==a)u();else{for(var b=null,d=0,e=h.length;d<e;d++)if(h[d].id==a){b=h[d];break}null==b?console.error('No screen with ID of "%s".',a):x({screen:b,path:c})}};e.getGlobal=function(){return document.getElementById(l+"-GLOBAL")};e.getScreen=function(){return document.getElementById(l+"-BUFFER")||document.getElementById(l)};var P=function(){return function(a,c,b){"undefined"===typeof b&&(b=window);this.type=a;this.action=c;this.screen=b}}(),m=[];
e.subscribe=function(a,c,b){"undefined"===typeof b&&(b=window);p(a,c);a=new P(a,c,b);m.push(a)};e.unsubscribe=p;var t={global:"width:100% !important; over-flow: visible !important; padding:0px !important; margin:0px !important; visibility:visible !important; display:block !important;",buffer:"width:100% !important; over-flow: visible !important; padding:0px !important; margin:0px !important; visibility:visible !important; display:none !important;",screen:"width:100% !important; over-flow: visible !important; padding:0px !important; margin:0px !important; visibility:visible !important; display:block !important;"},
G=0;e.READY="ready";e.ENTER="enter";e.EXIT="exit";window.addEventListener("load",function c(){window.removeEventListener("load",c);y(l+"-GLOBAL",t.global);y(l,t.screen);var b=C(n("data/app.xml").data);if(void 0===b.app)throw'Could not parse app.xml. "app" node missing.';q.rule=void 0===b.app.cache?I.AUTO:b.app.cache;M(b.app);x(B(),!0)});var A=!1;window.addEventListener("hashchange",function(){A?A=!1:x(B(),!0)},!1);var u=function(){};e.getInfo=function(){return E()};var H=function(){function c(b){this._value=
void 0===b?null:b}c.prototype.setValue=function(b){this._value=b};c.prototype.valueOf=function(){return this._value};c.prototype.toString=function(){return null===this._value?"null":this._value.toString()};return c}()})(Savvy||(Savvy={}));
