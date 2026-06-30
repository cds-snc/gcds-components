([Français](#journal-des-modifications))
# Changelog

## [1.3.2](https://github.com/cds-snc/gcds-components/compare/@gcds-core/components-v1.3.1...@gcds-core/components-v1.3.2) (2026-06-30)


### :bug: :wrench: Bug Fixes

* **gcds-topic-menu:** update instructions in an aria-describedby ([#1311](https://github.com/cds-snc/gcds-components/issues/1311)) ([f1253a2](https://github.com/cds-snc/gcds-components/commit/f1253a2f6ae31168922d8662b8ecd89c4c7d7617))

## [1.3.1](https://github.com/cds-snc/gcds-components/compare/@gcds-core/components-v1.3.0...@gcds-core/components-v1.3.1) (2026-06-08)


### :bug: :wrench: Bug Fixes

* **gcds-table:** Correct status on filter ([#1289](https://github.com/cds-snc/gcds-components/issues/1289)) ([d09e0f5](https://github.com/cds-snc/gcds-components/commit/d09e0f5012d5a85e7b50c22f9998b7791bdbd49a))
* **gcds-table:** focus, interaction and display issues ([#1295](https://github.com/cds-snc/gcds-components/issues/1295)) ([3fc8e31](https://github.com/cds-snc/gcds-components/commit/3fc8e31aeae2b843f072f48980260ab4a51d53b0))
* Load proper language in Vue and React based on the lang attribute ([#1290](https://github.com/cds-snc/gcds-components/issues/1290)) ([9778afe](https://github.com/cds-snc/gcds-components/commit/9778afeb4c365189b3e5a7886dbd2cc226657097))
* update french validation-errors.ts ([#1283](https://github.com/cds-snc/gcds-components/issues/1283)) ([2e45daa](https://github.com/cds-snc/gcds-components/commit/2e45daaaeda66dd9a6c91e55c45b93ae415569d8))

## [1.3.0](https://github.com/cds-snc/gcds-components/compare/@gcds-core/components-v1.2.0...@gcds-core/components-v1.3.0) 
Released on: 2026-05-27


### :rocket: New Features

* **gcds-table:** **_NEW_** The `gcds-table` component is now live and available to use. `gcds-table` includes built-in sorting, global filtering, pagination, and flexible slot support for custom HTML content and cell rendering.

  Features include:
  - Global filtering
  - Client-side pagination
  - Column sorting
  - Dynamic slots for custom table cell content
  - Configurable pagination sizes and controls

  Here's an example code of how to use it, more examples and full API specs will be available on our documentation website soon.
  ```html
  <gcds-table
    columns=""
    data=""

    sort="false"

    pagination="false"
    pagination-current-page="1"
    pagination-size="10"
    pagination-size-options=[10, 25, 50, 0]

    filter="false"
    filter-value=""
  >
    <slot name="caption"></slot>
    <slot name="cell:<field>"></slot>
  </gcds-table>
  ```

* **gcds-header:** add new account slot support for sign in and account-related actions ([#1120](https://github.com/cds-snc/gcds-components/issues/1120)) ([07d7d66](https://github.com/cds-snc/gcds-components/commit/07d7d6625cee321c60f68debc437fe9ab538d6ac))
* **gcds-icon:** add new table-related icons to support sorting, filtering, and pagination interactions used in the new `gcds-table` component ([#1252](https://github.com/cds-snc/gcds-components/issues/1252)) ([2361d03](https://github.com/cds-snc/gcds-components/commit/2361d034f79ab8f6b5c4d3b65a66cfea656da6d8))


### :bug: :wrench: Bug Fixes

* **gcds-input:** stepMismatch errors with decimal numbers ([#1271](https://github.com/cds-snc/gcds-components/issues/1271)) ([5b14383](https://github.com/cds-snc/gcds-components/commit/5b14383daa0f9584b03b8d16f969111894c76605))


### :art: Styles

* **gcds-side-nav, gcds-top-nav, gcds-nav-group, gcds-nav-link:** adjusting breakpoints to improve responsive behaviour ([#1255](https://github.com/cds-snc/gcds-components/issues/1255)) ([c89e14b](https://github.com/cds-snc/gcds-components/commit/c89e14bf7ad38ab835ba92fe2b410268d6b0d215))


### :arrows_counterclockwise: Code Refactoring

* **form validation:** centralize validation error messages ([#1237](https://github.com/cds-snc/gcds-components/issues/1237)) ([fb5f390](https://github.com/cds-snc/gcds-components/commit/fb5f390aa968351da2f5e9124a6410cde16851af))

## [1.2.0](https://github.com/cds-snc/gcds-components/compare/@gcds-core/components-v1.1.0...@gcds-core/components-v1.2.0)

Released on: 2026-04-21


### :rocket: New Features

* **gcds-date-input:** add new format option: `iso` ([#996](https://github.com/cds-snc/gcds-components/issues/996)) ([bd8b5e5](https://github.com/cds-snc/gcds-components/commit/bd8b5e5c07bd03ea0e3a77f3945f4fb33d792a26))
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

## [v1.3.0](https://github.com/cds-snc/gcds-components/compare/@gcds-core/components-v1.2.0...@gcds-core/components-v1.3.0) 

Version publiée le&nbsp;: 2026-05-27

* **gcds-table&nbsp;:** **_NOUVEAUTÉ_** Le composant `gcds-table` est maintenant en production et prêt à être utilisé. `gcds-table` comprend des fonctions intégrées de tri, de filtrage global, de pagination et de prise en charge des emplacements flexibles pour le contenu HTML personnalisé et le rendu des cellules.
  
  Fonctionnalités&nbsp;:
  
  - Filtrage global
  - Pagination côté client
  - Tri des colonnes
  - Emplacements dynamiques pour le contenu personnalisé des cellules de tableau
  - Tailles et commandes de pagination configurables
  
  Voici un exemple de code du composant en action, d’autres exemples et la spécification complète de l’API seront bientôt accessibles sur notre site Web de documentation.
  
  ```html
  <gcds-table
    columns=""
    data=""

    sort="false"

    pagination="false"
    pagination-current-page="1"
    pagination-size="10"
    pagination-size-options=[10, 25, 50, 0]

    filter="false"
    filter-value=""
  >
    <slot name="caption"></slot>
    <slot name="cell:<field>"></slot>
  </gcds-table>
  ```

* **gcds-header&nbsp;:** prise en charge des emplacements de compte pour l’ouverture de session et les actions liées au compte ([#1120](https://github.com/cds-snc/gcds-components/issues/1120)) ([07d7d66](https://github.com/cds-snc/gcds-components/commit/07d7d6625cee321c60f68debc437fe9ab538d6ac))

* **gcds-icon&nbsp;:** ajout de nouvelles icônes relatives aux tableaux pour appuyer les interactions de tri, de filtrage et de pagination utilisées dans le nouveau composant `gcds-table` ([#1252](https://github.com/cds-snc/gcds-components/issues/1252)) ([2361d03](https://github.com/cds-snc/gcds-components/commit/2361d034f79ab8f6b5c4d3b65a66cfea656da6d8))

### :bug: :wrench: Corrections de bogues

* **gcds-input&nbsp;:** erreurs `stepMismatch` avec les nombres décimaux ([#1271](https://github.com/cds-snc/gcds-components/issues/1271)) ([5b14383](https://github.com/cds-snc/gcds-components/commit/5b14383daa0f9584b03b8d16f969111894c76605))

### 🎨 Styles

* **gcds-side-nav, gcds-top-nav, gcds-nav-group, gcds-nav-link&nbsp;:** ajustement des points d’arrêt pour améliorer le comportement réactif ([#1255](https://github.com/cds-snc/gcds-components/issues/1255)) ([c89e14b](https://github.com/cds-snc/gcds-components/commit/c89e14bf7ad38ab835ba92fe2b410268d6b0d215))

## [1.2.0](https://github.com/cds-snc/gcds-components/compare/@gcds-core/components-v1.1.0...@gcds-core/components-v1.2.0)

Version publiée le&nbsp;: 2026-04-21

### :rocket: Nouvelles fonctionnalités

* **gcds-date-input&nbsp;:** ajout d’une nouvelle option de format&nbsp;: `iso`([#996](https://github.com/cds-snc/gcds-components/issues/996)) ([bd8b5e5](https://github.com/cds-snc/gcds-components/commit/bd8b5e5c07bd03ea0e3a77f3945f4fb33d792a26))
* **gcds-header, gcds-nav-group, gcds-top-nav&nbsp;:** Mise à jour de la structure de navigation mobile et du comportement de superposition ([#1224](https://github.com/cds-snc/gcds-components/issues/1224)) ([749c64a](https://github.com/cds-snc/gcds-components/commit/749c64a942e473e518bef9f3639389b918e3025c))
* **validator&nbsp;:** les valideurs personnalisés peuvent désormais accéder à une validation optionnelle dans `validate()` pour une logique de validation plus flexible ([#1222](https://github.com/cds-snc/gcds-components/issues/1222)) ([ea8bf51](https://github.com/cds-snc/gcds-components/commit/ea8bf51f5b40a6b4b240209adb7910e38209d589))
* **angular&nbsp;:** Mise à jour des dépendances angular vers la v21 ([#1212](https://github.com/cds-snc/gcds-components/issues/1212)) ([86d3e19](https://github.com/cds-snc/gcds-components/commit/86d3e19b16981ca6a1dafe83bb8d44db8a00906c))

### :bug: :wrench: Corrections de bogues

* **gcds-card&nbsp;:** le lien de la carte ne bloque plus le survol abbr ([#1214](https://github.com/cds-snc/gcds-components/issues/1214)) ([12e4a15](https://github.com/cds-snc/gcds-components/commit/12e4a15ceec98e7e4e2707ecf30ef8c1e95549df))
* **gcds-link&nbsp;:** l’icône de lien externe ne renvoie plus sur une nouvelle ligne ([#1211](https://github.com/cds-snc/gcds-components/issues/1211)) ([afde106](https://github.com/cds-snc/gcds-components/commit/afde10676fd1dd263e7c37396af0dde932ff6b87))

### :art: Styles

* **gcds-details&nbsp;:** Mise à jour du décalage de soulignement sommaire pour utiliser la valeur de décalage de liaison ([#1223](https://github.com/cds-snc/gcds-components/issues/1223)) ([49e8249](https://github.com/cds-snc/gcds-components/commit/49e8249e1a29efdae390f6d9a72307826b73603d))
* **gcds-nav-link&nbsp;:** Harmonisation du style du lien d’accueil de navigation latérale avec celui de navigation supérieure ([#1225](https://github.com/cds-snc/gcds-components/issues/1225)) ([608d7e5](https://github.com/cds-snc/gcds-components/commit/608d7e58a841aa10fc102a2b45e977e535a049bc))

## [1.1.0](https://github.com/cds-snc/gcds-components/compare/@gcds-core/components-v1.0.0...@gcds-core/components-v1.1.0)

Version publiée le&nbsp;: 2026-04-01

### :rocket: Nouvelles fonctionnalités

* **gcds-card&nbsp;:** la boîte-ombre a été remplacée par une bordure pour une meilleure accessibilité ([#1178](https://github.com/cds-snc/gcds-components/issues/1178)) ([89255e7](https://github.com/cds-snc/gcds-components/commit/89255e7bb3690f0304991f422ae2e2cee92b09a0))
* **gcds-pagination&nbsp;:** amélioration du comportement réactif ([#1197](https://github.com/cds-snc/gcds-components/issues/1197)) ([2906d62](https://github.com/cds-snc/gcds-components/commit/2906d6265d633f59ddc33c6d8d8adde3a1a3a8c1))
* **gcds-side-nav&nbsp;:** h2 remplacé par du texte neutre et ajout de l’emplacement principal pour le lien du site ([#1177](https://github.com/cds-snc/gcds-components/issues/1177)) ([37f1557](https://github.com/cds-snc/gcds-components/commit/37f15571e40087d126c6d6ef3413232887d4f811))

## :bug: :wrench: Corrections de bogues

* **gcds-search&nbsp;:** harmonisation de la largeur du champ de recherche dans tous les navigateurs ([#1167](https://github.com/cds-snc/gcds-components/issues/1167)) ([b4ce841](https://github.com/cds-snc/gcds-components/commit/b4ce841c8b6cedb91dba421f64b74fbb825b3058))

### :art: Styles

* **gcds-nav-link&nbsp;:** petite mise à jour du style survol pour l’emplacement nav-link home ([#1198](https://github.com/cds-snc/gcds-components/issues/1198)) ([0bd11e0](https://github.com/cds-snc/gcds-components/commit/0bd11e00b9454ddc58647ef8d20ee943f0874259))
  
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
