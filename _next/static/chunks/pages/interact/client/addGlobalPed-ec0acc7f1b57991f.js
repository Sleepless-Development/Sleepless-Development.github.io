(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[647],{4579:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/interact/client/addGlobalPed",function(){return s(3987)}])},3987:function(e,n,s){"use strict";s.r(n),s.d(n,{__toc:function(){return a}});var i=s(1527),t=s(2059),o=s(5826),r=s(5391);s(7771);var l=s(3443);let a=[{depth:2,value:"Parameters",id:"parameters"},{depth:2,value:"Example",id:"example"}];function c(e){let n=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",code:"code",pre:"pre",span:"span"},(0,l.a)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{children:"addGlobalPed"}),"\n",(0,i.jsx)(n.p,{children:"Registers a global interaction for non-player characters (NPCs) or peds in the game. This function enables customizable interactions with NPCs, allowing for specific actions and conditions to be defined for interacting with these entities across the game world."}),"\n",(0,i.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"data"})," (",(0,i.jsx)(n.code,{children:"PedInteractionData"}),"): A table containing the interaction data. It must include:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"id"})," (",(0,i.jsx)(n.code,{children:"string | number"}),"): A unique identifier for the interaction."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"options"})," (",(0,i.jsx)(n.code,{children:"table"}),"): A list of options and actions for the interaction. Each option is a table with the following fields:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"text"})," (",(0,i.jsx)(n.code,{children:"string"}),"): The text displayed for the option."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"icon"})," (",(0,i.jsx)(n.code,{children:"string"}),'): The simple FontAwesome icon name displayed for the option (e.g., "hand").']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"action"})," (",(0,i.jsx)(n.code,{children:"function(data: EntityInteraction)"}),"): The function to call when the option is selected."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"canInteract"})," (",(0,i.jsx)(n.code,{children:"function(entity?: number, distance: number, coords: vector3, id: string | number): boolean"}),"): A function that determines if the option can be interacted with, accepting parameters for optional entity, distance to the interaction, interaction coordinates, and the interaction ID."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"offset?"})," (",(0,i.jsx)(n.code,{children:"vector3"}),"): The offset from the ped's position where the interaction is located."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"bone?"})," (",(0,i.jsx)(n.code,{children:"string"}),"): The name of the bone for the ped where the interaction is attached."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"renderDistance?"})," (",(0,i.jsx)(n.code,{children:"number"}),"): distance at which the interaction indicator is visible. Defaults to ",(0,i.jsx)(n.code,{children:"5.0"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"activeDistance?"})," (",(0,i.jsx)(n.code,{children:"number"}),"): distance at which the interaction menu is visible. Defaults to ",(0,i.jsx)(n.code,{children:"1.0"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"cooldown?"})," (",(0,i.jsx)(n.code,{children:"number"}),"): The cooldown time in milliseconds between interactions to prevent spamming. Defaults to ",(0,i.jsx)(n.code,{children:"1000"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,i.jsxs)(n.code,{"data-language":"lua","data-theme":"default",children:[(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"interact."}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"addGlobalPed"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    id "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"uniquePedInteractionId"'}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    options "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"        {"})}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"            text "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Interact with NPC"'}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"            icon "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"hand"'}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:",  "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Example simple FA icon name"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"action"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-parameter)"},children:"data"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"NPC interaction triggered"'}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"canInteract"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-parameter)"},children:"entity"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-parameter)"},children:"distance"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-parameter)"},children:"coords"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-parameter)"},children:"id"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"                "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" distance "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"2.0"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Example condition based on distance"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"        }"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    },"})}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    offset "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"vector3"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"1.0"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"),"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    bone "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"head"'}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    renderDistance "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"10.0"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    activeDistance "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"2.0"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    cooldown "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"1500"})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"})"})})]})})]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,l.a)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)},pageOpts:{filePath:"pages/interact/client/addGlobalPed.mdx",route:"/interact/client/addGlobalPed",pageMap:[{kind:"Meta",data:{index:"Introduction",interact:"Interact",support:{title:"Support Us",type:"page",href:"https://ko-fi.com/demigod916",newWindow:!0}}},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"interact",route:"/interact",children:[{kind:"Folder",name:"client",route:"/interact/client",children:[{kind:"Meta",data:{addCoords:"addCoords",addLocalEntity:"addLocalEntity",addEntity:"addEntity",addGlobalModel:"addGlobalModel",addGlobalPlayer:"addGlobalPlayer",addGlobalPed:"addGlobalPed",addGlobalVehicle:"addGlobalVehicle",removeLocalEntity:"removeLocalEntity",removeEntity:"removeEntity",removeId:"removeId",removeModel:"removeModel"}},{kind:"MdxPage",name:"addCoords",route:"/interact/client/addCoords"},{kind:"MdxPage",name:"addEntity",route:"/interact/client/addEntity"},{kind:"MdxPage",name:"addGlobalModel",route:"/interact/client/addGlobalModel"},{kind:"MdxPage",name:"addGlobalPed",route:"/interact/client/addGlobalPed"},{kind:"MdxPage",name:"addGlobalPlayer",route:"/interact/client/addGlobalPlayer"},{kind:"MdxPage",name:"addGlobalVehicle",route:"/interact/client/addGlobalVehicle"},{kind:"MdxPage",name:"addLocalEntity",route:"/interact/client/addLocalEntity"},{kind:"MdxPage",name:"removeEntity",route:"/interact/client/removeEntity"},{kind:"MdxPage",name:"removeId",route:"/interact/client/removeId"},{kind:"MdxPage",name:"removeLocalEntity",route:"/interact/client/removeLocalEntity"},{kind:"MdxPage",name:"removeModel",route:"/interact/client/removeModel"}]}]},{kind:"MdxPage",name:"interact",route:"/interact"}],flexsearch:{codeblocks:!0},title:"addGlobalPed",headings:a},pageNextRoute:"/interact/client/addGlobalPed",nextraLayout:o.ZP,themeConfig:r.Z};n.default=(0,t.j)(d)},5391:function(e,n,s){"use strict";var i=s(1527);s(959);let t={logo:(0,i.jsx)("div",{style:{paddingLeft:"65px",lineHeight:"38px",background:"url('https://i.imgur.com/ZIFuQi2.png') no-repeat left",backgroundSize:"65px",fontWeight:550},children:"Sleepless Dev"}),project:{link:"https://github.com/shuding/nextra-docs-template"},chat:{link:"https://discord.gg/VYV7S9WxTM"},docsRepositoryBase:"https://github.com/shuding/nextra-docs-template",footer:{text:"Sleepless Documentation"}};n.Z=t}},function(e){e.O(0,[774,997,888,179],function(){return e(e.s=4579)}),_N_E=e.O()}]);