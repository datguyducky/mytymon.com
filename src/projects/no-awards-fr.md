---
title: No Awards for Reddit
date: 2020-07-01
description: Extension to remove awards on Reddit.
tags: ['JavaScript', 'WebExtensions API', 'Firefox', 'Chromium']
websiteUrl: https://addons.mozilla.org/en-US/firefox/addon/no-awards-for-reddit/
sourceUrl: https://github.com/datguyducky/no-awards-fr
---

This is a small project that I completed in a matter of a couple of hours. As I was browsing Reddit on my PC, I started to become increasingly frustrated with the sheer number of awards displayed on posts and comments. 
I particularly remembered a time when the "silver" award was humorously given by commenting `!redditsilver`.

## Features
- Works on both the redesigned and old versions of Reddit.
- Ability to disable awards on posts and comments.
- Ability to disable animated awards on comments.
- Settings pop-up to customize the display of awards (e.g., show "Get awards" buttons but hide awards on posts and comments).
- Hide the "Give Awards" option on comments and posts.
- Hide the "Coins X" display on your profile dropdown.
- Option to display all awards without interactivity.

## How it works
As mentioned earlier, this project is designed to be simple and efficient. To achieve this, I avoided over-engineering and focused on ensuring optimal performance.
For each setting in the menu, a separate `.css` file is created. These files contain the necessary CSS classes to hide or adjust elements based on the selected options.

Every time Reddit is opened, the appropriate extension files are loaded in the website's `<head>` section. This ensures that the styling is applied as quickly as possible, providing a seamless user experience.

## Future development
Since I use this extension on a daily basis, there is no need to worry about discontinuing support for it. However, given that it is a simple project, there aren't many additional features to add.

Of course, whenever necessary, I will update the extension to block new methods of displaying awards. Additionally, I believe there are still some improvements that can be made to the settings section of the project.