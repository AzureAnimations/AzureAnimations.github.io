import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Azure Animations',
  tagline: 'Learn Azure through engaging animations - Created with love by Microsoft Technical Trainers & MCTs',
  favicon: 'img/favicon.png',

  future: {
    v4: true,
  },

  // GitHub Pages deployment config
  url: 'https://azureanimations.github.io',
  baseUrl: '/',
  organizationName: 'AzureAnimations',
  projectName: 'AzureAnimations.github.io',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',

  // Exclude /player/ paths from client-side routing so query params work
  onBrokenAnchors: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Static directories - this makes /player/animationPlayer.html work
  staticDirectories: ['static'],

  // Analytics scripts
  scripts: [
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-CB5VEZ8S8R',
      async: true,
    },
  ],

  headTags: [
    // Bing Webmaster verification
    {
      tagName: 'meta',
      attributes: {
        name: 'msvalidate.01',
        content: '0679F396F116FF5B2E409C3394B0F109',
      },
    },
    // Microsoft Clarity
    {
      tagName: 'script',
      attributes: {
        type: 'text/javascript',
      },
      innerHTML: `
        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "oraz20d8ch");
      `,
    },
    // Google Analytics
    {
      tagName: 'script',
      attributes: {
        type: 'text/javascript',
      },
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-CB5VEZ8S8R');
      `,
    },
  ],

  plugins: [
    function excludePlayerFromRouting() {
      return {
        name: 'exclude-player-plugin',
        configureWebpack(config, isServer) {
          if (!isServer) {
            return {
              devServer: {
                ...config.devServer,
                historyApiFallback: {
                  disableDotRule: true,
                  rewrites: [
                    { from: /^\/player\//, to: (context: { parsedUrl: { href: string } }) => context.parsedUrl.href },
                  ],
                },
              },
            };
          }
          return {};
        },
      };
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/AzureAnimations/AzureAnimations.github.io/tree/main/',
          routeBasePath: '/', // Docs at root
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        docsRouteBasePath: '/',
      },
    ],
  ],

  themeConfig: {
    image: 'img/AzureAnimations-Logo.svg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Azure Animations',
      logo: {
        alt: 'Azure Animations Logo',
        src: 'img/AzureAnimations-Logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'animationsSidebar',
          position: 'left',
          label: 'Created with ❤️ by Microsoft Technical Trainers & MCTs',
        },
        {
          href: 'https://github.com/AzureAnimations/AzureAnimations.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Categories',
          items: [
            { label: 'Copilot', to: '/copilot/intro' },
            { label: 'AI', to: '/ai/intro' },
            { label: 'Storage', to: '/storage/intro' },
            { label: 'Security', to: '/security/intro' },
          ],
        },
        {
          title: 'More Categories',
          items: [
            { label: 'Compute', to: '/compute/intro' },
            { label: 'Infrastructure', to: '/infra/intro' },
            { label: 'Basics', to: '/basics/intro' },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/AzureAnimations/AzureAnimations.github.io',
            },
            {
              label: 'Contribute',
              href: 'https://github.com/AzureAnimations/AzureAnimations.github.io/pulls',
            },
          ],
        },
      ],
      copyright: 'Created with love by Microsoft Technical Trainers & MCTs | Built with Docusaurus',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'csharp', 'python'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
