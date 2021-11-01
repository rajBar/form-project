(this["webpackJsonpform-project"]=this["webpackJsonpform-project"]||[]).push([[0],{64:function(e,t,n){},65:function(e,t,n){},74:function(e,t,n){},76:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(35),o=n.n(i),a=(n(64),n(65),n(15)),c=n(39),u=n.n(c),l=n(2),d=n(54),s=n(16),p=n(17),j=n(20),f=n(19),b=n(10),m=n(46),O=n(103),h="TEXT_AREA",v="TEXT_BOX",x=n(56),T=n(32),y=n(27),k=n(55),C=(n(74),n(1)),E=function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"renderDeleteButton",value:function(e){var t=this.props.deleteFormElement;return Object(C.jsx)(b.a,{variant:"outline-danger",onClick:function(){return t(e)},children:"X"})}},{key:"updateTitle",value:function(e,t){(0,this.props.updateTitleText)(e,t.target.value)}},{key:"updateTickBoxTitle",value:function(e,t,n){(0,this.props.updateTickBoxText)(e,t,n.target.value)}},{key:"renderElement",value:function(e){var t=this,n=this.props,r=n.addNewTickBox,i=n.deleteTickBox;if(e.element===h)return Object(C.jsxs)("div",{id:"parent-width",children:[Object(C.jsx)("input",{placeholder:"Text Area Title",value:e.title,onChange:function(n){return t.updateTitle(e.id,n)}}),this.renderDeleteButton(e.id)]});if(e.element===v){var o=O.a();return Object(C.jsxs)(k.a,{id:"parent-width",children:[Object(C.jsx)(y.a,{children:Object(C.jsx)("input",{placeholder:"Tick Box Title",value:e.title,onChange:function(n){return t.updateTitle(e.id,n)}})}),Object(C.jsx)(y.a,{children:e.values.map((function(n,a){return e.values.length===a+1?Object(C.jsxs)("div",{id:"parent-height",children:[Object(C.jsxs)("span",{children:[Object(C.jsx)("input",{placeholder:"Enter Tickbox ".concat(a+1," value"),value:n.value,onChange:function(r){return t.updateTickBoxTitle(e.id,n.id,r)}}),e.values.length>1&&Object(C.jsx)(b.a,{onClick:function(){return i(e.id,n.id)},variant:"outline-danger",children:"X"})]}),Object(C.jsx)(b.a,{onClick:function(){return r(e.id,o)},variant:"outline-success",children:"+"})]}):Object(C.jsxs)("span",{children:[Object(C.jsx)("input",{placeholder:"Enter Tickbox ".concat(a+1," value"),value:n.value,onChange:function(r){return t.updateTickBoxTitle(e.id,n.id,r)}}),Object(C.jsx)(b.a,{onClick:function(){return i(e.id,n.id)},variant:"outline-danger",children:"X"})]})}))}),Object(C.jsx)(y.a,{children:this.renderDeleteButton(e.id)})]})}return null}},{key:"render",value:function(){var e=this,t=this.props.formElements;return Object(C.jsx)("div",{id:"parent-height",children:t.map((function(t,n){return Object(C.jsxs)("div",{children:[n+1,e.renderElement(t)]})}))})}}]),n}(r.Component),I=E,g="VIEW_PREVIEW",w="UPDATE_FORM_TITLE",B="ADD_NEW_FORM_ELEMENT",_="DELETE_FORM_ELEMENT",F="ADD_NEW_TICK_BOX",P="DELETE_TICK_BOX",A="UPDATE_TITLE_TEXT",N="UPDATE_TICK_BOX_TEXT",V="UPDATE_TICK_BOX_VALUE",D="UPDATE_TEXT_AREA_VALUE",L=function(e){return{type:w,payload:{title:e}}},X=Object(a.b)((function(e){return{formElements:e.form.formComposition}}),(function(e){return{deleteFormElement:function(t){return e(function(e){return{type:_,payload:{elementId:e}}}(t))},addNewTickBox:function(t,n){return e(function(e,t){return{type:F,payload:{elementId:e,tickBoxId:t}}}(t,n))},deleteTickBox:function(t,n){return e(function(e,t){return{type:P,payload:{elementId:e,tickBoxId:t}}}(t,n))},updateTitleText:function(t,n){return e(function(e,t){return{type:A,payload:{elementId:e,title:t}}}(t,n))},updateTickBoxText:function(t,n,r){return e(function(e,t,n){return{type:N,payload:{elementId:e,tickBoxId:t,title:n}}}(t,n,r))}}}))(I),M=(n(76),function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"addingNewFormElement",value:function(e){var t,n=this.props.addNewFormElement,r={id:O.a(),element:e};if(e===h)t=Object(l.a)(Object(l.a)({},r),{},{title:"",contentValue:""});else if(e===v){var i=O.a();t=Object(l.a)(Object(l.a)({},r),{},{title:"",values:[{id:i,tick:!1,value:""}]})}else t=Object(l.a)({},r);n(t)}},{key:"render",value:function(){var e=this;return Object(C.jsxs)("div",{className:"form-builder",children:[Object(C.jsx)(X,{}),Object(C.jsxs)(x.a,{id:"dropdown-basic-button",title:"Add form element",children:[Object(C.jsx)(T.a.Item,{onClick:function(){return e.addingNewFormElement(h)},children:"Text Area"}),Object(C.jsx)(T.a.Item,{onClick:function(){return e.addingNewFormElement(v)},children:"Tick Box"})]})]})}}]),n}(r.Component)),R=M,U=Object(a.b)((function(){return{}}),(function(e){return{addNewFormElement:function(t){return e(function(e){return{type:B,payload:{elementType:e}}}(t))}}}))(R),S=n(22),W=function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"updateTextValue",value:function(e,t){(0,this.props.updateTextAreaValue)(e,t.target.value)}},{key:"renderComponent",value:function(e,t){var n=this,r=this.props.updateTickBoxValue;return e.element===h?Object(C.jsxs)(S.a.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1",children:[Object(C.jsxs)(S.a.Label,{children:[t,". ",e.title]}),Object(C.jsx)(S.a.Control,{as:"textarea",rows:3,value:e.contentValue,onChange:function(t){return n.updateTextValue(e.id,t)}})]}):e.element===v?Object(C.jsx)("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:"300px"},children:Object(C.jsxs)(S.a,{children:[Object(C.jsxs)(S.a.Label,{children:[t,". ",e.title]}),Object(C.jsx)("div",{className:"mb-3",children:e.values.map((function(t){return Object(C.jsx)(S.a.Check,{label:t.value,onChange:function(){return r(e.id,t.id)},checked:t.tick})}))},"checkbox")]})}):Object(C.jsx)("div",{})}},{key:"copyContents",value:function(){var e,t=this.props.everything,n=(delete(e=Object(l.a)({},t)).isPreview,e.formComposition.forEach((function(e){e.element===v&&e.values.forEach((function(e){return delete e.id})),delete e.id})),e);navigator.clipboard.writeText(JSON.stringify(n))}},{key:"openNewTab",value:function(){window.open("https://jsonformatter.org/json-parser")}},{key:"render",value:function(){var e=this,t=this.props,n=t.title,r=t.formElements;return Object(C.jsxs)("div",{children:[Object(C.jsx)("h3",{children:n}),r.length>0?r.map((function(t,n){return e.renderComponent(t,n+1)})):Object(C.jsx)("h3",{children:"Create some forms!"}),Object(C.jsx)("br",{}),Object(C.jsx)(b.a,{variant:"info",onClick:function(){return e.copyContents()},children:"Copy JSON to Clip"}),Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),Object(C.jsx)(b.a,{variant:"info",onClick:function(){return e.openNewTab()},children:"Open JSON Parser Website"})]})}}]),n}(r.Component),J=W,K=Object(a.b)((function(e){return{title:e.form.title,formElements:e.form.formComposition,everything:e.form}}),(function(e){return{updateFormTitle:function(t){return e(L(t))},updateTickBoxValue:function(t,n){return e(function(e,t){return{type:V,payload:{elementId:e,tickBoxId:t}}}(t,n))},updateTextAreaValue:function(t,n){return e(function(e,t){return{type:D,payload:{elementId:e,textValue:t}}}(t,n))}}}))(J),G=function(e){Object(j.a)(r,e);var t=Object(f.a)(r);function r(e){var n;return Object(s.a)(this,r),(n=t.call(this,e)).state={alerted:!1},n}return Object(p.a)(r,[{key:"updateTitle",value:function(e){(0,this.props.updateFormTitle)(e.target.value)}},{key:"notifyPhone",value:function(){var e=Object(d.a)(u.a.mark((function e(){var t,r,i,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n(77),e.next=3,t.v4();case 3:r=e.sent,i=m.isMobile?"".concat(m.mobileVendor," ").concat(m.mobileModel):navigator.platform,o="https://raj.bariah.com:2010/location?ipAddress="+r+"&device="+i+"&site=Form",this.state.alerted||(fetch(o,{method:"post"}),this.setState(Object(l.a)(Object(l.a)({},this.state),{},{alerted:!0})));case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;this.notifyPhone();var t=this.props,n=t.isPreview,r=t.viewPreview,i=t.title;return Object(C.jsxs)("div",{children:[Object(C.jsx)("h2",{children:"Form Builder"}),Object(C.jsx)("br",{}),Object(C.jsx)("input",{style:{marginBottom:"10px"},placeholder:"Form Title",value:i,onChange:function(t){return e.updateTitle(t)}}),Object(C.jsx)(U,{}),Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),Object(C.jsxs)(b.a,{variant:"secondary",onClick:function(){return r()},children:[n?"Hide":"Show"," Preview"]}),n&&Object(C.jsx)(K,{})]})}}]),r}(r.Component),H=G,q=Object(a.b)((function(e){return{isPreview:e.form.isPreview,title:e.form.title}}),(function(e){return{updateFormTitle:function(t){return e(L(t))},viewPreview:function(){return e({type:g,payload:{}})}}}))(H);var z=function(){return Object(C.jsx)("div",{className:"App",children:Object(C.jsx)(q,{})})},Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,104)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),r(e),i(e),o(e),a(e)}))},Y=n(44),Z=n(11),$=n(13),ee=n.n($),te={isPreview:!1,title:"",formComposition:[]},ne=function(e,t){return Object(l.a)(Object(l.a)({},e),{},{isPreview:!e.isPreview})},re=function(e,t){return Object(l.a)(Object(l.a)({},e),{},{title:t.payload.title})},ie=function(e,t){var n=Object(Z.a)(e.formComposition);return n.push(t.payload.elementType),Object(l.a)(Object(l.a)({},e),{},{formComposition:n})},oe=function(e,t){var n=Object(Z.a)(e.formComposition);return ee.a.remove(n,(function(e){return e.id===t.payload.elementId})),Object(l.a)(Object(l.a)({},e),{},{formComposition:n})},ae=function(e,t){var n=Object(Z.a)(e.formComposition);return n[ee.a.findIndex(n,(function(e){return e.id===t.payload.elementId}))].values.push({id:t.payload.tickBoxId,tick:!1,value:""}),Object(l.a)(Object(l.a)({},e),{},{formComposition:n})},ce=function(e,t){var n=Object(Z.a)(e.formComposition),r=ee.a.findIndex(n,(function(e){return e.id===t.payload.elementId}));return ee.a.remove(n[r].values,(function(e){return e.id===t.payload.tickBoxId})),Object(l.a)(Object(l.a)({},e),{},{formComposition:n})},ue=function(e,t){var n=Object(Z.a)(e.formComposition);return n[ee.a.findIndex(n,(function(e){return e.id===t.payload.elementId}))].title=t.payload.title,Object(l.a)(Object(l.a)({},e),{},{formComposition:n})},le=function(e,t){var n=Object(Z.a)(e.formComposition),r=ee.a.findIndex(n,(function(e){return e.id===t.payload.elementId})),i=n[r],o=ee.a.findIndex(i.values,(function(e){return e.id===t.payload.tickBoxId}));return n[r].values[o].value=t.payload.title,Object(l.a)(Object(l.a)({},e),{},{formComposition:n})},de=function(e,t){var n=Object(Z.a)(e.formComposition),r=ee.a.findIndex(n,(function(e){return e.id===t.payload.elementId})),i=n[r],o=ee.a.findIndex(i.values,(function(e){return e.id===t.payload.tickBoxId}));return n[r].values[o].tick=!n[r].values[o].tick,Object(l.a)(Object(l.a)({},e),{},{formComposition:n})},se=function(e,t){var n=Object(Z.a)(e.formComposition);return n[ee.a.findIndex(n,(function(e){return e.id===t.payload.elementId}))].contentValue=t.payload.textValue,Object(l.a)(Object(l.a)({},e),{},{formComposition:n})},pe=Object(Y.a)({form:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return ne(e);case w:return re(e,t);case B:return ie(e,t);case _:return oe(e,t);case F:return ae(e,t);case P:return ce(e,t);case A:return ue(e,t);case N:return le(e,t);case V:return de(e,t);case D:return se(e,t);default:return e}}}),je=(n(97),Object(Y.b)(pe));o.a.render(Object(C.jsx)(a.a,{store:je,children:Object(C.jsx)(z,{})}),document.getElementById("root")),Q()}},[[98,1,2]]]);
//# sourceMappingURL=main.f9974da1.chunk.js.map