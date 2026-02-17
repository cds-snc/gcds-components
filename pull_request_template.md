# 📝 Summary | Résumé

_TODO:_
- A consice summary of the change(s).
- Why this change(s) is needed (motivation/context). Provide as much context as possible for who anyone looking at this PR.
- Please add any screenshots or screen captures of your work (if needed).

## 🧩 Related Issues | Cartes liées

_TODO: Link to related issue(s) that this PR addresses or fixes, i.e. "Closes #124", "Fixes #456"_
- Issue #
- Zenhub issue: 

## 🧪 Test instructions | Instructions pour tester la modification

_TODO: Replace the instructions below as needed. Describe any steps needed to verify the change(s) work as expected._

1) Check the current behaviour
- [ ] Checkout the `main` branch
- [ ] Open the `index.html` test file
- [ ] Add the following test code inside the `<body>`:
  ```html
  // add code here
  ```
- [ ] Confirm the following behaviour:
    - [ ] TODO (add current behaviour)
- [ ] (Optional) Confirm the behaviour in angular, react and vue

2) Validate the change
- [ ] Checkout this branch
- [ ] Run `npm install` (if needed)
- [ ] Open the `index.html` test file
- [ ] Use the exact same test code as above
- [ ] Confirm the following behaviour:
    - [ ] TODO (describe changed behaviour)
- [ ] Confirm change in angular wrapper
  - [ ] Update the `packages/angular/tests/app/src/app/components/home/home.components.ts` file and add the test code
  - [ ] On `packages/angular/` run `npm run install && ng serve
- [ ] Confirm change in react wrapper
  - [ ] Update the `packages/react/tests/app/src/pages/Home.tsx` file and add the test code
  - [ ] On `packages/angular/` run `npm run install && npm run dev
- [ ] Confirm change in vue wrapper
  - [ ] Update the `packages/vue/tests/app/src/view/Home.vue` file and add the test code
  - [ ] On `packages/angular/` run `npm run install && npm run dev

## ✍️ Author checklist | Liste de vérification de l'auteur

**Choose one:**
- [ ] This PR is a patch (use `fix:`)
- [ ] This PR introduces a minor change (use `feat:`)
- [ ] This PR introduces breaking changes to the API (use `feat!:`)
- [ ] This PR does not introduce changes that need to be published on NPM (use `chore:`, `docs:`, `ci:`)

**Breaking changes flag:**
- [ ] This PR does not break existing functionality. I have completely tested the functionality of these changes. 
- [ ] This PR does not introduce any changes to component names, properties, values, or behaviour.
- [ ] **_If this PR introduces API or behaviour changes_**, backwards compatibility has been implemented and documented under **Impact and Risks**.
- [ ] **_If this PR introduces a breaking change_**, release notes and versioning have been prepared.

**Ready for review: (all items must be checked)**
- [ ] I have tested the English and French versions of the changes, and can verify that all content is accurate and properly displayed in both languages.
- [ ] I have tested these changes on mobile viewports.
- [ ] I have tested these changes across multiple supported browsers.
- [ ] I have checked accessiblity and ensured all accessiblity tests pass.
- [ ] I have added tests for added functionality or changed existing tests, as needed.
- [ ] I have added or updated documentation, if needed.
- [ ] For visual or design-affecting changes, I have posted in dev-design slack channel.
- [ ] Visual or content changes remain aligned with design tokens and component API standards.
- [ ] Test instructions are clear and reproducible.


## 🧐 Reviewer checklist | Liste de vérification du réviseur

**Developer checklist**

For PRs that are complex, in lieu of a simple approval or an "LGTM" ✅, paste the following info with your approval:
- [ ] I have tested the changes and functionality using the test instructions.
- [ ] I have confirmed test coverage is adequate.
- [ ] I have reviewed the code for clarity, maintainability and potential issues.

**Design checklist (if needed)**

For designers, include the following info with your approval:

- [ ] I have tested the changes and functionality using the test instructions.
- [ ] The changes meet design expectations and align with the design system.
- [ ] Any design inconsistencies have been raised on slack or tracked via an issue.

**Content checklist (if needed)**

For content, include the following info with your approval:

- [ ] I understand the context and intent of the content changes.
- [ ] I have reviewed all content for clarity, readability, and tone.
- [ ] I have reviewed English and French content for accuracy and parity.

## ⚠️ Impact/Risks | Risques

_Optional: Use this section to highlight any potential implcations, risks or important notes for reviewers or maintainers, i.e. breaking changes, performance implications, dependency updates, etc._
_Highlight any deprecation notices here_
