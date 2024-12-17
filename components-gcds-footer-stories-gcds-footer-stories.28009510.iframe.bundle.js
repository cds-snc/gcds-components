"use strict";(self.webpackChunk_cdssnc_gcds_components=self.webpackChunk_cdssnc_gcds_components||[]).push([[2875],{"./src/components/gcds-footer/stories/gcds-footer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DisplayCompact:()=>DisplayCompact,DisplayContextual:()=>DisplayContextual,DisplayFull:()=>DisplayFull,Playground:()=>Playground,Props:()=>Props,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Footer",argTypes:{display:{control:"select",options:["compact","full"],table:{type:{summary:"string"},defaultValue:{summary:"compact"}}},contextualHeading:{name:"contextual-heading",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},contextualLinks:{name:"contextual-links",control:"text",description:'{ "link-label": "link-href" }',table:{type:{summary:"string/object"},defaultValue:{summary:"-"}}},subLinks:{name:"sub-links",control:"text",description:'{ "link-label": "link-href" }',table:{type:{summary:"string/object"},defaultValue:{summary:"-"}}},...__webpack_require__("./src/utils/storybook/component-properties.js").qK}},Template=args=>`\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-footer\n  ${"compact"!=args.display?`display="${args.display}"`:null}\n  ${args.contextualHeading&&args.contextualLinks?`contextual-heading="${args.contextualHeading}"`:null}\n  ${args.contextualHeading&&args.contextualLinks?`contextual-links='${args.contextualLinks}'`:null}\n  ${args.subLinks?`sub-links='${args.subLinks}'`:null}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n</gcds-footer>\n\n\x3c!-- React code --\x3e\n<GcdsFooter\n  ${"compact"!=args.display?`display="${args.display}"`:null}\n  ${args.contextualHeading&&args.contextualLinks?`contextualHeading="${args.contextualHeading}"`:null}\n  ${args.contextualHeading&&args.contextualLinks?`contextualLinks='${args.contextualLinks}'`:null}\n  ${args.subLinks?`subLinks='${args.subLinks}'`:null}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n</GcdsFooter>\n`.replace(/\s\snull\n/g,""),Default=Template.bind({});Default.args={display:"full",contextualHeading:"Contextual navigation",contextualLinks:'{ "Why GC Notify": "#", "Features": "#", "Activity on GC Notify": "#" }',subLinks:"",lang:"en"};const DisplayCompact=Template.bind({});DisplayCompact.args={display:"compact",lang:"en"};const DisplayFull=Template.bind({});DisplayFull.args={display:"full",lang:"en"};const DisplayContextual=Template.bind({});DisplayContextual.args={display:"full",contextualHeading:"Contextual navigation",contextualLinks:'{ "Why GC Notify": "#", "Features": "#", "Activity on GC Notify": "#" }',lang:"en"};const Props=Template.bind({});Props.args={display:"full",contextualHeading:"Contextual navigation",contextualLinks:'{ "Why GC Notify": "#", "Features": "#", "Activity on GC Notify": "#" }',subLinks:"",lang:"en"};const Playground=(args=>`\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-footer\n  ${"compact"!=args.display?`display="${args.display}"`:null}\n  ${args.contextualHeading&&args.contextualLinks?`contextual-heading="${args.contextualHeading}"`:null}\n  ${args.contextualHeading&&args.contextualLinks?`contextual-links='${args.contextualLinks}'`:null}\n  ${args.subLinks?`sub-links='${args.subLinks}'`:null}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n</gcds-footer>\n\n\x3c!-- React code --\x3e\n<GcdsFooter\n  ${"compact"!=args.display?`display="${args.display}"`:null}\n  ${args.contextualHeading&&args.contextualLinks?`contextualHeading="${args.contextualHeading}"`:null}\n  ${args.contextualHeading&&args.contextualLinks?`contextualLinks='${args.contextualLinks}'`:null}\n  ${args.subLinks?`subLinks='${args.subLinks}'`:null}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n</GcdsFooter>\n`.replace(/\s\snull\n/g,"")).bind({});Playground.args={display:"compact",contextualHeading:"Contextual navigation",contextualLinks:'{ "Why GC Notify": "#", "Features": "#", "Activity on GC Notify": "#" }',subLinks:"",lang:"en"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-footer\n  ${args.display != 'compact' ? `display=\"${args.display}\"` : null}\n  ${args.contextualHeading && args.contextualLinks ? `contextual-heading=\"${args.contextualHeading}\"` : null}\n  ${args.contextualHeading && args.contextualLinks ? `contextual-links='${args.contextualLinks}'` : null}\n  ${args.subLinks ? `sub-links='${args.subLinks}'` : null}\n  ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}\n>\n</gcds-footer>\n\n\x3c!-- React code --\x3e\n<GcdsFooter\n  ${args.display != 'compact' ? `display=\"${args.display}\"` : null}\n  ${args.contextualHeading && args.contextualLinks ? `contextualHeading=\"${args.contextualHeading}\"` : null}\n  ${args.contextualHeading && args.contextualLinks ? `contextualLinks='${args.contextualLinks}'` : null}\n  ${args.subLinks ? `subLinks='${args.subLinks}'` : null}\n  ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}\n>\n</GcdsFooter>\n`.replace(/\\s\\snull\\n/g, '')",...Default.parameters?.docs?.source}}},DisplayCompact.parameters={...DisplayCompact.parameters,docs:{...DisplayCompact.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-footer\n  ${args.display != 'compact' ? `display=\"${args.display}\"` : null}\n  ${args.contextualHeading && args.contextualLinks ? `contextual-heading=\"${args.contextualHeading}\"` : null}\n  ${args.contextualHeading && args.contextualLinks ? `contextual-links='${args.contextualLinks}'` : null}\n  ${args.subLinks ? `sub-links='${args.subLinks}'` : null}\n  ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}\n>\n</gcds-footer>\n\n\x3c!-- React code --\x3e\n<GcdsFooter\n  ${args.display != 'compact' ? `display=\"${args.display}\"` : null}\n  ${args.contextualHeading && args.contextualLinks ? `contextualHeading=\"${args.contextualHeading}\"` : null}\n  ${args.contextualHeading && args.contextualLinks ? `contextualLinks='${args.contextualLinks}'` : null}\n  ${args.subLinks ? `subLinks='${args.subLinks}'` : null}\n  ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}\n>\n</GcdsFooter>\n`.replace(/\\s\\snull\\n/g, '')",...DisplayCompact.parameters?.docs?.source}}},DisplayFull.parameters={...DisplayFull.parameters,docs:{...DisplayFull.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-footer\n  ${args.display != 'compact' ? `display=\"${args.display}\"` : null}\n  ${args.contextualHeading && args.contextualLinks ? `contextual-heading=\"${args.contextualHeading}\"` : null}\n  ${args.contextualHeading && args.contextualLinks ? `contextual-links='${args.contextualLinks}'` : null}\n  ${args.subLinks ? `sub-links='${args.subLinks}'` : null}\n  ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}\n>\n</gcds-footer>\n\n\x3c!-- React code --\x3e\n<GcdsFooter\n  ${args.display != 'compact' ? `display=\"${args.display}\"` : null}\n  ${args.contextualHeading && args.contextualLinks ? `contextualHeading=\"${args.contextualHeading}\"` : null}\n  ${args.contextualHeading && args.contextualLinks ? `contextualLinks='${args.contextualLinks}'` : null}\n  ${args.subLinks ? `subLinks='${args.subLinks}'` : null}\n  ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}\n>\n</GcdsFooter>\n`.replace(/\\s\\snull\\n/g, '')",...DisplayFull.parameters?.docs?.source}}},DisplayContextual.parameters={...DisplayContextual.parameters,docs:{...DisplayContextual.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-footer\n  ${args.display != 'compact' ? `display=\"${args.display}\"` : null}\n  ${args.contextualHeading && args.contextualLinks ? `contextual-heading=\"${args.contextualHeading}\"` : null}\n  ${args.contextualHeading && args.contextualLinks ? `contextual-links='${args.contextualLinks}'` : null}\n  ${args.subLinks ? `sub-links='${args.subLinks}'` : null}\n  ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}\n>\n</gcds-footer>\n\n\x3c!-- React code --\x3e\n<GcdsFooter\n  ${args.display != 'compact' ? `display=\"${args.display}\"` : null}\n  ${args.contextualHeading && args.contextualLinks ? `contextualHeading=\"${args.contextualHeading}\"` : null}\n  ${args.contextualHeading && args.contextualLinks ? `contextualLinks='${args.contextualLinks}'` : null}\n  ${args.subLinks ? `subLinks='${args.subLinks}'` : null}\n  ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}\n>\n</GcdsFooter>\n`.replace(/\\s\\snull\\n/g, '')",...DisplayContextual.parameters?.docs?.source}}},Props.parameters={...Props.parameters,docs:{...Props.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-footer\n  ${args.display != 'compact' ? `display=\"${args.display}\"` : null}\n  ${args.contextualHeading && args.contextualLinks ? `contextual-heading=\"${args.contextualHeading}\"` : null}\n  ${args.contextualHeading && args.contextualLinks ? `contextual-links='${args.contextualLinks}'` : null}\n  ${args.subLinks ? `sub-links='${args.subLinks}'` : null}\n  ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}\n>\n</gcds-footer>\n\n\x3c!-- React code --\x3e\n<GcdsFooter\n  ${args.display != 'compact' ? `display=\"${args.display}\"` : null}\n  ${args.contextualHeading && args.contextualLinks ? `contextualHeading=\"${args.contextualHeading}\"` : null}\n  ${args.contextualHeading && args.contextualLinks ? `contextualLinks='${args.contextualLinks}'` : null}\n  ${args.subLinks ? `subLinks='${args.subLinks}'` : null}\n  ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}\n>\n</GcdsFooter>\n`.replace(/\\s\\snull\\n/g, '')",...Props.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-footer\n  ${args.display != 'compact' ? `display=\"${args.display}\"` : null}\n  ${args.contextualHeading && args.contextualLinks ? `contextual-heading=\"${args.contextualHeading}\"` : null}\n  ${args.contextualHeading && args.contextualLinks ? `contextual-links='${args.contextualLinks}'` : null}\n  ${args.subLinks ? `sub-links='${args.subLinks}'` : null}\n  ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}\n>\n</gcds-footer>\n\n\x3c!-- React code --\x3e\n<GcdsFooter\n  ${args.display != 'compact' ? `display=\"${args.display}\"` : null}\n  ${args.contextualHeading && args.contextualLinks ? `contextualHeading=\"${args.contextualHeading}\"` : null}\n  ${args.contextualHeading && args.contextualLinks ? `contextualLinks='${args.contextualLinks}'` : null}\n  ${args.subLinks ? `subLinks='${args.subLinks}'` : null}\n  ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}\n>\n</GcdsFooter>\n`.replace(/\\s\\snull\\n/g, '')",...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["Default","DisplayCompact","DisplayFull","DisplayContextual","Props","Playground"]},"./src/utils/storybook/component-properties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{fd:()=>validatorProps,in:()=>eventProp,qK:()=>langProp});const langProp={lang:{control:{type:"select"},options:["en","fr"],table:{type:{summary:"string"},defaultValue:{summary:"en"}}}},validatorProps={validateOn:{name:"validate-on",control:{type:"select"},options:["blur","other"],table:{type:{summary:"string"},defaultValue:{summary:"blur"}}}},eventProp={control:{type:{}},table:{category:"Events | Événements"}}}}]);