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
    ['link', { href: '/css/style.css', rel: 'stylesheet'}]
  ]
}