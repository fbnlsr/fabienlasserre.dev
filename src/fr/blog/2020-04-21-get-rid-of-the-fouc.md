---
title: "Comment se débarasser du Flash Of Unstyled Content"
date: 2020-04-21
translationKey: "blogFouc"
excerpt: "Souvent craint par les designers, voyons comment il est possible avec quelques petites astuces de se débarasser de cette nuisance qu'est le Flash Of Unstyled Content."
cover:
  author: "Jamie Haughton"
  link: "https://unsplash.com/@haughters"
links:
  devto: "https://dev.to/fbnlsr/how-to-get-rid-of-the-flash-of-unstyled-content-5e7"
  medium: "https://medium.com/@fbnlsr/how-to-get-rid-of-the-flash-of-unstyled-content-d6b79bf5d75f"
---
Cette semaine, j'ai pris un peu de temps pour travailler sur les performances de chargement de mon site. J'ai commencé par basculer de [Slick](https://kenwheeler.github.io/slick/) à [Glide.js](https://glidejs.com/) afin de totalement supprimer jQuery comme dépendance. Cela m'a permis de diviser la taille du JavaScript et de la CSS chargés de moitié (!). J'ai ensuite ajouté un cookie de préférence de langue. Puis, afin d'améliorer l'expérience utilisateur, j'ai ajouté une fonction qui permet de faire cette bascule automatiquement en fonction de la langue du navigateur.

Tout se passait bien, mais je me suis rendu compte que mon site souffrait d'un [Flash Of Unstyled Content](https://fr.wikipedia.org/wiki/FOUC), ou "FOUC". C'était assez visible même avec le nouveau JavaScript et CSS en place : une fois un lien cliqué, la page commençait à être rendue pratiquement immédiatement avant que la CSS ne soit appliquée. C'est un phénomène particulièrement ennuyeux car cela retire l'utilisateur de cette expérience lisse et presque instantanée que je cherchais à atteindre. Heureusement, on peut rapidement se débarrasser de ce FOUC avec quelques petits trucs faciles à mettre en place.

## Étape 1 : On cache tout !

La première chose à faire est tout simplement d'ajouter une instruction CSS au body afin de le cacher complètement jusqu'au moment où il est prêt à être affiché. Cela permet à la page d'être totalement chargée avant de pouvoir la présenter à l'utilisateur. Cela peut paraître contre-intuitif lorsque nous cherchons justement à gagner en performance et donc en vitesse, et là nous *ralentissons* les choses. Mais c'est un sacrifice nécessaire que nous faisons sur l'autel de l'expérience utilisateur.

```html
<body style="visibility: hidden;">
  <!-- Your awesome website -->
</body>
```

Nous pourrions aussi utiliser la propriété `opacity` à la place, et utiliser des transitions CSS pour ajouter un peu de magie.

## Étape 2 : Dévoiler quand tout est prêt

Nous devons ensuite renverser cette propriété CSS `visibility` une fois que le DOM est chargé et prêt. Pour cela, j'utilise une petite fonction d'aide, un peu à la manière de la méthode `document.ready()` de jQuery. Cela appelle un callback une fois que le document est dans un état "complete" ou "interactive".

Nous changeons donc simplement la propriété `visibility` du tag `<body>` à `visible`.

```js
// Helper function
let domReady = (cb) => {
  document.readyState === 'interactive' || document.readyState === 'complete'
    ? cb()
    : document.addEventListener('DOMContentLoaded', cb);
};

domReady(() => {
  // Display body when DOM is loaded
  document.body.style.visibility = 'visible';
});
```

Et voilà ! Notre FOUC est parti. Avec cette astuce simple, notre utilisateur a une meilleure expérience et n'a pas de contenu bizarre qui flashe à l'écran avant de pouvoir naviguer sur notre site.

## Le problème Firefox

Les choses devraient rouler sous Chrome, mais il est toujours possible de voir un flash sous Firefox. J'ai peiné à trouver une solution à ce problème jusqu'à ce que je déniche un bug dans Firefox qui a été relevé [il y a plus de 3 ans](https://bugzilla.mozilla.org/show_bug.cgi?id=1404468) et qui est encore actif. On essaie toujours d'y trouver un fix mais heureusement, il existe un petit hack que nous pouvons utiliser pour contourner ce problème. Il suffit d'ajouter un bout de code JavaScript "fantôme" juste après le tag `<body>` et tout devrait aller !

```html
<body style="visibility: hidden;">
  <script>0</script>
</body>
```

Pas mal, non ? Un peu étrange aussi, je dois avouer. Mais bon, ça fait le boulot.

## Note : Pensez au noscript

Il ne faut pas oublier que tout le monde ne peut pas ou ne veut pas exécuter du JavaScript. Dans ce cas, cette ligne juste avant la balise fermante `</body>` permet à tout le monde de voir notre site.

```html
<noscript><style>body { visibility: visible; }</style></noscript>
```

Et voilà, tout est prêt ! Maintenant notre site devrait s'afficher correctement, sans aucun FOUC ! 🎉

**Mise à jour - 1er mai 2020**

On m'a averti que mon code cassait le validateur W3C. C'est parce qu'officiellement, la balise `<style>` ne peut pas être un enfant de `<noscript>`.

Pour remédier à cela, ce que nous pouvons faire est de supprimer cette balise `<noscript>`, et  ajouter une classe `no-js` à l'élément `body`. Ensuite, nous ajoutons simplement cette règle CSS dans le `<head>` du document :

```html
<head>
  <style>
    .no-js {
      visibility: visible;
    }
  </style>
```

Et enfin nous basculons à nouveau le tout juste après la balise `<body>` grâce à ce JavaScript :

```html
<body style="visibility: hidden;" class="no-js">
    <script>
        document.querySelector('body').classList.remove('no-js');
    </script>
```

Cela va non seulement rendre les choses compatibles avec le W3C, mais puisque nous avons ajouté un petit bout de JavaScript dans le `body` de notre document, le code JS fantôme que nous avons créé tout à l'heure devient obsolète ! Donc maintenant, tout le monde est content, et nous pouvons enfin siroter un verre d'eau bien fraîche sous le soleil.

![Seal of approval](/img/blog/2020-04-21/sealofapproval.jpg)

**Mise à jour 06/05/2021 :** Merci à [Moritz Profitlich](https://profitlich.ch/) pour avoir corrigé une petite coquille dans le code source de cet article ! 😄
