"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1956],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),k=l,m=u["".concat(c,".").concat(k)]||u[k]||f[k]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=k;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9620:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var r=n(7462),l=n(3366),a=(n(7294),n(3905)),i=["components"],o={title:"Self in Block",description:"An Objective-C-specific analysis to detect when a block captures `self`."},c=void 0,s={unversionedId:"checker-self-in-block",id:"checker-self-in-block",title:"Self in Block",description:"An Objective-C-specific analysis to detect when a block captures `self`.",source:"@site/docs/checker-self-in-block.md",sourceDirName:".",slug:"/checker-self-in-block",permalink:"/docs/next/checker-self-in-block",draft:!1,tags:[],version:"current",frontMatter:{title:"Self in Block",description:"An Objective-C-specific analysis to detect when a block captures `self`."},sidebar:"docs",previous:{title:"Simple Lineage",permalink:"/docs/next/checker-simple-lineage"},next:{title:"Starvation",permalink:"/docs/next/checker-starvation"}},p={},u=[{value:"List of Issue Types",id:"list-of-issue-types",level:2}],f={toc:u},k="wrapper";function m(e){var t=e.components,n=(0,l.Z)(e,i);return(0,a.kt)(k,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"An Objective-C-specific analysis to detect when a block captures ",(0,a.kt)("inlineCode",{parentName:"p"},"self"),"."),(0,a.kt)("p",null,"Activate with ",(0,a.kt)("inlineCode",{parentName:"p"},"--self-in-block"),"."),(0,a.kt)("p",null,"Supported languages:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"C/C++/ObjC: Yes"),(0,a.kt)("li",{parentName:"ul"},"C#/.Net: No"),(0,a.kt)("li",{parentName:"ul"},"Erlang: No"),(0,a.kt)("li",{parentName:"ul"},"Hack: No"),(0,a.kt)("li",{parentName:"ul"},"Java: No")),(0,a.kt)("h2",{id:"list-of-issue-types"},"List of Issue Types"),(0,a.kt)("p",null,"The following issue types are reported by this checker:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#captured_strong_self"},"CAPTURED_STRONG_SELF")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#mixed_self_weakself"},"MIXED_SELF_WEAKSELF")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#multiple_weakself"},"MULTIPLE_WEAKSELF")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#strong_self_not_checked"},"STRONG_SELF_NOT_CHECKED")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#weak_self_in_no_escape_block"},"WEAK_SELF_IN_NO_ESCAPE_BLOCK"))))}m.isMDXComponent=!0}}]);