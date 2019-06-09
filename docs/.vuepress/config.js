module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': '../src'
      }
    }
  },
  title: 'Teal Design',
  description: 'Personal Playground and Design System',
  head: [
    ['link', {rel: 'icon', href: '/favicon.ico'}]
  ],
  themeConfig: {
    repo: 'justinhodev/portfolio',
    repoLabel: 'Github',
    docsDir: 'docs',
    sidebar: [
      '/',
      {
        title: 'styles',
        children: [
          '/styles/colors',
          '/styles/typography',
        ]
      },
      {
        title: 'components',
        children: [
          '/components/button',
          '/components/card'
        ]
      }
    ]
  }
}