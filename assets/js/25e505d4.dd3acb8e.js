"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3273],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(f,c(c({ref:t},i),{},{components:n})):a.createElement(f,c({ref:t},i))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[p]="string"==typeof e?e:r,c[1]=u;for(var l=2;l<o;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3913:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={},c=void 0,u={unversionedId:"react/Hooks",id:"react/Hooks",title:"Hooks",description:"1. Why React Hooks?",source:"@site/docs/react/999.Hooks.md",sourceDirName:"react",slug:"/react/Hooks",permalink:"/docs/react/Hooks",draft:!1,editUrl:"https://github.com/JonathanTube/jonathantube.github.com/tree/main/docs/react/999.Hooks.md",tags:[],version:"current",sidebarPosition:999,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"UseReducer",permalink:"/docs/react/UseReducer"},next:{title:"React Router",permalink:"/docs/category/react-router"}},s={},l=[{value:"1. Why React Hooks?",id:"1-why-react-hooks",level:2},{value:"2. useState",id:"2-usestate",level:2},{value:"3. useEffect",id:"3-useeffect",level:2},{value:"4. useContext",id:"4-usecontext",level:2},{value:"5. useReducer",id:"5-usereducer",level:2},{value:"6. useCallback",id:"6-usecallback",level:2},{value:"7. useMemo",id:"7-usememo",level:2},{value:"8. useRef",id:"8-useref",level:2},{value:"9. useLayoutEffect",id:"9-uselayouteffect",level:2}],i={toc:l},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-why-react-hooks"},"1. Why React Hooks?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"maintain state and side effects in React functional components."),(0,r.kt)("li",{parentName:"ul"},"\u7ef4\u62a4 react \u7ec4\u4ef6\u7684\u72b6\u6001\u548c\u526f\u4f5c\u7528\uff0c\u8fd9\u533a\u522b\u4e8e\u4f7f\u7528 class component \u7684\u65b9\u5f0f\u521b\u5efa\u7ec4\u4ef6\u3002")),(0,r.kt)("h2",{id:"2-usestate"},"2. useState"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const INITIAL_STATE = []\nconst App = () => {\n  const [items, setItems] = useState(INITIAL_STATE)\n  return (\n    // some code\n  )\n}\n")),(0,r.kt)("h2",{id:"3-useeffect"},"3. useEffect"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"useEffect(() => {\n  // some code\n}, [someProp, someState])\n// The first function as the first argument\n// will be executed depending on the changes of the second array function\n")),(0,r.kt)("h2",{id:"4-usecontext"},"4. useContext"),(0,r.kt)("p",null,"useContext provides the current context value of the context object passed to it. The useContext hook relies on nearest Context Provider to determine the current value for that context."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import React, { createContext, useContext } from "react"\nconst ThemeContext = createContext("green")\n\nconst App = () => {\n  return (\n    <ThemeContext.Provider value={"green"}>\n      <Content />\n    </ThemeContext.Provider>\n  )\n}\n\nconst Content = () => {\n  const theme = useContext(ThemeContext)\n  return <Button theme={theme} />\n}\n')),(0,r.kt)("h2",{id:"5-usereducer"},"5. useReducer"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"useReducer hook is an alternative to useState. It offers more control on the next state value based on a given action."),(0,r.kt)("li",{parentName:"ul"},"useReducer can be used in the following scenarios:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The shape of state object is complex. Maintain multiple items within the same state object."),(0,r.kt)("li",{parentName:"ul"},"Access previous state value to update the next state."),(0,r.kt)("li",{parentName:"ul"},"Apply special logic on certain actions to calculate the next state.")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import React, { useReducer } from "react"\nconst INITIAL_STATE = { count: 0 }\n// important code.\nconst reducer = (state, action) => {\n  const { type } = action || {}\n  if (!type) throw new Error("Action type must be defined")\n  switch (type) {\n    case "increment":\n      return { count: state.count + 1 }\n    case "decrement":\n      return { count: state.count - 1 }\n    default:\n      throw new Error("Did you misspell an action type?")\n  }\n}\nconst App = () => {\n  // important code.\n  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)\n  return (\n    <div className="App">\n      <h1>Counter: {state.count}</h1>\n      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>\n      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>\n    </div>\n  )\n}\n')),(0,r.kt)("h2",{id:"6-usecallback"},"6. useCallback"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u503c\uff1a\u4e00\u4e2a\u7f13\u5b58\u7684\u56de\u8c03\u51fd\u6570"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u573a\u666f\uff1a\u7236\u7ec4\u4ef6\u66f4\u65b0\u65f6\uff0c\u901a\u8fc7 props \u4f20\u9012\u7ed9\u5b50\u7ec4\u4ef6\u7684\u51fd\u6570\u4e5f\u4f1a\u91cd\u65b0\u521b\u5efa\uff0c\u7136\u540e\u8fd9\u4e2a\u65f6\u5019\u4f7f\u7528 useCallBack \u5c31\u53ef\u4ee5\u7f13\u5b58\u51fd\u6570\u4e0d\u4f7f\u5b83\u91cd\u65b0\u521b\u5efa"),(0,r.kt)("li",{parentName:"ul"},"useCallback hook accepts two arguments: An inline callback function and an array of dependencies. useCallback returns a memoized reference to the callback function when the - dependencies do not change.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const memoizedCallback = useCallback(() => {\n  calculateFn(input) // This function can return something.\n}, [input])\n")),(0,r.kt)("h2",{id:"7-usememo"},"7. useMemo"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u503c\uff1a\u4e00\u4e2a\u7f13\u5b58\u7684\u503c"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u573a\u666f\uff1a\u7ec4\u4ef6\u66f4\u65b0\u65f6\uff0c\u4e00\u4e9b\u8ba1\u7b97\u91cf\u5f88\u5927\u7684\u503c\u4e5f\u6709\u53ef\u80fd\u88ab\u91cd\u65b0\u8ba1\u7b97\uff0c\u8fd9\u4e2a\u65f6\u5019\u5c31\u53ef\u4ee5\u4f7f\u7528 useMemo \u76f4\u63a5\u4f7f\u7528\u4e0a\u4e00\u6b21\u7f13\u5b58\u7684\u503c"),(0,r.kt)("li",{parentName:"ul"},"useMemo hook accepts two arguments: A callback that returns the result of an expensive compute function and an array of dependencies."),(0,r.kt)("li",{parentName:"ul"},"useMemo returns the last cached result if the dependencies do not change.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const memoizedValue = useMemo(() => {\n  getExpensiveCalculationResult(input) // This function can return something.\n}, [input])\n")),(0,r.kt)("p",null,"The differences between userMemo and useCallback\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/545578633"},"https://zhuanlan.zhihu.com/p/545578633")),(0,r.kt)("h2",{id:"8-useref"},"8. useRef"),(0,r.kt)("p",null,"You can use useRef hook to get the ref of a DOM node. Later, you can use this ref for certain actions related to that node. For example, scrolling to an element position."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// ...\nconst App = () => {\n  const topSection = useRef(null)\n  const handleClick = () => {\n    window.scrollTo(0, topSection.current.offsetTop)\n  }\n\n  return (\n    <Fragment>\n      <div ref={topSection}>Top section</div>\n      // ... some code.\n      <button onClick={handleClick}>Go to top</button>\n    </Fragment>\n  )\n}\n// ...\n")),(0,r.kt)("h2",{id:"9-uselayouteffect"},"9. useLayoutEffect"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"useLayoutEffect is an alternative to useEffect for layout updates."),(0,r.kt)("li",{parentName:"ul"},"useEffect \u7684\u51fd\u6570\u4f1a\u5728\u7ec4\u4ef6\u6e32\u67d3\u5230\u5c4f\u5e55\u4e4b\u540e\u6267\u884c, execute after rendering."),(0,r.kt)("li",{parentName:"ul"},"useLayoutEffect \u5219\u662f\u5728 DOM \u7ed3\u6784\u66f4\u65b0\u540e\u3001\u6e32\u67d3\u524d\u6267\u884c\uff0c(execute before rendering), \u76f8\u5f53\u4e8e\u6709\u4e00\u4e2a\u9632\u6296(flickering)\u6548\u679c;")))}m.isMDXComponent=!0}}]);