(this["webpackJsonprouter-tutorial"]=this["webpackJsonprouter-tutorial"]||[]).push([[0],{17:function(e,t,n){e.exports=n(27)},27:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(14),c=n.n(r),o=n(4),u=n(6),m=function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Home"))},i=function(){return l.a.createElement("div",null,l.a.createElement("p",null,"About"))},E=function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Contact"))},g=function(e){var t=Object(u.g)();return l.a.createElement("div",null,l.a.createElement("p",null,"Cart"),l.a.createElement("button",{onClick:function(){return t.goBack()}},"Go Back!"),l.a.createElement("button",{onClick:function(){return t.push("/")}},"Go Home!"))},b=function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Login"),l.a.createElement("button",{onClick:function(){localStorage.setItem("LoggedInState","true")}},"Login"),l.a.createElement("button",{onClick:function(){localStorage.setItem("LoggedInState","false")}},"Logout"))},d=function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Checkout"))},s=function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Account"))},f=function(){console.log("loggedin?");var e=function(){return localStorage.getItem("LoggedInState").toString()};return"true"===e()?(console.log("this user is already LOGGED IN!"),!0):(console.log("DAMN! this user is Logged out!"),console.log(e()),!1)},p=function(){return l.a.createElement(o.a,{basename:"/router-tutorial/"},l.a.createElement("h2",null,"Welcome to React Router Tutorial"),l.a.createElement("p",null,"basename : ","/router-tutorial"," + /"),l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.b,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/contact"},"Contact")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/about"},"About")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/cart"},"Cart")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/login"},"Login")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/checkout"},"Checkout")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/account"},"Account")))),l.a.createElement("hr",null),l.a.createElement(u.d,null,l.a.createElement(u.b,{exact:!0,path:"/",render:m}),l.a.createElement(u.b,{path:"/contact",render:E}),l.a.createElement(u.b,{path:"/about",render:i}),l.a.createElement(u.b,{path:"/cart",render:function(){return l.a.createElement(g,null)}}),l.a.createElement(u.b,{path:"/login",render:b}),l.a.createElement(u.b,{path:"/checkout",render:function(){return f()?l.a.createElement(d,null):l.a.createElement(u.a,{to:"/login"})}}),l.a.createElement(u.b,{path:"/account",render:function(){return f()?l.a.createElement(s,null):l.a.createElement(u.a,{to:"/login"})}}),l.a.createElement(u.b,null,"404 not found")))};c.a.render(l.a.createElement(p,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.ce869408.chunk.js.map