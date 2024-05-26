import{j as e}from"./jsx-runtime.CYYqVSlZ.js";import{R as c,r as d}from"./index.DJO9vBfz.js";import{r as L,c as A}from"./client.CjAdBq2B.js";import"./index.CzFDRTuY.js";function D(t){(function(){t("sync")})()}function b(t){queueMicrotask(function(){t("micro task")})}function N(t){scheduler?.postTask(function(){t("task (user-blocking)")},{priority:"user-blocking"})}function _(t){scheduler?.postTask(function(){t("task (user-visible)")},{priority:"user-visible"})}function H(t){scheduler?.postTask(function(){t("task (background)")},{priority:"background"})}function p(t){const n=new MessageChannel;n.port1.postMessage(null),n.port2.addEventListener("message",function(){t("task")},{once:!0}),n.port2.start()}function C(t){requestAnimationFrame(function(){t("animation frame")})}function O(t,n=!1){n&&(H(t),_(t),N(t)),p(t),C(t),b(t),D(t)}function F(t){return t?"Now: "+performance.now().toFixed(1)+"ms | Timeline: "+document.timeline.currentTime+"ms | ":""}function r(t,{tasks:n,timings:o=!1,style:i="",nestedLogMessage:s}={}){if(!n){console.log(F(o)+t,i);return}const a=["font-style: italic; text-decoration-line: underline",""];O(u=>{console.log(F(o)+"%c"+u+"%c "+t,...a,i),s&&r("< "+u+" "+s,{tasks:n,timings:o,style:i})},n==="all")}const w=()=>`lch(${Math.floor(Math.random()*20)+50}% ${Math.floor(Math.random()*50)+50} ${Math.floor(Math.random()*360)})`;let R=65;const y=c.createContext({tasks:!1,timings:!1}),W=c.createContext(new Set);class g extends c.Component{constructor(){super(...arguments),this.state={error:!1},this.suspenses=new Set}static getDerivedStateFromError(){return{error:!0}}static{this.contextType=y}render(){return this.state.error?e.jsx("div",{style:{border:"4px dotted red"},children:"Oops"}):e.jsx(W.Provider,{value:this.suspenses,children:e.jsx(c.Suspense,{fallback:e.jsx("div",{style:{border:"4px dotted blue",padding:"4px"},onClick:()=>{r("resolve promises",this.context);for(const n of this.suspenses)n();this.suspenses.clear()},children:"⏸️"}),children:e.jsx("div",{style:{border:"2px double OrangeRed",padding:"4px"},children:this.props.children})})})}}function v(){const[t,n]=c.useState(!1);if(t)throw new Error("oops");return e.jsx("span",{onClick:()=>n(!0),title:"throw error",children:"💥"})}const E=new Map,V=t=>{const n={},o=new Promise(i=>{t.add(()=>{i(),E.delete(n)})});return E.set(n,o),n};function T(){const[t,n]=c.useState({}),o=E.get(t),i=c.useContext(W);if(o)throw o;return e.jsx("span",{onClick:()=>n(V(i)),title:"trigger infinite suspense",children:"🚧"})}function q(){const t={width:"2ch",display:"inline-block",height:"0.5ex"};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx("span",{style:{...t,borderTop:"2px solid "+w()}})," ","Component"]}),e.jsxs("div",{children:[e.jsx("span",{style:{...t,borderTop:"2px double orangered"}})," Error + Suspense boundary"]}),e.jsxs("div",{children:[e.jsx("span",{style:{...t,borderTop:"4px dotted red"}})," Error was thrown & caught"]}),e.jsxs("div",{children:[e.jsx("span",{style:{...t,borderTop:"4px dotted blue"}})," Suspense in progress"]})]})}class m extends c.Component{constructor(n){super(n),this.color=w(),this.componentId=String.fromCharCode(R++),this.boundLog("constructor")}static{this.contextType=y}boundLog(n){r(`%cComponent ${this.componentId}: ${n}`,{...this.context,style:`color: ${this.color}`})}UNSAFE_componentWillMount(){this.boundLog("UNSAFE_componentWillMount")}UNSAFE_componentWillReceiveProps(){this.boundLog("UNSAFE_componentWillReceiveProps")}UNSAFE_componentWillUpdate(){this.boundLog("UNSAFE_componentWillUpdate")}componentDidMount(){this.boundLog("componentDidMount")}componentDidUpdate(){this.boundLog("componentDidUpdate")}shouldComponentUpdate(){return this.boundLog("shouldComponentUpdate"),!0}componentWillUnmount(){this.boundLog("componentWillUnmount")}render(){return this.boundLog("render"),e.jsxs("div",{ref:function(o){this.boundLog("ref "+(o?"node":"null"))}.bind(this),style:{border:`2px solid ${this.color}`},children:[e.jsxs("div",{children:[this.componentId,e.jsx("span",{onClick:()=>{h(),this.forceUpdate()},title:"re-render",children:"🔄"}),e.jsx(v,{}),e.jsx(T,{})]}),e.jsx("div",{style:{display:"grid",gridAutoFlow:"column"},children:this.props.children})]})}}class K extends m{render(){return this.boundLog("render"),e.jsxs("div",{ref:function(o){this.boundLog("ref "+(o?"node":"null"))}.bind(this),style:{border:`2px solid ${this.color}`},children:[e.jsxs("div",{children:[this.componentId,"*",e.jsx("span",{onClick:()=>{h(),this.forceUpdate()},title:"re-render",children:"🔄"}),e.jsx(v,{}),e.jsx(T,{})]}),e.jsxs("div",{style:{display:"grid",gridAutoFlow:"column"},children:[e.jsx("span",{}),e.jsx(m,{}),e.jsx("span",{})]})]})}}function z(){return e.jsxs(m,{children:[e.jsx(g,{children:e.jsx(m,{children:e.jsx(m,{})})}),e.jsx(g,{children:e.jsx(K,{})})]})}const $=()=>{const t=c.useMemo(()=>w(),[]),n=c.useMemo(()=>String.fromCharCode(R++),[]),o=c.useContext(y),i=c.useRef(null),s=c.useCallback(l=>{r(`%cComponent ${n}: ${l}`,{...o,style:`color: ${t}`})},[o]);s("render");const[,a]=c.useState({});return c.useMemo(function(){s("useMemo")},[]),c.useInsertionEffect(function(){return s("useInsertionEffect "+(i.current?"node":"null")),function(){s("useInsertionEffect cleanup "+(i.current?"node":"null"))}}),c.useLayoutEffect(function(){return s("useLayoutEffect "+(i.current?"node":"null")),function(){s("useLayoutEffect cleanup "+(i.current?"node":"null"))}}),c.useEffect(function(){return s("useEffect "+(i.current?"node":"null")),function(){s("useEffect cleanup "+(i.current?"node":"null"))}}),{log:s,color:t,componentId:n,forceUpdate:a,elementRef:i}};function j({children:t}){const{log:n,color:o,componentId:i,forceUpdate:s,elementRef:a}=$();return e.jsxs("div",{ref:function(u){a.current=u,n("ref "+(u?"node":"null"))},style:{border:`2px solid ${o}`},children:[e.jsxs("div",{children:[i,e.jsx("span",{onClick:()=>{h(),s({})},title:"re-render",children:"🔄"}),e.jsx(v,{}),e.jsx(T,{})]}),e.jsx("div",{style:{display:"grid",gridAutoFlow:"column"},children:t})]})}function G(){const{log:t,color:n,componentId:o,forceUpdate:i,elementRef:s}=$();return e.jsxs("div",{ref:function(l){s.current=l,t("ref "+(l?"node":"null"))}.bind(this),style:{border:`2px solid ${n}`},children:[e.jsxs("div",{children:[o,"*",e.jsx("span",{onClick:()=>{h(),i({})},title:"re-render",children:"🔄"}),e.jsx(v,{}),e.jsx(T,{})]}),e.jsxs("div",{style:{display:"grid",gridAutoFlow:"column"},children:[e.jsx("span",{}),e.jsx(j,{}),e.jsx("span",{})]})]})}function J(){return e.jsxs(j,{children:[e.jsx(g,{children:e.jsx(j,{children:e.jsx(j,{})})}),e.jsx(g,{children:e.jsx(G,{})})]})}const S={class:z,function:J};function h(){console.clear(),R=65}function Q(){const[t,n]=c.useState(null),[,o]=c.useState({}),i=S[t],[s,a]=c.useState(!1),[l,u]=c.useState(!1),B=c.useMemo(()=>({timings:s,tasks:l?"all":!1}),[s,l]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:["Pick example:",Object.keys(S).map(f=>e.jsx("button",{onClick:()=>{S[f]!==i&&(h(),n(f))},children:f},f))]}),e.jsxs("div",{style:{marginTop:"0.5em"},children:["Timing ",s?"enabled ":"disabled ",e.jsx("button",{title:`Toggle timing to ${s?"disabled ":"enabled "}`,onClick:()=>{h(),a(f=>!f)},children:s?"️⌛":"⏳"})]}),e.jsxs("div",{style:{marginBottom:"0.5em"},children:["Tasks ",l?"enabled ":"disabled ",e.jsx("button",{title:`Toggle tasks to ${l?"disabled ":"enabled "}`,onClick:()=>{h(),u(f=>!f)},children:l?"️🪫":"🔋"})]}),i&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{marginBottom:"0.5em"},children:[e.jsx("button",{onClick:()=>{h(),n(null)},children:"Remove all"}),e.jsx("button",{onClick:()=>{h(),o({})},children:"Re-render"})]}),e.jsx("div",{className:"grow",children:e.jsx(y.Provider,{value:B,children:e.jsx(g,{children:e.jsx(i,{},String(s)+"-"+String(l))})})}),e.jsx("div",{style:{marginTop:"0.5em"},children:e.jsx(q,{})})]})]})}function X(){const[t,n]=d.useState(!1),[o,i]=d.useState(!1),[s,a]=d.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[t?"2 levels":"Only 1 level",e.jsx("button",{onClick:()=>n(l=>!l),children:t?"⤴️":"⤵️"})]}),e.jsxs("div",{children:["Timing ",o?"enabled ":"disabled ",e.jsx("button",{onClick:()=>{i(l=>!l)},children:o?"️⌛":"⏳"})]}),e.jsxs("div",{style:{marginBottom:"0.5em"},children:[s?"All tasks":"Some tasks",e.jsx("button",{onClick:()=>a(l=>!l),children:"🔀"})]}),e.jsx("button",{onClick:()=>{console.clear(),r("from React onClick",{tasks:s?"all":!0,timings:o,nestedLogMessage:t?"| from React onClick":void 0})},children:"Trigger from a React onClick"}),e.jsx("button",{ref:l=>{l&&(l.onclick=()=>{console.clear(),r("from HTML onClick",{tasks:s?"all":!0,timings:o,nestedLogMessage:t?"| from HTML onClick":void 0})})},children:"Trigger from a HTML onClick"}),e.jsx("button",{onClick:()=>b(()=>{console.clear(),r("from micro task",{tasks:s?"all":!0,timings:o,nestedLogMessage:t?"| from micro task":void 0})}),children:"Trigger from a micro task"}),e.jsx("button",{onClick:()=>p(()=>{console.clear(),r("from task",{tasks:s?"all":!0,timings:o,nestedLogMessage:t?"| from task":void 0})}),children:"Trigger from a task"}),e.jsx("button",{onClick:()=>p(()=>{console.clear(),r("from user-blocking task",{tasks:s?"all":!0,timings:o,nestedLogMessage:t?"| from user-blocking task":void 0})}),children:"Trigger from a user-blocking task"}),e.jsx("button",{onClick:()=>C(()=>{console.clear(),r("from animation frame",{tasks:s?"all":!0,timings:o,nestedLogMessage:t?"| from animation frame":void 0})}),children:"Trigger from a animation frame"}),e.jsx("button",{onClick:()=>setTimeout(()=>{console.clear(),r("from setTimeout",{tasks:s?"all":!0,timings:o,nestedLogMessage:t?"| from setTimeout":void 0})},50),children:"Trigger from a setTimeout"})]})}function Y(){return e.jsx(e.Fragment,{children:e.jsx("button",{onClickCapture:()=>{console.clear(),r("from onClickCapture",{tasks:!0})},onClick:()=>{r("from onClick",{tasks:!0})},children:"Click me"})})}function k({label:t,children:n,style:o}){const[i,s]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs("button",{style:{marginBottom:i?"0.5em":void 0,...o},onClick:()=>s(a=>!a),children:[i?"Hide":"Display"," ",t]}),i&&n]})}let x=!1;function Z(){return e.jsxs(e.Fragment,{children:[e.jsx(k,{label:"re-render in useEffect",children:e.jsx(ee,{})}),e.jsx(k,{style:{marginTop:"1em"},label:"re-render in render",children:e.jsx(te,{})}),e.jsxs(k,{style:{marginTop:"1em"},label:"re-render timings",children:[e.jsx("button",{onClick:t=>{x=!x,t.currentTarget.innerHTML=x?"Disable flushSync":"Enable flushSync"},dangerouslySetInnerHTML:{__html:"Enable flushSync"}}),e.jsx(se,{}),e.jsx(re,{})]})]})}function ee(){const[,t]=d.useState({});return r("render"),d.useEffect(()=>{r("mount that has a re-render"),t({})},[]),d.useEffect(()=>{r("effect with no side effects")}),"✅"}function te(){const[t,n]=d.useState(0);return r("%cparent | render",{style:"color:green"}),d.useMemo(()=>{r("%cparent |  useMemo before setState",{style:"color:green"})},[t]),t<2&&n(t+1),d.useMemo(()=>{r("%cparent |  useMemo after setState",{style:"color:green"})},[t]),d.useLayoutEffect(()=>{r("%cparent |  useLayoutEffect",{style:"color:green"})}),d.useEffect(()=>{r("%cparent |  useEffect",{style:"color:green"})}),e.jsx("div",{ref:o=>r(`%cparent |  ref ${o?"node":"null"}`,{style:"color:green"}),children:e.jsx(ne,{})})}function ne(){return r("%cchild  | render",{style:"color:blue"}),d.useLayoutEffect(()=>{r("%cchild  |  useLayoutEffect",{style:"color:blue"})}),d.useEffect(()=>{r("%cchild  |  useEffect",{style:"color:blue"})}),e.jsx("div",{ref:t=>r(`%cchild  |  ref ${t?"node":"null"}`,{style:"color:blue"}),children:"✅"})}function se(){const[t,n]=d.useState(1),[o,i]=d.useState(1);console.log("render",{a:t,b:o});const s=()=>{console.clear(),r("click (before re-renders)",{tasks:!0}),x?(L.flushSync(()=>n(a=>a+1)),r("click (between re-renders, after flushSync)",{tasks:!0})):(n(a=>a+1),r("click (between re-renders)",{tasks:!0})),i(a=>a+1),r("click (after re-renders)",{tasks:!0})};return e.jsxs("div",{children:[e.jsx("div",{children:"Function:"}),e.jsx("button",{onClick:s,children:"onClick"}),e.jsx("button",{onClick:()=>b(s),children:"Micro task"}),e.jsx("button",{onClick:()=>p(s),children:"Task"}),e.jsx("button",{onClick:()=>C(s),children:"Animation frame"})]})}class re extends d.Component{constructor(){super(...arguments),this.state={a:1,b:1},this.update=()=>{console.clear(),r("click (before re-renders)",{tasks:!0}),x?(L.flushSync(()=>this.setState(n=>({...n,a:n.a+1}),()=>{r("Set state for a is done")})),r("click (between re-renders, after flushSync)",{tasks:!0})):(this.setState(n=>({...n,a:n.a+1}),()=>{r("Set state for a is done")}),r("click (between re-renders)",{tasks:!0})),this.setState(n=>({...n,b:n.b+1}),()=>{r("Set state for b is done")}),r("click (after re-renders)",{tasks:!0})}}render(){return console.log("render",this.state),e.jsxs("div",{children:[e.jsx("div",{children:"Class:"}),e.jsx("button",{onClick:this.update,children:"onClick"}),e.jsx("button",{onClick:()=>b(this.update),children:"Micro task"}),e.jsx("button",{onClick:()=>p(this.update),children:"Task"}),e.jsx("button",{onClick:()=>C(this.update),children:"Animation frame"})]})}}const P=d.createContext(0);function oe(){return e.jsx(k,{label:"re-render through Context",children:e.jsx(ie,{children:e.jsx(le,{children:e.jsx(ce,{})})})})}function ie({children:t}){const[n,o]=d.useState(0),[,i]=d.useState({});return r("render Provider",{tasks:!0}),e.jsxs("div",{style:{padding:2,border:"2px solid red"},children:["Provider",e.jsxs("div",{children:[e.jsx("button",{onClick:()=>{r("re-render Provider",{tasks:!0}),o(s=>s+1)},children:"Update context"}),e.jsx("button",{style:{marginBottom:"0.5em"},onClick:()=>i({}),children:"Update local state"})]}),e.jsx(P.Provider,{value:n,children:t})]})}const le=d.memo(({children:t})=>(r("render PassThrough"),e.jsxs("div",{style:{padding:2,border:"2px solid green"},children:[e.jsx("div",{children:"PassThrough"}),t]}))),ce=d.memo(()=>{r("render Child");const t=d.useContext(P);return e.jsxs("div",{style:{padding:2,border:"2px solid blue"},children:["Child ",t]})});function U(){return e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Test how component (re-)renders"}),e.jsx(Q,{}),e.jsx("hr",{}),e.jsx("h2",{children:"Test tasks ordering"}),e.jsx(X,{}),e.jsx("hr",{}),e.jsx("h2",{children:"Test event capture / event bubble"}),e.jsx(Y,{}),e.jsx("hr",{}),e.jsx("h2",{children:"Test re-renders"}),e.jsx(Z,{}),e.jsx("hr",{}),e.jsx("h2",{children:"Context re-rendering"}),e.jsx(oe,{})]})}const M=!!sessionStorage.getItem("legacyRoot");function de(){return e.jsx(e.Fragment,{children:e.jsxs("button",{onClick:()=>{M?sessionStorage.removeItem("legacyRoot"):sessionStorage.setItem("legacyRoot","true"),window.location.reload()},children:["Switch to ",M?"concurrent":"legacy"]})})}const I=document.getElementById("root");M?L.render(e.jsx(U,{}),I):A(I).render(e.jsx(U,{}));A(document.getElementById("switcher")).render(e.jsx(de,{}));
