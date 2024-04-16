"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5356],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),i=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=i(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=i(n),d=r,k=c["".concat(o,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(k,s(s({ref:t},p),{},{components:n})):a.createElement(k,s({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=d;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[c]="string"==typeof e?e:r,s[1]=u;for(var i=2;i<l;i++)s[i]=n[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4060:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>i});var a=n(7462),r=(n(7294),n(3905));const l={},s=void 0,u={unversionedId:"react/Hooks useState",id:"react/Hooks useState",title:"Hooks useState",description:"useState\u4f7f\u7528",source:"@site/docs/react/12.Hooks useState.md",sourceDirName:"react",slug:"/react/Hooks useState",permalink:"/docs/react/Hooks useState",draft:!1,editUrl:"https://github.com/JonathanTube/jonathantube.github.com/tree/main/docs/react/12.Hooks useState.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Event",permalink:"/docs/react/Event"},next:{title:"Hooks useEffect",permalink:"/docs/react/Hooks useEffect"}},o={},i=[{value:"useState\u4f7f\u7528",id:"usestate\u4f7f\u7528",level:2},{value:"useState\u8bbe\u503c",id:"usestate\u8bbe\u503c",level:2},{value:"setState\u5f02\u6b65\u6267\u884c",id:"setstate\u5f02\u6b65\u6267\u884c",level:2},{value:"useState\u7684\u8bbe\u503c\u4f18\u5316\u673a\u5236",id:"usestate\u7684\u8bbe\u503c\u4f18\u5316\u673a\u5236",level:2},{value:"useState\u8bbe\u7f6e\u60f0\u5316\u64cd\u4f5c",id:"usestate\u8bbe\u7f6e\u60f0\u5316\u64cd\u4f5c",level:2}],p={toc:i},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"usestate\u4f7f\u7528"},"useState\u4f7f\u7528"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"React Hook\u51fd\u6570\u4e4b\u4e00\uff0c\u76ee\u7684\u662f\u5728\u51fd\u6570\u7ec4\u4ef6\u4e2d\u4f7f\u7528\u72b6\u6001\uff0c\u5e76\u4e14\u540e\u671f\u57fa\u4e8e\u72b6\u6001\u7684\u4fee\u6539\uff0c\u53ef\u4ee5\u8ba9\u7ec4\u4ef6\u66f4\u65b0"),(0,r.kt)("li",{parentName:"ul"},"let ","[num,setNum]"," = useState(initialValue);"),(0,r.kt)("li",{parentName:"ul"},"\u6267\u884cusestate\uff0c\u4f20\u9012\u7684initialValue\u662f\u521d\u59cb\u7684\u72b6\u6001\u503c"),(0,r.kt)("li",{parentName:"ul"},"\u6267\u884c\u8fd9\u4e2a\u65b9\u6cd5\uff0c\u8fd4\u56de\u7ed3\u679c\u662f\u4e00\u4e2a\u6570\u7ec4:","[\u72b6\u6001\u503c\uff0c\u4fee\u6539\u72b6\u6001\u7684\u65b9\u6cd5]",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"num\u53d8\u91cf\u5b58\u50a8\u7684\u662f: \u83b7\u53d6\u7684\u72b6\u6001\u503c"),(0,r.kt)("li",{parentName:"ul"},"setNum\u53d8\u91cf\u5b58\u50a8\u7684\u662f: \u4fee\u6539\u72b6\u6001\u7684\u65b9\u6cd5"))),(0,r.kt)("li",{parentName:"ul"},"\u6267\u884csetNum(value)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4fee\u6539\u72b6\u6001\u503c\u4e3avalue"),(0,r.kt)("li",{parentName:"ul"},"\u901a\u77e5\u89c6\u56fe\u66f4\u65b0")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u51fd\u6570\u7ec4\u4ef6\u6216\u8005Hooks\u7ec4\u4ef6\uff0c\u4e0d\u662f\u7c7b\u7ec4\u4ef6"),(0,r.kt)("li",{parentName:"ul"},"\u6240\u4ee5\u6ca1\u6709\u5b9e\u4f8b\u7684\u6982\u5ff5\u8c03\u7528\u7ec4\u4ef6\u4e0d\u518d\u662f\u521b\u5efa\u7c7b\u7684\u5b9e\u4f8b;"),(0,r.kt)("li",{parentName:"ul"},"\u800c\u662f\u628a\u51fd\u6570\u6267\u884c\uff0c\u4ea7\u751f\u4e00\u4e2a\u79c1\u6709\u4e0a\u4e0b\u6587\u800c\u5df2"),(0,r.kt)("li",{parentName:"ul"},"\u6240\u4ee5\uff0c\u5728\u51fd\u6570\u7ec4\u4ef6\u4e2d\u4e0d\u6d89\u53cathis\u7684\u5904\u7406"))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u51fd\u6570\u7ec4\u4ef6\u6bcf\u4e00\u6b21\u6e32\u67d3(\u6216\u66f4\u65b0)\uff0c\u90fd\u91cd\u65b0\u6267\u884c\u51fd\u6570\uff0c\u4ea7\u751f\u4e00\u4e2a\u65b0\u201c\u79c1\u6709\u4e0a\u4e0b\u6587\u201d",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5185\u90e8\u7684\u4ee3\u7801\u4e5f\u9700\u8981\u91cd\u65b0\u6267\u884c"),(0,r.kt)("li",{parentName:"ul"},"\u6d89\u53ca\u7684\u51fd\u6570\u9700\u8981\u91cd\u65b0\u7684\u6784\u5efa",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8fd9\u4e9b\u51fd\u6570\u7684\u4f5c\u7528\u57df(\u51fd\u6570\u6267\u884c\u7684\u4e0a\u7ea7\u4e0a\u4e0b\u6587)\uff0c\u662f\u6bcf\u4e00\u6b21\u6267\u884cDEMO\u4ea7\u751f\u7684\u95ed\u5305"))),(0,r.kt)("li",{parentName:"ul"},"\u6bcf\u4e00\u6b21\u6267\u884c\u51fd\u6570\uff0c\u4e5f\u4f1a\u628auseState\u91cd\u65b0\u6267\u884c\uff0c\u4f46\u662f:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6267\u884cuseState\u7b2c\u4e00\u6b21\u8bbe\u7f6e\u521d\u59cb\u503c\uff0c\u4ee5\u540e\u518d\u6267\u884c\uff0c\u83b7\u53d6\u7684\u72b6\u6001\u662f\u6700\u65b0\u72b6\u6001\u503c,\u4e0d\u662f\u521d\u59cb\u503c"),(0,r.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u7684\u4fee\u6539\u72b6\u6001\u7684\u65b9\u6cd5\uff0c\u6bcf\u4e00\u6b21\u90fd\u662f\u8fd4\u56de\u65b0\u7684\u65b9\u6cd5"))))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import React, { useState } from "react"\n\nexport default function Demo() {\n  let [num, setNum] = useState(0)\n\n  const handle = () => {\n    setNum(num + 10)\n  }\n\n  return (\n    <div>\n      {/* \u8fd9\u91cc\u6ce8\u610f\u4e0d\u662fClass Component\u4e2d\u7684this.handle */}\n      {/* \u8fd9\u91cc\u6ca1\u6709this\u4f5c\u7528\u57df */}\n      <button onClick={handle}>{num}</button>\n    </div>\n  )\n}\n')),(0,r.kt)("h2",{id:"usestate\u8bbe\u503c"},"useState\u8bbe\u503c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6267\u884c\u4e00\u6b21usestate",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u628a\u9700\u8981\u7684\u72b6\u6001\u4fe1\u606f\u90fd\u653e\u5728\u5bf9\u8c61\u4e2d\u7edf\u4e00\u7ba1\u7406"),(0,r.kt)("li",{parentName:"ul"},"\u6267\u884csetstate\u65b9\u6cd5\u7684\u65f6\u5019\uff0c\u4f20\u9012\u7684\u662f\u5565\u503c\uff0c\u5c31\u628a\u72b6\u6001\u201c\u6574\u4f53\u201d\u6539\u4e3a\u5565\u503c",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"setState({\n  supNum: state.supNum + 1\n})\n"))),(0,r.kt)("li",{parentName:"ul"},"\u628a\u72b6\u6001\u503c\u4fee\u6539\u4e3a { supNum:11 }, \u5176\u4ed6\u6210\u5458\u5c31\u4e22\u5931\u4e86"),(0,r.kt)("li",{parentName:"ul"},"\u5e76\u4e0d\u4f1a\u50cf\u7c7b\u7ec4\u4ef6\u4e2d\u7684this.setstate\u4e00\u6837\uff0c\u4e0d\u652f\u6301\u90e8\u5206\u72b6\u6001\u7684\u66f4\u65b0")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u53ea\u6709\u4e00\u4e2a\u53d8\u91cf",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let [value, setValue] = useState(0)\n"))),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u6709\u591a\u4e2a\u53d8\u91cf",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let [obj, setObj] = useState({\n  val1: 1,\n  val2: 2\n})\nconst handle = () => {\n  // \u8fd9\u91cc\u7684\u8bbe\u7f6e\u5fc5\u987b\u7ed3\u6784\u540e\u5728\u8ffd\u52a0\n  // \u5426\u5219\u65e7\u7684\u503c\u4f1a\u4e22\u5931\n  setObj({\n    ...obj,\n    val1: 1\n  })\n  // \u5b98\u65b9\u5efa\u8bae\u5206\u5f00\u4f7f\u7528\n  // let [val1, setVal1] = useState(1)\n  // let [val2, setVal2] = useState(2)\n}\n"))))),(0,r.kt)("h2",{id:"setstate\u5f02\u6b65\u6267\u884c"},"setState\u5f02\u6b65\u6267\u884c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="React\u7248\u672c\u5927\u4e8e16"',title:'"React\u7248\u672c\u5927\u4e8e16"'},'import { flushSync } from "react-dom"\nlet [x, setX] = useState(0)\nlet [y, setY] = useState(0)\n\nconst handle = () => {\n  //1. \u8fd9\u91cc\u90fd\u662f\u5f02\u6b65\u6267\u884c\u7684\uff0c\u51fd\u6570\u7ec4\u4ef6\u53ea\u4f1arender\u4e00\u6b21\n  setX(1)\n  setY(2)\n  //2. \u4e5f\u662f\u5f02\u6b65\u7684\uff0c\n  //\u4f46\u662f\u6f14\u793a\u7248\u672c\u662f17\u7684\u65f6\u5019\uff0crender\u4f1a\u4e24\u6b21\uff0c\u641e\u4e0d\u6e05\n  setTimeout(()=>{\n    setX(1)\n    setY(2)\n  })\n  //2. \u540c\u6b65\u7684\uff0c\u4f1arender\u4e24\u6b21\n  flushSync(()=>{\n    setX(1)\n  })\n  setY(2)\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="React\u7248\u672c\u5c0f\u4e8e\u7b49\u4e8e16"',title:'"React\u7248\u672c\u5c0f\u4e8e\u7b49\u4e8e16"'},'import { flushSync } from "react-dom"\nlet [x, setX] = useState(0)\nlet [y, setY] = useState(0)\n\nconst handle = () => {\n  //1. \u8fd9\u91cc\u90fd\u662f\u5f02\u6b65\u6267\u884c\u7684\uff0c\u51fd\u6570\u7ec4\u4ef6\u53ea\u4f1arender\u4e00\u6b21\n  setX(1)\n  setY(2)\n  //2. \u540c\u6b65\u7684\n  setTimeout(()=>{\n    setX(1)\n    setY(2)\n  })\n  //2. \u540c\u6b65\u7684\uff0c\u4f1arender\u4e24\u6b21\n  flushSync(()=>{\n    setX(1)\n  })\n  setY(2)\n}\n')),(0,r.kt)("h2",{id:"usestate\u7684\u8bbe\u503c\u4f18\u5316\u673a\u5236"},"useState\u7684\u8bbe\u503c\u4f18\u5316\u673a\u5236"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let [val, setVal] = useState(0)\nconst handle = () => {\n  for(let i = 0; i < 10; i++) {\n    // \u8fde\u7eed\u8bbe\u7f6e10\u6b21\uff0c\u6700\u7ec8\u5f97\u5230\u7684\u8fd8\u662f1\n    // \u56e0\u4e3a\u5faa\u73af\u6c38\u8fdc\u5728\u51fd\u6570\u5185\u4e0a\u4e0b\u6587\u4e2d\n    // \u6bcf\u6b21\u5faa\u73af\u53d6\u5230\u7684val\u6c38\u8fdc\u662f0\n    // react\u4f7f\u7528Object.is(val1,val2)\u505a\u6bd4\u8f83\u540e\u53d1\u73b0val\u6ca1\u6709\u53d8\u5316\n    // \u5c31\u4e0d\u4f1a\u89e6\u53d1render\uff0c\u6240\u4ee5render\u4e5f\u53ea\u4f1a\u4e00\u6b21\n    setVal(val + 1)\n    // \u4f46\u662f\u5982\u679csetVal\u540e\u4f7f\u7528\u51fd\u6570\u56de\u8c03\n    // \u90a3\u6700\u7ec8\u7684\u503c\u5c31\u4f1a\u662f10\n    // \u56e0\u4e3a\u6bcf\u6b21\u6267\u884c\u653e\u5230updater\u66f4\u65b0\u961f\u5217\u4e2d\u7684\u51fd\u6570\uff0c\u6bcf\u6b21\u90fd\u4f1a\u88ab\u6267\u884c\n    setVal(prev => {\n      return prev + 1\n    })\n  }\n}\n")),(0,r.kt)("h2",{id:"usestate\u8bbe\u7f6e\u60f0\u5316\u64cd\u4f5c"},"useState\u8bbe\u7f6e\u60f0\u5316\u64cd\u4f5c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import React, { useState } from "react"\n\nconst Child = (props) => {\n  console.log("\u6bcf\u6b21state\u4e0d\u540c\u7684\u6539\u53d8\uff0c\u51fd\u6570\u88ab\u6267\u884c")\n  let { x, y } = props\n  let [val, setVal] = useState(() => {\n    // \u5c06\u590d\u6742\u7684\u521d\u59cb\u8bdd\u903b\u8f91\u653e\u5728\u51fd\u6570\u4e2d\n    // \u6bcf\u6b21\u51fd\u6570\u88ab\u91cd\u65b0\u6267\u884c\uff0c\u5c31\u65e0\u9700\u518d\u6b21\u8ba1\u7b97\u4e86\n    console.log("\u8fd9\u91cc\u53ea\u4f1a\u88ab\u6267\u884c\u4e00\u6b21")\n    return x + y\n  })\n\n  const handle = () => {\n    setVal(Math.random())\n  }\n\n  return (\n    <>\n      <div>{val}</div>\n      <button onClick={handle}>click me</button>\n    </>\n  )\n}\n\nexport default function Demo() {\n  return <Child x={1} y={2} />\n}\n')))}m.isMDXComponent=!0}}]);