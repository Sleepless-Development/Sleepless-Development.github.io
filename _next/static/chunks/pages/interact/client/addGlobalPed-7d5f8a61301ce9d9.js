(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[647],{4579:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/interact/client/addGlobalPed",function(){return n(3987)}])},3987:function(e,s,n){"use strict";n.r(s),n.d(s,{__toc:function(){return l}});var i=n(1527),r=n(2059),o=n(3443);let l=[{depth:2,value:"Parameters",id:"parameters"},{depth:2,value:"Example",id:"example"}];function t(e){let s=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",code:"code",pre:"pre",span:"span"},(0,o.a)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{children:"addGlobalPed"}),"\n",(0,i.jsx)(s.p,{children:"Registers a global interaction for non-player characters (NPCs) or peds in the game. This function enables customizable interactions with NPCs, allowing for specific actions and conditions to be defined for interacting with these entities across the game world."}),"\n",(0,i.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"data"})," (",(0,i.jsx)(s.code,{children:"PedInteractionData"}),"): A table containing the interaction data. It must include:","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"id"})," (",(0,i.jsx)(s.code,{children:"string | number"}),"): A unique identifier for the interaction."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"bone?"})," (",(0,i.jsx)(s.code,{children:"string or string[]"}),"): name of the bone to interact with or an array of bones. will use the first valid bone for the entity from the array"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"options"})," (",(0,i.jsx)(s.code,{children:"table"}),"): A list of options for the interaction. Each option is a table with the following fields:","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"text"})," (",(0,i.jsx)(s.code,{children:"string"}),"): The text displayed for the option."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"icon"})," (",(0,i.jsx)(s.code,{children:"string"}),'): The simple FontAwesome icon name displayed for the option (e.g., "hand").']}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"groups?"})," (",(0,i.jsx)(s.code,{children:"table<string, number>"}),"): table of allowed jobs and minimum grades for this Option"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"items?"})," (",(0,i.jsx)(s.code,{children:"string or string[] or table<string, number>"}),"): An item, array of items, or pairs of items-count required to show the option."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"anyItem?"})," (",(0,i.jsx)(s.code,{children:"boolean"}),"): Only require a single item from the items table to exist."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"destroy?"})," (",(0,i.jsx)(s.code,{children:"boolean"}),"): when true, the entire interaction will destroy when this option is selected"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"action"})," (",(0,i.jsx)(s.code,{children:"function(data: CoordsInteraction)"}),"): The function to call when the option is selected."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"canInteract?"})," (",(0,i.jsx)(s.code,{children:"function(entity?: number, distance: number, coords: vector3, id: string | number)"}),"): A function that determines if the option can be interacted with."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"offset?"})," (",(0,i.jsx)(s.code,{children:"vector3"}),"): The offset from the ped's position where the interaction is located."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"renderDistance?"})," (",(0,i.jsx)(s.code,{children:"number"}),"): distance at which the interaction indicator is visible. Defaults to ",(0,i.jsx)(s.code,{children:"5.0"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"activeDistance?"})," (",(0,i.jsx)(s.code,{children:"number"}),"): distance at which the interaction menu is visible. Defaults to ",(0,i.jsx)(s.code,{children:"1.0"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"cooldown?"})," (",(0,i.jsx)(s.code,{children:"number"}),"): The cooldown time in milliseconds between interactions to prevent spamming. Defaults to ",(0,i.jsx)(s.code,{children:"1000"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(s.pre,{"data-language":"lua","data-theme":"default",children:(0,i.jsxs)(s.code,{"data-language":"lua","data-theme":"default",children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"interact."}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"addGlobalPed"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    id "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"uniquePedInteractionId"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    options "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        {"})}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"            text "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Interact with NPC"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"            icon "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"hand"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:",  "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Example simple FA icon name"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"            groups "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {["}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'police'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"},"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"            items "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {["}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'money'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"100"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"},"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"action"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-parameter)"},children:"data"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"NPC interaction triggered"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"canInteract"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-parameter)"},children:"entity"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-parameter)"},children:"distance"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-parameter)"},children:"coords"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-parameter)"},children:"id"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"                "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" distance "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"2.0"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Example condition based on distance"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        }"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    },"})}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    offset "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"vector3"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1.0"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"),"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    bone "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"head"'}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    renderDistance "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"10.0"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    activeDistance "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"2.0"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    cooldown "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1500"})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"})"})})]})})]})}s.default=(0,r.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,o.a)(),e.components);return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(t,{...e})}):t(e)},pageOpts:{filePath:"pages/interact/client/addGlobalPed.mdx",route:"/interact/client/addGlobalPed",title:"addGlobalPed",headings:l},pageNextRoute:"/interact/client/addGlobalPed"})}},function(e){e.O(0,[59,774,888,179],function(){return e(e.s=4579)}),_N_E=e.O()}]);