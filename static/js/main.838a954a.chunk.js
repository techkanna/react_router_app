(this.webpackJsonprouter_app=this.webpackJsonprouter_app||[]).push([[0],{20:function(e,t,n){e.exports=n(33)},25:function(e,t,n){},26:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(17),l=n.n(o),c=(n(25),n(26),n(4));var i=function(){var e={navStyle:{width:"100%",height:"7rem",backgroundColor:"#888",color:"fff",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"space-around"},color:{color:"#fff",textDecoration:"none"},navLinks:{display:"flex",width:"40%",fontSize:"1.5rem",fontWeight:"500",justifyContent:"space-between",listStyle:"none",cursor:"pointer"}};return r.a.createElement("nav",{style:e.navStyle},r.a.createElement("h1",{style:e.color},"logo"),r.a.createElement("ul",{style:e.navLinks},r.a.createElement(c.b,{style:e.color,to:"/"},r.a.createElement("li",null,"Home")),r.a.createElement(c.b,{style:e.color,to:"/about"},r.a.createElement("li",null,"About")),r.a.createElement(c.b,{style:e.color,to:"/blogs"},r.a.createElement("li",null,"Blogs")),r.a.createElement(c.b,{style:e.color,to:"/profiles"},r.a.createElement("li",null,"Profiles"))))};var u=function(){return r.a.createElement("div",{className:"about"},r.a.createElement("h1",null,"from about"))},s=n(6),m=n.n(s),f=n(10),p=n(7),d=function(e){var t=e.userId,n=e.title,a=e.id,o={post:{width:"80%",margin:"0 auto",backgroundColor:"#fff",textAlign:"center",marginBottom:"3rem",padding:"1rem"},fontStyle:{textDecoration:"none"}};return r.a.createElement("div",{style:o.post},r.a.createElement("h4",null," User Id : ",t),r.a.createElement("h4",null,r.a.createElement(c.b,{style:o.fontStyle,to:"/blogs/".concat(a)}," ","Post Title: ",n)))};var h=function(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],o=t[1];Object(a.useEffect)((function(){l()}),[]);var l=function(){var e=Object(f.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/posts");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,o(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=n.filter((function(e){return e.id>49}));return r.a.createElement("div",{className:"blogs"},r.a.createElement("h1",{style:{textAlign:"center"}},"from Blogs"),c.map((function(e){return r.a.createElement(d,{key:e.id,id:e.id,userId:e.userId,title:e.title})})))},E=function(e){var t=e.match,n=Object(a.useState)({}),o=Object(p.a)(n,2),l=o[0],c=o[1];Object(a.useEffect)((function(){i()}),[]);var i=function(){var e=Object(f.a)(m.a.mark((function e(){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/posts/".concat(t.params.id));case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,c(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return l==={}?r.a.createElement("p",null,"Loading postDetail..."):r.a.createElement("div",{style:{backgroundColor:"#466698",color:"#fff",padding:"2rem",width:"80%",margin:"5rem auto"}},r.a.createElement("p",null,r.a.createElement("b",null,"User Id "),": ",l.id),r.a.createElement("p",null,r.a.createElement("b",null,"Post Body "),": ",l.body),r.a.createElement("b",null," for confirmation: "),r.a.createElement("a",{href:"https://jsonplaceholder.typicode.com/posts",rel:"noopener noreferrer",target:"_blank"},"click me"))},b=function(e){var t=e.title,n=e.thamburl,a=e.id;e.url;return r.a.createElement("div",{style:{width:"50%",margin:"3rem auto 0 auto"}},r.a.createElement("h2",null,"Title: ",t),r.a.createElement("h6",null,"Id: ",a),r.a.createElement(c.b,{to:"/profiles/".concat(a)}," ",r.a.createElement("img",{src:n,alt:t})," "))},v=function(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],o=t[1];Object(a.useEffect)((function(){l()}),[]);var l=function(){var e=Object(f.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/photos?albumId=1");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,o(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return null===n?r.a.createElement("p",null,"Loading profile..."):r.a.createElement("div",null,n.map((function(e){return r.a.createElement(b,{key:e.id,id:e.id,thamburl:e.thumbnailUrl,title:e.title,url:e.url})})))},g=function(e){var t=e.match,n=Object(a.useState)({}),o=Object(p.a)(n,2),l=o[0],c=o[1];Object(a.useEffect)((function(){var e=new AbortController,n=e.signal;return fetch("https://jsonplaceholder.typicode.com/photos/".concat(t.params.id),{signal:n}).then((function(e){return e.json()})).then((function(e){return c(e)})),function(){e.abort()}}),[]);return l==={}?"image is loading...":r.a.createElement("div",{style:{textAlign:"center",margin:"1rem 0 0 0"}},r.a.createElement("img",{src:l.url,alt:l.title}))},y=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome to Home Page"))},j=n(8);var w=function(){return r.a.createElement(c.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(i,null),r.a.createElement(j.c,null,r.a.createElement(j.a,{path:"/",exact:!0,component:y}),r.a.createElement(j.a,{path:"/about",component:u}),r.a.createElement(j.a,{path:"/blogs",exact:!0,component:h}),r.a.createElement(j.a,{path:"/profiles",exact:!0,component:v}),r.a.createElement(j.a,{path:"/profiles/:id",component:g}),r.a.createElement(j.a,{path:"/blogs/:id",component:E}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.838a954a.chunk.js.map