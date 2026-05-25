---
title: "Mon terminal"
date: 2026-05-25
cover:
  author: "Oskar Kadaksoo"
  link: "https://unsplash.com/@oskark"
---
Jusqu'à récemment, j'avoue n'avoir jamais vraiment prêté attention à mon terminal ni aux outils en ligne de commande que j'utilise au quotidien. Seulement voilà : avec l'essor de l'intelligence artificielle, j'y passe de plus en plus de temps.

J'ai donc voulu mettre en place un environnement rapide à installer, facilement reproductible et, surtout, suffisamment performant pour ne jamais me ralentir dans mon travail quotidien.

J'avoue que jamais je n'aurais pensé écrire un article sur mon terminal, mais on ne sait jamais à qui cela pourrait être utile, et dans le pire des cas je pourrai m'en servir lors de ma prochaine install. :smile:

Voici le résultat :

![Mon terminal](/img/blog/2026-05-25/terminal.webp)

Et voici les outils que j'ai choisis :

## Simple et efficace : GNOME Terminal

Le premier choix à faire concernait le terminal lui-même. Et là, l'offre est telle qu'on se croirait dans la forêt des frameworks JavaScript. Il semble qu'un nouveau terminal sorte chaque semaine, vantant à chaque fois des performances toujours plus impressionnantes — la grande mode du moment étant l'accélération GPU.

Soyons honnêtes : j'en ai testé une bonne poignée, et je n'ai jamais constaté de différence fulgurante ni découvert de fonctionnalité réellement révolutionnaire. Je pense simplement que, pour mon usage, je n'ai pas besoin d'utiliser mon GPU pour afficher du texte sur fond noir.

À vrai dire, le seul qui a réussi à me faire hésiter est [Ghostty](https://ghostty.org). Le fait de pouvoir renommer les onglets ou faire du split est intéressant, mais pour une raison inconnue, il met plusieurs secondes à démarrer sur ma machine. Et nous sommes en 2026 : mon temps est précieux, je ne peux pas tolérer ça.

Je continue donc d'utiliser le terminal de base fourni avec ma distribution : GNOME Terminal. Il est léger, rapide et sans fioritures.

## La boîte à outils : ZSH + Oh My ZSH

C'est probablement la partie sur laquelle j'ai le moins de choses à dire. Je me suis mis à utiliser ZSH un peu par défaut, parce que c'était « le truc cool » autour de moi il y a une bonne dizaine d'années, sur les conseils d'un ami.

Mais après toutes ces années, je me suis tellement habitué aux alias et aux plugins qu'il propose que j'aurais du mal à revenir à Bash.

Pour les alias, j'en utilise quelques-uns quotidiennement, notamment pour Docker :

- `dcu` et `dcd` pour `docker compose up` / `down`
- `dcx` pour `docker compose exec`
- `www` pour me téléporter vers mon dossier de projets

Concernant les plugins, rien d'exotique :

- [`git`](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git), évidemment
- [`zsh-syntax-highlighting`](https://github.com/zsh-users/zsh-syntax-highlighting), parce que je suis incapable de me souvenir si une commande existe vraiment
- [`zsh-autosuggestions`](https://github.com/zsh-users/zsh-autosuggestions), indispensable lorsqu'on utilise souvent les mêmes commandes

Je conserve mon fichier `.zshrc` dans un gist privé afin de pouvoir le récupérer facilement sur n'importe quelle machine.

## La couche de vernis : Starship

Dernier ajout à mon arsenal : [Starship](https://starship.rs), un moyen simple de personnaliser le prompt de son shell.

Cela me permet d'avoir un prompt minimaliste, mais extrêmement pratique, avec toutes les informations utiles visibles immédiatement.

Sous Linux, Starship s'installe en une seule commande :

```bash
curl -sS https://starship.rs/install.sh | sh
```

Il suffit ensuite d'ajouter cette ligne au fichier `~/.zshrc` :

```bash
eval "$(starship init zsh)"
```

Et... c'est tout.

Concernant la configuration, j'utilise quelque chose de très simple :

```toml
# ~/.config/starship.toml
add_newline = true

[character]
success_symbol = '[➜](bold green)'
error_symbol = "[➜](bold red)"

[package]
disabled = true

[git_branch]
symbol = '🌱 '
style = 'cyan'

[nodejs]
disabled = true

[gcloud]
disabled = true

[time]
disabled = false
format = '[\[$time\]]($style) '
time_format = '%T'
```

Pour s'assurer que tous les caractères s'affichent correctement dans le terminal, je recommande fortement l'installation d'une [Nerd Font](https://www.nerdfonts.com/).

J'utilise personnellement la variante « Blex » de ma police monospace préférée : [IBM Plex Mono](https://www.programmingfonts.org/#plex-mono).

## La micro-cerise sur le gâteau

Enfin, la seule chose que j'ajoute à cet ensemble est [Micro](https://micro-editor.github.io/), un éditeur de texte rapide directement utilisable depuis le terminal.

Il propose plein de petites fonctionnalités qui rendent la vie beaucoup plus agréable : coloration syntaxique, support de la souris, raccourcis clavier intuitifs, etc.

Et voilà ! En moins de dix minutes, j'ai un setup simple, transparent, aussi bien en déplacement qu'à la maison, et qui me facilite nettement la vie au quotidien.
