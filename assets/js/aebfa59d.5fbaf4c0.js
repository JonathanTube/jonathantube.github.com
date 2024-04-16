"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2024],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,g=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9464:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={},o=void 0,l={unversionedId:"tailwindcss/Dark Mode",id:"tailwindcss/Dark Mode",title:"Dark Mode",description:"Setting",source:"@site/docs/tailwindcss/4. Dark Mode.md",sourceDirName:"tailwindcss",slug:"/tailwindcss/Dark Mode",permalink:"/docs/tailwindcss/Dark Mode",draft:!1,editUrl:"https://github.com/JonathanTube/jonathantube.github.com/tree/main/docs/tailwindcss/4. Dark Mode.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Responsive",permalink:"/docs/tailwindcss/Responsive"},next:{title:"Grid Layout",permalink:"/docs/tailwindcss/Grid Layout"}},s={},c=[{value:"Setting",id:"setting",level:2},{value:"Using",id:"using",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"setting"},"Setting"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="tailwind.config.js"',title:'"tailwind.config.js"'},'module.exports = {\n  darkMode: "class", // add this\n  // ...\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="public/index.html"',title:'"public/index.html"'},'    <html lang="en" class="dark">\n        // ...\n    </html>\n')),(0,a.kt)("h2",{id:"using"},"Using"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="using in React"',title:'"using',in:!0,'React"':!0},'export default function DarkMode() {\n  const switchToDark = () => {\n    console.log("set dark mode")\n    document.documentElement.classList.toggle("dark") // keypoint\n  }\n\n  return (\n    <div className="w-2/3 h-80 text-center bg-green-100 dark:bg-black" onClick={switchToDark}>\n      <h1 className="text-black dark:text-white">Toggle Dark Mode</h1>\n    </div>\n  )\n}\n')))}p.isMDXComponent=!0}}]);