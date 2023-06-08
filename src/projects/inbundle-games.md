---
title: inbundle.games
date: 2020-05-01
description: Check if games were ever bundled on humblebundle.com.
tags: ['React', 'PostgreSQL', 'Node.js', 'Backend', 'Web']
sourceUrl: https://github.com/datguysheepy/inbundle.games
---
Please keep in mind that this project is no longer supported or maintained. Therefore, it is highly likely that any links associated with it may no longer be active.

I am a big fan of [Humble Bundle](https://humblebundle.com/), not only because it allows me to discover and enjoy great games but also because it enables me to support others.
Given that this initiative began back in 2010, the number of games bundled over the years has been substantial. If you have been following Humble Bundle for some time, you may have noticed that certain games were occasionally repeated.
To address this, I created inbundle.games - a simple web tool to quickly check if a game was ever part of a Humble Bundle and when it was featured."

## The basic setup
I needed this app to perform two simple tasks:

- Search for a specific game.
- Check if the searched game was ever included in a bundle.

As you can see, the requirements were not overly complex. To accomplish these tasks, I recognized the need for a database. Given my previous experience with it, I chose PostgreSQL for the job.
However, I was well aware that manually adding and maintaining every possible game in my own database would be an impractical endeavor. That's why I opted to utilize an existing third-party API for this purpose.
After careful consideration, I selected the [RAWG API](https://rawg.io/apidocs) as it appeared to be a reliable and comprehensive service, and best of all, it offered free usage.

## The app
As described in the previous section, this app doesn't have complex functionality. It performs the following steps:

-> Calls the API. 
<br />
-> Retrieves a list of possible games matching the search criteria.
<br />
-> Calls the API again.
<br />
-> Retrieves the details of the selected game.
<br />
-> Makes a call to our database to check if this game exists in our records.
<br />
-> Returns either no results or a list of all the bundles in which this game was included.
<br />
-> Displays all of this information in a simple user interface.

and here's the app:

<img src="/public/inbundle.png" width="100%"/>

## Why the development stopped?
I really enjoyed working on this app, and I believe the idea behind it was great. The functionality, despite being minimalistic, was nearly perfect. 
However, I eventually had to stop supporting this project. The reason behind this decision was the laborious and manual process of adding new bundles to my database. Allow me to illustrate:

Every one or two weeks (although I don't have official data on the frequency of new bundle releases, it was approximately around that timeframe), I had to go through the following steps:
- Create a new entry in the database for each new bundle, including its name, start and end time, and potentially other details that I might not recall at the moment.
- For each game included in the bundle (sometimes as few as 7 games and occasionally even up to 12), I had to create a separate entry in the database, capturing basic information such as the game's title, and link it to the corresponding bundle entry from the previous step.

This extra workload required around 30-60 minutes of my time every week or so. Unfortunately, it became increasingly burdensome for a project that likely only I was utilizing, so I've decided to use this time for other things.