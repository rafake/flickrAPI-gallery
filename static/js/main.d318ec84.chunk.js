(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/blue-sky-clear-sky-cold-346529.a0e64787.jpg"},function(e,t,a){e.exports=a.p+"static/media/adventure-daylight-glacier-301391.3fe559ed.jpg"},function(e,t,a){e.exports=a.p+"static/media/daylight-environment-forest-459225.6aef47be.jpg"},function(e,t,a){e.exports=a.p+"static/media/flickr.f03cabed.svg"},,function(e,t,a){e.exports=a(25)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),c=a(9),s=a.n(c),r=(a(20),a(2)),i=a(3),l=a(6),p=a(4),h=a(5),m=(a(21),a(22),a(7)),u=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).handleClick=function(){if("function"==typeof a.props.openImage){var e={farm:a.props.farm,server:a.props.server,id:a.props.id,secret:a.props.secret};a.props.openImage(e)}},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("li",{className:"picture-item",onClick:this.handleClick},o.a.createElement("div",{className:"img-container"},o.a.createElement("img",{src:"https://farm".concat(this.props.farm,".staticflickr.com/").concat(this.props.server,"/").concat(this.props.id,"_").concat(this.props.secret,".jpg"),alt:""})))}}]),t}(o.a.Component),d=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"overlay-modal"},o.a.createElement("div",{className:"overlay-modal-bg"},o.a.createElement("img",{src:this.props.path,alt:""}),o.a.createElement("h2",null,"Author: ",this.props.author)),o.a.createElement("button",{className:"closeButton reset-Button",onClick:this.props.onClickClose},"Close"))}}]),t}(o.a.Component),f=a(14),g=a(10),b=a.n(g),v=a(11),k=a.n(v),_=a(12),y=a.n(_),j=a(13),E=a.n(j),N=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).openImage=function(e){console.log(e);var t="https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=67fa847a53bdc09b2db5c74c43d44b39&photo_id=".concat(e.id,"&format=json&nojsoncallback=1");fetch(t).then(function(e){return e.json()}).then(function(t){console.log(e.id),console.log(t),a.setState({isOpen:!0,author:t.photo.owner.username,description:t.photo.description._content,path:"https://farm".concat(e.farm,".staticflickr.com/").concat(e.server,"/").concat(e.id,"_").concat(e.secret,"_c.jpg")})})},a.onClickClose=function(){a.setState({isOpen:!1})},a.handleLoadMore=function(){var e=a.state.pageNo;e++,a.setState({pageNo:e}),console.log(a.state.pageNo);var t="";t=1==a.state.hasUpdated?"https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=67fa847a53bdc09b2db5c74c43d44b39&tags=".concat(a.state.currentTag,"&sort=interestingness-desc&content_type=1&per_page=20&page=").concat(a.state.pageNo,"&format=json&nojsoncallback=1"):"https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=67fa847a53bdc09b2db5c74c43d44b39&tags=".concat(a.props.type,"&sort=interestingness-desc&content_type=1&per_page=20&page=").concat(a.state.pageNo,"&format=json&nojsoncallback=1"),fetch(t).then(function(e){return e.json()}).then(function(e){console.log(t);var n=e.photos.photo,o=a.state.photos.concat(n);console.log(o),a.setState({photos:o})})},a.hoverEffectFunction=function(){new f.a({parent:document.querySelector(".my-div"),intensity:.3,image1:y.a,image2:k.a,displacementImage:b.a,speedIn:5})},a.state={photos:[],author:"",description:"",isOpen:!1,pageNo:2,value:"",tag:null,currentTag:"",hasUpdated:!1},a.handleChange=a.handleChange.bind(Object(m.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=67fa847a53bdc09b2db5c74c43d44b39&tags=".concat(this.props.type,"&sort=interestingness-desc&content_type=1&per_page=20&format=json&nojsoncallback=1");fetch(t).then(function(e){return e.json()}).then(function(t){return e.setState({photos:t.photos.photo})}),this.hoverEffectFunction()}},{key:"componentWillUpdate",value:function(e,t,a){var n=this;if(null!=t.tag){console.log(t);var o="https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=67fa847a53bdc09b2db5c74c43d44b39&tags=".concat(t.tag,"&sort=interestingness-desc&content_type=1&per_page=20&format=json&nojsoncallback=1");fetch(o).then(function(e){return e.json()}).then(function(e){return n.setState({photos:e.photos.photo})}),console.log(o),this.setState({tag:null}),this.setState({hasUpdated:!0}),this.setState({pageNo:2})}}},{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.setState({tag:this.state.value}),this.setState({currentTag:this.state.value}),setTimeout(function(){console.log(t.state.tag)},1e3)}},{key:"render",value:function(){var e=this,t=this.state.photos.map(function(t,a){return o.a.createElement(u,{key:a,farm:t.farm,server:t.server,id:t.id,secret:t.secret,openImage:e.openImage})});return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",null,o.a.createElement("div",{className:"header__menuWrapper"},o.a.createElement("div",{className:"header__innerWrapper"},o.a.createElement("h1",null,"fetching photos from ",o.a.createElement("a",{href:"https://www.flickr.com/services/api/",target:"_blank",className:"header__link header__link--flickr"},o.a.createElement("i",null,"flickr API")),o.a.createElement("img",{src:E.a,className:"fi-flickr"})),o.a.createElement("a",{href:"https://rafake.github.io/",target:"_blank",className:"header__link"},"visit ",o.a.createElement("i",null,"rafake.github.io"))))),o.a.createElement("div",{className:"hero__wrapper"},o.a.createElement("div",{className:"hero__insideWrapper"},o.a.createElement("div",{className:"my-div"}))),o.a.createElement("main",{className:"gallery__outerWrapper"},o.a.createElement("section",{className:"gallery__innerWrapper"},o.a.createElement("form",{onSubmit:this.handleSubmit,className:"gallery__form"},o.a.createElement("label",{className:"gallery__label"},"Enter the keyword",o.a.createElement("input",{type:"text",value:this.state.value,onChange:this.handleChange,className:"gallery__inputField"})),o.a.createElement("input",{type:"submit",value:"Enter",className:"gallery__inputButton"})),o.a.createElement("div",{className:"gallery"},o.a.createElement("ul",null,t)),this.state.isOpen&&o.a.createElement(d,{author:this.state.author,path:this.state.path,description:this.state.description,onClickClose:this.onClickClose,className:"modalInvisible"}))),o.a.createElement("footer",null,o.a.createElement("button",{className:"footer__loadMore",onClick:this.handleLoadMore},"Load more")))}}]),t}(o.a.Component),O=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).state={thingSearch:"hej"},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(N,{type:"sailing"}))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));document.addEventListener("DOMContentLoaded",function(){s.a.render(o.a.createElement(O,null),document.getElementById("root"))}),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[15,1,2]]]);
//# sourceMappingURL=main.d318ec84.chunk.js.map