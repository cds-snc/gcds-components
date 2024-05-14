"use strict";(self.webpackChunk_cdssnc_gcds_components=self.webpackChunk_cdssnc_gcds_components||[]).push([[6999],{"./src/components/gcds-search/stories/gcds-search.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Custom:()=>Custom,Default:()=>Default,French:()=>French,Playground:()=>Playground,Props:()=>Props,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Search",argTypes:{action:{name:"action",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"/sr/srb.html"}}},name:{name:"name",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"q"}}},placeholder:{name:"placeholder",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"Canada.ca"}}},method:{control:"select",options:["get","post"],table:{type:{summary:"string"},defaultValue:{summary:"get"}}},searchId:{name:"search-id",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"search"}}},...__webpack_require__("./src/utils/storybook/component-properties.js").q_}},Template=args=>`\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-search\n  ${"/sr/srb.html"!=args.action?`action="${args.action}"`:null}\n  ${"get"!=args.method?`method="${args.method}"`:null}\n  ${"q"!=args.name?`name="${args.name}"`:null}\n  ${"Canada.ca"!=args.placeholder?`placeholder="${args.placeholder}"`:null}\n  ${"search"!=args.searchId?`search-id="${args.searchId}"`:null}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n</gcds-search>\n\n\x3c!-- React code --\x3e\n<GcdsSearch\n  ${"/sr/srb.html"!=args.action?`action="${args.action}"`:null}\n  ${"get"!=args.method?`method="${args.method}"`:null}\n  ${"q"!=args.name?`name="${args.name}"`:null}\n  ${"Canada.ca"!=args.placeholder?`placeholder="${args.placeholder}"`:null}\n  ${"search"!=args.searchId?`searchId="${args.searchId}"`:null}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n</GcdsSearch>\n`.replace(/\s\snull\n/g,""),Default=Template.bind({});Default.args={action:"/sr/srb.html",method:"get",name:"q",placeholder:"Canada.ca",searchId:"search",lang:"en"};const French=Template.bind({});French.args={action:"/sr/srb.html",method:"get",name:"q",placeholder:"Canada.ca",searchId:"search",lang:"fr"};const Custom=Template.bind({});Custom.args={action:"search.html",method:"post",name:"search",placeholder:"sitename",searchId:"searchform",lang:"en"};const Props=Template.bind({});Props.args={action:"/sr/srb.html",method:"get",name:"q",placeholder:"Canada.ca",searchId:"search",lang:"en"};const Playground=(args=>`\n<gcds-search\n  ${"/sr/srb.html"!=args.action?`action="${args.action}"`:null}\n  ${"get"!=args.method?`method="${args.method}"`:null}\n  ${"q"!=args.name?`name="${args.name}"`:null}\n  ${"Canada.ca"!=args.placeholder?`placeholder="${args.placeholder}"`:null}\n  ${"search"!=args.searchId?`search-id="${args.searchId}"`:null}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n</gcds-search>\n`).bind({});Playground.args={action:"/sr/srb.html",method:"get",name:"q",placeholder:"Canada.ca",searchId:"search",lang:"en"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-search\n  ${args.action != '/sr/srb.html' ? `action=\"${args.action}\"` : null}\n  ${args.method != 'get' ? `method=\"${args.method}\"` : null}\n  ${args.name != 'q' ? `name=\"${args.name}\"` : null}\n  ${args.placeholder != 'Canada.ca' ? `placeholder=\"${args.placeholder}\"` : null}\n  ${args.searchId != 'search' ? `search-id=\"${args.searchId}\"` : null}\n  ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}\n>\n</gcds-search>\n\n\x3c!-- React code --\x3e\n<GcdsSearch\n  ${args.action != '/sr/srb.html' ? `action=\"${args.action}\"` : null}\n  ${args.method != 'get' ? `method=\"${args.method}\"` : null}\n  ${args.name != 'q' ? `name=\"${args.name}\"` : null}\n  ${args.placeholder != 'Canada.ca' ? `placeholder=\"${args.placeholder}\"` : null}\n  ${args.searchId != 'search' ? `searchId=\"${args.searchId}\"` : null}\n  ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}\n>\n</GcdsSearch>\n`.replace(/\\s\\snull\\n/g, '')",...Default.parameters?.docs?.source}}},French.parameters={...French.parameters,docs:{...French.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-search\n  ${args.action != '/sr/srb.html' ? `action=\"${args.action}\"` : null}\n  ${args.method != 'get' ? `method=\"${args.method}\"` : null}\n  ${args.name != 'q' ? `name=\"${args.name}\"` : null}\n  ${args.placeholder != 'Canada.ca' ? `placeholder=\"${args.placeholder}\"` : null}\n  ${args.searchId != 'search' ? `search-id=\"${args.searchId}\"` : null}\n  ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}\n>\n</gcds-search>\n\n\x3c!-- React code --\x3e\n<GcdsSearch\n  ${args.action != '/sr/srb.html' ? `action=\"${args.action}\"` : null}\n  ${args.method != 'get' ? `method=\"${args.method}\"` : null}\n  ${args.name != 'q' ? `name=\"${args.name}\"` : null}\n  ${args.placeholder != 'Canada.ca' ? `placeholder=\"${args.placeholder}\"` : null}\n  ${args.searchId != 'search' ? `searchId=\"${args.searchId}\"` : null}\n  ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}\n>\n</GcdsSearch>\n`.replace(/\\s\\snull\\n/g, '')",...French.parameters?.docs?.source}}},Custom.parameters={...Custom.parameters,docs:{...Custom.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-search\n  ${args.action != '/sr/srb.html' ? `action=\"${args.action}\"` : null}\n  ${args.method != 'get' ? `method=\"${args.method}\"` : null}\n  ${args.name != 'q' ? `name=\"${args.name}\"` : null}\n  ${args.placeholder != 'Canada.ca' ? `placeholder=\"${args.placeholder}\"` : null}\n  ${args.searchId != 'search' ? `search-id=\"${args.searchId}\"` : null}\n  ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}\n>\n</gcds-search>\n\n\x3c!-- React code --\x3e\n<GcdsSearch\n  ${args.action != '/sr/srb.html' ? `action=\"${args.action}\"` : null}\n  ${args.method != 'get' ? `method=\"${args.method}\"` : null}\n  ${args.name != 'q' ? `name=\"${args.name}\"` : null}\n  ${args.placeholder != 'Canada.ca' ? `placeholder=\"${args.placeholder}\"` : null}\n  ${args.searchId != 'search' ? `searchId=\"${args.searchId}\"` : null}\n  ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}\n>\n</GcdsSearch>\n`.replace(/\\s\\snull\\n/g, '')",...Custom.parameters?.docs?.source}}},Props.parameters={...Props.parameters,docs:{...Props.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-search\n  ${args.action != '/sr/srb.html' ? `action=\"${args.action}\"` : null}\n  ${args.method != 'get' ? `method=\"${args.method}\"` : null}\n  ${args.name != 'q' ? `name=\"${args.name}\"` : null}\n  ${args.placeholder != 'Canada.ca' ? `placeholder=\"${args.placeholder}\"` : null}\n  ${args.searchId != 'search' ? `search-id=\"${args.searchId}\"` : null}\n  ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}\n>\n</gcds-search>\n\n\x3c!-- React code --\x3e\n<GcdsSearch\n  ${args.action != '/sr/srb.html' ? `action=\"${args.action}\"` : null}\n  ${args.method != 'get' ? `method=\"${args.method}\"` : null}\n  ${args.name != 'q' ? `name=\"${args.name}\"` : null}\n  ${args.placeholder != 'Canada.ca' ? `placeholder=\"${args.placeholder}\"` : null}\n  ${args.searchId != 'search' ? `searchId=\"${args.searchId}\"` : null}\n  ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}\n>\n</GcdsSearch>\n`.replace(/\\s\\snull\\n/g, '')",...Props.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"args => `\n<gcds-search\n  ${args.action != '/sr/srb.html' ? `action=\"${args.action}\"` : null}\n  ${args.method != 'get' ? `method=\"${args.method}\"` : null}\n  ${args.name != 'q' ? `name=\"${args.name}\"` : null}\n  ${args.placeholder != 'Canada.ca' ? `placeholder=\"${args.placeholder}\"` : null}\n  ${args.searchId != 'search' ? `search-id=\"${args.searchId}\"` : null}\n  ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}\n>\n</gcds-search>\n`",...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["Default","French","Custom","Props","Playground"]},"./src/utils/storybook/component-properties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h4:()=>validatorProps,q_:()=>langProp});const langProp={lang:{control:{type:"select"},options:["en","fr"],table:{type:{summary:"string"},defaultValue:{summary:"en"}}}},validatorProps={validateOn:{name:"validate-on",control:{type:"select"},options:["blur","other"],table:{type:{summary:"string"},defaultValue:{summary:"blur"}}}}}}]);