(window.webpackJsonp=window.webpackJsonp||[]).push([[4,13],{176:function(e,t,n){},178:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(4),l=n.n(i),o=n(7),u=n.n(o),c=n(5),s=n.n(c),d=n(6),f=n.n(d),p=n(0),m=n.n(p),h=n(81),v=n.n(h),y=function(e){function t(){l()(this,t);var e=s()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.state={active:!1},e.onTouchStart=function(t){e.triggerEvent("TouchStart",!0,t)},e.onTouchMove=function(t){e.triggerEvent("TouchMove",!1,t)},e.onTouchEnd=function(t){e.triggerEvent("TouchEnd",!1,t)},e.onTouchCancel=function(t){e.triggerEvent("TouchCancel",!1,t)},e.onMouseDown=function(t){e.triggerEvent("MouseDown",!0,t)},e.onMouseUp=function(t){e.triggerEvent("MouseUp",!1,t)},e.onMouseLeave=function(t){e.triggerEvent("MouseLeave",!1,t)},e}return f()(t,e),u()(t,[{key:"componentDidUpdate",value:function(){this.props.disabled&&this.state.active&&this.setState({active:!1})}},{key:"triggerEvent",value:function(e,t,n){var a="on"+e,r=this.props.children;r.props[a]&&r.props[a](n),t!==this.state.active&&this.setState({active:t})}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.disabled,a=e.activeClassName,i=e.activeStyle,l=n?void 0:{onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchCancel,onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onMouseLeave:this.onMouseLeave},o=m.a.Children.only(t);if(!n&&this.state.active){var u=o.props,c=u.style,s=u.className;return!1!==i&&(i&&(c=r()({},c,i)),s=v()(s,a)),m.a.cloneElement(o,r()({className:s,style:c},l))}return m.a.cloneElement(o,l)}}]),t}(m.a.Component),g=y;y.defaultProps={disabled:!1},n.d(t,"default",function(){return g})},179:function(e,t,n){"use strict";n(34),n(180)},180:function(e,t,n){},182:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=d(n(1)),r=d(n(4)),i=d(n(7)),l=d(n(5)),o=d(n(6)),u=d(n(81)),c=d(n(0)),s=d(n(183));function d(e){return e&&e.__esModule?e:{default:e}}var f=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]])}return n},p=function(e){function t(){return(0,r.default)(this,t),(0,l.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,o.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.prefixCls,n=e.children,r=e.className,i=e.style,l=e.renderHeader,o=e.renderFooter,s=f(e,["prefixCls","children","className","style","renderHeader","renderFooter"]),d=(0,u.default)(t,r);return c.default.createElement("div",(0,a.default)({className:d,style:i},s),l?c.default.createElement("div",{className:t+"-header"},"function"===typeof l?l():l):null,n?c.default.createElement("div",{className:t+"-body"},n):null,o?c.default.createElement("div",{className:t+"-footer"},"function"===typeof o?o():o):null)}}]),t}(c.default.Component);t.default=p,p.Item=s.default,p.defaultProps={prefixCls:"am-list"},e.exports=t.default},183:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Brief=void 0;var a=f(n(1)),r=f(n(82)),i=f(n(4)),l=f(n(7)),o=f(n(5)),u=f(n(6)),c=f(n(81)),s=f(n(0)),d=f(n(178));function f(e){return e&&e.__esModule?e:{default:e}}var p=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]])}return n},m=t.Brief=function(e){function t(){return(0,i.default)(this,t),(0,o.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,u.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){return s.default.createElement("div",{className:"am-list-brief",style:this.props.style},this.props.children)}}]),t}(s.default.Component),h=function(e){function t(e){(0,i.default)(this,t);var n=(0,o.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onClick=function(e){var t=n.props,a=t.onClick,r=t.platform;if(a&&"android"===r){n.debounceTimeout&&(clearTimeout(n.debounceTimeout),n.debounceTimeout=null);var i=e.currentTarget,l=Math.max(i.offsetHeight,i.offsetWidth),o=e.currentTarget.getBoundingClientRect(),u={width:l+"px",height:l+"px",left:e.clientX-o.left-i.offsetWidth/2+"px",top:e.clientY-o.top-i.offsetWidth/2+"px"};n.setState({coverRippleStyle:u,RippleClicked:!0},function(){n.debounceTimeout=setTimeout(function(){n.setState({coverRippleStyle:{display:"none"},RippleClicked:!1})},1e3)})}a&&a(e)},n.state={coverRippleStyle:{display:"none"},RippleClicked:!1},n}return(0,u.default)(t,e),(0,l.default)(t,[{key:"componentWillUnmount",value:function(){this.debounceTimeout&&(clearTimeout(this.debounceTimeout),this.debounceTimeout=null)}},{key:"render",value:function(){var e,t,n,i=this,l=this.props,o=l.prefixCls,u=l.className,f=l.activeStyle,m=l.error,h=l.align,v=l.wrap,y=l.disabled,g=l.children,b=l.multipleLine,E=l.thumb,w=l.extra,O=l.arrow,C=l.onClick,T=p(l,["prefixCls","className","activeStyle","error","align","wrap","disabled","children","multipleLine","thumb","extra","arrow","onClick"]),k=(T.platform,p(T,["platform"])),_=this.state,N=_.coverRippleStyle,x=_.RippleClicked,S=(0,c.default)(o+"-item",u,(e={},(0,r.default)(e,o+"-item-disabled",y),(0,r.default)(e,o+"-item-error",m),(0,r.default)(e,o+"-item-top","top"===h),(0,r.default)(e,o+"-item-middle","middle"===h),(0,r.default)(e,o+"-item-bottom","bottom"===h),e)),j=(0,c.default)(o+"-ripple",(0,r.default)({},o+"-ripple-animate",x)),M=(0,c.default)(o+"-line",(t={},(0,r.default)(t,o+"-line-multiple",b),(0,r.default)(t,o+"-line-wrap",v),t)),P=(0,c.default)(o+"-arrow",(n={},(0,r.default)(n,o+"-arrow-horizontal","horizontal"===O),(0,r.default)(n,o+"-arrow-vertical","down"===O||"up"===O),(0,r.default)(n,o+"-arrow-vertical-up","up"===O),n)),L=s.default.createElement("div",(0,a.default)({},k,{onClick:function(e){i.onClick(e)},className:S}),E?s.default.createElement("div",{className:o+"-thumb"},"string"===typeof E?s.default.createElement("img",{src:E}):E):null,s.default.createElement("div",{className:M},void 0!==g&&s.default.createElement("div",{className:o+"-content"},g),void 0!==w&&s.default.createElement("div",{className:o+"-extra"},w),O&&s.default.createElement("div",{className:P,"aria-hidden":"true"})),s.default.createElement("div",{style:N,className:j})),R={};return Object.keys(k).forEach(function(e){/onTouch/i.test(e)&&(R[e]=k[e],delete k[e])}),s.default.createElement(d.default,(0,a.default)({},R,{disabled:y||!C,activeStyle:f,activeClassName:o+"-item-active"}),L)}}]),t}(s.default.Component);h.defaultProps={prefixCls:"am-list",align:"middle",error:!1,multipleLine:!1,wrap:!1,platform:"ios"},h.Brief=m,t.default=h},184:function(e,t,n){"use strict";function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,i=void 0;try{for(var l,o=e[Symbol.iterator]();!(a=(l=o.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(u){r=!0,i=u}finally{try{a||null==o.return||o.return()}finally{if(r)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",function(){return a})},85:function(e,t,n){"use strict";n.r(t);var a=n(184),r=n(10),i=n(11),l=n(13),o=n(12),u=n(14),c=(n(179),n(182)),s=n.n(c),d=n(0),f=n.n(d),p=(n(176),s.a.Item),m=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"getTime",value:function(e){var t=new Date(1e3*e),n=[t.getFullYear(),t.getMonth()+1,t.getDate()].map(function(e){return e<10?"0"+e:e}),r=Object(a.a)(n,3);return[r[0],r[1],r[2]].join("-")}},{key:"shouldComponentUpdate",value:function(e,t){return console.log(!(e.dataList.length===this.props.dataList.length)),!(e.dataList.length===this.props.dataList.length)}},{key:"render",value:function(){var e=this,t=this.props.dataList;return console.log(t),f.a.createElement(s.a,{className:"my-list",style:{position:"relative"}},t.map(function(t){var n=t.title,a=t.middle_image,r=t.image_list,i=t.article_url,l=t.source,o=t.publish_time,u=e.getTime(o);return a&&!r?f.a.createElement(p,{wrap:!0,onClick:function(){return e.props.clickFun(i)},extra:f.a.createElement("img",{style:{minHeight:"50px",width:"auto"},src:a.url.replace("webp","jpg")||"",alt:""}),key:t.item_id},f.a.createElement("span",{style:{fontSize:"14px"}},n)):r&&r.length?f.a.createElement(p,{onClick:function(){return e.props.clickFun(i)},wrap:!0,key:t.item_id},f.a.createElement("span",{style:{fontSize:"14px"}},n),f.a.createElement("ul",{className:"imageList"},r.map(function(e,t){return f.a.createElement("li",{key:t},f.a.createElement("img",{src:e.url.replace("webp","jpg"),alt:""}))})),f.a.createElement("div",{className:"pushInfo"},f.a.createElement("span",{className:"source"},l),f.a.createElement("span",{className:"time"},u))):null}))}}]),t}(f.a.Component);t.default=m}}]);
//# sourceMappingURL=4.0d10e62b.chunk.js.map