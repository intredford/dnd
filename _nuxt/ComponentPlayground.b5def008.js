import{T as s,u as i,D as p,l as c,X as u,s as l,z as e,a as d}from"./entry.63b30bd8.js";import{u as f}from"./asyncData.37933a4f.js";import y from"./Ellipsis.98a6813a.js";import g from"./ComponentPlaygroundData.7b16f9a7.js";/* empty css                                *//* empty css                     */import"./TabsHeader.8a6fda36.js";/* empty css                       */import"./ComponentPlaygroundProps.d4a52424.js";import"./ProseH4.7676919f.js";/* empty css                    */import"./ProseCodeInline.7c3c6ee1.js";/* empty css                            */import"./Badge.a41b92db.js";import"./ContentSlot.92c61370.js";/* empty css                  */import"./ProseP.0f31126e.js";/* empty css                   */import"./index.b242a161.js";/* empty css                                     */import"./ComponentPlaygroundSlots.vue.d34950c1.js";import"./ComponentPlaygroundTokens.vue.23df14a8.js";/* empty css                                    */async function h(o){s();const t=i(o);{const{data:n}=await f(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const _=c({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>u(o.component)),n=l({...o.props}),r=await h(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,m])=>{if(r.startsWith("component-")){const a=r.replace("component-","");n[a]=m}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(y,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(g,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),x=d(_,[["__scopeId","data-v-9ca9b996"]]);export{x as default};