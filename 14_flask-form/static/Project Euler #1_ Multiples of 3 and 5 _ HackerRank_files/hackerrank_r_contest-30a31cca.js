(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{"8Nfx":function(e,t,a){},E4DP:function(e,t,a){},"H+te":function(e,t,a){},IHEK:function(e,t,a){},OEd3:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a("pVnL"),s=a.n(n),o=(a("OG14"),a("QILm")),i=a.n(o),r=(a("pIFo"),a("cDcd")),c=a.n(r),l=a("MGin"),d=a("xxD/"),m=a("MdMq");const p=/(.*?)\/(\d*)($|\/$)/;function h(e){let t=e.location,a=i()(e,["location"]);const n=function(e){let t;const a=e.replace(p,(e,a,n)=>(t=Number(n),a));return{page:t||1,basePath:a}}(t.pathname),o=n.page,r=n.basePath;return c.a.createElement(d.a,s()({page:o},a,{renderItem:e=>{const a=`${r}/${e.goToPage}${t.search}`;return c.a.createElement(m.a,s()({renderElement:l.Link,to:a},e))}}))}},PKJS:function(e,t,a){},XDuw:function(e,t,a){},nxGB:function(e,t,a){"use strict";a.r(t),a.d(t,"ContestTimer",(function(){return b}));var n=a("lSNA"),s=a.n(n),o=a("cDcd"),i=a.n(o),r=a("17x9"),c=a.n(r),l=a("/MKj"),d=a("ANjH"),m=a("TSYQ"),p=a.n(m),h=a("5J+W"),u=a("eOGF"),g=a("qePO"),E=a("+KS9");a("XDuw");class b extends o.Component{constructor(){super(...arguments),s()(this,"state",{timerEnded:!1}),s()(this,"handleTimerEnd",()=>{this.setState({timerEnded:!0})})}renderTimerWithTooltip(){const e=this.props.contest,t=1e3*Object(g.c)(e)+Date.now(),a=i.a.createElement(E.a,{finishTimeMs:t,onTimerEnd:this.handleTimerEnd,className:"contest-countdown"});return i.a.createElement("div",{className:"contest-remaining-time"},i.a.createElement("span",{"data-balloon":Object(u.m)(t,!0),"data-balloon-pos":"left"},a))}renderContestStatus(e){return i.a.createElement("span",null,i.a.createElement("span",{className:"text-sec-headline-xs"},e),this.renderTimerWithTooltip())}renderContestTimer(){const e=this.props.contest,t=e.track,a=e.started,n=e.can_be_viewed,s=t&&"tutorials"===t.track_slug,o=Object(g.c)(e);return i.a.createElement("div",{className:"contest-status"},a?o>0&&this.renderContestStatus("Contest ends in"):s&&!n?this.renderContestStatus("Unlocks in"):this.renderContestStatus("The contest has not yet started. It begins in"))}renderContestUserTimer(){const e=this.props.contest,t=e.started,a=1e3*e.effective_epoch_endtime-e.apiTime;let n;return t&&!Object(g.g)(e)&&(n=a<0?i.a.createElement("span",{"data-balloon":"Further submissions made by you in the contest won't affect leaderboard.","data-balloon-pos":"left"},i.a.createElement("span",{className:"text-sec-headline-xs contest-timer-warning"},i.a.createElement("i",{className:"ui-icon-lock"}),"Your time limit has expired")):i.a.createElement("span",null,i.a.createElement("span",{className:"text-sec-headline-xs"},"Your remaining time"),i.a.createElement("div",{className:"contest-remaining-time"},i.a.createElement("span",{"data-balloon":`Each contestant gets ${Object(u.V)(e.hacker_timelimit)} to complete this contest.`,"data-balloon-pos":"left"},i.a.createElement(E.a,{finishTimeMs:1e3*e.effective_epoch_endtime,onTimerEnd:this.handleTimerEnd,className:"contest-countdown"}))))),i.a.createElement("div",{className:"contest-status"},t?i.a.createElement("span",null,n):i.a.createElement("span",null,i.a.createElement("h2",{className:"text-sec-headline-xs"},"The contest has not yet started.")))}render(){const e=this.props,t=e.contest,a=e.className;return i.a.createElement("div",{className:p()("contest-timer-wrapper",a)},t.time_limited_contest&&this.renderContestUserTimer(),!Object(g.g)(t)&&this.renderContestTimer())}}s()(b,"propTypes",{contest:c.a.object.isRequired,className:c.a.string}),t.default=Object(d.d)(h.a,Object(l.c)((e,t)=>{const a=t.appUtil.params.contestSlug;return{contest:Object(g.a)(a,e)}}))(b)},rAWl:function(e,t,a){"use strict";a.r(t),a.d(t,"PureContestLeaderboard",(function(){return E}));var n=a("lSNA"),s=a.n(n),o=a("cDcd"),i=a.n(o),r=a("17x9"),c=a.n(r),l=a("/MKj"),d=a("ANjH"),m=a("qePO"),p=a("5J+W"),h=a("lyz7"),u=a("cW2f"),g=a("9q+v");a("8Nfx");class E extends o.Component{getFreezeTimeMinutes(){const e=this.props.contest,t=e.leaderboard_freeze_time,a=e.epoch_endtime;if(t){const e=(new Date(1e3*a)-new Date(t))/6e4;return Math.max(e,0)}return 0}renderContestHeader(){const e=this.props.contest.leaderboard_broadcast_message;return i.a.createElement(o.Fragment,null,e&&i.a.createElement("div",{className:"banner",dangerouslySetInnerHTML:{__html:e}}))}render(){const e=this.props,t=e.contest,a=e.leaderboard,n=a.total,s=a.limit;return i.a.createElement("div",{className:"theme-m contest-leaderboard-wrapper"},i.a.createElement("div",{className:"container panes-container plT"},i.a.createElement("div",{className:"left-pane"},i.a.createElement("div",{className:"contest-leaderboard-container"},this.renderContestHeader(),i.a.createElement(h.a,{className:"contest-leaderboard",contest:t,leaderboard:a,leaderboardType:"ContestLeaderboard",freezeTimeMinutes:this.getFreezeTimeMinutes()})),!!n&&i.a.createElement(u.a,{totalItems:n,itemPerPage:s,className:"leaderboard-pagination"})),i.a.createElement("aside",{className:"right-pane"},i.a.createElement(g.a,{leaderboard:a,filterLocation:"ContestLeaderboard"}))))}}s()(E,"propTypes",{contest:c.a.object.isRequired,appUtil:c.a.object.isRequired,otherLeaderboard:c.a.bool,leaderboard:c.a.object.isRequired}),t.default=Object(d.d)(p.a,Object(l.c)((function(e,t){const a=t.appUtil.params.contestSlug,n=void 0===a?"master":a;return{contest:Object(m.a)(n,e),leaderboard:e.community.contests.contestLeaderboard[n].leaderboard}})))(E)},sISB:function(e,t,a){"use strict";a.r(t);a("rGqo");var n=a("yXPU"),s=a.n(n),o=(a("CX2u"),a("lSNA")),i=a.n(o),r=a("J4zp"),c=a.n(r),l=a("cDcd"),d=a.n(l),m=a("17x9"),p=a.n(m),h=a("/MKj"),u=a("ANjH"),g=a("wd/R"),E=a.n(g),b=a("5J+W"),C=a("oBtd"),f=a("dAq8"),v=a("MGin"),N=a("xNbf"),y=a("OEd3"),k=a("MVZn"),L=a.n(k),x=a("pVnL"),S=a.n(x),w=a("LlRK"),_=a.n(w),D=a("TSYQ"),A=a.n(D),P=a("f0Wu"),T=a.n(P),j=a("cuY2"),O=a.n(j),M=a("iGQG"),R=a("eOGF"),F=a("OEX3"),I=a("YZNL"),U=a("O766"),q=a("wqqT"),H=a("EZGV"),K=a("p0DI"),V=a("fv1W"),Y=a("qePO");a("zszX");class $ extends d.a.Component{constructor(){super(),i()(this,"expandContest",e=>{["a","button"].includes(e.target.tagName.toLowerCase())||this.props.expandContest(this.props.contest.id)}),i()(this,"expandContestOnKey",e=>{"space"!==e.key&&"enter"!==e.key||this.expandContest(e)}),i()(this,"signupContest",()=>{this.setState({signingUp:!0});const e=this.props,t=e.contestActions,a=e.contest,n=e.appUtil.goto,s=a.slug;t.signupContest(s).then(e=>{this.setState({signingUp:!1}),e.country_allowed?e.status?n("/contests/"+s):this.setState({modalError:{title:"",body:e.message}}):this.setState({modalError:{title:"Country Not Allowed",body:`Sorry, it seems like you are trying to access the contest from ${e.current_country}.\n               But this contest is only available for users who live in ${e.allowed_countries}.`}})})}),i()(this,"login",()=>{this.setState({openAuthModal:!0})}),i()(this,"closeAuthModal",()=>{this.setState({openAuthModal:!1})}),this.state={}}openIndefinitely(){return this.props.contest.time_left/31536e3>1}getContestStatus(){return this.props.contest.ended?"Archived":"Active"}getRelevantTime(){const e=this.props.contest,t=e.time_left;return t?new Date(e.apiTime+1e3*t):""}getButtonAttributes(){const e=this.props,t=e.contest,a=e.profile,n=t.started,s=t.slug,o=t.track,i=t.challenges_count,r=this.getContestStatus(),c=!!a.username;return{"data-analytics":"ContestCardSignupLink","data-attr2":r,"data-attr1":s,"data-attr3":o?o.slug:"","data-attr7":i,"data-attr4":c,"data-attr11":n}}renderDateMicroData(){const e=this.props.contest,t=e.epoch_starttime,a=e.epoch_endtime,n=new Date(1e3*t).toISOString(),s=new Date(1e3*a).toISOString(),o=Object(R.o)(n,s);return d.a.createElement("span",null,d.a.createElement("meta",{itemProp:"startDate",content:n}),d.a.createElement("meta",{itemProp:"endDate",content:s}),d.a.createElement("meta",{itemProp:"duration",content:o}))}renderRelevantTime(e){const t=this.getRelevantTime();return t?d.a.createElement("span",null,e&&this.renderDateMicroData(),d.a.createElement(K.a,null,d.a.createElement("time",{className:"timeago",dateTime:t.toISOString()},d.a.createElement(_.a,{date:t})))):null}renderStartTime(){const e=this.props.contest.epoch_starttime;return d.a.createElement("span",null,this.renderDateMicroData(),d.a.createElement(K.a,null,d.a.createElement("time",{className:"timeago",dateTime:T()(1e3*e).format("MMM DD YYYY")},Object(R.m)(1e3*e,!0))))}renderContestStatus(){const e=this.openIndefinitely();return d.a.createElement("span",{className:"contest-status"},e?"Open Indefinitely":this.renderStartTime())}renderHeaderButtons(){const e=this.props,t=e.contest,a=e.profile,n=t.ended,s=t.started,o=t.skip_signup,i=t.signed_up,r=t.additional_details_required,c=t.domain_restrictions,l=t.has_codesprint_reg_page,m=t.ask_jobs_profile,p=t.slug,h=t.version,u=this.state.signingUp,g=a.is_admin,E=!!a.username,b=this.getButtonAttributes(),C=[],f=Object(Y.d)(p),N="v3"===h;if(n)if(C.push(d.a.createElement("span",{key:"endedText","data-automation":"ended-text"},"Ended")),!i&&(r||c||l||m))C.push(d.a.createElement(F.e,S()({role:"link",key:"viewChallenge",to:"/auth/signup/"+p,className:"contest-item-btn","data-automation":"view-challenges-btn"},b),"View Challenges"));else if(E)if(i){const e=L()({},b,{key:"viewChallenge",className:"contest-item-btn"});C.push(d.a.createElement(F.e,S()({role:"link",to:`/contests/${p}/challenges`,"data-automation":"view-challenges-btn"},e),"View Challenges"))}else C.push(d.a.createElement(F.e,S()({key:"viewChallenge",className:"contest-item-btn",disabled:u,onClick:this.signupContest,"data-automation":"contest-signup"},b),u?"Signing up...":"View Challenges"));else C.push(d.a.createElement(F.e,S()({key:"viewChallenge",className:"contest-item-btn",onClick:this.login,"data-automation":"login-btn"},b),"View Challenges"));else if(N){const e=`/contests/${p}/challenges`,t=`/contestlanding/${p}/welcome`;C.push(d.a.createElement(v.Link,{to:t,className:"text-link",id:p,key:p},"View Details")),i?C.push(d.a.createElement(F.e,S()({role:"link",key:"signup",className:"contest-item-btn",to:e},b),"Enter")):C.push(d.a.createElement(F.d,S()({role:"link",key:"signup",className:"contest-item-btn",to:t},b),"Sign Up"))}else{if("projecteuler"===p)C.push(d.a.createElement(v.Link,{to:"/contests/"+p,className:"text-link",id:""+p,key:""+p},"View Details"));else{const e={key:"viewDetail",className:"text-link"};f?C.push(d.a.createElement(v.Link,S()({},e,{to:"/contests/"+p}),"View Details")):C.push(d.a.createElement(v.Link,S()({},e,{to:"/"+p,"data-automation":"view-details-other-contests"}),"View Details"))}o?C.push(d.a.createElement(F.d,S()({role:"link",key:"signup",className:"text-link contest-item-btn",to:"/"+p,"data-automation":"skip-signup"},b),"Sign Up")):!i&&(r||c||l||m)?C.push(d.a.createElement(F.d,S()({role:"link",key:"signup",className:"contest-item-btn",to:"/auth/signup/"+p,"data-automation":"signup-auth"},b),"Sign Up")):E||n?i||n||g?s||g?C.push(d.a.createElement(F.e,S()({role:"link",key:"enter",className:"text-link contest-item-btn",to:`/contests/${p}/challenges`},b),"Enter")):C.push(d.a.createElement("p",{key:"signedup","data-automation":"signed-up",className:"contest-item-btn"},d.a.createElement("i",{className:"icon-ok-circled"}),"Signed Up")):C.push(d.a.createElement(F.d,S()({key:"signup",className:"contest-item-btn",disabled:u,onClick:this.signupContest,"data-automation":"contest-signup"},b),u?"Signing up...":"Sign Up")):C.push(d.a.createElement(F.d,S()({key:"signup",className:"contest-item-btn","data-automation":"login-btn"},b,{onClick:this.login}),"Sign Up"))}return d.a.createElement("div",{className:"contest-item-buttons"},C)}renderContestDetail(){if(!this.props.detailedListLoaded)return null;const e=this.props,t=e.open,a=e.contest,n=a.ended,s=a.slug,o=a.description_html,i=a.rated,r=this.openIndefinitely();return d.a.createElement(O.a,{duration:500,height:t?"auto":0},d.a.createElement(I.a,{layer:1,ref:"contestDetail",className:"contest-detail contest-tab-expand-content only-desc","data-slug":s},d.a.createElement("h5",{className:"rated-contest-text"},i?"Rated Contest":"Unrated Contest"),n||r?d.a.createElement("p",{dangerouslySetInnerHTML:{__html:o}}):d.a.createElement("div",null,d.a.createElement("p",{itemProp:"description",dangerouslySetInnerHTML:{__html:o}}),d.a.createElement("meta",{itemProp:"url",content:`https://www.hackerrank.com/${s}/??utm_source=google&amp;utm_medium=search&amp;utm_campaign=SEO`}))))}contestName(){const e=this.props.contest,t=e.name,a=e.ended,n=this.openIndefinitely();return d.a.createElement("h4",{className:A()("contest-item-title ellipsis",a&&"title-ended")},a||n?t:d.a.createElement("span",{itemProp:"name"},t))}errorDialog(){const e=this.state.modalError;return e&&d.a.createElement(U.a,{modalClass:"signup-error",title:e.title,open:!0,onClose:()=>this.setState({modalError:null}),theme:"theme-m"},d.a.createElement("div",{className:"text-center"},e.body))}render(){const e=this.state.openAuthModal,t=this.props,a=t.contest,n=t.open,s=t.detailedListLoaded,o=a.ended,i=a.slug,r=this.openIndefinitely(),c=o?"Archived":"Active";return d.a.createElement("li",{key:a.id,className:A()("contests-list-view",{open:n,loading:n&&!s})},n&&!s&&d.a.createElement(q.a,{className:"contest-loader",diameter:32,color:"#FFFFFF"}),d.a.createElement(H.a,{className:"contest-tab-expander has-buttons",onClick:this.expandContest,onKeyPress:e=>("space"===e.key||"enter"===e.key)&&this.expandContest(),"data-slug":i,"data-contest-state":c},d.a.createElement(I.a,{className:"contest-item text-content",layer:1,active:!0},this.contestName(),d.a.createElement("div",{className:"contest-item-status"},d.a.createElement("span",{className:"contest-status"},r?"Open Indefinitely":this.renderStartTime()),this.renderHeaderButtons()))),this.renderContestDetail(),this.errorDialog(),e&&d.a.createElement(V.a,{open:!0,onClose:this.closeAuthModal}))}}i()($,"defaultProps",{open:!1,detailedListLoaded:!1,expandContest:function(){}});$=Object(h.c)(e=>({profile:e.community.profile}),e=>({contestActions:Object(u.b)(f.a,e)}))($);var z=Object(u.d)(M.b,b.a)($),W=(a("tUrg"),a("HfZf"));const G=e=>{let t=e.archived,a=e.link;return t?d.a.createElement("span",null,"Ended"):d.a.createElement(v.Link,{to:a,className:"text-link"},"View Details")},X=e=>{let t=e.competitionParticipation,a=e.link;return e.archived?d.a.createElement(F.e,{role:"link",className:"contest-item-btn",to:a,"data-automation":"competition-archive-view-challenge"},"View Challenges"):t&&t.is_signed_up?d.a.createElement("p",{className:"contest-item-btn"},d.a.createElement("i",{className:"icon-ok-circled txt-green"}),"Signed Up"):d.a.createElement(F.d,{role:"link",className:"contest-item-btn",to:a},"Sign Up")};var B=e=>{let t=e.competition,a=e.expandCompetition,n=e.open,s=e.archived,o=e.competitionParticipation;const i=T()(t.starts_at),r="/competitions/"+t.slug;return d.a.createElement("li",{key:t.slug,className:A()("contests-list-view",{open:n})},d.a.createElement(H.a,{className:"contest-tab-expander has-buttons",onClick:a,onKeyPress:e=>("space"===e.key||"enter"===e.key)&&a(),"data-slug":t.slug,"data-contest-state":"Active"},d.a.createElement(I.a,{className:"contest-item text-content",layer:1,active:!0},d.a.createElement("h4",{className:A()("contest-item-title ellipsis",s&&"title-ended")},t.name),d.a.createElement("div",{className:"contest-item-status"},d.a.createElement("span",{className:"contest-status"},d.a.createElement(K.a,null,d.a.createElement("time",{className:"timeago",dateTime:i.format("MMM DD YYYY")},Object(R.m)(i.valueOf(),!0)))),d.a.createElement("div",{className:"contest-item-buttons"},d.a.createElement(G,{link:r,competitionParticipation:o,archived:s}),d.a.createElement(X,{competitionParticipation:o,archived:s,link:r}))))),d.a.createElement(O.a,{duration:500,height:n?"auto":0},d.a.createElement(I.a,{layer:1,className:A()("contest-detail contest-tab-expand-content only-desc",{open:n})},d.a.createElement("h5",{className:"rated-contest-text"},"Unrated Contest"),d.a.createElement(W.a,{element:"p",html:t.description}))))};a("PKJS");class J extends l.Component{renderContestList(e){const t=this.props,a=t.detailedListLoaded,n=t.profile,s=t.expandContest,o=t.expandedContest,i=t.contestCategory;return d.a.createElement("ul",{className:{active:"contests-active",archived:"contests-archived",college:"contests-college"}[i]},e.map(e=>d.a.createElement(z,{key:e.id,contest:e,profile:n,detailedListLoaded:a,open:o===e.id,expandContest:s})))}renderCombinedList(e,t){const a=this.props,n=a.detailedListLoaded,s=a.profile,o=a.expandContest,i=a.expandedContest,r=a.contestCategory,c=a.competitionParticipationMap;return d.a.createElement("ul",{className:{active:"contests-active",archived:"contests-archived",college:"contests-college"}[r]},e.map(e=>{if("contest"===e.type){const t=e.contest;return d.a.createElement(z,{key:t.id,contest:t,profile:s,detailedListLoaded:n,open:i===t.id,expandContest:o})}const a=e.competition;return d.a.createElement(B,{competition:a,open:i==="competition-"+a.id,expandCompetition:()=>o("competition-"+a.id),key:a.id,archived:t,competitionParticipation:c[a.id]})}))}renderActiveContest(){const e=this.props,t=e.combinedActive;return"active"!==e.contestCategory?null:d.a.createElement("div",{className:"active_contests active-contest-container"},d.a.createElement("h5",{className:"contest-title"},"Active Contests"),t.length?this.renderCombinedList(t,!1):d.a.createElement("p",{className:"contests-active-empty"},"No contest matched your selection, please choose other options"))}renderArchivedContest(){const e=this.props,t=e.combinedArchived,a=e.contestCategory;return"active"!==a&&"archived"!==a?null:d.a.createElement("div",{className:"active_contests archived-contest-container"},d.a.createElement("h5",{className:"contest-title"},"Archived Contests"),this.renderCombinedList(t,!0),this.renderLoadingIcon(),"active"===a&&d.a.createElement("p",{className:" text-center more-archived-contest-container"},d.a.createElement(v.Link,{to:"/contests/archived",className:"text-link","data-analytics":"ContestListShowMoreArchived"},"Show More Archived Contests")))}renderCollegeContest(){const e=this.props,t=e.collegeContest;return"college"!==e.contestCategory?null:d.a.createElement("div",{className:"active_contests college-contest-container"},d.a.createElement("h5",{className:"contest-title"},"College Contests"),this.renderContestList(t),this.renderLoadingIcon())}renderLoadingIcon(){const e=this.props,t=e.detailedListLoaded,a=e.loading;if(t&&a)return d.a.createElement("div",{className:"hackerrank_spinner_wrap"},d.a.createElement(N.a,{className:"hackerrank_spinner"}))}render(){const e=this.props,t=e.contestCategory,a=e.location,n=e.totalItems,s=e.onPageChange;return d.a.createElement("div",{className:"theme-m contest-list left-pane"},d.a.createElement("div",{className:"contests"},this.renderActiveContest(),this.renderArchivedContest(),this.renderCollegeContest()),"archived"===t||"college"===t?d.a.createElement("div",{className:"contest-list-pagination-wrapper"},d.a.createElement(y.a,{count:Math.ceil(n/50),location:a,onPageChange:s})):null)}}i()(J,"propTypes",{detailedListLoaded:p.a.bool,profile:p.a.object.isRequired,expandContest:p.a.func,expandedContest:p.a.string,contestCategory:p.a.string,activeContest:p.a.array,archivedContest:p.a.array,collegeContest:p.a.array,loading:p.a.bool,totalItems:p.a.number,onPageChange:p.a.func}),i()(J,"defaultProps",{contestCategory:"active",activeContest:[],archivedContest:[],collegeContest:[],onPageChange:function(){}});var Q=J,Z=a("g+WX");a("IHEK");class ee extends l.Component{renderRatedFilter(){const e=this.props,t=e.showRatedContest,a=e.showFilters,n=e.applyRatedFilter;if(a)return d.a.createElement("li",{className:"filter-item"},d.a.createElement(Z.a,{label:"Rated",variant:"outset",checked:t,onChange:e=>{n(e.target.checked)},"data-automation":"rated-checkbox"}))}renderDomainFilter(){const e=this.props,t=e.domains,a=e.applyDomainFilter,n=e.selectedDomains;if(e.showFilters)return d.a.createElement("div",{className:"track-selector filter-group"},d.a.createElement("h5",{className:"group-label"},"Filter"),d.a.createElement("ul",{className:"filter"},this.renderRatedFilter(),t.map(e=>{const t=e.slug,s=e.name;return d.a.createElement("li",{className:"filter-item",key:t},d.a.createElement(Z.a,{label:s,checked:!!n[t],onChange:e=>a(t,e.target.checked),variant:"outset","data-automation":"domain-checkbox"}))})))}renderAdministrationLinks(){return d.a.createElement("div",{className:"administration-link filter-group"},d.a.createElement("h5",{className:"group-label"},"Administration"),d.a.createElement("ul",{className:"filters"},d.a.createElement("li",{className:"filter-item"},d.a.createElement(v.Link,{className:"text-link",to:"/administration/contests/create"},"Create Contest")),d.a.createElement("li",{className:"filter-item"},d.a.createElement(v.Link,{className:"text-link filter-item",to:"/administration/contests/"},"Manage Contest"))))}render(){return d.a.createElement("div",{className:"contest-list-filter right-pane"},this.renderAdministrationLinks(),this.renderDomainFilter(),d.a.createElement("div",{className:"filter-group"},d.a.createElement("h5",{className:"group-label"},"Quick Links"),d.a.createElement("ul",{className:"filters"},d.a.createElement("li",{className:"filter-item"},d.a.createElement(v.Link,{to:"/contests/archived",className:"text-link","data-analytics":"ContestListQuickLinks","data-attr1":"Archived"},"Archived Contest")),d.a.createElement("li",{className:"filter-item"},d.a.createElement(v.Link,{to:"/contests/college",className:"text-link","data-analytics":"ContestListQuickLinks","data-attr1":"College"},"College Contest")),d.a.createElement("li",{className:"filter-item"},d.a.createElement("a",{href:"/calendar",className:"text-link","data-analytics":"ContestListQuickLinks","data-attr1":"Calendar"},"Contest Calendar")))))}}i()(ee,"propTypes",{domains:p.a.array,selectedDomains:p.a.object,showFilters:p.a.bool,showRatedContest:p.a.bool,applyDomainFilter:p.a.func,abTest:p.a.object.isRequired,profile:p.a.object.isRequired}),i()(ee,"defaultProps",{domains:[],selectedDomains:{},showFilters:!0,showRatedContest:!1,applyDomainFilter:function(){}});var te=ee=Object(M.b)(ee),ae=a("L8/B"),ne=a("03oT");a("H+te");a.d(t,"PureContest",(function(){return re}));const se=e=>"contest"===e.type?[E()(e.contest.epoch_starttime),E()(e.contest.epoch_endtime)]:[E()(e.competition.starts_at),E()(e.competition.ends_at)],oe=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e.slice(0).sort((e,a)=>{const n=se(e),s=c()(n,2),o=s[0],i=s[1],r=se(a),l=c()(r,2),d=l[0],m=l[1];return t?d.diff(o)||m.diff(i):o.diff(d)||i.diff(m)})};class ie extends l.Component{constructor(e){super(e),i()(this,"contestXHR",void 0),i()(this,"state",void 0),i()(this,"onPageChange",e=>{this.setState({loading:!0,currentPage:e})}),i()(this,"expandContest",e=>{e===this.state.expandedContest&&(e=null),this.setState({expandedContest:e})}),i()(this,"loadContest",()=>{const e=this.state,t=e.selectedDomains,a=e.showRatedContest,n=this.getSelectedDomainAry(t),s=this.props.contestState;let o=n.length?n.join("|"):"all";a&&(o+="|rated"),s.active.loadedFilter[o]||(this.setState({loading:!0}),this.props.contestActions.getContestList({contestSlug:"active",filter:n,ratedFilter:a}).finally(()=>{this.setState({loading:!1})}))}),i()(this,"applyDomainFilter",(e,t)=>{const a=Object.assign({},this.state.selectedDomains,{[e]:t});this.setState({selectedDomains:a},this.loadContest)}),i()(this,"applyRatedFilter",e=>{this.setState({showRatedContest:e},this.loadContest),C.a.track("ToggleRatedContests",e)}),this.state={selectedDomains:{},currentPage:e.appUtil.params.pageNo||1}}componentDidMount(){var e=this;return s()((function*(){Object(R.H)()||(yield e.props.contestActions.getCompetitionList({})),e.getDetailedList()}))()}componentWillReceiveProps(e){const t=this.props.appUtil.params.pageNo,a=e.appUtil.params.pageNo;t!==a&&this.setState({loading:!1,currentPage:a||1})}getPageInfo(){const e=this.props.appUtil,t=e.location,a=(e.params,t.pathname);let n="active";return-1!==a.indexOf("archived")?n="archived":-1!==a.indexOf("college")&&(n="college"),{contestCategory:n,currentPage:this.state.currentPage}}getDetailedList(){const e=this.getPageInfo(),t=e.contestCategory,a=e.currentPage;this.props.contestState[t].partialData?this.contestXHR="active"===t?this.props.contestActions.getContestList({contestSlug:"active"}).then(()=>{this.setState({detailedListLoaded:!0})}):this.props.contestActions.getCategorizedContest({contestSlug:"active",contestCategory:t,page:a}).then(()=>{this.setState({detailedListLoaded:!0})}):this.setState({detailedListLoaded:!0})}getSelectedDomainAry(e){return Object.keys(e).filter(t=>!!e[t])}filterActiveContest(){const e=this.props.contestState,t=e.allContest,a=e.active,n=this.state.showRatedContest,s=this.getSelectedDomainAry(this.state.selectedDomains);s.length||s.push("all");let o=[];s.forEach(e=>{o=o.concat(a.track[e]||[])});let i=o.map(e=>t.contest[e]);return n&&(i=i.filter(e=>e.rated)),i}getContestState(e,t){let a,n=[],s=[],o=[],i=[],r=[];const l=this.state.showRatedContest,d=this.props.contestState,m=d.archived,p=d.college,h=d.allContest,u=d.competition.competitionMap,g=l||this.getSelectedDomainAry(this.state.selectedDomains).length>0?[]:Object.entries(u).map(e=>{let t=c()(e,2);t[0];return t[1]}),E=Object(ne.a)(g,ae.b),b=c()(E,2),C=b[0],f=b[1],v=e=>({contest:e,type:"contest"}),N=e=>({competition:e,type:"competition "});if("active"===e){this.filterActiveContest().forEach(e=>{e.ended?n.push(e):s.push(e)}),s.sort((e,t)=>e.epoch_starttime-t.epoch_starttime||e.epoch_endtime-t.epoch_endtime),n=n.sort((e,t)=>t.epoch_starttime-e.epoch_starttime||t.epoch_endtime-e.epoch_endtime).slice(0,10),i=oe([...s.map(v),...C.map(N)]),r=oe([...n.map(v),...f.map(N)],!0)}else if("archived"===e){a=m.total;const e=m.page[t];e&&(n=e.map(e=>h.contest[e])),r=oe([...n.map(v),...f.map(N)])}else if("college"===e){a=p.total;const e=p.page[t];e&&(o=e.map(e=>h.contest[e]))}return{activeContest:s,archivedContest:n,collegeContest:o,totalItems:a,combinedActive:i,combinedArchived:r}}render(){const e=this.props,t=e.domains,a=e.contestState,n=e.profile,s=e.appUtil,o=this.state,i=o.detailedListLoaded,r=o.loading,c=o.expandedContest,l=o.selectedDomains,m=o.showRatedContest,p=this.getPageInfo(),h=p.contestCategory,u=p.currentPage,g=this.getContestState(h,u),E=g.activeContest,b=g.archivedContest,C=g.collegeContest,f=g.totalItems,v=g.combinedActive,N=g.combinedArchived,y=a.competition,k=y.competitionMap,L=y.competitionParticipationMap;return d.a.createElement("div",{className:"contest-view"},d.a.createElement("div",{className:"panes-container container"},d.a.createElement(Q,{activeContest:E,archivedContest:b,collegeContest:C,competitionMap:k,combinedActive:v,combinedArchived:N,totalItems:f,detailedListLoaded:i,loading:r,profile:n,expandedContest:c,competitionParticipationMap:L,expandContest:this.expandContest,onPageChange:this.onPageChange,contestCategory:h,location:s.location}),d.a.createElement(te,{profile:n,domains:t,showFilters:"active"===h,applyDomainFilter:this.applyDomainFilter,applyRatedFilter:this.applyRatedFilter,showRatedContest:m,selectedDomains:l})))}}i()(ie,"propTypes",{appUtil:p.a.object.isRequired,domains:p.a.array.isRequired,contestState:p.a.object.isRequired,profile:p.a.object.isRequired,contestActions:p.a.object.isRequired});const re=ie;ie=Object(h.c)(e=>({domains:e.community.domains.list,profile:e.community.profile,contestState:e.community.contests}),e=>({contestActions:Object(u.b)(f.a,e)}))(ie),ie=Object(b.a)(ie),ie=Object(M.b)(ie);t.default=ie},ww4x:function(e,t,a){"use strict";a.r(t),a.d(t,"eligibleTooltip",(function(){return d})),a.d(t,"normalTooltip",(function(){return m})),a.d(t,"PureContestLeaderboardPageLabel",(function(){return h}));var n=a("lSNA"),s=a.n(n),o=a("cDcd"),i=a.n(o),r=a("/MKj"),c=a("5J+W"),l=a("qePO");a("E4DP");const d="This leaderboard has all the first-time users that are eligible for T-shirts.",m="This leaderboard has all the rated users that are not eligible for prizes for this beginner's contest.";class p extends i.a.PureComponent{constructor(){super(...arguments),s()(this,"props",void 0)}getLeaderboardTitle(){const e=this.props,t=e.contest,a=e.appUtil.location.query;if(t&&Array.isArray(t.custom_leaderboards)&&a.customKind){const e=t.custom_leaderboards.filter(e=>e.slug===a.customKind)[0];if(e)return e.name}return"Leaderboard"}render(){const e=this.props,t=e.contest.limited_participants,a=e.otherleaderboard;return i.a.createElement("div",{className:"contest-page-label-wrapper d-flex align-items-center"},i.a.createElement("h1",{className:"ellipsis page-label d-inline"},this.getLeaderboardTitle()),t&&(a?i.a.createElement("span",{"data-balloon":m,"data-balloon-pos":"right","data-balloon-length":"medium"},i.a.createElement("i",{className:"ui-icon-help contest-page-label-icon"})):i.a.createElement("span",{"data-balloon":d,"data-balloon-pos":"right","data-balloon-length":"medium"},i.a.createElement("i",{className:"ui-icon-help contest-page-label-icon"}))))}}s()(p,"defaultProps",{otherleaderboard:!1});const h=p;p=Object(r.c)((e,t)=>{const a=t.appUtil.params.contestSlug,n=void 0===a?"master":a,s=Object(l.a)(n,e);return{contest:s,leaderboard:e.community.contests.contestLeaderboard[s.slug].leaderboard}})(p),p=Object(c.a)(p),t.default=p},zszX:function(e,t,a){}}]);
//# sourceMappingURL=https://hrcdn.net/community-frontend/assets/sourcemaps/hackerrank_r_contest-30a31cca.js.map