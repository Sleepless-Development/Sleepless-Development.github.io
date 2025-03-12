(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[862],{8477:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/interactv2",function(){return n(973)}])},973:function(e,s,n){"use strict";n.r(s),n.d(s,{__toc:function(){return a}});var t=n(2676),i=n(4944),r=n(1540),l=n(1007),o=n(9823);let a=[{depth:2,value:"ox_target",id:"ox_target"},{depth:2,value:"Installation",id:"installation"},{depth:3,value:"Download a release or build the source code.",id:"download-a-release-or-build-the-source-code"},{depth:2,value:"Configure",id:"configure"},{depth:2,value:"Usage",id:"usage"}];function _createMdxContent(e){let s=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",a:"a",pre:"pre",code:"code",span:"span",ul:"ul",li:"li"},(0,r.a)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{children:"Sleepless Interact"}),"\n",(0,t.jsx)(s.p,{children:"A 3D DUI interaction library for interacting with various entities and points in the world."}),"\n",(0,t.jsx)(o.Z,{repo:"https://github.com/Sleepless-Development/sleepless_interact"}),"\n",(0,t.jsx)(s.h2,{id:"ox_target",children:"ox_target"}),"\n",(0,t.jsx)(s.p,{children:"interact v2 fully provides support for ox_target and will handle all of the exports for ox_target if you want it to."}),"\n",(0,t.jsx)(s.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(s.h3,{id:"download-a-release-or-build-the-source-code",children:["Download a ",(0,t.jsx)(s.a,{href:"https://github.com/Sleepless-Development/sleepless_interact/releases",children:"release"})," or build the source code."]}),"\n",(0,t.jsx)(s.pre,{"data-language":"bash","data-theme":"default",children:(0,t.jsxs)(s.code,{"data-language":"bash","data-theme":"default",children:[(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"git"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"clone"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"https://github.com/Sleepless-Development/sleepless_interact.git"})]}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"cd"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"sleepless_interact/web"})]}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"pnpm"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"i"})]}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"pnpm"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"build"})]})]})}),"\n",(0,t.jsx)(s.h2,{id:"configure",children:"Configure"}),"\n",(0,t.jsxs)(s.p,{children:["To changed the config settings, look inside ",(0,t.jsx)(s.code,{children:"imports/config.lua"})]}),"\n",(0,t.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,t.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- this is the maximum distance that interacts will render the indicator sprite (little cirlce)"})}),"\n",(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- recommend keeping this pretty low for optimization"})}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"config.maxInteractDistance "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"5.0"})]}),"\n",(0,t.jsx)(s.span,{className:"line",children:" "}),"\n",(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- {0-255, 0-255, 0-255, 0-255}"})}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"config.themeColor "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"28"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"100"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"184"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"200"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" } "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"--- r, g, b, a"})]}),"\n",(0,t.jsx)(s.span,{className:"line",children:" "}),"\n",(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"--- texture dictionary and texture name for the sprite used to show non active interactions."})}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"config.IndicatorSprite "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { dict "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'shared'"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", txt "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'emptydot_32' "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})]}),"\n",(0,t.jsx)(s.span,{className:"line",children:" "}),"\n",(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- boolean true/false use a keybind to show and hide the interactions"})}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"config.useShowKeyBind "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"})]}),"\n",(0,t.jsx)(s.span,{className:"line",children:" "}),"\n",(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- string default key mapping for the show interactions keybind"})}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"config.defaultShowKeyBind "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'LMENU'"})]}),"\n",(0,t.jsx)(s.span,{className:"line",children:" "}),"\n",(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:'-- "hold" | "toggle" sets the behavior of the show interactions key bind'})}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"config.showKeyBindBehavior "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'toggle'"})]}),"\n",(0,t.jsx)(s.span,{className:"line",children:" "})]})}),"\n",(0,t.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(s.p,{children:["To enable the library inside of your resource just add ",(0,t.jsx)(s.code,{children:"@sleepless_interact/init.lua"})," as a client_script in your ",(0,t.jsx)(s.code,{children:"fxmanifest.lua"})," file."]}),"\n",(0,t.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,t.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"client_scripts"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@sleepless_interact/init.lua'"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,t.jsx)(s.p,{children:"When sleepless_interact has been imported into your script, it will make a new global:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"interact"})," for calling sleepless_interact functions into your script."]}),"\n"]}),"\n",(0,t.jsx)(l.UW,{type:"info",children:(0,t.jsxs)(s.p,{children:["all of the functions can also be called via exports. example: ",(0,t.jsx)(s.code,{children:"exports.sleepless_interact:addEntity(netId, options)"})]})}),"\n",(0,t.jsx)(s.p,{children:"You can now use the interact functions inside of your resource."})]})}s.default=(0,i.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,r.a)(),e.components);return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/interactv2.mdx",route:"/interactv2",timestamp:1741740057e3,title:"Sleepless Interact",headings:a},pageNextRoute:"/interactv2"})},9823:function(e,s,n){"use strict";n.d(s,{Z:function(){return resource_links}});var t=n(2676),i=n(5271),r=n(507),l=n.n(r),o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},a=Object.defineProperty,c=Object.defineProperties,h=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,s,n)=>s in e?a(e,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[s]=n,__spreadValues=(e,s)=>{for(var n in s||(s={}))p.call(s,n)&&__defNormalProp(e,n,s[n]);if(d)for(var n of d(s))x.call(s,n)&&__defNormalProp(e,n,s[n]);return e},__spreadProps=(e,s)=>c(e,h(s)),__objRest=(e,s)=>{var n={};for(var t in e)p.call(e,t)&&0>s.indexOf(t)&&(n[t]=e[t]);if(null!=e&&d)for(var t of d(e))0>s.indexOf(t)&&x.call(e,t)&&(n[t]=e[t]);return n},createReactComponent=(e,s,n)=>{let t=(0,i.forwardRef)((s,t)=>{var{color:r="currentColor",size:l=24,stroke:a=2,children:c}=s,h=__objRest(s,["color","size","stroke","children"]);return(0,i.createElement)("svg",__spreadValues(__spreadProps(__spreadValues({ref:t},o),{width:l,height:l,stroke:r,strokeWidth:a,className:`tabler-icon tabler-icon-${e}`}),h),[...n.map(([e,s])=>(0,i.createElement)(e,s)),...c||[]])});return t.propTypes={color:l().string,size:l().oneOfType([l().string,l().number]),stroke:l().oneOfType([l().string,l().number])},t.displayName=`${s}`,t},u=createReactComponent("brand-github","IconBrandGithub",[["path",{d:"M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5",key:"svg-0"}]]),k=createReactComponent("file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]]),j=createReactComponent("tag","IconTag",[["path",{d:"M7.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3z",key:"svg-1"}]]);let Button=e=>{let{side:s="left",children:n,icon:i,link:r}=e;return(0,t.jsx)("div",{className:"h-fit w-fit",children:(0,t.jsx)("a",{href:r,children:(0,t.jsxs)("div",{className:"flex w-26 items-center justify-center gap-1.5 rounded-sm border border-black p-1.5 text-black hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black mt-2",children:["left"===s&&(0,t.jsx)("div",{children:i}),n,"right"===s&&(0,t.jsx)("div",{children:i})]})})})};function GhButton(e){return(0,t.jsx)(Button,{icon:(0,t.jsx)(u,{}),side:e.side,link:e.link,children:e.label||"Github"})}function DocButton(e){return(0,t.jsx)(Button,{icon:(0,t.jsx)(k,{}),side:e.side,link:e.link,children:e.label||"Documentation"})}function ReleaseButton(e){return(0,t.jsx)(Button,{icon:(0,t.jsx)(j,{}),side:e.side,link:e.link,children:e.label||"Releases"})}var resource_links=e=>{let{repo:s,docs:n}=e;return(0,t.jsxs)("div",{className:"flex flex-wrap gap-1",children:[(0,t.jsx)(GhButton,{link:s}),(0,t.jsx)(ReleaseButton,{link:"".concat(s,"/releases")}),n&&(0,t.jsx)(DocButton,{link:n})]})}},4049:function(e,s,n){"use strict";var t=n(6257);function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,e.exports=function(){function shim(e,s,n,i,r,l){if(l!==t){var o=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function getShim(){return shim}shim.isRequired=shim;var e={array:shim,bigint:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};return e.PropTypes=e,e}},507:function(e,s,n){e.exports=n(4049)()},6257:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[944,774,888,179],function(){return e(e.s=8477)}),_N_E=e.O()}]);