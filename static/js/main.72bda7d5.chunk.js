(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(t,e,s){t.exports={statistics:"Statistics_statistics__2Tztp",stats:"Statistics_stats__1V8hS",total:"Statistics_total__19bXl",positive:"Statistics_positive__2rCo- Statistics_total__19bXl"}},,,,,,function(t,e,s){t.exports={section:"Section_section__2qGVm"}},function(t,e,s){t.exports={options:"FeedbackOptions_options__1slD5"}},function(t,e,s){t.exports={message:"Notification_message__2MKvG"}},,,,,,,function(t,e,s){},,function(t,e,s){"use strict";s.r(e);var a=s(1),c=s.n(a),n=s(4),i=s.n(n),o=(s(17),s(5)),r=s(6),d=s(7),l=s(12),b=s(11),u=s(8),j=s.n(u),h=s(0);var v=function(t){var e=t.children,s=t.title;return Object(h.jsxs)("div",{className:j.a.section,children:[Object(h.jsx)("h1",{children:s}),e]})},p=s(9),f=s.n(p);var O=function(t){var e=t.options,s=t.onLeaveFeedback;return Object(h.jsx)("div",{className:f.a.options,children:Object.keys(e).map((function(t){return Object(h.jsx)("button",{name:t,onClick:function(){return s(t)},children:t},t)}))})},x=s(10),_=s.n(x);var k=function(t){var e=t.message;return Object(h.jsx)("p",{className:_.a.message,children:e})},g=s(2),m=s.n(g);var F=function(t){var e=t.good,s=t.neutral,a=t.bad,c=t.total,n=t.positivePercentage;return Object(h.jsxs)("div",{className:m.a.statistics,children:[Object(h.jsx)("h2",{children:"Statistics"}),c>0?Object(h.jsxs)("div",{children:[Object(h.jsxs)("ul",{className:m.a.stats,children:[Object(h.jsxs)("li",{children:["Good: ",e]}),Object(h.jsxs)("li",{children:["Neutral: ",s]}),Object(h.jsxs)("li",{children:["Bad: ",a]})]}),Object(h.jsxs)("p",{className:m.a.total,children:["Total feedbacks: ",c]}),Object(h.jsxs)("p",{className:m.a.positive,children:["Positive feedbacks: ",n,"%"]})]}):Object(h.jsx)(k,{message:"No feedback given"})]})},N=function(t){Object(l.a)(s,t);var e=Object(b.a)(s);function s(){var t;Object(r.a)(this,s);for(var a=arguments.length,c=new Array(a),n=0;n<a;n++)c[n]=arguments[n];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.addFeedback=function(e){t.setState((function(t){return Object(o.a)({},e,t[e]+1)}))},t.countTotalFeedback=function(){return t.state.good+t.state.neutral+t.state.bad},t.countPositiveFeedbackPercentage=function(){return(t.state.good/t.countTotalFeedback()*100).toFixed(2)},t}return Object(d.a)(s,[{key:"render",value:function(){var t=this.state,e=t.good,s=t.neutral,a=t.bad;return Object(h.jsxs)(v,{title:"Please leave a feedback",children:[Object(h.jsx)(O,{options:this.state,onLeaveFeedback:this.addFeedback}),Object(h.jsx)(F,{good:e,neutral:s,bad:a,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})]})}}]),s}(a.Component),S=N;i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.72bda7d5.chunk.js.map