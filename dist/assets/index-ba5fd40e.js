import{c as le,m as k,j as n,C as Y,a as e,T as d,B as y,b as Z,d as U,e as J,f as X,I as ee,A as de,G as b,F as C,g as me,h as pe,i as ue,S as he,k as ge,l as ye,n as W,o as $,M as z,L as fe,p as V,q as G,D as be,r as Ce,s as ve}from"./@mui-5cb7b048.js";import{r as u,a as Se}from"./react-4fcb63cb.js";import{c as xe}from"./react-dom-9db6541d.js";import{u as I,a as L,P as we}from"./react-redux-adccb4ad.js";import{L as v,c as ke}from"./react-router-dom-d32d627a.js";import{c as _,a as _e,b as Ee}from"./@reduxjs-9ae3ddde.js";import{l as Ne}from"./@chec-2d7d1777.js";import{e as Be,O as je,a as De,R as Le}from"./react-router-8be29213.js";import"./hoist-non-react-statics-7b00c3a5.js";import"./react-is-41a81967.js";import{u as Pe,C as Te,a as Me,F as Oe}from"./react-hook-form-746de390.js";import{l as Ie,E as Re,a as Fe,C as H}from"./@stripe-7bcf73ad.js";import{C as M,a as Ae,P as We,T as D,S as $e,b as ze,c as qe,B as q}from"./@material-ui-1dbf5fba.js";import"./@emotion-08d9bbdd.js";import"./stylis-2d96297d.js";import"./@babel-c6125dfd.js";import"./clsx-db8b4e51.js";import"./react-transition-group-e9d60ee9.js";import"./jss-104ae402.js";import"./is-in-browser-d5415ab8.js";import"./jss-plugin-rule-value-function-0c28b933.js";import"./jss-plugin-global-48392cc5.js";import"./jss-plugin-nested-51029c05.js";import"./jss-plugin-camel-case-18998b63.js";import"./hyphenate-style-name-251b432a.js";import"./jss-plugin-default-unit-8a2d7c86.js";import"./jss-plugin-vendor-prefixer-1601cd00.js";import"./css-vendor-c7fd2cb3.js";import"./jss-plugin-props-sort-46816cce.js";import"./scheduler-04ce0582.js";import"./use-sync-external-store-ffd82d53.js";import"./@remix-run-486e32ce.js";import"./immer-41fd5235.js";import"./redux-7ed09ab3.js";import"./redux-thunk-ef899f4c.js";import"./axios-419cf3fb.js";import"./prop-types-4d501b15.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(o){if(o.ep)return;o.ep=!0;const c=a(o);fetch(o.href,c)}})();const Ve="pk_test_5032151bec3c46defe8917688f5bb6bc7947aac9c4213",m=new Ne(Ve),O=_("MainSlice/fetchProducts",(t,r)=>{const{rejectWithValue:a}=r;try{return m.products.list()}catch(i){return a(i.message)}}),te=_("MainSlice/fetchCart",(t,r)=>{const{rejectWithValue:a}=r;try{return m.cart.retrieve()}catch(i){return a(i.message)}}),re=_("MainSlice/refreshCart",(t,r)=>{const{rejectWithValue:a}=r;try{return m.cart.refresh()}catch(i){return a(i.message)}}),ae=_("MainSlice/addToCart",(t,r)=>{const{rejectWithValue:a}=r;try{return m.cart.add(t,1),m.cart.retrieve()}catch(i){return a(i.message)}}),ne=_("MainSlice/emptyCart",(t,r)=>{const{rejectWithValue:a}=r;try{return m.cart.empty(),m.cart.retrieve()}catch(i){return a(i.message)}}),ie=_("MainSlice/removeFromCart",(t,r)=>{const{rejectWithValue:a}=r;try{return m.cart.remove(t),m.cart.retrieve()}catch(i){return a(i.message)}}),oe=_("MainSlice/updateCartQty",(t,r)=>{const{rejectWithValue:a}=r;try{return m.cart.update(t.id,t.quantity),m.cart.retrieve()}catch(i){return a(i.message)}}),se=_e({name:"MainSlice",initialState:{productsData:[],cartData:{},Order:{},error:null,isLoading:!0},reducers:{setOrder:(t,r)=>{t.Order=r.payload},setError:(t,r)=>{t.error=r.payload.data.error.message}},extraReducers:t=>{t.addCase(O.fulfilled,(r,a)=>{r.productsData=a.payload.data,r.isLoading=!1}).addCase(O.pending,r=>{r.isLoading=!0}).addCase(O.rejected,(r,a)=>{r.error=a.payload,r.isLoading=!1}).addCase(te.fulfilled,(r,a)=>{r.cartData=a.payload}).addCase(re.fulfilled,(r,a)=>{r.cartData=a.payload}).addCase(ae.fulfilled,(r,a)=>{r.cartData=a.payload}).addCase(ne.fulfilled,(r,a)=>{r.cartData=a.payload}).addCase(ie.fulfilled,(r,a)=>{r.cartData=a.payload}).addCase(oe.fulfilled,(r,a)=>{r.cartData=a.payload})}}),{setOrder:Ge,setError:ce}=se.actions,He=se.reducer,Qe=le({palette:{primary:{main:"#ff214c"},secondary:{main:"#2f4ca8"}}}),Ke=k(t=>({container:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",mt:10,[t.breakpoints.up("md")]:{mt:0,height:"100vh"}}}));function Ye(){const t=Ke(),r=Be();return n(Y,{id:"error-page",className:t.container,children:[e(d,{variant:"h2",component:"h1",sx:{mb:2},children:"Oops!"}),e(d,{variant:"body1",sx:{mb:2},children:"Sorry, an unexpected error has occurred."}),e(d,{variant:"body1",sx:{mb:2},children:e("i",{children:r.statusText||r.message})}),e(v,{to:"/E-Commerce/",style:{textDecoration:"none"},children:e(y,{variant:"outlined",type:"button",style:{color:"#2f4ca8",borderColor:"#2f4ca8"},children:"Back to Home"})})]})}const Ze=k(()=>({root:{maxWidth:"100%"},media:{height:0,paddingTop:"56.25%"},cardActions:{display:"flex",justifyContent:"flex-end"},cardContent:{display:"flex",justifyContent:"space-between"}}));function Ue({product:t}){const r=Ze(),a=I(),i=()=>{a(ae(t.id))};return n(Z,{className:r.root,"data-testid":"product",children:[e(U,{className:r.media,image:t.image.url,title:t.name,sx:{backgroundSize:"contain",backgroundRepeat:"no-repeat"}}),n(J,{children:[n("div",{className:r.cardContent,children:[e(d,{variant:"h5",gutterBottom:!0,children:t.name}),e(d,{variant:"h5",gutterBottom:!0,children:t.price.formatted_with_symbol})]}),e(d,{dangerouslySetInnerHTML:{__html:t.description},variant:"body2",color:"textSecondary",component:"p"}),e(X,{disableSpacing:!0,className:r.cardActions,children:e(ee,{"aria-label":"Add to card",sx:{":hover":{backgroundColor:"rgba(0, 0, 0, 0.2)"}},onClick:i,children:e(de,{})})})]})]})}const Je=k(t=>({toolbar:t.mixins.toolbar,content:{flexGrow:1,backgroundColor:t.palette.background.default,padding:t.spacing(3)},root:{flexGrow:1}}));function Xe(){const t=L(a=>a.MainSlice),r=Je();return n("main",{className:r.content,children:[e("div",{className:r.toolbar}),e(b,{container:!0,justifyContent:"center",spacing:4,children:t.productsData.map(a=>e(b,{item:!0,xs:12,sm:6,md:4,lg:3,children:e(Ue,{product:a})},a.id))})]})}const et="/E-Commerce/assets/commerce-0a4b8dae.svg",Q=0,tt=k(t=>({appBar:{boxShadow:"none",borderBottom:"1px solid rgba(0, 0, 0, 0.12)",[t.breakpoints.up("sm")]:{width:`calc(100% - ${Q}px)`,marginLeft:Q}},title:{flexGrow:1,alignItems:"center",display:"flex",textDecoration:"none"},Link:{textDecoration:"none",color:"inherit",display:"flex",alignItems:"center"},image:{marginRight:"10px"},menuButton:{marginRight:t.spacing(2),[t.breakpoints.up("sm")]:{display:"none"}},grow:{flexGrow:1},search:{position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:t.palette.common.white,"&:hover":{backgroundColor:t.palette.common.white},marginRight:t.spacing(2),marginLeft:0,width:"100%",[t.breakpoints.up("sm")]:{width:"auto"}},searchIcon:{padding:t.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:{padding:t.spacing(1,1,1,0),paddingLeft:`calc(1em + ${t.spacing(4)}px)`,transition:t.transitions.create("width"),width:"100%",[t.breakpoints.up("md")]:{width:"20ch"}}}));function rt(){const t=tt(),{cartData:r}=L(i=>i.MainSlice);let a=r.total_items?r.total_items:null;return n(C,{children:[e(me,{position:"fixed",className:t.appBar,color:"inherit",elevation:0,children:n(pe,{children:[e(d,{variant:"h6",className:t.title,color:"inherit",children:n(v,{to:"/E-Commerce/",className:t.Link,children:[e("img",{src:et,alt:"Commerce.js",height:"25px",className:t.image}),"Commerce.js"]})}),e("div",{className:t.grow}),location.pathname==="/E-Commerce/"&&e("div",{className:t.button,children:e(ee,{LinkComponent:v,to:"/E-Commerce/cart","aria-label":"Show cart items",color:"inherit",children:e(ue,{badgeContent:a,color:"error",children:e(he,{})})})})]})}),e(je,{})]})}const at=k(t=>({toolbar:t.mixins.toolbar,title:{marginTop:"5%"},emptyButton:{minWidth:"150px",marginBottom:"5px !important",marginRight:"20px  !important"},checkoutButton:{minWidth:"150px",marginBottom:"5px !important",backgroundColor:"#2e4ca5 !important"},link:{textDecoration:"none"},cardDetails:{display:"flex",marginTop:"10%",width:"100%",justifyContent:"space-between",[t.breakpoints.down("sm")]:{flexDirection:"column"}}})),nt=k(t=>({media:{height:260,backgroundSize:"contain",backgroundRepeat:"no-repeat"},cardContent:{display:"flex",justifyContent:"space-between"},cartActions:{justifyContent:"space-between"},buttons:{display:"flex",alignItems:"center"}})),it=({item:t})=>{const r=nt(),a=I(),i=()=>{a(ie(t.id))},o=c=>{let l={id:t.id,quantity:{quantity:c}};a(oe(l))};return n(Z,{children:[e(U,{image:t.image.url,alt:t.name,className:r.media,sx:{backgroundSize:"contain ",backgroundRepeat:"no-repeat"}}),n(J,{className:r.cardContent,children:[e(d,{variant:"h4",children:t.name}),e(d,{variant:"h6",children:t.line_total.formatted_with_symbol})]}),n(X,{className:r.cartActions,children:[n("div",{className:r.buttons,children:[e(y,{type:"button",size:"small",onClick:()=>o(t.quantity-1),children:"-"}),e(d,{children:t.quantity}),e(y,{size:"small",type:"button",color:"secondary",onClick:()=>o(t.quantity+1),children:"+"})]}),e(y,{variant:"contained",type:"button",onClick:i,children:"Remove"})]})]})},ot=()=>{const t=at(),{cartData:r}=L(l=>l.MainSlice),a=I(),i=()=>{a(ne())},o=()=>n(d,{variant:"subtitle1",children:["You Have no items in your shopping cart,",e(v,{to:"/E-Commerce/",className:t.link,children:"start adding some"}),"!"]});if(!r.line_items)return e("div",{style:{flexGrow:1,display:"flex",justifyContent:"center",alignItems:"center"},children:e(ge,{})});const c=()=>n(C,{children:[e(b,{container:!0,spacing:3,children:r.line_items.map(l=>e(b,{item:!0,xs:12,sm:6,md:4,children:e(it,{item:l})},l.id))}),n("div",{className:t.cardDetails,children:[n(d,{variant:"h4",children:["Subtotal: ",r.subtotal.formatted_with_symbol]}),n("div",{children:[e(y,{className:t.emptyButton,size:"large",type:"button",variant:"contained",onClick:i,children:"EMPTY CART"}),e(v,{to:"/E-Commerce/checkout",style:{textDecoration:"none",color:"inherit"},children:e(y,{className:t.checkoutButton,size:"large",type:"button",variant:"contained",children:"CHECKOUT"})})]})]})]});return n(Y,{children:[e("div",{className:t.toolbar}),e(d,{className:t.title,variant:"h3",gutterBottom:!0,children:"Your ShoppingCart"}),r.line_items.length?e(c,{}):e(o,{})]})},st=k(t=>({appBar:{position:"relative"},toolbar:t.mixins.toolbar,layout:{marginTop:"5%",width:"auto",marginLeft:t.spacing(2),marginRight:t.spacing(2),[t.breakpoints.up(600)]:{width:600,marginLeft:"auto",marginRight:"auto"}},paper:{marginTop:t.spacing(3),marginBottom:t.spacing(3),padding:t.spacing(2),[t.breakpoints.down("xs")]:{width:"100%",marginTop:60},[t.breakpoints.up(600+t.spacing(3)*2)]:{marginTop:t.spacing(6),marginBottom:t.spacing(6),padding:t.spacing(3)}},stepper:{padding:t.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:t.spacing(3),marginLeft:t.spacing(1)},divider:{margin:"20px 0"},spinner:{display:"flex",justifyContent:"center",alignItems:"center"}})),B=({name:t,label:r})=>{const{control:a}=Pe();return e(b,{item:!0,xs:12,sm:6,children:e(Te,{control:a,name:t,render:({field:i})=>e(ye,{...i,fullWidth:!0,label:r,required:!0})})})},ct=({checkoutToken:t,next:r})=>{const[a,i]=u.useState([]),[o,c]=u.useState(""),[l,x]=u.useState([]),[h,f]=u.useState(""),[E,S]=u.useState([]),[N,j]=u.useState(""),w=Me({defaultValues:{firstName:"",lastName:"",address1:"",email:"",city:"",zip:""}}),P=async s=>{const{countries:g}=await m.services.localeListShippingCountries(s);i(g),c(Object.keys(g)[0])},R=async s=>{const{subdivisions:g}=await m.services.localeListSubdivisions(s);x(g),f(Object.keys(g)[0])},F=async(s,g,T=null)=>{const p=await m.checkout.getShippingOptions(s,{country:g,region:T});S(p),j(p[0].id)};return t&&(u.useEffect(()=>{P(t.id)},[]),u.useEffect(()=>{o&&R(o)},[o]),u.useEffect(()=>{h&&F(t.id,o,h)},[h])),n(C,{children:[e(d,{variant:"h6",gutterBottom:!0,children:"Shipping Address"}),e(Oe,{...w,children:n("form",{onSubmit:w.handleSubmit(s=>r({...s,shippingCountry:o,shippingSubdivision:h,shippingOption:N})),children:[n(b,{container:!0,spacing:3,children:[e(B,{name:"firstName",label:"First name"}),e(B,{name:"lastName",label:"Last name"}),e(B,{name:"address1",label:"Address"}),e(B,{name:"email",label:"Email"}),e(B,{name:"city",label:"City"}),e(B,{name:"zip",label:"ZIP / Postal code"}),n(b,{item:!0,xs:12,sm:6,children:[e(W,{children:" Shipping Coutnry"}),e($,{value:o,fullWidth:!0,onChange:s=>c(s.target.value),children:Object.entries(a).map(([s,g])=>({id:s,label:g})).map(s=>e(z,{value:s.id,children:s.label},s.id))})]}),n(b,{item:!0,xs:12,sm:6,children:[e(W,{children:"Shipping Subdivision"}),e($,{value:h,fullWidth:!0,onChange:s=>f(s.target.value),children:Object.entries(l).map(([s,g])=>({id:s,label:g})).map(s=>e(z,{value:s.id,children:s.label},s.id))})]}),n(b,{item:!0,xs:12,sm:6,children:[e(W,{children:"Shipping Options"}),e($,{value:N,fullWidth:!0,onChange:s=>j(s.target.value),children:E.map(s=>({id:s.id,label:`${s.description} - (${s.price.formatted_with_symbol})`})).map(s=>e(z,{value:s.id,children:s.label},s.id))})]})]}),e("br",{}),n("div",{style:{display:"flex",justifyContent:"space-between"},children:[e(v,{to:"/E-Commerce/cart",style:{textDecoration:"none"},children:e(y,{variant:"outlined",color:"secondary",children:"Back to Cart"})}),e(y,{type:"submit",variant:"contained",color:"secondary",children:"Next"})]})]})})]})},lt=({checkoutToken:t})=>n(C,{children:[e(d,{variant:"h6",gutterBottom:!0,children:"Order summery"}),n(fe,{disablePadding:!0,children:[t.line_items.map(r=>n(V,{style:{padding:"10px 0"},children:[e(G,{primary:r.name,secondary:`Quantity ${r.quantity}`}),e(d,{variant:"body2",children:r.line_total.formatted_with_symbol})]},r.name)),n(V,{style:{padding:"10px 0"},children:[e(G,{primary:"total"}),e(d,{variant:"subtitle1",style:{fontWeight:700},children:t.subtotal.formatted_with_symbol})]})]})]}),dt=Ie("pk_test_51MdcQyBgzWhAf0TpSv8sDaBEiynjdbbVLR306VpfmD2q6ubthhPnNBDpBmQGHQVgFRWitbyKfV4BP1gqjee07c2l00nwaZvCHM"),mt=({shippingData:t,checkoutToken:r,nextStep:a,backStep:i,handleCaptureCheckout:o,timeout:c})=>{const l=async(x,h,f)=>{if(x.preventDefault(),!f||!h)return;const{error:E,paymentMethod:S}=await f.createPaymentMethod({type:"card",card:h.getElement(H)});if(E)Dispatch(ce(E));else{const N={line_items:r.line_items,customer:{firstname:t.firstName,lastname:t.lastName,email:t.email},shipping:{name:"International",street:t.address1,town_city:t.city,county_state:t.shippingSubdivision,postal_zip_code:t.zip,country:t.shippingCountry},fulfillment:{shipping_method:t.shippingOption},payment:{gateway:"stripe",stripe:{payment_method_id:S.id}}};o(r.id,N),c(),a()}};return n(C,{children:[e(lt,{checkoutToken:r}),e(be,{}),e(d,{variant:"h6",gutterBottom:!0,style:{margin:"20px 0"},children:"Payment method"}),e(Re,{stripe:dt,children:e(Fe,{children:({elements:x,stripe:h})=>n("form",{onSubmit:f=>l(f,x,h),children:[e(H,{}),e("br",{})," ",e("br",{}),n("div",{style:{display:"flex",justifyContent:"space-between"},children:[e(y,{variant:"outlined",color:"secondary",onClick:i,children:"Back"}),n(y,{type:"submit",variant:"contained",disabled:!h,color:"secondary",children:["Pay ",r.subtotal.formatted_with_symbol]})]})]})})})]})},K=["Shipping address","Payment details"],pt=({handleCaptureCheckout:t})=>{const r=st(),[a,i]=u.useState(0),[o,c]=u.useState(null),[l,x]=u.useState({}),[h,f]=u.useState(!1),E=De(),{cartData:S,isLoading:N,error:j,Order:w}=L(p=>p.MainSlice);if(N)return e("div",{style:{flexGrow:1,display:"flex",justifyContent:"center",alignItems:"center"},children:e(M,{})});u.useEffect(()=>{const p=async()=>{try{const A=await m.checkout.generateToken(S.id,{type:"cart"});c(A)}catch(A){console.log(A),E("/E-Commerce/")}};S.id&&S.line_items.length>0&&p()},[S]);const P=()=>i(p=>p+1),R=()=>i(p=>p-1),F=p=>{x(p),P()},s=()=>setTimeout(()=>{f(!0)},1e4),g=()=>a==0?e(ct,{checkoutToken:o,next:F}):e(mt,{shippingData:l,checkoutToken:o,nextStep:P,backStep:R,handleCaptureCheckout:t,timeout:s});let T=()=>w.customer?n(C,{children:[n("div",{style:{textDecoration:"none"},children:[n(D,{variant:"h5",children:["Thank you for your purchase, ",w.customer.firstname," ",w.customer.lastname]}),n(D,{variant:"subtitle2",children:["Order ref: ",w.customer_reference]})]}),e("br",{}),e(v,{to:"/E-Commerce/",color:"secondary",style:{textDecoration:"none"},children:e(q,{variant:"outlined",type:"button",children:"Back to Home"})})]}):h?n(C,{children:[e("div",{children:e(D,{variant:"h5",children:"Thank you for your purchase"})}),e("br",{}),e(v,{to:"/E-Commerce/",style:{textDecoration:"none"},color:"secondary",children:e(q,{variant:"outlined",type:"button",children:"Back to Home"})})]}):e("div",{className:r.spinner,children:e(M,{})});return j&&(T=()=>n(C,{children:[n(D,{variant:"h5",children:["Error: ",j]}),e("br",{}),e(v,{to:"/E-Commerce/",style:{textDecoration:"none"},children:e(q,{variant:"outlined",type:"button",style:{textDecoration:"none"},children:"Back to home"})})]})),n(C,{children:[e(Ae,{}),e("div",{className:r.toolbar}),e("main",{className:r.layout,children:n(We,{className:r.paper,children:[e(D,{variant:"h4",align:"center",children:"Checkout"}),e($e,{activeStep:a,className:r.stepper,children:K.map(p=>e(ze,{children:e(qe,{children:p})},p))}),a===K.length?e(T,{}):o?e(g,{}):e("div",{style:{flexGrow:1,display:"flex",justifyContent:"center",alignItems:"center"},children:e(M,{})})]})})]})};function ut(){const t=I(),{isLoading:r}=L(o=>o.MainSlice),a=async(o,c)=>{try{const l=await m.checkout.capture(o,{...c});t(Ge(l)),t(re())}catch(l){t(ce(l))}};if(u.useEffect(()=>{t(r?O():te())},[r]),r)return e("div",{style:{flexGrow:1,display:"flex",justifyContent:"center",alignItems:"center",height:"95vh"},children:e(M,{"data-testid":"circularLoading"})});const i=ke([{element:e(rt,{}),errorElement:e(Ye,{}),children:[{path:"/E-Commerce",element:e(Xe,{})},{path:"/E-Commerce/cart",element:e(ot,{})},{path:"/E-Commerce/checkout",element:e(pt,{handleCaptureCheckout:a})}]}]);return e("div",{children:e(Ce,{injectFirst:!0,children:e(ve,{theme:Qe,children:e(Le,{router:i})})})})}const ht=Ee({reducer:{MainSlice:He},middleware:t=>t({immutableCheck:!1,serializableCheck:!1})}),gt=xe(document.getElementById("root"));gt.render(e(Se.StrictMode,{children:e(we,{store:ht,children:e(ut,{})})}));
//# sourceMappingURL=index-ba5fd40e.js.map
