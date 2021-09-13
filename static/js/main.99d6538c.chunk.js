(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(7),i=n.n(r),s=(n(14),n(9)),o=n(2),u=n(3),l=n(5),b=n(4),d=n(19),j=n(0),m=function(t){var e=t.contacts,n=t.onDeleteContacts;return Object(j.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(j.jsxs)("li",{children:[Object(j.jsxs)("p",{children:[a,": ",c]}),Object(j.jsx)("button",{type:"button",onClick:function(){n(e)},children:"Delete"})]},e)}))})},h=function(t){var e=t.value,n=t.onChange;return Object(j.jsxs)("label",{children:["Find contacts by name",Object(j.jsx)("input",{type:"text",value:e,onChange:n})]})},f=n(8),p=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(f.a)({},a,c))},t.handlSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{onSubmit:this.handlSubmit,children:[Object(j.jsxs)("label",{children:["Name",Object(j.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(j.jsxs)("label",{children:["Number",Object(j.jsx)("input",{type:"tel",name:"number",value:this.state.number,onChange:this.handleChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(j.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component),O=(n(16),function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){var n=e.name,a=e.number,c={id:Object(d.a)(),name:n,number:a};t.state.contacts.map((function(t){return t.name})).includes(n)?alert("".concat(n," is already in contacts")):t.setState((function(t){return{contacts:[c].concat(Object(s.a)(t.contacts))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.filterContacts=function(e){t.setState({filter:e.target.value})},t.getVisibleContacts=function(){var e=t.state.filter.toLowerCase();return t.state.contacts.filter((function(t){return t.name.toLowerCase().includes(e)}))},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(p,{onSubmit:this.addContact}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(h,{value:this.state.filter,onChange:this.filterContacts}),Object(j.jsx)(m,{contacts:this.getVisibleContacts(),onDeleteContacts:this.deleteContact})]})}}]),n}(a.Component)),C=O;i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.99d6538c.chunk.js.map