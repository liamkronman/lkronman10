(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{"5/Ko":function(e,a,t){},Gkn0:function(e,a,t){},NgMQ:function(e,a,t){},S7zJ:function(e,a,t){},V9bm:function(e,a,t){},aCTs:function(e,a,t){},ndSB:function(e,a,t){},rO8H:function(e,a,t){"use strict";t.r(a);var r=t("pVnL"),s=t.n(r),i=t("MVZn"),n=t.n(i),o=(t("rGqo"),t("lSNA")),l=t.n(o),c=t("cDcd"),m=t.n(c),d=t("ANjH"),u=t("17x9"),p=t.n(u),b=t("/MKj"),g=t("Wwog"),h=t("Uz+i"),k=t("V7ES"),f=t("fe33"),E=t("BtRI"),v=t("TSYQ"),T=t.n(v),y=t("5J+W"),N=t("7lYa"),R=t("CFIE");function w(e){const a=e.badge,t=Object(R.i)(a);return m.a.createElement("div",{className:"skill-progress-bar"},m.a.createElement(N.a,{value:t,theme:"theme-m"}),m.a.createElement("div",{className:"progress-count text-content"},m.a.createElement("span",{className:"percentage"},t,"%"),m.a.createElement("span",{className:"points-left"},Object(R.a)(a,"dashboard"))))}w.propTypes={badge:p.a.object};var j=t("PsEu"),_=t("eUGL"),I=t("eOGF"),P=t("oBtd"),S=t("Z/B0");t("V9bm"),t("ndSB");class O extends c.PureComponent{constructor(){super(...arguments),l()(this,"sendMetrics",e=>{const a=this.props,t=a.track,r=a.position,s=t.type,i=t.slug,o=t.badge_type,l=t.level,c=t.stars,m=!!e.target.closest("button")?"button":"card";let d;d="badge"===s?{attribute1:o,attribute2:l,attribute3:c}:{attribute1:i},P.a.batch_track("Click","BadgeTrackResumePractice",n()({},d,{attribute4:m,attribute8:r}))})}getLink(){const e=this.props.track,a=e.type,t=e.slug,r=e.taxonomy;return e.slug===S.j.INTERVIEW_PREPARATION_KIT?"/interview/"+S.j.INTERVIEW_PREPARATION_KIT:"branding"===a?"/interview/"+t:"badge"===a?Object(R.e)(e):Object(I.a)(`/domains/${"tutorial"===r?"tutorials/":""}${t}`,{filters:{status:["unsolved"]}})}trackToBadgeConverter(e){const a=e.slug===S.j.INTERVIEW_PREPARATION_KIT;return n()({},e,{badge_type:e.slug,badge_name:e.name,stars:0,level:0,total_challenges:e.total_challenges||e.challenges_count,category_name:a?"Interview Preparation":e.category_name})}render(){const e=this.props,a=e.track,t=e.primary,r=e.className,s=e.appUtil,i=a.type,n=this.getLink(),o=["track","branding"].includes(i)?this.trackToBadgeConverter(a):a,l=o.slug===S.j.INTERVIEW_PREPARATION_KIT;return m.a.createElement("div",{className:T()("skill-progress-card",r,{"interview-promotion-card":l})},m.a.createElement(_.a,{cardTitle:o.category_name,primaryCard:t,title:o.badge_name,detail:m.a.createElement(w,{badge:o}),buttonText:"Continue Practice",buttonClass:T()("ui-btn-large",t?"ui-btn-primary":"ui-btn-line-primary"),onClick:this.sendMetrics,link:n}),"badge"===o.type&&m.a.createElement("div",{className:"badge-wrap"},m.a.createElement(j.a,{badge:o,shadow:!0})),l&&m.a.createElement("div",{className:"interview-banner"},m.a.createElement("img",{className:"new-banner-svg",alt:"New",src:s.assetPath("svgs/new-banner.svg")})))}}l()(O,"propTypes",{track:p.a.object,primary:p.a.bool,appUtil:p.a.object.isRequired,position:p.a.number});var A=O=Object(y.a)(O);class C extends c.PureComponent{getContent(){return this.props.hasRecent?"HackerRank offers a variety of skills for you to practice. Feel free to choose an additional programming language too.":"Explore and add your first skill to get started. HackerRank offers a variety of skills, tracks and tutorials for you to learn and improve."}render(){const e=this.props,a=e.text,t=e.hasRecent,r=e.className,s=e.position,i=this.getContent();return m.a.createElement("div",{className:T()("explore-skill-card",r)},m.a.createElement(_.a,{cardTitle:a,title:t?"Add another skill":"Add your first skill",detail:i,buttonText:"Explore Skills",buttonClass:"ui-btn-large ui-btn-line-primary",onClick:this.props.animateToSkills,"data-analytics":t?"AddAnotherSkill":"AddFirstSkill","data-attr8":s}))}}l()(C,"propTypes",{text:p.a.string.isRequired,hasRecent:p.a.bool.isRequired,animateToSkills:p.a.func.isRequired,position:p.a.number}),l()(C,"defaultProps",{text:"",hasRecent:!1});var q=C;class x extends m.a.Component{constructor(){super(...arguments),l()(this,"updateInterviewTryStatus",()=>{const e=this.props,a=e.profile,t=e.profileActions;a&&a.username&&!a.tried_interview_prep&&t.updateProfile("me",{tried_interview_prep:!0})})}render(){const e=this.props,a=e.className,t=e.appUtil,r=e.position;return m.a.createElement("div",{className:T()("interview-promotion-card",a),onClick:this.updateInterviewTryStatus},m.a.createElement("div",{className:"interview-banner"},m.a.createElement("img",{className:"new-banner-svg",alt:"New",src:t.assetPath("svgs/new-banner.svg")})),m.a.createElement(_.a,{cardTitle:"Interview Preparation",title:"Interview Preparation Kit",detail:"Curated challenges and tips based on learnings from 1000+ companies to help you prepare for your upcoming interviews.",buttonText:"View",buttonClass:"ui-btn-large ui-btn-primary",link:"/interview/"+S.j.INTERVIEW_PREPARATION_KIT,"data-analytics":"InterviewPromotionCard","data-attr8":r}))}}l()(x,"propTypes",{className:p.a.string,profileActions:p.a.object.isRequired,profile:p.a.object.isRequired,appUtil:p.a.object.isRequired,position:p.a.number});var V=x=Object(d.d)(y.a,Object(b.c)(null,e=>({profileActions:Object(d.b)(f.a,e)})))(x),J=t("KJde"),M=t.n(J);t("NgMQ");class G extends c.PureComponent{getInterviewPreparationDetails(){return{short_description:"Curated challenges and tips based on learnings from 1000+ companies to help you prepare",short_name:"Interview Preparation Kit",title:"Interview Preparation",slug:S.j.INTERVIEW_PREPARATION_KIT}}renderTutorialCard(e){const a=e.title,t=e.slug,r=e.short_description,s=e.tagline,i=e.is_recent,n=e.short_name,o=e.name;let l,c,d;t===S.j.INTERVIEW_PREPARATION_KIT?(d="/interview",c="ViewTutorial",l="View Tutorial"):(d="/domains/tutorials/"+t,c=i?"ResumeTutorial":"StartTutorial",l=i?"Resume Tutorial":"Start Tutorial");const u=m.a.createElement("div",null,m.a.createElement("div",{className:"tutorial-content text-content"},m.a.createElement(M.a,{text:r||s,maxLine:"2",ellipsis:"...",basedOn:"letters"})),m.a.createElement("div",{className:"start-tutorial bold"},l));return m.a.createElement("div",{key:t,className:"tutorial-card-box"},m.a.createElement("div",{className:"tutorial-card-tile"},m.a.createElement(_.a,{cardTitle:a||"Tutorial","data-analytics":c,"data-attr1":t,title:n||o,detail:u,link:d})))}render(){const e=this.props.tracks;return m.a.createElement("div",{className:"tutorials-section"},m.a.createElement("div",{className:"tutorial-row"},this.renderTutorialCard(this.getInterviewPreparationDetails()),e.map(this.renderTutorialCard)))}}l()(G,"propTypes",{tracks:p.a.array.isRequired});var K=G,W=t("1nVV"),B=t("DNJ5"),L=t("MGin"),D=t("BkRI"),U=t.n(D),z=t("YZNL"),F=t("iGQG"),H=t("m7ns"),Q=t("QILm"),Y=t.n(Q);t("aCTs");var Z=function(e){const a=e.className,t=Y()(e,["className"]);return m.a.createElement("div",s()({className:T()("new-badge",a)},t),"NEW")};t("Gkn0");function $(e,a){const t=new Set(a);return e.filter(e=>!t.has(e.slug))}function X(e){let a=e.category;return a.tracks.map(e=>{const t=e.name,r=e.slug,s=e.get_preview_image;return m.a.createElement("li",{className:"track-card",key:t},m.a.createElement(L.Link,{to:"/domains/"+r,"data-analytics":"TrackLink","data-attr1":a.slug,"data-attr2":r,className:"track-link"},m.a.createElement("div",{className:"track-item bold"},m.a.createElement("img",{src:s,alt:"",height:"24"}),m.a.createElement("div",{className:"track-name","data-automation":r},t),r===S.g.REACT&&m.a.createElement(Z,{className:"skill-new-badge"}))))})}var ee=Object(d.d)(H.a,F.b)(m.a.memo((function(e){const a=e.abTest,t=e.isProjectsEnabled,r=e.tracks,s=Object.values(S.g),i=U()(r);return a.showCodeSandbox()||(i[0].tracks=$(i[0].tracks,["react","angular"])),t||(i[0].tracks=$(i[0].tracks,s)),m.a.createElement(z.a,{className:"skills-section"},m.a.createElement("ul",{className:"tracks-list"},i.map(e=>"Tutorials"===e.name?null:m.a.createElement(X,{key:e.slug,category:e}))))}))),ae=t("J4zp"),te=t.n(ae),re=t("OEX3");t("S7zJ");function se(e){const a=e.className,t=e.appUtil.assetPath,r=e.hideElement,s=e.sendVerification,i=e.sentStatus,n=e.isDisabled,o=e.sendingVerification,l=e.position,d=e.profile;if(r)return null;const u=Object(c.useState)(!1),p=te()(u,2),b=p[0],g=p[1],h=Object(c.useState)(0),k=te()(h,2),f=k[0],E=k[1];Object(c.useEffect)(()=>{g(n),E(n?120:0)},[n]),Object(c.useEffect)(()=>{if(!f)return void g(!1);const e=setInterval(()=>{E(f-1)},1e3);return()=>clearInterval(e)},[f]);const v=i?"svgs/mail-sent.svg":"svgs/mail-not-sent.svg";return m.a.createElement(z.a,{layer:-1,className:T()("email-verification-card",a,{"mail-sent":i})},m.a.createElement("img",{src:t(v),className:"email-verification-card-status",alt:i?"mail sent":"resend mail"}),m.a.createElement("div",{className:"email-verification-card-content"},m.a.createElement("h3",{className:"email-verification-card-title"},"Confirm your",m.a.createElement("span",{className:"email-verification-card-title-highlight"}," email address"),"."),m.a.createElement("p",{className:"email-verification-card-description"},"Please check your Inbox. We’ve sent a link to confirm your email address. Once you confirm, you will be able to access all the features of our site, including",m.a.createElement("span",{className:"email-verification-card-description-highlight"}," ","Jobs, Leaderboard, Recommendations and more"),"."),m.a.createElement("div",{className:"email-verification-card-btns"},i&&!o&&m.a.createElement("span",{className:"email-verification-card-message"},"Email Sent ",m.a.createElement("i",{className:"ui-icon-success"})),m.a.createElement(re.h,{className:"email-verification-card-cta",size:"large",loading:o,onClick:s,"data-analytics":"ResendConfirmationEmail","data-attr3":"card","data-attr8":l,disabled:b},function(e,a,t){return e?"Sending Confirmation Email":a?`Retry in ${t} seconds`:"Resend Confirmation Email"}(o,b,f))),b&&m.a.createElement("p",{className:"email-verification-card-error"},"* We have sent the confirmation link to ",d.email)))}se.PropTypes={className:p.a.string,appUtil:p.a.shape({assetPath:p.a.func.isRequired,isRouteActive:p.a.func.isRequired}),selfProfile:p.a.shape({showVerifiedBanner:p.a.bool,confirmed:p.a.bool}).isRequired,sentStatus:p.a.number,sendVerification:p.a.func.isRequired,sendingVerification:p.a.bool,hideElement:p.a.bool,position:p.a.number};var ie=Object(y.a)(se),ne=t("goSp"),oe=t("HeyA"),le=t("wEfs"),ce=t("xaeT"),me=t("cSw4"),de=t("0j+i"),ue=t("vKMH");t("5/Ko"),t("F63q");t.d(a,"PureDashboard",(function(){return pe})),t.d(a,"mapStateToProps",(function(){return ge})),t.d(a,"mapDispatchToProps",(function(){return he}));class pe extends c.Component{constructor(){super(...arguments),l()(this,"mySkills",void 0)}componentDidMount(){const e=this.props,a=e.profile,t=e.abTest.isNotJobsPromoVariant,r=e.recommendedJobs,s=r.jobs,i=r.didInvalidate;!Object(ce.w)(a)||!a.sourcing_jobs_consent||t()||s&&!i||this.fetchRecommendedJobs("dashboard")}fetchRecommendedJobs(e){const a=this.props,t=a.jobsActions,r=a.profile,s=r.country,i=r.work_start_year,n={role:r.jobs_prefered_roles,country_name:s,min_experience:i?(new Date).getFullYear()-i:0,recommended:!0};t.loadRecommendedJobs(n,e).then(()=>{const e=this.props.recommendedJobs.jobs,a=(void 0===e?[]:e).map(e=>e.unique_id);P.a.batch_track("View","JobCard",{attribute1:a})})}animateToSkills(){this.mySkills&&this.mySkills.scrollIntoView({behavior:"smooth"})}getTutorialTracks(){return(this.props.trackGroups.filter(e=>"tutorials"===e.slug)[0]||{}).tracks}getCategorizedMyTracks(){const e=this.props,a=e.trackGroups,t=e.myTracks,r={};return a.forEach(e=>{e.tracks.forEach(a=>{r[a.slug]=e.name})}),t.filter(e=>"reactjs"!==e.slug).map(e=>n()({},e,{category_name:e.category_name||e.badge_name||r[e.slug]}))}renderMyTracks(){const e=this.props.profile,a=e.tried_interview_prep,t=e.confirmed,r=this.getCategorizedMyTracks(),i=!t;let n=Number(!a)+Number(i);const o=4-n;return m.a.createElement("div",{className:"my-tracks"},m.a.createElement(h.a,{category:"yourSkills"}),m.a.createElement("div",{className:"tracks-row"},!a&&m.a.createElement(V,{className:"card-box",profile:e,position:0}),i&&m.a.createElement(le.a,null,t=>m.a.createElement(ie,s()({},t,{className:"card-box",position:a?0:1,profile:e}))),r.slice(0,o).map((e,t)=>m.a.createElement(A,{primary:!!a&&0===t,className:"card-box",key:e.badge_type||e.slug,track:e,position:n++})),!r.length&&m.a.createElement(q,{text:"New Skill",className:"card-box",hasRecent:r.length>0,animateToSkills:this.animateToSkills.bind(this),position:n})))}renderTutorials(){const e=this.getTutorialTracks();return e?m.a.createElement("div",{className:"my-tutorials"},m.a.createElement(h.a,{category:"tutorials"}),m.a.createElement(K,{tracks:e})):null}renderVerifiableSkills(){const e=this.props.verifiableSkills;return e.length?m.a.createElement("div",{className:"verifiable-skills"},m.a.createElement(h.a,{category:"verifiableSkills"}),m.a.createElement("div",{className:"verifiable-skills-row"},e.map(e=>m.a.createElement(W.b,s()({},e,{key:e.name}))),m.a.createElement(W.a,null))):null}renderMockTests(){const e=this.props,a=e.mockTests;return(0,e.abTest.showMockTests)()&&a.length>0?m.a.createElement("div",{className:"mock-tests"},m.a.createElement(h.a,{category:"mockTests"}),m.a.createElement("div",{className:"mock-tests-row"},a.map((e,a)=>m.a.createElement(B.b,{position:a,mockTest:e,key:e.unique_id})),m.a.createElement(B.a,null))):null}renderAllSkills(){const e=this.props.trackGroups;return m.a.createElement("div",{className:"my-skills",ref:e=>{this.mySkills=e}},m.a.createElement(h.a,{category:"exploreSkills"}),m.a.createElement(ee,{tracks:e}))}renderRecommendedJobs(){const e=this.props,a=e.recommendedJobs,t=e.profile,r=e.abTest.isNotJobsPromoVariant,s=a.jobs;if(!Object(ce.w)(t)||!t.sourcing_jobs_consent||!s||!s.length||r())return;const i={h_referrer:"jobs_card",h_location:"dashboard",h_version:"jobs_promotion"};return m.a.createElement("div",{className:"recommended-jobs"},m.a.createElement(h.a,{category:"recommendedJobs"}),m.a.createElement("div",{className:"jobs-list"},s.map((e,a)=>m.a.createElement(ne.b,{key:e.unique_id,job:e,position:a,query:i,prefetchProps:{shouldPrefetch:!0}})),m.a.createElement(oe.default,{query:i,"data-attr2":"dashboard","data-attr8":s&&s.length})))}render(){return m.a.createElement("div",{className:"container dashboard-page dashboard-v2"},this.renderVerifiableSkills(),this.renderMockTests(),this.renderMyTracks(),this.renderRecommendedJobs(),this.renderAllSkills(),this.renderTutorials())}}l()(pe,"propTypes",{profile:p.a.object.isRequired,dashboardActions:p.a.object,myTracks:p.a.array.isRequired,trackGroups:p.a.array.isRequired,showAllTracks:p.a.bool.isRequired,abTest:p.a.shape({isNotJobsPromoVariant:p.a.func.isRequired,showMockTests:p.a.func.isRequired}).isRequired,jobsActions:p.a.shape({loadRecommendedJobs:p.a.func.isRequired}).isRequired,recommendedJobs:p.a.shape({jobs:p.a.arrayOf(p.a.object),didInvalidate:p.a.bool}),verifiableSkills:p.a.arrayOf(p.a.shape({title:p.a.string.isRequired,status:p.a.string,icon:p.a.string.isRequired,slug:p.a.string.isRequired}))}),l()(pe,"defaultProps",{verifiableSkills:[],mockTests:[]});const be=Object(g.a)(e=>e.slice(0,2)),ge=e=>{const a=e.community,t=a.profile,r=a.dashboard,s=r.myTracks,i=r.trackGroups,n=r.showAllTracks,o=Object(de.c)(e,{profile:t}),l=be(o),c=Object(ue.c)(e);return{profile:t,myTracks:s,trackGroups:i,showAllTracks:n,recommendedJobs:Object(me.b)("dashboard")(e),verifiableSkills:l,mockTests:c}},he=e=>({dashboardActions:Object(d.b)(k.a,e),profileActions:Object(d.b)(f.a,e),jobsActions:Object(d.b)(E.a,e)});a.default=Object(d.d)(F.b,Object(b.c)(ge,he))(pe)}}]);
//# sourceMappingURL=https://hrcdn.net/community-frontend/assets/sourcemaps/hackerrank_r_dashboard-f4ec5616.js.map