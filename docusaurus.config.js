// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'irrifert docs',
  tagline: 'irrifert documentation',
  url: 'https://docs-irrifert.bohr.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'agrimar-irrigacao', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt','en'],
    localeConfigs: {
      pt: {
        htmlLang: 'en-GB',
      },
      // You can omit a locale (e.g. fr) if you don't need to override the defaults
      fa: {
        direction: 'rtl',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/agrimar-irrigacao/docs/edit/main',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/agrimar-irrigacao/docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  ({
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'irrifert',
      logo: {
        alt: 'irrifert logo',
        src: 'img/favicon.png',
        href: 'https://irrifert.bohr.io',
        target: '_parent'
      },
      items: [
        {
          type: 'doc',
          docId: 'start',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'localeDropdown',
          position: 'left',
        },        
      ],
    },
    // footer: {
    //   style: 'dark',
    //   links: [
    //     {
    //       title: 'Docs',
    //       items: [
    //         {
    //           label: 'Tutorial',
    //           to: '/docs/start',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'Community',
    //       items: [
    //         {
    //           label: 'Discord',
    //           href: 'https://discord.com/invite/p3hhfGg2Uy',
    //         },
    //         {
    //           label: 'Twitter',
    //           href: 'https://twitter.com/bohr_io',
    //         },
    //       ],
    //     },
    //   ],
    //   copyright: `Copyright © ${new Date().getFullYear()} Irrifert.`,
    // },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    hotjar: {
      applicationId: '3244310',
    },
  }),

  plugins: [
    'docusaurus-plugin-hotjar',
  ]
};

module.exports = config;
