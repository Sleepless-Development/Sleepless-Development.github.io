(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[153],{561:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/interact/client/removeLocalEntity",function(){return n(5795)}])},5795:function(e,t,n){"use strict";n.r(t),n.d(t,{__toc:function(){return r}});var a=n(1527),i=n(2059),o=n(5826),l=n(5391);n(7771);var d=n(3443);let r=[{depth:2,value:"Parameters",id:"parameters"},{depth:2,value:"Example",id:"example"}];function c(e){let t=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",code:"code",pre:"pre",span:"span"},(0,d.a)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{children:"removeLocalEntity"}),"\n",(0,a.jsx)(t.p,{children:"Removes an existing interaction associated with a local (non-networked) entity by its entity handle. This function allows for the cleanup of interactions tied to entities that are no longer present or required in the game world, helping maintain an organized and efficient interaction system."}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"entity"})," (",(0,a.jsx)(t.code,{children:"number"}),"): The entity handle of the local entity whose interaction you wish to remove."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(t.pre,{"data-language":"lua","data-theme":"default",children:(0,a.jsxs)(t.code,{"data-language":"lua","data-theme":"default",children:[(0,a.jsx)(t.span,{className:"line",children:(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-comment)"},children:"-- To remove the interaction for this local entity, use its handle:"})}),"\n",(0,a.jsxs)(t.span,{className:"line",children:[(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"interact."}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"removeLocalEntity"}),(0,a.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"(entityHandle)"})]})]})})]})}let s={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,d.a)(),e.components);return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)},pageOpts:{filePath:"pages/interact/client/removeLocalEntity.mdx",route:"/interact/client/removeLocalEntity",pageMap:[{kind:"Meta",data:{index:"Introduction",interact:"Interact",support:{title:"Support Us",type:"page",href:"https://ko-fi.com/demigod916",newWindow:!0}}},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"interact",route:"/interact",children:[{kind:"Folder",name:"client",route:"/interact/client",children:[{kind:"Meta",data:{addCoords:"addCoords",addLocalEntity:"addLocalEntity",addEntity:"addEntity",addGlobalModel:"addGlobalModel",addGlobalPlayer:"addGlobalPlayer",addGlobalPed:"addGlobalPed",addGlobalVehicle:"addGlobalVehicle",removeLocalEntity:"removeLocalEntity",removeEntity:"removeEntity",removeId:"removeId",removeModel:"removeModel"}},{kind:"MdxPage",name:"addCoords",route:"/interact/client/addCoords"},{kind:"MdxPage",name:"addEntity",route:"/interact/client/addEntity"},{kind:"MdxPage",name:"addGlobalModel",route:"/interact/client/addGlobalModel"},{kind:"MdxPage",name:"addGlobalPed",route:"/interact/client/addGlobalPed"},{kind:"MdxPage",name:"addGlobalPlayer",route:"/interact/client/addGlobalPlayer"},{kind:"MdxPage",name:"addGlobalVehicle",route:"/interact/client/addGlobalVehicle"},{kind:"MdxPage",name:"addLocalEntity",route:"/interact/client/addLocalEntity"},{kind:"MdxPage",name:"removeEntity",route:"/interact/client/removeEntity"},{kind:"MdxPage",name:"removeId",route:"/interact/client/removeId"},{kind:"MdxPage",name:"removeLocalEntity",route:"/interact/client/removeLocalEntity"},{kind:"MdxPage",name:"removeModel",route:"/interact/client/removeModel"}]}]},{kind:"MdxPage",name:"interact",route:"/interact"}],flexsearch:{codeblocks:!0},title:"removeLocalEntity",headings:r},pageNextRoute:"/interact/client/removeLocalEntity",nextraLayout:o.ZP,themeConfig:l.Z};t.default=(0,i.j)(s)},5391:function(e,t,n){"use strict";var a=n(1527);n(959);var i=n(5826),o=n(8193);let l={logo:(0,a.jsx)("div",{style:{paddingLeft:"65px",lineHeight:"38px",background:"url('https://i.imgur.com/ZIFuQi2.png') no-repeat left",backgroundSize:"65px",fontWeight:550},children:"Sleepless"}),project:{link:"https://sleepless-development.github.io/"},chat:{link:"https://discord.gg/aUczAF8gd2"},docsRepositoryBase:"https://github.com/Sleepless-Development/Sleepless-Development.github.io/blob/main",footer:{text:"Sleepless"},head:function(){let{asPath:e}=(0,o.useRouter)(),{frontMatter:t,title:n}=(0,i.ZR)(),l=t.description||"Documentation for Sleepless resources for FiveM";return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,a.jsx)("link",{rel:"icon",type:"image/x-icon",href:"/static/ox.ico"}),(0,a.jsx)("meta",{httpEquiv:"Content-Language",content:"en"}),(0,a.jsx)("meta",{name:"description",content:l}),(0,a.jsx)("meta",{name:"og:title",content:n}),(0,a.jsx)("meta",{name:"og:description",content:l}),(0,a.jsx)("meta",{name:"og:url",content:"https://sleepless-development.github.io/".concat(e)})]})},primaryHue:{dark:200,light:200},sidebar:{defaultMenuCollapseLevel:1},useNextSeoProps:function(){let{asPath:e}=(0,o.useRouter)(),t=e.replace(/[-_]/g," ").split("/"),n="#"!==t[1][0]&&t[1]||"Sleepless",a=t[t.length-1],i=/[a-z]/.test(a)&&/[A-Z]/.test(a)?a:"%s";return{titleTemplate:"".concat(i," - ").concat(a===n?"Documentation":n.replace(/(^\w|\s\w)/g,e=>e.toUpperCase()))}}};t.Z=l}},function(e){e.O(0,[774,997,888,179],function(){return e(e.s=561)}),_N_E=e.O()}]);