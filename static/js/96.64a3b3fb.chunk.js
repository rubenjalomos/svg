(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{1725:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},1726:function(e,t,n){"use strict";var a=n(1725);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(0)),r=a(n(1729)),o=a(n(65));var l=function(e,t){var n=function(t){return i.default.createElement(o.default,t,e)};return n.displayName="".concat(t,"Icon"),(n=(0,r.default)(n)).muiName="SvgIcon",n};t.default=l},1727:function(e,t,n){"use strict";var a=n(1725);t.__esModule=!0,t.default=void 0;var i=a(n(1732)),r=function(e){return(0,i.default)("displayName",e)};t.default=r},1728:function(e,t,n){"use strict";var a=n(1725);t.__esModule=!0,t.default=void 0;var i=a(n(1733)),r=function(e,t){return t+"("+(0,i.default)(e)+")"};t.default=r},1729:function(e,t,n){"use strict";var a=n(1725);t.__esModule=!0,t.default=void 0;var i=a(n(1730)),r=a(n(1734)),o=(a(n(1727)),a(n(1728)),function(e){return(0,i.default)(function(e,t){return!(0,r.default)(e,t)})(e)});t.default=o},1730:function(e,t,n){"use strict";var a=n(1725);t.__esModule=!0,t.default=void 0;var i=a(n(1731)),r=n(0),o=(a(n(1727)),a(n(1728)),function(e){return function(t){var n=(0,r.createFactory)(t);return function(t){function a(){return t.apply(this,arguments)||this}(0,i.default)(a,t);var r=a.prototype;return r.shouldComponentUpdate=function(t){return e(this.props,t)},r.render=function(){return n(this.props)},a}(r.Component)}});t.default=o},1731:function(e,t){e.exports=function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}},1732:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var a=function(e,t){return function(n){return n[e]=t,n}};t.default=a},1733:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var a=function(e){return"string"===typeof e?e:e?e.displayName||e.name||"Component":void 0};t.default=a},1734:function(e,t,n){"use strict";var a=n(1725);t.__esModule=!0,t.default=void 0;var i=a(n(765)).default;t.default=i},1786:function(e,t,n){"use strict";t.a=[{img:"/static/images/grid-list/breakfast.jpg",title:"Breakfast",author:"jill111",cols:2,featured:!0},{img:"/static/images/grid-list/burgers.jpg",title:"Tasty burger",author:"director90"},{img:"/static/images/grid-list/camera.jpg",title:"Camera",author:"Danson67"},{img:"/static/images/grid-list/morning.jpg",title:"Morning",author:"fancycrave1",featured:!0},{img:"/static/images/grid-list/hats.jpg",title:"Hats",author:"Hans"},{img:"/static/images/grid-list/honey.jpg",title:"Honey",author:"fancycravel"},{img:"/static/images/grid-list/vegetables.jpg",title:"Vegetables",author:"jill111",cols:2},{img:"/static/images/grid-list/plant.jpg",title:"Water plant",author:"BkrmadtyaKarki"},{img:"/static/images/grid-list/mushroom.jpg",title:"Mushrooms",author:"PublicDomainPictures"},{img:"/static/images/grid-list/olive.jpg",title:"Olive oil",author:"congerdesign"},{img:"/static/images/grid-list/star.jpg",title:"Sea star",cols:2,author:"821292"},{img:"/static/images/grid-list/bike.jpg",title:"Bike",author:"danfador"}]},1787:function(e,t,n){"use strict";var a=n(1725);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(0)),r=(0,a(n(1726)).default)(i.default.createElement(i.default.Fragment,null,i.default.createElement("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),i.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),"StarBorder");t.default=r},1827:function(e,t,n){"use strict";var a=n(1725);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(0)),r=(0,a(n(1726)).default)(i.default.createElement(i.default.Fragment,null,i.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),i.default.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"})),"Info");t.default=r},2237:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(15),o=n(507),l=n.n(o),s=n(508),c=n.n(s),m=n(1786);t.default=Object(r.withStyles)(function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{width:500,height:450},subheader:{width:"100%"}}})(function(e){var t=e.classes;return i.a.createElement("div",{className:t.root},i.a.createElement(l.a,{cellHeight:160,className:t.gridList,cols:3},m.a.map(function(e){return i.a.createElement(c.a,{key:e.img,cols:e.cols||1},i.a.createElement("img",{src:e.img,alt:e.title}))})))})},2238:function(e,t){e.exports="import React from 'react';\nimport PropTypes from 'prop-types';\nimport {withStyles} from '@material-ui/core/styles';\nimport GridList from '@material-ui/core/GridList';\nimport GridListTile from '@material-ui/core/GridListTile';\nimport tileData from './tileData';\n\nconst styles = theme => ({\n    root     : {\n        display        : 'flex',\n        flexWrap       : 'wrap',\n        justifyContent : 'space-around',\n        overflow       : 'hidden',\n        backgroundColor: theme.palette.background.paper\n    },\n    gridList : {\n        width : 500,\n        height: 450\n    },\n    subheader: {\n        width: '100%'\n    }\n});\n\n/**\n * The example data is structured as follows:\n *\n * import image from 'path/to/image.jpg';\n * [etc...]\n *\n * const tileData = [\n *   {\n *     img: image,\n *     title: 'Image',\n *     author: 'author',\n *     cols: 2,\n *   },\n *   {\n *     [etc...]\n *   },\n * ];\n */\nfunction ImageGridList(props)\n{\n    const {classes} = props;\n\n    return (\n        <div className={classes.root}>\n            <GridList cellHeight={160} className={classes.gridList} cols={3}>\n                {tileData.map(tile => (\n                    <GridListTile key={tile.img} cols={tile.cols || 1}>\n                        <img src={tile.img} alt={tile.title}/>\n                    </GridListTile>\n                ))}\n            </GridList>\n        </div>\n    );\n}\n\nImageGridList.propTypes = {\n    classes: PropTypes.object.isRequired\n};\n\nexport default withStyles(styles)(ImageGridList);\n"},2239:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(15),o=n(507),l=n.n(o),s=n(508),c=n.n(s),m=n(516),d=n.n(m),u=n(502),p=n.n(u),f=n(202),g=n.n(f),h=n(1827),v=n.n(h),b=n(1786);t.default=Object(r.withStyles)(function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{width:500,height:450},icon:{color:"rgba(255, 255, 255, 0.54)"}}})(function(e){var t=e.classes;return i.a.createElement("div",{className:t.root},i.a.createElement(l.a,{cellHeight:180,className:t.gridList},i.a.createElement(c.a,{key:"Subheader",cols:2,style:{height:"auto"}},i.a.createElement(p.a,{component:"div"},"December")),b.a.map(function(e){return i.a.createElement(c.a,{key:e.img},i.a.createElement("img",{src:e.img,alt:e.title}),i.a.createElement(d.a,{title:e.title,subtitle:i.a.createElement("span",null,"by: ",e.author),actionIcon:i.a.createElement(g.a,{className:t.icon},i.a.createElement(v.a,null))}))})))})},2240:function(e,t){e.exports="import React from 'react';\nimport PropTypes from 'prop-types';\nimport {withStyles} from '@material-ui/core/styles';\nimport GridList from '@material-ui/core/GridList';\nimport GridListTile from '@material-ui/core/GridListTile';\nimport GridListTileBar from '@material-ui/core/GridListTileBar';\nimport ListSubheader from '@material-ui/core/ListSubheader';\nimport IconButton from '@material-ui/core/IconButton';\nimport InfoIcon from '@material-ui/icons/Info';\nimport tileData from './tileData';\n\nconst styles = theme => ({\n    root    : {\n        display        : 'flex',\n        flexWrap       : 'wrap',\n        justifyContent : 'space-around',\n        overflow       : 'hidden',\n        backgroundColor: theme.palette.background.paper\n    },\n    gridList: {\n        width : 500,\n        height: 450\n    },\n    icon    : {\n        color: 'rgba(255, 255, 255, 0.54)'\n    }\n});\n\n/**\n * The example data is structured as follows:\n *\n * import image from 'path/to/image.jpg';\n * [etc...]\n *\n * const tileData = [\n *   {\n *     img: image,\n *     title: 'Image',\n *     author: 'author',\n *   },\n *   {\n *     [etc...]\n *   },\n * ];\n */\nfunction TitlebarGridList(props)\n{\n    const {classes} = props;\n\n    return (\n        <div className={classes.root}>\n            <GridList cellHeight={180} className={classes.gridList}>\n                <GridListTile key=\"Subheader\" cols={2} style={{height: 'auto'}}>\n                    <ListSubheader component=\"div\">December</ListSubheader>\n                </GridListTile>\n                {tileData.map(tile => (\n                    <GridListTile key={tile.img}>\n                        <img src={tile.img} alt={tile.title}/>\n                        <GridListTileBar\n                            title={tile.title}\n                            subtitle={<span>by: {tile.author}</span>}\n                            actionIcon={\n                                <IconButton className={classes.icon}>\n                                    <InfoIcon/>\n                                </IconButton>\n                            }\n                        />\n                    </GridListTile>\n                ))}\n            </GridList>\n        </div>\n    );\n}\n\nTitlebarGridList.propTypes = {\n    classes: PropTypes.object.isRequired\n};\n\nexport default withStyles(styles)(TitlebarGridList);\n"},2241:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(15),o=n(507),l=n.n(o),s=n(508),c=n.n(s),m=n(516),d=n.n(m),u=n(202),p=n.n(u),f=n(1787),g=n.n(f),h=n(1786);t.default=Object(r.withStyles)(function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{flexWrap:"nowrap",transform:"translateZ(0)"},title:{color:e.palette.primary.light},titleBar:{background:"linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"}}})(function(e){var t=e.classes;return i.a.createElement("div",{className:t.root},i.a.createElement(l.a,{className:t.gridList,cols:2.5},h.a.map(function(e){return i.a.createElement(c.a,{key:e.img},i.a.createElement("img",{src:e.img,alt:e.title}),i.a.createElement(d.a,{title:e.title,classes:{root:t.titleBar,title:t.title},actionIcon:i.a.createElement(p.a,null,i.a.createElement(g.a,{className:t.title}))}))})))})},2242:function(e,t){e.exports="import React from 'react';\nimport PropTypes from 'prop-types';\nimport {withStyles} from '@material-ui/core/styles';\nimport GridList from '@material-ui/core/GridList';\nimport GridListTile from '@material-ui/core/GridListTile';\nimport GridListTileBar from '@material-ui/core/GridListTileBar';\nimport IconButton from '@material-ui/core/IconButton';\nimport StarBorderIcon from '@material-ui/icons/StarBorder';\nimport tileData from './tileData';\n\nconst styles = theme => ({\n    root    : {\n        display        : 'flex',\n        flexWrap       : 'wrap',\n        justifyContent : 'space-around',\n        overflow       : 'hidden',\n        backgroundColor: theme.palette.background.paper\n    },\n    gridList: {\n        flexWrap : 'nowrap',\n        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.\n        transform: 'translateZ(0)'\n    },\n    title   : {\n        color: theme.palette.primary.light\n    },\n    titleBar: {\n        background:\n            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'\n    }\n});\n\n/**\n * The example data is structured as follows:\n *\n * import image from 'path/to/image.jpg';\n * [etc...]\n *\n * const tileData = [\n *   {\n *     img: image,\n *     title: 'Image',\n *     author: 'author',\n *   },\n *   {\n *     [etc...]\n *   },\n * ];\n */\nfunction SingleLineGridList(props)\n{\n    const {classes} = props;\n\n    return (\n        <div className={classes.root}>\n            <GridList className={classes.gridList} cols={2.5}>\n                {tileData.map(tile => (\n                    <GridListTile key={tile.img}>\n                        <img src={tile.img} alt={tile.title}/>\n                        <GridListTileBar\n                            title={tile.title}\n                            classes={{\n                                root : classes.titleBar,\n                                title: classes.title\n                            }}\n                            actionIcon={\n                                <IconButton>\n                                    <StarBorderIcon className={classes.title}/>\n                                </IconButton>\n                            }\n                        />\n                    </GridListTile>\n                ))}\n            </GridList>\n        </div>\n    );\n}\n\nSingleLineGridList.propTypes = {\n    classes: PropTypes.object.isRequired\n};\n\nexport default withStyles(styles)(SingleLineGridList);\n"},2243:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(15),o=n(507),l=n.n(o),s=n(508),c=n.n(s),m=n(516),d=n.n(m),u=n(202),p=n.n(u),f=n(1787),g=n.n(f),h=n(1786);t.default=Object(r.withStyles)(function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{width:500,height:450,transform:"translateZ(0)"},titleBar:{background:"linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"},icon:{color:"white"}}})(function(e){var t=e.classes;return i.a.createElement("div",{className:t.root},i.a.createElement(l.a,{cellHeight:200,spacing:1,className:t.gridList},h.a.map(function(e){return i.a.createElement(c.a,{key:e.img,cols:e.featured?2:1,rows:e.featured?2:1},i.a.createElement("img",{src:e.img,alt:e.title}),i.a.createElement(d.a,{title:e.title,titlePosition:"top",actionIcon:i.a.createElement(p.a,{className:t.icon},i.a.createElement(g.a,null)),actionPosition:"left",className:t.titleBar}))})))})},2244:function(e,t){e.exports="import React from 'react';\nimport PropTypes from 'prop-types';\nimport {withStyles} from '@material-ui/core/styles';\nimport GridList from '@material-ui/core/GridList';\nimport GridListTile from '@material-ui/core/GridListTile';\nimport GridListTileBar from '@material-ui/core/GridListTileBar';\nimport IconButton from '@material-ui/core/IconButton';\nimport StarBorderIcon from '@material-ui/icons/StarBorder';\nimport tileData from './tileData';\n\nconst styles = theme => ({\n    root    : {\n        display        : 'flex',\n        flexWrap       : 'wrap',\n        justifyContent : 'space-around',\n        overflow       : 'hidden',\n        backgroundColor: theme.palette.background.paper\n    },\n    gridList: {\n        width    : 500,\n        height   : 450,\n        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.\n        transform: 'translateZ(0)'\n    },\n    titleBar: {\n        background:\n            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +\n            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'\n    },\n    icon    : {\n        color: 'white'\n    }\n});\n\n/**\n * The example data is structured as follows:\n *\n * import image from 'path/to/image.jpg';\n * [etc...]\n *\n * const tileData = [\n *   {\n *     img: image,\n *     title: 'Image',\n *     author: 'author',\n *     featured: true,\n *   },\n *   {\n *     [etc...]\n *   },\n * ];\n */\nfunction AdvancedGridList(props)\n{\n    const {classes} = props;\n\n    return (\n        <div className={classes.root}>\n            <GridList cellHeight={200} spacing={1} className={classes.gridList}>\n                {tileData.map(tile => (\n                    <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>\n                        <img src={tile.img} alt={tile.title}/>\n                        <GridListTileBar\n                            title={tile.title}\n                            titlePosition=\"top\"\n                            actionIcon={\n                                <IconButton className={classes.icon}>\n                                    <StarBorderIcon/>\n                                </IconButton>\n                            }\n                            actionPosition=\"left\"\n                            className={classes.titleBar}\n                        />\n                    </GridListTile>\n                ))}\n            </GridList>\n        </div>\n    );\n}\n\nAdvancedGridList.propTypes = {\n    classes: PropTypes.object.isRequired\n};\n\nexport default withStyles(styles)(AdvancedGridList);\n"},2624:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(3),o=n(1),l=n(15);t.default=Object(l.withStyles)(function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}},{withTheme:!0})(function(e){var t=e.classes;return i.a.createElement(r.s,{classes:{root:t.layoutRoot},header:i.a.createElement("div",{className:"flex flex-1 items-center justify-between p-24"},i.a.createElement(o.vb,{variant:"h6"},"Grid List"),i.a.createElement(o.c,{className:"normal-case",variant:"contained",component:"a",href:"https://material-ui-next.com/demos/grid-list",target:"_blank"},i.a.createElement(o.H,{className:"mr-4"},"link"),"Reference")),content:i.a.createElement("div",{className:"p-24 max-w-2xl mx-auto"},i.a.createElement(o.vb,{className:"text-44 mt-32 mb-8",component:"h1"},"Grid List"),i.a.createElement(o.vb,{className:"description"},"Grid lists display a collection of images in an organized grid."),i.a.createElement(o.vb,{className:"mb-16",component:"div"},i.a.createElement("a",{href:"https://material.io/design/components/image-lists.html"},"Grid lists")," represent a collection of items in a repeated pattern. They help improve the visual comprehension of the content they hold."),i.a.createElement(o.vb,{className:"text-32 mt-32 mb-8",component:"h2"},"Image-only Grid list"),i.a.createElement(o.vb,{className:"mb-16",component:"div"},"A simple example of a scrollable image ",i.a.createElement("code",null,"GridList"),"."),i.a.createElement(o.vb,{className:"mb-16",component:"div"},i.a.createElement(r.k,{className:"my-24",iframe:!1,component:n(2237).default,raw:n(2238)})),i.a.createElement(o.vb,{className:"text-32 mt-32 mb-8",component:"h2"},"Grid list with titlebars"),i.a.createElement(o.vb,{className:"mb-16",component:"div"},"This example demonstrates the use of the ",i.a.createElement("code",null,"GridListTileBar")," to add an overlay to each ",i.a.createElement("code",null,"GridListTile"),". The overlay can accommodate a ",i.a.createElement("code",null,"title"),", ",i.a.createElement("code",null,"subtitle")," and secondary action - in this example an ",i.a.createElement("code",null,"IconButton"),"."),i.a.createElement(o.vb,{className:"mb-16",component:"div"},i.a.createElement(r.k,{className:"my-24",iframe:!1,component:n(2239).default,raw:n(2240)})),i.a.createElement(o.vb,{className:"text-32 mt-32 mb-8",component:"h2"},"Single line Grid list"),i.a.createElement(o.vb,{className:"mb-16",component:"div"},"This example demonstrates a horizontal scrollable single-line grid list of images. Horizontally scrolling grid lists are discouraged because the scrolling interferes with typical reading patterns, affecting comprehension. One notable exception is a horizontally-scrolling, single-line grid list of images, such as a gallery."),i.a.createElement(o.vb,{className:"mb-16",component:"div"},i.a.createElement(r.k,{className:"my-24",iframe:!1,component:n(2241).default,raw:n(2242)})),i.a.createElement(o.vb,{className:"text-32 mt-32 mb-8",component:"h2"},"Advanced Grid list"),i.a.createElement(o.vb,{className:"mb-16",component:"div"},'This example demonstrates "featured" tiles, using the ',i.a.createElement("code",null,"rows")," and ",i.a.createElement("code",null,"cols")," props to adjust the size of the tile, and the ",i.a.createElement("code",null,"padding")," prop to adjust the spacing. The tiles have a customized titlebar, positioned at the top and with a custom gradient ",i.a.createElement("code",null,"titleBackground"),". The secondary action ",i.a.createElement("code",null,"IconButton")," is positioned on the left."),i.a.createElement(o.vb,{className:"mb-16",component:"div"},i.a.createElement(r.k,{className:"my-24",iframe:!1,component:n(2243).default,raw:n(2244)})))})})}}]);
//# sourceMappingURL=96.64a3b3fb.chunk.js.map