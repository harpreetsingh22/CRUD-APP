(this["webpackJsonpcrud-operations"]=this["webpackJsonpcrud-operations"]||[]).push([[0],{66:function(e,t,n){},67:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(24),s=n.n(r),i=(n(66),n.p,n(67),n(110)),o=n(123),u=n(112),j=n(9),l=n(18),b=n(2),d=Object(i.a)({header:{background:"#111111"},tabs:{color:"#FFFFFF",marginRight:20,textDecoration:"none",fontSize:20}}),h=function(){var e=d();Object(j.f)();return Object(b.jsx)(o.a,{position:"static",className:e.header,children:Object(b.jsxs)(u.a,{children:[Object(b.jsx)(l.c,{className:e.tabs,to:"./",exact:!0,children:"Code for Interview"}),Object(b.jsx)(l.c,{className:e.tabs,to:"all",exact:!0,children:"All Users"}),Object(b.jsx)(l.c,{className:e.tabs,to:"add",exact:!0,children:"Add User"})]})})},O=n(8),x=n.n(O),p=n(16),f=n(27),m=n(34),v=n.n(m),g="http://localhost:8000/users",w=function(){var e=Object(p.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=t||"",e.next=3,v.a.get("".concat(g,"/").concat(t));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(p.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post("".concat(g,"/add"),t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(p.a)(x.a.mark((function e(t,n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.put("".concat(g,"/").concat(t),n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),k=function(){var e=Object(p.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.delete("".concat(g,"/").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=n(113),C=n(114),E=n(115),U=n(116),S=n(120),P=n(117),A=Object(i.a)({table:{width:"90%",margin:"50px 0 0 50px"},thead:{"& > *":{fontSize:20,background:"#000000",color:"#FFFFFF"}},row:{"& > *":{fontSize:18}}}),D=function(){var e=A(),t=Object(a.useState)([]),n=Object(f.a)(t,2),c=n[0],r=n[1];Object(a.useEffect)((function(){s()}),[c]);var s=function(){var e=Object(p.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:t=e.sent,console.log(t.data),r(t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(p.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(t);case 2:s();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)(N.a,{className:e.table,children:[Object(b.jsx)(C.a,{children:Object(b.jsxs)(E.a,{className:e.thead,children:[Object(b.jsx)(U.a,{children:"ID"}),Object(b.jsx)(U.a,{children:"Name"}),Object(b.jsx)(U.a,{children:"UserName"}),Object(b.jsx)(U.a,{children:"Email"}),Object(b.jsx)(U.a,{children:"Phone"}),Object(b.jsx)(U.a,{}),Object(b.jsx)(U.a,{})]})}),c.map((function(t){return Object(b.jsxs)(E.a,{className:e.row,children:[Object(b.jsx)(U.a,{children:t._id}),Object(b.jsx)(U.a,{children:t.name}),Object(b.jsx)(U.a,{children:t.username}),Object(b.jsx)(U.a,{children:t.email}),Object(b.jsx)(U.a,{children:t.phone}),Object(b.jsxs)(U.a,{children:[Object(b.jsx)(S.a,{color:"primary",variant:"contained",style:{marginRight:10},component:l.b,to:"/edit/".concat(t._id),children:"Edit"}),Object(b.jsx)(S.a,{color:"secondary",variant:"contained",onClick:function(){return i(t._id)},children:"Delete"})]})]})})),Object(b.jsx)(P.a,{})]})},I=n(25),T=n(29),z=n(118),_=n(119),B=n(124),J=n(122),L=n(121),R=Object(i.a)({container:{width:"50%",margin:"5% 0 0 25%","& > *":{marginTop:20}}}),M={name:"",username:"",email:"",phone:""},q=function(){var e=R(),t=Object(a.useState)(M),n=Object(f.a)(t,2),c=n[0],r=n[1],s=c.name,i=c.username,o=c.email,u=c.phone,l=Object(j.f)(),d=function(e){console.log(e.target.value),r(Object(T.a)(Object(T.a)({},c),{},Object(I.a)({},e.target.name,e.target.value))),console.log(c)},h=function(){var e=Object(p.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(c);case 2:l.push("./all");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)(z.a,{className:e.container,children:[Object(b.jsx)(_.a,{variant:"h4",children:"Add User "}),Object(b.jsxs)(B.a,{children:[Object(b.jsx)(J.a,{children:"Name"}),Object(b.jsx)(L.a,{onChange:function(e){return d(e)},name:"name",value:s})]}),Object(b.jsxs)(B.a,{children:[Object(b.jsx)(J.a,{children:"UserName"}),Object(b.jsx)(L.a,{onChange:function(e){return d(e)},name:"username",value:i})]}),Object(b.jsxs)(B.a,{children:[Object(b.jsx)(J.a,{children:"Email"}),Object(b.jsx)(L.a,{onChange:function(e){return d(e)},name:"email",value:o})]}),Object(b.jsxs)(B.a,{children:[Object(b.jsx)(J.a,{children:"Phone"}),Object(b.jsx)(L.a,{onChange:function(e){return d(e)},name:"phone",value:u})]}),Object(b.jsx)(S.a,{onClick:function(){return h()},variant:"contained",color:"primary",children:"Add User "})]})},G=n.p+"static/media/crud.31c4b0ca.jpg",H=function(){return Object(b.jsx)("img",{src:G,alt:"notfound",style:{width:"30%",margin:"80px 0 0 35%"}})},K=Object(i.a)({container:{width:"50%",margin:"5% 0 0 25%","& > *":{marginTop:20}}}),Q={name:"",username:"",email:"",phone:""},V=function(){var e=K(),t=Object(a.useState)(Q),n=Object(f.a)(t,2),c=n[0],r=n[1],s=c.name,i=c.username,o=c.email,u=c.phone,l=Object(j.g)().id,d=Object(j.f)();Object(a.useEffect)((function(){h()}),[]);var h=function(){var e=Object(p.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(l);case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(p.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F(l,c);case 2:e.sent,d.push("/all");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(e){console.log(e.target.value),r(Object(T.a)(Object(T.a)({},c),{},Object(I.a)({},e.target.name,e.target.value))),console.log(c)};return Object(b.jsxs)(z.a,{className:e.container,children:[Object(b.jsx)(_.a,{variant:"h4",children:"Edit User "}),Object(b.jsxs)(B.a,{children:[Object(b.jsx)(J.a,{children:"Name"}),Object(b.jsx)(L.a,{onChange:function(e){return m(e)},name:"name",value:s})]}),Object(b.jsxs)(B.a,{children:[Object(b.jsx)(J.a,{children:"UserName"}),Object(b.jsx)(L.a,{onChange:function(e){return m(e)},name:"username",value:i})]}),Object(b.jsxs)(B.a,{children:[Object(b.jsx)(J.a,{children:"Email"}),Object(b.jsx)(L.a,{onChange:function(e){return m(e)},name:"email",value:o})]}),Object(b.jsxs)(B.a,{children:[Object(b.jsx)(J.a,{children:"Phone"}),Object(b.jsx)(L.a,{onChange:function(e){return m(e)},name:"phone",value:u})]}),Object(b.jsx)(S.a,{onClick:function(){return O()},variant:"contained",color:"primary",children:"Edit User "})]})},W=n.p+"static/media/NotFound.b684e5be.jpg",X=function(){return Object(b.jsx)("img",{src:W,alt:"notfound",style:{width:"30%",margin:"80px 0 0 35%"}})};var Y=function(){return Object(b.jsxs)(l.a,{children:[Object(b.jsx)(h,{}),Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{exact:!0,path:"/",component:H}),Object(b.jsx)(j.a,{exact:!0,path:"/all",component:D}),Object(b.jsx)(j.a,{exact:!0,path:"/add",component:q}),Object(b.jsx)(j.a,{exact:!0,path:"/edit/:id",component:V}),Object(b.jsx)(j.a,{component:X})]})]})},Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,126)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(Y,{})}),document.getElementById("root")),Z()}},[[93,1,2]]]);
//# sourceMappingURL=main.911fe458.chunk.js.map