(this["webpackJsonpmutualfund-app"]=this["webpackJsonpmutualfund-app"]||[]).push([[0],{11:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(5),r=n.n(a),l=(n(11),n(4)),i=n.n(l),j=n(6),u=n(2),d=n(0),o=function(){return Object(d.jsx)("nav",{children:Object(d.jsx)("h2",{children:"All funds"})})},b=function(e){var t=e.filterByMin,n=e.filterByRisk;return Object(d.jsx)("section",{className:"filters",children:Object(d.jsxs)("fieldset",{children:[Object(d.jsx)("legend",{children:"FILTERS"}),Object(d.jsxs)("div",{className:"filters",children:[Object(d.jsxs)("div",{className:"filterByRisk",children:[Object(d.jsx)("hr",{}),Object(d.jsx)("h3",{children:"Filter by risk"}),Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:"radioButtons",children:[Object(d.jsx)("input",{type:"radio",name:"risk",id:"low",value:"LOW",onClick:n}),Object(d.jsx)("label",{htmlFor:"low",children:" LOW"}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"radio",name:"risk",id:"moderate",value:"MODERATE",onClick:n}),Object(d.jsx)("label",{htmlFor:"moderate",children:" MODERATE"}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"radio",name:"risk",id:"high",value:"HIGH",onClick:n}),Object(d.jsx)("label",{htmlFor:"high",children:" HIGH"}),Object(d.jsx)("br",{})]})]}),Object(d.jsxs)("div",{className:"filterByMinInvestment",children:[Object(d.jsx)("hr",{}),Object(d.jsx)("h3",{children:"Filter by Minimum Investment"}),Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:"radioButtons",children:[Object(d.jsx)("input",{type:"radio",name:"min",id:"min1",value:"500",onClick:t}),Object(d.jsx)("label",{htmlFor:"min1",children:" \u20b9 500"}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"radio",name:"min",id:"min2",value:"1000",onClick:t}),Object(d.jsx)("label",{htmlFor:"min2",children:" \u20b9 1000"}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{type:"radio",name:"min",id:"min3",value:"5000",onClick:t}),Object(d.jsx)("label",{htmlFor:"min3",children:" \u20b9 5000"}),Object(d.jsx)("br",{})]})]})]})]})})},h=function(e){var t=e.allFunds;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"container",children:t.map((function(e){return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"card",children:[Object(d.jsxs)("h3",{className:"title",children:[Object(d.jsx)("img",{src:e.fundImage,alt:""})," ",e.name]}),Object(d.jsxs)("div",{className:"details",children:[Object(d.jsxs)("div",{className:"detailsUpper",children:[Object(d.jsxs)("div",{className:"detail",children:[Object(d.jsx)("p",{className:"detailName",children:"Annual returns"}),Object(d.jsx)("p",{className:"detailValue",children:e.annualizedReturn})]}),Object(d.jsxs)("div",{className:"detail",children:[Object(d.jsx)("p",{className:"detailName",children:"3yr returns"}),Object(d.jsx)("p",{className:"detailValue",children:e.threeYearReturn})]}),Object(d.jsxs)("div",{className:"detail",children:[Object(d.jsx)("p",{className:"detailName",children:"min. investment"}),Object(d.jsxs)("p",{className:"detailValue",children:["\u20b9 ",e.minInvestment]})]})]}),Object(d.jsxs)("div",{className:"detailsLower",children:[Object(d.jsx)("p",{className:"detailName",children:"risk profile"}),Object(d.jsx)("p",{className:"detailValue",children:e.riskProfile})]})]}),Object(d.jsx)("button",{children:"Select Fund"})]})},e.id)}))})})},O=function(e){var t=e.func;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"errorMsg",children:[Object(d.jsx)("h2",{children:"Failed to load"}),Object(d.jsx)("button",{onClick:t,children:"Try Again"})]})})};n(14);var m=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)([]),r=Object(u.a)(a,2),l=r[0],m=r[1],x=Object(c.useState)([]),f=Object(u.a)(x,2),v=f[0],g=f[1],p=Object(c.useState)([]),k=Object(u.a)(p,2),N=k[0],F=k[1],y=Object(c.useState)(""),I=Object(u.a)(y,2),S=I[0],B=I[1],C=Object(c.useState)(""),w=Object(u.a)(C,2),M=w[0],R=w[1],E=Object(c.useState)(""),L=Object(u.a)(E,2),P=L[0],T=L[1],A=function(){var e=Object(j.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://prr7fx7sh0.execute-api.ap-south-1.amazonaws.com/dev/pten/funds",e.next=4,fetch("https://prr7fx7sh0.execute-api.ap-south-1.amazonaws.com/dev/pten/funds");case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,console.log(n),s(n.result),F(n.result),T(""),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0),T(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){A()}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(o,{}),Object(d.jsx)(b,{filterByMin:function(e){if(console.log(e.target.value),0===l.length){if(0===v.length){var t=n.filter((function(t){return parseInt(t.minInvestment)>=parseInt(e.target.value)}));console.log(t),s(t),g(t),B(e.target.value)}else if(0!==v.length)if(!0===e.target.checked&&S===e.target.value)e.target.checked=!1,s(N),g([]),B("");else{var c=N.filter((function(t){return parseInt(t.minInvestment)>=parseInt(e.target.value)}));console.log(c),s(c),g(c),B(e.target.value)}}else if(0!==l.length)if(!0===e.target.checked&&S===e.target.value)e.target.checked=!1,s(l),g([]),B("");else{var a=l.filter((function(t){return parseInt(t.minInvestment)>=parseInt(e.target.value)}));console.log(a),s(a),g(a),B(e.target.value)}},filterByRisk:function(e){if(console.log(e.target.value),0===v.length){if(0===l.length){var t=n.filter((function(t){return t.riskProfile===e.target.value}));console.log(t),s(t),m(t),R(e.target.value)}else if(0!==l.length)if(!0===e.target.checked&&M===e.target.value)e.target.checked=!1,s(N),m([]),R("");else{var c=N.filter((function(t){return t.riskProfile===e.target.value}));console.log(c),s(c),m(c),R(e.target.value)}}else if(0!==v.length)if(!0===e.target.checked&&M===e.target.value)e.target.checked=!1,s(v),m([]),R("");else{var a=v.filter((function(t){return t.riskProfile===e.target.value}));console.log(a),s(a),m(a),R(e.target.value)}}}),""===P?Object(d.jsx)(h,{allFunds:n}):Object(d.jsx)(O,{func:A})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),x()}},[[15,1,2]]]);
//# sourceMappingURL=main.d9491c7b.chunk.js.map