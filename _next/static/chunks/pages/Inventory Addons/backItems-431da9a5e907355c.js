(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[270],{1799:function(s,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Inventory Addons/backItems",function(){return o(5932)}])},5932:function(s,e,o){"use strict";o.r(e),o.d(e,{__toc:function(){return r}});var n=o(1527),l=o(2059),i=o(3443);let r=[{depth:2,value:"Overview",id:"overview"},{depth:3,value:"1. Default Slots Configuration (defaultSlots)",id:"1-default-slots-configuration-defaultslots"},{depth:4,value:"Slot Class Specification",id:"slot-class-specification"},{depth:3,value:"2. Back Items Configuration (BackItems)",id:"2-back-items-configuration-backitems"},{depth:4,value:"BackItem Class Overview",id:"backitem-class-overview"},{depth:2,value:"Configuration Examples",id:"configuration-examples"},{depth:3,value:"Configuring Default Slots",id:"configuring-default-slots"},{depth:3,value:"Configuring Back Items",id:"configuring-back-items"},{depth:4,value:"Normal Weapon Back Item",id:"normal-weapon-back-item"},{depth:4,value:"Normal Non-Weapon Back Item",id:"normal-non-weapon-back-item"},{depth:4,value:"Weapon Back Item with Alternative model",id:"weapon-back-item-with-alternative-model"},{depth:4,value:"Weapon Back Item with customPos",id:"weapon-back-item-with-custompos"},{depth:4,value:"Back Item with ignoreLimits",id:"back-item-with-ignorelimits"},{depth:2,value:"Customization Guidance",id:"customization-guidance"}];function t(s){let e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",ol:"ol",li:"li",strong:"strong",h3:"h3",h4:"h4",ul:"ul",pre:"pre",span:"span",hr:"hr"},(0,i.a)(),s.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{children:"backItems 2.0"}),"\n",(0,n.jsx)(e.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(e.p,{children:["you can find the config in ",(0,n.jsx)(e.code,{children:"backitems/config.lua"})]}),"\n",(0,n.jsxs)(e.p,{children:["The ",(0,n.jsx)(e.code,{children:"backItems"})," module comprises two main configurations:"]}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsx)(e.li,{children:(0,n.jsxs)(e.strong,{children:["Default Slots Configuration (",(0,n.jsx)(e.code,{children:"defaultSlots"}),")"]})}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsxs)(e.strong,{children:["Back Items Configuration (",(0,n.jsx)(e.code,{children:"BackItems"}),")"]})}),"\n"]}),"\n",(0,n.jsxs)(e.h3,{id:"1-default-slots-configuration-defaultslots",children:["1. Default Slots Configuration (",(0,n.jsx)(e.code,{children:"defaultSlots"}),")"]}),"\n",(0,n.jsx)(e.p,{children:"This configuration defines the default slots for item placement, each linked to a specific bone, position, and rotation."}),"\n",(0,n.jsx)(e.h4,{id:"slot-class-specification",children:"Slot Class Specification"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"bone"})," (number): The ID of the bone where the slot is attached."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"pos"})," (vector3): The position vector (x, y, z) relative to the bone."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"rot"})," (vector3): The rotation vector (x, y, z) relative to the bone."]}),"\n"]}),"\n",(0,n.jsxs)(e.h3,{id:"2-back-items-configuration-backitems",children:["2. Back Items Configuration (",(0,n.jsx)(e.code,{children:"BackItems"}),")"]}),"\n",(0,n.jsx)(e.p,{children:"This configuration outlines the properties and placement rules for back items."}),"\n",(0,n.jsx)(e.h4,{id:"backitem-class-overview",children:"BackItem Class Overview"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"prio"})," (number): Sets the display priority of the item."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"group"})," (string, optional): Defines the slot group for the item, defaulting to 'back'."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"customPos"})," (table, optional): Specifies a custom position for the item, which includes:","\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"bone"})," (number, optional): The bone ID for custom attachment. ",(0,n.jsxs)(e.strong,{children:["Mandatory if ",(0,n.jsx)(e.code,{children:"ignoreLimits"})," is utilized"]}),"."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"pos"})," (vector3, optional): The custom position vector. ",(0,n.jsxs)(e.strong,{children:["Mandatory if ",(0,n.jsx)(e.code,{children:"ignoreLimits"})," is utilized"]}),"."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"rot"})," (vector3, optional): The custom rotation vector. ",(0,n.jsxs)(e.strong,{children:["Mandatory if ",(0,n.jsx)(e.code,{children:"ignoreLimits"})," is utilized"]}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"ignoreLimits"})," (boolean, optional): When true, the item attaches regardless of available slots. ",(0,n.jsxs)(e.strong,{children:["Requires a full ",(0,n.jsx)(e.code,{children:"customPos"})," setup"]}),"."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"model"})," (number, optional): Necessary for non-weapon items or alternative models for weapons."]}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"configuration-examples",children:"Configuration Examples"}),"\n",(0,n.jsx)(e.h3,{id:"configuring-default-slots",children:"Configuring Default Slots"}),"\n",(0,n.jsxs)(e.p,{children:["Define default slots in ",(0,n.jsx)(e.code,{children:"Config.defaultSlots"}),". Example:"]}),"\n",(0,n.jsx)(e.pre,{"data-language":"lua","data-theme":"default",children:(0,n.jsxs)(e.code,{"data-language":"lua","data-theme":"default",children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"Config.defaultSlots "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    ["}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'back'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        { bone "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"24818"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", pos "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"vec3"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0.09"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0.16"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0.12"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"), rot "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"vec3"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0.0"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"180.0"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0.0"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:") },"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"..."})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,n.jsx)(e.h3,{id:"configuring-back-items",children:"Configuring Back Items"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["the ",(0,n.jsx)(e.strong,{children:"index"})," for the back items should be the same as the ",(0,n.jsx)(e.strong,{children:"item name"})," in the inventory"]}),"\n"]}),"\n",(0,n.jsx)(e.h4,{id:"normal-weapon-back-item",children:"Normal Weapon Back Item"}),"\n",(0,n.jsx)(e.pre,{"data-language":"lua","data-theme":"default",children:(0,n.jsxs)(e.code,{"data-language":"lua","data-theme":"default",children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"Config.BackItems "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    ["}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'WEAPON_CARBINERIFLE'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        prio "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"3"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        group "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'back'"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    },"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,n.jsx)(e.h4,{id:"normal-non-weapon-back-item",children:"Normal Non-Weapon Back Item"}),"\n",(0,n.jsx)(e.pre,{"data-language":"lua","data-theme":"default",children:(0,n.jsxs)(e.code,{"data-language":"lua","data-theme":"default",children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"Config.BackItems "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    ["}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'cone'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        prio "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"3"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        model "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"`prop_roadcone02a`"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:",  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Required model for non-weapons"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        group "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'back'"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    },"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,n.jsxs)(e.h4,{id:"weapon-back-item-with-alternative-model",children:["Weapon Back Item with Alternative ",(0,n.jsx)(e.code,{children:"model"})]}),"\n",(0,n.jsx)(e.pre,{"data-language":"lua","data-theme":"default",children:(0,n.jsxs)(e.code,{"data-language":"lua","data-theme":"default",children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"Config.BackItems "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    ["}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'katana'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        prio "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"3"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        model "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"`sheathed_katana`"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:",  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"-- Optional alternative model for weapons"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        group "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'back'"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    },"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,n.jsxs)(e.h4,{id:"weapon-back-item-with-custompos",children:["Weapon Back Item with ",(0,n.jsx)(e.code,{children:"customPos"})]}),"\n",(0,n.jsx)(e.pre,{"data-language":"lua","data-theme":"default",children:(0,n.jsxs)(e.code,{"data-language":"lua","data-theme":"default",children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"Config.BackItems "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    ["}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'WEAPON_BAT'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        prio "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"3"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        group "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'back'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        customPos "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            pos "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { x "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0.4"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", y "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0.15"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" },"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            rot "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { y "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"270.0"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" }"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        }"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    },"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,n.jsxs)(e.h4,{id:"back-item-with-ignorelimits",children:["Back Item with ",(0,n.jsx)(e.code,{children:"ignoreLimits"})]}),"\n",(0,n.jsxs)(e.p,{children:["items with ",(0,n.jsx)(e.code,{children:"ignoreLimits"})," will ALWAYS equip when in the inventory. they dont use a slot group or prio, but do require a complete customPos"]}),"\n",(0,n.jsx)(e.p,{children:"this is an example of a cone that gets put on your head"}),"\n",(0,n.jsx)(e.pre,{"data-language":"lua","data-theme":"default",children:(0,n.jsxs)(e.code,{"data-language":"lua","data-theme":"default",children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"Config.BackItems "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    ["}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'cone'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        ignoreLimits "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        model "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"`prop_roadcone02a`"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        customPos "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            bone "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"12844"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            pos "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"vec3"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0.06"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0.0"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0.0"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"),"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            rot "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"vec3"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0.0"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"90.0"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0.0"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        }"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,n.jsx)(e.h2,{id:"customization-guidance",children:"Customization Guidance"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"Ensure correct bone IDs, positions, and rotations for desired item placements."}),"\n",(0,n.jsxs)(e.li,{children:["Use ",(0,n.jsx)(e.code,{children:"ignoreLimits"})," only with a complete ",(0,n.jsx)(e.code,{children:"customPos"}),"."]}),"\n",(0,n.jsxs)(e.li,{children:["The ",(0,n.jsx)(e.code,{children:"model"})," field is required for non-weapon items or alternative weapon models."]}),"\n"]}),"\n",(0,n.jsx)(e.hr,{}),"\n",(0,n.jsxs)(e.p,{children:["This updated documentation aims to provide a clear and comprehensive guide for users to effectively configure the ",(0,n.jsx)(e.code,{children:"backItems"})," module with a focus on special cases and requirements."]})]})}e.default=(0,l.j)({MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,i.a)(),s.components);return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(t,{...s})}):t(s)},pageOpts:{filePath:"pages/Inventory Addons/backItems.mdx",route:"/Inventory Addons/backItems",title:"backItems 2.0",headings:r},pageNextRoute:"/Inventory Addons/backItems"})}},function(s){s.O(0,[59,774,888,179],function(){return s(s.s=1799)}),_N_E=s.O()}]);