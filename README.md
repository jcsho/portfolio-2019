# UX Designer / Developer Portfolio
![Travis (.org)](https://img.shields.io/travis/justinhodev/portfolio.svg)
[![Dependencies](http://img.shields.io/david/justinhodev/portfolio.svg)](https://david-dm.org/justinhodev/portfolio)
[![GitHub release](https://img.shields.io/github/release/justinhodev/portfolio.svg)](https://github.com/justinhodev/portfolio/releases)
[![Coverage Status](https://coveralls.io/repos/github/justinhodev/portfolio/badge.svg?branch=master)](https://coveralls.io/github/justinhodev/portfolio?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/justinhodev/portfolio/badge.svg)](https://snyk.io/test/github/justinhodev/portfolio)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/justinhodev/portfolio/blob/master/LICENSE)

personal portfolio to showcase project work. [see it here](justinho.studio)

## Tech Stack Choices
- [Vue](https://vuejs.org/) - componentizing code, easy to maintain, bootstrapped with postcss and bundling, tried to implement my own client side routing for native experience and did not work out
- [Sass](https://sass-lang.com/) with [BEM](http://getbem.com/) style naming so I did not have to rely on [scoped style components](https://vue-loader.vuejs.org/guide/scoped-css.html) and can turn it into Javascript-less pages in the future
- [Typescript](https://www.typescriptlang.org/) - easier to test and maintain code, type checking during development and tons of cool stuff I have yet to explore
- [Jest](https://jestjs.io/) - easiest to setup as I am still learning about [TDD](https://en.wikipedia.org/wiki/Test-driven_development), Mocha + Chai had some issues setting up coverage with Vue files

## Roadmap
- current release (v0.1) is barebones and has lots to improve, but this isn't meant to be perfect so I wanted to document the first working step
- features to add
  - scroll to top button
  - animtations
  - finish project content
  
## Performance
![Lighthouse Audit Score](https://www.dropbox.com/s/rd96blbe9quqaap/portfolio-audit-v0.1.png?raw=1)

## License
[MIT](https://github.com/justinhodev/portfolio/blob/master/LICENSE)
