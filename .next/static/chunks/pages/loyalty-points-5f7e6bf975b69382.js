(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9312],{40390:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/loyalty-points",function(){return n(8215)}])},8215:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSP:function(){return J},default:function(){return L}});var i=n(85893),a=n(22120),l=n(40793),r=n(74121),o=n(57542),s=n(79104),c=n(70778),d=n(6926),u=n(67294),h=n(45269),p=n(62097),x=n(79072),g=n(29630),f=n(58861),j=n(77274),m=n(57412),v=n(64637),y=n(9473),w=n(65337),Z=n(83291),A={src:"/_next/static/media/tropy.5eadcfb7.png",height:54,width:54,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABAElEQVR42h2Iu0oDQRRA753HbkgiGCG4Wwn+gL2NQRQ7scgfaGVhYSn4Edr4D66IIGgrWNmaQlDUQlZEjdGdjdmdmb2TSU5zDgfd3Wbw9/G6JWXYFdogBG2ARsvZ/O2sHvxcCJv1VznnHUe2S4vz6CoN7DtzTNa/tC0VQylTKAp00dyQsphARUStLMd/BSBrKROdm57Wg1P6HTahQcw1NUPlZqwxiRmM7nk/WRDAxYvOP5/RqjUYqRJUtQ0ML4lVAsFzfrgcepUg3DECWd/7SLXpw4OdDeaDntJ8b31JHjEewu0j3/XvJJ7lTFz1CpiApoiShF9DaHClXcbgeXhHGAPvfHIA2MzjDwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},b=n(76714),_=n(61176),R=n(60274),C=n(88767);let P=async t=>{let{offset:e}=t,{data:n}=await _.Z.get("".concat(R.HM,"?offset=").concat(e,"&limit=").concat(R.bU));return n};var S=n(45697),D=n.n(S),W=n(86390),I=n(81401),E=n(89113),U=n(82175),N=n(74231),O=n(86501),T=n(67836),z=n(31812);let F=async t=>{let{data:e}=await _.Z.post(R.ZM,t);return e};var H=n(67759),k=n(70557);let Q=t=>{let{loyalitydata:e,configData:n,handleClose:a,refetch:l,profileRefetch:r,t:o}=t,s=(0,U.TA)({initialValues:{point:e||0},validationSchema:N.Ry({point:N.Rx().required(o("Please give an amount"))}),async onSubmit(t,i){if(t.point<=e&&t.point>=(null==n?void 0:n.loyalty_point_exchange_rate)){if(t.point<(null==n?void 0:n.loyalty_point_minimum_point))O.ZP.error("Please exchange more than ".concat(null==n?void 0:n.loyalty_point_minimum_point," points"));else try{p(t)}catch(a){}}else O.ZP.error(o("insufficient amount"))}}),{mutate:c,isLoading:d,error:u}=(0,C.useMutation)("post-loyalty-convert-value",F),p=t=>{let e=async t=>{if(203===t.status){var e,n;null==t||null===(e=t.data)||void 0===e||null===(n=e.errors)||void 0===n||n.forEach(t=>O.ZP.error(t.message))}else O.ZP.success(o(k.Ob)),await l(),await r(),null==a||a()};c(t,{onSuccess:e,onError:H.R})};return(0,i.jsxs)(h.Xw,{spacing:2,component:"form",noValidate:!0,onSubmit:s.handleSubmit,children:[(0,i.jsx)(T.Z,{required:!0,type:"number",sx:{width:"100%",color:t=>t.palette.neutral[1e3]},id:"outlined-basic",label:o("Amount"),variant:"outlined",name:"point",value:s.values.point,onChange:s.handleChange,defaultValue:s.values.point,error:s.touched.point&&Boolean(s.errors.point),helperText:s.touched.point&&s.errors.point}),(0,i.jsx)(z.Z,{variant:"contained",type:"submit",fullWidth:!0,loading:d,children:o("Submit")})]})};Q.propTypes={};let B=t=>{let{openModal:e,handleClose:n,t:a,theme:l,configData:r,loyalitydata:o,refetch:s,profileRefetch:c}=t,d=a("points");return(0,i.jsx)(W.Z,{openModal:e,handleClose:n,children:(0,i.jsx)(I.Z,{sx:{p:"2rem"},children:(0,i.jsxs)(h.Xw,{spacing:3,children:[(0,i.jsxs)(h.Xw,{alignItems:"center",justifyContent:"center",children:[(0,i.jsx)(g.Z,{align:"center",color:l.palette.neutral[1e3],fontWeight:"bold",variant:"subtitle1",children:a("Your loyalty point will convert to currency and transfer to wallet")}),(0,i.jsxs)(j.Z,{direction:"row",alignItems:"center",spacing:.5,children:[(0,i.jsxs)(g.Z,{align:"center",color:"primary.main",fontWeight:"bold",variant:"subtitle1",children:["".concat(null==r?void 0:r.loyalty_point_exchange_rate," ").concat(d)," ="]}),(0,i.jsx)(g.Z,{align:"center",color:"primary.main",fontWeight:"bold",variant:"subtitle1",children:"".concat((0,E.B9)(1))})]})]}),(0,i.jsx)(Q,{loyalitydata:o,configData:r,handleClose:n,refetch:s,profileRefetch:c,t:a})]})})})};B.propTypes={openModal:D().bool.isRequired,handleClose:D().func.isRequired};let M=t=>{var e;let{configData:n,t:a}=t,[l,r]=(0,u.useState)(1),[o,s]=(0,u.useState)(!1),c=(0,p.Z)(),_=(0,y.I0)(),R=t=>{_((0,w.av)(t))},{data:S,refetch:D}=(0,Z.Z)(R),{data:W,refetch:I,isLoading:E}=(e={offset:l},(0,C.useQuery)("loyalty-point-transactions-list",()=>P(e),{enabled:!1}));(0,u.useEffect)(()=>{U()},[]);let U=async()=>{await D(),await I()},N=()=>{s(!0)};return(0,i.jsxs)(h.Xw,{alignItems:"center",justifyContent:"space-between",sx:{height:"100%"},children:[(0,i.jsx)(h.iD,{sx:{paddingTop:"4rem",minHeight:"60vh"},children:(0,i.jsxs)(x.ZP,{container:!0,children:[(0,i.jsx)(x.ZP,{xs:12,md:12,align:"center",children:(0,i.jsx)(d.A,{nobackground:"true",children:(0,i.jsxs)(h.Xw,{direction:"row",justifyContent:"center",alignItems:"center",gap:2,flexWrap:"wrap",children:[(0,i.jsx)(f.Z,{src:null==A?void 0:A.src,width:"50px",height:"50px"}),(0,i.jsxs)(j.Z,{alignItems:"flex-start",children:[(0,i.jsx)(g.Z,{fontSize:"20px",fontWeight:"bold",color:c.palette.neutral[1e3],children:S?(0,i.jsx)(i.Fragment,{children:null==S?void 0:S.loyalty_point}):(0,i.jsx)(m.Z,{variant:"text",width:"100px"})}),(0,i.jsx)(g.Z,{color:c.palette.neutral[1e3],children:a("Loyalty Points")})]}),(0,i.jsx)(b.KM,{variant:"contained",onClick:()=>N(),children:a("Convert to currency now")})]})})}),(0,i.jsx)(x.ZP,{item:!0,xs:12,children:(0,i.jsx)(v.Z,{data:W,isLoading:E,page:"loyalty"})})]})}),o&&(0,i.jsx)(B,{configData:n,theme:c,t:a,openModal:o,handleClose:()=>s(!1),loyalitydata:null==S?void 0:S.loyalty_point,refetch:I,profileRefetch:D})]})};var X=n(46941),q=n(11163);let G=t=>{let{configData:e,landingPageData:n}=t,{t:d}=(0,a.$G)(),u=(0,q.useRouter)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.ZP,{}),(0,i.jsx)(r.default,{title:"Loyalty points - ".concat(null==e?void 0:e.business_name)}),(0,i.jsx)(o.Z,{configData:e,landingPageData:n,children:(0,i.jsx)(s.Z,{children:(0,i.jsx)(X.Z,{from:u.pathname.replace("/",""),children:(0,i.jsx)(c.Z,{component:(0,i.jsx)(M,{configData:e,t:d}),configData:e,t:d})})})})]})};var J=!0,L=G},83291:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var i=n(61176),a=n(88767),l=n(60274),r=n(67759);let o=async()=>{let{data:t}=await i.Z.get(l.RO);return t};function s(t){return(0,a.useQuery)("user-profile",o,{enabled:!1,onSuccess:t,onError:r.R})}},68632:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var i=n(61176),a=n(60274),l=n(88767);let r=async t=>{let{offset:e}=t,{data:n}=await i.Z.get("".concat(a.kY,"?offset=").concat(e,"&limit=").concat(a.bU));return n};function o(t){return(0,l.useQuery)("wallet-transactions-list",()=>r(t),{enabled:!1})}},64637:function(t,e,n){"use strict";n.d(e,{Z:function(){return y}});var i=n(85893);n(67294);var a=n(29630),l=n(45269),r=n(79072),o=n(77274),s=n(57412);let c=()=>(0,i.jsx)(i.Fragment,{children:[void 0,void 0,void 0,void 0].map((t,e)=>(0,i.jsxs)(r.ZP,{item:!0,xs:12,sx:{padding:"10px"},children:[(0,i.jsxs)(o.Z,{direction:"row",justifyContent:"space-between",children:[(0,i.jsx)(s.Z,{variant:"text",width:"30%",height:20}),(0,i.jsx)(s.Z,{variant:"text",width:"10%",height:20})]}),(0,i.jsxs)(o.Z,{direction:"row",justifyContent:"space-between",children:[(0,i.jsx)(s.Z,{variant:"text",width:"30%",height:20}),(0,i.jsx)(s.Z,{variant:"text",width:"10%",height:20})]})]},e))});var d=n(44373),u=n(51126),h=n(52443),p=n(89113);let x=t=>{let{data:e,page:n}=t,s=(0,h.u)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.ZP,{container:!0,md:12,xs:12,spacing:2,sx:{padding:"10px"},children:[(0,i.jsxs)(r.ZP,{item:!0,md:7,xs:4.5,children:[(0,i.jsx)(a.Z,{sx:{fontWeight:"700"},children:"loyalty"===n?(0,i.jsxs)(i.Fragment,{children:[(null==e?void 0:e.transaction_type)==="point_to_wallet"?null==e?void 0:e.debit:null==e?void 0:e.credit," ",(0,u.t)("points")]}):(0,i.jsx)(i.Fragment,{children:(0,p.B9)((null==e?void 0:e.transaction_type)==="point_to_wallet"?null==e?void 0:e.debit:null==e?void 0:e.credit)})}),(0,i.jsx)(l.mI,{sx:{fontSize:"14px",textTransform:"capitalize"},children:(0,u.t)(null==e?void 0:e.transaction_type).replaceAll("_"," ")})]}),(0,i.jsx)(r.ZP,{item:!0,md:5,xs:7.5,justifySelf:"flex-end",children:(0,i.jsxs)(o.Z,{direction:"row",justifyContent:"flex-end",alignItems:"center",spacing:{xs:1,md:.5},flexWrap:"wrap",children:[(0,i.jsx)(l.mI,{sx:{fontSize:"14px"},children:null==e?void 0:e.created_at}),(0,i.jsx)(a.Z,{sx:{fontSize:"14px",textTransform:"capitalize",paddingRight:"0px"},color:(null==e?void 0:e.transaction_type)==="point_to_wallet"?s.palette.success.main:s.palette.error.main,children:(null==e?void 0:e.transaction_type)==="point_to_wallet"?(0,u.t)("debit"):(0,u.t)("credit")})]})})]}),(0,i.jsx)(d.Z,{})]})};x.propTypes={};var g=n(58797),f=n(3715),j=n(22120);n(68632);var m=n(35740);let v=t=>{var e,n,l;let{data:r,isLoading:o,page:s}=t,{t:d}=(0,j.$G)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.Z,{fontSize:"18px",fontWeight:"700",py:"1rem",children:d("Transaction History")}),(0,i.jsx)(m.Z,{}),o?(0,i.jsx)(c,{}):r&&(null==r?void 0:null===(e=r.data)||void 0===e?void 0:e.length)>0?null==r?void 0:null===(n=r.data)||void 0===n?void 0:n.map((t,e)=>(0,i.jsx)(x,{data:t,page:s},e)):(0,i.jsx)(i.Fragment,{children:(null==r?void 0:null===(l=r.data)||void 0===l?void 0:l.length)===0&&(0,i.jsx)(g.Z,{label:"No transaction found",image:f.Z})})]})};var y=v},6926:function(t,e,n){"use strict";n.d(e,{A:function(){return w},Z:function(){return A}});var i=n(85893),a=n(67294),l=n(45269),r=n(62097),o=n(79072),s=n(29630),c=n(81719),d=n(18377),u=n(77274),h=n(58861),p={src:"/_next/static/media/wallet.8a35cf6f.png",height:60,width:60,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAZElEQVR42j3NOwrCUAAF0Yu/ytouuIaAiI2gUdIIRrARNyA8MJW6/IMWklNOMzFOLNy8bROjJCq9q8bFOolO8VHstF6qOGdgqYtDYpqYODl6RvsPcw8bfewzULtH0WjN1H4fqy9e7DlDTa9FOgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},x=n(65337),g=n(83291),f=n(9473),j=n(89113),m=n(57412),v=n(64637),y=n(68632);let w=(0,c.ZP)(d.Z)(t=>{let{theme:e,nobackground:n}=t;return{display:"flex",height:"123px",background:"true"===n?"inherit":e.palette.primary.main,borderRadius:"10px",[e.breakpoints.up("xs")]:{width:"100%",maxWidth:"343px"},[e.breakpoints.up("md")]:{width:"330px"}}}),Z=t=>{let{configData:e,t:n}=t,c=(0,r.Z)(),d=(0,f.I0)(),Z=t=>{d((0,x.av)(t))},{data:A,refetch:b}=(0,g.Z)(Z),[_,R]=(0,a.useState)(1),{data:C,refetch:P,isLoading:S}=(0,y.Z)({offset:_});(0,a.useEffect)(()=>{D()},[]);let D=async()=>{await P(),await b()};return(0,i.jsx)(l.Xw,{my:"2rem",alignItems:"center",justifyContent:"space-between",sx:{height:"100%"},children:(0,i.jsx)(l.iD,{sx:{paddingTop:"4rem",minHeight:"60vh"},children:(0,i.jsxs)(o.ZP,{container:!0,children:[(0,i.jsx)(o.ZP,{xs:12,md:12,align:"center",children:(0,i.jsx)(w,{children:(0,i.jsxs)(l.Xw,{direction:"row",justifyContent:"center",alignItems:"center",gap:2,flexWrap:"wrap",children:[(0,i.jsx)(h.Z,{src:null==p?void 0:p.src,width:"60px",height:"60px"}),(0,i.jsxs)(u.Z,{alignItems:"flex-start",children:[(0,i.jsx)(s.Z,{fontWeight:"bold",color:c.palette.whiteContainer.main,children:n("Wallet Amount")}),(0,i.jsx)(s.Z,{fontSize:"20px",fontWeight:"bold",color:c.palette.whiteContainer.main,children:A?(0,j.B9)(null==A?void 0:A.wallet_balance):(0,i.jsx)(m.Z,{variant:"text",width:"100px"})})]})]})})}),(0,i.jsx)(o.ZP,{item:!0,xs:12,children:(0,i.jsx)(v.Z,{data:C,isLoading:S})})]})})})};Z.propTypes={};var A=Z}},function(t){t.O(0,[1255,2506,6454,5269,580,7886,9774,2888,179],function(){return t(t.s=40390)}),_N_E=t.O()}]);