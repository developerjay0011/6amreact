"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9869],{20724:function(e,i,t){var n=t(64836);i.Z=void 0;var r=n(t(64938)),l=t(85893),o=(0,r.default)((0,l.jsx)("path",{d:"M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}),"ArrowBackIos");i.Z=o},93619:function(e,i,t){var n=t(64836);i.Z=void 0;var r=n(t(64938)),l=t(85893),o=(0,r.default)((0,l.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");i.Z=o},39794:function(e,i,t){t.d(i,{Z:function(){return a}});var n=t(61176),r=t(88767),l=t(67759),o=t(60274);let s=async()=>{let{data:e}=await n.Z.get(o.KZ);return e};function a(){return(0,r.useQuery)("basic-cam",s,{enabled:!1,onError:l.f})}},19869:function(e,i,t){t.d(i,{Z:function(){return N}});var n=t(85893),r=t(67294),l=t(62097),o=t(43963);t(41664);var s=t(58861),a=t(17069),d=t(45269),c=t(9144),h=t(41796),u=t(29630),p=t(20724),x=t(13379),g=t(40291),v=t(57412),m=t(77274);let j=()=>(0,n.jsx)(d.Xw,{sx:{padding:"10px"},children:[...Array(10)].map((e,i)=>(0,n.jsx)(m.Z,{width:"100%",children:(0,n.jsxs)(m.Z,{width:"100%",direction:"row",spacing:1,justifyContent:"center",alignItems:"center",children:[(0,n.jsx)(v.Z,{width:20,height:30}),(0,n.jsx)(v.Z,{width:"100%",height:20}),(0,n.jsx)(v.Z,{width:10,height:20})]})},i))});var Z=t(35762),f=t(52539),w=t(11163),y=t(46573),b=t(9473),C=t(8697),k=t(18377);let E=(0,a.Z)(e=>({popover:{pointerEvents:"none"},paper:{pointerEvents:"auto",padding:".5rem"}})),I=e=>{var i;let{handlePopoverOpenSub:t,catImageUrl:a,openSub:v,anchorElSub:m,subCategory:I,shimmer:S,handlePopoverCloseSub:_}=e,{categories:z}=(0,b.v9)(e=>e.storedData),W=(0,w.useRouter)(),P=(0,l.Z)(),O=E(),{data:F,refetch:q,isFetched:R,isFetching:D,isLoading:G}=(0,g.P)(),L=(0,b.I0)();(0,r.useEffect)(()=>{0===z.length&&q()},[]),(0,r.useEffect)(()=>{(null==F?void 0:F.data)&&L((0,C.DG)(null==F?void 0:F.data))},[F]),P.palette.primary.main;let X=e=>{W.push({pathname:"/category/[id]",query:{id:"".concat((null==e?void 0:e.slug)?null==e?void 0:e.slug:null==e?void 0:e.id),module_id:"".concat((0,f.S)())}},void 0,{shallow:!0})},A=e=>{W.push({pathname:"/sub-category/[id]",query:{id:"".concat((null==e?void 0:e.slug)?null==e?void 0:e.slug:null==e?void 0:e.id),module_id:"".concat((0,f.S)())}},void 0,{shallow:!0})};return(0,n.jsxs)(c.Z,{width:"305px",padding:"20px",spacing:.5,children:[D?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(j,{})}):(0,n.jsx)(n.Fragment,{children:z&&z.length>0&&(0,n.jsx)(n.Fragment,{children:null===(i=null==z?void 0:z.slice(0,10))||void 0===i?void 0:i.map((e,i)=>(0,n.jsxs)(c.Z,{onClick:()=>X(e),direction:"row",justifyContent:"center",alignItems:"center",padding:"5px",onMouseEnter:i=>t(i,e),sx:{cursor:"pointer","&:hover":{backgroundColor:e=>(0,h.Fq)(e.palette.primary.main,.2)}},children:[(0,n.jsxs)(c.Z,{direction:"row",spacing:1,sx:{minWidth:"18px"},width:"100%",children:[(0,n.jsx)(s.Z,{src:"".concat(a,"/").concat(e.image),width:"25px",height:"25px",loading:"lazy",borderRadius:"0.13rem"}),(0,n.jsx)(k.Z,{style:{width:"170px",overflow:"hidden",textOverflow:"ellipsis"},children:(0,n.jsx)(u.Z,{underline:"none",variant:"subtitle2",fontWeight:"400",color:P.palette.neutral[1e3],sx:{display:"-webkit-box",WebkitLineClamp:"1",WebkitBoxOrient:"vertical",overflow:"hidden"},children:e.name})})]}),(0,n.jsxs)(c.Z,{direction:"row",alignItems:"center",gap:1,justifyContent:"space-between",children:[(0,n.jsx)(d.mI,{variant:"subtitle2",nodefaultfont:"true",sx:{paddingRight:(null==e?void 0:e.childes.length)===0&&"20px"},children:(null==e?void 0:e.childes_count)>0&&"(".concat(null==e?void 0:e.childes_count,")")}),(null==e?void 0:e.childes.length)>0&&("rtl"===(0,y.G)()?(0,n.jsx)(p.Z,{style:{width:"12px",height:"12px"},color:P.palette.neutral[400]}):(0,n.jsx)(x.Z,{style:{width:"12px",height:"12px"},color:P.palette.neutral[400]}))]})]},i))})}),(0,n.jsx)(o.ZP,{open:v,anchorEl:m,anchorOrigin:{vertical:"20px",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"left"},className:O.popover,classes:{paper:O.paper},children:(0,n.jsx)(c.Z,{height:"100%",sx:{cursor:"pointer"},alignItems:"flex-start",justifyContent:"center",children:(null==I?void 0:I.length)>0&&(0,n.jsx)(n.Fragment,{children:null==I?void 0:I.map(e=>(0,n.jsx)(c.Z,{direction:"row",spacing:2,px:"1rem",py:".5rem",sx:{"&:hover":{backgroundColor:e=>(0,h.Fq)(e.palette.primary.main,.2)}},onClick:()=>A(e),children:(0,n.jsx)(u.Z,{underline:"none",variant:"subtitle2",fontWeight:"400",color:P.palette.neutral[1e3],width:"200px",overflow:"hidden",textOverflow:"ellipsis",children:e.name})},null==e?void 0:e.id))})})}),(0,n.jsx)(Z.Z,{redirect:"/categories",handlePopoverCloseSub:_})]})};var S=t(79072);t(54028);var _=t(22120),z=t(63051);let W=()=>(0,n.jsx)(d.Xw,{spacing:.5,children:[...Array(10)].map((e,i)=>(0,n.jsx)(m.Z,{spacing:3,children:(0,n.jsx)(v.Z,{width:150,height:20})},i))});var P=t(37698);let O=()=>{let{t:e}=(0,_.$G)(),i=(0,w.useRouter)(),{data:t,refetch:l,isFetching:o}=(0,z.Z)("navbar-stores","all"),{popularStores:s}=(0,b.v9)(e=>e.storedData),a=(0,b.I0)();(0,r.useEffect)(()=>{0===s.length&&l()},[]),(0,r.useEffect)(()=>{t&&a((0,C.Ww)(t))},[t]);let c=e=>{i.push({pathname:"/store/[id]",query:{id:"".concat((null==e?void 0:e.slug)?null==e?void 0:e.slug:null==e?void 0:e.id),module_id:"".concat((0,f.S)())}})},h=e("Popular");return(0,n.jsxs)(d.Xw,{spacing:4,children:[(0,n.jsx)(u.Z,{variant:"h6",fontWeight:"500",children:e("".concat(h," ").concat((0,P.s)()))}),(0,n.jsxs)(m.Z,{width:"100%",spacing:2.5,children:[o?(0,n.jsx)(m.Z,{width:"100%",children:(0,n.jsx)(W,{})}):(0,n.jsx)(n.Fragment,{children:null==s?void 0:s.slice(0,6).map(e=>(0,n.jsx)(m.Z,{width:"100%",onClick:()=>c(e),children:(0,n.jsx)(d.mI,{sx:{fontSize:"14px",fontWeight:"400",cursor:"pointer","&:hover":{color:e=>e.palette.primary.main}},children:e.name})},e.id))}),(0,n.jsx)(m.Z,{width:"70%",justifyContent:"flex-start",alignItems:"center",children:(0,n.jsx)(Z.Z,{redirect:"/store/popular"})})]})]})};var F=t(85296);let q=()=>{let{configData:e}=(0,b.v9)(e=>e.configData),{t:i}=(0,_.$G)(),t=i("New On"),l=(0,w.useRouter)(),{data:o,refetch:s,isFetching:a}=(0,F.Z)(),{newStores:c}=(0,b.v9)(e=>e.storedData),h=(0,b.I0)();(0,r.useEffect)(()=>{0===c.length&&s()},[]),(0,r.useEffect)(()=>{o&&h((0,C.hT)(o))},[o]);let p=e=>{l.push({pathname:"/store/[id]",query:{id:"".concat((null==e?void 0:e.slug)?null==e?void 0:e.slug:null==e?void 0:e.id),module_id:"".concat((0,f.S)())}})};return(0,n.jsxs)(d.Xw,{spacing:4,children:[(0,n.jsx)(u.Z,{variant:"h6",fontWeight:"500",children:"".concat(t," ").concat(null==e?void 0:e.business_name)}),(0,n.jsxs)(m.Z,{width:"100%",spacing:2.5,children:[a?(0,n.jsx)(m.Z,{width:"100%",children:(0,n.jsx)(W,{})}):(0,n.jsx)(n.Fragment,{children:null==c?void 0:c.slice(0,6).map(e=>(0,n.jsx)(m.Z,{width:"100%",onClick:()=>p(e),children:(0,n.jsx)(d.mI,{sx:{fontSize:"14px",fontWeight:"400",cursor:"pointer","&:hover":{color:e=>e.palette.primary.main}},children:e.name})},e.id))}),(0,n.jsx)(m.Z,{width:"70%",justifyContent:"flex-start",alignItems:"center",children:(0,n.jsx)(Z.Z,{redirect:"/store/latest"})})]})]})};t(51126);var R=t(93619);t(61340);let D=e=>{let{campaigns:i,isLoading:t}=e,r=(0,w.useRouter)(),{t:o}=(0,_.$G)(),a=(0,l.Z)(),{configData:c}=(0,b.v9)(e=>e.configData),h=(e,i)=>{e.stopPropagation(),r.push({pathname:"/campaigns/[id]",query:{id:"".concat((null==i?void 0:i.slug)?null==i?void 0:i.slug:null==i?void 0:i.id),module_id:"".concat((0,f.S)())}},void 0,{shallow:!0})};return(0,n.jsxs)(d.Xw,{spacing:4,sx:{height:"100%"},children:[(0,n.jsx)(u.Z,{variant:"h6",fontWeight:"500",textAlign:"center",children:o("Campaigns")}),(null==i?void 0:i.length)>0&&(null==i?void 0:i.slice(0,3).map((e,i)=>{var t;return(0,n.jsxs)(m.Z,{direction:"row",justifyContent:"center",alignItems:"center",spacing:2,sx:{cursor:"pointer"},onClick:i=>h(i,e),children:[(0,n.jsx)(s.Z,{src:"".concat(null==c?void 0:null===(t=c.base_urls)||void 0===t?void 0:t.campaign_image_url,"/").concat(null==e?void 0:e.image),width:"70px",height:"70px",borderRadius:".5rem"}),(0,n.jsxs)(m.Z,{width:"219px",children:[(0,n.jsxs)(m.Z,{direction:"row",alignItems:"center",spacing:.4,children:[(0,n.jsx)(u.Z,{variant:"h6",color:a.palette.primary.main,children:null==e?void 0:e.title}),(0,n.jsx)(R.Z,{sx:{color:e=>e.palette.primary.main,width:"20px",height:"20px"}})]}),(0,n.jsx)(u.Z,{fontSize:"13px",sx:{cursor:"pointer",overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:"2",WebkitBoxOrient:"vertical"},children:null==e?void 0:e.description})]})]},i)})),t&&(0,n.jsx)(m.Z,{children:(0,n.jsx)(v.Z,{width:"100%",height:30})}),(null==i?void 0:i.length)>3&&(0,n.jsx)(m.Z,{height:"100%",width:"100%",sx:{marginTop:"auto"},children:(0,n.jsx)(Z.Z,{redirect:"/campaigns"})})]})};var G=t(39794);let L=()=>{let e=(0,l.Z)(),i=(0,h.Fq)(e.palette.primary.main,.2),{data:t,refetch:o,isLoading:s,isFetching:a}=(0,G.Z)(),{basicCampaigns:c}=(0,b.v9)(e=>e.storedData),u=(0,b.I0)();return(0,r.useEffect)(()=>{0===c.length&&o()},[]),(0,r.useEffect)(()=>{t&&u((0,C.lh)(t))},[t]),(0,n.jsxs)(m.Z,{width:(null==c?void 0:c.length)>0?"843px":"500px",sx:{position:"relative",zIndex:"1",padding:"0px"},children:[(null==c?void 0:c.length)>0&&(0,n.jsx)("span",{style:{position:"absolute",zIndex:"-1",blockSize:"100%",inlineSize:"50%",insetInlineEnd:"0",insetBlockStart:"0",display:"block",backgroundColor:i}}),(0,n.jsx)(d.Xw,{sx:{padding:"2.5rem"},children:(0,n.jsxs)(S.ZP,{container:!0,children:[(0,n.jsx)(S.ZP,{item:!0,md:(null==c?void 0:c.length)>0?3:6,children:(0,n.jsx)(O,{})}),(0,n.jsx)(S.ZP,{item:!0,md:(null==c?void 0:c.length)>0?3:6,children:(0,n.jsx)(q,{})}),(null==c?void 0:c.length)>0&&(0,n.jsx)(S.ZP,{item:!0,md:6,children:(0,n.jsx)(D,{campaigns:c,isLoading:s})})]})})]})},X=(0,a.Z)(e=>({popover:{pointerEvents:"none"},paper:{pointerEvents:"auto"}})),A=e=>{let{catImageUrl:i,open:t,anchorEl:r,handlePopoverOpenSub:s,openSub:a,anchorElSub:c,subCategory:h,popoverFor:u,handlePopoverCloseSub:p}=e,x=X();return(0,l.Z)(),(0,n.jsx)(d.Xw,{children:(0,n.jsx)(o.ZP,{disableScrollLock:!0,id:"mouse-over-popover",open:t,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"rtl"===(0,y.G)()?"right":"left"},transformOrigin:{vertical:"top",horizontal:"rtl"===(0,y.G)()?"right":"left"},className:x.popover,classes:{paper:x.paper},children:"category"===u?(0,n.jsx)(I,{handlePopoverOpenSub:s,catImageUrl:i,openSub:a,anchorElSub:c,subCategory:h,handlePopoverCloseSub:p}):(0,n.jsx)(L,{})})})};var N=A},35762:function(e,i,t){var n=t(85893);t(67294),t(45269);var r=t(51126),l=t(9144),o=t(54225),s=t(11163);t(37494);var a=t(45697),d=t.n(a);let c=e=>{let{redirect:i,handlePopoverCloseSub:t}=e,a=(0,s.useRouter)(),d=()=>{a.push(i,void 0,{shallow:!0})};return(0,n.jsx)(l.Z,{direction:"row",alignItems:"center",gap:1,justifyContent:"center",padding:"10px",sx:{cursor:"pointer"},onMouseEnter:t,children:(0,n.jsx)(o.Z,{onClick:()=>d(),variant:"text",children:(0,r.t)("View More")})})};c.propTypes={redirect:d().string.isRequired},i.Z=c}}]);