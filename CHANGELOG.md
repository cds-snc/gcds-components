([Français](#journal-des-modifications))
# Changelog

## [1.2.0](https://github.com/cds-snc/gcds-components/compare/@gcds-core/components-v1.1.0...@gcds-core/components-v1.2.0)

Released on: 2026-04-21


### :rocket: New Features

* **gcds-date-input:** add new format option: `iso`([#996](https://github.com/cds-snc/gcds-components/issues/996)) ([bd8b5e5](https://github.com/cds-snc/gcds-components/commit/bd8b5e5c07bd03ea0e3a77f3945f4fb33d792a26))
* **gcds-header, gcds-nav-group, gcds-top-nav:** Update mobile navigation structure and overlay behaviour ([#1224](https://github.com/cds-snc/gcds-components/issues/1224)) ([749c64a](https://github.com/cds-snc/gcds-components/commit/749c64a942e473e518bef9f3639389b918e3025c))
* **validator:** custom validators can now access an optional ValidationContext in `validate()` for more flexible validation logic ([#1222](https://github.com/cds-snc/gcds-components/issues/1222)) ([ea8bf51](https://github.com/cds-snc/gcds-components/commit/ea8bf51f5b40a6b4b240209adb7910e38209d589))


### :bug: :wrench: Bug Fixes

* **gcds-card:** prevent card link from blocking abbr hover ([#1214](https://github.com/cds-snc/gcds-components/issues/1214)) ([12e4a15](https://github.com/cds-snc/gcds-components/commit/12e4a15ceec98e7e4e2707ecf30ef8c1e95549df))
* **gcds-link:** prevent external link icon from wrapping onto a new line ([#1211](https://github.com/cds-snc/gcds-components/issues/1211)) ([afde106](https://github.com/cds-snc/gcds-components/commit/afde10676fd1dd263e7c37396af0dde932ff6b87))


### :art: Styles

* **gcds-details:** Update summary underline offset to use link offset value ([#1223](https://github.com/cds-snc/gcds-components/issues/1223)) ([49e8249](https://github.com/cds-snc/gcds-components/commit/49e8249e1a29efdae390f6d9a72307826b73603d))
* **gcds-nav-link:** Align side-nav home link styling with top-nav ([#1225](https://github.com/cds-snc/gcds-components/issues/1225)) ([608d7e5](https://github.com/cds-snc/gcds-components/commit/608d7e58a841aa10fc102a2b45e977e535a049bc))

## [1.1.0](https://github.com/cds-snc/gcds-components/compare/@gcds-core/components-v1.0.0...@gcds-core/components-v1.1.0) 

Released on: 2026-04-01


### :rocket: New Features

* **gcds-card:** replace box-shadow with border for improved accessibility ([#1178](https://github.com/cds-snc/gcds-components/issues/1178)) ([89255e7](https://github.com/cds-snc/gcds-components/commit/89255e7bb3690f0304991f422ae2e2cee92b09a0))
* **gcds-pagination:** improve responsive behaviour ([#1197](https://github.com/cds-snc/gcds-components/issues/1197)) ([2906d62](https://github.com/cds-snc/gcds-components/commit/2906d6265d633f59ddc33c6d8d8adde3a1a3a8c1))
* **gcds-side-nav:** replace h2 with neutral text and add home slot for site link ([#1177](https://github.com/cds-snc/gcds-components/issues/1177)) ([37f1557](https://github.com/cds-snc/gcds-components/commit/37f15571e40087d126c6d6ef3413232887d4f811))


### :bug: :wrench: Bug Fixes

* **gcds-search:** align search input width across browsers ([#1167](https://github.com/cds-snc/gcds-components/issues/1167)) ([b4ce841](https://github.com/cds-snc/gcds-components/commit/b4ce841c8b6cedb91dba421f64b74fbb825b3058))


### :art: Styles

* **gcds-nav-link:** small update to the nav-link home slot hover styling ([#1198](https://github.com/cds-snc/gcds-components/issues/1198)) ([0bd11e0](https://github.com/cds-snc/gcds-components/commit/0bd11e00b9454ddc58647ef8d20ee943f0874259))

## v1.0.0
Released on: 2026-02-05

## 🎉 GCDS Components v1.0.0 is now available

**GCDS Components** are reusable user interface building blocks designed to support a range of user objectives across the GC Design System. Each component is provided with production-ready code, best-practice guidance, and built-in accessibility considerations to ensure consistent, inclusive implementations across design and development.

This release marks the **official stable release** of GCDS Components and confirms that the package is **fully production-ready**.

---

## 🚀 From alpha to stable

This product was previously released as an **alpha package** under the name **`@cdssnc/gcds-components`**.

It has now been **republished as a stable package** under a new name and namespace: **`@gcds-core/components`**.

With this release:

- The package is now considered **stable, production-ready, and supported for long-term use**
- The API has been intentionally reviewed and aligned with design to establish a **clear, reliable contract**
- Future updates will follow **semantic versioning guarantees**

> **Breaking changes will only occur in major releases**, not in minor updates or patches.

---

## 🎨 API Stabilization

As part of the v1.0.0 release, we undertook a comprehensive review of the Components API to ensure it is **intentional, consistent, and aligned with design guidance**.

This work allows us to confidently guarantee API stability within the `1.x` release line, so teams can adopt GCDS Components knowing that **minor and patch releases will not introduce breaking changes**.

Refer to the migration guide for details on the API changes and alignment work completed as part of this release.

---

## 🔀 Migration required (from `@cdssnc/gcds-components`)

If you're currently using **`@cdssnc/gcds-components`**, you’ll need to migrate to continue receiving updates, fixes, and future improvements.

👉 **Follow the migration guide:**  
**[Migrating from @cdssnc/gcds-components to @gcds-core/components](/.docs/migration/stable-v1.md)**

**Note**: Since GCDS Components was previously released as an alpha product (`@cdssnc/gcds-components`), we’ve kept an archived version of the CHANGELOG, which can be found [here](archived/CHANGELOG.md).

The `@cdssnc/gcds-components` package has been deprecated on npm and will no longer receive updates or bug fixes. We strongly recommend migrating to `@gcds-core/components` to continue benefiting from future releases.

---

# Journal des modifications

## v1.0.0

Version publiée le&nbsp;: 2026-02-05

## 🎉 Les composants du Système de design GC (SDGC) v1.0.0 sont maintenant disponibles
**Les composants de Système de design GC** sont des éléments d’interface utilisateur réutilisables conçus pour répondre à divers objectifs de conception dans le cadre de Système de design GC. Chaque composant est fourni avec du code prêt pour la production, des conseils sur les meilleures pratiques et des considérations d’accessibilité intégrées pour assurer une mise en œuvre cohérente et inclusive tout au long de la conception et du développement.

Cette version marque la publication d’une **version officielle stable** des composants de Système de design GC et confirme que le paquet est **entièrement prêt pour la production**.

---

## 🚀 De la phase alpha à l’état stable

Ce produit avait déjà été publié sous forme de **paquet alpha** portant le nom : **`@cdssnc/gcds-components`**.

Il a été **publié à nouveau en tant que paquet stable** sous un nouveau nom et un nouvel espace de nommage :  **`@gcds-core/components`**.

Dans cette version :

- Le paquet est maintenant considéré comme **stable, prêt pour la production et pris en charge pour une utilisation à long terme**
- L’API a été intentionnellement examinée et harmonisée avec la conception afin d’établir un **contrat clair et fiable**
- Les changements futurs suivront les **garanties du contrôle des versions sémantique**

> **Les changements non rétrocompatibles n’auront lieu que dans les versions majeures**, et non dans les mises à jour ou correctifs mineurs.

---

## 🎨 Stabilisation de l’API

Dans le cadre de la version v1.0.0, nous avons entrepris un examen complet de l’API des composants pour nous assurer qu’elle est **intentionnelle, cohérente et conforme aux directives de conception**.

Ce travail nous permet de garantir en toute confiance la stabilité de l’API au sein de la série de versions `1.x`, de sorte que les équipes peuvent adopter les composants de Système de design GC en sachant que **les versions mineures et les correctifs n’introduiront pas de changements majeurs**.

Reportez-vous au guide de migration pour en savoir plus sur les changements à l’API et les travaux d’harmonisation effectués dans le cadre de cette version.

---

## 🔀 Migration requise (depuis `@cdssnc/gcds-components`)

Si vous utilisez actuellement **`@cdssnc/gcds-components`**, vous devrez migrer vers la nouvelle version pour continuer à recevoir des mises à jour et des améliorations.

👉 **Suivez le guide de migration :**  
**[Migration de @cdssnc/gcds-components vers @gcds-core/components](/.docs/migration/stable-v1.md)**

**Remarque&nbsp;:** Comme les composants de Système de design GC avaient été publiés auparavant en tant que produit alpha (`@cdssnc/gcds-components`), nous avons conservé une version archivée du journal des modifications. Vous pouvez y accéder [ici](archived/CHANGELOG.md).

Le paquet `@cdssnc/gcds-components` a été mis hors service dans npm et ne recevra plus de mises à jour ni de corrections de bogues. Nous vous recommandons fortement de migrer vers `@gcds-core/components` pour continuer à profiter des prochaines versions.
