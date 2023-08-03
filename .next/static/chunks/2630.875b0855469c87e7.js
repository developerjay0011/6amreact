"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2630],{12630:function(e,r,a){a.r(r),a.d(r,{default:function(){return U}});var s=a(85893),n=a(67294),o=a(45269),t=a(18377),l=a(4561),i=a(51126),d=a(42492),u=a(65304),c=a(79104),m=a(46573);let p=e=>{let{configData:r,handleOnChange:a,passwordHandler:n,lNameHandler:t,fNameHandler:l,confirmPasswordHandler:p,emailHandler:h,ReferCodeHandler:f,signUpFormik:g}=e,x=(0,m.G)()?(0,m.G)():"ltr";return(0,s.jsx)(c.Z,{children:(0,s.jsxs)(o.Xw,{alignItems:"center",spacing:{xs:3,md:4},children:[(0,s.jsx)(d.Z,{required:!0,label:(0,i.t)("First Name"),touched:g.touched.f_name,errors:g.errors.f_name,fieldProps:g.getFieldProps("f_name"),onChangeHandler:l,value:g.values.f_name}),(0,s.jsx)(d.Z,{required:!0,label:(0,i.t)("Last Name"),touched:g.touched.l_name,errors:g.errors.l_name,fieldProps:g.getFieldProps("l_name"),onChangeHandler:t,value:g.values.l_name}),(0,s.jsx)(d.Z,{required:!0,label:(0,i.t)("Email"),touched:g.touched.email,errors:g.errors.email,fieldProps:g.getFieldProps("email"),onChangeHandler:h,value:g.values.email}),(0,s.jsx)(u.Z,{value:g.values.phone,onHandleChange:a,initCountry:null==r?void 0:r.country,touched:g.touched.phone,errors:g.errors.phone,lanDirection:x}),(0,s.jsx)(d.Z,{required:"true",type:"password",label:(0,i.t)("Password"),touched:g.touched.password,errors:g.errors.password,fieldProps:g.getFieldProps("password"),onChangeHandler:n,value:g.values.password}),(0,s.jsx)(d.Z,{required:"true",type:"password",label:(0,i.t)("Confirm Password"),touched:g.touched.confirm_password,errors:g.errors.confirm_password,fieldProps:g.getFieldProps("confirm_password"),onChangeHandler:p,value:g.values.confirm_password}),(0,s.jsx)(d.Z,{label:(0,i.t)("Refer Code (Optional)"),touched:g.touched.ref_code,errors:g.errors.ref_code,fieldProps:g.getFieldProps("ref_code"),onChangeHandler:f,value:g.values.ref_code})]})})};var h=a(31812),f=a(62097),g=a(29630),x=a(11163),w=a(74231),v=a(22120);let _=()=>{let{t:e}=(0,v.$G)();return w.Ry({f_name:w.Z_().required(e("First name is required")),l_name:w.Z_().required(e("Last name is required")),email:w.Z_().email(e("Must be a valid email")).max(255).required(e("Email is required")),phone:w.Z_().required(e("Please give a phone number")).min(10,"number must be 10 digits"),password:w.Z_().required(e("No password provided.")).min(6,e("Password is too short - should be 6 chars minimum.")),confirm_password:w.Z_().required(e("Confirm Password")).oneOf([w.iH("password"),null],e("Passwords must match"))})};var j=a(82175),Z=a(88767),b=a(9473),C=a(86501),P=a(60274),F=a(61176);let S=async e=>{let{data:r}=await F.Z.post("".concat(P.h6),e);return r},y=()=>(0,Z.useMutation)("sign-up",S);var q=a(67759),H=a(44442),k=a(22841),V=a(75158),N=a(77591);let I=e=>{let{handleCheckbox:r,formikType:a,handleClick:n}=e,t=(0,f.Z)();return(0,s.jsxs)(o.Xw,{children:[(0,s.jsxs)(o.Xw,{direction:"row",alignItems:"center",spacing:{xs:"0",md:".5"},sx:{mt:"-10px"},children:[(0,s.jsx)(k.Z,{sx:{marginRight:"5px","& .MuiFormControlLabel-label":{fontSize:"14px",color:e=>e.palette.neutral[1e3]},[t.breakpoints.down("sm")]:{"& .MuiFormControlLabel-label":{fontSize:"12px"}}},control:(0,s.jsx)(V.Z,{value:"ff",color:"primary",onChange:r,required:"true"})}),(0,s.jsxs)(g.Z,{children:[(0,i.t)("You must accept the")," ",(0,s.jsx)("span",{onClick:n,style:{color:t.palette.primary.main,cursor:"pointer",textDecoration:"underline"},children:(0,i.t)("terms and conditions")})]})]}),a.touched.tandc&&a.errors.tandc&&(0,s.jsx)(N.ZT,{variant:"caption",sx:{fontWeight:"inherit",color:e=>e.palette.error.main},children:(0,i.t)("You must accept the terms and conditions")})]})};var D=a(41664),E=a.n(D),M=a(86390),X=a(79180),L=a(54675),R=a(70557),A=a(94993);let O=()=>{let e;let r=(0,x.useRouter)(),{configData:a}=(0,b.v9)(e=>e.configData),[d,u]=(0,n.useState)(!1),c=(0,f.Z)(),[m,w]=(0,n.useState)({phone:""}),[v,Z]=(0,n.useState)(null),[P,F]=(0,n.useState)(!1),S=(0,j.TA)({initialValues:{f_name:"",l_name:"",email:"",phone:"",password:"",confirm_password:"",ref_code:"",tandc:!1},validationSchema:_(),async onSubmit(e,r){try{K(e)}catch(a){}}}),k=()=>{F(!1)},V=e=>{S.setFieldValue("f_name",e)},N=e=>{S.setFieldValue("l_name",e)},D=e=>{S.setFieldValue("email",e)},O=e=>{S.setFieldValue("phone","+".concat(e))},U=e=>{S.setFieldValue("password",e)},z=e=>{S.setFieldValue("confirm_password",e)},G=e=>{S.setFieldValue("tandc",e.target.checked)},T=e=>{S.setFieldValue("ref_code",e)};e=localStorage.getItem("location"),(0,n.useEffect)(()=>{(null==m?void 0:m.phone)!==""&&F(!0)},[m]);let W=e=>{if(e){localStorage.setItem("token",null==e?void 0:e.token),C.ZP.success((0,i.t)(R.fj));let a=JSON.parse(localStorage.getItem("zoneid"));a?u(!0):r.push("/",void 0,{shallow:!0})}},Y=e=>{e&&(C.ZP.success((0,i.t)("A Module has been selected.")),r.push("/interest",void 0,{shallow:!0})),u(!1)},{mutate:J,isLoading:$,error:B}=y(),K=e=>{J(e,{async onSuccess(r){(0,A.m)(),(null==a?void 0:a.customer_verification)?1===Number.parseInt(null==r?void 0:r.is_phone_verified)?W(r):(w({phone:null==e?void 0:e.phone}),Z(r)):W(r)},onError:q.R})},Q=()=>{window.open("/terms-and-conditions")},{mutate:ee,isLoading:er}=(0,L.t)(),ea=e=>{let r=e=>{C.ZP.success(null==e?void 0:e.message),F(!1),W(v)};ee(e,{onSuccess:r,onError:q.f})};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.Xw,{justifyContent:"center",alignItems:"center",pb:"80px",children:[(0,s.jsx)(t.Z,{maxWidth:"500px",width:"100%",children:(0,s.jsx)(o.iD,{children:(0,s.jsxs)(o.Xw,{spacing:2,children:[(0,s.jsx)(l.Z,{configData:a,title:(0,i.t)("Sign Up")}),(0,s.jsx)("form",{noValidate:!0,onSubmit:S.handleSubmit,children:(0,s.jsxs)(o.Xw,{spacing:2,children:[(0,s.jsx)(p,{configData:a,handleOnChange:O,passwordHandler:U,fNameHandler:V,lNameHandler:N,emailHandler:D,confirmPasswordHandler:z,ReferCodeHandler:T,signUpFormik:S}),(0,s.jsx)(I,{handleCheckbox:G,handleClick:Q,formikType:S}),(0,s.jsxs)(o.Xw,{spacing:2,children:[(0,s.jsx)(h.Z,{type:"submit",fullWidth:!0,variant:"contained",loading:$,disabled:!S.values.tandc,children:(0,i.t)("Sign Up")}),(0,s.jsxs)(g.Z,{children:[(0,i.t)("Already have an account?")," ",(0,s.jsx)(E(),{href:{pathname:"/auth/sign-in",query:{from:"sign-up"}},style:{color:c.palette.primary.main,textDecoration:"underline"},children:(0,i.t)("Sign In")})]})]})]})})]})})}),(0,s.jsx)(M.Z,{handleClose:k,openModal:P,children:(0,s.jsx)(X.Z,{data:m,formSubmitHandler:ea,isLoading:er})})]}),d&&(0,s.jsx)(H.U,{location:e,closeModal:Y,disableAutoFocus:!0})]})};var U=n.memo(O)}}]);