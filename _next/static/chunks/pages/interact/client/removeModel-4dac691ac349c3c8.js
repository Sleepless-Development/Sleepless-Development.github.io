(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[463],{5098:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/interact/client/removeModel",function(){return n(6447)}])},6447:function(e,t,n){"use strict";n.r(t),n.d(t,{__toc:function(){return s}});var o=n(1527),a=n(2059),i=n(5826),l=n(5391);n(7771);var r=n(3443);let s=[{depth:2,value:"Parameters",id:"parameters"},{depth:2,value:"Example",id:"example"}];function d(e){let t=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",code:"code",pre:"pre",span:"span"},(0,r.a)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{children:"removeModel"}),"\n",(0,o.jsx)(t.p,{children:"Removes global interactions associated with a specific model or an array of models. This function enables developers to dynamically manage model interactions, allowing for the removal of interactions when models are no longer needed or relevant within the game world."}),"\n",(0,o.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"model"})," (",(0,o.jsx)(t.code,{children:"number | number[]"}),"): The model identifier (hash) or an array of model identifiers for which the interactions are to be removed. A single model identifier will remove the interaction for that specific model, while an array of identifiers will remove interactions for multiple models."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(t.pre,{"data-language":"lua","data-theme":"default",children:(0,o.jsxs)(t.code,{"data-language":"lua","data-theme":"default",children:[(0,o.jsx)(t.span,{className:"line",children:(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Example 1: Removing an interaction for a single model"})}),"\n",(0,o.jsxs)(t.span,{className:"line",children:[(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" modelIdentifier "}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"`prop_vend_snak_01` "}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Example model hash"})]}),"\n",(0,o.jsxs)(t.span,{className:"line",children:[(0,o.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"interact."}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"removeModel"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"(modelIdentifier)"})]}),"\n",(0,o.jsx)(t.span,{className:"line",children:" "}),"\n",(0,o.jsx)(t.span,{className:"line",children:(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Example 2: Removing interactions for multiple models"})}),"\n",(0,o.jsxs)(t.span,{className:"line",children:[(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" modelIdentifiers "}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" {"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"`prop_vend_snak_01`"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:"`prop_vend_soda_02`"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"} "}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Example array of model hashes"})]}),"\n",(0,o.jsxs)(t.span,{className:"line",children:[(0,o.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"interact."}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"removeModel"}),(0,o.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"(modelIdentifiers)"})]})]})})]})}let c={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,r.a)(),e.components);return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)},pageOpts:{filePath:"pages/interact/client/removeModel.mdx",route:"/interact/client/removeModel",pageMap:[{kind:"Meta",data:{index:"Introduction",interact:"Interact",support:{title:"Support Us",type:"page",href:"https://ko-fi.com/demigod916",newWindow:!0}}},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"interact",route:"/interact",children:[{kind:"Folder",name:"client",route:"/interact/client",children:[{kind:"Meta",data:{addCoords:"addCoords",addLocalEntity:"addLocalEntity",addEntity:"addEntity",addGlobalModel:"addGlobalModel",addGlobalPlayer:"addGlobalPlayer",addGlobalPed:"addGlobalPed",addGlobalVehicle:"addGlobalVehicle",removeLocalEntity:"removeLocalEntity",removeEntity:"removeEntity",removeId:"removeId",removeModel:"removeModel"}},{kind:"MdxPage",name:"addCoords",route:"/interact/client/addCoords"},{kind:"MdxPage",name:"addEntity",route:"/interact/client/addEntity"},{kind:"MdxPage",name:"addGlobalModel",route:"/interact/client/addGlobalModel"},{kind:"MdxPage",name:"addGlobalPed",route:"/interact/client/addGlobalPed"},{kind:"MdxPage",name:"addGlobalPlayer",route:"/interact/client/addGlobalPlayer"},{kind:"MdxPage",name:"addGlobalVehicle",route:"/interact/client/addGlobalVehicle"},{kind:"MdxPage",name:"addLocalEntity",route:"/interact/client/addLocalEntity"},{kind:"MdxPage",name:"removeEntity",route:"/interact/client/removeEntity"},{kind:"MdxPage",name:"removeId",route:"/interact/client/removeId"},{kind:"MdxPage",name:"removeLocalEntity",route:"/interact/client/removeLocalEntity"},{kind:"MdxPage",name:"removeModel",route:"/interact/client/removeModel"}]}]},{kind:"MdxPage",name:"interact",route:"/interact"}],flexsearch:{codeblocks:!0},title:"removeModel",headings:s},pageNextRoute:"/interact/client/removeModel",nextraLayout:i.ZP,themeConfig:l.Z};t.default=(0,a.j)(c)},5391:function(e,t,n){"use strict";var o=n(1527);n(959);var a=n(5826),i=n(8193);let l={logo:(0,o.jsx)("div",{style:{paddingLeft:"50px",lineHeight:"38px",background:"url('https://avatars.githubusercontent.com/u/88127058?s=38') no-repeat left",backgroundSize:"38px",fontWeight:550},children:"Overextended"}),project:{link:"https://sleepless-development.github.io/"},chat:{link:"https://discord.gg/aUczAF8gd2"},docsRepositoryBase:"https://github.com/Sleepless-Development/Sleepless-Development.github.io/blob/main",footer:{text:"Sleepless"},head:function(){let{asPath:e}=(0,i.useRouter)(),{frontMatter:t,title:n}=(0,a.ZR)(),l=t.description||"Documentation for Sleepless resources for FiveM";return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,o.jsx)("link",{rel:"icon",type:"image/x-icon",href:"/static/ox.ico"}),(0,o.jsx)("meta",{httpEquiv:"Content-Language",content:"en"}),(0,o.jsx)("meta",{name:"description",content:l}),(0,o.jsx)("meta",{name:"og:title",content:n}),(0,o.jsx)("meta",{name:"og:description",content:l}),(0,o.jsx)("meta",{name:"og:url",content:"https://sleepless-development.github.io/".concat(e)})]})},primaryHue:{dark:200,light:200},sidebar:{defaultMenuCollapseLevel:1},useNextSeoProps:function(){let{asPath:e}=(0,i.useRouter)(),t=e.replace(/[-_]/g," ").split("/"),n="#"!==t[1][0]&&t[1]||"Sleepless",o=t[t.length-1],a=/[a-z]/.test(o)&&/[A-Z]/.test(o)?o:"%s";return{titleTemplate:"".concat(a," - ").concat(o===n?"Documentation":n.replace(/(^\w|\s\w)/g,e=>e.toUpperCase()))}}};t.Z=l}},function(e){e.O(0,[774,997,888,179],function(){return e(e.s=5098)}),_N_E=e.O()}]);