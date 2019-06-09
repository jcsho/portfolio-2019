---
title: Usage
lang: en-us
---

![Travis (.org)](https://img.shields.io/travis/justinhodev/portfolio.svg)
![Dependencies](http://img.shields.io/david/justinhodev/portfolio.svg)
![GitHub release](https://img.shields.io/github/release/justinhodev/portfolio.svg)
![Coverage Status](https://coveralls.io/repos/github/justinhodev/portfolio/badge.svg?branch=master)
![Known Vulnerabilities](https://snyk.io/test/github/justinhodev/portfolio/badge.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

---

<p align="center">
  :star: A personal portfolio site to showcase my UX case studies and process work. :star:
</p>

# Table of Contents
- [About](#about)
- [Getting Started](#getting_started)
- [Technology Stack](#tech_stack)
- [Roadmap](https://github.com/justinhodev/portfolio/projects/1)

## About <a name="about"></a>
This is a personal site built with the accumulation of my case studies and working projects.

## Getting Started <a name="getting_started"></a>
If you want to take my website as a template to build your own feel free to follow below. :point_down:

### Prerequisites

[Node.js 10.15+](https://nodejs.org/en/)

```bash
$ node -v
v10.15.x
```

[Vue CLI 3.8+](https://cli.vuejs.org/)

```bash
$ npm i -g @vue/cli
$ vue -V
v3.8.x
```

Download / Clone this repo

```bash
$ git clone https://github.com/justinhodev/portfolio.git
```

### Running the App

Install dependencies

```bash
$ npm install
```

Start the development server

```bash
$ npm run serve
```

## Built With <a name="tech_stack"></a>
- [Vue](https://vuejs.org/) - component style code, easy to maintain, bootstrapped with postcss and bundling, tried to implement my own client side routing for native experience and did not work out
- [Sass](https://sass-lang.com/) with [BEM](http://getbem.com/) style naming so I did not have to rely on [scoped style components](https://vue-loader.vuejs.org/guide/scoped-css.html) and can turn it into Javascript-less pages in the future
- [Typescript](https://www.typescriptlang.org/) - easier to test and maintain code, type checking during development and tons of cool stuff I have yet to explore
- [Jest](https://jestjs.io/) - easiest to setup as I am still learning about [TDD](https://en.wikipedia.org/wiki/Test-driven_development), Mocha + Chai had some issues setting up coverage with Vue files
  
## Performance
![Lighthouse Audit Score](https://www.dropbox.com/s/rd96blbe9quqaap/portfolio-audit-v0.1.png?raw=1)
