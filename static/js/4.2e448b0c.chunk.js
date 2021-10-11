(this["webpackJsonprest-countries-challenge"]=this["webpackJsonprest-countries-challenge"]||[]).push([[4],{35:function(e,r,t){"use strict";t.d(r,"b",(function(){return i})),t.d(r,"a",(function(){return u}));var n=t(33),a=t.n(n),c=t(34),o=t(37),l="https://restcountries.com/v2",s=t.n(o).a.create({baseURL:l}),i=function(){var e=Object(c.a)(a.a.mark((function e(){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={fields:"flag;name;population;region;capital;alpha3Code"},e.abrupt("return",s.get("".concat(l,"/all"),{params:r}).then((function(e){return e.data})).catch((function(){throw new Error("Sorry, we cannot fetch countries at this moment. Please try again later.")})));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(c.a)(a.a.mark((function e(r,t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s.get("".concat(l,"/alpha/").concat(r),{params:t}).then((function(e){return e.data})).catch((function(e){if(e.isAxiosError&&404===e.status)throw new Error("Sorry, there is no country with name: ".concat(r));throw new Error("Sorry, we failed to respond to your request. Please try again later")})));case 1:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}()},70:function(e,r,t){"use strict";t.r(r);var n=t(33),a=t.n(n),c=t(47),o=t(34),l=t(11),s=t(35),i=t(0),u=t.n(i),d=t(3),b=t.n(d);function f(){return(f=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function h(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=Object(i.forwardRef)((function(e,r){var t=e.color,n=void 0===t?"currentColor":t,a=e.size,c=void 0===a?24:a,o=h(e,["color","size"]);return u.a.createElement("svg",f({ref:r,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),u.a.createElement("polyline",{points:"15 18 9 12 15 6"}))}));p.propTypes={color:b.a.string,size:b.a.oneOfType([b.a.string,b.a.number])},p.displayName="ChevronLeft";var m=p,j=t(46),x=t(12),O=t(1),v=function(e){var r=e.label,t=e.children;return Object(O.jsxs)("li",{className:"py-1",children:[Object(O.jsxs)("span",{className:"font-semibold",children:[r,": "]}),t]})};r.default=function(e){var r=e.history,t=e.location,n=Object(i.useState)(),u=Object(l.a)(n,2),d=u[0],b=u[1];if(Object(i.useEffect)((function(){var e=function(){var e=Object(o.a)(a.a.mark((function e(r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(s.a)(r).then(function(){var e=Object(o.a)(a.a.mark((function e(r){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r.borders.length>0)){e.next=6;break}return t=r.borders.map((function(e){return Object(s.a)(e,"name;alpha3Code").then((function(e){return e}))})),e.next=4,Promise.all(t);case 4:return n=e.sent,e.abrupt("return",b(Object(c.a)(Object(c.a)({},r),{},{borders:n})));case 6:return e.abrupt("return",b(Object(c.a)(Object(c.a)({},r),{},{borders:void 0})));case 7:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();t.pathname&&e(t.pathname.replace("/",""))}),[t.pathname]),!d)return Object(O.jsx)("div",{className:"mt-8",children:Object(O.jsx)(x.a,{message:"Loading informations..."})});var f=d.flag,h=d.name,p=d.nativeName,w=d.population,g=d.region,y=d.subregion,k=d.capital,N=d.topLevelDomain,C=d.borders,S=d.currencies.map((function(e){return e.name})),E=d.languages.map((function(e){return e.name}));return Object(O.jsxs)("div",{className:"h-full w-full flex flex-col transition-all duration-500 ease-linear",children:[Object(O.jsx)("div",{className:"py-12 my-4",children:Object(O.jsxs)("button",{className:"bg-white dark:bg-common-blue px-8 py-4 flex text-lg items-center font-semibold shadow-md rounded-md hover:border hover:border-dark-hover dark:hover:shadow-xl",type:"button",onClick:function(){return r.goBack()},children:[Object(O.jsx)(m,{}),"Go back"]})}),Object(O.jsxs)("div",{className:"flex flex-col xl:flex-row",children:[Object(O.jsx)("div",{className:"rounded-md max-w-2xl",children:Object(O.jsx)(j.a,{src:f,alt:"Flag of ".concat(h),className:"h-auto w-full shadow-xl rounded-md object-contain"})}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("section",{className:"flex flex-col xl:ml-24 py-12",children:[Object(O.jsx)("h2",{className:"text-3xl font-bold",children:h}),Object(O.jsxs)("div",{className:"flex text-lg flex-col lg:flex-row xl:flex-row",children:[Object(O.jsxs)("ul",{className:"flex-1 py-4 mr-8",children:[Object(O.jsx)(v,{label:"Native name",children:p}),Object(O.jsx)(v,{label:"Population",children:w}),Object(O.jsx)(v,{label:"Region",children:g}),Object(O.jsx)(v,{label:"Sub Region",children:y}),Object(O.jsx)(v,{label:"Capital",children:k})]}),Object(O.jsxs)("ul",{className:"flex-1 py-8",children:[Object(O.jsx)(v,{label:"Top Level Domain",children:N.toString()}),Object(O.jsx)(v,{label:"Currencies",children:S.toString()}),Object(O.jsx)(v,{label:"Languages",children:E.toString()})]})]})]}),Object(O.jsxs)("section",{className:"flex flex-col xl:ml-24 py-1 xl:items-start xl:flex-row max-w-2xl",children:[Object(O.jsx)("span",{className:"flex-shrink-0 font-semibold mr-4 mb-4 mt-1 xl:mb-0",children:"Border Countries:"}),Object(O.jsx)("ul",{className:"flex flex-wrap",children:C&&C.map((function(e){return Object(O.jsx)("li",{children:Object(O.jsx)("button",{type:"button",title:e.alpha3Code,onClick:function(){return r.push("/".concat(e.alpha3Code))},className:"bg-white shadow-md rounded-md flex mr-1 py-1 px-4 items-center justify-center mb-4 dark:bg-common-blue font-semibold hover:border hover:border-dark-hover dark:hover:shadow-xl hover:scale-50",children:e.name})},e.alpha3Code)}))})]})]})]})]})}}}]);
//# sourceMappingURL=4.2e448b0c.chunk.js.map