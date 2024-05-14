"use strict";(self.webpackChunk_cdssnc_gcds_components=self.webpackChunk_cdssnc_gcds_components||[]).push([[3669],{"./src/components/gcds-pagination/stories/gcds-pagination.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,ListEn:()=>ListEn,ListFr:()=>ListFr,Playground:()=>Playground,Props:()=>Props,SimpleEn:()=>SimpleEn,SimpleFr:()=>SimpleFr,UrlMatch:()=>UrlMatch,UrlOffset:()=>UrlOffset,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Pagination",argTypes:{label:{name:"label",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}},type:{required:!0}},display:{control:"select",options:["list","simple"],table:{type:{summary:"string"},defaultValue:{summary:"list"}}},nextHref:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},nextLabel:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},previousHref:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},previousLabel:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},totalPages:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},currentPage:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},url:{name:"url",control:"text",description:'{ "queryStrings": { "key": "value" }, "fragment": string }',table:{type:{summary:"string/object"},defaultValue:{summary:"-"}}},...__webpack_require__("./src/utils/storybook/component-properties.js").q_}},Template=args=>`\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-pagination\n  ${"list"!=args.display?`display="${args.display}"`:null}\n  label="${args.label}"\n  ${"list"==args.display?`${args.totalPages?`total-pages="${args.totalPages}"`:null}\n  ${args.currentPage?`current-page="${args.currentPage}"`:null}\n  ${args.url?`url='${args.url}'`:null}`:`${args.previousHref?`previous-href="${args.previousHref}"`:null}\n  ${args.previousLabel?`previous-label="${args.previousLabel}"`:null}\n  ${args.nextHref?`next-href="${args.nextHref}"`:null}\n  ${args.nextLabel?`next-label="${args.nextLabel}"`:null}`}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n</gcds-pagination>\n\n\x3c!-- React code --\x3e\n<GcdsPagination\n  ${"list"!=args.display?`display="${args.display}"`:null}\n  label="${args.label}"\n  ${"list"==args.display?`${args.totalPages?`totalPages="${args.totalPages}"`:null}\n  ${args.currentPage?`currentPage="${args.currentPage}"`:null}\n  ${args.url?`url='${args.url}'`:null}`:`${args.previousHref?`previousHref="${args.previousHref}"`:null}\n  ${args.previousLabel?`previousLabel="${args.previousLabel}"`:null}\n  ${args.nextHref?`nextHref="${args.nextHref}"`:null}\n  ${args.nextLabel?`nextLabel="${args.nextLabel}"`:null}`}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n</GcdsPagination>\n`.replace(/\s\snull\n/g,""),Default=Template.bind({});Default.args={display:"list",label:"Pagination",currentPage:"9",totalPages:"15",url:"",previousHref:"#previous",previousLabel:"",nextHref:"#next",nextLabel:"",lang:"en"};const SimpleEn=Template.bind({});SimpleEn.args={display:"simple",label:"Pagination",currentPage:"",totalPages:"",url:"",previousHref:"#previous",previousLabel:"Title of page",nextHref:"#next",nextLabel:"3 of 3",lang:"en"};const SimpleFr=Template.bind({});SimpleFr.args={display:"simple",label:"Pagination",currentPage:"",totalPages:"",url:"",previousHref:"#previous",previousLabel:"Titre de la page",nextHref:"#next",nextLabel:"3 du 3",lang:"fr"};const ListEn=Template.bind({});ListEn.args={display:"list",label:"Pagination",currentPage:"9",totalPages:"15",url:"",previousHref:"",previousLabel:"",nextHref:"",nextLabel:"",lang:"en"};const ListFr=Template.bind({});ListFr.args={display:"list",label:"Pagination",currentPage:"9",totalPages:"15",url:"",previousHref:"",previousLabel:"",nextHref:"",nextLabel:"",lang:"fr"};const UrlOffset=Template.bind({});UrlOffset.args={display:"list",label:"Pagination",currentPage:"9",totalPages:"15",url:'{"queryStrings": { "querystring::offset": 10 }, "fragment": "main" }',previousHref:"",previousLabel:"",nextHref:"",nextLabel:"",lang:"en"};const UrlMatch=Template.bind({});UrlMatch.args={display:"list",label:"Pagination",currentPage:"9",totalPages:"15",url:'{"queryStrings": { "querystring::match": 10 }, "fragment": "main" }',previousHref:"",previousLabel:"",nextHref:"",nextLabel:"",lang:"en"};const Props=Template.bind({});Props.args={display:"list",label:"Pagination",currentPage:"9",totalPages:"15",url:"",previousHref:"#previous",previousLabel:"",nextHref:"#next",nextLabel:"",lang:"en"};const Playground=(args=>`\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-pagination\n  ${"list"!=args.display?`display="${args.display}"`:null}\n  label="${args.label}"\n  ${"list"==args.display?`${args.totalPages?`total-pages="${args.totalPages}"`:null}\n  ${args.currentPage?`current-page="${args.currentPage}"`:null}\n  ${args.url?`url='${args.url}'`:null}`:`${args.previousHref?`previous-href="${args.previousHref}"`:null}\n  ${args.previousLabel?`previous-label="${args.previousLabel}"`:null}\n  ${args.nextHref?`next-href="${args.nextHref}"`:null}\n  ${args.nextLabel?`next-label="${args.nextLabel}"`:null}`}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n</gcds-pagination>\n`.replace(/\s\snull\n/g,"")).bind({});Playground.args={display:"list",label:"Pagination",currentPage:"9",totalPages:"15",url:"",previousHref:"#previous",previousLabel:"",nextHref:"#next",nextLabel:"",lang:"en"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-pagination\n  ${args.display != \'list\' ? `display="${args.display}"` : null}\n  label="${args.label}"\n  ${args.display == \'list\' ? `${args.totalPages ? `total-pages="${args.totalPages}"` : null}\n  ${args.currentPage ? `current-page="${args.currentPage}"` : null}\n  ${args.url ? `url=\'${args.url}\'` : null}` : `${args.previousHref ? `previous-href="${args.previousHref}"` : null}\n  ${args.previousLabel ? `previous-label="${args.previousLabel}"` : null}\n  ${args.nextHref ? `next-href="${args.nextHref}"` : null}\n  ${args.nextLabel ? `next-label="${args.nextLabel}"` : null}`}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-pagination>\n\n\x3c!-- React code --\x3e\n<GcdsPagination\n  ${args.display != \'list\' ? `display="${args.display}"` : null}\n  label="${args.label}"\n  ${args.display == \'list\' ? `${args.totalPages ? `totalPages="${args.totalPages}"` : null}\n  ${args.currentPage ? `currentPage="${args.currentPage}"` : null}\n  ${args.url ? `url=\'${args.url}\'` : null}` : `${args.previousHref ? `previousHref="${args.previousHref}"` : null}\n  ${args.previousLabel ? `previousLabel="${args.previousLabel}"` : null}\n  ${args.nextHref ? `nextHref="${args.nextHref}"` : null}\n  ${args.nextLabel ? `nextLabel="${args.nextLabel}"` : null}`}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</GcdsPagination>\n`.replace(/\\s\\snull\\n/g, \'\')',...Default.parameters?.docs?.source}}},SimpleEn.parameters={...SimpleEn.parameters,docs:{...SimpleEn.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-pagination\n  ${args.display != \'list\' ? `display="${args.display}"` : null}\n  label="${args.label}"\n  ${args.display == \'list\' ? `${args.totalPages ? `total-pages="${args.totalPages}"` : null}\n  ${args.currentPage ? `current-page="${args.currentPage}"` : null}\n  ${args.url ? `url=\'${args.url}\'` : null}` : `${args.previousHref ? `previous-href="${args.previousHref}"` : null}\n  ${args.previousLabel ? `previous-label="${args.previousLabel}"` : null}\n  ${args.nextHref ? `next-href="${args.nextHref}"` : null}\n  ${args.nextLabel ? `next-label="${args.nextLabel}"` : null}`}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-pagination>\n\n\x3c!-- React code --\x3e\n<GcdsPagination\n  ${args.display != \'list\' ? `display="${args.display}"` : null}\n  label="${args.label}"\n  ${args.display == \'list\' ? `${args.totalPages ? `totalPages="${args.totalPages}"` : null}\n  ${args.currentPage ? `currentPage="${args.currentPage}"` : null}\n  ${args.url ? `url=\'${args.url}\'` : null}` : `${args.previousHref ? `previousHref="${args.previousHref}"` : null}\n  ${args.previousLabel ? `previousLabel="${args.previousLabel}"` : null}\n  ${args.nextHref ? `nextHref="${args.nextHref}"` : null}\n  ${args.nextLabel ? `nextLabel="${args.nextLabel}"` : null}`}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</GcdsPagination>\n`.replace(/\\s\\snull\\n/g, \'\')',...SimpleEn.parameters?.docs?.source}}},SimpleFr.parameters={...SimpleFr.parameters,docs:{...SimpleFr.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-pagination\n  ${args.display != \'list\' ? `display="${args.display}"` : null}\n  label="${args.label}"\n  ${args.display == \'list\' ? `${args.totalPages ? `total-pages="${args.totalPages}"` : null}\n  ${args.currentPage ? `current-page="${args.currentPage}"` : null}\n  ${args.url ? `url=\'${args.url}\'` : null}` : `${args.previousHref ? `previous-href="${args.previousHref}"` : null}\n  ${args.previousLabel ? `previous-label="${args.previousLabel}"` : null}\n  ${args.nextHref ? `next-href="${args.nextHref}"` : null}\n  ${args.nextLabel ? `next-label="${args.nextLabel}"` : null}`}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-pagination>\n\n\x3c!-- React code --\x3e\n<GcdsPagination\n  ${args.display != \'list\' ? `display="${args.display}"` : null}\n  label="${args.label}"\n  ${args.display == \'list\' ? `${args.totalPages ? `totalPages="${args.totalPages}"` : null}\n  ${args.currentPage ? `currentPage="${args.currentPage}"` : null}\n  ${args.url ? `url=\'${args.url}\'` : null}` : `${args.previousHref ? `previousHref="${args.previousHref}"` : null}\n  ${args.previousLabel ? `previousLabel="${args.previousLabel}"` : null}\n  ${args.nextHref ? `nextHref="${args.nextHref}"` : null}\n  ${args.nextLabel ? `nextLabel="${args.nextLabel}"` : null}`}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</GcdsPagination>\n`.replace(/\\s\\snull\\n/g, \'\')',...SimpleFr.parameters?.docs?.source}}},ListEn.parameters={...ListEn.parameters,docs:{...ListEn.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-pagination\n  ${args.display != \'list\' ? `display="${args.display}"` : null}\n  label="${args.label}"\n  ${args.display == \'list\' ? `${args.totalPages ? `total-pages="${args.totalPages}"` : null}\n  ${args.currentPage ? `current-page="${args.currentPage}"` : null}\n  ${args.url ? `url=\'${args.url}\'` : null}` : `${args.previousHref ? `previous-href="${args.previousHref}"` : null}\n  ${args.previousLabel ? `previous-label="${args.previousLabel}"` : null}\n  ${args.nextHref ? `next-href="${args.nextHref}"` : null}\n  ${args.nextLabel ? `next-label="${args.nextLabel}"` : null}`}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-pagination>\n\n\x3c!-- React code --\x3e\n<GcdsPagination\n  ${args.display != \'list\' ? `display="${args.display}"` : null}\n  label="${args.label}"\n  ${args.display == \'list\' ? `${args.totalPages ? `totalPages="${args.totalPages}"` : null}\n  ${args.currentPage ? `currentPage="${args.currentPage}"` : null}\n  ${args.url ? `url=\'${args.url}\'` : null}` : `${args.previousHref ? `previousHref="${args.previousHref}"` : null}\n  ${args.previousLabel ? `previousLabel="${args.previousLabel}"` : null}\n  ${args.nextHref ? `nextHref="${args.nextHref}"` : null}\n  ${args.nextLabel ? `nextLabel="${args.nextLabel}"` : null}`}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</GcdsPagination>\n`.replace(/\\s\\snull\\n/g, \'\')',...ListEn.parameters?.docs?.source}}},ListFr.parameters={...ListFr.parameters,docs:{...ListFr.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-pagination\n  ${args.display != \'list\' ? `display="${args.display}"` : null}\n  label="${args.label}"\n  ${args.display == \'list\' ? `${args.totalPages ? `total-pages="${args.totalPages}"` : null}\n  ${args.currentPage ? `current-page="${args.currentPage}"` : null}\n  ${args.url ? `url=\'${args.url}\'` : null}` : `${args.previousHref ? `previous-href="${args.previousHref}"` : null}\n  ${args.previousLabel ? `previous-label="${args.previousLabel}"` : null}\n  ${args.nextHref ? `next-href="${args.nextHref}"` : null}\n  ${args.nextLabel ? `next-label="${args.nextLabel}"` : null}`}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-pagination>\n\n\x3c!-- React code --\x3e\n<GcdsPagination\n  ${args.display != \'list\' ? `display="${args.display}"` : null}\n  label="${args.label}"\n  ${args.display == \'list\' ? `${args.totalPages ? `totalPages="${args.totalPages}"` : null}\n  ${args.currentPage ? `currentPage="${args.currentPage}"` : null}\n  ${args.url ? `url=\'${args.url}\'` : null}` : `${args.previousHref ? `previousHref="${args.previousHref}"` : null}\n  ${args.previousLabel ? `previousLabel="${args.previousLabel}"` : null}\n  ${args.nextHref ? `nextHref="${args.nextHref}"` : null}\n  ${args.nextLabel ? `nextLabel="${args.nextLabel}"` : null}`}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</GcdsPagination>\n`.replace(/\\s\\snull\\n/g, \'\')',...ListFr.parameters?.docs?.source}}},UrlOffset.parameters={...UrlOffset.parameters,docs:{...UrlOffset.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-pagination\n  ${args.display != \'list\' ? `display="${args.display}"` : null}\n  label="${args.label}"\n  ${args.display == \'list\' ? `${args.totalPages ? `total-pages="${args.totalPages}"` : null}\n  ${args.currentPage ? `current-page="${args.currentPage}"` : null}\n  ${args.url ? `url=\'${args.url}\'` : null}` : `${args.previousHref ? `previous-href="${args.previousHref}"` : null}\n  ${args.previousLabel ? `previous-label="${args.previousLabel}"` : null}\n  ${args.nextHref ? `next-href="${args.nextHref}"` : null}\n  ${args.nextLabel ? `next-label="${args.nextLabel}"` : null}`}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-pagination>\n\n\x3c!-- React code --\x3e\n<GcdsPagination\n  ${args.display != \'list\' ? `display="${args.display}"` : null}\n  label="${args.label}"\n  ${args.display == \'list\' ? `${args.totalPages ? `totalPages="${args.totalPages}"` : null}\n  ${args.currentPage ? `currentPage="${args.currentPage}"` : null}\n  ${args.url ? `url=\'${args.url}\'` : null}` : `${args.previousHref ? `previousHref="${args.previousHref}"` : null}\n  ${args.previousLabel ? `previousLabel="${args.previousLabel}"` : null}\n  ${args.nextHref ? `nextHref="${args.nextHref}"` : null}\n  ${args.nextLabel ? `nextLabel="${args.nextLabel}"` : null}`}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</GcdsPagination>\n`.replace(/\\s\\snull\\n/g, \'\')',...UrlOffset.parameters?.docs?.source}}},UrlMatch.parameters={...UrlMatch.parameters,docs:{...UrlMatch.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-pagination\n  ${args.display != \'list\' ? `display="${args.display}"` : null}\n  label="${args.label}"\n  ${args.display == \'list\' ? `${args.totalPages ? `total-pages="${args.totalPages}"` : null}\n  ${args.currentPage ? `current-page="${args.currentPage}"` : null}\n  ${args.url ? `url=\'${args.url}\'` : null}` : `${args.previousHref ? `previous-href="${args.previousHref}"` : null}\n  ${args.previousLabel ? `previous-label="${args.previousLabel}"` : null}\n  ${args.nextHref ? `next-href="${args.nextHref}"` : null}\n  ${args.nextLabel ? `next-label="${args.nextLabel}"` : null}`}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-pagination>\n\n\x3c!-- React code --\x3e\n<GcdsPagination\n  ${args.display != \'list\' ? `display="${args.display}"` : null}\n  label="${args.label}"\n  ${args.display == \'list\' ? `${args.totalPages ? `totalPages="${args.totalPages}"` : null}\n  ${args.currentPage ? `currentPage="${args.currentPage}"` : null}\n  ${args.url ? `url=\'${args.url}\'` : null}` : `${args.previousHref ? `previousHref="${args.previousHref}"` : null}\n  ${args.previousLabel ? `previousLabel="${args.previousLabel}"` : null}\n  ${args.nextHref ? `nextHref="${args.nextHref}"` : null}\n  ${args.nextLabel ? `nextLabel="${args.nextLabel}"` : null}`}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</GcdsPagination>\n`.replace(/\\s\\snull\\n/g, \'\')',...UrlMatch.parameters?.docs?.source}}},Props.parameters={...Props.parameters,docs:{...Props.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-pagination\n  ${args.display != \'list\' ? `display="${args.display}"` : null}\n  label="${args.label}"\n  ${args.display == \'list\' ? `${args.totalPages ? `total-pages="${args.totalPages}"` : null}\n  ${args.currentPage ? `current-page="${args.currentPage}"` : null}\n  ${args.url ? `url=\'${args.url}\'` : null}` : `${args.previousHref ? `previous-href="${args.previousHref}"` : null}\n  ${args.previousLabel ? `previous-label="${args.previousLabel}"` : null}\n  ${args.nextHref ? `next-href="${args.nextHref}"` : null}\n  ${args.nextLabel ? `next-label="${args.nextLabel}"` : null}`}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-pagination>\n\n\x3c!-- React code --\x3e\n<GcdsPagination\n  ${args.display != \'list\' ? `display="${args.display}"` : null}\n  label="${args.label}"\n  ${args.display == \'list\' ? `${args.totalPages ? `totalPages="${args.totalPages}"` : null}\n  ${args.currentPage ? `currentPage="${args.currentPage}"` : null}\n  ${args.url ? `url=\'${args.url}\'` : null}` : `${args.previousHref ? `previousHref="${args.previousHref}"` : null}\n  ${args.previousLabel ? `previousLabel="${args.previousLabel}"` : null}\n  ${args.nextHref ? `nextHref="${args.nextHref}"` : null}\n  ${args.nextLabel ? `nextLabel="${args.nextLabel}"` : null}`}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</GcdsPagination>\n`.replace(/\\s\\snull\\n/g, \'\')',...Props.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-pagination\n  ${args.display != \'list\' ? `display="${args.display}"` : null}\n  label="${args.label}"\n  ${args.display == \'list\' ? `${args.totalPages ? `total-pages="${args.totalPages}"` : null}\n  ${args.currentPage ? `current-page="${args.currentPage}"` : null}\n  ${args.url ? `url=\'${args.url}\'` : null}` : `${args.previousHref ? `previous-href="${args.previousHref}"` : null}\n  ${args.previousLabel ? `previous-label="${args.previousLabel}"` : null}\n  ${args.nextHref ? `next-href="${args.nextHref}"` : null}\n  ${args.nextLabel ? `next-label="${args.nextLabel}"` : null}`}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-pagination>\n`.replace(/\\s\\snull\\n/g, \'\')',...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["Default","SimpleEn","SimpleFr","ListEn","ListFr","UrlOffset","UrlMatch","Props","Playground"]},"./src/utils/storybook/component-properties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h4:()=>validatorProps,q_:()=>langProp});const langProp={lang:{control:{type:"select"},options:["en","fr"],table:{type:{summary:"string"},defaultValue:{summary:"en"}}}},validatorProps={validateOn:{name:"validate-on",control:{type:"select"},options:["blur","other"],table:{type:{summary:"string"},defaultValue:{summary:"blur"}}}}}}]);