import{_ as S,L as p,c as w}from"./index-f7c71ce9.js";import{m as N,j as t,F as m,a as o}from"./@mui-fed08a08.js";import{r as i}from"./react-f6220408.js";import{a as A}from"./react-redux-b7fd3a09.js";import{L as g}from"./react-router-dom-ca2fbd96.js";import{a as I}from"./react-router-8e0836ea.js";import{a as O,P as R,T as n,S as z,b as H,c as V,B as h}from"./@material-ui-7c431d41.js";import"./react-dom-1ca48330.js";import"./@babel-c5a05878.js";import"./scheduler-04ce0582.js";import"./@reduxjs-51314f8e.js";import"./immer-41fd5235.js";import"./redux-527f0686.js";import"./redux-thunk-ef899f4c.js";import"./@chec-901e37a3.js";import"./axios-419cf3fb.js";import"./hoist-non-react-statics-7b00c3a5.js";import"./react-is-41a81967.js";import"./@emotion-ebc33efc.js";import"./stylis-2d96297d.js";import"./clsx-db8b4e51.js";import"./react-transition-group-5f3ad629.js";import"./jss-ef42abc8.js";import"./is-in-browser-d5415ab8.js";import"./jss-plugin-rule-value-function-7e355bb4.js";import"./jss-plugin-global-94ad91eb.js";import"./jss-plugin-nested-d3924001.js";import"./jss-plugin-camel-case-18998b63.js";import"./hyphenate-style-name-251b432a.js";import"./jss-plugin-default-unit-31584d62.js";import"./jss-plugin-vendor-prefixer-bfbd7a71.js";import"./css-vendor-9bce8e55.js";import"./jss-plugin-props-sort-46816cce.js";import"./use-sync-external-store-c23b6145.js";import"./@remix-run-66cedd4c.js";const M=N(r=>({appBar:{position:"relative"},toolbar:r.mixins.toolbar,layout:{marginTop:"5%",width:"auto",marginLeft:r.spacing(2),marginRight:r.spacing(2),[r.breakpoints.up(600)]:{width:600,marginLeft:"auto",marginRight:"auto"}},paper:{marginTop:r.spacing(3),marginBottom:r.spacing(3),padding:r.spacing(2),[r.breakpoints.down("xs")]:{width:"100%",marginTop:60},[r.breakpoints.up(600+r.spacing(3)*2)]:{marginTop:r.spacing(6),marginBottom:r.spacing(6),padding:r.spacing(3)}},stepper:{padding:r.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:r.spacing(3),marginLeft:r.spacing(1)},divider:{margin:"20px 0"},spinner:{display:"flex",justifyContent:"center",alignItems:"center"}})),q=i.lazy(()=>S(()=>import("./AddressForm-740b0beb.js"),["assets/AddressForm-740b0beb.js","assets/@mui-fed08a08.js","assets/react-is-41a81967.js","assets/react-f6220408.js","assets/@babel-c5a05878.js","assets/@emotion-ebc33efc.js","assets/hoist-non-react-statics-7b00c3a5.js","assets/stylis-2d96297d.js","assets/clsx-db8b4e51.js","assets/react-transition-group-5f3ad629.js","assets/react-dom-1ca48330.js","assets/scheduler-04ce0582.js","assets/jss-ef42abc8.js","assets/is-in-browser-d5415ab8.js","assets/jss-plugin-rule-value-function-7e355bb4.js","assets/jss-plugin-global-94ad91eb.js","assets/jss-plugin-nested-d3924001.js","assets/jss-plugin-camel-case-18998b63.js","assets/hyphenate-style-name-251b432a.js","assets/jss-plugin-default-unit-31584d62.js","assets/jss-plugin-vendor-prefixer-bfbd7a71.js","assets/css-vendor-9bce8e55.js","assets/jss-plugin-props-sort-46816cce.js","assets/react-hook-form-411bd6a4.js","assets/react-router-dom-ca2fbd96.js","assets/react-router-8e0836ea.js","assets/@remix-run-66cedd4c.js","assets/index-f7c71ce9.js","assets/react-redux-b7fd3a09.js","assets/use-sync-external-store-c23b6145.js","assets/@reduxjs-51314f8e.js","assets/immer-41fd5235.js","assets/redux-527f0686.js","assets/redux-thunk-ef899f4c.js","assets/@chec-901e37a3.js","assets/axios-419cf3fb.js","assets/@material-ui-7c431d41.js"])),G=i.lazy(()=>S(()=>import("./PaymentFrom-963049d2.js"),["assets/PaymentFrom-963049d2.js","assets/index-f7c71ce9.js","assets/@mui-fed08a08.js","assets/react-is-41a81967.js","assets/react-f6220408.js","assets/@babel-c5a05878.js","assets/@emotion-ebc33efc.js","assets/hoist-non-react-statics-7b00c3a5.js","assets/stylis-2d96297d.js","assets/clsx-db8b4e51.js","assets/react-transition-group-5f3ad629.js","assets/react-dom-1ca48330.js","assets/scheduler-04ce0582.js","assets/jss-ef42abc8.js","assets/is-in-browser-d5415ab8.js","assets/jss-plugin-rule-value-function-7e355bb4.js","assets/jss-plugin-global-94ad91eb.js","assets/jss-plugin-nested-d3924001.js","assets/jss-plugin-camel-case-18998b63.js","assets/hyphenate-style-name-251b432a.js","assets/jss-plugin-default-unit-31584d62.js","assets/jss-plugin-vendor-prefixer-bfbd7a71.js","assets/css-vendor-9bce8e55.js","assets/jss-plugin-props-sort-46816cce.js","assets/react-redux-b7fd3a09.js","assets/use-sync-external-store-c23b6145.js","assets/react-router-dom-ca2fbd96.js","assets/react-router-8e0836ea.js","assets/@remix-run-66cedd4c.js","assets/@reduxjs-51314f8e.js","assets/immer-41fd5235.js","assets/redux-527f0686.js","assets/redux-thunk-ef899f4c.js","assets/@chec-901e37a3.js","assets/axios-419cf3fb.js","assets/@material-ui-7c431d41.js","assets/@stripe-c1a56c85.js","assets/prop-types-4d501b15.js"])),b=["Shipping address","Payment details"],Et=({handleCaptureCheckout:r})=>{const a=M(),[l,f]=i.useState(0),[d,x]=i.useState(null),[T,_]=i.useState({}),[C,E]=i.useState(!1),L=I(),{cartData:s,isLoading:D,error:y,Order:c}=A(e=>e.MainSlice);if(D)return t(p,{});i.useEffect(()=>{const e=async()=>{try{const u=await w.checkout.generateToken(s.id,{type:"cart"});x(u)}catch(u){console.log(u),L("/E-Commerce/")}};s.id&&s.line_items.length>0&&e()},[s]);const k=()=>f(e=>e+1),B=()=>f(e=>e-1),F=e=>{_(e),k()},P=()=>setTimeout(()=>{E(!0)},1e4),j=()=>l==0?t(q,{checkoutToken:d,next:F}):t(G,{shippingData:T,checkoutToken:d,nextStep:k,backStep:B,handleCaptureCheckout:r,timeout:P});let v=()=>c.customer?o(m,{children:[o("div",{style:{textDecoration:"none"},children:[o(n,{variant:"h5",children:["Thank you for your purchase, ",c.customer.firstname," ",c.customer.lastname]}),o(n,{variant:"subtitle2",children:["Order ref: ",c.customer_reference]})]}),t("br",{}),t(g,{to:"/E-Commerce/",color:"secondary",style:{textDecoration:"none"},children:t(h,{variant:"outlined",type:"button",children:"Back to Home"})})]}):C?o(m,{children:[t("div",{children:t(n,{variant:"h5",children:"Thank you for your purchase"})}),t("br",{}),t(g,{to:"/E-Commerce/",style:{textDecoration:"none"},color:"secondary",children:t(h,{variant:"outlined",type:"button",children:"Back to Home"})})]}):t(p,{});return y&&(v=()=>o(m,{children:[o(n,{variant:"h5",children:["Error: ",y]}),t("br",{}),t(g,{to:"/E-Commerce/",style:{textDecoration:"none"},children:t(h,{variant:"outlined",type:"button",style:{textDecoration:"none"},children:"Back to home"})})]})),t(m,{children:o(i.Suspense,{fallback:t(p,{}),children:[t(O,{}),t("div",{className:a.toolbar}),t("main",{className:a.layout,children:o(R,{className:a.paper,children:[t(n,{variant:"h4",align:"center",children:"Checkout"}),t(z,{activeStep:l,className:a.stepper,children:b.map(e=>t(H,{children:t(V,{children:e})},e))}),l===b.length?t(v,{}):d?t(j,{}):t(p,{})]})})]})})};export{Et as default};
//# sourceMappingURL=Checkout-0abacfb4.js.map
