"use strict";(self.webpackChunk_cdssnc_gcds_components=self.webpackChunk_cdssnc_gcds_components||[]).push([[3979],{"./src/components/gcds-error-summary/stories/gcds-error-summary.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Playground:()=>Playground,Props:()=>Props,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Error summary",argTypes:{listen:{control:{type:"select"},options:[!1,!0],table:{type:{summary:"boolean"},defaultValue:{summary:!0}}},errorLinks:{name:"error-links",control:"text",description:'{ "error-href": "error message" }',table:{type:{summary:"string/object"},defaultValue:{summary:"-"}}},heading:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},...__webpack_require__("./src/utils/storybook/component-properties.js").qK}},Template=args=>`\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-error-summary\n  ${args.listen&&!args.errorLinks?"listen":null}\n  ${args.errorLinks?`error-links='${args.errorLinks}'`:null}\n  ${args.heading?`heading="${args.heading}"`:null}\n>\n</gcds-error-summary>\n\n\x3c!-- React code --\x3e\n<GcdsErrorSummary\n  ${args.listen&&!args.errorLinks?"listen":null}\n  ${args.errorLinks?`errorLinks='${args.errorLinks}'`:null}\n  ${args.heading?`heading="${args.heading}"`:null}\n>\n</GcdsErrorSummary>\n`.replace(/\s\snull\n/g,""),Default=Template.bind({});Default.args={listen:!0,errorLinks:'{\n    "error-href-1": "Error summary item.",\n    "error-href-2": "Error summary item.",\n    "error-href-3": "Error summary item."\n  }',heading:"",lang:"en"};const Props=Template.bind({});Props.args={listen:!0,errorLinks:'{\n    "error-href-1": "Error summary item.",\n    "error-href-2": "Error summary item.",\n    "error-href-3": "Error summary item."\n  }',heading:"",lang:"en"};const Playground=(args=>`\n<gcds-error-summary\n  ${args.listen&&!args.errorLinks?"listen":null}\n  ${args.errorLinks?`error-links='${args.errorLinks}'`:null}\n  ${args.heading?`heading="${args.heading}"`:null}\n>\n</gcds-error-summary>\n`).bind({});Playground.args={listen:!0,errorLinks:'{\n    "error-href-1": "Error summary item.",\n    "error-href-2": "Error summary item.",\n    "error-href-3": "Error summary item."\n  }',heading:"",lang:"en"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-error-summary\n  ${args.listen && !args.errorLinks ? `listen` : null}\n  ${args.errorLinks ? `error-links='${args.errorLinks}'` : null}\n  ${args.heading ? `heading=\"${args.heading}\"` : null}\n>\n</gcds-error-summary>\n\n\x3c!-- React code --\x3e\n<GcdsErrorSummary\n  ${args.listen && !args.errorLinks ? `listen` : null}\n  ${args.errorLinks ? `errorLinks='${args.errorLinks}'` : null}\n  ${args.heading ? `heading=\"${args.heading}\"` : null}\n>\n</GcdsErrorSummary>\n`.replace(/\\s\\snull\\n/g, '')",...Default.parameters?.docs?.source}}},Props.parameters={...Props.parameters,docs:{...Props.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-error-summary\n  ${args.listen && !args.errorLinks ? `listen` : null}\n  ${args.errorLinks ? `error-links='${args.errorLinks}'` : null}\n  ${args.heading ? `heading=\"${args.heading}\"` : null}\n>\n</gcds-error-summary>\n\n\x3c!-- React code --\x3e\n<GcdsErrorSummary\n  ${args.listen && !args.errorLinks ? `listen` : null}\n  ${args.errorLinks ? `errorLinks='${args.errorLinks}'` : null}\n  ${args.heading ? `heading=\"${args.heading}\"` : null}\n>\n</GcdsErrorSummary>\n`.replace(/\\s\\snull\\n/g, '')",...Props.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"args => `\n<gcds-error-summary\n  ${args.listen && !args.errorLinks ? `listen` : null}\n  ${args.errorLinks ? `error-links='${args.errorLinks}'` : null}\n  ${args.heading ? `heading=\"${args.heading}\"` : null}\n>\n</gcds-error-summary>\n`",...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Props","Playground"]},"./src/utils/storybook/component-properties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{fd:()=>validatorProps,in:()=>eventProp,qK:()=>langProp});const langProp={lang:{control:{type:"select"},options:["en","fr"],table:{type:{summary:"string"},defaultValue:{summary:"en"}}}},validatorProps={validateOn:{name:"validate-on",control:{type:"select"},options:["blur","other"],table:{type:{summary:"string"},defaultValue:{summary:"blur"}}}},eventProp={control:{type:{}},table:{category:"Events | Événements"}}}}]);