(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{145:function(e,t,a){},146:function(e,t,a){},180:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(11),s=a.n(c),l=(a(145),a(146),a(76)),r=a(77),o=a(87),d=a(86),j=a(78),h=a(4),u=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(h.jsx)("li",{id:this.props.item,children:Object(h.jsx)(j.b,{to:this.props.tolink,onClick:this.props.activec.bind(this,this.props.item),children:this.props.item})})}}]),a}(n.Component),b=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={NavItemActive:""},e.activeitem=function(t){e.state.NavItemActive.length>0&&document.getElementById(e.state.NavItemActive).classList.remove("active"),e.setState({NavItemActive:t},(function(){document.getElementById(e.state.NavItemActive).classList.add("active")}))},e}return Object(r.a)(a,[{key:"render",value:function(){return Object(h.jsx)("nav",{children:Object(h.jsxs)("ul",{children:[Object(h.jsx)(u,{className:"home",item:"First Page",tolink:"/",activec:this.activeitem}),Object(h.jsx)(u,{item:"Second Page",tolink:"/second",activec:this.activeitem}),Object(h.jsx)(u,{item:"Third Page",tolink:"/third",activec:this.activeitem})]})})}}]),a}(n.Component),O=a(14),m=a(21),x=a(209),p=a(211),g=a(213),v=a(227),f=a(228),y=a(223),C=a(230),N=a(186),S=a(214),P=a(19),w=a(222),A=a(224),L=a(212),I=a(119),T=a(56),E=a(106),B=Object(x.a)((function(e){return Object(p.a)({root:{"& > *":{margin:e.spacing(3)}},formControl:{minWidth:230},datePicker:{marginLeft:"25px",marginTop:"25px"},textArea:{width:"500px",fontSize:"16px",padding:"10px"}})})),R=function(){var e=B(),t=Object(n.useState)(""),a=Object(m.a)(t,2),i=a[0],c=a[1],s=Object(n.useState)(""),l=Object(m.a)(s,2),r=l[0],o=l[1],d=Object(n.useState)(new Date("2014-08-18T21:11:54")),j=Object(m.a)(d,2),u=j[0],b=j[1],O=Object(n.useState)(""),x=Object(m.a)(O,2),p=x[0],R=x[1],G=Object(n.useState)(""),k=Object(m.a)(G,2),D=k[0],F=k[1],_=Object(n.useState)(""),M=Object(m.a)(_,2),V=M[0],z=M[1],H=Object(n.useState)(""),J=Object(m.a)(H,2),W=J[0],K=J[1],q=Object(n.useState)(!1),Q=Object(m.a)(q,2),U=Q[0],X=Q[1];Object(n.useEffect)((function(){return window.addEventListener("beforeunload",Y),function(){window.removeEventListener("beforeunload",Y)}}),[]);var Y=function(e){e.preventDefault();var t="Are you sure you want to leave?";return e.returnValue=t,t};return Object(h.jsxs)(h.Fragment,{children:[U&&Object(h.jsx)("div",{className:"sucessMessage",children:Object(h.jsxs)(A.a,{severity:"success",children:[Object(h.jsx)(L.a,{children:"Success"}),"Data Inserted \u2014 ",Object(h.jsx)("strong",{children:"Successfully!"})]})}),Object(h.jsxs)("div",{className:"condiv home",style:{marginTop:"50px"},children:[Object(h.jsx)("h1",{children:"RSVP Registration Form"}),Object(h.jsxs)("form",{className:e.root,noValidate:!0,autoComplete:"off",children:[Object(h.jsxs)("div",{children:[Object(h.jsxs)(g.a,{variant:"outlined",style:{margin:"20px"},children:[Object(h.jsx)(v.a,{htmlFor:"component-outlined",children:"Name"}),Object(h.jsx)(f.a,{id:"component-outlined",label:"Name",value:i,onChange:function(e){return c(e.target.value)}})]}),Object(h.jsxs)(g.a,{variant:"outlined",style:{margin:"20px"},children:[Object(h.jsx)(v.a,{htmlFor:"component-outlined",children:"Age"}),Object(h.jsx)(f.a,{id:"component-outlined",label:"Age",value:r,onChange:function(e){return o(e.target.value)}})]}),Object(h.jsx)(P.a,{utils:I.a,children:Object(h.jsx)(w.a,{variant:"inline",allowKeyboardControl:!0,format:"dd/MM/yyyy",margin:"dense",label:"Date of Birth",value:u,onChange:function(e){b(e)},KeyboardButtonProps:{"aria-label":"change date"},className:e.datePicker})})]}),Object(h.jsxs)("div",{children:[Object(h.jsxs)(g.a,{variant:"outlined",className:e.formControl,style:{margin:"20px"},children:[Object(h.jsx)(v.a,{id:"demo-simple-select-filled-label",children:"Profession"}),Object(h.jsxs)(y.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:p,onChange:function(e){R(e.target.value)},label:"Profession",children:[Object(h.jsx)(C.a,{value:"Employee",children:"Employee"}),Object(h.jsx)(C.a,{value:"Student",children:"Student"})]})]}),Object(h.jsxs)(g.a,{variant:"outlined",className:e.formControl,style:{margin:"20px"},children:[Object(h.jsx)(v.a,{id:"demo-simple-select-filled-label",children:"Locality"}),Object(h.jsxs)(y.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:D,onChange:function(e){F(e.target.value)},label:"Locality",children:[Object(h.jsx)(C.a,{value:"Chennai",children:"Chennai"}),Object(h.jsx)(C.a,{value:"Mumbai",children:"Mumbai"}),Object(h.jsx)(C.a,{value:"Hyderabad",children:"Hyderabad"}),Object(h.jsx)(C.a,{value:"Bangalore",children:"Bangalore"})]})]}),Object(h.jsxs)(g.a,{variant:"outlined",className:e.formControl,style:{margin:"20px"},children:[Object(h.jsx)(v.a,{id:"demo-simple-select-filled-label",children:"No.of Guests"}),Object(h.jsxs)(y.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:V,onChange:function(e){z(e.target.value)},label:"No.of Guests",children:[Object(h.jsx)(C.a,{value:0,children:"0"}),Object(h.jsx)(C.a,{value:1,children:"1"}),Object(h.jsx)(C.a,{value:2,children:"2"})]})]})]}),Object(h.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(h.jsx)(N.a,{minRows:5,minLength:100,placeholder:"Enter your Address",className:e.textArea,value:W,onChange:function(e){return K(e.target.value)}})}),Object(h.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(h.jsx)(S.a,{size:"large",variant:"contained",color:"primary",onClick:function(e){var t={name:i,age:parseInt(r),dob:null===u||void 0===u?void 0:u.toDateString(),profession:p,locality:D,numberOfGuests:parseInt(V),address:W};E("".concat(T.API_PROD,"/save"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(){c(""),o(""),R(""),F(""),z(""),K(""),X(!0),setTimeout((function(){X(!1)}),3e3)}))},children:"Submit"})})]})]})]})},G=a(217),k=a(221),D=a(220),F=a(216),_=a(218),M=a(219),V=a(107),z=a(117),H=a.n(z),J=a(106),W=Object(x.a)({table:{minWidth:700},heading:{fontSize:"18px",fontWeight:"bold"},details:{fontSize:"16px"}}),K=function(){var e=W(),t=Object(n.useState)(),a=Object(m.a)(t,2),i=a[0],c=a[1],s=Object(n.useState)(""),l=Object(m.a)(s,2),r=l[0],o=l[1];Object(n.useEffect)((function(){J("".concat(T.API_PROD,"/show"),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return c(e)}))}),[]);var d=function(e){var t=null===i||void 0===i?void 0:i.filter((function(t){return t.locality.toLowerCase().includes(e.toLowerCase())||t.name.toLowerCase().includes(e.toLowerCase())}));c(t)};return Object(h.jsx)("div",{className:"condiv home",children:Object(h.jsxs)(V.a,{variant:"outlined",style:{width:1200,marginRight:"60px"},children:[Object(h.jsx)(H.a,{cancelOnEscape:!0,value:r,onChange:function(e){return d(e)},onCancelSearch:function(){return o(""),void d(r)}}),Object(h.jsx)(F.a,{component:V.a,children:Object(h.jsxs)(G.a,{className:e.table,"aria-label":"simple table",children:[Object(h.jsx)(_.a,{children:Object(h.jsxs)(M.a,{children:[Object(h.jsx)(D.a,{align:"center",className:e.heading,children:"Name"}),Object(h.jsx)(D.a,{align:"center",className:e.heading,children:"Age"}),Object(h.jsx)(D.a,{align:"center",className:e.heading,children:"Date of Birth"}),Object(h.jsx)(D.a,{align:"center",className:e.heading,children:"Profession"}),Object(h.jsx)(D.a,{align:"center",className:e.heading,children:"Locality"}),Object(h.jsx)(D.a,{align:"center",className:e.heading,children:"No.of Guests"}),Object(h.jsx)(D.a,{align:"right",className:e.heading,children:"Address"})]})}),Object(h.jsx)(k.a,{children:null===i||void 0===i?void 0:i.map((function(t){return Object(h.jsxs)(M.a,{children:[Object(h.jsx)(D.a,{align:"center",className:e.details,children:t.name}),Object(h.jsx)(D.a,{align:"center",className:e.details,children:t.age}),Object(h.jsx)(D.a,{align:"center",className:e.details,children:t.dob}),Object(h.jsx)(D.a,{align:"center",className:e.details,children:t.profession}),Object(h.jsx)(D.a,{align:"center",className:e.details,children:t.locality}),Object(h.jsx)(D.a,{align:"center",className:e.details,children:t.numberOfGuests}),Object(h.jsx)(D.a,{align:"right",className:e.details,children:t.address})]},t._id)}))})]})})]})})},q=a(66),Q=function(){var e,t,a,i=Object(n.useState)(),c=Object(m.a)(i,2),s=c[0],l=c[1],r=0,o=0,d=0,j=0,u=0,b=0,O=0,x=0,p=0,g=0,v=0,f=0,y=0;return Object(n.useEffect)((function(){fetch("".concat(T.API_PROD,"/show"),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return l(e)}))}),[]),null===s||void 0===s||s.forEach((function(e){e.age>13&&e.age<18?r++:e.age>18&&e.age<25?o++:e.age>25&&d++,"Employee"===e.profession?j++:u++,"Chennai"===e.locality?b++:"Mumbai"===e.locality?O++:"Hyderabad"===e.locality?p++:"Bangalore"===e.locality&&x++,0===e.numberOfGuests?v++:1===e.numberOfGuests?f++:2===e.numberOfGuests&&y++,g++})),e=v/g*100,t=f/g*100,a=y/g*100,Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"condiv home",children:[Object(h.jsxs)("div",{className:"chart__wrapper",children:[Object(h.jsx)("div",{style:{marginRight:"40px"},children:Object(h.jsx)(q.a,{width:"500px",height:"300px",chartType:"Bar",loader:Object(h.jsx)("div",{children:"Loading Chart"}),data:[["Age","Count"],["13-18",r],["18-25",o],["25+",d]],options:{chart:{title:"RSVP Age Group",subtitle:"Count of person in a certain age group"}}})}),Object(h.jsx)("div",{children:Object(h.jsx)(q.a,{width:"500px",height:"300px",chartType:"Bar",loader:Object(h.jsx)("div",{children:"Loading Chart"}),data:[["Profession","Count"],["Student",u],["Employee",j]],options:{chart:{title:"RSVP Profession",subtitle:"Count of person based on their profession"}}})})]}),Object(h.jsxs)("div",{className:"chart__wrapper",style:{marginTop:"50px"},children:[Object(h.jsx)("div",{style:{marginRight:"40px"},children:Object(h.jsx)(q.a,{width:"500px",height:"300px",chartType:"Bar",loader:Object(h.jsx)("div",{children:"Loading Chart"}),data:[["Cities","Count"],["Chennai",b],["Mumbai",O],["Bangalore",x],["Hyderabad",p]],options:{chart:{title:"RSVP Locality",subtitle:"Count of person based on their Locality"}}})}),Object(h.jsx)("div",{children:Object(h.jsx)(q.a,{width:"500px",height:"300px",chartType:"Bar",loader:Object(h.jsx)("div",{children:"Loading Chart"}),data:[["No.of Guests","Average"],["0",e],["1",t],["2",a]],options:{chart:{title:"RSVP Guests",subtitle:"Average of guests attended"}}})})]})]})})};var U=function(){return Object(h.jsx)(j.a,{children:Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("div",{className:"left",children:Object(h.jsx)(b,{})}),Object(h.jsxs)("div",{className:"right",children:[Object(h.jsx)(O.a,{exact:!0,path:"/",children:Object(h.jsx)(R,{})}),Object(h.jsx)(O.a,{exact:!0,path:"/second",children:Object(h.jsx)(K,{})}),Object(h.jsx)(O.a,{exact:!0,path:"/third",children:Object(h.jsx)(Q,{})})]})]})})},X=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,231)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),i(e),c(e),s(e)}))};s.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(U,{})}),document.getElementById("root")),X()},56:function(e,t){t.API_PROD="http://3.108.40.131:8000/api",t.API_LOCAL="http://localhost:8000/api"}},[[180,1,2]]]);
//# sourceMappingURL=main.fd6b8df7.chunk.js.map