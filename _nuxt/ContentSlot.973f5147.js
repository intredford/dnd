import{l as c,C as g,D as h,z as p,E as y,K as w}from"./entry.7903f98a.js";const C=c({name:"ContentSlot",functional:!0,props:{use:{type:Function,default:void 0},unwrap:{type:[Boolean,String],default:!1}},setup(n){const{parent:u}=w(),{between:r,default:l}=g(),i=h(()=>typeof n.unwrap=="string"?n.unwrap.split(" "):["*"]);return{fallbackSlot:l,tags:i,between:r,parent:u}},render({use:n,unwrap:u,fallbackSlot:r,between:l,tags:i,parent:e}){var f;try{let o=n;if(typeof n=="string"&&(o=(e==null?void 0:e.slots[n])||((f=e==null?void 0:e.parent)==null?void 0:f.slots[n]),console.warn(`Please set :use="$slots.${n}" in <ContentSlot> component to enable reactivity`)),!o)return r?r():p("div");if(!u)return[o()];const{flatUnwrap:d}=y(),a=d(o(),i);return l?a.flatMap((t,s)=>s===0?[t]:[l(),t]):a.reduce((t,s)=>(typeof s.children=="string"?typeof t[t.length-1]=="string"?t[t.length-1]+=s.children:t.push(s.children):t.push(s),t),[])}catch{return p("div")}}}),m=C;export{m as default};
