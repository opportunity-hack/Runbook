(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return s}));var o=n(3),a=(n(0),n(121));const i={id:"judging",title:"Judging"},r={unversionedId:"Runbook/judging",id:"Runbook/judging",isDocsHomePage:!1,title:"Judging",description:"Judging",source:"@site/docs/Runbook/judging.md",slug:"/Runbook/judging",permalink:"/Runbook/docs/Runbook/judging",version:"current",sidebar:"someSidebar",previous:{title:"SWAG",permalink:"/Runbook/docs/Runbook/swag"},next:{title:"Drinking",permalink:"/Runbook/docs/Runbook/drinking"}},u=[{value:"Discussion",id:"discussion",children:[]},{value:"Criteria",id:"criteria",children:[]},{value:"Round 1 - Expo Style (aka Science Fair)",id:"round-1---expo-style-aka-science-fair",children:[]},{value:"Round 2",id:"round-2",children:[]}],l={toc:u};function s({components:e,...t}){return Object(a.b)("wrapper",Object(o.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"judging"},"Judging"),Object(a.b)("p",null,"There are any number of ways you ",Object(a.b)("em",{parentName:"p"},"could")," do judging.  Most of them are bad.  There is really only one ",Object(a.b)("em",{parentName:"p"},"good")," way to handle judging."),Object(a.b)("h1",{id:"tldr"},"TL;DR"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"You need to have ceiling(# teams/3.3) judges"),Object(a.b)("li",{parentName:"ul"},"You'll do two rounds of judging",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Round one:  Expo style",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Each team gets to present for 8 minutes"),Object(a.b)("li",{parentName:"ul"},"Each team will get to present to 2 judges independently"))),Object(a.b)("li",{parentName:"ul"},"Round two:  Theatre style: 4 minutes",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"There will be 5 finalist teams"),Object(a.b)("li",{parentName:"ul"},"Each team gets 4 total minutes, 1 minute of presentaion, 3 minutes of demo"))),Object(a.b)("li",{parentName:"ul"},"After each round of judging, the judges will deliberate for ~30 minutes")))),Object(a.b)("h1",{id:"details"},"Details"),Object(a.b)("h2",{id:"discussion"},"Discussion"),Object(a.b)("p",null,"In the end, this turns into a simple math discussion.  You need to provide A minutes of judging for B total teams.  Now, the traditional method of doing this would be to take B total teams and multiply it by C minutes to come up with the total amount of time for traditional theatre style judging."),Object(a.b)("p",null,"This is a train wreck for any reasonable value of either B or C.   At the end of 30+ hours of hacking you're now asking people to sit through B*C minutes of serial presentations.  You're worried about that total time so you end up reducing C to the point that the teams that have been working this whole time feel like they didn't get an opportunity to really present what it is they accomplished.  Now they're irritated and less likely to come back next year, and you have a cycle of decay."),Object(a.b)("p",null,"Or, you don't reduce C.  You now make it so everyone there has to sit through 1+ hours of presentations that are less and less interesting as time goes on, and they are less likely to come back next year, and you have a cycle of decay.  (No, I didn't cut-n-paste that)."),Object(a.b)("h2",{id:"criteria"},"Criteria"),Object(a.b)("p",null,"You should spend a lot of time thinking about your criteria for judging.  Regardless as to what you come up with, you absolutely should do the following things:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Specifically call them out to the teams at the beginning of the hackathon"),Object(a.b)("li",{parentName:"ul"},"Use the same criteria for round 1 and 2")),Object(a.b)("h2",{id:"round-1---expo-style-aka-science-fair"},"Round 1 - Expo Style (aka Science Fair)"),Object(a.b)("p",null,"The first round of judging has a couple of goals: "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Ensure that the judges have enough time to really know the projects. "),Object(a.b)("li",{parentName:"ul"},"Ensure the projects have an opportunity to present more than C minutes."),Object(a.b)("li",{parentName:"ul"},"Try to make sure that the most deserving projects make it to Round 2.")),Object(a.b)("p",null,"To this end, you have another math problem to solve.  To maximize the chances that you have great outcomes you have the following constraints:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Each team must be seen by at least two judges"),Object(a.b)("li",{parentName:"ul"},"The two judges need to see the team independently to avoid skewing the perspectives"),Object(a.b)("li",{parentName:"ul"},"The judges need enough time to credibly evaluate the teams")),Object(a.b)("p",null,"The math now looks something like:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"You have D teams"),Object(a.b)("li",{parentName:"ul"},"Because each team needs to be visited twice, you have D * 2 total visits to account for."),Object(a.b)("li",{parentName:"ul"},"You need to get round 1 done in E minutes. ")),Object(a.b)("p",null,"Let's take a brief step back and figure out how you would calculate E.  "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"You want the entire hackathon to finish by time Z (for the sake of this example, let's call that 5:00 p.m. or 1700.  Why?  Because after two days, most people are more than ready to be done by then.)"),Object(a.b)("li",{parentName:"ul"},"Award presentation needs to start by about Z - :15 (unless you're a super chatty group)"),Object(a.b)("li",{parentName:"ul"},"A good rule of thumb for judge deliberation at each round is 30 minutes.  This means round 2 needs to be complete at Z - :45 or 1615."),Object(a.b)("li",{parentName:"ul"},"Now, round 2 is bounded by the total number of teams in the finals (Y) * their presentation time (X) + 1 minute for transition.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"My recommendation on this is 5 teams * ( 4 + 1 ) minutes = 25 minutes.  For the sake of simplicity, let's call it :30, which is 1545."))),Object(a.b)("li",{parentName:"ul"},"This means that Round 1 judging deliberation goes from 1545 to 1615."),Object(a.b)("li",{parentName:"ul"},"E is now the time between when the hackathon ends and 1545.  In our experience a good stop time is 1430 with a judging start time of 1445.  This means that E is now 60 minutes.  Feel free to adjust, but this will get you in the ballpark.")),Object(a.b)("p",null,"Now, back to figuring out two critical things:  "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"How much time does each team get?"),Object(a.b)("li",{parentName:"ul"},"How many judges do I need?")),Object(a.b)("p",null,"It's just math."),Object(a.b)("p",null,"In our experience, having each judge get 8 minutes with each team, plus a minute of slack for tallying and moving to the next team works well.  That's 9 total minutes."),Object(a.b)("p",null,"You have 60 minutes to get D*2 visits done.  "),Object(a.b)("p",null,"60 minutes / 9 = 6.67 visits per judge.  You are time limited by the max of that, so it's now 7 visits per judge.  7 * 9 = 63 minutes, which is close."),Object(a.b)("p",null,"So now, you need F judges, where F is calculated as: "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Total Visit time = D Teams ",Object(a.b)("em",{parentName:"li"}," 2 visits ")," 9 minutes == D * 18 "),Object(a.b)("li",{parentName:"ul"},"So for 60 minutes, you need 60/18 == 3.3 teams per judge")),Object(a.b)("p",null,"So, the example math now looks like:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"20 teams / 3.3 = 6 judges"),Object(a.b)("li",{parentName:"ul"},"30 teams / 3.3 = 9 judges")),Object(a.b)("p",null,"So, now you can tell that you want a lot of judges.  How many may vary, but it's hard to have too many."),Object(a.b)("h2",{id:"round-2"},"Round 2"),Object(a.b)("p",null,"This is far simpler.  Now the goal is to have the finalists (recommendation is 5) present to all the judges.  The good news here, is that is bounded by the number of teams (F) and the presentation time.  "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Our recommendation is that presentation time be 4 minutes, broken up as:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"1 minute of presentation"),Object(a.b)("li",{parentName:"ul"},"3 minutes of demo")))),Object(a.b)("p",null,"You ",Object(a.b)("em",{parentName:"p"},"need")," to emphasize demo here, otherwise the question is whether or not a team just created slides or a working product."),Object(a.b)("p",null,"If you go with F teams and 5 minutes the number of judges doesn't matter, since they all judge at the same time.  F = 5 * 4 minutes + slack time puts you at about 30 minutes, as laid out above."))}s.isMDXComponent=!0},121:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),c=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},b=function(e){var t=c(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=c(n),d=o,h=b["".concat(r,".").concat(d)]||b[d]||m[d]||i;return n?a.a.createElement(h,u(u({ref:t},s),{},{components:n})):a.a.createElement(h,u({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,r[1]=u;for(var s=2;s<i;s++)r[s]=n[s];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);