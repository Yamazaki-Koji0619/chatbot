(this.webpackJsonpchatbot=this.webpackJsonpchatbot||[]).push([[0],{58:function(e,t,a){e.exports=a.p+"static/media/no-profile.a990286c.png"},59:function(e,t,a){e.exports=a.p+"static/media/mycat.3e47514a.jpeg"},76:function(e,t,a){e.exports=a(94)},81:function(e,t,a){},83:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(8),o=a.n(i),r=(a(81),a(43)),s=a.n(r),l=a(53),u=a(63),m=a(29),p=(a(83),function(e){return c.a.createElement("div",{className:"c-grid__answer"},e.answers.map((function(t,a){return c.a.createElement(E,{content:t.content,nextId:t.nextId,key:a.toString(),select:e.select})})))}),b=a(130),h=a(144),d=a(133),f=Object(b.a)((function(){return Object(h.a)({button:{borderColor:"#F3CA3E",color:"#F3CA3E",fontWeight:600,marginBottom:"8px","&:hover":{backgroundColor:"#F3CA3E",color:"#fff"}}})})),E=function(e){var t=f();return c.a.createElement(d.a,{className:t.button,variant:"outlined",onClick:function(){e.select(e.content,e.nextId)}},e.content)},v=a(135),g=Object(b.a)((function(){return Object(h.a)({chats:{height:400,padding:"0",overflow:"auto"}})})),O=function(e){var t=g();return c.a.createElement(v.a,{className:t.chats,id:"scroll-area"},e.chats.map((function(e,t){return c.a.createElement(S,{text:e.text,type:e.type,key:t.toString()})})))},j=a(136),w=a(137),y=a(145),C=a(58),k=a.n(C),x=a(59),N=a.n(x),S=function(e){var t="question"===e.type,a=t?"p-chat__row":"p-chat__reverse";return c.a.createElement(j.a,{className:a},c.a.createElement(w.a,null,t?c.a.createElement(y.a,{alt:"icon",src:N.a}):c.a.createElement(y.a,{alt:"icon",src:k.a})),c.a.createElement("div",{className:"p-chat__bubble"},e.text))},I=a(60),_=a(61),B=a(28),D=a(64),F=a(62),T=a(143),A=a(140),R=a(139),W=a(146),q=a(141),J=function(e){return c.a.createElement(q.a,{fullWidth:!0,label:e.label,margin:"dense",multiline:!0,rows:e.rows,value:e.value,type:e.type,onChange:e.onChange})},M=function(e){Object(D.a)(a,e);var t=Object(F.a)(a);function a(e){var n;return Object(I.a)(this,a),(n=t.call(this,e)).inputName=function(e){n.setState({name:e.target.value})},n.inputEmail=function(e){n.setState({email:e.target.value})},n.inputDiscription=function(e){n.setState({discription:e.target.value})},n.submitFrom=function(){var e={text:"\u304a\u554f\u3044\u5408\u308f\u305b\u304c\u3042\u308a\u307e\u3057\u305f\n\u304a\u540d\u524d:"+n.state.name+"\nEmail:"+n.state.email+"\n\u304a\u554f\u3044\u5408\u308f\u305b\u5185\u5bb9\n"+n.state.discription};fetch("https://hooks.slack.com/services/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",{method:"POST",body:JSON.stringify(e)}).then((function(){return alert("\u9001\u4fe1\u304c\u5b8c\u4e86\u3057\u307e\u3057\u305f\u3002\u8ffd\u3063\u3066\u3054\u9023\u7d61\u3057\u307e\u3059\uff01"),n.setState({name:"",email:"",discription:""}),n.props.handleClose()}))},n.state={name:"",email:"",description:""},n.inputName=n.inputName.bind(Object(B.a)(n)),n.inputEmail=n.inputEmail.bind(Object(B.a)(n)),n.inputDiscription=n.inputDiscription.bind(Object(B.a)(n)),n}return Object(_.a)(a,[{key:"render",value:function(){return c.a.createElement(T.a,{open:this.props.open,onClose:this.props.handleClose,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},c.a.createElement(W.a,{id:"alert-dialog-title"},"\u304a\u554f\u3044\u5408\u308f\u305b\u30d5\u30a9\u30fc\u30e0"),c.a.createElement(R.a,null,c.a.createElement(J,{label:"\u304a\u540d\u524d(\u5fc5\u9808)",multiline:!1,rows:1,value:this.state.name,type:"text",onChange:this.inputName}),c.a.createElement(J,{label:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9(\u5fc5\u9808)",multiline:!1,rows:1,value:this.state.email,type:"email",onChange:this.inputEmail}),c.a.createElement(J,{label:"\u304a\u554f\u3044\u5408\u308f\u305b\u5185\u5bb9(\u5fc5\u9808)",multiline:!0,rows:5,value:this.state.discription,type:"text",onChange:this.inputDiscription})),c.a.createElement(A.a,null,c.a.createElement(d.a,{onClick:this.props.handleClose,color:"primary"},"\u30ad\u30e3\u30f3\u30bb\u30eb"),c.a.createElement(d.a,{onClick:this.submitFrom,color:"primary",autoFocus:!0},"\u9001\u4fe1\u3059\u308b")))}}]),a}(c.a.Component),Y=a(44),z=a.n(Y),G=(a(90),{apiKey:"AIzaSyDmGtzmfKeKvHEOHtNYODORoYRTm1YXcnY",authDomain:"chatbot0619.firebaseapp.com",databaseURL:"https://chatbot0619.firebaseio.com",projectId:"chatbot0619",storageBucket:"chatbot0619.appspot.com",messagingSenderId:"609622800388",appId:"1:609622800388:web:912cacbb3cc67230945d51",measurementId:"G-B2M3021E3Q"});z.a.initializeApp(G);var H=z.a.firestore(),K=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],i=t[1],o=Object(n.useState)([]),r=Object(m.a)(o,2),b=r[0],h=r[1],d=Object(n.useState)("init"),f=Object(m.a)(d,2),E=f[0],v=f[1],g=Object(n.useState)({}),j=Object(m.a)(g,2),w=j[0],y=j[1],C=Object(n.useState)(!1),k=Object(m.a)(C,2),x=k[0],N=k[1],S=function(e,t){I({text:t.question,type:"question"}),i(t.answers),v(e)},I=function(e){h((function(t){return[].concat(Object(u.a)(t),[e])}))},_=function(){N(!0)},B=Object(n.useCallback)((function(){N(!1)}),[N]);return Object(n.useEffect)((function(){Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},e.next=3,H.collection("questions").get().then((function(e){e.forEach((function(e){var a=e.id,n=e.data();t[a]=n}))}));case 3:y(t),S(E,t[E]);case 5:case"end":return e.stop()}}),e)})))()}),[]),Object(n.useEffect)((function(){var e=document.getElementById("scroll-area");e&&(e.scrollTop=e.scrollHeight)})),c.a.createElement("section",{className:"c-section"},c.a.createElement("div",{className:"c-box"},c.a.createElement(O,{chats:b}),c.a.createElement(p,{answers:a,select:function(e,t){switch(!0){case"contact"===t:_();break;case/https:*/.test(t):var a=document.createElement("a");a.href=t,a.target="_blank",a.click();break;default:I({text:e,type:"answer"}),setTimeout((function(){return S(t,w[t])}),1e3)}}}),c.a.createElement(M,{open:x,handleClose:B})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[76,1,2]]]);
//# sourceMappingURL=main.7984cbc3.chunk.js.map