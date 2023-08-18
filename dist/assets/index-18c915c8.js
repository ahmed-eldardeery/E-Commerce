import{c as P,j as s,C as S,S as L,T as O}from"./@mui-48cc8e00.js";import{r as d}from"./react-213325bd.js";import{c as D}from"./react-dom-7ddf5457.js";import{u as R,a as b,P as T}from"./react-redux-486f298f.js";import{c as j}from"./react-router-dom-2068f720.js";import{c as u,a as M,b as V}from"./@reduxjs-a29ed202.js";import{l as k}from"./@chec-4e715cfd.js";import"./hoist-non-react-statics-92a0866e.js";import"./react-is-41a81967.js";import{R as A}from"./react-router-1baea72a.js";import"./@emotion-4ba0892a.js";import"./@babel-de422ddc.js";import"./stylis-2d96297d.js";import"./clsx-1229b3e0.js";import"./react-transition-group-c79f5d47.js";import"./scheduler-04ce0582.js";import"./use-sync-external-store-94d164a7.js";import"./@remix-run-66cedd4c.js";import"./immer-41fd5235.js";import"./redux-5df2d229.js";import"./redux-thunk-ef899f4c.js";import"./axios-419cf3fb.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const o of c)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(c){const o={};return c.integrity&&(o.integrity=c.integrity),c.referrerPolicy&&(o.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?o.credentials="include":c.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(c){if(c.ep)return;c.ep=!0;const o=r(c);fetch(c.href,o)}})();const I="modulepreload",W=function(t){return"/E-Commerce/"+t},y={},f=function(e,r,a){if(!r||r.length===0)return e();const c=document.getElementsByTagName("link");return Promise.all(r.map(o=>{if(o=W(o),o in y)return;y[o]=!0;const i=o.endsWith(".css"),E=i?'[rel="stylesheet"]':"";if(!!a)for(let m=c.length-1;m>=0;m--){const p=c[m];if(p.href===o&&(!i||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${E}`))return;const l=document.createElement("link");if(l.rel=i?"stylesheet":I,i||(l.as="script",l.crossOrigin=""),l.href=o,document.head.appendChild(l),i)return new Promise((m,p)=>{l.addEventListener("load",m),l.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e())},w="pk_test_5032151bec3c46defe8917688f5bb6bc7947aac9c4213",n=new k(w),h=u("MainSlice/fetchProducts",(t,e)=>{const{rejectWithValue:r}=e;try{return n.products.list()}catch(a){return r(a.message)}}),g=u("MainSlice/fetchCart",(t,e)=>{const{rejectWithValue:r}=e;try{return n.cart.retrieve()}catch(a){return r(a.message)}}),_=u("MainSlice/refreshCart",(t,e)=>{const{rejectWithValue:r}=e;try{return n.cart.refresh()}catch(a){return r(a.message)}}),z=u("MainSlice/addToCart",(t,e)=>{const{rejectWithValue:r}=e;try{return n.cart.add(t,1),n.cart.retrieve()}catch(a){return r(a.message)}}),x=u("MainSlice/emptyCart",(t,e)=>{const{rejectWithValue:r}=e;try{return n.cart.empty(),n.cart.retrieve()}catch(a){return r(a.message)}}),B=u("MainSlice/removeFromCart",(t,e)=>{const{rejectWithValue:r}=e;try{return n.cart.remove(t),n.cart.retrieve()}catch(a){return r(a.message)}}),N=u("MainSlice/updateCartQty",(t,e)=>{const{rejectWithValue:r}=e;try{return n.cart.update(t.id,t.quantity),n.cart.retrieve()}catch(a){return r(a.message)}}),v=M({name:"MainSlice",initialState:{productsData:[],cartData:{},Order:{},error:null,isLoading:!0},reducers:{setOrder:(t,e)=>{t.Order=e.payload},setError:(t,e)=>{console.log(e.payload),t.error=e.payload.data.error.message}},extraReducers:t=>{t.addCase(h.fulfilled,(e,r)=>{e.productsData=r.payload.data,e.isLoading=!1}).addCase(h.pending,e=>{e.isLoading=!0}).addCase(h.rejected,(e,r)=>{e.error=r.payload,e.isLoading=!1}).addCase(g.fulfilled,(e,r)=>{e.cartData=r.payload}).addCase(_.fulfilled,(e,r)=>{e.cartData=r.payload}).addCase(z.fulfilled,(e,r)=>{e.cartData=r.payload}).addCase(x.fulfilled,(e,r)=>{e.cartData=r.payload}).addCase(B.fulfilled,(e,r)=>{e.cartData=r.payload}).addCase(N.fulfilled,(e,r)=>{e.cartData=r.payload})}}),{setOrder:F,setError:$}=v.actions,q=v.reducer,K=P({palette:{primary:{main:"#2f4ca8"},secondary:{main:"#ff214c"}}});function C({height:t="auto"}){return s("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:t},color:"primary","data-testid":"circularLoading",children:s(S,{})})}const Q=d.lazy(()=>f(()=>import("./error-page-9c68d62c.js"),["assets/error-page-9c68d62c.js","assets/@mui-48cc8e00.js","assets/react-is-41a81967.js","assets/react-213325bd.js","assets/@babel-de422ddc.js","assets/@emotion-4ba0892a.js","assets/hoist-non-react-statics-92a0866e.js","assets/stylis-2d96297d.js","assets/clsx-1229b3e0.js","assets/react-transition-group-c79f5d47.js","assets/react-dom-7ddf5457.js","assets/scheduler-04ce0582.js","assets/react-router-dom-2068f720.js","assets/react-router-1baea72a.js","assets/@remix-run-66cedd4c.js"])),U=d.lazy(()=>f(()=>import("./Products-33c67739.js"),["assets/Products-33c67739.js","assets/@mui-48cc8e00.js","assets/react-is-41a81967.js","assets/react-213325bd.js","assets/@babel-de422ddc.js","assets/@emotion-4ba0892a.js","assets/hoist-non-react-statics-92a0866e.js","assets/stylis-2d96297d.js","assets/clsx-1229b3e0.js","assets/react-transition-group-c79f5d47.js","assets/react-dom-7ddf5457.js","assets/scheduler-04ce0582.js","assets/react-redux-486f298f.js","assets/use-sync-external-store-94d164a7.js","assets/react-router-dom-2068f720.js","assets/react-router-1baea72a.js","assets/@remix-run-66cedd4c.js","assets/@reduxjs-a29ed202.js","assets/immer-41fd5235.js","assets/redux-5df2d229.js","assets/redux-thunk-ef899f4c.js","assets/@chec-4e715cfd.js","assets/axios-419cf3fb.js"])),G=d.lazy(()=>f(()=>import("./Navbar-ff3ee086.js"),["assets/Navbar-ff3ee086.js","assets/@mui-48cc8e00.js","assets/react-is-41a81967.js","assets/react-213325bd.js","assets/@babel-de422ddc.js","assets/@emotion-4ba0892a.js","assets/hoist-non-react-statics-92a0866e.js","assets/stylis-2d96297d.js","assets/clsx-1229b3e0.js","assets/react-transition-group-c79f5d47.js","assets/react-dom-7ddf5457.js","assets/scheduler-04ce0582.js","assets/react-redux-486f298f.js","assets/use-sync-external-store-94d164a7.js","assets/react-router-dom-2068f720.js","assets/react-router-1baea72a.js","assets/@remix-run-66cedd4c.js"])),H=d.lazy(()=>f(()=>import("./Cart-f4425107.js"),["assets/Cart-f4425107.js","assets/@mui-48cc8e00.js","assets/react-is-41a81967.js","assets/react-213325bd.js","assets/@babel-de422ddc.js","assets/@emotion-4ba0892a.js","assets/hoist-non-react-statics-92a0866e.js","assets/stylis-2d96297d.js","assets/clsx-1229b3e0.js","assets/react-transition-group-c79f5d47.js","assets/react-dom-7ddf5457.js","assets/scheduler-04ce0582.js","assets/react-router-dom-2068f720.js","assets/react-router-1baea72a.js","assets/@remix-run-66cedd4c.js","assets/react-redux-486f298f.js","assets/use-sync-external-store-94d164a7.js","assets/@reduxjs-a29ed202.js","assets/immer-41fd5235.js","assets/redux-5df2d229.js","assets/redux-thunk-ef899f4c.js","assets/@chec-4e715cfd.js","assets/axios-419cf3fb.js"])),J=d.lazy(()=>f(()=>import("./Checkout-5e847c8f.js"),["assets/Checkout-5e847c8f.js","assets/@mui-48cc8e00.js","assets/react-is-41a81967.js","assets/react-213325bd.js","assets/@babel-de422ddc.js","assets/@emotion-4ba0892a.js","assets/hoist-non-react-statics-92a0866e.js","assets/stylis-2d96297d.js","assets/clsx-1229b3e0.js","assets/react-transition-group-c79f5d47.js","assets/react-dom-7ddf5457.js","assets/scheduler-04ce0582.js","assets/react-redux-486f298f.js","assets/use-sync-external-store-94d164a7.js","assets/react-router-dom-2068f720.js","assets/react-router-1baea72a.js","assets/@remix-run-66cedd4c.js","assets/@reduxjs-a29ed202.js","assets/immer-41fd5235.js","assets/redux-5df2d229.js","assets/redux-thunk-ef899f4c.js","assets/@chec-4e715cfd.js","assets/axios-419cf3fb.js"]));function X(){const t=R(),{isLoading:e}=b(c=>c.MainSlice),r=async(c,o)=>{try{const i=await n.checkout.capture(c,{...o});t(F(i)),t(_())}catch(i){t($(i))}};if(d.useEffect(()=>{t(e?h():g())},[e]),e)return s(C,{height:"95vh"});const a=j([{element:s(G,{}),errorElement:s(Q,{}),children:[{path:"/E-Commerce",element:s(U,{})},{path:"/E-Commerce/cart",element:s(H,{})},{path:"/E-Commerce/checkout",element:s(J,{handleCaptureCheckout:r})}]}]);return s("div",{children:s(L,{injectFirst:!0,children:s(O,{theme:K,children:s(d.Suspense,{fallback:s(C,{height:"95vh"}),children:s(A,{router:a})})})})})}const Y=V({reducer:{MainSlice:q},middleware:t=>t({immutableCheck:!1,serializableCheck:!1})}),Z=D(document.getElementById("root"));Z.render(s(T,{store:Y,children:s(X,{})}));export{C as L,f as _,z as a,n as c,x as e,B as r,$ as s,N as u};
//# sourceMappingURL=index-18c915c8.js.map