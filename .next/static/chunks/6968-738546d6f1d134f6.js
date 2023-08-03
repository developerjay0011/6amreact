"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6968],{54675:function(e,n,t){t.d(n,{t:function(){return s}});var o=t(88767),l=t(60274),i=t(61176);let r=async e=>{let{data:n}=await i.Z.post("".concat(l.ig),{phone:null==e?void 0:e.phone,otp:null==e?void 0:e.reset_token});return n},s=()=>(0,o.useMutation)("verify_phone_otp",r)},83291:function(e,n,t){t.d(n,{Z:function(){return a}});var o=t(61176),l=t(88767),i=t(60274),r=t(67759);let s=async()=>{let{data:e}=await o.Z.get(i.RO);return e};function a(e){return(0,l.useQuery)("user-profile",s,{enabled:!1,onSuccess:e,onError:r.R})}},4561:function(e,n,t){var o=t(85893);t(67294);var l=t(58861),i=t(29630),r=t(45269),s=t(18377),a=t(11163);let d=e=>{var n;let{title:t,configData:d}=e,u=null==d?void 0:null===(n=d.base_urls)||void 0===n?void 0:n.business_logo_url;localStorage.getItem("zoneid");let c=(0,a.useRouter)(),h=()=>{c.pathname.includes("/auth")&&c.push("/home",void 0,{shallow:!0})};return(0,o.jsxs)(r.Xw,{justifyContent:"center",alignItems:"center",spacing:2,children:[(0,o.jsx)(s.Z,{onClick:h,children:(0,o.jsx)(l.Z,{width:"150px",height:"50px",objectfit:"cover",src:"".concat(u,"/").concat(null==d?void 0:d.logo)})}),(0,o.jsx)(i.Z,{variant:"h4",textTransform:"uppercase",children:t})]})};n.Z=d},52159:function(e,n,t){t.d(n,{Z:function(){return ef}});var o=t(85893),l=t(67294),i=t(45269),r=t(62097),s=t(79104),a=t(22841),d=t(75158),u=t(29630),c=t(18377),h=t(65304),p=t(42492),m=t(51126),v=t(46573);let g=e=>{let{loginFormik:n,configData:t,handleOnChange:l,passwordHandler:r}=e,s=(0,v.G)()?(0,v.G)():"ltr";return(0,o.jsxs)(i.Xw,{alignItems:"center",spacing:{xs:2,md:2},children:[(0,o.jsx)(h.Z,{value:n.values.phone,onHandleChange:l,initCountry:null==t?void 0:t.country,touched:n.touched.phone,errors:n.errors.phone,lanDirection:s}),(0,o.jsx)(p.Z,{required:"true",type:"password",label:(0,m.t)("Password"),touched:n.touched.password,errors:n.errors.password,fieldProps:n.getFieldProps("password"),onChangeHandler:r,value:n.values.password})]})};var x=t(77591),j=t(4561),f=t(31812),w=t(11163),b=t(74231),Z=t(22120);let S=()=>{let{t:e}=(0,Z.$G)();return b.Ry({phone:b.Z_().required(e("Please give a phone number")).min(10,"number must be 10 digits"),password:b.Z_().min(6,e("Password is too short - should be 6 chars minimum.")).required(e("Password is required"))})};var y=t(86501),k=t(67759),I=t(82175),C=t(88767),_=t(60274),A=t(61176);let D=async e=>{let{data:n}=await A.Z.post("".concat(_.JF),e);return n},E=e=>(0,C.useMutation)("sign-In",D,{onError:e});var R=t(44442),O=t(83291),T=t(9473),L=t(65337),F=t(70557),P=t(41664),q=t.n(P),G=t(9144),X=t(96245);let M=async e=>{let{data:n}=await A.Z.post("".concat(_.sL),e);return n},N=()=>(0,C.useMutation)("email_post_request",M);var B=t(86390),U=t(81401),V=t(51195);let H=async e=>{let{data:n}=await A.Z.post("".concat(_.kw),e);return n},J=()=>(0,C.useMutation)("info_post_request",H),z=e=>{let{userInfo:n,jwtToken:t,medium:l,handleRegistrationOnSuccess:r,configData:s,lanDirection:a}=e,{t:d}=(0,Z.$G)(),{mutate:u,isLoading:c}=J(),p=(0,I.TA)({initialValues:{phone:""},validationSchema:b.Ry({phone:b.Z_().required(d("Please give a phone number")).min(10,"number must be 10 digits")}),async onSubmit(e,n){try{m(e)}catch(t){}}}),m=e=>{let o={email:null==n?void 0:n.email,token:null==t?void 0:t.credential,unique_id:null==t?void 0:t.clientId,medium:l,phone:e.phone};u(o,{onSuccess(e){r(null==e?void 0:e.token)},onError:k.R})},v=e=>{p.setFieldValue("phone","+".concat(e))};return(0,o.jsx)(U.Z,{sx:{padding:"1rem",position:"relative"},children:(0,o.jsx)("form",{onSubmit:p.handleSubmit,noValidate:!0,children:(0,o.jsxs)(i.Xw,{spacing:2,sx:{position:"relative"},children:[(0,o.jsx)(V.Z,{type:"info",text:d("Give a valid phone number to continue sign-in")}),(0,o.jsx)(h.Z,{value:p.values.phone,onHandleChange:v,initCountry:null==s?void 0:s.country,touched:p.touched.phone,errors:p.errors.phone,lanDirection:a}),(0,o.jsx)(f.Z,{type:"submit",fullWidth:!0,variant:"contained",loading:c,children:d("Continue")})]})})})};z.propTypes={};var W=t(79180),Q=t(54675);let $={appleId:"",serviceId:"",privateKey:"",redirectURI:""};var K=t(61225),Y=t(1568);let ee=e=>{let{openModal:n,setModalOpen:t,children:l,disableAutoFocus:s}=e,a=(0,r.Z)();(0,K.Z)(a.breakpoints.up("sm"));let d=(e,n)=>{n&&"backdropClick"==n&&s||t(!1)};return(0,o.jsx)("div",{children:(0,o.jsx)(Y.Z,{open:n,onClose:d,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",disableAutoFocus:s,backDrop:!0,children:(0,o.jsx)(i.kY,{children:l})})})};ee.propTypes={};let en=e=>{let{handleSuccess:n,configData:t,handleParentModalClose:i}=e,[r,s]=(0,l.useState)(null),[a,d]=(0,l.useState)(null),[u,c]=(0,l.useState)(!1),[h,p]=(0,l.useState)(!1),[m,g]=(0,l.useState)({phone:""}),[x,j]=(0,l.useState)(null);(0,w.useRouter)();let{mutate:f}=N(),b=e=>{(null==e?void 0:e.token)?n(e.token):c(!0)};(0,l.useEffect)(()=>{(null==m?void 0:m.phone)!==""&&p(!0)},[m]);let Z=e=>{(null==t?void 0:t.customer_verification)?1===Number.parseInt(null==e?void 0:e.is_phone_verified)?b(e):((null==e?void 0:e.phone)&&g({phone:null==e?void 0:e.phone}),(null==e?void 0:e.token)&&j(e)):b(e)},S=e=>{let n=(0,X.Z)(e.credential);d(e),s(n),f({email:n.email,token:e.credential,unique_id:null==e?void 0:e.clientId,medium:"google"},{onSuccess:Z,onError(e){var n,t,o;null==e||null===(n=e.response)||void 0===n||null===(t=n.data)||void 0===t||null===(o=t.errors)||void 0===o||o.forEach(e=>"email"===e.code?b():y.Am.error(e.message))}})};(0,l.useEffect)(()=>{var e,n,t,o,l,i;null==window||null===(e=window.google)||void 0===e||null===(n=e.accounts)||void 0===n||null===(t=n.id)||void 0===t||t.initialize({client_id:"",callback:S}),null==window||null===(o=window.google)||void 0===o||null===(l=o.accounts)||void 0===l||null===(i=l.id)||void 0===i||i.renderButton(document.getElementById("signInDiv"),{theme:"outline",size:"large"})},[]);let I=e=>{c(!1),n(e),i()},C=e=>{y.Am.success(null==e?void 0:e.message),p(!1),b(x),i()},{mutate:_,isLoading:A}=(0,Q.t)(),D=e=>{_(e,{onSuccess:C,onError:k.R})},E=(0,v.G)()?(0,v.G)():"ltr";return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{id:"signInDiv",style:{display:"flex",justifyContent:"center",width:"100%",margin:"auto"}}),(0,o.jsx)(ee,{openModal:u,setModalOpen:c,handleClose:()=>c(!1),children:r&&a&&(0,o.jsx)(z,{userInfo:r,jwtToken:a,medium:"google",handleRegistrationOnSuccess:I,configData:t,lanDirection:E})}),(0,o.jsx)(B.Z,{openModal:h,handleClose:()=>p(!1),children:(0,o.jsx)(W.Z,{data:m,formSubmitHandler:D,isLoading:A})})]})};en.propTypes={};var et=t(64134),eo=t(10550),el=t(58861);t(12998);var ei=t(18228),er=t.n(ei),es={src:"/_next/static/media/facebookLatest.89b869a8.png",height:827,width:827,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAcklEQVR42iXLvQ3CUAwEYLf8SKzBAuzBdIhFaBASAkGBmCHdS5EqUqroxb7LOTm7uOI78w+I0DEI+stAJfTPeo4baBCgTHcYTyGdAuJN2fodhKcg6nA0xa/rhBL/spkuqEBOFtPu45fV/IsUfdn5A/T3DDvCb8svURs6AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},ea=t(50307);let ed=e=>{let{handleSuccess:n,configData:t,handleParentModalClose:r}=e,{userInfo:s,jwtToken:a}=(0,T.v9)(e=>e.fbCredentialsStore),[d,c]=(0,l.useState)(!1),[h,p]=(0,l.useState)(!1),[m,g]=(0,l.useState)({phone:""}),[x,j]=(0,l.useState)(null),f=(0,T.I0)(),{mutate:w}=N(),b=e=>{(null==e?void 0:e.token)?n(e.token):c(!0)};(0,l.useEffect)(()=>{(null==m?void 0:m.phone)!==""&&p(!0)},[m]);let S=e=>{(null==t?void 0:t.customer_verification)?1===Number.parseInt(null==e?void 0:e.is_phone_verified)?b(e):((null==e?void 0:e.phone)&&g({phone:null==e?void 0:e.phone}),(null==e?void 0:e.token)&&j(e)):b(e)},I=async e=>{f((0,ea.kv)(e)),f((0,ea.ij)(e)),await w({email:null==e?void 0:e.email,token:null==e?void 0:e.accessToken,unique_id:null==e?void 0:e.id,medium:"facebook",phone:null==e?void 0:e.phone},{onSuccess:S,onError(e){var n,t,o;null==e||null===(n=e.response)||void 0===n||null===(t=n.data)||void 0===t||null===(o=t.errors)||void 0===o||o.forEach(e=>"email"===e.code?b():y.Am.error(e.message))}})},C=e=>{n(e),r(),c(!1)},_=e=>{y.Am.success(null==e?void 0:e.message),p(!1),b(x),r()},{mutate:A,isLoading:D}=(0,Q.t)(),E=e=>{A(e,{onSuccess:_,onError:k.R})},{t:R}=(0,Z.$G)(),O=(0,v.G)()?(0,v.G)():"ltr";return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(er(),{appId:"",autoLoad:!1,fields:"name,email,picture",callback:I,render:e=>(0,o.jsx)("div",{style:{cursor:"pointer",width:"100%"},onClick:e.onClick,children:(0,o.jsx)(G.Z,{alignItems:"center",sx:{backgroundColor:e=>e.palette.info.dark,height:"45px",width:"100%",borderRadius:"4px",padding:"10px",textAlign:"center"},children:(0,o.jsxs)(i.Xw,{direction:"row",alignItems:"center",spacing:1,children:[(0,o.jsx)(el.Z,{src:es.src,alt:"facebook",height:"25px",width:"25px",objectFit:"contained"}),(0,o.jsx)(u.Z,{fontSize:"14px",fontWeight:"600",sx:{color:e=>e.palette.whiteContainer.main},children:R("Continue with facebook")})]})})})}),(0,o.jsx)(ee,{openModal:d,setModalOpen:c,handleClose:()=>c(!1),children:s&&a&&(0,o.jsx)(z,{configData:t,userInfo:s,jwtToken:a,medium:"facebook",handleRegistrationOnSuccess:C,lanDirection:O})}),(0,o.jsx)(B.Z,{openModal:h,setModalOpen:p,handleClose:()=>c(!1),children:(0,o.jsx)(W.Z,{data:m,formSubmitHandler:E,isLoading:D})})]})};ed.propTypes={};var eu=t(14849),ec=t(54225),eh=t(34721);let ep=e=>{let{t:n}=(0,Z.$G)(),t=async e=>{};return(0,o.jsx)("div",{children:(0,o.jsx)(eu.Z,{clientId:$.serviceId,redirectURI:$.redirectURI,responseType:"code",responseMode:"form_post",usePopup:!0,callback:t,scope:"email name",render:e=>(0,o.jsxs)(ec.Z,{onClick:e.onClick,sx:{width:"220px",border:e=>"1px solid ".concat(e.palette.neutral[1e3])},children:[(0,o.jsx)(eh.Z,{sx:{color:e=>e.palette.neutral[1e3]}}),(0,o.jsx)(u.Z,{sx:{color:e=>e.palette.neutral[1e3]},children:n("Continue with Apple")})]})})})};ep.propTypes={};let em=e=>{let n=(0,w.useRouter)(),{socialLogin:t}=e,{configData:l}=(0,T.v9)(e=>e.configData),{t:i}=(0,Z.$G)(),r=(0,T.I0)(),s=e=>{r((0,L.av)(e))},{refetch:a}=(0,O.Z)(s),d=e=>{r((0,et.Q5)(e))},{refetch:u}=(0,eo.F)(d),c=async e=>{localStorage.setItem("token",e),y.Am.success(i(F.cu)),await u(),await a(),n.push("/home",void 0,{shallow:!0})};return(0,o.jsx)(G.Z,{alignItems:"center",justifyContent:"center",spacing:1,children:null==t?void 0:t.map((e,n)=>(null==e?void 0:e.login_medium)==="google"&&!0===e.status?(0,o.jsx)(en,{handleSuccess:c,configData:l},n):(null==e?void 0:e.login_medium)==="facebook"&&!0===e.status?(0,o.jsx)(ed,{handleSuccess:c,configData:l},n):void 0)})};em.propTypes={};var ev=(0,l.memo)(em),eg=t(18050),ex=t(94993);let ej=e=>{var n,t;let h,p,v;let{configData:b}=e,Z=(0,w.useRouter)(),C=Z.query.from,_=(0,T.I0)(),[A,D]=(0,l.useState)(!1),[P,G]=(0,l.useState)(!1),[X,M]=(0,l.useState)({phone:""}),[N,U]=(0,l.useState)(null),[V,H]=(0,l.useState)(!1),[J,z]=(0,l.useState)(!1),$=(0,r.Z)(),K=$.palette.whiteContainer.main;h=JSON.parse(localStorage.getItem("userDatafor"));let Y=(0,I.TA)({initialValues:{phone:h?h.phone:"",password:h?h.password:"",tandc:!1},validationSchema:S(),async onSubmit(e,n){try{J&&localStorage.setItem("userDatafor",JSON.stringify(e)),ej(e)}catch(t){console.log(t)}}});p=localStorage.getItem("location"),v=JSON.parse(localStorage.getItem("module")),JSON.parse(localStorage.getItem("settings"));let ee=e=>{Y.setFieldValue("phone","+".concat(e))},en=e=>{Y.setFieldValue("password",e)};(0,l.useEffect)(()=>{(null==X?void 0:X.phone)!==""&&G(!0)},[X]);let el=e=>{_((0,et.Q5)(e)),H(!1)},{refetch:ei,isLoading:er}=(0,eo.F)(el),es=e=>{_((0,L.av)(e))},{data:ea,refetch:ed}=(0,O.Z)(es),eu=async e=>{if(null==e?void 0:e.data){var n;localStorage.setItem("token",null==e?void 0:null===(n=e.data)||void 0===n?void 0:n.token),await ei(),await ed(),y.ZP.success((0,m.t)(F.cu))}},ec=async e=>{e&&(localStorage.setItem("token",null==e?void 0:e.token),await ed(),await ei(),y.ZP.success((0,m.t)(F.X1)),p&&!v?D(!0):C?Z.push("/home"):await Z.back())},eh=e=>{e&&(y.ZP.success((0,m.t)(F.s0)),C?Z.push("/home"):Z.back()),D(!1)},ep=()=>{H(!1)},{mutate:em}=E(ep),ej=e=>{H(!0),em(e,{async onSuccess(n){(0,ex.m)(),(null==b?void 0:b.customer_verification)?1===Number.parseInt(null==n?void 0:n.is_phone_verified)?await ec(n):(M({phone:null==e?void 0:e.phone}),U(n)):await ec(n)},onError:k.R})},{mutate:ef,isLoading:ew}=(0,Q.t)(),eb=e=>{let n=e=>{y.ZP.success(null==e?void 0:e.message),G(!1),eu(N)};ef(e,{onSuccess:n,onError:k.f})},eZ=e=>{e.target.checked?z(!0):localStorage.removeItem("userDatafor")};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.Z,{children:(0,o.jsx)(i.Xw,{justifyContent:"center",alignItems:"center",pb:"80px",children:(0,o.jsx)(c.Z,{maxWidth:"500px",width:"100%",children:(0,o.jsx)(i.iD,{children:(0,o.jsxs)(i.Xw,{spacing:2,children:[(0,o.jsx)(j.Z,{configData:b,title:(0,m.t)("Sign In")}),(0,o.jsx)("form",{noValidate:!0,onSubmit:Y.handleSubmit,children:(0,o.jsxs)(i.Xw,{spacing:2,children:[(0,o.jsx)(eg.mu,{children:(0,o.jsx)(eg.ix,{children(e){var n;return(0,o.jsx)(g,{configData:b,handleOnChange:ee,passwordHandler:en,loginFormik:Y,lanDirection:null==e?void 0:null===(n=e.settings)||void 0===n?void 0:n.direction})}})}),(0,o.jsxs)(i.Xw,{justifyContent:"space-between",alignItems:"center",direction:"row",children:[(0,o.jsx)(a.Z,{control:(0,o.jsx)(d.Z,{value:"remember",color:"primary",onChange:eZ}),label:(0,o.jsx)(x.ZT,{fontSize:"14px",children:(0,m.t)("Remember me")})}),(0,o.jsx)(q(),{href:"/forgot-password",children:(0,m.t)("Forgot password?")})]}),(0,o.jsxs)(i.Xw,{spacing:2,children:[(0,o.jsx)(f.Z,{type:"submit",fullWidth:!0,variant:"contained",loading:V,sx:{color:K},children:(0,m.t)("Sign In")}),(null==b?void 0:null===(n=b.social_login)||void 0===n?void 0:n.length)>0&&(null==b?void 0:null===(t=b.social_login)||void 0===t?void 0:t.some(e=>!0===e.status))&&(0,o.jsxs)(i.Xw,{alignItems:"center",justifyContent:"center",spacing:1,children:[(0,o.jsx)(i.mI,{nodefaultfont:"true",children:(0,m.t)("Or")}),(0,o.jsx)(x.ZT,{children:(0,m.t)("Login with")}),(0,o.jsx)(ev,{socialLogin:null==b?void 0:b.social_login})]}),(0,o.jsxs)(u.Z,{children:[(0,m.t)("Don't have an account?")," ",(0,o.jsx)(q(),{href:"/auth/sign-up",style:{color:$.palette.primary.main,textDecoration:"underline"},children:(0,m.t)("Sign Up")})]})]})]})})]})})})})}),A&&(0,o.jsx)(R.U,{location:p,closeModal:eh,disableAutoFocus:!0}),(0,o.jsx)(B.Z,{handleClose:()=>G(!1),openModal:P,children:(0,o.jsx)(W.Z,{data:X,formSubmitHandler:eb,isLoading:ew})})]})};var ef=ej},79180:function(e,n,t){var o=t(85893);t(67294);var l=t(9144),i=t(29630),r=t(45269),s=t(22120),a=t(82175),d=t(31812),u=t(74231);let c=e=>{let{data:n,formSubmitHandler:t,isLoading:c}=e,{t:h}=(0,s.$G)(),p=(0,a.TA)({initialValues:{reset_token:"",phone:null==n?void 0:n.phone},validationSchema:u.Ry({reset_token:u.Z_().required(h("field is empty"))}),async onSubmit(e){try{t(e)}catch(n){}}});return(0,o.jsx)(r.iD,{width:"auto",noboxshadow:"true",children:(0,o.jsxs)(r.Xw,{children:[(0,o.jsxs)(l.Z,{alignItems:"center",justifyContent:"center",children:[(0,o.jsx)(i.Z,{children:h("Enter the verification code (OTP) sent to")}),(0,o.jsx)(i.Z,{children:null==n?void 0:n.phone})]}),(0,o.jsx)("form",{noValidate:!0,onSubmit:p.handleSubmit,children:(0,o.jsxs)(l.Z,{mt:"2rem",padding:"0 20px",alignItems:"center",justifyContent:"center",children:[(0,o.jsx)(r.el,{inputProps:{maxLength:4},width:"100px",onChange:p.handleChange,value:p.values.reset_token,name:"reset_token",error:p.touched.reset_token&&Boolean(p.errors.reset_token),helperText:p.touched.reset_token&&p.errors.reset_token,touched:p.touched.reset_token,required:!0}),(0,o.jsx)(d.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},loading:c,children:h("Verify")})]})})]})})};n.Z=c},57542:function(e,n,t){t.d(n,{Z:function(){return L}});var o=t(85893),l=t(67294),i=t(45697),r=t.n(i),s=t(37685),a=t(25118),d=t(20580),u=t(45269),c=t(47962),h=t(76638),p=t(26145),m=t(83765),v=t(36111),g=t(40077);t(73782);var x=t(81401),j=t(35969),f=t(60082),w=t(53523),b=t(51126),Z=t(13080),S=t(11163),y=t(9473),k=t(58345);let I={maxWidth:2e3,width:"100%",height:"100%",padding:"0px 1rem"},C=()=>{var e,n,t;let{wishLists:i}=(0,y.v9)(e=>e.wishList),{cartList:r}=(0,y.v9)(e=>e.cart),{selectedModule:s}=(0,y.v9)(e=>e.utilsData),a=(null==i?void 0:null===(e=i.item)||void 0===e?void 0:e.length)+(null==i?void 0:null===(n=i.store)||void 0===n?void 0:n.length),[d,C]=(0,l.useState)(!1),_=(0,S.useRouter)(),A=_.pathname.replace("/",""),D=()=>{C(!0)};return(0,o.jsx)(u.Xw,{children:(0,o.jsxs)(x.Z,{sx:{position:"fixed",bottom:0,left:0,right:0,padding:"5px",width:"100%",zIndex:111},elevation:3,children:[(0,o.jsx)(g.Z,{style:I,children:(0,o.jsxs)(j.Z,{value:A,onChange(e,n){"cart"!==n&&_.push("/".concat(n),void 0,{shallow:!0})},showLabels:!0,children:[(0,o.jsx)(w.rj,{label:(0,b.t)("Home"),value:"home",icon:(0,o.jsx)(h.Z,{})}),(0,o.jsx)(w.rj,{label:(0,b.t)("My Orders"),value:"my-orders",icon:(0,o.jsx)(f.Z,{color:"error",children:(0,o.jsx)(c.Z,{})})}),(null==s?void 0:s.module_type)!=="parcel"&&(0,o.jsx)(w.rj,{onClick:()=>D(),label:(0,b.t)("Cart"),value:"cart",icon:(0,o.jsx)(f.Z,{badgeContent:null===(t=(0,k.l)(r))||void 0===t?void 0:t.length,color:"error",children:(0,o.jsx)(m.Z,{})})}),(0,o.jsx)(w.rj,{label:(0,b.t)("Chat"),value:"chatting",icon:(0,o.jsx)(f.Z,{badgeContent:0,color:"error",children:(0,o.jsx)(p.Z,{})})}),!!d&&(0,o.jsx)(Z.Z,{sideDrawerOpen:d,setSideDrawerOpen:C}),(0,o.jsx)(w.rj,{label:(0,b.t)("WishList"),value:"wishlist",icon:(0,o.jsx)(f.Z,{badgeContent:a,color:"error",children:(0,o.jsx)(v.Z,{})})})]})}),!!d&&(0,o.jsx)(Z.Z,{sideDrawerOpen:d,setSideDrawerOpen:C,cartList:r})]})})};var _=l.memo(C),A=t(62097),D=t(61225),E=t(28332),R=t(38579),O=t(67493);let T=e=>{let{children:n,configData:t,landingPageData:i}=e,[r,c]=(0,l.useState)(!1),{data:h,refetch:p}=(0,R.Z)();(0,A.Z)();let m=(0,D.Z)("(max-width:1180px)"),v=(0,S.useRouter)(),g=(0,y.I0)();if((0,l.useEffect)(()=>{"/home"===v.pathname&&p()},[]),h){var x;let j=null===(x=JSON.parse(localStorage.getItem("module")))||void 0===x?void 0:x.module_type;if(0===h.length)localStorage.removeItem("module"),v.push("/",void 0,{shallow:!0});else if(!(null==h?void 0:h.find(e=>e.module_type===j))){let f=h[0];localStorage.setItem("module",JSON.stringify(f)),g((0,O.$w)(f))}}return(0,o.jsxs)(d.U,{justifyContent:"space-between",children:[(0,o.jsx)("header",{children:(0,o.jsx)(s.Z,{configData:t})}),(0,o.jsx)(u.Xw,{mt:m?"5rem":"7rem",children:(0,o.jsx)(u.Xw,{sx:{minHeight:"70vh"},children:(0,o.jsx)(E.Z,{children:n})})}),(0,o.jsx)("footer",{children:(0,o.jsx)(a.Z,{configData:t,landingPageData:i})}),m&&(0,o.jsx)(_,{})]},r)};T.propTypes={children:r().node};var L=l.memo(T)},94993:function(e,n,t){t.d(n,{m:function(){return o}});let o=()=>{localStorage.setItem("language-setting",JSON.stringify("en"))}}}]);