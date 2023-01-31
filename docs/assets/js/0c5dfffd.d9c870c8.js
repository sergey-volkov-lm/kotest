"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[94149],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(67294),a=n(86010),o="tabItem_Ymn6";function s(e){var t=e.children,n=e.hidden,s=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,s),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(87462),a=n(67294),o=n(86010),s=n(72389),l=n(67392),i=n(7094),p=n(12466),u="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,n,s=e.lazy,d=e.block,m=e.defaultValue,f=e.values,h=e.groupId,v=e.className,g=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.l)(y,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(t=null!=m?m:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==k&&!y.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,i.U)(),x=w.tabGroupChoices,N=w.setTabGroupChoices,T=(0,a.useState)(k),O=T[0],j=T[1],E=[],P=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var I=x[h];null!=I&&I!==O&&y.some((function(e){return e.value===I}))&&j(I)}var M=function(e){var t=e.currentTarget,n=E.indexOf(t),r=y[n].value;r!==O&&(P(t),j(r),null!=h&&N(h,String(r)))},Z=function(e){var t,n=null;switch(e.key){case"Enter":M(e);break;case"ArrowRight":var r,a=E.indexOf(e.currentTarget)+1;n=null!=(r=E[a])?r:E[0];break;case"ArrowLeft":var o,s=E.indexOf(e.currentTarget)-1;n=null!=(o=E[s])?o:E[E.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},v)},y.map((function(e){var t=e.value,n=e.label,s=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return E.push(e)},onKeyDown:Z,onClick:M},s,{className:(0,o.Z)("tabs__item",c,null==s?void 0:s.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),s?(0,a.cloneElement)(g.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function m(e){var t=(0,s.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},42629:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=n(65488),l=n(85162),i=["components"],p={id:"index",title:"Property-based Testing",slug:"property-based-testing.html",sidebar_label:"Introduction"},u=void 0,c={unversionedId:"proptest/index",id:"proptest/index",title:"Property-based Testing",description:"Kotest is split into several subprojects which can be used independently. One of these subprojects is the property test framework.",source:"@site/docs/proptest/index.mdx",sourceDirName:"proptest",slug:"/proptest/property-based-testing.html",permalink:"/docs/next/proptest/property-based-testing.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/proptest/index.mdx",tags:[],version:"current",frontMatter:{id:"index",title:"Property-based Testing",slug:"property-based-testing.html",sidebar_label:"Introduction"},sidebar:"proptest",next:{title:"Test Functions",permalink:"/docs/next/proptest/property-test-functions.html"}},d={},m=[{value:"What is Property Testing?",id:"what-is-property-testing",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Next Steps",id:"next-steps",level:2}],f={toc:m};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Kotest is split into several subprojects which can be used independently. One of these subprojects is the property test framework.\nYou do ",(0,o.kt)("strong",{parentName:"p"},"not")," need to be using Kotest as your test framework (although you should!) to benefit from the property test support."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://search.maven.org/search?q=g:io.kotest"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/maven-central/v/io.kotest/kotest-property.svg?label=release",alt:"version badge"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://oss.sonatype.org/content/repositories/snapshots/io/kotest/"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/nexus/s/https/oss.sonatype.org/io.kotest/kotest-framework-engine.svg?label=snapshot",alt:"version badge"}))),(0,o.kt)("h2",{id:"what-is-property-testing"},"What is Property Testing?"),(0,o.kt)("p",null,"Developers typically write example-based tests. These are your garden variety unit tests you know and love.\nYou provide some inputs, and some expected results, and a test framework like Kotest or JUnit checks that the actual\nresults meet the expectations."),(0,o.kt)("p",null,"One problem with this approach is that it is very easy to miss errors due to edge cases that the developer didn't think about,\nor lack of coverage in the chosen inputs. Instead, with property testing, hundreds or thousands of values are fed into the same test,\nand the values are (usually) randomly generated by your property test framework."),(0,o.kt)("p",null,"For example, a good property test framework will include values like negative infinity, empty lists, strings with non-ascii characters, and so on.\nThings we often forget about when writing example based tests."),(0,o.kt)("p",null,"Property tests were originally conceived in frameworks like Quickcheck with the notion of testing a ",(0,o.kt)("em",{parentName:"p"},"property")," on some object,\nie. something that should hold true for all inputs. An invariant in other words.  An example of an invariant is given two strings,\na and b, then ",(0,o.kt)("em",{parentName:"p"},"length(a + b)")," should always be equal to ",(0,o.kt)("em",{parentName:"p"},"length(a) + length(b)"),"."),(0,o.kt)("p",null,"That is where the term ",(0,o.kt)("em",{parentName:"p"},"property testing")," originates."),(0,o.kt)("p",null,"However, you do not have to use property tests to only test things like monad laws or basic numeric functions. Any test that\nwould benefit from a wide array of input values is a good candidate. For example, we might have a function that validates usernames, and we want to test that valid emails are accepted. A property test would be useful here in generating 1000s of combinations to help harden our validation logic."),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"The property test framework is supported on all targets."),(0,o.kt)(s.Z,{defaultValue:"JVM/Gradle",values:[{label:"JVM/Gradle",value:"JVM/Gradle"},{label:"JVM/Maven",value:"JVM/Maven"},{label:"Multiplatform",value:"Multiplatform"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"JVM/Gradle",mdxType:"TabItem"},(0,o.kt)("p",null,"Add the following dependency to your build:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'dependencies {\n   testImplementation("io.kotest:kotest-property:$version")\n}\n'))),(0,o.kt)(l.Z,{value:"JVM/Maven",mdxType:"TabItem"},(0,o.kt)("p",null,"Add the following dependency to your build."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n   <groupId>io.kotest</groupId>\n   <artifactId>kotest-property-jvm</artifactId>\n   <version>${version}</version>\n   <scope>test</scope>\n</dependency>\n"))),(0,o.kt)(l.Z,{value:"Multiplatform",mdxType:"TabItem"},(0,o.kt)("p",null,"   Add the following dependency to your ",(0,o.kt)("inlineCode",{parentName:"p"},"commonTest")," sourceset:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'kotlin {\n  sourceSets {\n    val commonTest by getting {\n      dependencies {\n        implementation("io.kotest:kotest-property:$version")\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Alternatively, add the dependency to a specific target.\nFor example, we could add to the Javascript target only be using the ",(0,o.kt)("inlineCode",{parentName:"p"},"jsTest")," sourceset."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'kotlin {\n   targets {\n      js {\n         browser()\n         nodejs()\n      }\n   }\n   sourceSets {\n      val jsTest by getting {\n         dependencies {\n            implementation("io.kotest:kotest-property:$version")\n         }\n      }\n   }\n}\n')))),(0,o.kt)("h2",{id:"next-steps"},"Next Steps"),(0,o.kt)("p",null,"To create input values for tests, Kotest uses the term ",(0,o.kt)("em",{parentName:"p"},"generator"),". One generator per input argument is passed to a ",(0,o.kt)("em",{parentName:"p"},"test function"),",\nand the test will execute for a set number of ",(0,o.kt)("em",{parentName:"p"},"iterations"),"."),(0,o.kt)("p",null,"Read more about"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"How ",(0,o.kt)("a",{parentName:"li",href:"/docs/next/proptest/property-test-functions.html"},"test functions")," are used."),(0,o.kt)("li",{parentName:"ul"},"The different types of ",(0,o.kt)("a",{parentName:"li",href:"/docs/next/proptest/property-test-generators.html"},"generators")," and ",(0,o.kt)("a",{parentName:"li",href:"/docs/next/proptest/generator-operations.html"},"operations")," on them."),(0,o.kt)("li",{parentName:"ul"},"How to write a ",(0,o.kt)("a",{parentName:"li",href:"/docs/next/proptest/custom-generators.html"},"custom generator"),"."),(0,o.kt)("li",{parentName:"ul"},"How to specify ",(0,o.kt)("a",{parentName:"li",href:"/docs/next/proptest/property-test-config.html"},"config")," for a test, including the seed.")))}h.isMDXComponent=!0}}]);