(this["webpackJsonpjokes-generator"]=this["webpackJsonpjokes-generator"]||[]).push([[0],{1356:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n(15),i=n.n(c),r=n(13),l=n(8),o=n(6),s=(n(26),n(11)),u=n.n(s),d=n(16);function p(){return(p=Object(d.a)(u.a.mark((function e(t,n,a){var c,i,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c="blacklistFlags=sexist,racist,".concat(n.nsfw.value?"".concat(n.nsfw.text,","):"").concat(n.explicit.value?"".concat(n.explicit.text,","):"").concat(n.religious.value?"".concat(n.religious.text,","):"").concat(n.political.value?"".concat(n.political.text,","):""),i="Any",(a.pun.value||a.dark.value||a.programming.value||a.spooky.value)&&(i=(i="".concat(a.pun.value?"".concat(a.pun.text,","):"").concat(a.dark.value?"".concat(a.dark.text,","):"").concat(a.programming.value?"".concat(a.programming.text,","):"").concat(a.spooky.value?"".concat(a.spooky.text,","):"")).substring(0,i.length-1)),e.next=6,fetch("https://v2.jokeapi.dev/joke/".concat(i,"?lang=").concat(t,"&safe-mode").concat(c));case 6:return r=e.sent,e.abrupt("return",r.json());case 10:e.prev=10,e.t0=e.catch(0),console.log("Issue with fetch: ".concat(e.t0.message));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}var x,b,j,f,g,h,O,v,m,k,w,y,z,S,C,F,A,D=n(5),E=n(17),G=n(4),I=D.default.div(x||(x=Object(o.a)(["\n  background-color: #2d3038;\n  padding: 10px;\n  border-radius: 10px;\n  box-shadow: 1px 1px 1px 1px #0e1529;\n  margin: 5px 10px;\n  max-width: 500px;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  position: relative;\n  font-size: 22px;\n"]))),J=D.default.div(b||(b=Object(o.a)(["\n  background-color: #3d424d;\n  border-radius: 10px;\n  padding: 10px 10px 35px 10px;\n  margin-bottom: 2px;\n"]))),P=Object(D.default)(E.TrashOutline)(j||(j=Object(o.a)(["\n    position: absolute;\n    bottom: 10px;\n    right: 10px;\n    padding: 2px;\n    border-radius: 50%;\n    &:active{\n      background: #959db3;\n    }\n"]))),T=function(e){return Object(G.jsxs)(I,{children:[Object(G.jsx)(P,{color:"#00000",title:"delete",height:"26px",width:"26px",onClick:e.onDelete}),Object(G.jsx)(J,{children:e.text})]})},B=D.default.input(f||(f=Object(o.a)(["\n    margin: 0;\n    margin-left: 5px;\n\n"]))),L=D.default.div(g||(g=Object(o.a)(["\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n    padding: 5px 0;\n"]))),R=D.default.div(h||(h=Object(o.a)(["\n    display: flex;\n    align-items: center;\n"]))),Y=D.default.div(O||(O=Object(o.a)(["\n    display: flex;\n    align-items: center;\n    padding: 5px;\n    margin: 5px 0;\n    border-radius: 10px;\n    background-color: #2d3038;\n"]))),q=D.default.label(v||(v=Object(o.a)(["\n    margin-left: 5px;\n"]))),H=D.default.label(m||(m=Object(o.a)(["\n    font-size: 17px;\n    font-weight: 600;\n    margin-right: 5px;\n"]))),K=function(e){return Object(G.jsxs)(Y,{children:[Object(G.jsx)(H,{children:e.label}),Object(G.jsx)(L,{children:e.filtersArray.map((function(t,n){return Object(G.jsxs)(R,{children:[Object(G.jsx)(q,{children:t[0]},n),Object(G.jsx)(B,{type:"checkbox",name:t[0],onChange:function(){return e.updateFilters(t[0])}})]})}))})]})},M=n(21),N=n.n(M),Q=Object(D.default)(N.a)(k||(k=Object(o.a)(["\n    width: fit-content;\n    margin: 20px auto;\n"]))),U=D.default.div(w||(w=Object(o.a)(["\n    background-color: #3d424d;\n    font-size: calc(8px + 2vmin);\n    display: flex;\n    flex-direction: column;\n    align-items: 'center';\n    justify-content: 'center';\n"]))),V=D.default.div(y||(y=Object(o.a)(["\n    margin: 10px;\n    font-size: 28px;\n"]))),W=D.default.div(z||(z=Object(o.a)(["\n    color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: #3d424d;\n    min-height: 100vh;\n"]))),X=D.default.div(S||(S=Object(o.a)(["\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n    margin: 5px 0;\n"]))),Z=D.default.button(C||(C=Object(o.a)(["\n    margin: 5px 10px;\n    background: #2d3038;\n    color: white;\n    border: 2px solid #1e2025;\n    border-radius: 10px;\n    padding: 10px;\n    font-size: 20px;\n    &:active{\n      background: #414550;\n      transform: translateY(2px);\n    };\n"]))),$=D.default.select(F||(F=Object(o.a)(["\n    font-size: 18px;\n    color: white;\n    background-color: #3d424d;\n    border-width: 2px;\n    border-radius: 5px;\n    margin-left: 5px;\n"]))),_=D.default.label(A||(A=Object(o.a)(["\n    margin: 0 7px;\n"]))),ee=[{iso:"en",label:"English"},{iso:"fr",label:"French"},{iso:"es",label:"Spanish"},{iso:"de",label:"German"},{iso:"pt",label:"Portuguese"},{iso:"cs",label:"Czech"}],te={nsfw:{value:!1,text:"nsfw"},explicit:{value:!1,text:"explicit"},religious:{value:!1,text:"religious"},political:{value:!1,text:"political"}},ne={pun:{value:!1,text:"Pun"},dark:{value:!1,text:"Dark"},programming:{value:!1,text:"Programming"},spooky:{value:!1,text:"Spooky"}},ae=function(e){var t=Object(a.useState)([]),n=Object(l.a)(t,2),c=n[0],i=n[1],o=Object(a.useState)(!1),s=Object(l.a)(o,2),u=s[0],d=s[1],x=Object(a.useState)(ne),b=Object(l.a)(x,2),j=b[0],f=b[1],g=Object(a.useState)(te),h=Object(l.a)(g,2),O=h[0],v=h[1],m=Object(a.useState)(ee[0].iso),k=Object(l.a)(m,2),w=k[0],y=k[1];return Object(G.jsxs)(W,{children:[Object(G.jsx)(V,{children:e.title}),Object(G.jsx)(X,{children:Object(G.jsxs)(_,{children:["Languages:",Object(G.jsx)($,{name:"languages",onChange:function(e){y(e.target.value)},children:ee.map((function(e){return Object(G.jsx)("option",{value:e.iso,children:e.label},e.iso)}))})]})}),Object(G.jsx)(K,{label:"Include Types: ",filtersArray:Object.entries(j),updateFilters:function(e){var t=Object(r.a)({},j);t[e].value=!t[e].value,f(t)}}),Object(G.jsx)(K,{label:"Exclude: ",filtersArray:Object.entries(O),updateFilters:function(e){var t=Object(r.a)({},O);t[e].value=!t[e].value,v(t)}}),Object(G.jsx)(Z,{onClick:function(){d(!0),function(e,t,n){return p.apply(this,arguments)}(w,O,j).then((function(e){i(["twopart"==e.type?"".concat(e.setup," ").concat(e.delivery):e.joke].concat(c)),d(!1)}))},children:"Generate"}),u&&Object(G.jsx)(Q,{type:"Circles",color:"white",height:80,width:80}),Object(G.jsx)(U,{children:c.map((function(e,t){return Object(G.jsx)(T,{text:e,onDelete:function(){return t=e,void i((function(e){return e.filter((function(e){return e!==t}))}));var t}},t)}))})]})};i.a.render(Object(G.jsx)(ae,{title:"Random Jokes Generator"}),document.getElementById("root"))},26:function(e,t,n){}},[[1356,1,2]]]);
//# sourceMappingURL=main.ccb54f88.chunk.js.map