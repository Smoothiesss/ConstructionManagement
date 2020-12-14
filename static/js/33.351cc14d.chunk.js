(this.webpackJsonpConstructionManagement=this.webpackJsonpConstructionManagement||[]).push([[33],{1328:function(t,e,a){"use strict";a.r(e);var n=a(675);var o=a(676);function r(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=a(674),i=a(1),u=a.n(i),l=a(668);e.default=function(){var t=Object(i.useState)([{position:"static"},{position:"static"},{position:"top-right",autohide:3e3}]),e=Object(c.a)(t,2),a=e[0],n=e[1],o=Object(i.useState)("top-right"),s=Object(c.a)(o,2),m=s[0],b=s[1],f=Object(i.useState)(!0),h=Object(c.a)(f,2),d=h[0],p=h[1],y=Object(i.useState)(5e3),E=Object(c.a)(y,2),v=E[0],g=E[1],j=Object(i.useState)(!0),O=Object(c.a)(j,2),k=O[0],S=O[1],w=Object(i.useState)(!0),A=Object(c.a)(w,2),C=A[0],N=A[1],T=a.reduce((function(t,e){return t[e.position]=t[e.position]||[],t[e.position].push(e),t}),{});return u.a.createElement(l.j,null,u.a.createElement(l.n,null,"Toasts."),u.a.createElement(l.k,null,u.a.createElement(l.w,null,u.a.createElement(l.wb,null,u.a.createElement(l.u,{sm:"12",lg:"6"},u.a.createElement(l.J,null,u.a.createElement("h5",null,"Add toast with following props:"),u.a.createElement(l.K,{variant:"custom-checkbox",className:"my-2 mt-4"},u.a.createElement(l.T,{id:"autohide",checked:d,onChange:function(t){p(t.target.checked)},custom:!0}),u.a.createElement(l.cb,{variant:"custom-checkbox",htmlFor:"autohide"},"Autohide of the toast")),d&&u.a.createElement(l.K,{className:"my-2"},u.a.createElement(l.cb,{htmlFor:"ccyear"},"Time to autohide"),u.a.createElement(l.S,{type:"number",value:v,onChange:function(t){g(Number(t.target.value))}})),u.a.createElement(l.K,{className:"my-2"},u.a.createElement(l.cb,{htmlFor:"ccyear"},"Position"),u.a.createElement("select",{className:"form-control",value:m,onChange:function(t){b(t.target.value)}},["static","top-left","top-center","top-right","top-full","bottom-left","bottom-center","bottom-right","bottom-full"].map((function(t,e){return u.a.createElement("option",{key:e},t)})))),u.a.createElement(l.K,{variant:"custom-checkbox",className:"my-2"},u.a.createElement(l.T,{id:"fade",checked:C,onChange:function(t){N(t.target.checked)},custom:!0}),u.a.createElement(l.cb,{variant:"custom-checkbox",htmlFor:"fade"},"fade")),u.a.createElement(l.K,{variant:"custom-checkbox",className:"my-2"},u.a.createElement(l.T,{id:"close",custom:!0,checked:k,onChange:function(t){S(t.target.checked)}}),u.a.createElement(l.cb,{variant:"custom-checkbox",htmlFor:"close"},"closeButton")),u.a.createElement(l.f,{className:"mr-1 w-25",color:"success",onClick:function(){n([].concat(r(a),[{position:m,autohide:d&&v,closeButton:k,fade:C}]))}},"Add toast"))),u.a.createElement(l.u,{sm:"12",lg:"6"},Object.keys(T).map((function(t){return u.a.createElement(l.Pb,{position:t,key:"toaster"+t},T[t].map((function(e,a){return u.a.createElement(l.Mb,{key:"toast"+a,show:!0,autohide:e.autohide,fade:e.fade},u.a.createElement(l.Ob,{closeButton:e.closeButton},"Toast title"),u.a.createElement(l.Nb,null,"This is a toast in ".concat(t," positioned toaster number ").concat(a+1,".")))})))})))))))}},674:function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));var n=a(676);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var a=[],n=!0,o=!1,r=void 0;try{for(var c,i=t[Symbol.iterator]();!(n=(c=i.next()).done)&&(a.push(c.value),!e||a.length!==e);n=!0);}catch(u){o=!0,r=u}finally{try{n||null==i.return||i.return()}finally{if(o)throw r}}return a}}(t,e)||Object(n.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},675:function(t,e,a){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}a.d(e,"a",(function(){return n}))},676:function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));var n=a(675);function o(t,e){if(t){if("string"===typeof t)return Object(n.a)(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(n.a)(t,e):void 0}}}}]);
//# sourceMappingURL=33.351cc14d.chunk.js.map