(this.webpackJsonpConstructionManagement=this.webpackJsonpConstructionManagement||[]).push([[34],{1033:function(e,t,a){"use strict";a.r(t);var n=a(161),l=a(162),c=a(164),s=a(163),r=a(1),o=a.n(r),i=a(668),u=a(678),m=a(165),d=a.n(m),h=a(680),f=a(679),p=a(109),g=a(86),E=a(717),v=a(110),y=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).submitForm=function(e){l.setState({loading:!0}),e.preventDefault(),d.a.post(h.a.GLOBAL_API_PATH+f.l,l.state.model).then((function(e){var t=e.data;t.success||h.a.ToastError("\u0110\u0103ng nh\u1eadp kh\xf4ng th\xe0nh c\xf4ng!"),t.success&&(h.a.ToastSuccess("\u0110\u0103ng nh\u1eadp th\xe0nh c\xf4ng!"),v.a.push("/dashboard"))})).catch((function(){h.a.ToastError("\u0110\u0103ng nh\u1eadp kh\xf4ng th\xe0nh c\xf4ng!")})).finally((function(){setTimeout((function(){l.checkLogin()}),500)}))},l.state={model:{username:"",password:""},loading:!0},l}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.checkLogin()}},{key:"checkLogin",value:function(){var e=this;d.a.get(h.a.GLOBAL_API_PATH+f.b).then((function(t){var a=t.data;if(e.setState({loading:!1}),a.success)try{p.a.dispatch(Object(g.d)(a.data))}catch(n){}})).catch((function(){e.setState({loading:!1})})).finally((function(){e.setState({loading:!1})}))}},{key:"onChangeInput",value:function(e,t){var a=this.state.model;a[t]=e,this.setState({model:a})}},{key:"render",value:function(){var e=this,t=this.state,a=t.username,n=t.password;return o.a.createElement("div",{className:"c-app c-default-layout flex-row align-items-center"},o.a.createElement(i.w,null,o.a.createElement(i.wb,{className:"justify-content-center"},o.a.createElement(i.u,{md:"6"},o.a.createElement(i.m,null,o.a.createElement(i.j,{className:"p-4"},o.a.createElement(i.k,null,o.a.createElement(i.J,{onSubmit:this.submitForm},o.a.createElement("h1",null,"Login"),o.a.createElement("p",{className:"text-muted"},"Sign In to your account"),o.a.createElement(i.V,{className:"mb-3"},o.a.createElement(i.X,null,o.a.createElement(i.Y,null,o.a.createElement(u.a,{name:"cil-user"}))),o.a.createElement(i.S,{value:a,type:"text",placeholder:"Username",autoComplete:"username",onChange:function(t){return e.onChangeInput(t.target.value,"username")}})),o.a.createElement(i.V,{className:"mb-4"},o.a.createElement(i.X,null,o.a.createElement(i.Y,null,o.a.createElement(u.a,{name:"cil-lock-locked"}))),o.a.createElement(i.S,{value:n,onChange:function(t){return e.onChangeInput(t.target.value,"password")},type:"password",placeholder:"Password",autoComplete:"current-password"})),o.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",flex:1,marginTop:-20}},o.a.createElement(i.f,{color:"link",className:"px-0"},"Forgot password?")),o.a.createElement("div",{style:{display:"flex",justifyContent:"center",flex:1}},o.a.createElement(i.f,{onClick:this.submitForm,type:"submit",color:"primary",className:"px-4"},"Login"))))))))),this.state.loading?o.a.createElement("div",{style:{zIndex:9999,position:"fixed",background:"#fff",top:0,left:0,width:"100%",height:"100%"}},o.a.createElement(E.a,null)):null)}}]),a}(r.Component);t.default=y},717:function(e,t,a){"use strict";var n=a(161),l=a(162),c=a(164),s=a(163),r=a(1),o=a.n(r),i=(a(733),function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).state={},l}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"loading",style:{"--n":"5"}},o.a.createElement("div",{className:"dot",style:{"--i":"0"}}),o.a.createElement("div",{className:"dot",style:{"--i":"1"}}),o.a.createElement("div",{className:"dot",style:{"--i":"2"}}),o.a.createElement("div",{className:"dot",style:{"--i":"3"}}),o.a.createElement("div",{className:"dot",style:{"--i":"4"}}))}}]),a}(o.a.Component));t.a=i},733:function(e,t,a){}}]);
//# sourceMappingURL=34.433426ae.chunk.js.map