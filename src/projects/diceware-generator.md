---
title: Diceware Generator
date: 2019-08-01
description: Simple passphrases generator built with JavaScript.
tags: ['JavaScript', 'Web']
websiteUrl: https://diceware.mtymon.me/
sourceUrl: https://github.com/datguysheepy/diceware-generator
---
This is the first real project I've ever created using JavaScript, so both the code and design leave much to be desired. However, to this day, I'm happy with it, and I'm glad I made the decision to create it.

The idea for this project came to me when I read an article about using physical dice to generate highly secure passwords for online accounts. 
Being the lazy person that I am, I decided to reproduce it digitally for a faster and easier user experience. If you're interested in learning more about this method, you can find more in <a href="https://theworld.com/~reinhold/diceware.html" class="text-link text-primary">this article</a>.

## Features:
This is a relatively simple project that offers several key features:
- Ability to generate passphrases in 12 languages
- Ability to select passphrase length (6-128 words)
- Ability to generate a new passphrase with the same settings with just one button click.
- Ability to copy the generated passphrase with just one button click.


## Screenshot:
<img src="/public/diceware_1.png" width="512" alt="Diceware homepage">

## Future plans:
To me, this project feels complete. I'm quite happy with the design, although it's not perfect and could be improved. Considering its age, it feels satisfactory. 
As for the code quality, I acknowledge that a complete rewrite might be necessary, but it's not currently high on my priority list. Perhaps one day, I'll decide to enhance it as a small and fun weekend project.
For now, I'll leave it as it is.

In the future, I would like to explore more secure methods of generating numbers, as the current usage of `Math.random()` is not considered safe. It would also be beneficial to reconsider how dictionaries for different languages are stored.