---
title: Pare Down for Spotify
date: 2019-11-01
description: Web tool for Spotify users.
tags: ['featured', 'React', 'Web', 'NextJS', 'TailwindCSS']
websiteUrl: https://pare-down.mytymon.com/
sourceUrl: https://github.com/datguyducky/pare-down
---

This project started as a really simple and minimalistic project, with the functionality being the most important part for me. 
However, over time, it underwent redesign and refactoring as I began to prioritize UX/UI and desired to add more functionality.

The basic idea of this project was to enable users with large Spotify playlists and limited/slow internet connections to download their playlists more easily. 
This is achieved by creating "pared down" duplicates of selected playlists, containing a specific number of songs. 
For example, from a playlist of over 1000 songs, users can create a new playlist with just 80 recent songs from the original one by simply clicking a few buttons."

## Challenges
This is a list of challenges that I wrote about this project back when in time, while some things may be repeated in other sections of this article, 
I think it's worth leaving this list as it is to keep the thoughts that I had about this whole app back when I was working on it, as now I don't really remember much of it.

- It was my first time using this type of an API, so it took me some time to fully adapt to using it. Especially when I was implementing option to sort current playlist (recently added or oldest ones) - choosing correct query parameters, then fetching and displaying correctly sorted tracks.
- When a few months passed after the creation of this project I decided to redesign the whole webpage of it. So learning more about proper design concepts, colors and all of that was quite a challenge. Also with redesign I wanted to use React Router so that was also something new for me.
- Then came the next redesign, where I aimed to enhance not only the app's UI/UX but also the technologies used behind the scenes. This involved a complete overhaul of the app, including both the frontend and backend code. I opted to leverage the power of ReactJS with Typescript, and NextJS. For the UI/UX, I used TailwindCSS and styled-components. This is the version of the app that I'm really proud of.

## Learning Next.js & TailwindCSS
I think the most important part of this whole project is that it enabled me to work with Next.js and TailwindCSS for the first time. 
I had the opportunity to learn these technologies in the best possible way—by creating something useful for myself (and hopefully others too). It's important to note that this project wasn't initially started using any of these frameworks; they were incorporated during the second redesign.

I would love to write more about how I felt when using these two technologies, but I'm writing this article long after the redesign was finalized, and I don't remember much about the initial experience. 
The only thing I can say is that I'm still not entirely sure how I feel about Tailwind. Maybe one day, I will write an article about it...

## Redesigns of Pare Down
As you can see below, the first version of Pare Down was designed to be minimalistic both in terms of its visual design and code implementation.

<p class="p-flex">
	<img src="/public/paredown_v1.png" width="720"/>
</p>

Then, I tried to create something that would be more visually appealing, but now, looking at it after some time, I would say it didn't turn out great.

<p class="p-flex">
	<img src="/public/paredown_v2.png" width="720"/>
</p>

And this is the latest version that utilizes both Next.js and TailwindCSS. While there are still some areas that could be improved, I am quite happy with how it looks.

<p class="p-flex">
	<img src="/public/paredown_v3.png" width="720"/>
</p>

## Future plans
This is my second favorite project (after [Simple Start](/projects/simple-start)) that I enjoy working on. Therefore, I am certain that more functionalities, design changes, and even complete redesigns or rewrites are coming in the future for this project. 
In fact, I still have a lengthy list of things that I believe can be improved here.