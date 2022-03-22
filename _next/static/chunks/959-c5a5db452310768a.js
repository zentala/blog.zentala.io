(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[959],{8045:function(t,e,n){"use strict";function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var i,r,o=[],a=!0,c=!1;try{for(n=n.call(t);!(a=(i=n.next()).done)&&(o.push(i.value),!e||o.length!==e);a=!0);}catch(l){c=!0,r=l}finally{try{a||null==n.return||n.return()}finally{if(c)throw r}}return o}}(t,e)||c(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||c(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){if(t){if("string"===typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}e.default=function(t){var e=t.src,n=t.sizes,i=t.unoptimized,c=void 0!==i&&i,l=t.priority,p=void 0!==l&&l,v=t.loading,j=t.lazyRoot,O=void 0===j?null:j,k=t.lazyBoundary,x=void 0===k?"200px":k,E=t.className,P=t.quality,I=t.width,R=t.height,_=t.objectFit,q=t.objectPosition,C=t.onLoadingComplete,D=t.loader,L=void 0===D?z:D,N=t.placeholder,W=void 0===N?"empty":N,M=t.blurDataURL,U=function(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}(t,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),B=u.useRef(null),H=u.useContext(g.ImageConfigContext),F=u.useMemo((function(){var t=m||H||d.imageConfigDefault,e=a(t.deviceSizes).concat(a(t.imageSizes)).sort((function(t,e){return t-e})),n=t.deviceSizes.sort((function(t,e){return t-e}));return h({},t,{allSizes:e,deviceSizes:n})}),[H]),T=U,G=n?"responsive":"intrinsic";"layout"in T&&(T.layout&&(G=T.layout),delete T.layout);var J="";if(function(t){return"object"===typeof t&&(w(t)||function(t){return void 0!==t.src}(t))}(e)){var V=w(e)?e.default:e;if(!V.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(V)));if(M=M||V.blurDataURL,J=V.src,(!G||"fill"!==G)&&(R=R||V.height,I=I||V.width,!V.height||!V.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(V)))}e="string"===typeof e?e:J;var Q=S(I),$=S(R),K=S(P),X=!p&&("lazy"===v||"undefined"===typeof v);(e.startsWith("data:")||e.startsWith("blob:"))&&(c=!0,X=!1);y.has(e)&&(X=!1);0;var Y,Z=o(f.useIntersection({rootRef:O,rootMargin:x,disabled:!X}),2),tt=Z[0],et=Z[1],nt=!X||et,it={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},rt={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ot=!1,at={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:_,objectPosition:q},ct="blur"===W?{filter:"blur(20px)",backgroundSize:_||"cover",backgroundImage:'url("'.concat(M,'")'),backgroundPosition:q||"0% 0%"}:{};if("fill"===G)it.display="block",it.position="absolute",it.top=0,it.left=0,it.bottom=0,it.right=0;else if("undefined"!==typeof Q&&"undefined"!==typeof $){var lt=$/Q,ut=isNaN(lt)?"100%":"".concat(100*lt,"%");"responsive"===G?(it.display="block",it.position="relative",ot=!0,rt.paddingTop=ut):"intrinsic"===G?(it.display="inline-block",it.position="relative",it.maxWidth="100%",ot=!0,rt.maxWidth="100%",Y="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(Q,"%27%20height=%27").concat($,"%27/%3e")):"fixed"===G&&(it.display="inline-block",it.position="relative",it.width=Q,it.height=$)}else 0;var st={src:b,srcSet:void 0,sizes:void 0};nt&&(st=A({config:F,src:e,unoptimized:c,layout:G,width:Q,quality:K,sizes:n,loader:L}));var dt=e;0;var ft;0;var gt=(r(ft={},"imagesrcset",st.srcSet),r(ft,"imagesizes",st.sizes),ft),pt=u.default.useLayoutEffect,ht=u.useRef(C);return u.useEffect((function(){ht.current=C}),[C]),pt((function(){tt(B.current)}),[tt]),u.useEffect((function(){!function(t,e,n,i,r){var o=function(){var n=t.current;n&&(n.src!==b&&("decode"in n?n.decode():Promise.resolve()).catch((function(){})).then((function(){if(t.current&&(y.add(e),"blur"===i&&(n.style.filter="",n.style.backgroundSize="",n.style.backgroundImage="",n.style.backgroundPosition=""),r.current)){var o=n.naturalWidth,a=n.naturalHeight;r.current({naturalWidth:o,naturalHeight:a})}})))};t.current&&(t.current.complete?o():t.current.onload=o)}(B,dt,0,W,ht)}),[dt,G,W,nt]),u.default.createElement("span",{style:it},ot?u.default.createElement("span",{style:rt},Y?u.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:Y}):null):null,u.default.createElement("img",Object.assign({},T,st,{decoding:"async","data-nimg":G,className:E,ref:B,style:h({},at,ct)})),X&&u.default.createElement("noscript",null,u.default.createElement("img",Object.assign({},T,A({config:F,src:e,unoptimized:c,layout:G,width:Q,quality:K,sizes:n,loader:L}),{decoding:"async","data-nimg":G,style:at,className:E,loading:v||"lazy"}))),p?u.default.createElement(s.default,null,u.default.createElement("link",Object.assign({key:"__nimg-"+st.src+st.srcSet+st.sizes,rel:"preload",as:"image",href:st.srcSet?void 0:st.src},gt))):null)};var l,u=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};i.get||i.set?Object.defineProperty(e,n,i):e[n]=t[n]}return e.default=t,e}(n(7294)),s=(l=n(5443))&&l.__esModule?l:{default:l},d=n(5809),f=n(7190),g=n(9977);function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function h(t){for(var e=arguments,n=function(n){var i=null!=e[n]?e[n]:{},r=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(i).filter((function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable})))),r.forEach((function(e){p(t,e,i[e])}))},i=1;i<arguments.length;i++)n(i);return t}var m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"https://blog.zentala.io/",loader:"imgix"},y=new Set,b=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var v=new Map([["default",function(t){var e=t.config,n=t.src,i=t.width,r=t.quality;0;if(n.endsWith(".svg")&&!e.dangerouslyAllowSVG)return n;return"".concat(e.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(r||75)}],["imgix",function(t){var e=t.config,n=t.src,i=t.width,r=t.quality,o=new URL("".concat(e.path).concat(j(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||i.toString()),r&&a.set("q",r.toString());return o.href}],["cloudinary",function(t){var e=t.config,n=t.src,i=t.width,r=t.quality,o=["f_auto","c_limit","w_"+i,"q_"+(r||"auto")].join(",")+"/";return"".concat(e.path).concat(o).concat(j(n))}],["akamai",function(t){var e=t.config,n=t.src,i=t.width;return"".concat(e.path).concat(j(n),"?imwidth=").concat(i)}],["custom",function(t){var e=t.src;throw new Error('Image with src "'.concat(e,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function w(t){return void 0!==t.default}function A(t){var e=t.config,n=t.src,i=t.unoptimized,r=t.layout,o=t.width,c=t.quality,l=t.sizes,u=t.loader;if(i)return{src:n,srcSet:void 0,sizes:void 0};var s=function(t,e,n,i){var r=t.deviceSizes,o=t.allSizes;if(i&&("fill"===n||"responsive"===n)){for(var c,l=/(^|\s)(1?\d?\d)vw/g,u=[];c=l.exec(i);c)u.push(parseInt(c[2]));if(u.length){var s,d=.01*(s=Math).min.apply(s,a(u));return{widths:o.filter((function(t){return t>=r[0]*d})),kind:"w"}}return{widths:o,kind:"w"}}return"number"!==typeof e||"fill"===n||"responsive"===n?{widths:r,kind:"w"}:{widths:a(new Set([e,2*e].map((function(t){return o.find((function(e){return e>=t}))||o[o.length-1]})))),kind:"x"}}(e,o,r,l),d=s.widths,f=s.kind,g=d.length-1;return{sizes:l||"w"!==f?l:"100vw",srcSet:d.map((function(t,i){return"".concat(u({config:e,src:n,quality:c,width:t})," ").concat("w"===f?t:i+1).concat(f)})).join(", "),src:u({config:e,src:n,quality:c,width:d[g]})}}function S(t){return"number"===typeof t?t:"string"===typeof t?parseInt(t,10):void 0}function z(t){var e,n=(null===(e=t.config)||void 0===e?void 0:e.loader)||"default",i=v.get(n);if(i)return i(t);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "),". Received: ").concat(n))}function j(t){return"/"===t[0]?t.slice(1):t}},9008:function(t,e,n){t.exports=n(5443)},5675:function(t,e,n){t.exports=n(8045)}}]);