(this["webpackJsonpredux-thunk-saga-example"]=this["webpackJsonpredux-thunk-saga-example"]||[]).push([[0],{27:function(e,t,n){e.exports=n(39)},39:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(11),s=n(7),l=n(6),o=n(19),i=n(25),u=n(23),m=n(5),p={posts:[{id:1,title:"one"},{id:2,title:"two"}],fetchedPosts:[]},d={isLoading:!1,alert:null},E=Object(s.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_POST":return Object(m.a)(Object(m.a)({},e),{},{posts:[].concat(Object(u.a)(e.posts),[t.payload])});case"SET_POSTS":return Object(m.a)(Object(m.a)({},e),{},{fetchedPosts:t.payload});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_LOADER":return Object(m.a)(Object(m.a)({},e),{},{isLoading:!0});case"HIDE_LOADER":return Object(m.a)(Object(m.a)({},e),{},{isLoading:!1});case"SHOW_ALERT":return Object(m.a)(Object(m.a)({},e),{},{alert:t.payload});case"HIDE_ALERT":return Object(m.a)(Object(m.a)({},e),{},{alert:null});default:return e}}}),f=["fuck","hui","suka","bliat","idina","idi na"],b=function(e){return{type:"SHOW_ALERT",payload:e}},O=function(){return{type:"HIDE_ALERT"}};var h=n(20),v=n(9),j=n.n(v),S=n(10),y="https://jsonplaceholder.typicode.com/posts?_limit=5",x=j.a.mark(N),w=j.a.mark(T);function N(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.c)("FETCH_POSTS",T);case 2:case"end":return e.stop()}}),x)}function T(){var e,t;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(S.b)({type:"HIDE_ALERT"});case 3:return n.next=5,Object(S.b)({type:"SHOW_LOADER"});case 5:return n.next=7,Object(S.a)(_);case 7:return e=n.sent,n.next=10,Object(S.b)({type:"SET_POSTS",payload:e});case 10:return n.next=12,Object(S.b)({type:"HIDE_LOADER"});case 12:n.next=25;break;case 14:return n.prev=14,n.t0=n.catch(0),n.next=18,n.t0.message||JSON.stringify(n.t0)||"Unknown network error";case 18:return t=n.sent,n.next=21,Object(S.b)(b(">>".concat(t,"<<  ").concat("Fetch error. Check your network")));case 21:return n.next=23,new Promise((function(e){return setTimeout((function(){return e()}),5e3)}));case 23:return n.next=25,Object(S.b)({type:"FETCH_POSTS"});case 25:case"end":return n.stop()}}),w,null,[[0,14]])}function _(){return g.apply(this,arguments)}function g(){return(g=Object(h.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(y);case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var A=n(13),L=n(21),P=n(22),k=n(26),D=n(24),H=function(e){Object(k.a)(n,e);var t=Object(D.a)(n);function n(e){var a;return Object(L.a)(this,n),(a=t.call(this,e)).submitHandler=function(e){var t=a.state.title,n=a.props,r=n.createPost,c=n.showAlert;e.preventDefault(),t.length>1?(r({id:Date.now(),title:t}),a.setState({title:""})):(c("Title have to be more than one character"),a.setState({isShowAlert:!0}))},a.changeInputHandler=function(e){var t=e.currentTarget,n=t.name,r=t.value,c=a.state.isShowAlert,s=a.props.hideAlert;a.setState(Object(A.a)({},n,r)),c&&"title"===n&&r.length>1&&(s(),a.setState({isShowAlert:!1}))},a.state={title:"",isShowAlert:!1},a}return Object(P.a)(n,[{key:"render",value:function(){var e=this.state.title;return r.a.createElement("form",{onSubmit:this.submitHandler,className:"mb-5"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"title",className:"w-100 text-center"},r.a.createElement("h1",null,"Post title")),r.a.createElement("input",{id:"title",name:"title",type:"text",className:"form-control",placeholder:"Enter title of post",value:e,onChange:this.changeInputHandler})),r.a.createElement("button",{className:"btn btn-success w-100",type:"submit"},"Create post"))}}]),n}(r.a.PureComponent),R={createPost:function(e){return{type:"CREATE_POST",payload:e}},showAlert:b,hideAlert:O},C=Object(l.b)(null,R)(H),I=function(e){var t=e.post.title;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h2",{className:"card-title"},t)))},F=Object(l.b)((function(e){return{posts:e.posts.posts}}),null)((function(e){var t=e.posts;return r.a.createElement("div",{className:"d-flex flex-column justify-content-center"},r.a.createElement("h1",{className:"text-center"},"SYNC POSTS"),t.length>0?t.map((function(e){return r.a.createElement(I,{key:e.id,post:e})})):r.a.createElement("h5",null,"No one post"))})),W=function(){return r.a.createElement("div",{className:"spinner-border text-primary",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))},X=function(){var e=Object(l.d)((function(e){return{posts:e.posts.fetchedPosts,isLoading:e.app.isLoading}})),t=e.posts,n=e.isLoading,a=Object(l.c)();return t.length>0?r.a.createElement("div",{className:"d-flex flex-column justify-content-center"},r.a.createElement("h1",{className:"text-center"},"ASYNC POSTS"),t.map((function(e){return r.a.createElement(I,{key:e.id,post:e})}))):r.a.createElement("div",{className:"d-flex flex-column justify-content-center"},r.a.createElement("h1",{className:"text-center"},"ASYNC POSTS"),n?r.a.createElement("div",{className:"d-flex justify-content-center w-100 mt-4"},r.a.createElement(W,null)):r.a.createElement("button",{className:"btn btn-primary mt-4",onClick:function(){return a({type:"FETCH_POSTS"})}},"Fetch posts"))},J=function(){var e=Object(l.d)((function(e){return e.app.alert}));return e&&r.a.createElement("div",{className:"fixed-bottom alert alert-primary text-center",role:"alert"},e)};var U=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container mt-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement(C,null))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement(F,null)),r.a.createElement("div",{className:"col-md-6"},r.a.createElement(X,null)))),r.a.createElement(J,null))},Y=Object(i.a)(),V=Object(s.e)(E,Object(s.d)(Object(s.a)(o.a,(function(e){var t=e.dispatch;return function(e){return function(n){if("CREATE_POST"===n.type&&f.filter((function(e){return n.payload.title.includes(e)})).length)return t(b("Wow-wow, easy, Dirty mouth")),void setTimeout((function(){return t({type:"HIDE_ALERT"})}),3e3);return e(n)}}}),Y),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));Y.run(N),Object(c.render)(r.a.createElement(l.a,{store:V},r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null))),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.b60fbb69.chunk.js.map