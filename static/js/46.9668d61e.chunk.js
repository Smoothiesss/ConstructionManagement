(this.webpackJsonpConstructionManagement=this.webpackJsonpConstructionManagement||[]).push([[46],{1335:function(e,t,a){"use strict";a.r(t);var n=a(161),i=a(162),l=a(168),r=a(164),o=a(163),s=a(668),c=a(688),d=a(1325),u=a(706),h=a(165),m=a.n(h),f=a(1),p=a.n(f),b=a(167),g=a(86),v=a(109),y=a(679),C=a(680),E=a(1281),k=a(1323),O={labelCol:{span:6}},D=E.a.TextArea,S=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).state={data:e.data},i}return Object(i.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.data!==this.state.data&&(this.setState({data:e.data}),this.form.setFieldsValue(e.data))}},{key:"render",value:function(){var e=this;return p.a.createElement(k.a,Object.assign({ref:function(t){return e.form=t}},O,{name:"basic",initialValues:this.state.data}),p.a.createElement(k.a.Item,{name:"name",label:"T\xean ph\u01b0\u01a1ng ti\u1ec7n"},p.a.createElement(E.a,{disabled:!0})),p.a.createElement(k.a.Item,{name:"serialNumber",label:"Bi\u1ec3n s\u1ed1"},p.a.createElement(E.a,{disabled:!0})),p.a.createElement(k.a.Item,{name:"description",label:"M\xf4 t\u1ea3"},p.a.createElement(D,{disabled:!0})))}}]),a}(f.Component),w=a(166),T=a.n(w),A={labelCol:{span:6}},F=E.a.TextArea,j=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).onFinish=function(){var e=i.state.data,t=i.form.getFieldsValue();i.props.create?m.a.post(C.a.GLOBAL_API_PATH+y.O,t).then((function(e){var t=e.data;t.success?(C.a.ToastSuccess("T\u1ea1o m\u1edbi d\u1eef li\u1ec7u th\xe0nh c\xf4ng!"),i.props.loadData&&i.props.loadData()):C.a.ToastError(T.a.get(t.result,"SerialNumber.errors[0].errorMessage"))})).catch((function(){C.a.ToastError()})).finally((function(){})):(t.id=e.id,m.a.post(C.a.GLOBAL_API_PATH+y.R,t).then((function(e){e.data.success&&(C.a.ToastSuccess("C\u1eadp nh\u1eadt d\u1eef li\u1ec7u th\xe0nh c\xf4ng!"),i.props.loadData&&i.props.loadData())})).catch((function(){C.a.ToastError()})).finally((function(){})))},i.state={data:e.data,create:e.create},i}return Object(i.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.data===this.state.data||e.create||(this.setState({data:e.data}),this.form.setFieldsValue(e.data)),e.create&&this.form.setFieldsValue({name:"",serialNumber:"",description:""})}},{key:"render",value:function(){var e=this,t=this.state,a=t.data,n=t.create;return p.a.createElement(k.a,Object.assign({ref:function(t){return e.form=t}},A,{name:"basic",onFinish:this.onFinish,initialValues:n?"":a}),p.a.createElement(k.a.Item,{name:"name",label:"T\xean ph\u01b0\u01a1ng ti\u1ec7n"},p.a.createElement(E.a,null)),p.a.createElement(k.a.Item,{name:"serialNumber",label:"Bi\u1ec3n s\u1ed1"},p.a.createElement(E.a,null)),p.a.createElement(k.a.Item,{name:"description",label:"M\xf4 t\u1ea3"},p.a.createElement(F,null)))}}]),a}(f.Component),I=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(e){var i;Object(n.a)(this,a),(i=t.call(this,e)).handleOk=function(e){i.setState({visible:!1})},i.handleCancel=function(e){i.setState({visible:!1})},i.handleOkEdit=function(e){i.formUpdate.onFinish(),i.setState({visibleEdit:!1})},i.handleCancelEdit=function(e){i.setState({visibleEdit:!1})},i.handleOkCreate=function(e){i.formUpdate.onFinish(),i.setState({visibleCreate:!1})},i.handleCancelCreate=function(e){i.setState({visibleCreate:!1})},i.onGridReady=function(e){i.gridApi=e.api,i.gridApi.sizeColumnsToFit(),i.loadData()};var r=Object(l.a)(i);return i.state={rowData:[],columnDefs:[{headerName:"STT",valueGetter:"node.rowIndex + 1",width:80},{headerName:"T\xean ph\u01b0\u01a1ng ti\u1ec7n",field:"name",minWidth:300,suppressSizeToFit:!0},{headerName:"Bi\u1ec3n s\u1ed1",field:"serialNumber",width:100},{headerName:"M\xf4 t\u1ea3",field:"description",minWidth:300},{headerName:"H\xe0nh \u0111\u1ed9ng",field:"action",minwidth:200,cellRendererFramework:function(e){return p.a.createElement("div",{style:{display:"flex",alignItems:"center"}},p.a.createElement("button",{onClick:function(){return r.openFormDetail(e.data)},style:{height:30,marginRight:5,display:"flex",alignItems:"center"},type:"button",className:"btn btn-info"},"Chi ti\u1ebft"),p.a.createElement("button",{onClick:function(){return r.openFormEdit(e.data)},style:{height:30,marginRight:5,display:"flex",alignItems:"center"},type:"button",className:"btn btn-success"},"Ch\u1ec9nh s\u1eeda"),p.a.createElement("button",{onClick:function(){return r.onDelete(e.data)},style:{height:30,display:"flex",alignItems:"center"},type:"button",className:"btn btn-danger"},"X\xf3a"))}}],visible:!1,visibleEdit:!1,onDelete:!1,rowSelect:{},visibleCreate:!1,overlayLoadingTemplate:'<span class="ag-overlay-loading-center">Please wait while your rows are loading</span>'},i.gridApi="",i}return Object(i.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.onDelete!=this.state.onDelete&&1==e.onDelete&&this.onConfirmDelete(this.state.rowSelect)}},{key:"openFormDetail",value:function(e){console.log(e),this.setState({visible:!0,rowSelect:e})}},{key:"openFormEdit",value:function(e){this.setState({visibleEdit:!0,rowSelect:e})}},{key:"openFormCreate",value:function(){this.setState({visibleCreate:!0})}},{key:"onDelete",value:function(e){C.a.showConfirm(),this.setState({rowSelect:e})}},{key:"onConfirmDelete",value:function(e){var t=this,a={};a.vehicleId=e.id,m.a.post(C.a.GLOBAL_API_PATH+y.P,null,{params:a}).then((function(e){e.data.success&&(C.a.ToastSuccess("X\xf3a d\u1eef li\u1ec7u th\xe0nh c\xf4ng!"),t.loadData())})).catch((function(){C.a.ToastError()})).finally((function(){v.a.dispatch(Object(g.e)(!1))}))}},{key:"loadData",value:function(){var e=this;this.gridApi&&this.gridApi.showLoadingOverlay(),m.a.get(C.a.GLOBAL_API_PATH+y.Q).then((function(t){var a=t.data;a.success&&e.setState({rowData:a.result})})).catch((function(){C.a.ToastError()})).finally((function(){e.gridApi&&e.gridApi.hideOverlay()}))}},{key:"render",value:function(){var e=this;return p.a.createElement("div",{className:"ag-theme-alpine",style:{height:window.innerHeight-180,alignItems:"stretch",display:"flex",flexDirection:"column",paddingTop:0,boxShadow:"unset",marginTop:-15}},p.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",marginBottom:5}},p.a.createElement(s.f,{color:"primary",onClick:function(){return e.openFormCreate()}},"+ T\u1ea1o m\u1edbi")),p.a.createElement(c.AgGridReact,{columnDefs:this.state.columnDefs,enableColResize:!0,rowData:this.state.rowData,enableFilter:!0,enableSorting:!0,onFilterModified:function(){for(var e,t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return(e=console).log.apply(e,["onFilterModified"].concat(a))},onFilterChanged:function(){for(var e,t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return(e=console).log.apply(e,["onFilterChanged"].concat(a))},onGridReady:this.onGridReady,overlayLoadingTemplate:this.state.overlayLoadingTemplate}),p.a.createElement(d.a,{title:"Chi ti\u1ebft",visible:this.state.visible,onOk:this.handleOk,onCancel:this.handleCancel,footer:[p.a.createElement(u.a,{key:"back",size:"large",type:"danger",onClick:this.handleCancel},"\u0110\xf3ng")]},p.a.createElement(S,{data:this.state.rowSelect})),p.a.createElement(d.a,{title:"Ch\u1ec9nh s\u1eeda",visible:this.state.visibleEdit,onOk:this.handleOkEdit,onCancel:this.handleCancelEdit,footer:[p.a.createElement(u.a,{key:"submit",type:"primary",size:"large",onClick:this.handleOkEdit},"Submit"),p.a.createElement(u.a,{key:"back",size:"large",type:"danger",onClick:this.handleCancelEdit},"\u0110\xf3ng")]},p.a.createElement(j,{ref:function(t){return e.formUpdate=t},data:this.state.rowSelect,loadData:function(){return e.loadData()}})),p.a.createElement(d.a,{title:"T\u1ea1o m\u1edbi",visible:this.state.visibleCreate,onOk:this.handleOkCreate,onCancel:this.handleCancelCreate,footer:[p.a.createElement(u.a,{key:"submit",type:"primary",size:"large",onClick:this.handleOkCreate},"Submit"),p.a.createElement(u.a,{key:"back",size:"large",type:"danger",onClick:this.handleCancelCreate},"\u0110\xf3ng")]},p.a.createElement(j,{create:!0,ref:function(t){return e.formUpdate=t},data:this.state.rowSelect,loadData:function(){return e.loadData()}})))}}]),a}(f.Component);t.default=Object(b.b)((function(e){return{onDelete:e.root.onDelete}}))(I)}}]);
//# sourceMappingURL=46.9668d61e.chunk.js.map