(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{2656:function(e,t,a){"use strict";a.r(t);var n=a(10),o=a(11),r=a(13),l=a(12),c=a(14),i=a(0),s=a.n(i),u=a(22),d=a(272),m=a(1),p=a(15),f=a(3),h=a(5),b=a.n(h);var g=Object(p.withStyles)(function(e){return{root:{display:"flex",alignItems:"center",height:21,borderRadius:2,padding:"0 6px",fontSize:11,backgroundColor:"rgba(0,0,0,.08);"},color:{width:8,height:8,marginRight:4,borderRadius:"50%"}}},{withTheme:!0})(function(e){var t=e.classes,a=e.title,n=e.color,o=e.className;return s.a.createElement("div",{className:b()(t.root,o)},s.a.createElement("div",{className:t.color,style:{backgroundColor:n}}),s.a.createElement("div",null,a))}),O=a(19),E=a(17),y=a(71),v=a.n(y),T="[TODO APP] GET FILTERS";var D="[TODO APP] GET FOLDERS";var j="[TODO APP] GET LABELS";var N="[TODO APP] GET TODOS",x="[TODO APP] UPDATE TODOS",S="[TODO APP] TOGGLE STARRED",C="[TODO APP] TOGGLE COMPLETED",P="[TODO APP] TOGGLE IMPORTANT",w="[TODO APP] UPDATE TODO",A="[TODO APP] ADD TODO",k="[TODO APP] REMOVE TODO",L="[TODO APP] SET SEARCH TEXT",I="[TODO APP] OPEN NEW TODO DIALOG",B="[TODO APP] CLOSE NEW TODO DIALOG",H="[TODO APP] OPEN EDIT TODO DIALOG",R="[TODO APP] CLOSE EDIT TODO DIALOG",M="[TODO APP] TOGGLE ORDER DESCENDING",G="[TODO APP] CHANGE ORDER";function U(e){return function(t){Promise.all([t(function(){var e=v.a.get("/api/todo-app/filters");return function(t){return e.then(function(e){return t({type:T,payload:e.data})})}}()),t(function(){var e=v.a.get("/api/todo-app/folders");return function(t){return e.then(function(e){return t({type:D,payload:e.data})})}}()),t(function(){var e=v.a.get("/api/todo-app/labels");return function(t){return e.then(function(e){return t({type:j,payload:e.data})})}}())]).then(function(){return t(_(e))})}}function _(e){var t=v.a.get("/api/todo-app/todos",{params:e.params});return function(a){return t.then(function(t){return a({type:N,routeParams:e.params,payload:t.data})})}}function F(){return function(e,t){var a=t().todoApp.todos.routeParams;return v.a.get("/api/todo-app/todos",{params:a}).then(function(t){return e({type:x,payload:t.data})})}}function W(e){var t=Object(E.a)({},e,{completed:!e.completed});return function(e){return Promise.all([e({type:C})]).then(function(){return e(J(t))})}}function q(e){var t=Object(E.a)({},e,{starred:!e.starred});return function(e){return Promise.all([e({type:S})]).then(function(){return e(J(t))})}}function z(e){var t=Object(E.a)({},e,{important:!e.important});return function(e){return Promise.all([e({type:P})]).then(function(){return e(J(t))})}}function J(e){var t=v.a.post("/api/todo-app/update-todo",e);return function(e){return t.then(function(t){Promise.all([e({type:w,payload:t.data})]).then(function(){return e(F())})})}}function X(){return{type:I}}function Y(){return{type:B}}function $(e){return{type:H,data:e}}function K(){return{type:R}}function V(e){var t=v.a.post("/api/todo-app/new-todo",e);return function(e){return t.then(function(t){return Promise.all([e({type:A})]).then(function(){return e(F())})})}}function Q(e){var t=v.a.post("/api/todo-app/remove-todo",e);return function(e){return t.then(function(t){return Promise.all([e({type:k})]).then(function(){return e(F())})})}}function Z(e){return{type:L,searchText:e.target.value.toLowerCase()}}function ee(){return{type:M}}function te(e){return{type:G,orderBy:e}}var ae=a(7),ne=a(113),oe=a.n(ne),re=a(333),le=a.n(re),ce=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.todo,a=e.labels,n=e.classes,o=e.openEditTodoDialog,r=e.toggleImportant,l=e.toggleStarred,c=e.toggleCompleted;return s.a.createElement(m.O,{onClick:function(e){e.preventDefault(),o(t)},dense:!0,button:!0,className:b()(n.todoItem,{completed:t.completed},"py-16  px-0 sm:px-8")},s.a.createElement(m.h,{tabIndex:-1,disableRipple:!0,checked:t.completed,onChange:function(){return c(t)},onClick:function(e){return e.stopPropagation()}}),s.a.createElement("div",{className:"flex flex-1 flex-col relative overflow-hidden pl-8"},s.a.createElement(m.vb,{variant:"subtitle1",className:b()(n.todoTitle,"truncate"),color:t.completed?"textSecondary":"default"},t.title),s.a.createElement(m.vb,{color:"textSecondary",className:b()(n.todoNotes,"truncate")},ae.a.truncate(t.notes.replace(/<(?:.|\n)*?>/gm,""),{length:180})),s.a.createElement("div",{className:b()(n.labels,"flex mt-8")},t.labels.map(function(e){return s.a.createElement(g,{className:"mr-4",title:ae.a.find(a,{id:e}).title,color:ae.a.find(a,{id:e}).color,key:e})}))),s.a.createElement("div",{className:"px-8"},s.a.createElement(m.I,{onClick:function(e){e.preventDefault(),e.stopPropagation(),r(t)}},t.important?s.a.createElement(m.H,{style:{color:oe.a[500]}},"error"):s.a.createElement(m.H,null,"error_outline")),s.a.createElement(m.I,{onClick:function(e){e.preventDefault(),e.stopPropagation(),l(t)}},t.starred?s.a.createElement(m.H,{style:{color:le.a[500]}},"star"):s.a.createElement(m.H,null,"star_outline"))))}}]),t}(i.Component);var ie=Object(p.withStyles)(function(e){return{todoList:{padding:0},todoItem:{borderBottom:"1px solid  "+e.palette.divider,"&.completed":{background:"rgba(0,0,0,0.03)","& $todoTitle, & $todoNotes":{textDecoration:"line-through"}}},todoTitle:{},todoNotes:{},labels:{}}},{withTheme:!0})(Object(d.g)(Object(u.b)(function(e){return{labels:e.todoApp.labels}},function(e){return Object(O.c)({toggleCompleted:W,toggleImportant:z,toggleStarred:q,openEditTodoDialog:$},e)})(ce))),se=function(e){function t(){var e,a;Object(n.a)(this,t);for(var o=arguments.length,c=new Array(o),i=0;i<o;i++)c[i]=arguments[i];return(a=Object(r.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).getFilteredArray=function(e,t){var a=Object.keys(e).map(function(t){return e[t]});return 0===t.length?a:f.B.filterArrayByString(a,t)},a}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.todos,a=e.classes,n=e.searchText,o=e.orderBy,r=e.orderDescending,l=ae.a.orderBy(this.getFilteredArray(t,n),[o],[r?"desc":"asc"]);return 0===l.length?s.a.createElement(f.d,{delay:100},s.a.createElement("div",{className:"flex flex-1 items-center justify-center h-full"},s.a.createElement(m.vb,{color:"textSecondary",variant:"h5"},"There are no todos!"))):s.a.createElement(m.N,{className:a.todoList},s.a.createElement(f.e,{enter:{animation:"transition.slideUpBigIn"}},l.map(function(e){return s.a.createElement(ie,{todo:e,key:e.id})})))}}]),t}(i.Component);var ue=Object(p.withStyles)(function(e){return{todoList:{padding:0},todoItem:{},labels:{}}},{withTheme:!0})(Object(d.g)(Object(u.b)(function(e){var t=e.todoApp;return{todos:t.todos.entities,searchText:t.todos.searchText,orderBy:t.todos.orderBy,orderDescending:t.todos.orderDescending}})(se))),de=function(e){function t(){var e,a;Object(n.a)(this,t);for(var o=arguments.length,c=new Array(o),i=0;i<o;i++)c[i]=arguments[i];return(a=Object(r.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).handleOrderChange=function(e){a.props.changeOrder(e.target.value)},a}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.orderBy,n=e.orderDescending,o=e.toggleOrderDescending;return s.a.createElement("div",{className:b()(t.root,"flex justify-between w-full")},s.a.createElement("div",{className:"flex"}),s.a.createElement("div",{className:"flex items-center"},s.a.createElement(m.x,{className:""},s.a.createElement(m.bb,{value:a,onChange:this.handleOrderChange,displayEmpty:!0,name:"filter",className:""},s.a.createElement(m.U,{value:""},s.a.createElement("em",null,"Order by")),s.a.createElement(m.U,{value:"startDate"},"Start Date"),s.a.createElement(m.U,{value:"dueDate"},"Due Date"),s.a.createElement(m.U,{value:"title"},"Title"))),s.a.createElement(m.I,{onClick:o},s.a.createElement(m.H,{style:{transform:n?"scaleY(-1)":"scaleY(1)"}},"sort"))))}}]),t}(i.Component);var me=Object(p.withStyles)(function(e){return{root:{display:"flex"}}},{withTheme:!0})(Object(d.g)(Object(u.b)(function(e){var t=e.todoApp;return{orderBy:t.todos.orderBy,orderDescending:t.todos.orderDescending}},function(e){return Object(O.c)({changeOrder:te,toggleOrderDescending:ee},e)})(de))),pe=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.setSearchText,a=e.searchText,n=e.pageLayout;return s.a.createElement(p.MuiThemeProvider,{theme:f.v},s.a.createElement("div",{className:"flex flex-1"},s.a.createElement(m.X,{className:"flex items-center w-full h-48 sm:h-56 p-16 pl-4 md:pl-16 rounded-8 ",elevation:1},s.a.createElement(m.G,{lgUp:!0},s.a.createElement(m.I,{onClick:function(e){return n().toggleLeftSidebar()},"aria-label":"open left sidebar"},s.a.createElement(m.H,null,"menu"))),s.a.createElement(m.H,{color:"action"},"search"),s.a.createElement(m.J,{placeholder:"Search",className:"pl-16",disableUnderline:!0,fullWidth:!0,value:a,inputProps:{"aria-label":"Search"},onChange:t}))))}}]),t}(i.Component);var fe=Object(u.b)(function(e){return{searchText:e.todoApp.todos.searchText}},function(e){return Object(O.c)({setSearchText:Z},e)})(pe),he=function(e){function t(){var e,a;Object(n.a)(this,t);for(var o=arguments.length,c=new Array(o),i=0;i<o;i++)c[i]=arguments[i];return(a=Object(r.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={selectedAccount:"creapond"},a.onAccountChange=function(e){a.setState({selectedAccount:e.target.value})},a.accounts={creapond:"johndoe@creapond.com",withinpixels:"johndoe@withinpixels.com"},a}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return s.a.createElement("div",{className:b()(t.root,"flex flex-col justify-center h-full p-24")},s.a.createElement("div",{className:b()(t.logo,"flex items-center flex-1")},s.a.createElement(f.d,{animation:"transition.expandIn",delay:300},s.a.createElement(m.H,{className:b()(t.logoIcon,"mr-16")},"check_box")),s.a.createElement(f.d,{animation:"transition.slideLeftIn",delay:300},s.a.createElement("span",{className:t.logoText},"To-Do"))),s.a.createElement(f.d,{animation:"transition.slideUpIn",delay:300},s.a.createElement(m.sb,{id:"account-selection",select:!0,label:this.state.selectedAccount,className:t.accountSelect,value:this.state.selectedAccount,onChange:this.onAccountChange,SelectProps:{MenuProps:{className:t.accountSelectMenu}},placeholder:"Select Account",margin:"normal"},Object.keys(this.accounts).map(function(t,a){return s.a.createElement(m.U,{key:t,value:t},e.accounts[t])}))))}}]),t}(i.Component),be=Object(p.withStyles)(function(e){return{root:{},logo:{},logoIcon:{fontSize:"32px!important"},logoText:{fontSize:24},accountSelect:{},accountSelectMenu:{}}},{withTheme:!0})(he),ge=a(32);var Oe=Object(p.withStyles)(function(e){return{listWrapper:{},listItem:{color:"inherit!important",textDecoration:"none!important",height:40,width:"calc(100% - 16px)",borderRadius:"0 20px 20px 0",paddingLeft:24,paddingRight:12,"&.active":{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText+"!important",pointerEvents:"none","& .list-item-icon":{color:"inherit"}},"& .list-item-icon":{fontSize:16,width:16,height:16}},listSubheader:{paddingRight:24,paddingLeft:24}}},{withTheme:!0})(Object(d.g)(Object(u.b)(function(e){var t=e.todoApp;return{folders:t.folders,labels:t.labels,filters:t.filters}},function(e){return Object(O.c)({openNewTodoDialog:X},e)})(function(e){var t=e.classes,a=e.folders,n=e.filters,o=e.labels,r=e.openNewTodoDialog;return s.a.createElement(f.d,{animation:"transition.slideUpIn",delay:400},s.a.createElement("div",null,s.a.createElement("div",{className:"p-24"},s.a.createElement(m.c,{onClick:function(){r()},variant:"contained",color:"primary",className:"w-full"},"ADD TASK")),s.a.createElement("div",{className:t.listWrapper},s.a.createElement(m.N,null,a.length>0&&a.map(function(e){return s.a.createElement(m.O,{button:!0,component:ge.b,to:"/apps/todo/"+e.handle,key:e.id,activeClassName:"active",className:t.listItem},s.a.createElement(m.H,{className:"list-item-icon",color:"action"},e.icon),s.a.createElement(m.R,{primary:e.title,disableTypography:!0}))})),s.a.createElement(m.N,null,s.a.createElement(m.S,{className:t.listSubheader,disableSticky:!0},"FILTERS"),n.length>0&&n.map(function(e){return s.a.createElement(m.O,{button:!0,component:ge.b,to:"/apps/todo/filter/"+e.handle,activeClassName:"active",className:t.listItem,key:e.id},s.a.createElement(m.H,{className:"list-item-icon",color:"action"},e.icon),s.a.createElement(m.R,{primary:e.title,disableTypography:!0}))})),s.a.createElement(m.N,null,s.a.createElement(m.S,{className:t.listSubheader,disableSticky:!0},"LABELS"),o.length>0&&o.map(function(e){return s.a.createElement(m.O,{button:!0,component:ge.b,to:"/apps/todo/label/"+e.handle,key:e.id,className:t.listItem},s.a.createElement(m.H,{className:"list-item-icon",style:{color:e.color},color:"action"},"label"),s.a.createElement(m.R,{primary:e.title,disableTypography:!0}))})))))}))),Ee=a(18),ye=a(80),ve=a.n(ye),Te={id:"",title:"",notes:"",startDate:new Date,dueDate:new Date,completed:!1,starred:!1,important:!1,deleted:!1,labels:[]},De=function(e){function t(){var e,a;Object(n.a)(this,t);for(var o=arguments.length,c=new Array(o),i=0;i<o;i++)c[i]=arguments[i];return(a=Object(r.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={form:Object(E.a)({},Te),labelMenuEl:null},a.handleChange=function(e){var t=ae.a.set(Object(E.a)({},a.state.form),e.target.name,"checkbox"===e.target.type?e.target.checked:e.target.value);a.setState({form:t})},a.closeTodoDialog=function(){"edit"===a.props.todoDialog.type?a.props.closeEditTodoDialog():a.props.closeNewTodoDialog()},a.handleLabelMenuOpen=function(e){a.setState({labelMenuEl:e.currentTarget})},a.handleLabelMenuClose=function(e){a.setState({labelMenuEl:null})},a.handleToggleImportant=function(){a.setState({form:Object(E.a)({},a.state.form,{important:!a.state.form.important})})},a.handleToggleStarred=function(){a.setState({form:Object(E.a)({},a.state.form,{starred:!a.state.form.starred})})},a.handleToggleLabel=function(e,t){e.stopPropagation(),a.setState({form:ae.a.set(Object(E.a)({},a.state.form,{labels:a.state.form.labels.includes(t)?a.state.form.labels.filter(function(e){return e!==t}):Object(Ee.a)(a.state.form.labels).concat([t])}))})},a.toggleCompleted=function(){a.setState({form:Object(E.a)({},a.state.form,{completed:!a.state.form.completed})})},a}return Object(c.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(e,t,a){!e.todoDialog.props.open&&this.props.todoDialog.props.open&&("edit"===this.props.todoDialog.type&&this.props.todoDialog.data&&!ae.a.isEqual(this.props.todoDialog.data,t)&&this.setState({form:Object(E.a)({},this.props.todoDialog.data)}),"new"!==this.props.todoDialog.type||ae.a.isEqual(Te,t)||this.setState({form:Object(E.a)({},Te,{id:f.B.generateGUID()})}))}},{key:"canBeSubmitted",value:function(){return this.state.form.title.length>0}},{key:"render",value:function(){var e,t,a=this,n=this.props,o=n.classes,r=n.todoDialog,l=n.addTodo,c=n.updateTodo,i=n.removeTodo,u=n.labels,d=this.state,p=d.form,f=d.labelMenuEl;return p&&(e=ve()(p.startDate).format(ve.a.HTML5_FMT.DATETIME_LOCAL_SECONDS),t=ve()(p.dueDate).format(ve.a.HTML5_FMT.DATETIME_LOCAL_SECONDS)),s.a.createElement(m.l,Object.assign({className:o.root},r.props,{onClose:this.closeTodoDialog,fullWidth:!0,maxWidth:"sm"}),s.a.createElement(m.a,{position:"static",elevation:1},s.a.createElement(m.tb,{className:"flex w-full"},s.a.createElement(m.vb,{variant:"subtitle1",color:"inherit"},"new"===r.type?"New Todo":"Edit Todo"))),s.a.createElement(m.n,{classes:{root:"p-0"}},s.a.createElement("div",{className:"mb-16"},s.a.createElement("div",{className:"flex items-center justify-between p-12"},s.a.createElement("div",{className:"flex"},s.a.createElement(m.h,{tabIndex:-1,checked:p.completed,onChange:this.toggleCompleted,onClick:function(e){return e.stopPropagation()}})),s.a.createElement("div",{className:"flex items-center justify-start","aria-label":"Toggle star"},s.a.createElement(m.I,{onClick:this.handleToggleImportant},p.important?s.a.createElement(m.H,{style:{color:oe.a[500]}},"error"):s.a.createElement(m.H,null,"error_outline")),s.a.createElement(m.I,{onClick:this.handleToggleStarred},p.starred?s.a.createElement(m.H,{style:{color:le.a[500]}},"star"):s.a.createElement(m.H,null,"star_outline")),s.a.createElement("div",null,s.a.createElement(m.I,{"aria-owns":f?"label-menu":null,"aria-haspopup":"true",onClick:this.handleLabelMenuOpen},s.a.createElement(m.H,null,"label")),s.a.createElement(m.T,{id:"label-menu",anchorEl:f,open:Boolean(f),onClose:this.handleLabelMenuClose},u.length>0&&u.map(function(e){return s.a.createElement(m.U,{onClick:function(t){return a.handleToggleLabel(t,e.id)},key:e.id},s.a.createElement(m.P,null,s.a.createElement(m.H,{className:"mr-0",color:"action"},p.labels.includes(e.id)?"check_box":"check_box_outline_blank")),s.a.createElement(m.R,{primary:e.title,disableTypography:!0}),s.a.createElement(m.P,null,s.a.createElement(m.H,{className:"mr-0",style:{color:e.color},color:"action"},"label")))}))))),s.a.createElement(m.q,{className:"mx-24"})),p.labels.length>0&&s.a.createElement("div",{className:"flex flex-wrap  px-16 sm:px-24 mb-16"},p.labels.map(function(e){return s.a.createElement(m.i,{avatar:s.a.createElement(m.b,{classes:{colorDefault:"bg-transparent"}},s.a.createElement(m.H,{className:"text-20",style:{color:ae.a.find(u,{id:e}).color}},"label")),label:ae.a.find(u,{id:e}).title,onDelete:function(t){return a.handleToggleLabel(t,e)},className:"mr-8 my-8",classes:{label:"pl-4"},key:e})})),s.a.createElement("div",{className:"px-16 sm:px-24"},s.a.createElement(m.x,{className:o.formControl,required:!0,fullWidth:!0},s.a.createElement(m.sb,{label:"Title",autoFocus:!0,name:"title",value:p.title,onChange:this.handleChange,required:!0,variant:"outlined"})),s.a.createElement(m.x,{className:o.formControl,required:!0,fullWidth:!0},s.a.createElement(m.sb,{label:"Notes",name:"notes",multiline:!0,rows:"6",value:p.notes,onChange:this.handleChange,variant:"outlined"})),s.a.createElement("div",{className:"flex"},s.a.createElement(m.sb,{name:"startDate",label:"Start Date",type:"datetime-local",className:b()(o.formControl,"mr-8"),InputLabelProps:{shrink:!0},inputProps:{max:t},value:e,onChange:this.handleChange,variant:"outlined"}),s.a.createElement(m.sb,{name:"dueDate",label:"Due Date",type:"datetime-local",className:b()(o.formControl,"ml-8"),InputLabelProps:{shrink:!0},inputProps:{min:e},value:t,onChange:this.handleChange,variant:"outlined"})))),"new"===r.type?s.a.createElement(m.m,{className:"justify-between pl-8 sm:pl-16"},s.a.createElement(m.c,{variant:"contained",color:"primary",onClick:function(){l(a.state.form),a.closeTodoDialog()},disabled:!this.canBeSubmitted()},"Add")):s.a.createElement(m.m,{className:"justify-between pl-8 sm:pl-16"},s.a.createElement(m.c,{variant:"contained",color:"primary",onClick:function(){c(a.state.form),a.closeTodoDialog()},disabled:!this.canBeSubmitted()},"Save"),s.a.createElement(m.I,{className:"min-w-auto",onClick:function(){i(a.state.form.id),a.closeTodoDialog()}},s.a.createElement(m.H,null,"delete"))))}}]),t}(i.Component);var je=Object(p.withStyles)(function(e){return{root:{},formControl:{marginTop:8,marginBottom:16}}},{withTheme:!0})(Object(u.b)(function(e){var t=e.todoApp;return{todoDialog:t.todos.todoDialog,labels:t.labels}},function(e){return Object(O.c)({closeEditTodoDialog:K,closeNewTodoDialog:Y,addTodo:V,updateTodo:J,removeTodo:Q},e)})(De)),Ne=a(235),xe=a(36),Se={entities:[],searchText:"",orderBy:"",orderDescending:!1,routeParams:{},todoDialog:{type:"new",props:{open:!1},data:null}},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(E.a)({},e,{entities:ae.a.keyBy(t.payload,"id"),searchText:"",routeParams:t.routeParams});case x:return Object(E.a)({},e,{entities:ae.a.keyBy(t.payload,"id")});case I:return Object(E.a)({},e,{todoDialog:{type:"new",props:{open:!0},data:null}});case B:return Object(E.a)({},e,{todoDialog:{type:"new",props:{open:!1},data:null}});case H:return Object(E.a)({},e,{todoDialog:{type:"edit",props:{open:!0},data:t.data}});case R:return Object(E.a)({},e,{todoDialog:{type:"edit",props:{open:!1},data:null}});case w:var a=t.payload;return Object(E.a)({},e,{entities:Object(E.a)({},e.entities,Object(xe.a)({},a.id,Object(E.a)({},a)))});case L:return Object(E.a)({},e,{searchText:t.searchText});case M:return Object(E.a)({},e,{orderDescending:!e.orderDescending});case G:return Object(E.a)({},e,{orderBy:t.orderBy});default:return e}},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(Ee.a)(t.payload);default:return e}},we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(Ee.a)(t.payload);default:return e}},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(Ee.a)(t.payload);default:return e}},ke=Object(O.d)({todos:Ce,folders:Pe,labels:we,filters:Ae}),Le=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.getData(this.props.match)}},{key:"componentDidUpdate",value:function(e,t){ae.a.isEqual(this.props.location,e.location)||this.props.getTodos(this.props.match)}},{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement(f.r,{classes:{root:"w-full",header:"items-center min-h-72 h-72 sm:h-136 sm:min-h-136"},header:s.a.createElement(fe,{pageLayout:function(){return e.pageLayout}}),contentToolbar:s.a.createElement(me,null),content:s.a.createElement(ue,null),leftSidebarHeader:s.a.createElement(be,null),leftSidebarContent:s.a.createElement(Oe,null),onRef:function(t){e.pageLayout=t},innerScroll:!0}),s.a.createElement(je,null))}}]),t}(i.Component);t.default=Object(Ne.a)("todoApp",ke)(Object(d.g)(Object(u.b)(function(e){return e.todoApp,{}},function(e){return Object(O.c)({getData:U,getTodos:_},e)})(Le)))}}]);
//# sourceMappingURL=2.d2d39d68.chunk.js.map