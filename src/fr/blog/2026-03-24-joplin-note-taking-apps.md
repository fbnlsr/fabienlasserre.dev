---
title: "De Markdown, Git et Obsidian à Joplin : mon setup actuel"
date: 2026-03-24
translationKey: "blogJoplin"
excerpt: "Après des années à chercher l’outil parfait, j’ai finalement laissé tomber Obsidian pour Joplin — une solution Markdown simple, efficace et enfin alignée avec mon workflow de développeur."
---

Depuis le début de ma carrière de développeur, j’ai dû passer environ la moitié de mon temps sur deux activités absolument cruciales :

- Trouver la meilleure police de caractères monospace pour mon IDE
- Trouver la meilleure application de prise de notes possible

Le premier point pourrait faire l’objet d’un billet à part entière. J’ai passé des années à utiliser **Ubuntu Mono**, après une phase où je me suis ruiné les yeux avec des polices bitmap comme **Dina**. Mais tout a changé en 2017, lorsque j’ai découvert **IBM Plex Mono**. Même si la mode était aux ligatures à l’époque, je n’ai jamais trouvé meilleure fonte que celle-ci, et je l’installe sur absolument toutes mes machines.

En ce qui concerne la prise de notes, en revanche, j’ai toujours trouvé les logiciels existants trop limités. Soit ils intègrent des fonctionnalités totalement inutiles, soit ils se cachent derrière un paywall — et je n’ai aucune envie de m’enfermer dans un écosystème payant.

En parlant d’écosystème, beaucoup se contentent de l’application **Notes** d’Apple. Mais l’un de ses défauts majeurs est l’impossibilité de sauvegarder correctement des blocs de code. Étant sous Android, je pourrais utiliser **Google Keep**, mais j’ai trop d’estime pour moi-même pour utiliser cette abomination.

Pour ma prise de notes, il y a plusieurs principes que j’ai gravés dans le marbre au fil du temps :

## Markdown is king

Le format Markdown est, pour moi, le format ultime pour la prise de notes sur ordinateur :

- Il est lisible par un humain
- Sa syntaxe est très simple à apprendre
- La mise en forme est efficace
- Il est facile à écrire, modifier et transmettre
- Il permet de stocker du code avec une colorisation syntaxique adaptée

En soi, c’est un format idéal pour tout : des articles (comme celui que vous êtes en train de lire), des commentaires dans une codebase, des emails, etc.

## Rien ne remplace le filesystem

Allant de pair avec Markdown, j’ai toujours aimé utiliser le filesystem pour sauvegarder mes notes. Lorsqu’on travaille avec des fichiers texte, difficile de faire plus efficace :

- Organisation simple via des dossiers
- Accès aux métadonnées (création / modification)
- Recherche facile
- Accessibilité universelle

Jusqu’à présent, j’utilisais un système assez simple basé sur des fichiers Markdown organisés en dossiers, édités avec **VS Code**. La synchronisation était assurée via **Git**, ce qui rendait mes notes accessibles depuis n’importe quel navigateur.

## Obsidian, la puissance d’un éditeur

Ce système fonctionnait bien, mais il faut reconnaître une chose : VS Code n’est ni aussi simple qu’un éditeur minimaliste comme GEdit ou `nano`, ni aussi spécialisé qu’un outil dédié à la prise de notes.

J’ai donc testé plusieurs alternatives, comme [**Logseq**](https://logseq.com/) ou [**Simplenote**](https://simplenote.com/). La notion de « second cerveau » ne me parle pas vraiment, donc Logseq a été rapidement écarté. Simplenote, quant à lui, propose une synchronisation transparente — y compris sur mobile — mais entre une interface peu convaincante et les sautes d’humeur de Matt Mullenweg, je n’avais pas envie d’y investir.

Je me suis alors tourné vers **Obsidian**, qui présente plusieurs avantages : une interface léchée, un système de plugins, et un éditeur Markdown très puissant, à mi-chemin entre **Notion** et **VS Code**.

Cependant, je devais toujours utiliser Git pour synchroniser mes notes, et il m’est arrivé plusieurs fois d’oublier de le faire. De plus, l’expérience mobile d’Obsidian est loin d’être parfaite, et utiliser Git sur téléphone reste… hasardeux.

## Joplin, la simplicité à la rescousse

Depuis quelques jours, je teste **Joplin**, et je dois dire que je suis entièrement conquis. C’est un logiciel open source qui coche toutes les cases :

- Un éditeur Markdown performant
- Une interface simple et claire
- Une synchronisation via Dropbox très facile à mettre en place

Pour boucler la boucle, je peux utiliser ma police préférée dans l’éditeur, et Joplin propose lui aussi un système de plugins intéressant.

Voici ceux que j’utilise actuellement :

- [Copy Code Blocks](https://joplinapp.org/plugins/plugin/com.joplin.copy.codeBlocks/)
- [Github Alerts](https://joplinapp.org/plugins/plugin/com.github.alan-null.joplin-plugin-github-alerts/)
- [Hotstrings & Hotkeys](https://joplinapp.org/plugins/plugin/joplin.plugin.hotstrings/)
- [Rich Markdown](https://joplinapp.org/plugins/plugin/plugin.calebjohn.rich-markdown/)
- [YesYouKan](https://joplinapp.org/plugins/plugin/org.joplinapp.plugins.YesYouKan/)
- [Better Tables](https://joplinapp.org/plugins/plugin/com.ckant.joplin-plugin-better-tables/)
- [Markdown Emoji Autocomplete](https://joplinapp.org/plugins/plugin/de.pernpas.joplin.markdown.emoji.autocomplete/)

Les fichiers restent du Markdown, avec un frontmatter spécifique mais facilement filtrable si besoin. J’ai pu désactiver toutes les options inutiles (vue split, réglages superflus…), et il existe également un système de tags — inutile pour l’instant, mais potentiellement intéressant à l’avenir.

J’ai donc, pour le moment, trouvé mon application de notes idéale. Jusqu’à la prochaine.
