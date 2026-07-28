import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import logo from './src/assets/logo-icon.png';

export default defineConfig({
  site: 'https://akcent-docs.pages.dev',

  integrations: [
    starlight({
      title: 'Akcent Docs',

      description:
        'Community-maintained documentation for Restaurant Tycoon 3 Wiki editors.',

      logo: {
        src: logo,
        alt: 'Akcent Docs',
      },

      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/AkcentG/akcent-docs',
        },
      ],

      editLink: {
        baseUrl:
          'https://github.com/AkcentG/akcent-docs/edit/main/',
      },

      customCss: ['./src/styles/custom.css'],

      sidebar: [
        {
          label: '📘 Getting Started',
          collapsed: false,
          items: [
            {
              label: 'Introduction',
              link: '/introduction/',
            },
            {
              label: 'Quick Start',
              link: '/quick-start/',
            },
            {
              label: 'Useful Links',
              link: '/useful-links/',
            },
          ],
        },

        {
          label: '💡 Guides',
          collapsed: false,
          items: [
            {
              label: 'Tips & Tricks',
              link: '/tips/',
            },
            {
              label: 'Questions & Answers',
              link: '/qa/',
            },
          ],
        },

        {
          label: '📚 Resources',
          collapsed: false,
          items: [
            {
              label: 'Reference Library',
              link: '/reference-library/',
            },
            {
              label: 'Credits',
              link: '/credits/',
            },
            {
              label: 'About',
              link: '/about/',
            },
            {
              label: 'Contact',
              link: '/contact/',
            },
            {
              label: 'Disclaimer',
              link: '/disclaimer/',
            },
          ],
        },
      ],
    }),
  ],
});