(this["webpackJsonpcollege-spree"]=this["webpackJsonpcollege-spree"]||[]).push([[0],{117:function(e,a){},135:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(21),r=t.n(c),o=(t(65),t(7));t(19);var s=function(){return n.a.createElement("div",null,n.a.createElement("nav",{className:"nav-wrapper #FFA8B6"},n.a.createElement("div",{className:"nav-container"},n.a.createElement(o.b,{to:"/",className:"nav-name"},"College Spree"),n.a.createElement("ul",{className:"nav-right"},n.a.createElement("li",null,n.a.createElement(o.b,{to:"/"},"Home")),n.a.createElement("li",null,n.a.createElement(o.b,{to:"/about"},"About"))))))};var i=function(){return n.a.createElement("div",null,n.a.createElement("p",{className:"center"},"Copyright \xa9 2020"))},m=t(1),u=(t(70),t(57));var g=function(){return n.a.createElement("div",null,n.a.createElement("div",{className:""},n.a.createElement("div",null,n.a.createElement(u.Carousel,{infiniteLoop:!0,autoPlay:!0,showThumbs:!1,interval:2500,showStatus:!1},n.a.createElement("div",null,n.a.createElement("img",{className:"carousel-image",src:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/05/07/679542-wilson-college.jpg",alt:"Top colleges in Mumbai"})),n.a.createElement("div",null,n.a.createElement("img",{className:"carousel-image",src:"https://img.collegepravesh.com/2017/05/SPCE-Mumbai.jpg",alt:""})),n.a.createElement("div",null,n.a.createElement("img",{className:"carousel-image",src:"https://images.jdmagicbox.com/comp/mumbai/90/022p33090/catalogue/elphinstone-college-of-arts-science-and-commerce-fort-mumbai-colleges-358ee.jpg",alt:""}))))))};var d=function(){return n.a.createElement("div",null,n.a.createElement(g,null))},E=t(13),v=t(14),f=t(17),p=t(16),h=t(15),b=t.n(h);t(40);var N=function(e){var a="";return e.colleges&&(a=e.colleges.map((function(e){return n.a.createElement("div",null,n.a.createElement("div",{className:"clg-layout"},e.name))}))),n.a.createElement("div",{className:"clg-top"},n.a.createElement("h5",{className:"clg-header center"},e.header),n.a.createElement("hr",null),a)};var j=function(e){console.log("collegeList",e.collegeList);var a=!(!e.collegeList||!e.collegeList.colleges),t=(e.collegeList,n.a.createElement("div",null,"Loading..."));if(a){var l=e.collegeList.colleges;t=["Engineering","MBBS","Arts","Commerce","Diploma","Science"].map((function(e){if(l[e])return n.a.createElement(N,{header:e,colleges:l[e]})}))}return n.a.createElement("div",null,n.a.createElement("h3",{className:"center"},"Top Colleges"),n.a.createElement("div",{className:"clg-wrapper"},t))},w=function(e){Object(f.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(E.a)(this,t);for(var l=arguments.length,n=new Array(l),c=0;c<l;c++)n[c]=arguments[c];return(e=a.call.apply(a,[this].concat(n))).state={colleges:{}},e}return Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get("../json/colleges.json").then((function(a){e.setState({colleges:a.data})}))}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(j,{collegeList:this.state.colleges}))}}]),t}(l.Component),y=(t(41),t(59)),k=t(58),L=t.n(k);var C=function(e){console.log("child",e);var a=e.colleges.map((function(e){var a,t=[],l=e.rating,c=Math.round(2*l)/2;for(console.log("rating",c),a=c;a>=1;a--)t+='<i class="fa fa-star"aria-hidden="true" style="color: gold;"></i>&nbsp;';for(.5==a&&(t+='<i class="fa fa-star-half-o" aria-hidden="true" style="color: gold;"></i>&nbsp;'),a=5-c;a>=1;a--)t+='<i class="fa fa-star-o" aria-hidden="true" style="color: gold;"></i>&nbsp;';return n.a.createElement("div",{className:"clg-list"},n.a.createElement("div",{className:"clg-list-image"},n.a.createElement("img",{src:e.logo,alt:e.name})),n.a.createElement("div",{className:"clg-list-content"},n.a.createElement("div",{className:"clg-list-name"},e.name),n.a.createElement("div",{className:"clg-list-info"},e.info),n.a.createElement("div",{className:"clg-list-loc"},e.location)),n.a.createElement("div",{className:"clg-list-details"},n.a.createElement("div",{className:"clg-list-rate"},n.a.createElement("p",null,"Rating:"),n.a.createElement("span",null,L()(t)),n.a.createElement("p",null,"(",e.rating,")")),n.a.createElement("div",{className:"clg-list-btn"},console.log(e.link),n.a.createElement("button",{class:"clg-btn",onClick:function(){return a=e.link,console.log("URL",a),void window.open(a,"_blank");var a}},"Visit"))))}));return n.a.createElement(n.a.Fragment,null,a)};var S=function(e){console.log("Tabs child",e.data);var a=n.a.useState(0),t=Object(y.a)(a,2),l=t[0],c=t[1],r=[],o=n.a.createElement("div",null,"Loading...");return e.data&&(o=e.headers.map((function(a,t){var o="tabs-header";return e.data[a].length>0&&l===t&&(r=e.data[a],o+=" selected"),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:o,onClick:function(){c(t),e.callback&&e.callback()}},a))}))),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"tabs-container"},o),n.a.createElement("div",{className:"clg-container"},n.a.createElement(C,{colleges:r})))};var B=function(e){var a=e.collegeList.colleges,t={Engineering:[],Diploma:[],Arts:[],Commerce:[],MBBS:[]},l=["Engineering","Diploma","Arts","Commerce","MBBS"];return a&&(console.log("colleges",a),l.map((function(e){var l=e,n=[];a.map((function(e){-1!=e.stream.indexOf(l)&&n.push(e)})),t[l]=n}))),n.a.createElement("div",{className:"paddingB50"},n.a.createElement("h3",{className:"center"},"List of Colleges"),n.a.createElement(S,{headers:l,data:t}))},O=function(e){Object(f.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(E.a)(this,t);for(var l=arguments.length,n=new Array(l),c=0;c<l;c++)n[c]=arguments[c];return(e=a.call.apply(a,[this].concat(n))).state={colleges:{}},e}return Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get("../json/collegeList.json").then((function(a){console.log("FETCHED"),e.setState({colleges:a.data})})),console.log("state",this.state.colleges)}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(B,{collegeList:this.state.colleges}))}}]),t}(l.Component);var M=function(){return n.a.createElement("div",{className:"container"},n.a.createElement(w,null),n.a.createElement(O,null))};var A=function(){return n.a.createElement("div",null,n.a.createElement(d,null),n.a.createElement(M,null))};var F=function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"About"))};var D=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,{exact:!0,path:"/",component:A}),n.a.createElement(m.a,{exact:!0,path:"/about",component:F}))};var x=function(){return n.a.createElement(o.a,null,n.a.createElement("div",{className:"background"},n.a.createElement(s,null),n.a.createElement(D,null),n.a.createElement(i,null)))};var T=function(){return n.a.createElement("div",null,n.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},19:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},60:function(e,a,t){e.exports=t(135)},65:function(e,a,t){}},[[60,1,2]]]);
//# sourceMappingURL=main.855d2bd9.chunk.js.map