(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{"3L6z":function(e,t,a){"use strict";var n=a("pVnL"),s=a.n(n),i=a("QILm"),r=a.n(i),c=a("cDcd"),l=a.n(c),o=a("KYPV"),m=a("W6q9");t.a=function(e){const t=e.name,a=e.validate,n=e.onChange,i=(e.value,r()(e,["name","validate","onChange","value"]));return l.a.createElement(o.b,{name:t,validate:a,render:e=>{let t=e.field,a=e.form;const r=t.name,c=t.value,o=a.touched,d=a.errors,u=o[r]&&d[r],p=()=>{a.setFieldTouched(r,!0)};return l.a.createElement(m.a,s()({},t,{value:c,onChange:function(e){if(p(),a.setFieldValue(r,e),n){for(var t=arguments.length,s=new Array(t>1?t-1:0),i=1;i<t;i++)s[i-1]=arguments[i];n(e,...s)}},error:u},i))}})}},"6l/H":function(e,t,a){},ACly:function(e,t,a){"use strict";var n=a("lSNA"),s=a.n(n),i=a("cDcd"),r=a.n(i),c=a("17x9"),l=a.n(c),o=a("2VWb"),m=a("TSYQ"),d=a.n(m),u=a("EfbJ"),p=a("ZaSc"),h=a("eOGF");a("6l/H");Object(h.P)(["feedback/feedback.*.svg"]);const b=[{text:"Awesome, tell us more!",rating:1,icon:"like",title:"Like it"},{text:"Tell us more",rating:2,icon:"cantsay",title:"Maybe"},{text:"Tell us what went wrong",rating:3,icon:"no",title:"No"}],v=e=>{const t=e.selected,a=(e.clickHandler,e.title),n=e.icon,s=e.assetPath;return r.a.createElement("li",{className:d()("rating",{selected:t},n),onClick:()=>{e.clickHandler(e.idxVal)}},r.a.createElement("div",{className:"feedback-img"},r.a.createElement("span",{className:"overlay"}),r.a.createElement("img",{src:s(`feedback/feedback-${n}.svg`),className:"feedback-icon"})),r.a.createElement("div",{className:"feedback-title"},a))};class g extends r.a.Component{constructor(e){super(e),s()(this,"state",void 0),s()(this,"updateSelection",e=>{this.setState({selectedRating:e},()=>{this.submitForm()})}),s()(this,"updateComment",e=>{this.setState({comment:e.target.value})}),s()(this,"submitForm",e=>{e&&this.setState({submitting:!0});const t=this.state,a=t.selectedRating,n=t.comment,s=this.props,i=s.postUrl,r=s.onSubmit,c=s.featureId,l=s.appUtil.location.pathname;Object(p.g)({url:i,data:{rating:a+1,description:n,path:l},loadingMessage:!1,success:()=>{e&&(this.setState({submitted:!0}),r&&r(c))},error:()=>{this.setState({submitting:!1})}})}),s()(this,"renderFeedbackContainer",()=>{const e=this.props,t=e.className,a=e.theme,n=this.state.submitted;return r.a.createElement("div",{className:d()("feedback-modal",t,a)},n?this.renderThanks():this.renderFeedBack())}),this.state={selectedRating:"",comment:"",submitted:!1,submitting:!1}}componentDidMount(){const e=this.props,t=e.featureId,a=e.onSeen;a&&a(t)}renderFeedBack(){const e=this.props,t=e.appUtil.assetPath,a=e.title,n=e.name,s=e.desc,i=e.onClose,c=e.theme,l=this.state,o=l.selectedRating,m=l.comment,u=(l.submitted,l.submitting),p="theme-m"===c?"ui-btn ui-btn-primary":d()("btn btn-primary btn-flat",{disabled:u}),h="theme-m"===c?"ui-icon-cross":"icon-cancel-small";return r.a.createElement("div",null,r.a.createElement("div",{className:"cancel-icon",onClick:i},r.a.createElement("i",{className:h})),r.a.createElement("div",{className:"banner-img"},r.a.createElement("img",{src:t(`feedback/feedback-banner-${n}.svg`),className:"feedback-banner"})),r.a.createElement("h1",{className:"feedback-main-title mdT mdB"},a),s&&r.a.createElement("div",{className:"msT msB feedback-description-light"},s),r.a.createElement("div",{className:"ratings"},r.a.createElement("ul",null,b.map((e,a)=>r.a.createElement(v,{onClick:this.updateSelection,title:e.title,className:b[o],icon:e.icon,key:a,idxVal:a,clickHandler:this.updateSelection,assetPath:t,selected:e.rating===o+1})))),r.a.createElement("div",{className:"selected-rating"},b[o]&&b[o].text),"number"==typeof o&&r.a.createElement("div",{className:"submit-form"},r.a.createElement("div",{className:"input-area"},r.a.createElement("textarea",{className:"txt-area",placeholder:"Write a comment (optional)",onChange:this.updateComment,value:m})),r.a.createElement("button",{className:p,onClick:this.submitForm.bind(null,!0)},u?"Submitting..":"Submit")))}renderThanks(){return r.a.createElement("div",{className:"feedback-thanks"},r.a.createElement("div",{className:"thanks-icon"},r.a.createElement("i",{className:"icon-thumbs-up"})),r.a.createElement("div",{className:"thanks-title"},"Thanks for your feedback!"))}render(){const e=this.props,t=e.onClose,a=e.isStandalone;return r.a.createElement("div",null,a?this.renderFeedbackContainer():r.a.createElement(o.a,{open:!0,onClose:t,modalClass:"feedback-modal-wrapper"},this.renderFeedbackContainer()))}}s()(g,"defaultProps",{title:"Love our new upgrade?",name:"default"}),s()(g,"propTypes",{onClose:l.a.func,featureId:l.a.number.isRequired,postUrl:l.a.string.isRequired,theme:l.a.string}),t.a=Object(u.a)(g)},ATA6:function(e,t,a){},AsEK:function(e,t,a){},"D/k7":function(e,t,a){},RFm5:function(e,t,a){"use strict";a("tUrg");var n=a("pVnL"),s=a.n(n),i=a("QILm"),r=a.n(i),c=a("cDcd"),l=a.n(c),o=a("17x9"),m=a.n(o),d=a("MGin"),u=a("TSYQ"),p=a.n(u),h=a("foLx"),b=a("OEX3");a("D/k7");function v(e){const t=e.primary,a=e.link,n=e.itemImage,i=e.title,c=e.subText,o=e.description,m=e.ctaContainer,u=e.buttonText,v=e.disabled,g=e.customHtml,f=e.active,E=r()(e,["primary","link","itemImage","title","subText","description","ctaContainer","buttonText","disabled","customHtml","active"]),k=o?"align-self-end":"align-self-center",N=t?"ui-btn-primary":"ui-btn-line-primary";return l.a.createElement(d.Link,s()({className:p()("base-list-item",{"base-list-item-primary":t,active:f}),disabled:v,to:a},E),l.a.createElement(h.a,{name:i,size:60,avatarClass:"base-list-item-image",avatar:n,alt:i+" logo"}),l.a.createElement("div",{className:"base-list-item-content"},i&&l.a.createElement("h3",{className:"base-list-item-title"},i),c&&l.a.createElement("div",{className:"base-list-item-text base-list-item-sub-text"},c),o&&l.a.createElement("div",{className:"base-list-item-text base-list-item-description"},o),g),m||u&&l.a.createElement(b.h,{className:p()("base-list-item-btn",N,k),disabled:v},u))}v.propTypes={primary:m.a.bool,disabled:m.a.bool,link:m.a.string,itemImage:m.a.string,title:m.a.oneOfType([m.a.string,m.a.element]),subText:m.a.oneOfType([m.a.string,m.a.element]),description:m.a.oneOfType([m.a.string,m.a.element]),ctaContainer:m.a.element,buttonText:m.a.string,customHtml:m.a.element,active:m.a.bool},t.a=v},WrgV:function(e,t,a){"use strict";var n=a("pVnL"),s=a.n(n),i=a("MVZn"),r=a.n(i),c=a("QILm"),l=a.n(c),o=a("cDcd"),m=a.n(o);a("Jkfs");t.a=e=>{let t=e.className,a=void 0===t?"":t,n=l()(e,["className"]);return n=r()({},n,{className:a+" ui-svg-icon"}),m.a.createElement("svg",s()({viewBox:"0 0 24 24",width:"1em",height:"1em"},n,{fill:"currentColor"}),null,m.a.createElement("g",null,m.a.createElement("g",null,m.a.createElement("path",{d:"M12 1c-5.1 0-9.3 4.1-9.4 9.2 0 6.8 8.5 12.5 8.8 12.7.3.2.7.2 1 0 .4-.2 8.8-5.8 8.8-12.7C21.3 5.1 17.1 1 12 1zm0 20c-1.8-1.3-7.5-5.8-7.5-10.8 0-4.1 3.4-7.4 7.5-7.3 4.1 0 7.4 3.3 7.5 7.3 0 4.9-5.7 9.5-7.5 10.8z"}),m.a.createElement("path",{d:"M12 6.5c-2 0-3.6 1.7-3.6 3.7s1.7 3.6 3.7 3.6 3.6-1.7 3.6-3.7S14 6.5 12 6.5zm0 5.5c-1 0-1.8-.9-1.8-1.9 0-1 .9-1.8 1.9-1.8 1 0 1.8.8 1.8 1.8 0 1.1-.9 1.9-1.9 1.9z"}))))}},YZNL:function(e,t,a){"use strict";var n=a("pVnL"),s=a.n(n),i=a("QILm"),r=a.n(i),c=a("cDcd"),l=a.n(c),o=a("TSYQ"),m=a.n(o);a("AsEK");function d(e){const t=e.title,a=e.layer,n=e.active,i=e.className,c=e.children,o=e.headingLevel,d=r()(e,["title","layer","active","className","children","headingLevel"]),u="h"+o;return l.a.createElement("div",s()({className:m()("ui-card",i,"ui-layer-"+a,{"active-card":n})},d),t&&l.a.createElement(u,{className:"ui-title text-sec-headline-xs"},t),l.a.createElement("div",{className:"card-content"},c))}d.defaultProps={title:"",layer:2,active:!1,headingLevel:2},t.a=d},aJtI:function(e,t,a){"use strict";var n=a("pVnL"),s=a.n(n),i=a("lSNA"),r=a.n(i),c=a("cDcd"),l=a.n(c),o=a("MVZn"),m=a.n(o),d=a("eOGF");const u={idle:!0,activeConnections:["wifi","ethernet","3g","4g","__na__"]};function p(e){return function(t){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!e.HR||"function"!=typeof e.HR.preloadPageData)return;const n=m()({},u,{},a),s=n.activeConnections||[],i=e.navigator.connection||e.navigator.mozConnection||e.navigator.webkitConnection||{},r=i.effectiveType||i.type||"__na__";if(!i.saveData&&s.includes(r)){const a=()=>e.HR.preloadPageData(t);n.idle&&"function"==typeof e.requestIdleCallback?e.requestIdleCallback(a):e.setTimeout(a,0)}}}var h=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(Object(d.H)())throw new Error("This method is meant to be used on client side only. In isomorphic code use connectAppUtil.");const a=p(window);a(e,t)},b=a("jNdJ");class v extends c.Component{constructor(){super(...arguments),r()(this,"hasPrefetched",!1),r()(this,"handleScroll",e=>{let t=e.isIntersecting;const a=this.props.shouldPrefetch;if(!this.hasPrefetched&&a&&t){const e=this.props.url;h(e),this.hasPrefetched=!0}})}render(){return l.a.createElement(b.a,s()({onChange:this.handleScroll},this.props))}}r()(v,"defaultProps",{threshold:.5,shouldPrefetch:!0});t.a=v},jrqA:function(e,t,a){"use strict";var n=a("pVnL"),s=a.n(n),i=a("lSNA"),r=a.n(i),c=a("cDcd"),l=a.n(c),o=a("17x9"),m=a.n(o),d=a("ANjH"),u=a("wd/R"),p=a.n(u),h=a("TSYQ"),b=a.n(h),v=a("RFm5"),g=a("LH1X"),f=a("EfbJ");a("ATA6");function E(e){return e.startsWith("/work/sourcing/career-fair")?"/work/sourcing/career-fair":"/work/sourcing"}class k extends c.PureComponent{constructor(){super(...arguments),r()(this,"activatedKeys",[])}isConversationEmpty(){return 0===this.props.conversations.length}renderEmptyConversationMessage(){return l.a.createElement("div",{className:"empty-state"},l.a.createElement("h3",{className:"empty-heading"},"Nothing here yet."),l.a.createElement("p",{className:"empty-sub-heading"},"Messages from interested employers will appear here"))}renderTimeStampBlock(e,t){const a=p()(e).local().format("MMMM Do, HH:mm A"),n=["indicator-icon",{"ui-icon-circle-filled":t,"ui-icon-circle":!t}];return l.a.createElement("div",{className:"timestamp"},l.a.createElement("span",null,a),l.a.createElement("i",{className:b()(n)}))}isHacker(){return"hacker"===this.props.isomorphicCookies.get("user_type")}isConversationActive(e){return this.props.currentConversationId===e}renderConversationList(){const e=this.props,t=e.conversations,a=e.appUtil.location.pathname;return t.map(e=>{const t=this.isHacker(),n=e.last_message_activity,i=e.unique_id,r=e.recruiter_fields,c=r.name,o=r.company_name,m=r.company_logo,d=e.hacker_fields.name,u=e.message_preview,p=u.has_unread_messages,h=u.headline,b=this.isConversationActive(i);b&&this.activatedKeys.push(i);const g=p&&!(this.activatedKeys.indexOf(i)>-1),f={title:t?`${c} @ ${o}`:d,subText:t?"Re: "+h:"",link:t?"/jobs/dashboard/messages/"+i:`${E(a)}/messages/${i}`,customHtml:this.renderTimeStampBlock(n,g),itemImage:t?m:void 0,active:b&&!t};return l.a.createElement(v.a,s()({key:i},f,{"data-analytics":"ConversationView","data-attr1":i}))})}render(){const e=this.isConversationEmpty();return l.a.createElement("div",{className:b()("conversation-component",{"no-messages":e})},e?this.renderEmptyConversationMessage():this.renderConversationList())}}r()(k,"propTypes",{conversations:m.a.array.isRequired,currentConversationId:m.a.string,isomorphicCookies:m.a.object.isRequired}),t.a=Object(d.d)(g.a,f.a)(k)}}]);
//# sourceMappingURL=https://hrcdn.net/community-frontend/assets/sourcemaps/modules~hackerrank_r_jobs-584106dc.js.map