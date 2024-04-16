"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5052],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1127:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={},o=void 0,s={unversionedId:"tailwindcss/Basic Concepts",id:"tailwindcss/Basic Concepts",title:"Basic Concepts",description:"Install Tailwind CSS with Create React App",source:"@site/docs/tailwindcss/1. Basic Concepts.md",sourceDirName:"tailwindcss",slug:"/tailwindcss/Basic Concepts",permalink:"/docs/tailwindcss/Basic Concepts",draft:!1,editUrl:"https://github.com/JonathanTube/jonathantube.github.com/tree/main/docs/tailwindcss/1. Basic Concepts.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Redux Toolkit",permalink:"/docs/redux/Redux Toolkit"},next:{title:"Tailwind component",permalink:"/docs/tailwindcss/Tailwind component"}},c={},l=[{value:"Install Tailwind CSS with Create React App",id:"install-tailwind-css-with-create-react-app",level:2},{value:"Some the relationship between tailwindcss and standard css",id:"some-the-relationship-between-tailwindcss-and-standard-css",level:2}],p={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"install-tailwind-css-with-create-react-app"},"Install Tailwind CSS with Create React App"),(0,a.kt)("p",null,"  ",(0,a.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/guides/create-react-app"},"https://tailwindcss.com/docs/guides/create-react-app")),(0,a.kt)("h2",{id:"some-the-relationship-between-tailwindcss-and-standard-css"},"Some the relationship between tailwindcss and standard css"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// z\u4ee3\u8868z-index; \u6bd4\u5982z-4: z-index: 4\n\n// x\u4ee3\u8868\u6c34\u5e73\uff1b\u6bd4\u5982\uff1apx-2\uff1apadding-left: 2rem; padding-right: 2rem;\n\n// y\u4ee3\u8868\u4e0a\u4e0b\uff1b\u6bd4\u5982: py-2\uff1apadding-top: 2rem; padding-bottom: 2rem;\n\n// t\u4ee3\u8868\u4e0a; \u6bd4\u5982\uff1apt-2: padding-top: 2rem;\n\n// b\u8fbe\u6807\u4e0b\uff1b\u6bd4\u5982\uff1apb-2: padding-bottom:2rem;\n\n// bg-gradient-to-b from-red-400 to-red-200 \u80cc\u666f\u6e10\u53d8\n\n// flex-shrink-0 = flex-shrink : 0\uff0c\u5c31\u662f\u5f53flex\u5e03\u5c40\u7684\u65f6\u5019\uff0c\u8fd9\u4e00\u5757\u4e0d\u5141\u8bb8\u6324\u538b\n\n// fas fa-wind fa-2x \u662f\u4e00\u4e2a\u56fe\u6807\uff0c\u6765\u81ea\u4e8efont-awesome\u4e0d\u662ftailwind\u7684\u5185\u5bb9\uff0c\u5177\u4f53\u770bfont-awesome\u5b98\u7f51\n")))}u.isMDXComponent=!0}}]);