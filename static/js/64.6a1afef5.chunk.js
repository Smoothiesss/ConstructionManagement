(this.webpackJsonpConstructionManagement=this.webpackJsonpConstructionManagement||[]).push([[64],{1326:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),l=a(668),o=a(678);function m(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=function(){for(var e={},t=document.styleSheets,a="",r=t.length-1;r>-1;r--){for(var n=t[r].cssRules,l=n.length-1;l>-1;l--)if(".ie-custom-properties"===n[l].selectorText){a=n[l].cssText;break}if(a)break}return(a=a.substring(a.lastIndexOf("{")+1,a.lastIndexOf("}"))).split(";").forEach((function(t){if(t){var a=t.split(": ")[0],r=t.split(": ")[1];a&&r&&(e["--".concat(a.trim())]=r.trim())}})),e},i=function(){return Boolean(document.documentMode)&&document.documentMode>=10},s=function(e){return e.match(/^--.*/i)},d=function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;if(s(e)&&i()){var r=c();t=r[e]}else t=window.getComputedStyle(a,null).getPropertyValue(e).replace(/^\s/,"");return t},g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body,a="--".concat(e),r=d(a,t);return r||e},h=function e(t,a){for(var r=0,n=Object.keys(a);r<n.length;r++){var l=n[r];a[l]instanceof Object&&Object.assign(a[l],e(t[l],a[l]))}return Object.assign(t||{},a),t},E=a(841),u=function(e){var t=e.borderColor,a=e.backgroundColor,r=e.pointHoverBackgroundColor,l=e.dataPoints,o=e.label,c=e.pointed,i=m(e,["borderColor","backgroundColor","pointHoverBackgroundColor","dataPoints","label","pointed"]),s=r||("transparent"!==a?a:t),d=[{data:l,borderColor:g(t),backgroundColor:g(a),pointBackgroundColor:g(s),pointHoverBackgroundColor:g(s),label:o}],u={scales:{xAxes:[{offset:!0,gridLines:{color:"transparent",zeroLineColor:"transparent"},ticks:{fontSize:2,fontColor:"transparent"}}],yAxes:[{display:!1,ticks:{display:!1,min:Math.min.apply(Math,l)-5,max:Math.max.apply(Math,l)+5}}]},elements:{line:{borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}}},b={scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4}}},p=function(){var e=c?u:b;return Object.assign({},e,{maintainAspectRatio:!1,legend:{display:!1}})}(),x=h(d,i.datasets||{}),f=h(p,i.options||{});return n.a.createElement(E.c,Object.assign({},i,{type:"line",datasets:x,options:f,labels:o}))};u.defaultProps={borderColor:"rgba(255,255,255,.55)",backgroundColor:"transparent",dataPoints:[10,22,34,46,58,70,46,23,45,78,34,12],label:"Sales"};var b=u,p=function(e){return e.withCharts?n.a.createElement(l.wb,null,n.a.createElement(l.u,{sm:"6",lg:"3"},n.a.createElement(l.Tb,{color:"facebook",rightHeader:"89k",rightFooter:"friends",leftHeader:"459",leftFooter:"feeds"},n.a.createElement(o.a,{name:"cib-facebook",height:"52",className:"my-4"}),n.a.createElement(b,{className:"position-absolute w-100 h-100",backgroundColor:"rgba(255,255,255,.1)",dataPoints:[65,59,84,84,51,55,40],label:"Friends",labels:"months"}))),n.a.createElement(l.u,{sm:"6",lg:"3"},n.a.createElement(l.Tb,{color:"twitter",rightHeader:"973k",rightFooter:"followers",leftHeader:"1.792",leftFooter:"tweets"},n.a.createElement(o.a,{name:"cib-twitter",height:"52",className:"my-4"}),n.a.createElement(b,{className:"position-absolute w-100 h-100",backgroundColor:"rgba(255,255,255,.1)",dataPoints:[1,13,9,17,34,41,38],label:"Followers",labels:"months"}))),n.a.createElement(l.u,{sm:"6",lg:"3"},n.a.createElement(l.Tb,{color:"linkedin",rightHeader:"500+",rightFooter:"contracts",leftHeader:"292",leftFooter:"feeds"},n.a.createElement(o.a,{name:"cib-linkedin",height:"52",className:"my-4"}),n.a.createElement(b,{className:"position-absolute w-100 h-100",backgroundColor:"rgba(255,255,255,.1)",dataPoints:[78,81,80,45,34,12,40],label:"Contracts",labels:"months"}))),n.a.createElement(l.u,{sm:"6",lg:"3"},n.a.createElement(l.Tb,{rightHeader:"12",rightFooter:"events",leftHeader:"4",leftFooter:"meetings",color:"gradient-warning"},n.a.createElement(o.a,{name:"cil-calendar",height:"52",className:"my-4"}),n.a.createElement(b,{className:"position-absolute w-100 h-100",backgroundColor:"rgba(255,255,255,.1)",dataPoints:[35,23,56,22,97,23,64],label:"Followers",labels:"months"})))):n.a.createElement(l.wb,null,n.a.createElement(l.u,{sm:"6",lg:"3"},n.a.createElement(l.Tb,{color:"facebook",rightHeader:"89k",rightFooter:"friends",leftHeader:"459",leftFooter:"feeds"},n.a.createElement(o.a,{name:"cib-facebook",height:"56",className:"my-4"}))),n.a.createElement(l.u,{sm:"6",lg:"3"},n.a.createElement(l.Tb,{color:"twitter",rightHeader:"973k",rightFooter:"followers",leftHeader:"1.792",leftFooter:"tweets"},n.a.createElement(o.a,{name:"cib-twitter",height:"56",className:"my-4"}))),n.a.createElement(l.u,{sm:"6",lg:"3"},n.a.createElement(l.Tb,{color:"linkedin",rightHeader:"500+",rightFooter:"contracts",leftHeader:"292",leftFooter:"feeds"},n.a.createElement(o.a,{name:"cib-linkedin",height:"56",className:"my-4"}))),n.a.createElement(l.u,{sm:"6",lg:"3"},n.a.createElement(l.Tb,{rightHeader:"12",rightFooter:"events",leftHeader:"4",leftFooter:"meetings",color:"gradient-warning"},n.a.createElement(o.a,{name:"cil-calendar",height:"56",className:"my-4"}))))},x=function(e){var t=e.backgroundColor,a=e.pointHoverBackgroundColor,r=e.dataPoints,l=e.label,o=(e.pointed,m(e,["backgroundColor","pointHoverBackgroundColor","dataPoints","label","pointed"])),c=[{data:r,backgroundColor:g(t),pointHoverBackgroundColor:g(a),label:l,barPercentage:.5,categoryPercentage:1}],i={maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]}};return n.a.createElement(E.a,Object.assign({},o,{type:"bar",datasets:c,options:i,labels:l}))};x.defaultProps={backgroundColor:"rgba(0,0,0,.2)",dataPoints:[10,22,34,46,58,70,46,23,45,78,34,12],label:"Sales"};var f=x,w=function(){return n.a.createElement(l.wb,null,n.a.createElement(l.u,{sm:"6",lg:"3"},n.a.createElement(l.Ub,{color:"gradient-primary",header:"9.823",text:"Members online",footerSlot:n.a.createElement(b,{pointed:!0,className:"c-chart-wrapper mt-3 mx-3",style:{height:"70px"},dataPoints:[65,59,84,84,51,55,40],pointHoverBackgroundColor:"primary",label:"Members",labels:"months"})},n.a.createElement(l.z,null,n.a.createElement(l.E,{color:"transparent"},n.a.createElement(o.a,{name:"cil-settings"})),n.a.createElement(l.D,{className:"pt-0",placement:"bottom-end"},n.a.createElement(l.C,null,"Action"),n.a.createElement(l.C,null,"Another action"),n.a.createElement(l.C,null,"Something else here..."),n.a.createElement(l.C,{disabled:!0},"Disabled action"))))),n.a.createElement(l.u,{sm:"6",lg:"3"},n.a.createElement(l.Ub,{color:"gradient-info",header:"9.823",text:"Members online",footerSlot:n.a.createElement(b,{pointed:!0,className:"mt-3 mx-3",style:{height:"70px"},dataPoints:[1,18,9,17,34,22,11],pointHoverBackgroundColor:"info",options:{elements:{line:{tension:1e-5}}},label:"Members",labels:"months"})},n.a.createElement(l.z,null,n.a.createElement(l.E,{caret:!1,color:"transparent"},n.a.createElement(o.a,{name:"cil-location-pin"})),n.a.createElement(l.D,{className:"pt-0",placement:"bottom-end"},n.a.createElement(l.C,null,"Action"),n.a.createElement(l.C,null,"Another action"),n.a.createElement(l.C,null,"Something else here..."),n.a.createElement(l.C,{disabled:!0},"Disabled action"))))),n.a.createElement(l.u,{sm:"6",lg:"3"},n.a.createElement(l.Ub,{color:"gradient-warning",header:"9.823",text:"Members online",footerSlot:n.a.createElement(b,{className:"mt-3",style:{height:"70px"},backgroundColor:"rgba(255,255,255,.2)",dataPoints:[78,81,80,45,34,12,40],options:{elements:{line:{borderWidth:2.5}}},pointHoverBackgroundColor:"warning",label:"Members",labels:"months"})},n.a.createElement(l.z,null,n.a.createElement(l.E,{color:"transparent"},n.a.createElement(o.a,{name:"cil-settings"})),n.a.createElement(l.D,{className:"pt-0",placement:"bottom-end"},n.a.createElement(l.C,null,"Action"),n.a.createElement(l.C,null,"Another action"),n.a.createElement(l.C,null,"Something else here..."),n.a.createElement(l.C,{disabled:!0},"Disabled action"))))),n.a.createElement(l.u,{sm:"6",lg:"3"},n.a.createElement(l.Ub,{color:"gradient-danger",header:"9.823",text:"Members online",footerSlot:n.a.createElement(f,{className:"mt-3 mx-3",style:{height:"70px"},backgroundColor:"rgb(250, 152, 152)",label:"Members",labels:"months"})},n.a.createElement(l.z,null,n.a.createElement(l.E,{caret:!0,className:"text-white",color:"transparent"},n.a.createElement(o.a,{name:"cil-settings"})),n.a.createElement(l.D,{className:"pt-0",placement:"bottom-end"},n.a.createElement(l.C,null,"Action"),n.a.createElement(l.C,null,"Another action"),n.a.createElement(l.C,null,"Something else here..."),n.a.createElement(l.C,{disabled:!0},"Disabled action"))))))};t.default=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(w,null),n.a.createElement(l.wb,null,n.a.createElement(l.u,{xs:"12",sm:"6",lg:"3"},n.a.createElement(l.Wb,{color:"success",header:"89.9%",text:"Lorem ipsum...",footer:"Lorem ipsum dolor sit amet enim."})),n.a.createElement(l.u,{xs:"12",sm:"6",lg:"3"},n.a.createElement(l.Wb,{color:"info",header:"12.124",text:"Lorem ipsum...",footer:"Lorem ipsum dolor sit amet enim."})),n.a.createElement(l.u,{xs:"12",sm:"6",lg:"3"},n.a.createElement(l.Wb,{color:"warning",header:"$98.111,00",text:"Lorem ipsum...",footer:"Lorem ipsum dolor sit amet enim."})),n.a.createElement(l.u,{xs:"12",sm:"6",lg:"3"},n.a.createElement(l.Wb,{header:"2 TB",text:"Lorem ipsum...",footer:"Lorem ipsum dolor sit amet enim."},n.a.createElement(l.ub,{color:"danger",animated:!0,size:"xs",className:"my-3",value:75}))),n.a.createElement(l.u,{xs:"12",sm:"6",lg:"3"},n.a.createElement(l.Wb,{inverse:!0,color:"success",variant:"inverse",header:"89.9%",text:"Lorem ipsum...",footer:"Lorem ipsum dolor sit amet enim."})),n.a.createElement(l.u,{xs:"12",sm:"6",lg:"3"},n.a.createElement(l.Wb,{inverse:!0,color:"info",variant:"inverse",header:"12.124",text:"Lorem ipsum...",footer:"Lorem ipsum dolor sit amet enim."})),n.a.createElement(l.u,{xs:"12",sm:"6",lg:"3"},n.a.createElement(l.Wb,{inverse:!0,color:"warning",variant:"inverse",header:"$98.111,00",text:"Lorem ipsum...",footer:"Lorem ipsum dolor sit amet enim."})),n.a.createElement(l.u,{xs:"12",sm:"6",lg:"3"},n.a.createElement(l.Wb,{inverse:!0,color:"danger",variant:"inverse",value:95,header:"2 TB",text:"Lorem ipsum...",footer:"Lorem ipsum dolor sit amet enim."}))),n.a.createElement(l.wb,null,n.a.createElement(l.u,{xs:"12",sm:"6",lg:"3"},n.a.createElement(l.Vb,{text:"income",header:"$1.999,50",color:"primary"},n.a.createElement(o.a,{width:24,name:"cil-settings"}))),n.a.createElement(l.u,{xs:"12",sm:"6",lg:"3"},n.a.createElement(l.Vb,{text:"income",header:"$1.999,50",color:"info"},n.a.createElement(o.a,{width:24,name:"cil-user"}))),n.a.createElement(l.u,{xs:"12",sm:"6",lg:"3"},n.a.createElement(l.Vb,{text:"income",header:"$1.999,50",color:"warning"},n.a.createElement(o.a,{width:24,name:"cil-moon"}))),n.a.createElement(l.u,{xs:"12",sm:"6",lg:"3"},n.a.createElement(l.Vb,{text:"income",header:"$1.999,50",color:"danger"},n.a.createElement(o.a,{width:24,name:"cil-bell"}))),n.a.createElement(l.u,{xs:"12",sm:"6",lg:"3"},n.a.createElement(l.Vb,{text:"income",header:"$1.999,50",color:"primary",iconPadding:!1},n.a.createElement(o.a,{width:24,name:"cil-settings"}))),n.a.createElement(l.u,{xs:"12",sm:"6",lg:"3"},n.a.createElement(l.Vb,{text:"income",header:"$1.999,50",color:"info",iconPadding:!1},n.a.createElement(o.a,{width:24,name:"cil-laptop"}))),n.a.createElement(l.u,{xs:"12",sm:"6",lg:"3"},n.a.createElement(l.Vb,{text:"income",header:"$1.999,50",color:"warning",iconPadding:!1},n.a.createElement(o.a,{width:24,name:"cil-moon"}))),n.a.createElement(l.u,{xs:"12",sm:"6",lg:"3"},n.a.createElement(l.Vb,{text:"income",header:"$1.999,50",color:"danger",iconPadding:!1},n.a.createElement(o.a,{width:24,name:"cil-bell"}))),n.a.createElement(l.u,{xs:"12",sm:"6",lg:"4"},n.a.createElement(l.Vb,{text:"income",header:"$1.999,50",color:"primary",iconPadding:!1},n.a.createElement(o.a,{width:24,name:"cil-settings",className:"mx-5"}))),n.a.createElement(l.u,{xs:"12",sm:"6",lg:"4"},n.a.createElement(l.Vb,{text:"income",header:"$1.999,50",color:"info",iconPadding:!1},n.a.createElement(o.a,{width:24,name:"cil-laptop",className:"mx-5"}))),n.a.createElement(l.u,{xs:"12",sm:"6",lg:"4"},n.a.createElement(l.Vb,{text:"income",header:"$1.999,50",color:"warning",iconPadding:!1,footerSlot:n.a.createElement(l.l,{className:"card-footer px-3 py-2"},n.a.createElement(l.db,{className:"font-weight-bold font-xs btn-block text-muted",href:"https://coreui.io/",rel:"noopener norefferer",target:"_blank"},"View more",n.a.createElement(o.a,{name:"cil-arrow-right",className:"float-right",width:"16"})))},n.a.createElement(o.a,{width:24,name:"cil-moon",className:"mx-5"})))),n.a.createElement(p,null),n.a.createElement(p,{withCharts:!0}),n.a.createElement(l.m,{className:"mb-4"},n.a.createElement(l.Xb,{header:"87.500",text:"Visitors",color:"gradient-info"},n.a.createElement(o.a,{name:"cil-people",height:"36"})),n.a.createElement(l.Xb,{header:"385",text:"New Clients",color:"gradient-success"},n.a.createElement(o.a,{name:"cil-userFollow",height:"36"})),n.a.createElement(l.Xb,{header:"1238",text:"Products sold",color:"gradient-warning"},n.a.createElement(o.a,{name:"cil-basket",height:"36"})),n.a.createElement(l.Xb,{header:"28%",text:"Returning Visitors"},n.a.createElement(o.a,{name:"cil-chartPie",height:"36"})),n.a.createElement(l.Xb,{header:"5:34:11",text:"Avg. Time",color:"gradient-danger",progressSlot:n.a.createElement(l.ub,{color:"danger",size:"xs",value:75,animated:!0,className:"my-3"})},n.a.createElement(o.a,{name:"cil-speedometer",height:"36"}))),n.a.createElement(l.m,{className:"mb-4"},n.a.createElement(l.Xb,{header:"87.500",text:"Visitors",color:"gradient-info",inverse:!0},n.a.createElement(o.a,{name:"cil-people",height:"36"})),n.a.createElement(l.Xb,{header:"385",text:"New Clients",color:"gradient-success",inverse:!0},n.a.createElement(o.a,{name:"cil-userFollow",height:"36"})),n.a.createElement(l.Xb,{header:"1238",text:"Products sold",color:"gradient-warning",inverse:!0},n.a.createElement(o.a,{name:"cil-basket",height:"36"})),n.a.createElement(l.Xb,{header:"28%",text:"Returning Visitors",color:"gradient-primary",inverse:!0},n.a.createElement(o.a,{name:"cil-chartPie",height:"36"})),n.a.createElement(l.Xb,{header:"5:34:11",text:"Avg. Time",color:"gradient-danger",inverse:!0},n.a.createElement(o.a,{name:"cil-speedometer",height:"36"}))),n.a.createElement(l.wb,null,n.a.createElement(l.u,{sm:"6",md:"2"},n.a.createElement(l.Xb,{header:"87.500",text:"Visitors",color:"gradient-info"},n.a.createElement(o.a,{name:"cil-people",height:"36"}))),n.a.createElement(l.u,{sm:"6",md:"2"},n.a.createElement(l.Xb,{header:"385",text:"New Clients",color:"gradient-success"},n.a.createElement(o.a,{name:"cil-userFollow",height:"36"}))),n.a.createElement(l.u,{sm:"6",md:"2"},n.a.createElement(l.Xb,{header:"1238",text:"Products sold",color:"gradient-warning"},n.a.createElement(o.a,{name:"cil-basket",height:"36"}))),n.a.createElement(l.u,{sm:"6",md:"2"},n.a.createElement(l.Xb,{header:"28%",text:"Returning Visitors",color:"gradient-primary"},n.a.createElement(o.a,{name:"cil-chartPie",height:"36"}))),n.a.createElement(l.u,{sm:"6",md:"2"},n.a.createElement(l.Xb,{header:"5:34:11",text:"Avg. Time",color:"gradient-danger"},n.a.createElement(o.a,{name:"cil-speedometer",height:"36"}))),n.a.createElement(l.u,{sm:"6",md:"2"},n.a.createElement(l.Xb,{header:"972",text:"comments",color:"gradient-info"},n.a.createElement(o.a,{name:"cil-speech",height:"36"})))),n.a.createElement(l.wb,null,n.a.createElement(l.u,{sm:"6",md:"2"},n.a.createElement(l.Xb,{header:"87.500",text:"Visitors",color:"gradient-info",inverse:!0},n.a.createElement(o.a,{name:"cil-people",height:"36"}))),n.a.createElement(l.u,{sm:"6",md:"2"},n.a.createElement(l.Xb,{header:"385",text:"New Clients",color:"gradient-success",inverse:!0},n.a.createElement(o.a,{name:"cil-userFollow",height:"36"}))),n.a.createElement(l.u,{sm:"6",md:"2"},n.a.createElement(l.Xb,{header:"1238",text:"Products sold",color:"gradient-warning",inverse:!0},n.a.createElement(o.a,{name:"cil-basket",height:"36"}))),n.a.createElement(l.u,{sm:"6",md:"2"},n.a.createElement(l.Xb,{header:"28%",text:"Returning Visitors",color:"gradient-primary",inverse:!0},n.a.createElement(o.a,{name:"cil-chartPie",height:"36"}))),n.a.createElement(l.u,{sm:"6",md:"2"},n.a.createElement(l.Xb,{header:"5:34:11",text:"Avg. Time",color:"gradient-danger",inverse:!0},n.a.createElement(o.a,{name:"cil-speedometer",height:"36"}))),n.a.createElement(l.u,{sm:"6",md:"2"},n.a.createElement(l.Xb,{header:"972",text:"comments",color:"gradient-info",inverse:!0},n.a.createElement(o.a,{name:"cil-speech",height:"36"})))),n.a.createElement(l.wb,null,n.a.createElement(l.u,{sm:"4",lg:"2"},n.a.createElement(l.Yb,{header:"title",text:"1,123"},n.a.createElement(b,{style:{height:"40px"},borderColor:"danger"}))),n.a.createElement(l.u,{sm:"4",lg:"2"},n.a.createElement(l.Yb,{header:"title",text:"1,123"},n.a.createElement(b,{style:{height:"40px"},borderColor:"primary"}))),n.a.createElement(l.u,{sm:"4",lg:"2"},n.a.createElement(l.Yb,{header:"title",text:"1,123"},n.a.createElement(b,{style:{height:"40px"},borderColor:"success"}))),n.a.createElement(l.u,{sm:"4",lg:"2"},n.a.createElement(l.Yb,{header:"title",text:"1,123"},n.a.createElement(f,{style:{height:"40px"},backgroundColor:"danger"}))),n.a.createElement(l.u,{sm:"4",lg:"2"},n.a.createElement(l.Yb,{header:"title",text:"1,123"},n.a.createElement(f,{style:{height:"40px"},backgroundColor:"primary"}))),n.a.createElement(l.u,{sm:"4",lg:"2"},n.a.createElement(l.Yb,{header:"title",text:"1,123"},n.a.createElement(f,{style:{height:"40px"},backgroundColor:"success"})))))}}}]);
//# sourceMappingURL=64.6a1afef5.chunk.js.map