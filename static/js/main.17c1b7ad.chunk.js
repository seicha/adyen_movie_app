(this.webpackJsonpadyen_movie_app=this.webpackJsonpadyen_movie_app||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),i=a(8),s=a.n(i),o=(a(14),a(5)),l=a(2),r=a(9),d=a.n(r),b=(a(16),a(0)),u=function(e){return Object(b.jsx)("header",{className:"App-header",children:Object(b.jsx)("h2",{onClick:function(){window.location.reload()},children:e.text})})},j=function(e){var t="N/A"===e.Poster?"https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg":e.Poster,a=Object(n.useState)(!1),c=Object(l.a)(a,2),i=c[0],s=c[1];return Object(b.jsxs)("div",{className:"accordion-item",children:[Object(b.jsx)("div",{className:"accordion-header",id:"heading"+e.imdbID,children:Object(b.jsxs)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapse"+e.imdbID,"aria-expanded":"false","aria-controls":"collapse"+e.imdbID,onClick:function(t){fetch("https://www.omdbapi.com/?i=".concat(e.imdbID,"&apikey=d4f7bffb")).then((function(e){return e})).then((function(e){return e.json()})).then((function(e){s(e)})),console.log(i)},children:[Object(b.jsx)("img",{src:"N/A"!==e.Poster?e.Poster:t,alt:e.Title,"data-id":e.imdbID,width:"70",height:"100"}),Object(b.jsx)("div",{className:"movie-title",children:e.Title})]})}),Object(b.jsx)("div",{id:"collapse"+e.imdbID,className:"accordion-collapse collapse","aria-labelledby":"heading"+e.imdbID,"data-bs-parent":"#accordion",children:Object(b.jsx)("div",{className:"accordion-body",children:i.Plot})})]})},p=function(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),c=a[0],i=a[1];return Object(b.jsx)("div",{className:"searchContainer",children:Object(b.jsxs)("form",{className:"search",children:[Object(b.jsx)("input",{onChange:function(t){e.getInputValue(t.target.value)},type:"text",placeholder:"Pirate",className:"form-control"}),Object(b.jsx)("input",{onClick:function(t){t.preventDefault(),e.getSubmit(c),i("")},type:"submit",value:"SEARCH",className:"btn btn-primary"})]})})},m=(a(18),a(19),function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)([]),s=Object(l.a)(i,2),r=s[0],m=s[1],h=Object(n.useState)({}),f=Object(l.a)(h,2),g=(f[0],f[1]),O=Object(n.useState)(),v=Object(l.a)(O,2),x=v[0],N=v[1],C=Object(n.useState)(1),w=Object(l.a)(C,2),k=w[0],y=w[1],S=Object(n.useState)("pirate"),D=Object(l.a)(S,2),I=D[0],P=D[1],T=Object(n.useState)(null),M=Object(l.a)(T,2),L=M[0],B=M[1],F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;fetch("https://www.omdbapi.com/?s=".concat(e,"&page=").concat(t,"&plot=full&apikey=d4f7bffb")).then((function(e){return e.json()})).then((function(e){m(e.Search),N(Math.ceil(e.totalResults/10)),y(t),c(!0),B(L)}))},_=function(e){console.log(e),function(e){fetch("https://www.omdbapi.com/?i=".concat(e,"&plot=full&apikey=d4f7bffb")).then((function(e){return e.json()})).then((function(e){g(e),console.log("this is "+e)}))}(e)};Object(n.useEffect)((function(){F(I)}),[I]);var A=function(){var e=[];return r&&r.map((function(t){e.push(Object(b.jsx)(j,Object(o.a)(Object(o.a)({},t),{},{cardClicked:_})))})),e}();return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(u,{text:"Movie Database"}),Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)("div",{className:"row",children:Object(b.jsx)(p,{getInputValue:function(e){return P(e)},getSubmit:function(){return F(I)}})}),Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"accordion accordion-flush",id:"accordion",children:a?0===A.length?Object(b.jsx)("div",{className:"error",children:"No movie found... Try again."}):A:Object(b.jsx)("span",{children:"loading..."})})}),Object(b.jsx)("div",{className:"row",children:Object(b.jsx)(d.a,{previousLabel:"<",previousClassName:"page-item",previousLinkClassName:"page-link",nextLabel:">",nextLinkClassName:"page-link",nextClassName:"page-item",breakLabel:"...",breakClassName:"break-me",pageCount:x,marginPagesDisplayed:1,pageRangeDisplayed:3,onPageChange:function(e){console.log("selected"+e.selected),F(I,e.selected+1)},forcePage:k-1,containerClassName:"pagination justify-content-center",pageClassName:"page-item",pageLinkClassName:"page-link",subContainerClassName:"pages pagination",activeClassName:"active"})})]})]})}),h=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,45)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),i(e),s(e)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root")),h()}},[[42,1,2]]]);
//# sourceMappingURL=main.17c1b7ad.chunk.js.map