import{_ as S,L as p,c as w}from"./index-bada0fbb.js";import{m as N,j as t,F as m,a as i,o as A,P as I,d as n,p as O,q as R,r as z,B as g}from"./@mui-3ad2abfa.js";import{r as o}from"./react-623f75a7.js";import{a as H}from"./react-redux-c5905a92.js";import{L as h}from"./react-router-dom-117e0b0c.js";import{a as V}from"./react-router-6a5d8ae2.js";import"./react-dom-17812d22.js";import"./@babel-33433dbe.js";import"./scheduler-04ce0582.js";import"./@reduxjs-8a615757.js";import"./immer-41fd5235.js";import"./redux-55821f40.js";import"./redux-thunk-ef899f4c.js";import"./@chec-f1626e79.js";import"./axios-419cf3fb.js";import"./hoist-non-react-statics-92a0866e.js";import"./react-is-41a81967.js";import"./@emotion-6ad6d3ba.js";import"./stylis-2d96297d.js";import"./clsx-1229b3e0.js";import"./react-transition-group-9506ac11.js";import"./jss-2492b69e.js";import"./is-in-browser-9e40da8a.js";import"./jss-plugin-rule-value-function-123ddbff.js";import"./jss-plugin-global-c15fb5e7.js";import"./jss-plugin-nested-468d7f1d.js";import"./jss-plugin-camel-case-92f9f32c.js";import"./hyphenate-style-name-80972348.js";import"./jss-plugin-default-unit-73b92d3c.js";import"./jss-plugin-vendor-prefixer-b6370c77.js";import"./css-vendor-557bc211.js";import"./jss-plugin-props-sort-0c9fca2f.js";import"./use-sync-external-store-b128de5a.js";import"./@remix-run-66cedd4c.js";const q=N(e=>({appBar:{position:"relative"},toolbar:e.mixins.toolbar,layout:{marginTop:"5%",width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2),[e.breakpoints.up(600)]:{width:600,marginLeft:"auto",marginRight:"auto"}},paper:{marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2),[e.breakpoints.down("xs")]:{width:"100%",marginTop:60},[e.breakpoints.up(600+e.spacing(3)*2)]:{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}},stepper:{padding:e.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)},divider:{margin:"20px 0"},spinner:{display:"flex",justifyContent:"center",alignItems:"center"}})),M=o.lazy(()=>S(()=>import("./AddressForm-9f00712d.js"),["assets/AddressForm-9f00712d.js","assets/@mui-3ad2abfa.js","assets/react-is-41a81967.js","assets/react-623f75a7.js","assets/@babel-33433dbe.js","assets/@emotion-6ad6d3ba.js","assets/hoist-non-react-statics-92a0866e.js","assets/stylis-2d96297d.js","assets/clsx-1229b3e0.js","assets/react-transition-group-9506ac11.js","assets/react-dom-17812d22.js","assets/scheduler-04ce0582.js","assets/jss-2492b69e.js","assets/is-in-browser-9e40da8a.js","assets/jss-plugin-rule-value-function-123ddbff.js","assets/jss-plugin-global-c15fb5e7.js","assets/jss-plugin-nested-468d7f1d.js","assets/jss-plugin-camel-case-92f9f32c.js","assets/hyphenate-style-name-80972348.js","assets/jss-plugin-default-unit-73b92d3c.js","assets/jss-plugin-vendor-prefixer-b6370c77.js","assets/css-vendor-557bc211.js","assets/jss-plugin-props-sort-0c9fca2f.js","assets/react-hook-form-e66dcf21.js","assets/react-router-dom-117e0b0c.js","assets/react-router-6a5d8ae2.js","assets/@remix-run-66cedd4c.js","assets/index-bada0fbb.js","assets/react-redux-c5905a92.js","assets/use-sync-external-store-b128de5a.js","assets/@reduxjs-8a615757.js","assets/immer-41fd5235.js","assets/redux-55821f40.js","assets/redux-thunk-ef899f4c.js","assets/@chec-f1626e79.js","assets/axios-419cf3fb.js"])),G=o.lazy(()=>S(()=>import("./PaymentFrom-f1202dcd.js"),["assets/PaymentFrom-f1202dcd.js","assets/index-bada0fbb.js","assets/@mui-3ad2abfa.js","assets/react-is-41a81967.js","assets/react-623f75a7.js","assets/@babel-33433dbe.js","assets/@emotion-6ad6d3ba.js","assets/hoist-non-react-statics-92a0866e.js","assets/stylis-2d96297d.js","assets/clsx-1229b3e0.js","assets/react-transition-group-9506ac11.js","assets/react-dom-17812d22.js","assets/scheduler-04ce0582.js","assets/jss-2492b69e.js","assets/is-in-browser-9e40da8a.js","assets/jss-plugin-rule-value-function-123ddbff.js","assets/jss-plugin-global-c15fb5e7.js","assets/jss-plugin-nested-468d7f1d.js","assets/jss-plugin-camel-case-92f9f32c.js","assets/hyphenate-style-name-80972348.js","assets/jss-plugin-default-unit-73b92d3c.js","assets/jss-plugin-vendor-prefixer-b6370c77.js","assets/css-vendor-557bc211.js","assets/jss-plugin-props-sort-0c9fca2f.js","assets/react-redux-c5905a92.js","assets/use-sync-external-store-b128de5a.js","assets/react-router-dom-117e0b0c.js","assets/react-router-6a5d8ae2.js","assets/@remix-run-66cedd4c.js","assets/@reduxjs-8a615757.js","assets/immer-41fd5235.js","assets/redux-55821f40.js","assets/redux-thunk-ef899f4c.js","assets/@chec-f1626e79.js","assets/axios-419cf3fb.js","assets/@stripe-61235ad0.js","assets/prop-types-4d501b15.js"])),b=["Shipping address","Payment details"],Ct=({handleCaptureCheckout:e})=>{const a=q(),[l,f]=o.useState(0),[d,x]=o.useState(null),[T,_]=o.useState({}),[C,E]=o.useState(!1),L=V(),{cartData:s,isLoading:D,error:y,Order:c}=H(r=>r.MainSlice);if(D)return t(p,{});o.useEffect(()=>{const r=async()=>{try{const u=await w.checkout.generateToken(s.id,{type:"cart"});x(u)}catch(u){console.log(u),L("/E-Commerce/")}};s.id&&s.line_items.length>0&&r()},[s]);const k=()=>f(r=>r+1),B=()=>f(r=>r-1),F=r=>{_(r),k()},P=()=>setTimeout(()=>{E(!0)},1e4),j=()=>l==0?t(M,{checkoutToken:d,next:F}):t(G,{shippingData:T,checkoutToken:d,nextStep:k,backStep:B,handleCaptureCheckout:e,timeout:P});let v=()=>c.customer?i(m,{children:[i("div",{style:{textDecoration:"none"},children:[i(n,{variant:"h5",children:["Thank you for your purchase, ",c.customer.firstname," ",c.customer.lastname]}),i(n,{variant:"subtitle2",children:["Order ref: ",c.customer_reference]})]}),t("br",{}),t(h,{to:"/E-Commerce/",style:{textDecoration:"none"},children:t(g,{variant:"outlined",type:"button",children:"Back to Home"})})]}):C?i(m,{children:[t("div",{children:t(n,{variant:"h5",children:"Thank you for your purchase"})}),t("br",{}),t(h,{to:"/E-Commerce/",style:{textDecoration:"none"},children:t(g,{variant:"outlined",type:"button",children:"Back to Home"})})]}):t(p,{});return y&&(v=()=>i(m,{children:[i(n,{variant:"h5",children:["Error: ",y]}),t("br",{}),t(h,{to:"/E-Commerce/",style:{textDecoration:"none"},children:t(g,{variant:"outlined",type:"button",style:{textDecoration:"none"},children:"Back to home"})})]})),t(m,{children:i(o.Suspense,{fallback:t(p,{}),children:[t(A,{}),t("div",{className:a.toolbar}),t("main",{className:a.layout,children:i(I,{className:a.paper,children:[t(n,{variant:"h4",align:"center",children:"Checkout"}),t(O,{activeStep:l,className:a.stepper,children:b.map(r=>t(R,{children:t(z,{children:r})},r))}),l===b.length?t(v,{}):d?t(j,{}):t(p,{})]})})]})})};export{Ct as default};
//# sourceMappingURL=Checkout-390c20ab.js.map
