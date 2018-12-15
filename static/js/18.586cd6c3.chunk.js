(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1760:function(e,t,a){"use strict";var n=a(71),r=a.n(n),c="[ACADEMY APP] GET COURSES",o="[ACADEMY APP] GET CATEGORIES",u="[ACADEMY APP] SET COURSES SEARCH TEXT",l="[ACADEMY APP] SET COURSES CATEGORY FILTER";function s(){var e=r.a.get("/api/academy-app/courses");return function(t){return e.then(function(e){return t({type:c,payload:e.data})})}}function i(){var e=r.a.get("/api/academy-app/categories");return function(t){return e.then(function(e){return t({type:o,payload:e.data})})}}function p(e){return{type:u,searchText:e.target.value}}function d(e){return{type:l,category:e.target.value}}var f=a(17),m=a(50),h="[ACADEMY APP] GET COURSE",v="[ACADEMY APP] SAVE COURSE",E="[ACADEMY APP] UPDATE COURSE";function y(e){var t=r.a.get("/api/academy-app/course",{params:e});return function(e){return t.then(function(t){return e({type:h,payload:t.data})})}}function b(e){return function(t,a){var n=a().academyApp.course.id;r.a.post("/api/academy-app/course/update",Object(f.a)({id:n},e)).then(function(e){return t(Object(m.A)({message:"Course Updated"})),t({type:E,payload:e.data})})}}a.d(t,"c",function(){return c}),a.d(t,"a",function(){return o}),a.d(t,"f",function(){return u}),a.d(t,"e",function(){return l}),a.d(t,"j",function(){return s}),a.d(t,"h",function(){return i}),a.d(t,"l",function(){return p}),a.d(t,"k",function(){return d}),a.d(t,"b",function(){return h}),a.d(t,"d",function(){return v}),a.d(t,"g",function(){return E}),a.d(t,"i",function(){return y}),a.d(t,"m",function(){return b})},1839:function(e,t,a){"use strict";var n=a(19),r=a(17),c=a(1760),o={data:[],categories:[],searchText:"",categoryFilter:"all"},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.c:return Object(r.a)({},e,{data:t.payload});case c.a:return Object(r.a)({},e,{categories:t.payload});case c.f:return Object(r.a)({},e,{searchText:t.searchText});case c.e:return Object(r.a)({},e,{categoryFilter:t.category});default:return e}},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.b:case c.d:return Object(r.a)({},t.payload);case c.g:return Object(r.a)({},e,t.payload);default:return e}},s=Object(n.d)({courses:u,course:l});t.a=s},2547:function(e,t,a){"use strict";a.r(t);var n=a(10),r=a(11),c=a(13),o=a(12),u=a(14),l=a(0),s=a.n(l),i=a(3),p=a(1),d=a(15),f=a(235),m=a(19),h=a(1839),v=a(1760),E=a(126),y=a(307),b=a.n(y),g=a(1782),C=a.n(g),A=a(63),S=a(32),O=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,u=new Array(r),l=0;l<r;l++)u[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(u)))).handleChangeActiveStep=function(e){a.props.updateCourse({activeStep:e+1})},a.handleNext=function(){a.props.updateCourse({activeStep:a.props.course.activeStep+1})},a.handleBack=function(){a.props.updateCourse({activeStep:a.props.course.activeStep-1})},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.getCourse(this.props.match.params)}},{key:"componentDidUpdate",value:function(e,t,a){this.props.course&&0===this.props.course.activeStep&&this.props.updateCourse({activeStep:1})}},{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.course,r=n&&0!==n.activeStep?n.activeStep:1;return s.a.createElement(i.s,{classes:{root:a.layoutRoot,content:a.layoutContent,header:a.layoutHeader},header:s.a.createElement("div",{className:"flex flex-1 items-center"},s.a.createElement(p.G,{lgUp:!0},s.a.createElement(p.I,{onClick:function(t){return e.pageLayout.toggleLeftSidebar()},"aria-label":"open left sidebar"},s.a.createElement(p.H,null,"menu"))),s.a.createElement(p.I,{className:"mr-16",to:"/apps/academy/courses",component:S.a},s.a.createElement(p.H,null,"arrow_back")),n&&s.a.createElement(p.vb,{className:"flex-1 text-20"},n.title)),content:n&&s.a.createElement("div",{className:"flex flex-1 relative overflow-hidden"},s.a.createElement(i.t,{className:"w-full overflow-auto"},s.a.createElement(C.a,{className:"overflow-hidden",index:r-1,enableMouseEvents:!0},n.steps.map(function(e,t){return s.a.createElement("div",{className:"flex justify-center p-16 pb-64 sm:p-24 sm:pb-64 md:p-48 md:pb-64",key:e.id},s.a.createElement(b.a,{className:"w-full max-w-lg rounded-8 p-16 md:p-24",elevation:1},s.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.content}})))}))),s.a.createElement("div",{className:"flex justify-center w-full absolute pin-l pin-r pin-b pb-16 md:pb-32"},s.a.createElement("div",{className:"flex justify-between w-full max-w-xl px-8"},s.a.createElement("div",null,1!==r&&s.a.createElement(p.v,{className:"",color:"secondary",onClick:this.handleBack},s.a.createElement(p.H,null,"chevron_left"))),s.a.createElement("div",null,r<n.steps.length?s.a.createElement(p.v,{className:"",color:"secondary",onClick:this.handleNext},s.a.createElement(p.H,null,"chevron_right")):s.a.createElement(p.v,{className:a.successFab,to:"/apps/academy/courses",component:S.a},s.a.createElement(p.H,null,"check")))))),leftSidebarContent:n&&s.a.createElement(p.hb,{classes:{root:a.stepper},activeStep:r-1,orientation:"vertical"},n.steps.map(function(t,n){return s.a.createElement(p.fb,{classes:{root:a.step},key:t.id,onClick:function(){return e.handleChangeActiveStep(n)}},s.a.createElement(p.gb,{classes:{root:a.stepLabel}},t.title))})),innerScroll:!0,onRef:function(t){e.pageLayout=t}})}}]),t}(l.Component);t.default=Object(f.a)("academyApp",h.a)(Object(d.withStyles)(function(e){return{layoutRoot:{},layoutHeader:{height:72,minHeight:72},layoutContent:{display:"flex",flex:"1 1 auto",flexDirection:"column",overflow:"hidden"},stepper:{background:"transparent"},step:{},stepLabel:{cursor:"pointer!important"},successFab:{background:A.green[500]+"!important",color:"white!important"}}},{withTheme:!0})(Object(E.a)(function(e){return{course:e.academyApp.course}},function(e){return Object(m.c)({getCourse:v.i,updateCourse:v.m},e)})(O)))}}]);
//# sourceMappingURL=18.586cd6c3.chunk.js.map