(this.webpackJsonpConstructionManagement=this.webpackJsonpConstructionManagement||[]).push([[20,61],{1327:function(e,n,t){"use strict";t.r(n);var a=t(161),o=t(162),r=t(164),c=t(163),i=t(1),l=t.n(i),u=t(19),s=t(668),m=t(843),d=l.a.createElement("div",{className:"pt-3 text-center"},l.a.createElement("div",{className:"sk-spinner sk-spinner-pulse"})),h=l.a.memo((function(){return l.a.createElement("main",{className:"c-main"},l.a.createElement(s.w,{fluid:!0},l.a.createElement(i.Suspense,{fallback:d},l.a.createElement(u.d,null,m.a.map((function(e,n){return e.component&&l.a.createElement(u.b,{key:n,path:e.path,exact:e.exact,name:e.name,render:function(n){return l.a.createElement(s.H,null,l.a.createElement(e.component,n))}})})),l.a.createElement(u.a,{from:"/",to:"/dashboard"})))))})),p=l.a.memo((function(){return l.a.createElement(s.I,{fixed:!1},l.a.createElement("div",null),l.a.createElement("div",{className:"mfs-auto"},l.a.createElement("span",{className:"mr-1"},"B\u1ea3n quy\u1ec1n thu\u1ed9c v\u1ec1 C\xf4ng ty VLXD"),l.a.createElement("a",{href:"https://www.facebook.com/Betonganhduong/",target:"_blank",rel:"noopener noreferrer"},"ADC")))})),f=t(167),b=t(678),g=t(86),v=t(109),y=function(e){Object(r.a)(t,e);var n=Object(c.a)(t);function t(e){var o;return Object(a.a)(this,t),(o=n.call(this,e)).toggleSidebar=function(){v.a.dispatch(Object(g.f)())},o.state={showSider:o.props.showSider},o}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(s.M,{withSubheader:!0},l.a.createElement(s.Qb,{inHeader:!0,className:"ml-md-3 d-lg-none",onClick:this.toggleSidebar}),l.a.createElement(s.Qb,{inHeader:!0,className:"ml-3 d-md-down-none",onClick:this.toggleSidebar}),l.a.createElement(s.N,{className:"mx-auto d-lg-none",to:"/"},l.a.createElement("div",{className:"header-sider-bar-mobile"},"ADC")),l.a.createElement(s.O,{className:"d-md-down-none mr-auto"},l.a.createElement(s.P,{className:"px-3"},l.a.createElement(s.Q,{to:"/dashboard"},"Dashboard"))),l.a.createElement(s.O,{className:"px-3"},l.a.createElement(S,null)),l.a.createElement(s.Gb,{className:"px-3 justify-content-between"},l.a.createElement(s.e,{className:"border-0 c-subheader-nav m-0 px-0 px-md-3",routes:m.a}),l.a.createElement("div",{className:"d-md-down-none mfe-2 c-subheader-nav"})))}}]),t}(i.Component),E=Object(f.b)((function(e){return{showSider:e.root.showSider}}))(y),N=t(679),x=t(165),z=t.n(x),C=t(680),S=function(){return l.a.createElement(s.z,{inNav:!0,className:"c-header-nav-items mx-2",direction:"down"},l.a.createElement(s.E,{className:"c-header-nav-link",caret:!1},l.a.createElement("div",{className:"c-avatar"},l.a.createElement(s.R,{src:"avatars/6.jpg",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"}))),l.a.createElement(s.D,{className:"pt-0",placement:"bottom-end"},l.a.createElement(s.C,{divider:!0}),l.a.createElement(s.C,null,l.a.createElement(b.a,{name:"cil-lock-locked",className:"mfe-2"}),l.a.createElement("div",{onClick:function(){return z.a.post(C.a.GLOBAL_API_PATH+N.m).then((function(e){C.a.ToastSuccess("\u0110\u0103ng xu\u1ea5t th\xe0nh c\xf4ng"),window.location.replace("/")})).catch((function(){C.a.ToastError("\u0110\u0103ng nh\u1eadp kh\xf4ng th\xe0nh c\xf4ng!")})).finally((function(){}))}},"Log out"))))},w=[{_tag:"CSidebarNavItem",name:"Dashboard",to:"/dashboard",icon:"cil-speedometer"},{_tag:"CSidebarNavTitle",_children:["S\u1ea3n xu\u1ea5t"]},{_tag:"CSidebarNavItem",name:"Th\xf4ng tin m\u1ebb tr\u1ed9n",to:"/thong-tin-me-tron",icon:"cil-pencil"},{_tag:"CSidebarNavItem",name:"Th\xe0nh ph\u1ea7n m\u1ebb tr\u1ed9n \u0111\u1eb7t",to:"/thanh-phan-dat",icon:"cil-star"},{_tag:"CSidebarNavItem",name:"Th\xe0nh ph\u1ea7n m\u1ebb tr\u1ed9n c\xe2n",to:"/thanh-phan-can",icon:"cil-chart-pie"},{_tag:"CSidebarNavItem",name:"Sai s\u1ed1",to:"/sai-so",icon:"cil-calculator"},{_tag:"CSidebarNavItem",name:"Th\xf4ng tin c\u1ea5p ph\u1ed1i",to:"/cap-phoi",icon:"cil-puzzle"},{_tag:"CSidebarNavTitle",_children:["Qu\u1ea3n l\xfd danh m\u1ee5c"]},{_tag:"CSidebarNavItem",name:"Ph\u01b0\u01a1ng ti\u1ec7n",to:"/vehicle",icon:"cil-truck"},{_tag:"CSidebarNavItem",name:"Lo\u1ea1i b\xea t\xf4ng",to:"/mac",icon:"cil-list"},{_tag:"CSidebarNavItem",name:"V\u1eadt t\u01b0",to:"/vat-tu",icon:"cil-object-ungroup"},{_tag:"CSidebarNavItem",name:"Lo\u1ea1i v\u1eadt t\u01b0",to:"/loai-vat-tu",icon:"cil-layers"},{_tag:"CSidebarNavItem",name:"H\u1ee3p \u0111\u1ed3ng",to:"/hop-dong",icon:"cil-book"},{_tag:"CSidebarNavTitle",_children:["H\u1ec7 th\u1ed1ng"]},{_tag:"CSidebarNavItem",name:"Ch\u1ee9c v\u1ee5",to:"/role",icon:"cil-cursor"},{_tag:"CSidebarNavItem",name:"Ng\u01b0\u1eddi d\xf9ng",to:"/identity",icon:"cil-user"}],P=function(e){Object(r.a)(t,e);var n=Object(c.a)(t);function t(e){var o;return Object(a.a)(this,t),(o=n.call(this,e)).state={showSider:o.props.showSider},o}return Object(o.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.showSider!=this.state.showSider&&this.setState({showSider:e.showSider})}},{key:"render",value:function(){return l.a.createElement(s.yb,{show:this.state.showSider,onShowChange:function(){return v.a.dispatch(Object(g.f)())}},l.a.createElement(s.zb,{className:"d-md-down-none",to:"/"},l.a.createElement("div",{className:"header-sider-bar"},"ADC ")),l.a.createElement(s.Bb,null,l.a.createElement(s.x,{items:w,components:{CSidebarNavDivider:s.Cb,CSidebarNavDropdown:s.Db,CSidebarNavItem:s.Eb,CSidebarNavTitle:s.Fb}})),l.a.createElement(s.Ab,{className:"c-d-md-down-none"}))}}]),t}(i.Component),k=Object(f.b)((function(e){return{showSider:e.root.showSider}}))(P),O=l.a.lazy((function(){return t.e(34).then(t.bind(null,1033))})),j=function(e){Object(r.a)(t,e);var n=Object(c.a)(t);function t(e){var o;return Object(a.a)(this,t),(o=n.call(this,e)).state={isAuthenticated:e.isAuthenticated},o}return Object(o.a)(t,[{key:"render",value:function(){return 1==this.props.isAuthenticated?l.a.createElement("div",{className:"c-app c-default-layout"},l.a.createElement(k,null),l.a.createElement("div",{className:"c-wrapper"},l.a.createElement(E,null),l.a.createElement("div",{className:"c-body"},l.a.createElement(h,null)),l.a.createElement(p,null))):l.a.createElement(O,null)}}]),t}(i.Component);n.default=Object(f.b)((function(e){return{isAuthenticated:e.root.isAuthenticated}}))(j)},679:function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"l",(function(){return o})),t.d(n,"m",(function(){return r})),t.d(n,"Q",(function(){return c})),t.d(n,"O",(function(){return i})),t.d(n,"R",(function(){return l})),t.d(n,"P",(function(){return u})),t.d(n,"p",(function(){return s})),t.d(n,"n",(function(){return m})),t.d(n,"q",(function(){return d})),t.d(n,"o",(function(){return h})),t.d(n,"M",(function(){return p})),t.d(n,"K",(function(){return f})),t.d(n,"N",(function(){return b})),t.d(n,"L",(function(){return g})),t.d(n,"f",(function(){return v})),t.d(n,"d",(function(){return y})),t.d(n,"g",(function(){return E})),t.d(n,"e",(function(){return N})),t.d(n,"j",(function(){return x})),t.d(n,"h",(function(){return z})),t.d(n,"k",(function(){return C})),t.d(n,"i",(function(){return S})),t.d(n,"E",(function(){return w})),t.d(n,"C",(function(){return P})),t.d(n,"F",(function(){return k})),t.d(n,"D",(function(){return O})),t.d(n,"t",(function(){return j})),t.d(n,"r",(function(){return T})),t.d(n,"u",(function(){return _})),t.d(n,"s",(function(){return I})),t.d(n,"v",(function(){return A})),t.d(n,"I",(function(){return B})),t.d(n,"G",(function(){return D})),t.d(n,"J",(function(){return L})),t.d(n,"H",(function(){return H})),t.d(n,"a",(function(){return G})),t.d(n,"B",(function(){return M})),t.d(n,"z",(function(){return Q})),t.d(n,"A",(function(){return U})),t.d(n,"x",(function(){return V})),t.d(n,"w",(function(){return q})),t.d(n,"y",(function(){return F})),t.d(n,"c",(function(){return J}));var a="/identity/check-login",o="/login",r="/logout",c="/vehicle/index",i="/vehicle/create",l="/vehicle/update",u="/vehicle/delete",s="/mac/index",m="/mac/create",d="/mac/update",h="/mac/delete",p="/vat-tu/index",f="/vat-tu/create",b="/vat-tu/update",g="/vat-tu/delete",v="/hop-dong/index",y="/hop-dong/create",E="/hop-dong/update",N="/hop-dong/delete",x="/loai-vat-tu/index",z="/loai-vat-tu/create",C="/loai-vat-tu/update",S="/loai-vat-tu/delete",w="/thong-tin-me-tron/index",P="/thong-tin-me-tron/create",k="/thong-tin-me-tron/update",O="/thong-tin-me-tron/delete",j="/role/index",T="/role/create",_="/role/update",I="/role/delete",A="/role/get-role-user",B="/identity/index",D="/identity/create",L="/identity/update",H="/identity/delete",G="/cap-phoi/index",M="/thanh-phan-dat/index",Q="/thanh-phan-can/index",U="/thanh-phan-can/update",V="/sai-so/index",q="/sai-so/index",F="/sai-so/filter",J="/export/excel"},680:function(e,n,t){"use strict";t.d(n,"a",(function(){return f}));var a=t(161),o=t(162),r=t(1325),c=t(165),i=t.n(c),l=t(171),u=t(1),s=t.n(u),m=t(1324),d=t(109),h=t(86),p=r.a.confirm,f=function(){function e(){Object(a.a)(this,e)}return Object(o.a)(e,null,[{key:"ToastSuccess",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"C\u1eadp nh\u1eadt th\xe0nh c\xf4ng!";l.b.success(e,{autoClose:2e3,draggable:!0})}},{key:"ToastError",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"\u0110\xe3 c\xf3 l\u1ed7i x\u1ea3y ra!";l.b.error(e,{autoClose:2e3,draggable:!0})}},{key:"showConfirm",value:function(){p({title:"B\u1ea1n c\xf3 ch\u1eafc mu\u1ed1n x\xf3a d\u1eef li\u1ec7u?",icon:s.a.createElement(m.a,null),content:"",onOk:function(){d.a.dispatch(Object(h.e)(!0))},onCancel:function(){d.a.dispatch(Object(h.e)(!1))}})}}]),e}();f.GLOBAL_DOMAIN_PATH="/",f.GLOBAL_API_PATH="/api",f.post=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i.a.post(e,n)},f.get=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i.a.get(e,{params:n})}},843:function(e,n,t){"use strict";var a=t(1),o=t.n(a),r=(t(847),t(110)),c=function(){return o.a.createElement("div",{className:"",style:{display:"flex",justifyContent:"center",height:window.innerHeight-190,alignItems:"center"}},o.a.createElement("h1",{style:{color:"red"},className:"float-left display-3 mr-4"},"401"),o.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},o.a.createElement("h4",{className:"pt-3"},"Kh\xf4ng c\xf3 quy\u1ec1n truy c\u1eadp"),o.a.createElement("p",{className:"text-muted float-left"},"Vui l\xf2ng li\xean h\u1ec7 qu\u1ea3n tr\u1ecb vi\xean !"),o.a.createElement("a",{onClick:function(){r.a.push("/dashboard"),window.location.reload()},style:{fontSize:15,display:"flex",alignItems:"center",color:"#0665f0",cursor:"pointer",textDecoration:"underline"}},"Tr\u1edf v\u1ec1 trang ch\u1ee7")))},i=o.a.lazy((function(){return t.e(33).then(t.bind(null,1328))})),l=o.a.lazy((function(){return t.e(36).then(t.bind(null,1290))})),u=o.a.lazy((function(){return t.e(47).then(t.bind(null,1291))})),s=o.a.lazy((function(){return t.e(23).then(t.bind(null,1292))})),m=o.a.lazy((function(){return t.e(24).then(t.bind(null,1293))})),d=o.a.lazy((function(){return t.e(25).then(t.bind(null,1294))})),h=o.a.lazy((function(){return t.e(26).then(t.bind(null,1295))})),p=o.a.lazy((function(){return t.e(48).then(t.bind(null,1296))})),f=o.a.lazy((function(){return t.e(27).then(t.bind(null,1297))})),b=o.a.lazy((function(){return t.e(28).then(t.bind(null,1298))})),g=o.a.lazy((function(){return t.e(49).then(t.bind(null,1299))})),v=o.a.lazy((function(){return t.e(29).then(t.bind(null,1300))})),y=o.a.lazy((function(){return t.e(50).then(t.bind(null,1301))})),E=o.a.lazy((function(){return t.e(51).then(t.bind(null,1302))})),N=o.a.lazy((function(){return t.e(52).then(t.bind(null,1303))})),x=o.a.lazy((function(){return t.e(30).then(t.bind(null,1304))})),z=o.a.lazy((function(){return t.e(53).then(t.bind(null,1305))})),C=o.a.lazy((function(){return t.e(54).then(t.bind(null,1306))})),S=o.a.lazy((function(){return t.e(55).then(t.bind(null,1307))})),w=o.a.lazy((function(){return t.e(56).then(t.bind(null,1308))})),P=o.a.lazy((function(){return t.e(57).then(t.bind(null,1309))})),k=o.a.lazy((function(){return Promise.all([t.e(2),t.e(7),t.e(58)]).then(t.bind(null,1310))})),O=o.a.lazy((function(){return Promise.all([t.e(0),t.e(2),t.e(3),t.e(12),t.e(15)]).then(t.bind(null,1338))})),j=o.a.lazy((function(){return Promise.all([t.e(5),t.e(66),t.e(37)]).then(t.bind(null,1311))})),T=o.a.lazy((function(){return Promise.all([t.e(5),t.e(65),t.e(38)]).then(t.bind(null,1314))})),_=o.a.lazy((function(){return Promise.all([t.e(5),t.e(59)]).then(t.bind(null,771))})),I=o.a.lazy((function(){return t.e(31).then(t.bind(null,1316))})),A=o.a.lazy((function(){return t.e(60).then(t.bind(null,1317))})),B=o.a.lazy((function(){return t.e(32).then(t.bind(null,1318))})),D=o.a.lazy((function(){return t.e(35).then(t.bind(null,1339))})),L=[{path:"/",exact:!0,name:"Home"},{path:"/dashboard",name:"Dashboard",component:O},{path:"/theme",name:"Theme",component:D,exact:!0},{path:"/theme/colors",name:"Colors",component:D},{path:"/theme/typography",name:"Typography",component:o.a.lazy((function(){return t.e(63).then(t.bind(null,1319))}))},{path:"/base",name:"Base",component:s,exact:!0},{path:"/base/breadcrumbs",name:"Breadcrumbs",component:u},{path:"/base/cards",name:"Cards",component:s},{path:"/base/carousels",name:"Carousel",component:m},{path:"/base/collapses",name:"Collapse",component:d},{path:"/base/forms",name:"Forms",component:h},{path:"/base/jumbotrons",name:"Jumbotrons",component:p},{path:"/base/list-groups",name:"List Groups",component:f},{path:"/base/navbars",name:"Navbars",component:b},{path:"/base/navs",name:"Navs",component:g},{path:"/base/paginations",name:"Paginations",component:v},{path:"/base/popovers",name:"Popovers",component:y},{path:"/base/progress-bar",name:"Progress Bar",component:E},{path:"/base/switches",name:"Switches",component:N},{path:"/base/tables",name:"Tables",component:l},{path:"/base/tabs",name:"Tabs",component:x},{path:"/base/tooltips",name:"Tooltips",component:z},{path:"/buttons",name:"Buttons",component:P,exact:!0},{path:"/buttons/buttons",name:"Buttons",component:P},{path:"/buttons/button-dropdowns",name:"Dropdowns",component:S},{path:"/buttons/button-groups",name:"Button Groups",component:w},{path:"/buttons/brand-buttons",name:"Brand Buttons",component:C},{path:"/charts",name:"Charts",component:k},{path:"/icons",exact:!0,name:"Icons",component:j},{path:"/icons/coreui-icons",name:"CoreUI Icons",component:j},{path:"/icons/flags",name:"Flags",component:T},{path:"/icons/brands",name:"Brands",component:_},{path:"/notifications",name:"Notifications",component:I,exact:!0},{path:"/notifications/alerts",name:"Alerts",component:I},{path:"/notifications/badges",name:"Badges",component:A},{path:"/notifications/modals",name:"Modals",component:B},{path:"/notifications/toaster",name:"Toaster",component:i},{path:"/widgets",name:"Widgets",component:o.a.lazy((function(){return Promise.all([t.e(2),t.e(7),t.e(64)]).then(t.bind(null,1326))}))},{path:"/users",exact:!0,name:"Users",component:o.a.lazy((function(){return t.e(22).then(t.bind(null,1320))}))},{path:"/users/:id",exact:!0,name:"User Details",component:o.a.lazy((function(){return t.e(21).then(t.bind(null,1321))}))},{path:"/vehicle",exact:!0,name:"Ph\u01b0\u01a1ng ti\u1ec7n",component:o.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(46)]).then(t.bind(null,1335))}))},{path:"/mac",exact:!0,name:"Lo\u1ea1i b\xea t\xf4ng (MAC)",component:o.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(16),t.e(42)]).then(t.bind(null,1333))}))},{path:"/vat-tu",exact:!0,name:"V\u1eadt t\u01b0",component:o.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(14)]).then(t.bind(null,1332))}))},{path:"/hop-dong",exact:!0,name:"H\u1ee3p \u0111\u1ed3ng",component:o.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(3),t.e(40)]).then(t.bind(null,1331))}))},{path:"/loai-vat-tu",exact:!0,name:"Lo\u1ea1i v\u1eadt t\u01b0",component:o.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(3),t.e(41)]).then(t.bind(null,1334))}))},{path:"/thong-tin-me-tron",exact:!0,name:"Th\xf4ng tin m\u1ebb tr\u1ed9n",component:o.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(19)]).then(t.bind(null,1330))}))},{path:"/role",exact:!0,name:"Role",component:o.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(13)]).then(t.bind(null,1322))}))},{path:"/unauthorized",exact:!0,name:"Unauthorized",component:c},{path:"/cap-phoi",exact:!0,name:"C\u1ea5p ph\u1ed1i",component:o.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(39)]).then(t.bind(null,1340))}))},{path:"/thanh-phan-dat",exact:!0,name:"Th\xe0nh ph\u1ea7n \u0111\u1eb7t",component:o.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(44)]).then(t.bind(null,1341))}))},{path:"/thanh-phan-can",exact:!0,name:"Th\xe0nh ph\u1ea7n c\xe2n",component:o.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(18)]).then(t.bind(null,1337))}))},{path:"/sai-so",exact:!0,name:"Sai s\u1ed1",component:o.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(43)]).then(t.bind(null,1342))}))},{path:"/identity",exact:!0,name:"User",component:o.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(45)]).then(t.bind(null,1336))}))},{path:"*",component:o.a.lazy((function(){return t.e(8).then(t.bind(null,1289))}))}];n.a=L},847:function(e,n,t){"use strict";t.r(n);var a=t(1),o=t.n(a),r=t(668),c=t(678);n.default=function(){return o.a.createElement("div",{className:"c-app c-default-layout flex-row align-items-center"},o.a.createElement(r.w,null,o.a.createElement(r.wb,{className:"justify-content-center"},o.a.createElement(r.u,{md:"6"},o.a.createElement("span",{className:"clearfix"},o.a.createElement("h1",{className:"float-left display-3 mr-4"},"500"),o.a.createElement("h4",{className:"pt-3"},"Houston, we have a problem!"),o.a.createElement("p",{className:"text-muted float-left"},"The page you are looking for is temporarily unavailable.")),o.a.createElement(r.V,{className:"input-prepend"},o.a.createElement(r.X,null,o.a.createElement(r.Y,null,o.a.createElement(c.a,{name:"cil-magnifying-glass"}))),o.a.createElement(r.S,{size:"16",type:"text",placeholder:"What are you looking for?"}),o.a.createElement(r.W,null,o.a.createElement(r.f,{color:"info"},"Search")))))))}}}]);
//# sourceMappingURL=20.2f7e077c.chunk.js.map