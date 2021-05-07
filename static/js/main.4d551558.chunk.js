(this["webpackJsonprest-countries-challenge"]=this["webpackJsonprest-countries-challenge"]||[]).push([[1],{12:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var l=n(30),c=n(1),a=function(e){var t=e.message;return Object(c.jsxs)("div",{className:"flex",children:[Object(c.jsx)(l.a,{className:"animate-spin mr-2"}),Object(c.jsx)("span",{className:"animate-pulse font-semibold",children:t})]})};t.b=a},22:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var l=n(0),c=n.n(l),a=n(15),s=n.n(a),r=(n(22),n(11)),i=n(12),o=n(14),d=n(2),u=n(31),h=n(1),m=function(e){var t=e.title,n=e.toggleTheme,l=Object(d.e)();return Object(h.jsx)("div",{id:"main-header",className:"w-full fixed z-50 bg-white dark:bg-common-blue h-20 shadow-md flex justify-center text-dark-blue dark:text-white",children:Object(h.jsxs)("div",{className:"w-10/12 max-w-screen-2xl flex justify-between items-center",children:[Object(h.jsx)("button",{type:"button",onClick:function(){return l.push("/")},className:"font-bold text-xl sm:text-3xl",children:t}),Object(h.jsxs)("button",{type:"button","aria-label":"Change theme",className:"flex cursor-pointer hover:opacity-80",onClick:n,children:[Object(h.jsx)(u.a,{fill:"#fff"}),Object(h.jsx)("span",{className:"ml-2 font-semibold hidden sm:inline",children:"Dark mode"})]})]})})},b=c.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,67))})),j=c.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,68))})),x=function(){var e=Object(l.useState)("light"),t=Object(r.a)(e,2),n=t[0],c=t[1];Object(l.useEffect)((function(){var e,t=localStorage.getItem("theme");(t||localStorage.setItem("theme","light"),"dark"===t)&&(c("dark"),null===(e=document.querySelector("html"))||void 0===e||e.classList.add("dark"))}),[]);return Object(h.jsx)(o.a,{basename:"/countries-rest-api-with-theme-switcher",children:Object(h.jsxs)("div",{className:"flex flex-col w-full dark:bg-dark-blue bg-light-gray min-h-screen text-very-dark-blue dark:text-white",children:[Object(h.jsx)(m,{title:"Where in the world ?",toggleTheme:function(){var e,t;"dark"===n?(c("light"),null===(e=document.querySelector("html"))||void 0===e||e.classList.remove("dark"),localStorage.setItem("theme","light")):(c("dark"),null===(t=document.querySelector("html"))||void 0===t||t.classList.add("dark"),localStorage.setItem("theme","dark"))}}),Object(h.jsx)("div",{className:"h-full w-10/12 max-w-screen-2xl flex flex-col self-center mt-20",children:Object(h.jsx)("main",{className:"h-full",children:Object(h.jsxs)(l.Suspense,{fallback:Object(h.jsx)(i.b,{}),children:[Object(h.jsx)(d.a,{path:"/",exact:!0,component:b}),Object(h.jsx)(d.a,{path:"/:countryCode",component:j})]})})})]})})},f=function(){return Object(h.jsx)(x,{})},g=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,66)).then((function(t){var n=t.getCLS,l=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),l(e),c(e),a(e),s(e)}))};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root")),g()}},[[29,2,3]]]);
//# sourceMappingURL=main.4d551558.chunk.js.map