(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{2555:function(e,a,t){"use strict";t.r(a);var l=t(17),n=t(10),s=t(11),r=t(13),m=t(12),c=t(14),i=t(0),o=t.n(i),d=t(15),u=t(1),f=t(5),h=t.n(f),p=t(32),b=t(7),g=t(3),v=function(e){function a(){var e,t;Object(n.a)(this,a);for(var s=arguments.length,c=new Array(s),i=0;i<s;i++)c[i]=arguments[i];return(t=Object(r.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={email:"",password:"",remember:!0},t.handleChange=function(e){t.setState(b.a.set(Object(l.a)({},t.state),e.target.name,"checkbox"===e.target.type?e.target.checked:e.target.value))},t}return Object(c.a)(a,e),Object(s.a)(a,[{key:"canBeSubmitted",value:function(){var e=this.state,a=e.email,t=e.password;return a.length>0&&t.length>0}},{key:"render",value:function(){var e=this.props.classes,a=this.state,t=a.email,l=a.password,n=a.remember;return o.a.createElement("div",{className:h()(e.root,"flex flex-col flex-auto flex-no-shrink p-24 md:flex-row md:p-0")},o.a.createElement("div",{className:h()(e.intro,"flex flex-col flex-no-grow items-center p-16 text-center md:p-128 md:items-start md:flex-no-shrink md:flex-1 md:text-left")},o.a.createElement(g.d,{animation:"transition.expandIn"},o.a.createElement("img",{className:"w-128 mb-32",src:"assets/images/logos/fuse.svg",alt:"logo"})),o.a.createElement(g.d,{animation:"transition.slideUpIn",delay:300},o.a.createElement(u.vb,{variant:"h3",color:"inherit",className:"font-light"},"Welcome to the FUSE!")),o.a.createElement(g.d,{delay:400},o.a.createElement(u.vb,{variant:"subtitle1",color:"inherit",className:"max-w-512 mt-16"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisl erat, vel convallis elit fermentum pellentesque. Sed mollis velit facilisis facilisis."))),o.a.createElement(g.d,{animation:{translateX:[0,"100%"]}},o.a.createElement(u.d,{className:h()(e.card,"mx-auto m-16 md:m-0")},o.a.createElement(u.f,{className:"flex flex-col items-center justify-center p-32 md:p-48 md:pt-128 "},o.a.createElement(u.vb,{variant:"h6",className:"md:w-full mb-32"},"LOGIN TO YOUR ACCOUNT"),o.a.createElement("form",{name:"loginForm",noValidate:!0,className:"flex flex-col justify-center w-full"},o.a.createElement(u.sb,{className:"mb-16",label:"Email",autoFocus:!0,type:"email",name:"email",value:t,onChange:this.handleChange,variant:"outlined",required:!0,fullWidth:!0}),o.a.createElement(u.sb,{className:"mb-16",label:"Password",type:"password",name:"password",value:l,onChange:this.handleChange,variant:"outlined",required:!0,fullWidth:!0}),o.a.createElement("div",{className:"flex items-center justify-between"},o.a.createElement(u.x,null,o.a.createElement(u.y,{control:o.a.createElement(u.h,{name:"remember",checked:n,onChange:this.handleChange}),label:"Remember Me"})),o.a.createElement(p.a,{className:"font-medium",to:"/pages/auth/forgot-password-2"},"Forgot Password?")),o.a.createElement(u.c,{variant:"contained",color:"primary",className:"w-full mx-auto mt-16","aria-label":"LOG IN",disabled:!this.canBeSubmitted()},"LOGIN")),o.a.createElement("div",{className:"my-24 flex items-center justify-center"},o.a.createElement(u.q,{className:"w-32"}),o.a.createElement("span",{className:"mx-8 font-bold"},"OR"),o.a.createElement(u.q,{className:"w-32"})),o.a.createElement(u.c,{variant:"contained",color:"secondary",size:"small",className:"normal-case w-192 mb-8"},"Log in with Google"),o.a.createElement(u.c,{variant:"contained",color:"primary",size:"small",className:"normal-case w-192"},"Log in with Facebook"),o.a.createElement("div",{className:"flex flex-col items-center justify-center pt-32 pb-24"},o.a.createElement("span",{className:"font-medium"},"Don't have an account?"),o.a.createElement(p.a,{className:"font-medium",to:"/pages/auth/register-2"},"Create an account"))))))}}]),a}(i.Component);a.default=Object(d.withStyles)(function(e){return{root:{background:"url('/assets/images/backgrounds/dark-material-bg.jpg') no-repeat",backgroundSize:"cover"},intro:{color:"#ffffff"},card:{width:"100%",maxWidth:400}}},{withTheme:!0})(v)}}]);
//# sourceMappingURL=26.64f84569.chunk.js.map