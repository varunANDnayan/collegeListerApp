(this["webpackJsonpcollege-spree"]=this["webpackJsonpcollege-spree"]||[]).push([[0],{111:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),i=t(23),c=t.n(i),o=(t(58),t(7)),r=t(19),s=t(14),m=t(1),g=(t(12),Object(m.e)((function(e){var a=n.a.useState(!1),t=Object(s.a)(a,2),i=t[0],c=t[1],o=n.a.useState({sliderClass:i?"slider-style slider-open":"slider-style slider-close",sliderOpacity:i?"slider slider-opacity":"slider slider-close",sliderContentClass:i?"slider-content open":"slider-content close"}),m=Object(s.a)(o,2),g=m[0],u=m[1],d=[{path:"/",title:"Home",child:[{path:"/",title:"test",child:[{path:"/",title:"level2",child:[{path:"/",title:"level3"}]}]},{path:"/",title:"test"}]},{path:"/about",title:"About"}].map((function(e){var a="";return e.child&&e.child.length>0&&(a=function e(a){return a.map((function(t,l){var i="";t.child&&t.child.length>0&&(i=e(t.child));var c="menu-child-conatiner";return l!=a.length-1&&(c+=" menu-seprator"),n.a.createElement("li",{className:c,onClick:function(){p(t.path)}},t.title,i)}))}(e.child)),n.a.createElement("div",{className:"menu-container",onClick:function(){p(e.path)}},e.title,a)})),h=function(){c(!i)},p=function(a){e.history&&setTimeout((function(){e.history.push(a)}),0),h()};return Object(l.useEffect)((function(){var e=Object(r.a)({},g);e.sliderClass=i?"slider-style slider-open":"slider-style slider-close",e.sliderOpacity=i?"slider slider-opacity":"slider slider-close",e.sliderContentClass=i?"slider-content open":"slider-content close",u(e)}),[i]),n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement("div",{className:"burger-menu",onClick:h},n.a.createElement("div",{className:"menu-icon"}),n.a.createElement("div",{className:"menu-icon"}),n.a.createElement("div",{className:"menu-icon"}))),n.a.createElement("div",{className:g.sliderOpacity,onClick:h}),n.a.createElement("div",{className:g.sliderClass},n.a.createElement("div",{className:"cross-icon-container",onClick:h},n.a.createElement("span",{className:"cross-icon"},"X")),n.a.createElement("div",{className:g.sliderContentClass},n.a.createElement("div",null,d))))}))),u=function(){var e={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return e.Android()||e.BlackBerry()||e.iOS()||e.Opera()||e.Windows()}},a=e.any();return n.a.createElement("div",null,n.a.createElement("nav",{className:"nav-wrapper #FFA8B6"},a&&n.a.createElement(n.a.Fragment,null,n.a.createElement(g,null),n.a.createElement(o.b,{to:"/",className:"nav-name-mobile"},"College Spree")),!a&&n.a.createElement("div",{className:"nav-container"},n.a.createElement(o.b,{to:"/",className:"nav-name"},"College Spree"),n.a.createElement("ul",{className:"nav-right"},n.a.createElement("li",null,n.a.createElement(o.b,{to:"/"},"Home")),n.a.createElement("li",null,n.a.createElement(o.b,{to:"/about"},"About"))))))};var d=function(){return n.a.createElement("div",null,n.a.createElement("p",{className:"center"},"Copyright \xa9 2020"))},h=(t(63),t(49));var p=function(){var e={height:"100%"};return n.a.createElement("div",null,n.a.createElement("div",{className:""},n.a.createElement("div",null,n.a.createElement(h.Carousel,{infiniteLoop:!0,autoPlay:!0,showThumbs:!1,interval:25e3,showStatus:!1},n.a.createElement("div",{style:e},n.a.createElement("img",{style:e,src:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/05/07/679542-wilson-college.jpg",alt:"Top colleges in Mumbai"})),n.a.createElement("div",{style:e},n.a.createElement("img",{style:e,src:"https://img.collegepravesh.com/2017/05/SPCE-Mumbai.jpg",alt:""})),n.a.createElement("div",{style:e},n.a.createElement("img",{style:e,src:"https://images.jdmagicbox.com/comp/mumbai/90/022p33090/catalogue/elphinstone-college-of-arts-science-and-commerce-fort-mumbai-colleges-358ee.jpg",alt:""}))))))};var f=function(){return n.a.createElement("div",null,n.a.createElement(p,null))},v=t(16),E=t(17),y=t(20),b=t(18),C=t(50),_=t(9),w=t.n(_);var M=function(e){var a="";return e.colleges&&(a=e.colleges.map((function(e){return n.a.createElement("div",null,n.a.createElement("div",{className:w.a["clg-layout"]},e.name))}))),n.a.createElement("div",{className:"".concat(w.a["clg-top"]," ").concat(w.a.center)},n.a.createElement("h5",{className:w.a["clg-header"]},e.header),n.a.createElement("hr",null),a)};var k=function(e){console.log("collegeList",e.collegeList);var a=!(!e.collegeList||!e.collegeList.colleges),t=(e.collegeList,n.a.createElement("div",null,"Loading..."));if(a){var l=e.collegeList.colleges;t=["Engineering","MBBS","Arts","Commerce","Diploma","Science"].map((function(e){if(l[e])return n.a.createElement(M,{header:e,colleges:l[e]})}))}return n.a.createElement("div",null,n.a.createElement("h3",{className:"center"},"Top Colleges"),n.a.createElement("div",{className:w.a["clg-wrapper"]},t))},N=function(e){Object(y.a)(t,e);var a=Object(b.a)(t);function t(){var e;Object(v.a)(this,t);for(var l=arguments.length,n=new Array(l),i=0;i<l;i++)n[i]=arguments[i];return(e=a.call.apply(a,[this].concat(n))).state={colleges:{}},e}return Object(E.a)(t,[{key:"componentDidMount",value:function(){this.setState({colleges:Object(r.a)({},C[0])})}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(k,{collegeList:this.state.colleges}))}}]),t}(l.Component),A=t(51),S=t(3),B=t.n(S),j=t(52),Y=t.n(j);var O=function(e){console.log("child",e);var a=e.colleges.map((function(e){var a,t=[],l=e.rating,i=Math.round(2*l)/2;for(console.log("rating",i),a=i;a>=1;a--)t+='<i class="fa fa-star"aria-hidden="true" style="color: gold;"></i>&nbsp;';for(.5==a&&(t+='<i class="fa fa-star-half-o" aria-hidden="true" style="color: gold;"></i>&nbsp;'),a=5-i;a>=1;a--)t+='<i class="fa fa-star-o" aria-hidden="true" style="color: gold;"></i>&nbsp;';return n.a.createElement("div",{className:B.a["clg-list"]},n.a.createElement("div",{className:B.a["clg-list-image"]},n.a.createElement("img",{src:e.logo,alt:e.name})),n.a.createElement("div",{className:B.a["clg-list-content"]},n.a.createElement("div",{className:B.a["clg-list-name"]},e.name),n.a.createElement("div",{className:B.a["clg-list-info"]},e.info),n.a.createElement("div",{className:B.a["clg-list-loc"]},e.location)),n.a.createElement("div",{className:B.a["clg-list-details"]},n.a.createElement("div",{className:B.a["clg-list-rate"]},n.a.createElement("p",null,"Rating:"),n.a.createElement("span",null,Y()(t)),n.a.createElement("p",null,"(",e.rating,")")),n.a.createElement("div",{className:B.a["clg-list-btn"]},console.log(e.link),n.a.createElement("button",{class:B.a["clg-btn"],onClick:function(){return a=e.link,console.log("URL",a),void window.open(a,"_blank");var a}},"Visit"))))}));return n.a.createElement(n.a.Fragment,null,a)};var P=function(e){console.log("Tabs child",e.data);var a=n.a.useState(0),t=Object(s.a)(a,2),l=t[0],i=t[1],c=[],o=n.a.createElement("div",null,"Loading...");return e.data&&(o=e.headers.map((function(a,t){var o=B.a["tabs-header"];return e.data[a].length>0&&l===t&&(c=e.data[a],o="".concat(o,"  ").concat(B.a.selected),console.log("Tab class",o)),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:o,onClick:function(){i(t),e.callback&&e.callback()}},a))}))),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:B.a["tabs-container"]},o),n.a.createElement("div",{className:B.a["clg-container"]},n.a.createElement(O,{colleges:c})))};var T=function(e){var a=e.collegeList.colleges,t={Engineering:[],Diploma:[],Arts:[],Commerce:[],MBBS:[]},l=["Engineering","Diploma","Arts","Commerce","MBBS"];return a&&(console.log("colleges",a),l.map((function(e){var l=e,n=[];a.map((function(e){-1!=e.stream.indexOf(l)&&n.push(e)})),t[l]=n}))),n.a.createElement("div",{className:"paddingB50"},n.a.createElement("h3",{className:"center"},"List of Colleges"),n.a.createElement(P,{headers:l,data:t}))},x=function(e){Object(y.a)(t,e);var a=Object(b.a)(t);function t(){var e;Object(v.a)(this,t);for(var l=arguments.length,n=new Array(l),i=0;i<l;i++)n[i]=arguments[i];return(e=a.call.apply(a,[this].concat(n))).state={colleges:{}},e}return Object(E.a)(t,[{key:"componentDidMount",value:function(){this.setState({colleges:{colleges:A}})}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(T,{collegeList:this.state.colleges}))}}]),t}(l.Component);var I=function(){return n.a.createElement("div",{className:"container"},n.a.createElement(N,null),n.a.createElement(x,null))};var G=function(){return n.a.createElement("div",null,n.a.createElement(f,null),n.a.createElement(I,null))};var L=function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"About"))};var D=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,{exact:!0,path:"/",component:G}),n.a.createElement(m.a,{exact:!0,path:"/about",component:L}))};var F=function(){return n.a.createElement(o.a,{basename:"/collegeListerApp"},n.a.createElement("div",{className:"background"},n.a.createElement(u,null),n.a.createElement(D,null),n.a.createElement(d,null)))};var H=function(){return n.a.createElement("div",null,n.a.createElement(F,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},12:function(e,a,t){},3:function(e,a,t){e.exports={"tabs-container":"listofcolleges_tabs-container__3oi6S","tabs-header":"listofcolleges_tabs-header__UYYBy",selected:"listofcolleges_selected__1zWN1","clg-container":"listofcolleges_clg-container__gdi4_","clg-list":"listofcolleges_clg-list__3f4Hp","clg-list-image":"listofcolleges_clg-list-image__3_fLs","clg-list-content":"listofcolleges_clg-list-content__XQ63w","clg-list-name":"listofcolleges_clg-list-name__fNqbb","clg-list-info":"listofcolleges_clg-list-info__3xkOj","clg-list-details":"listofcolleges_clg-list-details__HlwWo","clg-list-btn":"listofcolleges_clg-list-btn__2-r30","clg-btn":"listofcolleges_clg-btn__3zHj2","clg-list-rate":"listofcolleges_clg-list-rate__1TA-8","clg-list-container":"listofcolleges_clg-list-container__2FYU4","clg-list-loc":"listofcolleges_clg-list-loc__1FKp4",fa:"listofcolleges_fa__1sMZI"}},50:function(e){e.exports=JSON.parse('[{"colleges":{"Engineering":[{"id":"Clgeng1","name":"Bharatiya Vidya Bhavan\'s Sardar Patel College of Engineering","stream":"Engineering","cutoff":{"lastYear":"","currentYear":""},"location":{"state":"Maharashtra","city":"Mumbai","locality":"Andheri"}},{"id":"Clgeng2","name":"IIT Bombay - Indian Institute of Technology","stream":"Engineering","cutoff":{"lastYear":"","currentYear":""},"location":{"state":"Maharashtra","city":"Mumbai","locality":"Powai"}},{"id":"Clgeng3","name":"Dwarkadas J Sanghvi College of Engineering","stream":"Engineering","cutoff":{"lastYear":"","currentYear":""},"location":{"state":"Maharashtra","city":"Mumbai","locality":"Vile Parle"}}],"Diploma":[{"id":"Clgdip1","name":"Veermata Jijabai Technological Institute","stream":"Diploma","cutoff":{"lastYear":"","currentYear":""},"location":{"state":"Maharashtra","city":"Mumbai","locality":"Matunga"}},{"id":"Clgdip2","name":"Government Polytechnic","stream":"Diploma","cutoff":{"lastYear":"","currentYear":""},"location":{"state":"Maharashtra","city":"Mumbai","locality":"Bandra"}},{"id":"Clgdip3","name":"KJ Somaiya Polytechnic","stream":"Diploma","cutoff":{"lastYear":"","currentYear":""},"location":{"state":"Maharashtra","city":"Mumbai","locality":"VidyaVihar"}}],"Arts":[{"id":"Clgart1","name":"St. Xavier\'s College","stream":"Arts","cutoff":{"lastYear":"","currentYear":""},"location":{"state":"Maharashtra","city":"Mumbai","locality":"CST"}},{"id":"Clgart2","name":"K. J. Somaiya College Of Arts And Commerce","stream":"Arts","cutoff":{"lastYear":"","currentYear":""},"location":{"state":"Maharashtra","city":"Mumbai","locality":"Ghatkopar"}},{"id":"Clgart3","name":"Mithibai College of Arts","stream":"Arts","cutoff":{"lastYear":"","currentYear":""},"location":{"state":"Maharashtra","city":"Mumbai","locality":"Vile Parle"}}],"Commerce":[{"id":"Clgcom1","name":"K. J. Somaiya College Of Arts And Commerce","stream":"Commerce","cutoff":{"lastYear":"","currentYear":""},"location":{"state":"Maharashtra","city":"Mumbai","locality":"Ghatkopar"}},{"id":"Clgcom2","name":"Mithibai College of Arts","stream":"Commerce","cutoff":{"lastYear":"","currentYear":""},"location":{"state":"Maharashtra","city":"Mumbai","locality":"Vile Parle"}},{"id":"Clgcom3","name":"K.P.B. Hinduja College of Commerce and Economics","stream":"Commerce","cutoff":{"lastYear":"","currentYear":""},"location":{"state":"Maharashtra","city":"Mumbai","locality":"Charni Road"}}],"MBBS":[{"id":"Clgdoc1","name":"Grant Medical College","stream":"MBBS","cutoff":{"lastYear":"","currentYear":""},"location":{"state":"Maharashtra","city":"Mumbai","locality":"Mumbai Central"}},{"id":"Clgdoc2","name":"Seth Gordhandas Sunderdas Medical College","stream":"MBBS","cutoff":{"lastYear":"","currentYear":""},"location":{"state":"Maharashtra","city":"Mumbai","locality":"Parel"}},{"id":"Clgdoc3","name":"Lokmanya Tilak Municipal General Hospital And Medical College","stream":"MBBS","cutoff":{"lastYear":"","currentYear":""},"location":{"state":"Maharashtra","city":"Mumbai","locality":"Sion"}}]}}]')},51:function(e){e.exports=JSON.parse('[{"id":101,"name":"Indian Institute of Technology Bombay","info":"IIT Bombay","stream":["Engineering"],"location":"Powai","logo":"https://upload.wikimedia.org/wikipedia/en/d/d0/IIT_Bombay_color_logo.png","image":"https://src.lafargeholcim-foundation.org/img/2dca6d36-5666-4587-9e55-07dcbccab9e1/h(true)/c(866-2.254-100-0-16.6666666666667)/iitbombay.jpg","rating":4.6,"link":"http://www.iitb.ac.in/","autonomous":true},{"id":102,"name":"Jai Hind College","info":"Basantsing Anil Dharmada Trust","stream":["Arts","Commerce"],"location":"Churchgate","logo":"https://images.static-collegedunia.com/public/college_data/images/logos/150512760931e614b.png","image":"https://img.collegedekhocdn.com/media/img/institute/crawled_images/None/FDHFHGHGFHFTH.jpg?tr=h-400,w-650","rating":4.4,"link":"http://www.jaihindcollege.com/","autonomous":true},{"id":103,"name":"St Andrew\'s College of Arts, Science and Commerce","info":"Andrew\'s, SanAndreas","stream":["Arts","Commerce"],"location":"Bandra","logo":"https://media-exp1.licdn.com/dms/image/C4E0BAQFQyk9u4Mt_jA/company-logo_200_200/0?e=2159024400&v=beta&t=uM1HQ-Cxb5QgyxiikiBI8ajXpGpKUukpDAsprK1yh9E","image":"https://standrewscollege.ac.in/wp-content/uploads/2019/05/IMG_0692-1.jpg","rating":4.2,"link":"https://standrewscollege.ac.in/","autonomous":false},{"id":104,"name":"H.R. College of Commerce and Economics","info":"Accredited \'A\' Grade by NAAC","stream":["Commerce"],"location":"Churchgate","logo":"https://images.shiksha.com/mediadata/images/1586176505phpV8QYpg.jpeg","image":"https://images.shiksha.com/mediadata/images/1552544549phpPWCWoN.jpeg","rating":4.5,"link":"https://www.hrcollege.edu/","autonomous":false},{"id":105,"name":"Mukesh Patel School Of Technology Management & Engineering","info":"NMIMS","stream":["Engineering"],"location":"Vile Parle","logo":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRadUXCeidw9gZFF5UDd9s9utjaZAGrkgcX7rikygYce6tOIev3&usqp=CAU","image":"https://img.collegedekhocdn.com/media/img/institute/crawled_images/Mukesh_Patel_School_of_Technology_Management__Engineering.jpg?tr=h-200,w-300","rating":4.1,"link":"https://engineering.nmims.edu/","autonomous":false},{"id":106,"name":"Thakur College of Engineering and Technology","info":"Zagdu Singh Charitable Trust","stream":["Engineering"],"location":"Kandivali","logo":"https://image3.mouthshut.com/images/imagesp/925718678s.jpg","image":"https://images.static-collegedunia.com/public/college_data/images/campusimage/1420708054tcet.JPG","rating":4.4,"link":"https://www.tcetmumbai.in/","autonomous":false},{"id":107,"name":"Thakur Polytechnic","info":"Zagdu Singh Charitable Trust","stream":["Diploma"],"location":"Kandivali","logo":"https://www.manbhariconstructions.co.in/wp-content/uploads/2015/12/thakur-trust-x-206-320x202.jpg","image":"https://content3.jdmagicbox.com/comp/mumbai/a1/022pxx22.xx22.170209114852.j8a1/catalogue/thakur-polytechnic-thakur-complex-kandivali-east-mumbai-6ymv7vsxzo.jpg?clr=1f3347","rating":4.5,"link":"https://www.tpolymumbai.in/","autonomous":false},{"id":108,"name":"Topiwala National Medical College","info":"TNMC & Nair ch. Hospital","stream":["MBBS"],"location":"Kandivali","logo":"https://www.tnmcnair.com/img/NAIR.jpg","image":"https://www.tnmcnair.com/img/hospital.JPG","rating":3.9,"link":"https://www.tnmcnair.com/","autonomous":false},{"id":109,"name":"K. J. Somaiya Medical College & Research Centre","info":"Vidyavihar University","stream":["MBBS"],"location":"Sion","logo":"http://www.somaiya-kalavidya.org/images/somaiya/img8.jpg","image":"https://www.tnmcnair.com/img/hospital.JPG","rating":3.3,"link":"https://kjsmc.somaiya.edu/kjsmc/","autonomous":false},{"id":110,"name":"Shri Bhagubhai Mafatlal Polytechnic","info":"SVKM","stream":["Diploma"],"location":"Vile Parle","logo":"https://files.indcareer.com/files/Shri%20Bhagubhai%20Mafatlal%20Polytechnic.JPG","image":"https://images.shiksha.com/mediadata/images/1555500888phpITWB7j.jpeg","rating":4.2,"link":"http://sbmp.ac.in/","autonomous":false}]')},53:function(e,a,t){e.exports=t(111)},58:function(e,a,t){},9:function(e,a,t){e.exports={"clg-wrapper":"topcolleges_clg-wrapper__2rLBm","clg-top":"topcolleges_clg-top__3M0UD","clg-header":"topcolleges_clg-header__3R2-i","clg-layout":"topcolleges_clg-layout__2I56s",center:"topcolleges_center__2GGBa"}},93:function(e,a){}},[[53,1,2]]]);
//# sourceMappingURL=main.aefc1038.chunk.js.map