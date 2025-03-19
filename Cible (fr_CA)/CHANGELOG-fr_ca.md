([Français](#journal-des-modifications))

# Journal des modifications

## [0.33.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.32.0...gcds-components-v0.33.0)

Version publiée le : 2025-03-18

### :rocket: Nouvelles fonctionnalités

* **gcds-button :** Ajout du rôle bouton de démarrage ([\#775](https://github.com/cds-snc/gcds-components/issues/775)) ([1b519b4](https://github.com/cds-snc/gcds-components/commit/1b519b4d82158476192b7a28ce0a55e2e233dc9f))


### :art: Styles

* Mise à jour de l'espacement de l'en-tête et de la couleur + la largeur de la bordure ([\#776](https://github.com/cds-snc/gcds-components/issues/776)) ([bfc184e](https://github.com/cds-snc/gcds-components/commit/bfc184eea624aa39e5966285b433e6399286a030))

## [0.32.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.31.0...gcds-components-v0.32.0)

Version publiée le : 2025-02-19

### :bug: :wrench: Corrections de bogues

* Problèmes d’affichage et d’interaction ([\#748](https://github.com/cds-snc/gcds-components/issues/748)) ([0169b14](https://github.com/cds-snc/gcds-components/commit/0169b14bd17c1e65f1531b7df0df9e062776f30b)) avec les composants de navigation (`gcds-top-nav`, `gcds-nav-group`)
* Retrait de la dépendance gcds-fieldset du composant gcds-date-input ([\#746](https://github.com/cds-snc/gcds-components/issues/746)) ([3e103ee](https://github.com/cds-snc/gcds-components/commit/3e103eecccf045862865b3b20cc4390a9942bd28))


### :pencil: Documentation

* Nous avons mis à jour les descriptions de propriété de `card-title-tag` pour `<gcds-card>` et `notice-title-tag` pour `<gcds-notice>` afin de décrire plus clairement son fonctionnement ([\#745](https://github.com/cds-snc/gcds-components/issues/745)) ([96341ed](https://github.com/cds-snc/gcds-components/commit/96341ed5dc388991235eee49564625b7719d717f))


### :art: Styles
Des travaux ont été fait pour harmoniser nos styles avec ceux de Canada.ca :

* Mise à jour du dégagement intérieur pour `<gcds-footer>` ([\#755](https://github.com/cds-snc/gcds-components/issues/755)) ([890c216](https://github.com/cds-snc/gcds-components/commit/890c2160333ef5bba5f668ca7bf59f831c57a403))
* Mise à jour des styles pour `<gcds-footer>` ([\#754](https://github.com/cds-snc/gcds-components/issues/754)) ([1cf8a6f](https://github.com/cds-snc/gcds-components/commit/1cf8a6fefb0245f173d0f562db80945ff43508a4))
* Mise à jour de la taille de police pour `<gcds-breadcrumb-item>` ([\#742](https://github.com/cds-snc/gcds-components/issues/742)) ([adf4260](https://github.com/cds-snc/gcds-components/commit/adf4260b94e19b0ef939d32e90a7f374d5d3e7d0))
* Mise à jour de la taille de police pour `<date-modified>` ([\#751](https://github.com/cds-snc/gcds-components/issues/751)) ([a403b7d](https://github.com/cds-snc/gcds-components/commit/a403b7d95c69019a48828949d964249b93a1b61b))
* Mise à jour de la taille de police pour `<gcds-lang-toggle>` ([\#741](https://github.com/cds-snc/gcds-components/issues/741)) ([c7b7c21](https://github.com/cds-snc/gcds-components/commit/c7b7c211d62dec5d7d603fe894f50da4e5bf64fe))
* Mise à jour des styles pour `<gcds-search>` ([\#743](https://github.com/cds-snc/gcds-components/issues/743)) ([3697498](https://github.com/cds-snc/gcds-components/commit/369749807db05e0e0ac3235e1ac05c50568665a5))

## [0.31.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.30.0...gcds-components-v0.31.0)

Version publiée le : 2025-01-22

### :rocket: Nouvelles fonctionnalités

* ajout de la propriété d'écart de grille pour plus de flexibilité ([\#732](https://github.com/cds-snc/gcds-components/issues/732)) ([2af7915](https://github.com/cds-snc/gcds-components/commit/2af7915306f0a32f6af32a24336857ce300756d8))
* mise à jour des instructions d'installation pour correspondre au site de documentation ([\#718](https://github.com/cds-snc/gcds-components/issues/718)) ([e5c3bee](https://github.com/cds-snc/gcds-components/commit/e5c3bee5c724f85db9afe6970b3acee83e5c3d33))


### :bug: :wrench: Corrections de bogues

* **gcds-button :** Empêchement de l'événement gcdsClick si le bouton est désactivé ([\#724](https://github.com/cds-snc/gcds-components/issues/724)) ([1cd508a](https://github.com/cds-snc/gcds-components/commit/1cd508a87c95b38a1937f421580ab8d846112f9a))
* **gcds-link :** Propriété d'affichage pour permettre un comportement normal de retour à la ligne des liens ([\#731](https://github.com/cds-snc/gcds-components/issues/731)) ([b0f357c](https://github.com/cds-snc/gcds-components/commit/b0f357c61c7a951a92f24b1de1b4c2a61e92fc10))
* **gcds-notice :** Ajout des étiquettes accessibles pour identifier le type d'avis ([\#721](https://github.com/cds-snc/gcds-components/issues/721)) ([450d182](https://github.com/cds-snc/gcds-components/commit/450d18215ee15c33cdcd6991defc764f65e236e7))
* **gcds-pagination :** Ajout de tabindex="0" aux balises <a> pour le fonctionnement dans les navigateurs webkit ([\#723](https://github.com/cds-snc/gcds-components/issues/723)) ([7256590](https://github.com/cds-snc/gcds-components/commit/7256590d0f5517e87fb7e1d10439a7d3b9f7e579))
* **gcds-textarea :** Valeur correctement définie dans la zone de texte shadow-root ([\#730](https://github.com/cds-snc/gcds-components/issues/730)) ([c3f18e6](https://github.com/cds-snc/gcds-components/commit/c3f18e612e091b7d06c1802d8af99da9efd77460))
* Description de la propriété de taille de saisie ([\#728](https://github.com/cds-snc/gcds-components/issues/728)) ([f6fa41b](https://github.com/cds-snc/gcds-components/commit/f6fa41b64653160493cc8857e0fb1933234a5050))


### :arrows\_counterclockwise: Refactorisation du code

* Retrait de l'empilement du chemin d’accès sur les appareils mobiles ([\#729](https://github.com/cds-snc/gcds-components/issues/729)) ([cf70cf6](https://github.com/cds-snc/gcds-components/commit/cf70cf6afea17bc7a3ba745fe4851b95306e280e))
* Mise à jour de l'espacement des composants + flèches de pagination ([\#726](https://github.com/cds-snc/gcds-components/issues/726)) ([a00e60d](https://github.com/cds-snc/gcds-components/commit/a00e60dcb389d4577af4c6f5e450718a35574391))

## [0.30.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.29.1...gcds-components-v0.30.0)

Version publiée le : 2024-12-17

### :rocket: Nouvelles fonctionnalités

* **angular :** Mise à jour des dépendances angular vers la v19 ([\#709](https://github.com/cds-snc/gcds-components/issues/709)) ([ab1c12b](https://github.com/cds-snc/gcds-components/commit/ab1c12b822e13040ac8da7e66c5e9ada9aea1180))


### :art: Styles

* Amélioration du design d'impression pour le composant détails ([\#711](https://github.com/cds-snc/gcds-components/issues/711)) ([e68a3bf](https://github.com/cds-snc/gcds-components/commit/e68a3bf78a4a50fe8836cec64ca30557d5298871))


### :arrows\_counterclockwise: Refactorisation du code

* Ajustement de l'espacement des éléments de formulaire ([\#707](https://github.com/cds-snc/gcds-components/issues/707)) ([4393412](https://github.com/cds-snc/gcds-components/commit/43934122d91718cd73881c03a12c4c570dca5862))

## [0.29.1](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.29.0...gcds-components-v0.29.1)

Version publiée le : 2024-12-11

### :bug: :wrench: Corrections de bogues

* affichage de l’élément flèche du chemin d’accès ([\#706](https://github.com/cds-snc/gcds-components/issues/706)) ([f455e4d](https://github.com/cds-snc/gcds-components/commit/f455e4dd38263cb9bea787f2d2c207ddf0df95b3))

## [0.29.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.28.0...gcds-components-v0.29.0)

Version publiée le : 2024-12-11

### :rocket: Nouvelles fonctionnalités

* Nouveau composant gcds-notice ([\#627](https://github.com/cds-snc/gcds-components/issues/627)) ([bb98233](https://github.com/cds-snc/gcds-components/commit/bb98233f361fd9b6f02ee3be908cf4225f34bcf7))

### :arrows\_counterclockwise: Refactorisation du code

* Ajustement de la marge des chemins d’accès ([\#701](https://github.com/cds-snc/gcds-components/issues/701)) ([9ea1447](https://github.com/cds-snc/gcds-components/commit/9ea1447f1f78eb60901bba4d38765dbc25df264c))

## [0.28.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.27.0...gcds-components-v0.28.0)

Version publiée le : 2024-12-05

### :rotating\_light: Changements non rétrocompatibles

* Mise à jour des composants avec de nouvelles typographies + jetons d'espacement ([\#695](https://github.com/cds-snc/gcds-components/issues/695)) ([105cd4b](https://github.com/cds-snc/gcds-components/commit/105cd4b5e755393da053aa210505260f1e8e249d))

Nous avons apporté de petites modifications à toutes les tailles de typographie et d’espacement de Système de design GC. L’apparence des composants de Système de design GC se rapproche maintenant davantage à celle des composants de Canada.ca.

Ces mises à jour ont été introduites avec la [dernière version de nos unités de style](https://github.com/cds-snc/gcds-tokens/blob/main/CHANGELOG.md#200).

_**Si vous utilisez ce package**_ Mettez à jour votre numéro de version vers celle-ci pour recevoir les modifications aux tailles de police, aux hauteurs de ligne et aux valeurs d'espacement.

### Changements non rétrocompatibles

Les variables valides utilisées pour les propriétés dans les composants suivants ont été mises à jour. Bien que certaines options restent inchangées, les valeurs sous-jacentes qu'elles contiennent (en pixels) ont été modifiées. Vérifiez la section d'espacement de notre publication des unités de style pour connaître les valeurs de pixel à jour.

_Exemple :_ Si vous utilisiez auparavant `400` pour la propriété `margin` de `gcds-container`, elle sera mise à jour à `32px`. Si vous souhaitez conserver sa taille précédente de `24px`, vous devez modifier votre code pour utiliser `300` à la place. Voici un [guide de correspondance visuel](https://github.com/cds-snc/gcds-tokens/blob/main/CHANGELOG.md#spacing-tokens-visual-mapping-guide) pour vous aider à déterminer les bonnes valeurs.

Mettez seulement à jour votre code _si vous utilisez ces propriétés_, sinon les nouvelles valeurs par défaut seront appliquées automatiquement.

* [**gcds-container**](https://github.com/cds-snc/gcds-components/blob/main/packages/web/src/components/gcds-container/readme.md)
  - `margin`
  - `padding`
* [**gcds-heading**](https://github.com/cds-snc/gcds-components/blob/main/packages/web/src/components/gcds-heading/readme.md)
  - `margin-top`
  - `margin-bottom`
* [**gcds-icon**](https://github.com/cds-snc/gcds-components/blob/main/packages/web/src/components/gcds-icon/readme.md)
  - `margin-left`
  - `margin-right`
* [**gcds-text**](https://github.com/cds-snc/gcds-components/blob/main/packages/web/src/components/gcds-text/readme.md)
  - `margin-top`
  - `margin-bottom`

### Modifications typographiques

Mettez seulement à jour votre code si vous utilisez la valeur `caption` pour la propriété `size` dans les composants suivants. * [**gcds-icon**](https://github.com/cds-snc/gcds-components/blob/main/packages/web/src/components/gcds-icon/readme.md) \- Modifiez `caption` à `text-small` * [**gcds-text**](https://github.com/cds-snc/gcds-components/blob/main/packages/web/src/components/gcds-text/readme.md) \- Modifiez `caption` à `text-small`

## [0.27.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.26.3...gcds-components-v0.27.0)

Version publiée le : 2024-11-21

### :rocket: Nouvelles fonctionnalités

* **gcds-file-uploader :** Ajout de la propriété fichiers pour faciliter l'accès aux fichiers téléchargés ([\#676](https://github.com/cds-snc/gcds-components/issues/676)) ([2323e42](https://github.com/cds-snc/gcds-components/commit/2323e42e8d492891d0550f370fbface17c33fe09))

### :bug: :wrench: Corrections de bogues

* Il est maintenant possible de sauter une soumission de formulaire bloquante avec l'attribut validate-on ([17c50ae](https://github.com/cds-snc/gcds-components/commit/17c50aea1818ba5a20dc3f873639286ff6f8e588))
* Propriété de message d'erreur bloquant la soumission de formulaire ([\#673](https://github.com/cds-snc/gcds-components/issues/673)) ([17c50ae](https://github.com/cds-snc/gcds-components/commit/17c50aea1818ba5a20dc3f873639286ff6f8e588))
* **gcds-fieldset :** Ajout de code CSS pour permettre aux composants de formulaire de maintenir une mise en page réactive ([\#683](https://github.com/cds-snc/gcds-components/issues/683)) ([6b41ba0](https://github.com/cds-snc/gcds-components/commit/6b41ba0f2e9bf208b1ee090dbb939041914cc9bf))

### :arrows\_counterclockwise: Refactorisation du code

* Ajustement des tailles de police de détails et du dégagement intérieur du résumé + panneau ([\#674](https://github.com/cds-snc/gcds-components/issues/674)) ([fd5a422](https://github.com/cds-snc/gcds-components/commit/fd5a422d5ab66b37535dbb243fa156df769146ad))
* Amélioration de la validation de la date de modification ([\#679](https://github.com/cds-snc/gcds-components/issues/679)) ([481d8a3](https://github.com/cds-snc/gcds-components/commit/481d8a31dabc7f685f1d777ff7b12cb381bfa11d))
* Retrait de la couleur de la cible de saisie pour le libellé, le texte explicatif et la légende ([\#678](https://github.com/cds-snc/gcds-components/issues/678)) ([544f1cb](https://github.com/cds-snc/gcds-components/commit/544f1cb0036d6f4fc4552ae68422e628a0f4dd55))

## [0.26.3](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.26.2...gcds-components-v0.26.3)

Version publiée le : 2024-10-10

### :bug: :wrench: Corrections de bogues

* 
*  

### :arrows\_counterclockwise: Refactorisation du code

* gcds-signature 

## [0.26.2](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.26.1...gcds-components-v0.26.2)

Version publiée le : 2024-09-25

### :bug: :wrench: Corrections de bogues

* 
* **<gcds-sr-only> 
* 
* 

## [0.26.1](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.26.0...gcds-components-v0.26.1)

Version publiée le : 2024-09-16

### :bug: :wrench: Corrections de bogues

* 

## [0.26.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.25.1...gcds-components-v0.26.0)

Version publiée le : 2024-09-12

### :rocket: Nouvelles fonctionnalités

* 

### :bug: :wrench: Corrections de bogues

* 

## [0.25.1](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.25.0...gcds-components-v0.25.1)

Version publiée le : 2024-08-22

### :bug: :wrench: Corrections de bogues

- 
- 

## [0.25.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.24.1...gcds-components-v0.25.0)

Version publiée le : 2024-08-19

### :rotating\_light: Changements non rétrocompatibles

Les composants Carte et Indicateur d’étape ont un nouveau design, et leur structure API s’en trouve modifiée.

#### mise à jour du composant Carte

La propriété `type` sera supprimée, puisque désormais, le composant ne prendra en charge que les interactions de type lien. Si vous utilisez actuellement type=action, notez que ce type ne sera pas compatible avec la prochaine version.

La propriété `tag` sera remplacée par une nouvelle propriété nommée `badge`.

La propriété `title-element` sera remplacée par une nouvelle propriété nommée `card-title-tag`.

Nous cessons la prise en charge du slot pour le pied de page (`slot=”footer”`). Nous l’enlevons parce que nous avons constaté qu’il n’est pas utilisé.

<b>Nouveauté :</b> Nous avons ajouté un `slot` permettant l’affichage de la mise en forme de texte HTML dans le composant Carte. Vous pouvez toujours utiliser la propriété description dans ce but, avec une simple chaîne de caractères (texte).

##### <i>Ancien code :</i>


>
 <slot name=”footer”></slot> </gcds-card> \`\`\`

##### <i>Ancien code :</i>


>
 <slot></slot> </gcds-card> \`\`\`

#### mise à jour du composant Indicateur d’étape

<b>Nouveauté :</b> Une nouvelle propriété `tag` sera offerte pour permettre aux développeuses et développeurs de choisir le bon titre pour rendre l’élément.

<b>Nouveauté </b><b><i>(obligatoire)</i></b><b> :</b>  Il s’agit d’une propriété obligatoire sans laquelle le composant ne sera pas rendu.

Si vous éprouvez des difficultés avec ce changement, [<u>contactez-nous</u>](https://design-system.alpha.canada.ca/en/contact/).

##### <i>Ancien code :</i>


></gcds-stepper> \`\`\`

##### <i>Ancien code :</i>


>
  <slot></slot> </gcds-stepper> \`\`\`

### :rocket: Nouvelles fonctionnalités

- 
- 
- 
- 

### :arrows\_counterclockwise: Refactorisation du code

- 

## [0.24.1](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.24.0...gcds-components-v0.24.1)

Version publiée le : 2024-08-13

### :bug: :wrench: Corrections de bogues

- 

## [0.24.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.23.0...gcds-components-v0.24.0)

Version publiée le : 2024-08-01

### :rocket: Nouvelles fonctionnalités

- 

## [0.23.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.22.4...gcds-components-v0.23.0)

Version publiée le : 2024-07-31

### :rocket: Nouvelles fonctionnalités

- 

## [0.22.4](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.22.3...gcds-components-v0.22.4)

Version publiée le : 2024-07-29

### :bug: :wrench: Corrections de bogues

- 

## [0.22.3](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.22.2...gcds-components-v0.22.3)

Version publiée le : 2024-07-29

### :arrows\_counterclockwise: Refactorisation du code

- 

## [0.22.2](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.22.1...gcds-components-v0.22.2)

Version publiée le : 2024-07-10

### :bug: :wrench: Corrections de bogues

- 
- 

## [0.22.1](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.22.0...gcds-components-v0.22.1)

Version publiée le : 2024-05-27

### :bug: :wrench: Corrections de bogues

- 

### :arrows\_counterclockwise: Refactorisation du code

- 

## [0.22.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.21.0...gcds-components-v0.22.0)

Version publiée le : 2024-05-21

### :rocket: Nouvelles fonctionnalités

- 
- 
- 

### :bug: :wrench: Corrections de bogues

- 

## [0.21.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.20.0...gcds-components-v0.21.0)

Version publiée le : 2024-05-08

### :rotating\_light: Changements non rétrocompatibles

#### Transition vers des éléments personnalisés associés aux formulaires

Nous avons déployé des efforts considérables pour migrer nos composants vers des éléments personnalisés associés aux formulaires. Les composants de formulaire de Système de design GC utiliseront désormais le modèle d’objet de document fantôme (<i>Shadow DOM</i>). <i>Shadow DOM</i> offre une encapsulation et un contrôle améliorés du style et permet aux composants de formulaire de s’intégrer aux fonctionnalités natives du navigateur pour la validation et l’accessibilité. Cette fonctionnalité dépend de l’API HTMLElement attachInternals, qui est prise en charge dans <u>la plupart des navigateurs</u>.

Ce changement nécessitera que tous les composants de formulaire comportent l’attribut <i>name</i>. Voici une liste des composants de Système de design GC touchés par le changement :

- Téléverseur de fichiers (gcds-file-uploader)
- Champ de saisie (gcds-input)
- Sélection (gcds-select)
- Zone de texte (gcds-text-area)

##### 

- Ajouter un attribut `<i>name</i>`
- Votre code doit ressembler à ce qui suit :



#### 

Les composants suivants seront mis à jour pour utiliser <i>Shadow DOM</i> comme les autres composants de Système de design GC :

- Pagination (gcds-pagination)
- Recherche (gcds-search)
- Signature (gcds-signature)

#### 

Dans le cadre de la transition, notre composant `gcds-radio` sera mis hors service au profit d’un nouveau composant `gcds-radio-group`. Le composant groupe radio permet d’obtenir de meilleurs contrôles de formulaire (HTML natif) dans un environnement <i>Shadow DOM</i>.

##### <i>Ancien code :</i>

\`\`\`html <gcds-radio radio-id="radio-1" name="radio-example" label="Label 1" value="label-1"
>
</gcds-radio> <gcds-radio radio-id="radio-2" name="radio-example" label="Label 2" value="label-2"
>
</gcds-radio> \`\`\`

##### <i>Ancien code :</i>

  
>
</gcds-radio-group> \`\`\`

### :rocket: Nouvelles fonctionnalités

- 
- 

### :bug: :wrench: Corrections de bogues

- 

## [0.20.0](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.19.1...gcds-components-v0.20.0)

Version publiée le : 2024-03-14

### :rocket: Nouvelles fonctionnalités

- 

### :bug: :wrench: Corrections de bogues

- 

## [0.19.1](https://github.com/cds-snc/gcds-components/compare/gcds-components-v0.19.0...gcds-components-v0.19.1)

Version publiée le : 2024-02-22

### :bug: :wrench: Corrections de bogues

- 

## v0.19.0

### :rotating\_light: Changements non rétrocompatibles

- 

### :bug: :wrench: Corrections de bogues

- 

### :arrows\_counterclockwise: Refactorisation du code

- 
- 

## v0.18.1

### :bug: :wrench: Corrections de bogues

- https://github.com/cds-snc/gcds-components/pull/368 - [7774a88](https://github.com/cds-snc/gcds-components/commit/7774a8814b680d5798192dde9ce4b9550b86bba9) — Exportation de ContentValues à partir de gcds-grid pour corriger la version du paquet Angular

## v0.18.0

### :rocket: Nouvelles fonctionnalités

- Fonctionnalité pour le composant grille
  - Possibilité d’ajouter des colonnes de grille dont la taille est individuellement définie et de définir des lignes de hauteur égale.

- https://github.com/cds-snc/gcds-components/pull/358 - [34b392d](https://github.com/cds-snc/gcds-components/commit/34b392d39f2ca0158fd608e46dcfc0509bbc69c0) — Ajout de la variante Light au composant lien

### :jigsaw: Correctif

- https://github.com/cds-snc/gcds-components/pull/363 - [ab0e404](https://github.com/cds-snc/gcds-components/commit/ab0e4042d4db0c580fd61a049bd8a2696d9b3141) — Correction du nom de propriété pour les variantes du composant lien
- https://github.com/cds-snc/gcds-components/pull/364 - [ee16326](https://github.com/cds-snc/gcds-components/commit/ee16326a0daa8edb126c273f85c85c2a3cf0ef58) — Correction de la validation pour le téléverseur de fichiers
- https://github.com/cds-snc/gcds-components/pull/362 - [ac2ea8c](https://github.com/cds-snc/gcds-components/commit/ac2ea8c0644fd98c53789cddcdb060c4b744cdcf) — Mise à jour des emplacements (slots) du composant en-tête dans Storybook
- https://github.com/cds-snc/gcds-components/pull/357 - [5a0bd5c](https://github.com/cds-snc/gcds-components/commit/5a0bd5c56ea8d59f4798ee21c385302598b2d501) — Correction du lien Ressources dans Storybook
- https://github.com/cds-snc/gcds-components/pull/353 - [e9624f0](https://github.com/cds-snc/gcds-components/commit/e9624f071888db71abbf60b5869dc19d6e49b4b9) — Mise à jour des instructions pour Font Awesome dans le README

## v0.17.1

### :jigsaw: Correctif

- https://github.com/cds-snc/gcds-components/pull/346 - [16732e5](https://github.com/cds-snc/gcds-components/commit/16732e5dc068cdb65d17f5485bb3189b2871836c) \- Mise à jour de la configuration de la génération de gabarits pour une meilleure intégration avec plusieurs infrastructures (Nextjs et create-react-app)

- https://github.com/cds-snc/gcds-components/pull/350 - [2F41435](https://github.com/cds-snc/gcds-components/commit/2f4143543dfa6f7823fa03847e0f24cf4bf9d0d3) \- Correctif : réinitialisation des styles d’emplacement

- https://github.com/cds-snc/gcds-components/pull/351 - [d03c792](https://github.com/cds-snc/gcds-components/commit/d03c7924216a59fb7203d4e87743045e235dc745) \- Mise à jour du contenu de la démo

## v0.17.0

### :rocket: Nouvelles fonctionnalités

- 

### :jigsaw: Correctif

- https://github.com/cds-snc/gcds-components/pull/333 - [5da32e0](https://github.com/cds-snc/gcds-components/commit/5da32e0546d7af52fb318a77e22d315327038b18) \- Ajout d’une valeur par défaut pour les marges supérieure et inférieure pour le composant texte
- https://github.com/cds-snc/gcds-components/pull/338 - [96e4787](https://github.com/cds-snc/gcds-components/commit/96e4787b7c7f061279fc650d2dd4894d5ae2e193) \- Amélioration de l’accessibilité de Storybook pour les démonstrations en direct.

## v0.16.0

### :rocket: Nouvelles fonctionnalités

- 

### :jigsaw: Correctif

- https://github.com/cds-snc/gcds-components/pull/325 - [3ec8925](https://github.com/cds-snc/gcds-components/commit/3ec89251bf56b346df50ed67ad0a8992631240ff) \- Correction de l’emplacement CSS dans gcds-breadcrumbs-item pour afficher le texte souligné

## v0.15.0

### :rocket: Nouvelles fonctionnalités

- 
- 

### :jigsaw: Correctif

- https://github.com/cds-snc/gcds-components/pull/272 - [c48d92f](https://github.com/cds-snc/gcds-components/commit/c48d92f3eb1dc13b368e3140d9f289d66b843638) \- Mise à jour des requêtes médias dans `gcds-pagination`
- https://github.com/cds-snc/gcds-components/pull/291 - [d4d6f9f](https://github.com/cds-snc/gcds-components/commit/d4d6f9fbb79437a06f2316b5e1ffea5c55110f38) \- Suppression du libellé nav landmark pour éviter toute confusion dans `gcds-header`
- https://github.com/cds-snc/gcds-components/pull/294 - [e6a550a](https://github.com/cds-snc/gcds-components/commit/e6a550a0f5695d65bb8c9ee2f42f55f7abaacd7e) \- Configuration des propriétés par défaut dans `gcds-signature`
- https://github.com/cds-snc/gcds-components/pull/317 - [ac5d6e7](https://github.com/cds-snc/gcds-components/commit/ac5d6e7db5b0ec3155441ff33d243c27d6322854) \- Ajout aux composants d’une ombre de boîte à l’état ciblé pour un état ciblé cohérent
- https://github.com/cds-snc/gcds-components/pull/318 - [2bf8fde](https://github.com/cds-snc/gcds-components/commit/2bf8fdeedc18726f176bc4b1a54203ee41c04036) \- Ajout de styles d’emplacements pour aider à corriger les problèmes d’accessibilité de Chrome pour les composants utilisant des emplacements basés sur le texte

## v0.14.0

### :rocket: Nouvelles fonctionnalités

- 

### :jigsaw: Correctif

- https://github.com/cds-snc/gcds-components/pull/231 - [1be42c4](https://github.com/cds-snc/gcds-components/commit/1be42c4e403437f3644b6411e8d2f4bf38bb49cc) \- Affichage mobile et texte français mis à jour pour le composant `gcds-pagination`
- https://github.com/cds-snc/gcds-components/pull/236 - [994aa7c](https://github.com/cds-snc/gcds-components/commit/994aa7cc8d7911674f84dbaf5fed22c2efedbb8e) \- Propriété `columns` (colonnes) définit comme obligatoire pour le composant `gcds-grid`
- https://github.com/cds-snc/gcds-components/pull/237 - [e2030bf](https://github.com/cds-snc/gcds-components/commit/e2030bfd729fb548c96c6de89f4ae05f2d6886ad) \- Correctif d’accessibilité appliqué pour le composant `gcds-details`
- https://github.com/cds-snc/gcds-components/pull/247 - [d3440d7](https://github.com/cds-snc/gcds-components/commit/d3440d72806f014b3eef90133906b88f62712da3) \- Correctif d’accessibilité appliqué pour le composant `gcds-nav-group`

## v0.13.0

### :rocket: Nouvelles fonctionnalités

- 

### :rotating\_light: Changements non rétrocompatibles

- 

### :jigsaw: Correctif

- https://github.com/cds-snc/gcds-components/pull/219 - [bfb7a58](https://github.com/cds-snc/gcds-components/commit/bfb7a58925b5a474e5885d02e6405faf18fe2d1f) \- Styles d’éléments en survol pour le composant `gcds-top-nav` mis à jour afin d’être conformes au fichier de design
- https://github.com/cds-snc/gcds-components/pull/221 - [fd82057](https://github.com/cds-snc/gcds-components/commit/fd8205708aac28da71d18d794db8f4af9fa2455a) \- Styles d’éléments en survol pour les composants `gcds-file-uploader` et `gcds-pagination` mis à jour
- https://github.com/cds-snc/gcds-components/pull/225 - [2bc48f9](https://github.com/cds-snc/gcds-components/commit/2bc48f9f51e967c0d12b20b191fbfe2ff54790e1) \- Texte de bouton du composant `gcds-file-uploader` modifié à `Parcourir`
- https://github.com/cds-snc/gcds-components/pull/227 - [0effdc8](https://github.com/cds-snc/gcds-components/commit/0effdc89e8c4866e023853e38c57c7e7d13c47aa) \- Icône retirée de l’étiquette de bouton pour le composant `gcds-file-uploader`

## v0.12.1

### :jigsaw: Correctif

- https://github.com/cds-snc/gcds-components/pull/208 - [5668c65](https://github.com/cds-snc/gcds-components/commit/5668c657db12d2a0e8bfa607f4b5a4620cbb0570) \- Correctifs d’accessibilité appliqués pour les composants `gcds-file-uploader` et navigation

## v0.12.0

### :rocket: Nouvelles fonctionnalités

- https://github.com/cds-snc/gcds-components/pull/201 - [a922e5f](https://github.com/cds-snc/gcds-components/commit/a922e5fab3a690b4d2a1bc6cd81192a3265a9c63) \- Composants `gcds-top-nav`, `gcds-side-nav`, `gcds-nav-group` et `gcds-nav-link` ajoutés à la bibliothèque
- https://github.com/cds-snc/gcds-components/pull/203 - [2f0915e](https://github.com/cds-snc/gcds-components/commit/2f0915ecb7d9426062b423e27529ee38667cc1b9) \- Propriété `type` ajoutée au composant `gcds-date-modified` afin d’afficher le numéro de version au besoin

### :rotating\_light: Changements non rétrocompatibles

- Composant menu de navigation globale (`gcds-site-menu`)
  - Composant `gcds-site-menu` retiré de la bibliothèque de composant et remplacé par `gcds-top-nav`

- 

### :jigsaw: Correctif

- https://github.com/cds-snc/gcds-components/pull/205 - [51b30a8](https://github.com/cds-snc/gcds-components/commit/51b30a8a3d5db9f0e91f6f4e9a2d85c26ab2568c) - `experimentalImportInjection` ajouté à la version afin d’aider l’intégration de composants nécessitant des installations regroupées comme Vite
- https://github.com/cds-snc/gcds-components/pull/205 - [51b30a8](https://github.com/cds-snc/gcds-components/commit/51b30a8a3d5db9f0e91f6f4e9a2d85c26ab2568c) \- Évènement `onChange` corrigé pour le composant `gcds-checkbox`
- https://github.com/cds-snc/gcds-components/pull/203 - [2f0915e](https://github.com/cds-snc/gcds-components/commit/2f0915ecb7d9426062b423e27529ee38667cc1b9) \- Styles des erreurs de formulaire mis à jour

## v0.11.0

### :rocket: Nouvelles fonctionnalités

- 

### :rotating\_light: Changements non rétrocompatibles

- Composant boîte (`gcds-container`)
  - Propriété `container` (boîte) renommée à `size` (taille)

### :jigsaw: Correctif

- https://github.com/cds-snc/gcds-components/pull/188 - [41cc32e](https://github.com/cds-snc/gcds-components/commit/41cc32eedde3e22ed029f90d472d25f953702a63) \- Propriétés margin et padding (marge et marge intérieure) ajoutées au composant `gcds-container`
- https://github.com/cds-snc/gcds-components/pull/191 - [e7a12e4](https://github.com/cds-snc/gcds-components/commit/e7a12e4ca9c7382bdd6f24b22102328b3b137ed0) \- Propriété border (bordure) ajoutée au composant `gcds-container`
- https://github.com/cds-snc/gcds-components/pull/195 - [7fc63d7](https://github.com/cds-snc/gcds-components/commit/7fc63d706f7cb995070c43f0b2be0e5bedb5e966) \- Validateur `requiredFileInput` mis à jour pour qu’il utilise l’élément `FileList` plutôt que l’élément `value`
- https://github.com/cds-snc/gcds-components/pull/196 - [ae460f3](https://github.com/cds-snc/gcds-components/commit/ae460f3b1f2b4ca79889c24a586052fad40f927a) \- Validateur `requiredFileInput` mis à jour pour qu’il utilise l’élément `FileList` plutôt que l’élément `value`

## v0.10.3

### :jigsaw: Correctif

- https://github.com/cds-snc/gcds-components/pull/181 - [2d7d2bc](https://github.com/cds-snc/gcds-components/commit/2d7d2bc38123e1310f7d86e420eed4ab6e45f84b) \- Titre de l’alerte modifiée d’une balise h5 à une balise p + strong
- https://github.com/cds-snc/gcds-components/pull/181 - [9035579](https://github.com/cds-snc/gcds-components/commit/9035579684a64533486fd2a7d4c5231c9069a0a6) \- Bordure du composant pagination modifiée pour agencer avec le texte et la couleur de fond

## v0.10.2

### :jigsaw: Correctif

- https://github.com/cds-snc/gcds-components/pull/167 - [fc5ee8e](https://github.com/cds-snc/gcds-components/pull/167/commits/fc5ee8e410d85542d25cd273d084a7defdb883ed) \- Valeur ajoutée aux liens du résumé des erreurs dans storybook afin d’afficher le résumé des erreurs plutôt qu’un écran vide
- https://github.com/cds-snc/gcds-components/pull/167 - [597f224](https://github.com/cds-snc/gcds-components/pull/167/commits/597f22435ded6fa1804c2af6143fc2ee9a0085b4) \- Texte français mis à jour dans l’en-tête par défaut du résumé des erreurs
- https://github.com/cds-snc/gcds-components/pull/167 - [4b0fe7f](https://github.com/cds-snc/gcds-components/pull/167/commits/4b0fe7fa7c25cbcf8c00f6b7ca50cd2259f793e5) \- Nouveau nom UF et composant gcds-container ajoutés à la démonstration

## v0.10.1

### :jigsaw: Correctif

- https://github.com/cds-snc/gcds-components/pull/163 - [c7d5712](https://github.com/cds-snc/gcds-components/commit/c7d57128eabc02552b55d046a5b6a9ea1d695849) \- Descriptions des propriétés du composant `gcds-breadcrumbs` mises à jour

## v0.10.0

### :rocket: Nouvelles fonctionnalités

- 
- https://github.com/cds-snc/gcds-components/pull/149 - [a531b14](https://github.com/cds-snc/gcds-components/commit/a531b14050a2cce28fa6300a0551e2335962fabc) \- Dépôt `@cdssnc/gcds-components-angular` mis à jour vers Angular v15 Le package ne fonctionnera plus avec Angular v14.

### :jigsaw: Correctif

- https://github.com/cds-snc/gcds-components/pull/145 - [dde9f87](https://github.com/cds-snc/gcds-components/commit/dde9f870c8afbdab2251162e4f9fd32a296ac1ef) \- En-tête manquant « À propos de ce site » ajouté au composant gcds-footer
- https://github.com/cds-snc/gcds-components/pull/150 - [6e828bc](https://github.com/cds-snc/gcds-components/commit/6e828bc7f15db7117992d1f0a97e5aff74070447) \- États et styles des composants `gcds-lang-toggle` et `gcds-button` mis à jour afin d’être conformes à la bibliothèque Figma
- https://github.com/cds-snc/gcds-components/pull/153 - [68aab03](https://github.com/cds-snc/gcds-components/commit/68aab03311405d24e32e235eec4f548540e8250e) \- Problème d’affichage résolu. Le chevron de trop qui s’affichait lorsqu’on utilisait l’attribut hide-canada-link dans le composant gcds-breadcrumbs a été supprimé.
- https://github.com/cds-snc/gcds-components/pull/154 - [dcbd5ab](https://github.com/cds-snc/gcds-components/commit/dcbd5aba8125003912f172c64af09cf3434f6779) \- Composant gcds-fieldset modifié pour ne plus utiliser shadowDom, conformément aux autres composants de formulaire

---

# Journal des modifications



## 

 

###  

* 

 





### 

  

   



* 
  - 
  - 
* 
  - 
  - 
* 
  - 
  - 
* 
  - 
  - 

### 



## 

 

###  

*  

###  

* 
* 
*  

###  

* 
* 
* 

## 

 

###  

* 
*  

###  

*  

## 

 

###  

* 
*  
* 

## 

 

###  

* 

## 

 

###  

* 

###  

* 


## 

 

###  

- 
- 

## 

 

###  



#### 

 







  

##### 


>
 

##### 


>
 

#### 

 

  



##### 


>

##### 


>
  

###  

- 
- 
- 
- 

###  

- 

## 

 

###  

- 

## 

 

###  

- 

## 

 

###  

- 

## 

 

###  

- 

## 

 

###  

- 

## 

 

###  

- 
- 

## 

 

###  

- 

###  

- 

## 

 

###  

- 
- 
- 

###  

- 

## 

 

###  

#### 

  

 

- 
- 
- 
- 

##### 

- 
- 



#### 



- 
- 
- 

#### 

 

##### 


>

>


##### 

  
>


###  

- 
- 

###  

- 

## 

 

###  

- 

###  

- 

## 

 

###  

- 

## 

###  

- 

###  

- 

###  

- 
- 

## 

### 

- 

## 

###  

- 
  - 

- 

###  

- 
- 
- 
- 
- 

## 

###  

- 

- 

- 

## 

###  

- 

###  

- 
- 

## 

###  

- 

###  

- 

## 

###  

- 
- 

###  

- 
- 
- 
- 
- 

## 

###  

- 

###  

- 
- 
- 
- 

## 

###  

- 

###  

- 

###  

- 
- 
- 
- 

## 

###  

- 

## 

###  

- 
- 

###  

- 
  - 

- 

###  

- 
- 
- 

## 

###  

- 

###  

- 
  - 

###  

- 
- 
- 
- 

## 

###  

- 
- 

## 

###  

- 
- 
- 

## 

###  

- 

## 

###  

- 
-  

###  

- 
- 
-  
- 
