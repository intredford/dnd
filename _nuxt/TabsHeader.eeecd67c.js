import{l as b,s as l,M as m,o as s,i as a,F as v,r as g,b as u,j as x,y,q as k,t as I,p as T,k as S,N as C,a as $}from"./entry.7903f98a.js";/* empty css                       */const N=t=>(T("data-v-9b59cc28"),t=t(),S(),t),q={class:"tabs-header"},w=["onClick"],B=N(()=>u("span",{class:"tab"},null,-1)),U=[B],F=b({__name:"TabsHeader",props:{tabs:{type:Array,required:!0},activeTabIndex:{type:Number,required:!0}},emits:["update:activeTabIndex"],setup(t,{emit:p}){const h=t,n=l(),r=l(),o=e=>{e&&(r.value.style.insetInlineStart=`${e.offsetLeft}px`,r.value.style.width=`${e.clientWidth}px`)},f=(e,c)=>{p("update:activeTabIndex",c),C(()=>o(e.target))};return m(n,e=>{e&&setTimeout(()=>{o(n.value.children[h.activeTabIndex])},50)},{immediate:!0}),(e,c)=>(s(),a("div",q,[t.tabs?(s(),a("div",{key:0,ref_key:"tabsRef",ref:n,class:"tabs"},[(s(!0),a(v,null,g(t.tabs,({label:d},i)=>(s(),a("button",{key:`${i}${d}`,class:k([t.activeTabIndex===i?"active":"not-active"]),onClick:_=>f(_,i)},I(d),11,w))),128)),u("span",{ref_key:"highlightUnderline",ref:r,class:"highlight-underline"},U,512)],512)):x("",!0),y(e.$slots,"footer",{},void 0,!0)]))}}),R=$(F,[["__scopeId","data-v-9b59cc28"]]);export{R as default};
