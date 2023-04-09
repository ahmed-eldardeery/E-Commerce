import{A as D,i as f,p as k,s as w,m as T,j as x,g as I,r as F,a as V}from"./@remix-run-486e32ce.js";import{R as b,r as o}from"./react-4fcb63cb.js";/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function z(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const _=typeof Object.is=="function"?Object.is:z,{useState:$,useEffect:G,useLayoutEffect:W,useDebugValue:q}=b;function K(e,t,r){const n=t(),[{inst:a},l]=$({inst:{value:n,getSnapshot:t}});return W(()=>{a.value=n,a.getSnapshot=t,B(a)&&l({inst:a})},[e,n,t]),G(()=>(B(a)&&l({inst:a}),e(()=>{B(a)&&l({inst:a})})),[e]),q(n),n}function B(e){const t=e.getSnapshot,r=e.value;try{const n=t();return!_(r,n)}catch{return!0}}function Q(e,t,r){return t()}const X=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Y=!X,Z=Y?Q:K,A="useSyncExternalStore"in b?(e=>e.useSyncExternalStore)(b):Z,U=o.createContext(null),L=o.createContext(null),R=o.createContext(null),P=o.createContext(null),m=o.createContext({outlet:null,matches:[]}),J=o.createContext(null);function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},S.apply(this,arguments)}function me(e,t){let{relative:r}=t===void 0?{}:t;C()||f(!1);let{basename:n,navigator:a}=o.useContext(R),{hash:l,pathname:s,search:u}=te(e,{relative:r}),i=s;return n!=="/"&&(i=s==="/"?n:x([n,s])),a.createHref({pathname:i,search:u,hash:l})}function C(){return o.useContext(P)!=null}function M(){return C()||f(!1),o.useContext(P).location}function Ee(){C()||f(!1);let{basename:e,navigator:t}=o.useContext(R),{matches:r}=o.useContext(m),{pathname:n}=M(),a=JSON.stringify(I(r).map(u=>u.pathnameBase)),l=o.useRef(!1);return o.useEffect(()=>{l.current=!0}),o.useCallback(function(u,i){if(i===void 0&&(i={}),!l.current)return;if(typeof u=="number"){t.go(u);return}let c=F(u,JSON.parse(a),n,i.relative==="path");e!=="/"&&(c.pathname=c.pathname==="/"?e:x([e,c.pathname])),(i.replace?t.replace:t.push)(c,i.state,i)},[e,t,a,n])}const H=o.createContext(null);function ee(e){let t=o.useContext(m).outlet;return t&&o.createElement(H.Provider,{value:e},t)}function te(e,t){let{relative:r}=t===void 0?{}:t,{matches:n}=o.useContext(m),{pathname:a}=M(),l=JSON.stringify(I(n).map(s=>s.pathnameBase));return o.useMemo(()=>F(e,JSON.parse(l),a,r==="path"),[e,l,a,r])}function re(e,t){C()||f(!1);let{navigator:r}=o.useContext(R),n=o.useContext(L),{matches:a}=o.useContext(m),l=a[a.length-1],s=l?l.params:{};l&&l.pathname;let u=l?l.pathnameBase:"/";l&&l.route;let i=M(),c;if(t){var d;let p=typeof t=="string"?k(t):t;u==="/"||(d=p.pathname)!=null&&d.startsWith(u)||f(!1),c=p}else c=i;let v=c.pathname||"/",h=u==="/"?v:v.slice(u.length)||"/",g=T(e,{pathname:h}),E=le(g&&g.map(p=>Object.assign({},p,{params:Object.assign({},s,p.params),pathname:x([u,r.encodeLocation?r.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?u:x([u,r.encodeLocation?r.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),a,n||void 0);return t&&E?o.createElement(P.Provider,{value:{location:S({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:D.Pop}},E):E}function ne(){let e=ce(),t=V(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},l=null;return o.createElement(o.Fragment,null,o.createElement("h2",null,"Unexpected Application Error!"),o.createElement("h3",{style:{fontStyle:"italic"}},t),r?o.createElement("pre",{style:a},r):null,l)}class oe extends o.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location?{error:t.error,location:t.location}:{error:t.error||r.error,location:r.location}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error?o.createElement(m.Provider,{value:this.props.routeContext},o.createElement(J.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ae(e){let{routeContext:t,match:r,children:n}=e,a=o.useContext(U);return a&&a.static&&a.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),o.createElement(m.Provider,{value:t},n)}function le(e,t,r){if(t===void 0&&(t=[]),e==null)if(r!=null&&r.errors)e=r.matches;else return null;let n=e,a=r==null?void 0:r.errors;if(a!=null){let l=n.findIndex(s=>s.route.id&&(a==null?void 0:a[s.route.id]));l>=0||f(!1),n=n.slice(0,Math.min(n.length,l+1))}return n.reduceRight((l,s,u)=>{let i=s.route.id?a==null?void 0:a[s.route.id]:null,c=null;r&&(s.route.ErrorBoundary?c=o.createElement(s.route.ErrorBoundary,null):s.route.errorElement?c=s.route.errorElement:c=o.createElement(ne,null));let d=t.concat(n.slice(0,u+1)),v=()=>{let h=l;return i?h=c:s.route.Component?h=o.createElement(s.route.Component,null):s.route.element&&(h=s.route.element),o.createElement(ae,{match:s,routeContext:{outlet:l,matches:d},children:h})};return r&&(s.route.ErrorBoundary||s.route.errorElement||u===0)?o.createElement(oe,{location:r.location,component:c,error:i,children:v(),routeContext:{outlet:null,matches:d}}):v()},null)}var N;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(N||(N={}));var y;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(y||(y={}));function se(e){let t=o.useContext(L);return t||f(!1),t}function ue(e){let t=o.useContext(m);return t||f(!1),t}function ie(e){let t=ue(),r=t.matches[t.matches.length-1];return r.route.id||f(!1),r.route.id}function ce(){var e;let t=o.useContext(J),r=se(y.UseRouteError),n=ie(y.UseRouteError);return t||((e=r.errors)==null?void 0:e[n])}function ge(e){let{fallbackElement:t,router:r}=e,n=o.useCallback(()=>r.state,[r]),a=A(r.subscribe,n,n),l=o.useMemo(()=>({createHref:r.createHref,encodeLocation:r.encodeLocation,go:i=>r.navigate(i),push:(i,c,d)=>r.navigate(i,{state:c,preventScrollReset:d==null?void 0:d.preventScrollReset}),replace:(i,c,d)=>r.navigate(i,{replace:!0,state:c,preventScrollReset:d==null?void 0:d.preventScrollReset})}),[r]),s=r.basename||"/",u=o.useMemo(()=>({router:r,navigator:l,static:!1,basename:s}),[r,l,s]);return o.createElement(o.Fragment,null,o.createElement(U.Provider,{value:u},o.createElement(L.Provider,{value:a},o.createElement(pe,{basename:r.basename,location:r.state.location,navigationType:r.state.historyAction,navigator:l},r.state.initialized?o.createElement(fe,null):t))),null)}function Ce(e){return ee(e.context)}function de(e){f(!1)}function pe(e){let{basename:t="/",children:r=null,location:n,navigationType:a=D.Pop,navigator:l,static:s=!1}=e;C()&&f(!1);let u=t.replace(/^\/*/,"/"),i=o.useMemo(()=>({basename:u,navigator:l,static:s}),[u,l,s]);typeof n=="string"&&(n=k(n));let{pathname:c="/",search:d="",hash:v="",state:h=null,key:g="default"}=n,E=o.useMemo(()=>{let p=w(c,u);return p==null?null:{location:{pathname:p,search:d,hash:v,state:h,key:g},navigationType:a}},[u,c,d,v,h,g,a]);return E==null?null:o.createElement(R.Provider,{value:i},o.createElement(P.Provider,{children:r,value:E}))}function fe(e){let{children:t,location:r}=e,n=o.useContext(U),a=n&&!t?n.router.routes:O(t);return re(a,r)}var j;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(j||(j={}));new Promise(()=>{});function O(e,t){t===void 0&&(t=[]);let r=[];return o.Children.forEach(e,(n,a)=>{if(!o.isValidElement(n))return;let l=[...t,a];if(n.type===o.Fragment){r.push.apply(r,O(n.props.children,l));return}n.type!==de&&f(!1),!n.props.index||!n.props.children||f(!1);let s={id:n.props.id||l.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(s.children=O(n.props.children,l)),r.push(s)}),r}function xe(e){return!!e.ErrorBoundary||!!e.errorElement}export{R as N,Ce as O,ge as R,Ee as a,M as b,te as c,xe as d,ce as e,me as u};
//# sourceMappingURL=react-router-8be29213.js.map
