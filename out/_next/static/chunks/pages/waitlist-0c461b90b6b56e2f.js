(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[908],{8092:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/waitlist",function(){return n(5440)}])},6151:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var o=n(5893),r=n(1664),s=n(3759),i=n.n(s),c=n(3305),a=n.n(c),l=n(7294);n(6455);function u(){var e=(0,l.useState)("");e[0],e[1];return(0,o.jsxs)("footer",{className:a().footer,children:[(0,o.jsx)("div",{className:a().sideCont,children:(0,o.jsxs)("div",{className:a().logoFlex+" "+i().centerx,children:[(0,o.jsx)("img",{src:"/ironclad/head-white.svg",className:a().logo,alt:"IroncladDev Logo"}),(0,o.jsx)("img",{src:"/ironclad/text-white.svg",className:a().logoText,alt:"Logo Text"})]})}),(0,o.jsxs)("div",{className:a().flexMain,children:[(0,o.jsx)("div",{className:a().ftCont,children:(0,o.jsxs)("div",{className:a().linkCol,children:[(0,o.jsx)("div",{children:(0,o.jsx)(r.default,{href:"/",passHref:!0,children:(0,o.jsx)("span",{className:a().link,children:"Home"})})}),(0,o.jsx)("div",{children:(0,o.jsx)(r.default,{href:"/about",passHref:!0,children:(0,o.jsx)("span",{className:a().link,children:"About Me"})})})]})}),(0,o.jsx)("hr",{className:a().breaker}),(0,o.jsxs)("div",{className:a().copyright,children:["\xa9 Dijinn Judd ",(new Date).getFullYear()]})]})]})}},6351:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var o=n(5893),r=n(5467),s=n.n(r),i=n(7294);function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e){return a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},a(e)}function l(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e,t){return u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},u(e,t)}var f=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function _(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=a(e);if(t){var r=a(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return l(this,n)}}var d=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(l,e);var t,n,r,a=_(l);function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=a.call(this,e)).scrollDiv=(0,i.createRef)(),t.state={cookie:[!1,""]},t}return t=l,(n=[{key:"componentDidMount",value:function(){var e=this,t=function(e){return"; ".concat(document.cookie).split("; ".concat(e,"=")).pop().split(";").shift()},n=[!1,""];try{n=JSON.parse(decodeURIComponent(t("uid"))),console.log(decodeURIComponent(t("uid")))}catch(o){}this.setState({cookie:n},(function(){e.state.cookie[0]===e.props.name&&e.scrollDiv.current.scrollIntoView({behavior:"smooth"})}))}},{key:"render",value:function(){var e=this,t=this.props.name===this.state.cookie[0];return(0,o.jsxs)("div",{ref:this.scrollDiv,onClick:this.props.editRow?function(){e.props.editRow(e.props._id)}:function(){},className:s().li+" "+(t&&s().selected),children:[(0,o.jsxs)("div",{children:["#",this.props.number," ",t?this.state.cookie[1]:this.props.name.slice(0,10)]}),(0,o.jsxs)("div",{style:{flex:"1"},children:[(0,o.jsxs)("span",{className:s().reg,children:["Registered"," "]}),this.props.date]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{className:s().dot+" "+(this.props.status&&s().making)})," ",(0,o.jsx)("span",{children:this.props.status?"In Progress":"Waiting"})]})]})}}])&&c(t.prototype,n),r&&c(t,r),l}(i.Component)},5303:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var o=n(5893),r=n(7915),s=n.n(r),i=n(3759),c=n.n(i),a=n(5675),l=n(1664),u=n(7294);function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function p(e,t){return!t||"object"!==v(t)&&"function"!==typeof t?f(e):t}function h(e,t){return h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},h(e,t)}var v=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=d(e);if(t){var r=d(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return p(this,n)}}var m=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(u,e);var t,n,r,i=y(u);function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e)).state={dark:!1},t.listenToScroll=t.listenToScroll.bind(f(t)),t}return t=u,(n=[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.listenToScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.listenToScroll)}},{key:"listenToScroll",value:function(){window.pageYOffset>=window.innerHeight-80?this.setState({dark:!0}):this.setState({dark:!1})}},{key:"render",value:function(){return(0,o.jsx)("nav",{className:s().nav+" "+((this.props.stay||this.state.dark)&&s().darknav),children:(0,o.jsxs)("div",{className:s().navCont,children:[(0,o.jsxs)("div",{className:s().flexL,children:[(0,o.jsx)("div",{className:s().logo,children:(0,o.jsx)(l.default,{href:"/",passHref:!0,children:(0,o.jsx)(a.default,{src:"/ironclad/head-white.svg",alt:"Logo",layout:"fill",objectFit:"contain"})})}),(0,o.jsx)("div",{className:s().logoName,children:(0,o.jsx)(l.default,{href:"/",passHref:!0,children:(0,o.jsx)("img",{src:"/ironclad/text-white.svg",alt:"IronClad text",className:s().logoNameImg})})})]}),(0,o.jsxs)("div",{className:s().linkCore,children:[(0,o.jsx)(l.default,{href:"/about",passHref:!0,children:(0,o.jsxs)("span",{className:s().link,children:["About",(0,o.jsxs)("span",{className:s().hide,children:[" ","Me"]})]})}),(0,o.jsx)(l.default,{href:"https://archlinux.org/",passHref:!0,children:(0,o.jsx)("span",{className:s().link,children:"Arch Linux"})}),(0,o.jsx)(l.default,{href:"https://voidlinux.org/",passHref:!0,children:(0,o.jsx)("span",{className:s().link,children:"Void Linux"})})]}),(0,o.jsx)(l.default,{href:"https://github.com/Father-Dimi",passHref:!0,children:(0,o.jsx)("button",{className:c().button+" "+s().hireBtn,children:"My Github"})})]})})}}])&&_(t.prototype,n),r&&_(t,r),u}(u.Component)},5440:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var o=n(4051),r=n.n(o),s=n(5893),i=n(9008),c=n(5467),a=n.n(c),l=n(3759),u=n.n(l),f=n(5303),_=n(6351),d=n(7294),p=n(6151),h=n(1664);function v(e,t,n,o,r,s,i){try{var c=e[s](i),a=c.value}catch(l){return void n(l)}c.done?t(a):Promise.resolve(a).then(o,r)}function y(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function x(e,t){return!t||"object"!==j(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}var j=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function k(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=m(e);if(t){var r=m(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return x(this,n)}}var g=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(l,e);var t,n,o,c=k(l);function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=c.call(this,e)).state={data:[]},t}return t=l,n=[{key:"componentDidMount",value:function(){var e,t=this;return(e=r().mark((function e(){var n,o,s,i;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=function(e){return"; ".concat(document.cookie).split("; ".concat(e,"=")).pop().split(";").shift()},e.next=3,fetch("/api/waitlist");case 3:return o=e.sent,e.next=6,o.json();case 6:s=e.sent,i=[!1,""];try{i=JSON.parse(decodeURIComponent(n("uid"))),console.log(decodeURIComponent(n("uid")))}catch(r){}t.setState({data:s,cookie:i});case 10:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(o,r){var s=e.apply(t,n);function i(e){v(s,o,r,i,c,"next",e)}function c(e){v(s,o,r,i,c,"throw",e)}i(void 0)}))})()}},{key:"render",value:function(){return(0,s.jsxs)("div",{className:a().container,style:{background:"var(--w-4)"},children:[(0,s.jsx)(i.default,{children:(0,s.jsx)("title",{children:"Waitlist | Ironclad Web Development"})}),(0,s.jsx)("h1",{className:u()._header,children:"Waitlist"}),(0,s.jsx)("div",{className:a().blockCont,children:this.state.data.length>0?this.state.data.map((function(e,t){return(0,s.jsx)(_.Z,{number:t+1,name:e._id,date:e.date,status:e.status},e._id)})):(0,s.jsxs)("p",{className:u().centerx,style:{fontStyle:"italic",textAlign:"center",color:"var(--g-bright)"},children:["Nobody's on the waitlist right now.  ",(0,s.jsx)(h.default,{href:"/hire",children:"Be the first"}),"!"]})}),(0,s.jsx)(p.Z,{}),(0,s.jsx)(f.Z,{stay:!0})]})}}],n&&y(t.prototype,n),o&&y(t,o),l}(d.Component)},3759:function(e){e.exports={container:"classes_container__M_ALG",relcont:"classes_relcont__i3IyR",blockContainer:"classes_blockContainer__8DfQ_",displayDark:"classes_displayDark__7pvWx",_header:"classes__header__wXzAs",button:"classes_button__r15M0",blockSlant:"classes_blockSlant__qp9Tm",overlayer:"classes_overlayer____Ic_",overlayElement:"classes_overlayElement__MWccv",centerx:"classes_centerx__Yd2sS",centery:"classes_centery__CYSud",centerxy:"classes_centerxy__Ub56p",link:"classes_link__Zpj9L",hov:"classes_hov__c5uBx",textCenter:"classes_textCenter__kkN2h",blockBtn:"classes_blockBtn__wNRJ0",blockBtnLeft:"classes_blockBtnLeft__PJ4Ho",blockInput:"classes_blockInput__9c_xs",slant:"classes_slant__JNHEx",formLabel:"classes_formLabel__nEZIz",formDesc:"classes_formDesc__r9Y5F",input:"classes_input__quCEy",darkBtn:"classes_darkBtn__H_bsK",op0:"classes_op0__ryHB2",op1:"classes_op1__xIcxl"}},3305:function(e){e.exports={footer:"footer_footer__0zHVM",sideCont:"footer_sideCont__9fWMA",logo:"footer_logo__MQDjY",logoText:"footer_logoText__Dk4Yn",logoFlex:"footer_logoFlex__5wfdb",subForm:"footer_subForm__OSRoQ",contr:"footer_contr__ne_aC",flexMain:"footer_flexMain__kVijw",textPar:"footer_textPar__JIQTn",ftCont:"footer_ftCont__O31PJ",linkCol:"footer_linkCol___B5iz",link:"footer_link__EhVl5",breaker:"footer_breaker__vg38_",copyright:"footer_copyright__rDKqU"}},7915:function(e){e.exports={nav:"nav_nav__n5XEC",navCont:"nav_navCont__XaNvw",logo:"nav_logo__DL2PE",darknav:"nav_darknav__TZ4cd",flexL:"nav_flexL__AUvsf",logoName:"nav_logoName__FfKR1",logoNameImg:"nav_logoNameImg__H8ern",linkCore:"nav_linkCore__FlC8H",link:"nav_link__EWH3i",hireBtn:"nav_hireBtn__W0fWY",hide:"nav_hide__fqY_G"}},5467:function(e){e.exports={blockCont:"waitlist_blockCont__F7oEK",container:"waitlist_container__QOQyF",li:"waitlist_li__ElsxC",dot:"waitlist_dot__7UXqk",making:"waitlist_making__NgbQL",selected:"waitlist_selected__3Zndr",reg:"waitlist_reg__X_NBo"}}},function(e){e.O(0,[327,675,774,888,179],(function(){return t=8092,e(e.s=t);var t}));var t=e.O();_N_E=t}]);