"use strict";(self.webpackChunk_cdssnc_gcds_components=self.webpackChunk_cdssnc_gcds_components||[]).push([[8903],{"./src/components/gcds-topic-menu/stories/gcds-topic-menu.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{English:()=>English,French:()=>French,Home:()=>Home,Playground:()=>Playground,Props:()=>Props,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Theme and topic menu",argTypes:{home:{control:{type:"select"},options:[!1,!0],table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},...__webpack_require__("./src/utils/storybook/component-properties.js").q_}},Template=args=>`\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-topic-menu ${args.home?"home":null} ${"en"!=args.lang?`lang="${args.lang}"`:null}>\n</gcds-topic-menu>\n\n\x3c!-- React code --\x3e\n<GcdsTopicMenu ${args.home?"home":null} ${"en"!=args.lang?`lang="${args.lang}"`:null}>\n</GcdsTopicMenu>\n`.replace(/ null/g,""),English=Template.bind({});English.args={home:!1,lang:"en"};const French=Template.bind({});French.args={home:!1,lang:"fr"};const Home=Template.bind({});Home.args={home:!0,lang:"en"};const Props=Template.bind({});Props.args={home:!1,lang:"en"};const Playground=(args=>`\n<gcds-topic-menu\n  ${args.home?"home":null}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n</gcds-topic-menu>\n`).bind({});Playground.args={home:!1,lang:"en"},English.parameters={...English.parameters,docs:{...English.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-topic-menu ${args.home ? `home` : null} ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}>\n</gcds-topic-menu>\n\n\x3c!-- React code --\x3e\n<GcdsTopicMenu ${args.home ? `home` : null} ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}>\n</GcdsTopicMenu>\n`.replace(/ null/g, '')",...English.parameters?.docs?.source}}},French.parameters={...French.parameters,docs:{...French.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-topic-menu ${args.home ? `home` : null} ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}>\n</gcds-topic-menu>\n\n\x3c!-- React code --\x3e\n<GcdsTopicMenu ${args.home ? `home` : null} ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}>\n</GcdsTopicMenu>\n`.replace(/ null/g, '')",...French.parameters?.docs?.source}}},Home.parameters={...Home.parameters,docs:{...Home.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-topic-menu ${args.home ? `home` : null} ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}>\n</gcds-topic-menu>\n\n\x3c!-- React code --\x3e\n<GcdsTopicMenu ${args.home ? `home` : null} ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}>\n</GcdsTopicMenu>\n`.replace(/ null/g, '')",...Home.parameters?.docs?.source}}},Props.parameters={...Props.parameters,docs:{...Props.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-topic-menu ${args.home ? `home` : null} ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}>\n</gcds-topic-menu>\n\n\x3c!-- React code --\x3e\n<GcdsTopicMenu ${args.home ? `home` : null} ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}>\n</GcdsTopicMenu>\n`.replace(/ null/g, '')",...Props.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"args => `\n<gcds-topic-menu\n  ${args.home ? `home` : null}\n  ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}\n>\n</gcds-topic-menu>\n`",...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["English","French","Home","Props","Playground"]},"./src/utils/storybook/component-properties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{IT:()=>eventProp,h4:()=>validatorProps,q_:()=>langProp});const langProp={lang:{control:{type:"select"},options:["en","fr"],table:{type:{summary:"string"},defaultValue:{summary:"en"}}}},validatorProps={validateOn:{name:"validate-on",control:{type:"select"},options:["blur","other"],table:{type:{summary:"string"},defaultValue:{summary:"blur"}}}},eventProp={control:{type:{}},table:{category:"Events | Événements"}}}}]);