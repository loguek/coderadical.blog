---
title: Hello World
date: "2020-05-29T22:03:03.284Z"
description: "After countless domain name lapses and false starts, I’ve finally leapt(albeit pushed by Covid-19 boredom) and launched my blog/site upon the world. What this site will become is an unknown. Likely, I’ll post yearly apologies to an unvisited site and promise to post more."
---

After countless domain name lapses and false starts, I've finally leapt(albeit pushed by Covid-19 boredom) and launched my blog/site upon the world. What this site will become is an unknown. Likely, I'll post yearly apologies to an unvisited site and promise to post more.

I thought long and hard about the technology that I should use. Fighting my inner-developer who says custom CMS is easy and I should build everything from scratch. This would have been particularly appealing, as it would allow me to brush up on some old friends or get acquainted with the ever-expanding army of **JavaScript Frameworks**. In the end, sensibility and Gatsby won out. It is built with performance in mind, rapid to develop and would allow me to apply some of my knowledge of **ReactJS**. The simple markup based content engine and how it uses GraphQL makes it quite versatile and perfect for my immediate needs. Building from a fork of the Gatsby blog starter, I had a working site in under an hour. Of course, this required significant restraint from diving into its inner workings and trying to improve them(i.e. break).

![Designer Meme](./designer.meme.jpg)

Another devilish temptation was design. I've always liked working on design aspects of various projects. As my experience has been mostly small teams, I've often had a strong say. The problem with this temptation is that I'm also a perfectionist. I could devote hours into what colour best represents me (#F15051) and who is likely to read this site(Mom?). So putting my managerial cap on and channelling my inner demanding-boss. So an MVP it is! (V2 will probably come with breaking features labelled as minor bug fixes in the release notes)

As Gatsby does not require a node instance to run hosting should be fairly straightforward! Though I do have that **AWS EC2** instance that has been slowly pushing Bezo's to the trillion-dollar mark. EC2 it is, with Nginx providing web serving duties. I briefly played around with setting up **Jenkins**, hooking into **AWS CodeDeploy**. While **CI/CD** is all the rage, the added benefits to this type of project are small to none. 

All source for this site is available on [GitHub](https://github.com/loguek/coderadical). 

  

