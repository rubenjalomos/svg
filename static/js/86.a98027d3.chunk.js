(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{1725:function(e,a){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},1726:function(e,a,t){"use strict";var n=t(1725);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),o=n(t(1729)),s=n(t(65));var c=function(e,a){var t=function(a){return r.default.createElement(s.default,a,e)};return t.displayName="".concat(a,"Icon"),(t=(0,o.default)(t)).muiName="SvgIcon",t};a.default=c},1727:function(e,a,t){"use strict";var n=t(1725);a.__esModule=!0,a.default=void 0;var r=n(t(1732)),o=function(e){return(0,r.default)("displayName",e)};a.default=o},1728:function(e,a,t){"use strict";var n=t(1725);a.__esModule=!0,a.default=void 0;var r=n(t(1733)),o=function(e,a){return a+"("+(0,r.default)(e)+")"};a.default=o},1729:function(e,a,t){"use strict";var n=t(1725);a.__esModule=!0,a.default=void 0;var r=n(t(1730)),o=n(t(1734)),s=(n(t(1727)),n(t(1728)),function(e){return(0,r.default)(function(e,a){return!(0,o.default)(e,a)})(e)});a.default=s},1730:function(e,a,t){"use strict";var n=t(1725);a.__esModule=!0,a.default=void 0;var r=n(t(1731)),o=t(0),s=(n(t(1727)),n(t(1728)),function(e){return function(a){var t=(0,o.createFactory)(a);return function(a){function n(){return a.apply(this,arguments)||this}(0,r.default)(n,a);var o=n.prototype;return o.shouldComponentUpdate=function(a){return e(this.props,a)},o.render=function(){return t(this.props)},n}(o.Component)}});a.default=s},1731:function(e,a){e.exports=function(e,a){e.prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a}},1732:function(e,a,t){"use strict";a.__esModule=!0,a.default=void 0;var n=function(e,a){return function(t){return t[e]=a,t}};a.default=n},1733:function(e,a,t){"use strict";a.__esModule=!0,a.default=void 0;var n=function(e){return"string"===typeof e?e:e?e.displayName||e.name||"Component":void 0};a.default=n},1734:function(e,a,t){"use strict";var n=t(1725);a.__esModule=!0,a.default=void 0;var r=n(t(765)).default;a.default=r},1817:function(e,a,t){"use strict";var n=t(1725);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),o=(0,n(t(1726)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"}),r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),"Folder");a.default=o},2108:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(15),s=t(476),c=t.n(s),l=t(480),i=t.n(l);a.default=Object(o.withStyles)({avatar:{margin:10},bigAvatar:{margin:10,width:60,height:60}})(function(e){var a=e.classes;return r.a.createElement(i.a,{container:!0,justify:"center",alignItems:"center"},r.a.createElement(c.a,{alt:"Remy Sharp",src:"/static/images/avatar/1.jpg",className:a.avatar}),r.a.createElement(c.a,{alt:"Remy Sharp",src:"/static/images/avatar/1.jpg",className:a.bigAvatar}))})},2109:function(e,a){e.exports='import React from \'react\';\nimport PropTypes from \'prop-types\';\nimport {withStyles} from \'@material-ui/core/styles\';\nimport Avatar from \'@material-ui/core/Avatar\';\nimport Grid from \'@material-ui/core/Grid\';\n\nconst styles = {\n    avatar   : {\n        margin: 10\n    },\n    bigAvatar: {\n        margin: 10,\n        width : 60,\n        height: 60\n    }\n};\n\nfunction ImageAvatars(props)\n{\n    const {classes} = props;\n    return (\n        <Grid container justify="center" alignItems="center">\n            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.avatar}/>\n            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.bigAvatar}/>\n        </Grid>\n    );\n}\n\nImageAvatars.propTypes = {\n    classes: PropTypes.object.isRequired\n};\n\nexport default withStyles(styles)(ImageAvatars);\n'},2110:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(15),s=t(476),c=t.n(s),l=t(796),i=t.n(l),m=t(794),u=t.n(m),f=t(480),p=t.n(f),d={avatar:{margin:10},orangeAvatar:{margin:10,color:"#fff",backgroundColor:i.a[500]},purpleAvatar:{margin:10,color:"#fff",backgroundColor:u.a[500]}};a.default=Object(o.withStyles)(d)(function(e){var a=e.classes;return r.a.createElement(p.a,{container:!0,justify:"center",alignItems:"center"},r.a.createElement(c.a,{className:a.avatar},"H"),r.a.createElement(c.a,{className:a.orangeAvatar},"N"),r.a.createElement(c.a,{className:a.purpleAvatar},"OP"))})},2111:function(e,a){e.exports="import React from 'react';\nimport PropTypes from 'prop-types';\nimport {withStyles} from '@material-ui/core/styles';\nimport Avatar from '@material-ui/core/Avatar';\nimport deepOrange from '@material-ui/core/colors/deepOrange';\nimport deepPurple from '@material-ui/core/colors/deepPurple';\nimport Grid from '@material-ui/core/Grid';\n\nconst styles = {\n    avatar      : {\n        margin: 10\n    },\n    orangeAvatar: {\n        margin         : 10,\n        color          : '#fff',\n        backgroundColor: deepOrange[500]\n    },\n    purpleAvatar: {\n        margin         : 10,\n        color          : '#fff',\n        backgroundColor: deepPurple[500]\n    }\n};\n\nfunction LetterAvatars(props)\n{\n    const {classes} = props;\n    return (\n        <Grid container justify=\"center\" alignItems=\"center\">\n            <Avatar className={classes.avatar}>H</Avatar>\n            <Avatar className={classes.orangeAvatar}>N</Avatar>\n            <Avatar className={classes.purpleAvatar}>OP</Avatar>\n        </Grid>\n    );\n}\n\nLetterAvatars.propTypes = {\n    classes: PropTypes.object.isRequired\n};\n\nexport default withStyles(styles)(LetterAvatars);\n"},2112:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(15),s=t(523),c=t.n(s),l=t(767),i=t.n(l),m=t(476),u=t.n(m),f=t(1817),p=t.n(f),d=t(2113),v=t.n(d),g=t(2114),y=t.n(g),h=t(480),A=t.n(h),b={avatar:{margin:10},pinkAvatar:{margin:10,color:"#fff",backgroundColor:c.a[500]},greenAvatar:{margin:10,color:"#fff",backgroundColor:i.a[500]}};a.default=Object(o.withStyles)(b)(function(e){var a=e.classes;return r.a.createElement(A.a,{container:!0,justify:"center",alignItems:"center"},r.a.createElement(u.a,{className:a.avatar},r.a.createElement(p.a,null)),r.a.createElement(u.a,{className:a.pinkAvatar},r.a.createElement(v.a,null)),r.a.createElement(u.a,{className:a.greenAvatar},r.a.createElement(y.a,null)))})},2113:function(e,a,t){"use strict";var n=t(1725);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),o=(0,n(t(1726)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),r.default.createElement("path",{d:"M11.5 9C10.12 9 9 10.12 9 11.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S12.88 9 11.5 9zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3.21 14.21l-2.91-2.91c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7 16 9.01 16 11.5c0 .88-.26 1.69-.7 2.39l2.91 2.9-1.42 1.42z"})),"Pageview");a.default=o},2114:function(e,a,t){"use strict";var n=t(1725);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),o=(0,n(t(1726)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),r.default.createElement("path",{d:"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"})),"Assignment");a.default=o},2115:function(e,a){e.exports="import React from 'react';\nimport PropTypes from 'prop-types';\nimport {withStyles} from '@material-ui/core/styles';\nimport pink from '@material-ui/core/colors/pink';\nimport green from '@material-ui/core/colors/green';\nimport Avatar from '@material-ui/core/Avatar';\nimport FolderIcon from '@material-ui/icons/Folder';\nimport PageviewIcon from '@material-ui/icons/Pageview';\nimport AssignmentIcon from '@material-ui/icons/Assignment';\nimport Grid from '@material-ui/core/Grid';\n\nconst styles = {\n    avatar     : {\n        margin: 10\n    },\n    pinkAvatar : {\n        margin         : 10,\n        color          : '#fff',\n        backgroundColor: pink[500]\n    },\n    greenAvatar: {\n        margin         : 10,\n        color          : '#fff',\n        backgroundColor: green[500]\n    }\n};\n\nfunction IconAvatars(props)\n{\n    const {classes} = props;\n    return (\n        <Grid container justify=\"center\" alignItems=\"center\">\n            <Avatar className={classes.avatar}>\n                <FolderIcon/>\n            </Avatar>\n            <Avatar className={classes.pinkAvatar}>\n                <PageviewIcon/>\n            </Avatar>\n            <Avatar className={classes.greenAvatar}>\n                <AssignmentIcon/>\n            </Avatar>\n        </Grid>\n    );\n}\n\nIconAvatars.propTypes = {\n    classes: PropTypes.object.isRequired\n};\n\nexport default withStyles(styles)(IconAvatars);\n"},2614:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(3),s=t(1),c=t(15);a.default=Object(c.withStyles)(function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}},{withTheme:!0})(function(e){var a=e.classes;return r.a.createElement(o.s,{classes:{root:a.layoutRoot},header:r.a.createElement("div",{className:"flex flex-1 items-center justify-between p-24"},r.a.createElement(s.vb,{variant:"h6"},"Avatars"),r.a.createElement(s.c,{className:"normal-case",variant:"contained",component:"a",href:"https://material-ui-next.com/demos/avatars",target:"_blank"},r.a.createElement(s.H,{className:"mr-4"},"link"),"Reference")),content:r.a.createElement("div",{className:"p-24 max-w-2xl mx-auto"},r.a.createElement(s.vb,{className:"text-44 mt-32 mb-8",component:"h1"},"Avatars"),r.a.createElement(s.vb,{className:"description"},"Avatars are found throughout material design with uses in everything from tables to dialog menus."),r.a.createElement(s.vb,{className:"text-32 mt-32 mb-8",component:"h2"},"Image avatars"),r.a.createElement(s.vb,{className:"mb-16",component:"div"},"Image avatars can be created by passing standard ",r.a.createElement("code",null,"img")," props ",r.a.createElement("code",null,"src")," or ",r.a.createElement("code",null,"srcSet")," into the component."),r.a.createElement(s.vb,{className:"mb-16",component:"div"},r.a.createElement(o.k,{className:"my-24",iframe:!1,component:t(2108).default,raw:t(2109)})),r.a.createElement(s.vb,{className:"text-32 mt-32 mb-8",component:"h2"},"Letter avatars"),r.a.createElement(s.vb,{className:"mb-16",component:"div"},"Avatars containing simple characters can be created by passing your string as ",r.a.createElement("code",null,"children"),"."),r.a.createElement(s.vb,{className:"mb-16",component:"div"},r.a.createElement(o.k,{className:"my-24",iframe:!1,component:t(2110).default,raw:t(2111)})),r.a.createElement(s.vb,{className:"text-32 mt-32 mb-8",component:"h2"},"Icon avatars"),r.a.createElement(s.vb,{className:"mb-16",component:"div"},"Icon avatars are created by passing an icon as ",r.a.createElement("code",null,"children"),"."),r.a.createElement(s.vb,{className:"mb-16",component:"div"},r.a.createElement(o.k,{className:"my-24",iframe:!1,component:t(2112).default,raw:t(2115)})))})})}}]);
//# sourceMappingURL=86.a98027d3.chunk.js.map