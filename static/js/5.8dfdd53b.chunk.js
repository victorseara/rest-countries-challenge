(this["webpackJsonprest-countries-challenge"]=this["webpackJsonprest-countries-challenge"]||[]).push([[5],{35:function(e,t,r){"use strict";r.d(t,"b",(function(){return l})),r.d(t,"a",(function(){return u}));var n=r(33),a=r.n(n),o=r(34),c=r(37),s="https://restcountries.com/v2",i=r.n(c).a.create({baseURL:s}),l=function(){var e=Object(o.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i.get("".concat(s,"/all")).then((function(e){return e.data})).catch((function(){throw new Error("Sorry, we cannot fetch countries at this moment. Please try again later.")})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(o.a)(a.a.mark((function e(t,r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i.get("".concat(s,"/alpha/").concat(t),{params:r}).then((function(e){return e.data})).catch((function(e){if(e.isAxiosError&&404===e.status)throw new Error("Sorry, there is no country with name: ".concat(t));throw new Error("Sorry, we failed to respond to your request. Please try again later")})));case 1:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},69:function(e,t,r){"use strict";r.r(t);var n=r(33),a=r.n(n),o=r(47),c=r(34),s=r(11),i=r(0),l=r.n(i),u=r(35),d=r(12),f=r(3),b=r.n(f);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var j=Object(i.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,a=e.size,o=void 0===a?24:a,c=m(e,["color","size"]);return l.a.createElement("svg",h({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),l.a.createElement("polyline",{points:"6 9 12 15 18 9"}))}));j.propTypes={color:b.a.string,size:b.a.oneOfType([b.a.string,b.a.number])},j.displayName="ChevronDown";var p=j,x=r(1),g=function(e){var t=e.name,r=e.placeholder,n=e.onChange,a=e.options,o=e.value;return Object(x.jsxs)("label",{htmlFor:t,className:"relative flex items-center text-gray-500 dark:text-gray-200 rounded-md shadow-md h-14",children:[Object(x.jsx)(p,{className:"absolute my-auto right-0 mx-4"}),Object(x.jsxs)("select",{id:t,onChange:n,name:t,value:o,className:"w-full h-full dark:bg-common-blue px-8 bg-white rounded-md font-semibold focus:outline-none focus:ring-inset focus:ring-dark-hover focus:ring-1",children:[Object(x.jsx)("option",{disabled:!0,hidden:!0,className:"font-semibold",value:"",children:r}),a.map((function(e){return Object(x.jsx)("option",{className:"font-semibold",children:e},e)}))]})]})};function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var y=Object(i.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,a=e.size,o=void 0===a?24:a,c=v(e,["color","size"]);return l.a.createElement("svg",O({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),l.a.createElement("circle",{cx:"11",cy:"11",r:"8"}),l.a.createElement("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}))}));y.propTypes={color:b.a.string,size:b.a.oneOfType([b.a.string,b.a.number])},y.displayName="Search";var w=y,k=function(e){var t=e.placeholder,r=e.value,n=e.onChange,a=Object(i.useState)(r||""),o=Object(s.a)(a,2),c=o[0],l=o[1];return Object(i.useEffect)((function(){var e=setTimeout((function(){n(c)}),300);return function(){clearTimeout(e)}}),[c,n]),Object(x.jsxs)("div",{className:"relative flex items-center text-gray-500 dark:text-gray-200 h-14",children:[Object(x.jsx)(w,{className:"absolute my-auto mx-4"}),Object(x.jsx)("input",{className:"placeholder-gray-500 text-very-dark-blue dark:bg-common-blue dark:placeholder-gray-300 dark:text-white text-base rounded-md shadow-md w-full h-full font-semibold input-light input-dark pl-16 focus:outline-none focus:ring-inset focus:ring-dark-hover focus:ring-1",type:"text","aria-label":"Search",onChange:function(e){return l(e.target.value)},value:c,placeholder:t})]})},N=r(2),E=r(46),C=function(e){var t=e.country,r=Object(N.e)(),n=function(){return r.push("/".concat(t.alpha3Code))};return Object(x.jsxs)("div",{className:"flex transform focus:scale-105 focus:shadow-2xl hover:scale-105 hover:shadow-2xl flex-col dark:bg-common-blue rounded-md shadow-lg dark:text-white text-very-dark-blue cursor-pointer transition-transform duration-500 ease-in-out",role:"button",tabIndex:0,onClick:n,onKeyDown:function(e){return"Enter"===e.key&&n()},"data-testid":"country-card",children:[Object(x.jsx)(E.a,{src:t.flag,alt:"Flag of ".concat(t.name),className:"object-cover w-full h-52 rounded-t-md "}),Object(x.jsxs)("div",{className:"py-8 px-6",children:[Object(x.jsx)("h6",{className:"font-bold text-lg mb-4",children:t.name}),Object(x.jsxs)("ul",{children:[Object(x.jsxs)("li",{className:"mb-2",children:[Object(x.jsx)("span",{className:"font-semibold",children:"Population: "})," ",t.population.toLocaleString()]}),Object(x.jsxs)("li",{className:"mb-2",children:[Object(x.jsx)("span",{className:"font-semibold",children:"Region: "})," ",t.region]}),Object(x.jsxs)("li",{className:"mb-2",children:[Object(x.jsx)("span",{className:"font-semibold",children:"Capital: "})," ",t.capital]})]})]})]})},S=function(){return Object(x.jsx)("div",{className:"flex text-very-dark-blue dark:text-white",children:Object(x.jsx)("span",{className:"font-semibold",children:"No country match your query."})})},L=function(e){var t=e.countries;return 0===t.length?Object(x.jsx)(S,{}):Object(x.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 mt-6 px-2",style:{overflowX:"clip"},children:t.map((function(e){return Object(x.jsx)(C,{country:e},e.name)}))})},P=["Africa","Americas","Asia","Europe","Oceania"];t.default=function(){var e=Object(i.useState)({countries:[],displayed:0,status:"pending",error:""}),t=Object(s.a)(e,2),r=t[0],n=t[1],l=Object(i.useState)(""),f=Object(s.a)(l,2),b=f[0],h=f[1],m=Object(i.useState)(""),j=Object(s.a)(m,2),p=j[0],O=j[1],v=r.countries,y=r.status,w=r.error,N=r.displayed,E=p||b?function(e,t,r){return t||r?e.filter((function(e){return t&&e.region===t?!r||e.name.toLowerCase().includes(r.toLowerCase()):!(!r||t)&&e.name.toLowerCase().includes(r.toLowerCase())})):e}(v,p,b):v.slice(0,N),C=Object(i.useCallback)((function(e){return h(e)}),[]);Object(i.useEffect)((function(){(function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.b)().then((function(e){return n({countries:e,status:"resolved",error:"",displayed:8})})).catch((function(e){return n((function(t){return Object(o.a)(Object(o.a)({},t),{},{status:"error",error:e.message})}))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var S=function(){window.innerHeight+window.scrollY+200>=document.body.offsetHeight&&N<v.length&&n((function(e){return Object(o.a)(Object(o.a)({},e),{},{displayed:e.displayed+8})}))};return Object(i.useEffect)((function(){return window.addEventListener("scroll",S),function(){window.removeEventListener("scroll",S)}})),Object(x.jsxs)("div",{className:"flex flex-col",children:[Object(x.jsx)("div",{className:"flex z-50 flex-col h-52 sm:h-36 fixed justify-center  w-full left-0 bg-light-gray dark:bg-dark-blue items-center",children:Object(x.jsxs)("div",{className:"flex justify-between flex-wrap w-10/12 max-w-screen-2xl",children:[Object(x.jsx)("div",{className:"w-full sm:w-1/3 ",style:{minWidth:"320px"},children:Object(x.jsx)(k,{placeholder:"Search for a country...",value:b,onChange:C})}),Object(x.jsx)("div",{className:"w-6/12 sm:w-2/12 mt-10 sm:mt-0",style:{minWidth:"200px"},children:Object(x.jsx)(g,{name:"query-by-name",options:P,placeholder:"Filter by Region",value:p,onChange:function(e){return O(e.target.value)}})})]})}),Object(x.jsx)("div",{className:"mt-52 sm:mt-36",children:"resolved"!==y?Object(x.jsxs)("div",{children:[w&&Object(x.jsx)("div",{role:"alert",children:w}),"pending"===y&&Object(x.jsx)(d.a,{message:"Finding countries..."})]}):Object(x.jsx)(L,{countries:E})})]})}}}]);
//# sourceMappingURL=5.8dfdd53b.chunk.js.map