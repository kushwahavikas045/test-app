(this["webpackJsonptest-app"]=this["webpackJsonptest-app"]||[]).push([[0],{62:function(e,t,a){},66:function(e,t,a){},86:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var s=a(4),n=a(0),r=a(20),i=a.n(r),c=(a(62),a(32)),l=a.n(c),o=a(45),h=a(54),j=(a(29),a(97)),d=a(92);var b=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)(Object(o.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://reqres.in/api/users?page=2");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,r(a.data);case 7:case"end":return e.stop()}}),e)})))),Object(s.jsxs)("div",{children:[Object(s.jsx)(j.a,{variant:"success",children:Object(s.jsx)(j.a.Heading,{children:"User details table"})}),Object(s.jsxs)(d.a,{striped:!0,bordered:!0,hover:!0,children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"First name"}),Object(s.jsx)("th",{children:"Last name"}),Object(s.jsx)("th",{children:"Email"}),Object(s.jsx)("th",{children:"User image"})]})}),Object(s.jsx)("tbody",{children:a.length&&a.map((function(e){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:e.first_name}),Object(s.jsx)("td",{children:e.last_name}),Object(s.jsx)("td",{children:e.email}),Object(s.jsx)("td",{children:Object(s.jsx)("img",{style:{borderRadius:"50%"},src:e.avatar})})]},e.id)}))})]})]})},m=a(48),u=a(49),p=a(50),x=a(56),O=a(55),f=(a(66),a(98)),g=a(94),v=a(93),y=a(51),C=a.n(y),w=function(e){Object(x.a)(a,e);var t=Object(O.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).state={first_name:"",last_name:"",email:"",image:"",message:"",loading:!1},e}return Object(p.a)(a,[{key:"dataChange",value:function(e){this.setState(Object(m.a)({},e.target.name,e.target.value))}},{key:"handlecancel",value:function(e){e.preventDefault(),window.location.href="/"}},{key:"postData",value:function(e){var t=this;e.preventDefault();var a=this.state.first_name,s=this.state.last_name,n=this.state.email,r=this.state.image;this.state.message;this.setState({loading:!0});var i={first_name:a,last_name:s,email:n,image:r};C.a.post("https://reqres.in/api/users",i).then((function(e){console.log(e,"response"),201==e.status?window.location.href="/":console.log("error"),console.log(e.data.data),t.setState({message:e.data})})).catch((function(e){console.log(e)}))}},{key:"LoadorShow",value:function(){return this.state.loading?Object(s.jsx)("p",{children:"loading..."}):Object(s.jsxs)("p",{children:[this.state.message," "]})}},{key:"render",value:function(){return Object(s.jsxs)(f.a,{body:!0,style:{marginTop:"20px",width:"20rem",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"},children:[Object(s.jsxs)(g.a,{onSubmit:this.postData.bind(this),action:"/",children:[Object(s.jsxs)(g.a.Group,{controlId:"formBasicText",children:[Object(s.jsx)(g.a.Label,{children:"First Name:"}),Object(s.jsx)(g.a.Control,{type:"text",name:"first_name",value:this.state.first_name,onChange:this.dataChange.bind(this),placeholder:"First name",required:!0})]}),Object(s.jsxs)(g.a.Group,{controlId:"formBasicText",children:[Object(s.jsx)(g.a.Label,{children:"Last Name:"}),Object(s.jsx)(g.a.Control,{type:"text",name:"last_name",value:this.state.last_name,onChange:this.dataChange.bind(this),placeholder:"last name",required:!0})]}),Object(s.jsxs)(g.a.Group,{controlId:"formBasicEmail",children:[Object(s.jsx)(g.a.Label,{children:"Email"}),Object(s.jsx)(g.a.Control,{type:"email",name:"email",value:this.state.email,placeholder:"email",onChange:this.dataChange.bind(this),required:!0})]}),Object(s.jsxs)(g.a.Group,{controlId:"formBasicPassword",children:[Object(s.jsx)(g.a.Label,{children:"pofile image"}),Object(s.jsx)(g.a.Control,{type:"file",name:"image",value:this.state.image,placeholder:"jpeg,png format",onChange:this.dataChange.bind(this),required:!0})]}),Object(s.jsx)(v.a,{variant:"primary",type:"submit",style:{marginRight:"40px"},children:"Submit"}),Object(s.jsx)(v.a,{variant:"danger",onClick:this.handlecancel,children:"Cancel"})]}),this.LoadorShow()]})}}]),a}(n.Component),_=(a(86),a(96)),k=a(95);var L=function(){return Object(s.jsxs)(_.a,{bg:"light",expand:"lg",children:[Object(s.jsx)(_.a.Brand,{href:"#home",children:"React-Bootstrap"}),Object(s.jsx)(_.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(s.jsx)(_.a.Collapse,{id:"basic-navbar-nav",children:Object(s.jsxs)(k.a,{className:"mr-auto",children:[Object(s.jsx)(k.a.Link,{href:"/Userform",children:"Userform"}),Object(s.jsx)(k.a.Link,{href:"/",children:"Usertable"})]})})]})},S=a(52),B=a(6);var q=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)(S.a,{children:[Object(s.jsx)(L,{}),Object(s.jsx)(B.a,{exact:!0,path:"/",component:b}),Object(s.jsx)(B.a,{path:"/userform",component:w})]})})};i.a.render(Object(s.jsx)(q,{}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.049fda5f.chunk.js.map