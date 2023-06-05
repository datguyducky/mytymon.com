---
title: V RSS Reader
date: 2020-01-01
description: RSS reader built with React Native.
tags: ['featured', 'React Native', 'App', 'Android', 'Mobile']
websiteUrl: https://play.google.com/store/apps/details?id=com.vrssreader.app
sourceUrl: https://github.com/datguysheepy/v-rss-reader
---

The idea for this project was simple - I wanted to start reading more news and various articles. However, I couldn't find any apps available for download at that time that I truly liked. So, I decided to create one for myself.

## Features
- Access all your articles in one place.
- Completely free to use and download.
- No ads.
- Easily add and manage RSS feeds.
- Track your reading stats.
- Streaks - keep track of how many days in a row you have read an article.
- Customizable
- Minimalistic

## My journey with UX/UI
If you've read other articles about my projects, you may have noticed that I have a tendency to redesign them. I suppose this is the Achilles' heel of programmers - the constant urge to rewrite our projects...

But let's not dwell on that. Instead, let me explain why I have decided to rewrite this application twice already. Trust me, I had good reasons. To begin with, take a look at how V - RSS Reader looked in its initial stages:

<p class="p-flex">
	<img src="/public/vrss_v1.png" height="464" />
</p>

As you can see, the initial version is extremely minimalistic, with very little content displayed on this view. Believe me when I say that the functionality offered by this version was just as simple as the app's appearance.

Although I wasn't satisfied with the UX/UI of this version, that was not the sole reason for embarking on a redesign. 
The main motivation was the numerous bugs plaguing the app, to the extent that I felt ashamed to have it available for others to download and try for themselves. Here's how the UX/UI of the app looked after the first redesign:

<p class="p-flex">
	<img src="/public/vrss_v2.png" height="464" />
</p>

I would argue that this version looks significantly better than the previous one. It adheres to good UX/UI standards, and the code quality has improved significantly. 
The thorough testing process also resulted in a significantly reduced number of bugs.

However, I made the decision to redesign the app once again, and here are some bullet points outlining the reasons:

- The code quality was still not up to par. Adding new functionalities or fixing existing bugs became a painful process.
- The version of React Native used in this version was becoming outdated, and updating it was not straightforward.
- While the design was okay, it still fell short of being truly good. There were bugs related to some unconventional design choices, as well as some poor UX/UI elements in other views that are not visible in the screenshot above.

Due to these and other reasons, I opted for a full app redesign with a specific focus on addressing these issues. Here's how the app looks now:

<p class="p-flex">
	<img src="/public/vrss_v3.jpg" height="464" />
</p>

## Latest version with Expo
As you can see from the above, the app now bears no resemblance to the first version. The process of reaching this point was slow, as I adopted a completely different approach to programming this version. 
I took considerably longer to create specific parts of the application, as they underwent multiple rounds of testing and revisions to ensure high-quality code, design, and UX, with minimal bugs.

That's not the only difference compared to the previous versions of V - RSS Reader, though. This time, I made the decision to use Expo. 
It seemed that Expo had reached a stage where it was usable and worthwhile for app development. This was in contrast to when I first worked on the app or during the initial redesign, when Expo appeared to be a messy tool that was best avoided.

In the end, I believe it was a wise choice as it significantly accelerated the app's development process. 
Additionally, using third-party packages and, most importantly, the ability to update to newer versions of React Native in the future were significant advantages.

## Future development
There are still some things that I would like to improve or add to V - RSS Reader. However, at the moment, I have no plans for another redesign. 
Sooner or later, I will begin working on these new features, and my hope is that they will bring the application to a point where I will be satisfied enough to leave it untouched for some time.
