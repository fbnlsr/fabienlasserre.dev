---
title: "From Markdown, Git and Obsidian to Joplin: my note-taking setup"
date: 2026-03-24
translationKey: "blogJoplin"
excerpt: "After years of chasing the perfect tool, I finally ditched Obsidian for Joplin — a simple, efficient Markdown setup that actually fits my developer workflow."
---

Since the beginning of my career as a developer, I’ve probably spent half of my time on two absolutely critical activities:

- Finding the best monospace font for my IDE
- Finding the best note-taking application possible

The first topic could easily deserve its own blog post. I spent years using **Ubuntu Mono**, after going through a phase where I basically destroyed my eyes with bitmap fonts like **Dina**. But everything changed in 2017 when I discovered **IBM Plex Mono**. Even though ligatures were trendy at the time, I’ve never found a better font since, and I install it on every machine I use.

When it comes to note-taking, however, I’ve always felt that existing tools are too limited. They either come with a bunch of unnecessary features or hide behind a paywall — and I have no interest in locking myself into a paid ecosystem.

Speaking of ecosystems, many people just stick with Apple’s **Notes** app. But one of its major flaws is the lack of proper support for code blocks. Being on Android, I could use **Google Keep**, but I have too much self-respect for that.

Over time, I’ve established a few non-negotiable principles for note-taking:

## Markdown is king

Markdown is, in my opinion, the ultimate format for note-taking on a computer:

- It’s human-readable
- The syntax is easy to learn
- Formatting is efficient
- It’s simple to write, edit, and share
- It supports code blocks with proper syntax highlighting

In short, it’s perfect for everything: blog posts (like the one you’re reading), codebase comments, emails, and more.

## Nothing beats the filesystem

Closely tied to Markdown, I’ve always preferred using the filesystem to store my notes. When you’re dealing with plain text files, it’s hard to beat:

- Easy organization with folders
- Access to metadata (creation / modification dates)
- Powerful search capabilities
- Universal accessibility

Until recently, I had a very simple setup: Markdown files organized in folders, edited with **VS Code**. Synchronization was handled via **Git**, which made my notes accessible from anywhere through a browser.

## Obsidian, the power of a dedicated editor

This setup worked well, but let’s be honest: VS Code is neither as simple as a minimal editor like GEdit or `nano`, nor as specialized as a dedicated note-taking tool.

So I tried several alternatives, such as [**Logseq**](https://logseq.com/) and [**Simplenote**](https://simplenote.com/). The whole “second brain” concept doesn’t really appeal to me, so Logseq was quickly ruled out. Simplenote offers seamless synchronization — even on mobile — but between the underwhelming UI and Matt Mullenweg’s mood swings, I wasn’t comfortable investing in it.

I then switched to **Obsidian**, which has several strong advantages: a polished interface, a plugin system, and a powerful Markdown editor — somewhere between **Notion** and **VS Code**.

However, I still had to rely on Git to sync my notes, and I often forgot to do it. On top of that, Obsidian’s mobile experience is far from perfect, and using Git on a phone is… questionable at best.

## Joplin, simplicity to the rescue

For the past few days, I’ve been testing **Joplin**, and I have to say: I’m fully convinced. It’s an open-source tool that ticks all the boxes:

- A solid Markdown editor
- A clean and simple interface
- Easy synchronization via Dropbox

To complete the setup, I can use my favorite font in the editor, and Joplin also provides a nice plugin ecosystem.

Here are the plugins I currently use:

- [Copy Code Blocks](https://joplinapp.org/plugins/plugin/com.joplin.copy.codeBlocks/)
- [Github Alerts](https://joplinapp.org/plugins/plugin/com.github.alan-null.joplin-plugin-github-alerts/)
- [Hotstrings & Hotkeys](https://joplinapp.org/plugins/plugin/joplin.plugin.hotstrings/)
- [Rich Markdown](https://joplinapp.org/plugins/plugin/plugin.calebjohn.rich-markdown/)
- [YesYouKan](https://joplinapp.org/plugins/plugin/org.joplinapp.plugins.YesYouKan/)
- [Better Tables](https://joplinapp.org/plugins/plugin/com.ckant.joplin-plugin-better-tables/)

The files are still plain Markdown, with a slightly specific frontmatter that can easily be filtered out if needed. I’ve been able to disable all the unnecessary options (split view, extra UI clutter…), and there’s also a tagging system — not useful for me right now, but potentially interesting in the future.

For now, I’ve found my favorite note-taking app.

Until the next one.
