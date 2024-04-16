"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3803],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=p(r),v=o,f=s["".concat(u,".").concat(v)]||s[v]||m[v]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=v;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[s]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},7087:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={},i=void 0,c={unversionedId:"react-router/v5/navLink",id:"react-router/v5/navLink",title:"navLink",description:"",source:"@site/docs/react-router/v5/6.navLink.md",sourceDirName:"react-router/v5",slug:"/react-router/v5/navLink",permalink:"/docs/react-router/v5/navLink",draft:!1,editUrl:"https://github.com/JonathanTube/jonathantube.github.com/tree/main/docs/react-router/v5/6.navLink.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"redirect",permalink:"/docs/react-router/v5/redirect"},next:{title:"basic",permalink:"/docs/react-router/v6/basic"}},u={},p=[],l={toc:p},s="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="\u4f7f\u7528NavLink"',title:'"\u4f7f\u7528NavLink"'},'import { HashRouter, NavLink, Route, Switch } from "react-router-dom"\nimport styled from "styled-components"\nimport From from "./from"\nimport To from "./to"\nconst NavBox = styled.nav`\n  a {\n    margin: 20px 10px;\n  }\n  a.active {\n    color: red;\n  }\n  a.myActive {\n    color: green;\n  }\n`\n\nexport default function Main() {\n  return (\n    <HashRouter>\n      <NavBox>\n        {/* \u4f7f\u7528NavLink\uff0c\u5f53\u524d\u8def\u7531\u88ab\u6fc0\u6d3b\uff0c\u4f1a\u6dfb\u52a0class="active"\uff0c\u53ef\u4ee5\u81ea\u5b9a\u4e49\u6837\u5f0f */}\n        <NavLink to="/from">from component</NavLink>\n        {/* \u4e5f\u53ef\u4ee5\u81ea\u5df1\u6307\u5b9aactive\u6837\u5f0f\u540d\u79f0 */}\n        <NavLink to="/to" activeClassName="myActive">\n          to component\n        </NavLink>\n      </NavBox>\n      <div>\n        <Switch>\n          <Route path="/from" component={From} />\n          <Route exact path="/to" component={To} />\n        </Switch>\n      </div>\n    </HashRouter>\n  )\n}\n')))}m.isMDXComponent=!0}}]);