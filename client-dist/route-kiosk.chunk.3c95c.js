webpackJsonp([3],{"+j+H":function(e,t,o){"use strict";function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}o.d(t,"a",function(){return d});var c=o("KM04"),i=(o.n(c),o.i(c.h)("path",{d:"M15 0C6.7 0 0 6.7 0 15s6.7 15 15 15 15-6.7 15-15S23.3 0 15 0zm0 26C8.9 26 4 21.1 4 15S8.9 4 15 4s11 4.9 11 11-4.9 11-11 11z"})),h=o.i(c.h)("circle",{cx:"18.7",cy:"11.3",r:"3.1"}),s=o.i(c.h)("circle",{cx:"18.7",cy:"18.7",r:"3.1"}),l=o.i(c.h)("circle",{cx:"11.3",cy:"18.7",r:"3.1"}),u=o.i(c.h)("circle",{cx:"11.3",cy:"11.3",r:"3.1"}),p=o.i(c.h)("path",{d:"M-195.9 385.8h-8.8c-.2 0-.4.2-.4.4v5.1c0 .2.2.4.4.4h8.8c.2 0 .4-.2.4-.4v-5.1c.1-.2-.1-.4-.4-.4zm-.1 7.6h-17c-.2 0-.5.2-.6.4l-2.2 8.3-.1.4-2.6-8.9c-.1-.2-.3-.4-.6-.4h-6.6c-.2 0-.5.2-.6.4l-2.5 8.3-.1.4-.1-.2-1-4.1-1.1-4.1c-.1-.2-.3-.4-.6-.4H-245v-7.2c0-.2-.3-.5-.6-.4l-8.4 2.6c-.3.1-.4.2-.4.4v4.5h-2.2c-.2 0-.4.2-.4.4v6.4c0 .2.2.4.4.4h2.2v7.8c0 5.5 3 8.1 8.5 8.1 2.3 0 4.5-.5 6-1.3v-6.6c0-.3-.3-.4-.5-.4-.9.4-1.6.5-2.4.5-1.5 0-2.3-.6-2.3-2.3v-5.7h4.8c.2 0 .4-.2.4-.4v-5.4l6.3 20.9c.1.2.3.4.6.4h7c.2 0 .5-.2.6-.4l3-9.3 1.5 4.8 1.4 4.4c.1.2.3.4.6.4h7c.2 0 .5-.2.6-.4l6.4-21v21c0 .2.2.4.4.4h8.5c.2 0 .4-.2.4-.4v-21.8c0-.3-.2-.5-.4-.5zm11.2-7.6h-8.5c-.2 0-.4.2-.4.4v29.5c0 .2.2.4.4.4h8.5c.2 0 .4-.2.4-.4v-29.5c0-.2-.2-.4-.4-.4zm11.3 0h-8.8c-.2 0-.4.2-.4.4v5.1c0 .2.2.4.4.4h8.8c.2 0 .4-.2.4-.4v-5.1c.1-.2-.1-.4-.4-.4zm-.1 7.6h-8.5c-.2 0-.4.2-.4.4v21.9c0 .2.2.4.4.4h8.5c.2 0 .4-.2.4-.4v-21.8c0-.3-.2-.5-.4-.5zm14.1-.5c-7.5 0-12.8 5.5-12.8 11.9v.1c0 6.4 5.3 11.8 12.7 11.8 7.5 0 12.8-5.5 12.8-11.9v-.1c0-6.4-5.3-11.8-12.7-11.8zm3.6 11.9c0 2.2-1.5 3.9-3.6 3.9s-3.7-1.8-3.7-4v-.1c0-2.2 1.5-3.9 3.6-3.9s3.7 1.8 3.7 4.1zM-288 376c-13.8 0-25 11.2-25 25s11.2 25 25 25 25-11.2 25-25-11.2-25-25-25zm0 43.4c-10.2 0-18.4-8.2-18.4-18.4s8.2-18.4 18.4-18.4 18.4 8.2 18.4 18.4-8.2 18.4-18.4 18.4z"}),a=o.i(c.h)("circle",{cx:"-281.8",cy:"394.8",r:"5.2"}),f=o.i(c.h)("circle",{cx:"-281.8",cy:"407.2",r:"5.2"}),y=o.i(c.h)("circle",{cx:"-294.2",cy:"407.2",r:"5.2"}),v=o.i(c.h)("circle",{cx:"-294.2",cy:"394.8",r:"5.2"}),d=function(e){function t(){return r(this,e.apply(this,arguments))}return n(t,e),t.prototype.render=function(e){var t=e.fullLogo;return this.props.color=this.props.color||"rgb(241, 46, 69)",this.props.width=this.props.width||50,t?this.renderFullLogo(this.props):this.renderSmallLogo(this.props)},t.prototype.renderSmallLogo=function(e){var t=e.width,r=e.color;return o.i(c.h)("svg",{viewBox:"0 0 30 30",xmlns:"http://www.w3.org/2000/svg",width:t,height:t},o.i(c.h)("g",{fill:r},i,h,s,l,u))},t.prototype.renderFullLogo=function(e){var t=e.width,r=e.height,n=e.color;return o.i(c.h)("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:r,viewBox:"-313 376 166.2 50"},o.i(c.h)("g",{fill:n},p,a,f,y,v))},t}(c.Component)},CY0E:function(e){e.exports={kiosk:"kiosk__1m-Zz",hr:"hr__3Q8fP",phoneNumbers:"phoneNumbers__sE1hD",centerContent:"centerContent__3HH3D",thirsty:"thirsty__qapBe"}},cyf0:function(e,t,o){"use strict";function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),o.d(t,"default",function(){return f});var c=o("KM04"),i=(o.n(c),o("+j+H")),h=o("CY0E"),s=o.n(h),l=o.i(c.h)("p",null,"Loading..."),u=o.i(c.h)("p",null,"Make your coffee order ⚡️ ",o.i(c.h)("i",null,"asynchronous")," ⚡️"),p=o.i(c.h)("p",null,"Send your order via SMS to:"),a=o.i(c.h)("p",null,o.i(c.h)(i.a,null)),f=function(e){function t(){for(var t=arguments.length,o=Array(t),n=0;n<t;n++)o[n]=arguments[n];var c=r(this,e.call.apply(e,[this].concat(o)));return c.state.kioskLoaded=!1,c.state.kioskInfo={},c.state.error=void 0,c}return n(t,e),t.prototype.componentWillMount=function(){var e=this;fetch("/api/kiosk").then(function(e){if(!e.ok)throw new Error("Could not fetch kiosk info");return e.json()}).then(function(t){e.setState({kioskInfo:t,kioskLoaded:!0})}).catch(function(t){console.error(t),e.setState({kioskLoaded:!1,error:t.message})})},t.prototype.render=function(){var e=l;return this.state.kioskLoaded?o.i(c.h)("div",{id:"kiosk",class:s.a.kiosk},o.i(c.h)("h1",{class:s.a.thirsty},"Thirsty? Coffee?"),o.i(c.h)("p",{class:s.a.hr},"Skip the Queue!"),o.i(c.h)("div",{class:s.a.centerContent},u,p,o.i(c.h)("div",{class:s.a.phoneNumbers},this.state.kioskInfo.phoneNumbers.slice(0,4).map(function(e){return o.i(c.h)("p",null,e.emoji," ",e.phoneNumber)}))),o.i(c.h)("p",{class:s.a.hr},"Enjoy"),a):e},t}(c.Component)}});
//# sourceMappingURL=route-kiosk.chunk.3c95c.js.map