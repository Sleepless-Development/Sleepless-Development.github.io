(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[326],{3677:function(s,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/interactv1/client/removeById",function(){return r(2120)}])},2120:function(s,e,r){"use strict";r.r(e),r.d(e,{__toc:function(){return i}});var l=r(2676),n=r(4944),o=r(1540);let i=[{depth:2,value:"Parameters",id:"parameters"},{depth:2,value:"Examples",id:"examples"},{depth:3,value:"export",id:"export"}];function _createMdxContent(s){let e=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",ul:"ul",li:"li",pre:"pre",span:"span",h3:"h3"},(0,o.a)(),s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{children:"removeById"}),"\n",(0,l.jsxs)(e.p,{children:["Removes an existing interaction associated with an id. ",(0,l.jsx)(e.code,{children:"this wont work for global interactions"})]}),"\n",(0,l.jsx)(e.h2,{id:"parameters",children:"Parameters"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"id"})," (",(0,l.jsx)(e.code,{children:"number | string"}),"): The unique identifier of the interaction you wish to remove. This ID is returned by the function used to add the interaction initially."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"similar"})," (",(0,l.jsx)(e.code,{children:"boolean"}),"): determines wether the id search is strict or notDeepEqual. i.e. if similar is true and id is 'hello', it would also remove 'hello:world'"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsx)(e.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(e.code,{"data-language":"lua","data-theme":"default",children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" interactionId "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" interact."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"addCoords"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    id "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"uniqueInteractionId"'}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"--id that is stored in variable"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    coords "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"vec3"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"123.4"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"567.8"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"250.0"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"),"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    options "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        {"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            label "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Interact Option 1"'}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            icon "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"hand"'}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:",  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Example simple FA icon name"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"onSelect"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=function"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-parameter)"},children:"data"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Action 1 triggered"'}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"canInteract"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-parameter)"},children:"entity"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-parameter)"},children:"distance"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-parameter)"},children:"coords"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-parameter)"},children:"id"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"                "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" distance "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"2.0"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Example condition based on distance"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        }"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    },"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    renderDistance "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"10.0"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    activeDistance "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"2.0"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    cooldown "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1500"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"})"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"-- To remove the specific interaction by its ID:"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"interact."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"removeById"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(interactionId)"})]})]})}),"\n",(0,l.jsx)(e.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(e.code,{"data-language":"lua","data-theme":"default",children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" interactionId "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" interact."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"addCoords"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    id "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"uniqueInteractionId"'}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"--id that is stored in variable"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    coords "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"vec3"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"123.4"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"567.8"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"250.0"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"),"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"vec3"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"421.4"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"567.8"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"125.0"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    },"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    options "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        {"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            label "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Interact Option 1"'}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            icon "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"hand"'}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:",  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Example simple FA icon name"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"onSelect"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=function"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-parameter)"},children:"data"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Action 1 triggered"'}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"canInteract"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-parameter)"},children:"entity"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-parameter)"},children:"distance"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-parameter)"},children:"coords"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-parameter)"},children:"id"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"                "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"true"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        }"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    },"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    renderDistance "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"10.0"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    activeDistance "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"2.0"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    cooldown "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1500"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"})"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"-- To remove the specific interaction by its ID:"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"interact."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"removeById"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(interactionId, "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})]})}),"\n",(0,l.jsx)(e.h3,{id:"export",children:"export"}),"\n",(0,l.jsx)(e.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsx)(e.code,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    exports.sleepless_interact:"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"removeById"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(id, similar)"})]})})})]})}e.default=(0,n.j)({MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,o.a)(),s.components);return e?(0,l.jsx)(e,{...s,children:(0,l.jsx)(_createMdxContent,{...s})}):_createMdxContent(s)},pageOpts:{filePath:"pages/interactv1/client/removeById.mdx",route:"/interactv1/client/removeById",timestamp:174171764e4,title:"removeById",headings:i},pageNextRoute:"/interactv1/client/removeById"})}},function(s){s.O(0,[944,774,888,179],function(){return s(s.s=3677)}),_N_E=s.O()}]);