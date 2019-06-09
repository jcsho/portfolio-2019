module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': '../src'
      }
    }
  },
  title: 'Design - Justin Ho',
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
      '/usage'
    ]
  }
}