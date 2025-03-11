(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[905],{8483:function(s,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/interactv2/client/Functions/removeCoords",function(){return n(9804)}])},9804:function(s,e,n){"use strict";n.r(e),n.d(e,{__toc:function(){return i}});var r=n(2676),o=n(4944),l=n(1540);let i=[{depth:3,value:"Parameters",id:"parameters"},{depth:3,value:"Example",id:"example"}];function _createMdxContent(s){let e=Object.assign({h1:"h1",p:"p",h3:"h3",ul:"ul",li:"li",code:"code",pre:"pre",span:"span"},(0,l.a)(),s.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{children:"removeCoords"}),"\n",(0,r.jsx)(e.p,{children:"Removes coordinate-based interactions from the game."}),"\n",(0,r.jsx)(e.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"id"})," (",(0,r.jsx)(e.code,{children:"string"}),"): The coordinate ID to remove"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"options?"})," (",(0,r.jsx)(e.code,{children:"string"})," | ",(0,r.jsx)(e.code,{children:"string[]"}),"): Specific option names to remove (optional)"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"suppressWarning?"})," (",(0,r.jsx)(e.code,{children:"boolean"}),"): Suppress warning if ID doesn't exist (optional)"]}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"example",children:"Example"}),"\n",(0,r.jsx)(e.pre,{"data-language":"lua","data-theme":"default",children:(0,r.jsxs)(e.code,{"data-language":"lua","data-theme":"default",children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" id "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" interact."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"addCoords"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"vec3"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"100.0"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"200.0"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"30.0"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"), {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    label "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Interact Here"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    icon "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"hand"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    distance "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"2.0"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"onSelect"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-parameter)"},children:"data"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"Selected!"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"canInteract"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-parameter)"},children:"entity"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-parameter)"},children:"distance"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-parameter)"},children:"coords"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-parameter)"},children:"name"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" distance "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"2.0"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"})"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:" "}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Using interact namespace"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"interact."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"removeCoords"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(id, {"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"option1"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"})"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"interact."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"removeCoords"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(id) "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Remove all options"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:" "}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Using export"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"exports.sleepless_interact:"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"removeCoords"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(id, {"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"option1"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"})"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"exports.sleepless_interact:"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"removeCoords"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(id) "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Remove all options"})]})]})})]})}e.default=(0,o.j)({MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,l.a)(),s.components);return e?(0,r.jsx)(e,{...s,children:(0,r.jsx)(_createMdxContent,{...s})}):_createMdxContent(s)},pageOpts:{filePath:"pages/interactv2/client/Functions/removeCoords.mdx",route:"/interactv2/client/Functions/removeCoords",timestamp:174171764e4,title:"removeCoords",headings:i},pageNextRoute:"/interactv2/client/Functions/removeCoords"})}},function(s){s.O(0,[944,774,888,179],function(){return s(s.s=8483)}),_N_E=s.O()}]);