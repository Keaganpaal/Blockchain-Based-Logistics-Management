!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=139)}({1:function(e,t){e.exports=ScrollAnimation},139:function(e,t,n){n(140),e.exports=n(141)},140:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=function(e){var t=e.dataSource,n=t.title,a=t.descript,c=t.color,i=t.list;return React.createElement("div",{className:"show-list",style:{backgroundColor:c}},React.createElement("div",{className:"show-list-inner"},React.createElement(r.a,{animateIn:"fadeInUp"},React.createElement("div",{className:"show-list-title"},n)),a&&React.createElement(r.a,{animateIn:"fadeInUp"},React.createElement("div",{className:"show-list-descript"},a)),i.map(function(e,t){return React.createElement(r.a,{animateIn:"fadeInUp",delay:100*t,className:"list-item"},React.createElement("div",null,React.createElement("div",{className:"list-inner"},React.createElement("div",{className:"list-icon"},React.createElement("img",{className:"list-icon-img",src:e.icon})),e.title&&React.createElement("div",{className:"list-title"},e.title),e.descript&&React.createElement("div",{className:"list-descript"},e.descript))))})))};window.CN.ShowList=c,t.default=c},141:function(e,t,n){}});