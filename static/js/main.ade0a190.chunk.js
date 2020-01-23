(this["webpackJsonpkc-git-browswer-sandbox"]=this["webpackJsonpkc-git-browswer-sandbox"]||[]).push([[0],{44:function(e,t,a){e.exports=a(57)},49:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(21),c=a.n(l),s=(a(32),a(49),a(15)),u=a(16),o=a(18),i=a(17),m=a(19),h=a(25),p=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement(h.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},n.a.createElement(h.a.Brand,{href:"#home"},this.props.title),n.a.createElement(h.a.Toggle,{"aria-controls":"responsive-navbar-nav"}))}}]),t}(r.Component),E=a(36),f=a(42),d=a(28),g=a(22),v=a(43),b=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.a.createElement(f.a,{onSubmit:this.props.onSubmitRepoSearch},n.a.createElement(d.a,{className:"mb-3",controlId:"searchText"},n.a.createElement(g.a,{id:"searchText",placeholder:"GIT username","aria-label":"GIT username","aria-describedby":"searchText",onBlur:this.props.onChangeUserName}),n.a.createElement(d.a.Append,{controlId:"searchButton"},n.a.createElement(E.a,{variant:"outline-secondary",id:"searchButton",type:"submit"},n.a.createElement(v.a,null)," Search"))))}}]),t}(r.Component),R=a(38),y=a(14);var U=function(e){return function(e,t){var a=[];if(e){var r;if(a.push(n.a.createElement(y.a.Item,{key:"search",href:"/userSearch"},"User Search")),t)a.push(n.a.createElement(y.a.Item,{key:"name",href:"/"},null!==(r=e.name)&&void 0!==r?r:e.login)),a.push(n.a.createElement(y.a.Item,{key:"repos",href:"",active:"true"},"Repos"));else a.push(n.a.createElement(y.a.Item,{href:"/",key:"name",active:"true"},e.name)),a.push(n.a.createElement(y.a.Item,{key:"repos",href:"/userRepos"},"Repos"))}else a.push(n.a.createElement(y.a.Item,{href:"",key:"search",active:"true"},"User Search"));return n.a.createElement(y.a,null,a)}(e.userData,e.userRepoList)},S=a(7);function k(e){var t;if(e.userRepoList){var a=e.userRepoList.map((function(e,t){return function(e,t){return n.a.createElement(S.a,{key:e.id,bg:"light",style:{width:"18rem"}},n.a.createElement(S.a.Body,null,n.a.createElement(S.a.Title,null,e.name),n.a.createElement(S.a.Text,null,e.description),n.a.createElement(S.a.Link,{target:"_new",href:e.html_url},e.html_url)))}(e)}));t=n.a.createElement("section",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gridGap:"1rem"}},a)}else t=n.a.createElement("section",null);return t}function x(e){return e.userData&&(t=e.userData,n.a.createElement(S.a,{bg:"light",style:{width:"18rem"}},n.a.createElement(S.a.Img,{variant:"top",src:t.avatar_url}),n.a.createElement(S.a.Body,null,n.a.createElement(S.a.Title,null,t.name),n.a.createElement(S.a.Text,null,n.a.createElement(S.a.Link,{target:"_new",href:t.html_url},t.html_url))),n.a.createElement(S.a.Footer,null,n.a.createElement("small",null,t.created_at))));var t}var j=a(37),w=a(20);function L(e){return e.userData&&function(e,t){var a=n.a.createElement(j.a,null,n.a.createElement(w.a,{sm:4,style:{minWidth:"300px"}},n.a.createElement(x,{userData:e})),n.a.createElement(w.a,{sm:8},n.a.createElement("h4",{style:{marginBottom:"40px",borderBottom:"1px solid #e0e0e0",padding:"10px"}},t&&"Repos"),n.a.createElement(k,{userRepoList:t})));return e?a:n.a.createElement("div",{style:{padding:"10px"}})}(e.userData,e.userRepoList)}var D=function(e){function t(e){var a,r;return Object(s.a)(this,t),(r=Object(o.a)(this,Object(i.a)(t).call(this,e))).state={userNameSearch:"",userData:null,usersData:null,userRepoList:null},r.onChangeUserName=function(e){var t=e.target.value;r.loadUser(t)},r.onSubmitRepoSearch=function(e){e.preventDefault();var t=e.target.value;r.loadUser(t)},r.getUserUrl=function(e){return"https://api.github.com/users/".concat(e)},r.getUsersUrl=function(e,t){var a=null!==t&&void 0!==t?t:1;return"https://api.github.com/users?since=".concat(null!==e&&void 0!==e?e:1,"&per_page=").concat(a)},r.getUserReposUrl=function(e){return"https://api.github.com/users/".concat(e,"/repos")},r.loadUser=function(e){if(e){var t=r.getUserUrl(e);fetch(t).then((function(e){if(e.ok)return e.json();throw new Error("Request failed.")})).then((function(t){r.setState({userData:t,userNameSearch:e}),r.loadUserRepoList(e)})).catch((function(e){console.log(e)}))}},r.loadUserRepoList=function(e){if(e){var t=r.getUserReposUrl(e);fetch(t).then((function(e){if(e.ok)return e.json();throw new Error("Request failed.")})).then((function(e){console.log("Load User Repo List"),console.log(e),r.setState({userRepoList:e})})).catch((function(e){console.log(e)}))}},r.state.view=null!==(a=r.props.view)&&void 0!==a?a:"home",r}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return n.a.createElement(R.a,null,n.a.createElement(U,{userData:this.state.userData,userRepoList:this.state.userRepoList}),n.a.createElement(b,{onSubmitRepoSearch:this.onSubmitRepoSearch,onChangeUserName:this.onChangeUserName,userName:this.state.userNameSearch}),n.a.createElement(L,{userData:this.state.userData,userRepoList:this.state.userRepoList}))}}]),t}(r.Component),O=a(39),I=a(12);function T(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(p,{title:"GIT Browser"}),n.a.createElement(D,null))}function B(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(p,{title:"GIT User Search"}),n.a.createElement(D,null))}function N(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(p,{title:"GIT User Search Results"}),n.a.createElement(D,null))}function _(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(p,{title:"Display Users"}),n.a.createElement(D,null))}var C=function(){return n.a.createElement(O.a,null,n.a.createElement("div",null,n.a.createElement(I.a,{exact:!0,path:"/",component:T}),n.a.createElement(I.a,{exact:!0,path:"/userSearch",component:B}),n.a.createElement(I.a,{exact:!0,path:"/userSearchResults",component:N}),n.a.createElement(I.a,{exact:!0,path:"/users",component:_})))},G=document.getElementById("root");c.a.render(n.a.createElement(C,null),G)}},[[44,1,2]]]);
//# sourceMappingURL=main.ade0a190.chunk.js.map