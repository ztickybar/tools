(this["webpackJsonptool-catalogue"]=this["webpackJsonptool-catalogue"]||[]).push([[0],{100:function(e,t,n){},101:function(e){e.exports=JSON.parse("{}")},134:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(28),i=n.n(o),c=(n(95),n(2)),l=n.n(c),u=n(20),s=n(26),f=n(15);n(97),n(98),n(99),n(100),n(101);var p=n(24),m=n.n(p),d=n(69),h=n.n(d),v=function(e){return e&&e.references?a.a.createElement("div",{className:"tags",style:{display:"flex",flexWrap:"wrap"}},e.references.map((function(e){return a.a.createElement("div",{style:{padding:"4px",margin:"4px",backgroundColor:e.color,color:e.textColor}},e.title)}))):null},g=function(e){var t=e.tile?e.tile:{},n=Object(r.useState)(""),o=Object(f.a)(n,2);o[0],o[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{style:{border:"0px dashed grey",margin:10,maxWidth:"300px"}},a.a.createElement("div",{style:{margin:10,padding:10,backgroundColor:t.color,color:t.textcolor,width:300,height:300,maxHeight:300,overflow:"auto"}},a.a.createElement("div",{style:{cursor:"pointer"},onClick:function(){e.onClick&&e.onClick(t)}},a.a.createElement("div",null,t.title),a.a.createElement("div",{style:{textAlign:"center",margin:20,marginTop:40,height:120}},a.a.createElement("img",{style:{height:"auto",width:80},src:t.icon})),a.a.createElement(v,{references:t.references}))),a.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},t.jumpto&&a.a.createElement("a",{style:{height:24},className:"button",href:t.jumpto,target:"_blank"},"Jump to"),t.externalArticle&&a.a.createElement("a",{style:{height:24},className:"button",href:t.externalArticle,target:"_blank"},"Details"))))},b=n(70),w=function(e){var t=e.tile?e.tile:{},n=Object(r.useState)(""),o=Object(f.a)(n,2),i=o[0],c=o[1],l=Object(r.useState)(null),u=Object(f.a)(l,2),s=u[0],p=u[1];return Object(r.useEffect)((function(){t.contentRef&&m.a.get(t.contentRef).then((function(e){var t=new b.QuillDeltaToHtmlConverter(e.data.ops);c(t.convert())})).catch((function(e){404!==e.response.status&&p(e.message)}))})),a.a.createElement(a.a.Fragment,null,s&&a.a.createElement("div",null,s),a.a.createElement("div",{onClick:e.onClose,style:{backgroundColor:t.color,color:t.textcolor,width:"100vw",height:"100vh",overflow:"auto"}},a.a.createElement("div",null,a.a.createElement("div",{style:{display:"flex"}},a.a.createElement("div",null," ",a.a.createElement("img",{style:{margin:"1vh",height:"10vh",width:"auto"},src:t.icon})),a.a.createElement("div",{style:{height:"10vh",width:"auto"}},a.a.createElement("div",{className:"fullSizeHeading",style:{padding:"3vh",fontSize:"5vh",textOverflow:"nowrap",whiteSpace:"no-wrap"}},t.title),a.a.createElement("div",{className:"fullSizeDescription",style:{paddingLeft:"3vh",fontSize:"3vh"}},t.inShort))),a.a.createElement("div",{style:{height:"80vh",overflow:"auto",backgroundColor:"#ffffff",color:"#000000",padding:"20px"}},a.a.createElement(v,{references:t.references}),a.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},t.jumpto&&a.a.createElement("a",{style:{height:24},className:"button",href:t.jumpto,target:"_blank"},"Jump to"),t.externalArticle&&a.a.createElement("a",{style:{height:24},className:"button",href:t.externalArticle,target:"_blank"},"Details")),a.a.createElement("div",{dangerouslySetInnerHTML:{__html:i}})),a.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},t.jumpto&&a.a.createElement("a",{style:{height:24},className:"button",href:t.jumpto,target:"_blank"},"Jump to"),t.externalArticle&&a.a.createElement("a",{style:{height:24},className:"button",href:t.externalArticle,target:"_blank"},"Details")))))},y=n(155),x=n(83),E=n(3),O=(n(66),n(130),new E.a("myTiles"));O.version(1).stores({myTiles:"$$oid,key,jumpto"});var j=n(29),k=n(82),S=n(72),C=n(73),T=["user.read","mail.send","Files.ReadWrite.All"],P={auth:{clientId:"443ae28d-8cf8-42fd-ba63-f403ac085ead",redirectUri:window.location.protocol+"//"+window.location.hostname+(80!==window.location.port&&443!==window.location.port&&""!==window.location.port?":"+window.location.port:"")+window.location.pathname,authority:"https://login.microsoftonline.com/common"}};new j.UserAgentApplication(P).handleRedirectCallback((function(e,t){}));var A=new j.UserAgentApplication(P),N=new S.MSALAuthenticationProviderOptions(T),I={authProvider:new C.ImplicitMSALAuthenticationProvider(A,N)};function L(){return k.a.initWithMiddleware(I)}function D(e){return new Promise(function(){var t=Object(u.a)(l.a.mark((function t(n,r){var a,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=L(),t.next=4,a.api("/me/drive/items/".concat(e.id,":/tile.json:")).get();case 4:o=t.sent,m.a.get(o["@microsoft.graph.downloadUrl"]).then((function(e){n(e.data)})),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),r(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,n){return t.apply(this,arguments)}}())}var W={me:function(){return new Promise(function(){var e=Object(u.a)(l.a.mark((function e(t,n){var r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=L(),e.prev=1,e.next=4,r.api("/me").get();case 4:return a=e.sent,e.abrupt("return",t(a));case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",n(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}())},initStorage:function(){return new Promise(function(){var e=Object(u.a)(l.a.mark((function e(t,n){var r,a,o,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=L(),e.prev=1,e.next=4,r.api("/me/drive/root:/ZTICKY").get();case 4:return a=e.sent,e.abrupt("return",t(a));case 8:if(e.prev=8,e.t0=e.catch(1),404!==e.t0.statusCode){e.next=24;break}return e.prev=11,o={name:"ZTICKY",folder:{},"@microsoft.graph.conflictBehavior":"rename"},e.next=15,r.api("/me/drive/root/children").post(o);case 15:return i=e.sent,e.abrupt("return",t(i));case 19:return e.prev=19,e.t1=e.catch(11),e.abrupt("return",n(e.t1));case 22:e.next=25;break;case 24:return e.abrupt("return",n(e.t0));case 25:case"end":return e.stop()}}),e,null,[[1,8],[11,19]])})));return function(t,n){return e.apply(this,arguments)}}())},addTile:function(e,t){return new Promise(function(){var n=Object(u.a)(l.a.mark((function n(r,a){var o,i,c,s;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=L(),n.prev=1,i={name:t.title,folder:{},"@microsoft.graph.conflictBehavior":"replace"},n.next=5,o.api("/me/drive/items/".concat(e.id,"/children")).post(i);case 5:return c=n.sent,n.next=8,o.api("/me/drive/items/".concat(c.id,":/tile.json:/content")).put(t);case 8:return s=n.sent,m.a.request({responseType:"arraybuffer",url:t.icon,method:"get"}).then(function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.api("/me/drive/items/".concat(c.id,":/image.png:/content")).put(t.data);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){})),n.abrupt("return",r(s));case 13:return n.prev=13,n.t0=n.catch(1),n.abrupt("return",a(n.t0));case 17:case"end":return n.stop()}}),n,null,[[1,13]])})));return function(e,t){return n.apply(this,arguments)}}())},getMyTools:function(e,t){return new Promise(function(){var n=Object(u.a)(l.a.mark((function n(r,a){var o,i,c,s;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,t){n.next=5;break}if(!(o=localStorage.getItem("mytools"))){n.next=5;break}return n.abrupt("return",r(JSON.parse(o)));case 5:return i=L(),n.next=8,i.api("/me/drive/items/".concat(e.id,"/children")).get();case 8:if(c=n.sent,s=0,0!==c.value.length){n.next=12;break}return n.abrupt("return",r(c.value));case 12:c.value.forEach(function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s++,e.next=3,D(t);case 3:if(t.tile=e.sent,0!==--s){e.next=8;break}return localStorage.setItem("mytools",JSON.stringify(c.value)),e.abrupt("return",r(c.value));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),n.next=18;break;case 15:n.prev=15,n.t0=n.catch(0),a(n.t0);case 18:case"end":return n.stop()}}),n,null,[[0,15]])})));return function(e,t){return n.apply(this,arguments)}}())}},F=n(154),J=n(81);function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}Object(x.a)();Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement((function(){var e=Object(r.useState)(""),t=Object(f.a)(e,2),n=t[0],o=t[1],i=Object(r.useState)(""),c=Object(f.a)(i,2),p=c[0],d=c[1],v=Object(r.useState)([]),b=Object(f.a)(v,2),x=b[0],E=b[1],O=Object(r.useState)(!1),j=Object(f.a)(O,2),k=j[0],S=j[1],C=Object(r.useState)(null),T=Object(f.a)(C,2),P=T[0],A=T[1],N=Object(r.useState)({}),I=Object(f.a)(N,2),L=(I[0],I[1]),D=Object(r.useState)({}),M=Object(f.a)(D,2),R=M[0],B=M[1],U=Object(r.useState)([]),z=Object(f.a)(U,2),H=z[0],$=z[1];function K(e){W.initStorage().then(function(){var t=Object(u.a)(l.a.mark((function t(n){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return B(n),t.next=3,W.getMyTools(n,e);case 3:r=t.sent,$(r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){}))}function Y(e){var t=e.title&&-1!==e.title.toLowerCase().indexOf(p.toLowerCase());return t||(t=e.inShort&&-1!==e.inShort.toLowerCase().indexOf(p.toLowerCase())),t||(t=e.subTitle&&-1!==e.subTitle.toLowerCase().indexOf(p.toLowerCase())),t}Object(r.useEffect)((function(){K(),W.me().then((function(e){L(e),window.document.title=e.displayName+" Tools"})).catch((function(e){}));var e=function(e){if(!e)return{};var t={},n=e.split("?");if(n.length>1)for(var r=n[1].split("&"),a=0;a<r.length;a++){var o=r[a].split("=");t[o[0]]=decodeURIComponent(o[1])}return t}(window.location.href),t=e.src?e.src:"https://api.jumpto365.com/table/hexatown.com/PTO365";m.a.get(t).then((function(e){var t=e.data;o(t.titlegraphics);var n=[];if(t.grid){var r={},a={};t.grid.forEach((function(e){return e.forEach((function(e){e.groupSetting&&(r[e.groupSetting.title]={groupSetting:e.groupSetting,members:e.members},e.members&&e.members.forEach((function(t){var n=a[t]?a[t]:[];n.push(e.groupSetting),a[t]=n})))}))})),t.grid.forEach((function(e){return e.forEach((function(e){if(e.tile&&e.tile.title){var t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(n,!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.tile),r=a[e.id];t.references=r,n.push(t)}}))}))}E(h.a.sortBy(n,["title","href"]))}))}),[]);var Z=p?[]:x,q=p?[]:H;return p&&(x.forEach((function(e){Y(e)&&Z.push(e)})),H.forEach((function(e){Y(e.tile)&&q.push(e)}))),a.a.createElement(a.a.Fragment,null,a.a.createElement("img",{style:{height:"64px",margin:"13px",position:"fixed",bottom:"0px",right:"0px"},src:n}),k&&a.a.createElement("div",null,a.a.createElement(w,{tile:P||(x?x[0]:null),onClose:function(){S(!1)}})),!k&&a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{style:{padding:"20px"}},a.a.createElement(y.a,{label:"Filter",value:p,onChange:function(e,t){d(t)},placeholder:"Filter the list of tools",iconProps:{iconName:"Filter"}})),a.a.createElement(F.a,{style:{padding:"20px"}},a.a.createElement(J.a,{headerText:"My Tools",itemCount:q.length},a.a.createElement("div",null,a.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},q.map((function(e){var t=e.tile?e.tile:{title:e.name,color:"#dddddd"};return a.a.createElement(g,{tile:t,onClick:function(e){}})}))),a.a.createElement("i",{class:"ms-Icon ms-Icon--Refresh",onClick:function(){K(!0)},"aria-hidden":"true"}))),a.a.createElement(J.a,{headerText:"Site Tools"},a.a.createElement("h3",null,"Which tools do you find good for this site?")),a.a.createElement(J.a,{headerText:"Global Tools",itemCount:Z.length},a.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},Z.map((function(e){return a.a.createElement(g,{filter:p,tile:e,onClick:function(e){!function(e){W.addTile(R,e)}(e),A(e),S(!0)}})})))))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},90:function(e,t,n){e.exports=n(134)},95:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[90,1,2]]]);
//# sourceMappingURL=main.6ad90fb3.chunk.js.map