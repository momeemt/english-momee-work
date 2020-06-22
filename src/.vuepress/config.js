module.exports = {
  title: 'Momeemt Blog',
  description: 'momeemt\'s technology blog',
  locales: {
    '/': {
      lang: 'en-US',
    },
  },
  theme: 'meteorlxy',
  themeConfig: {
    lang: 'en-US',
    personalInfo: {
      nickname: 'Momiyama',
      description: 'Rapid progress',
      email: 'momiimt@gmail.com',
      location: 'Tokyo, Japan',
      organization: 'Oshukan Secondary School',
      avatar: 'https://pbs.twimg.com/profile_images/1127473315944132608/nRUcPCRj_400x400.jpg',
      sns: {
        github: {
          account: 'momeemt',
          link: 'https://github.com/momeemt',
        },
        twitter: {
          account: 'momeemt',
          link: 'https://twitter.com/momeemt',
        },
        instagram: {
          account: 'momeemt',
          link: 'https://www.instagram.com/momeemt',
        }
      },
    },
    header: {
      background: {
        url: 'https://assets.st-note.com/production/uploads/images/17453940/e903703e20ba647b3af25d868e6d5a9b.jpg?crop=1.6%3A0.27&quality=60',
        useGeo: true,
      },
      showTitle: false,
    },

    lastUpdated: true,
    nav: [
      { text: 'Home', link: '/', exact: true },
      { text: 'Posts', link: '/posts/', exact: false },
    ],

    // Comments config. See the [Posts Comments] section below.
    // comments: {
    //   owner: 'meteorlxy',
    //   repo: 'vuepress-theme-meteorlxy',
    //   clientId: 'MY_CLIENT_ID',
    //   clientSecret: 'MY_CLIENT_SECRET',
    // },

    // Pagination config
    pagination: {
      perPage: 20,
    },

    // Default Pages (Optional, the default value of all pages is `true`)
    defaultPages: {
      // Allow theme to add Home page (url: /)
      home: true,
      // Allow theme to add Posts page (url: /posts/)
      posts: true,
    },
  },
  head: [
    ['link', { href: '/css/style.css', rel: 'stylesheet'}],
    ['link', { rel: 'icon', type: 'image/png', href: '/img/favicon.ico' }]
  ],
  plugins: {
    'seo': { 
      siteTitle: (_, $site) => $site.title,
      title: $page => $page.title,
      description: $page => $page.frontmatter.description,
      author: (_, $site) => $site.themeConfig.author,
      tags: $page => $page.frontmatter.tags,
      twitterCard: _ => 'summary',
      type: $page => ['articles', 'posts', 'blog'].some(folder => $page.regularPath.startsWith('/' + folder)) ? 'article' : 'website',
      url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
      // image: ($page, $site) => $page.frontmatter.image && (($site.themeConfig.domain && !$page.frontmatter.image.startsWith('http') || '') + $page.frontmatter.image),
      image: _ => 'https://pbs.twimg.com/profile_images/1127473315944132608/nRUcPCRj_400x400.jpg',
      publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
      modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
      customMeta: (add, context) => {
        const {
            $site, // Site configs provided by Vuepress
            $page, // Page configs provided by Vuepress

            // All the computed options from above:
            siteTitle, title, description, author, tags,
            twitterCard, type, url, image, publishedAt, modifiedAt,
        } = context

        add('twitter:site', 'momeemt')
    },
    }
  }
}