import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import logo from './src/assets/logo-icon.png';

export default defineConfig({
  integrations: [
    starlight({
      // ==================================================
      // Site Information
      // ==================================================

      title: 'Akcent Docs',

      description:
        'Community-maintained documentation for Restaurant Tycoon 3 Wiki editors.',

      logo: {
        src: logo,
        alt: 'Akcent Docs',
      },

      // ==================================================
      // Social Links
      // ==================================================

      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/AkcentG/akcent-docs',
        },
      ],

      // ==================================================
      // Edit this page
      // ==================================================

      editLink: {
        baseUrl: 'https://github.com/AkcentG/akcent-docs/edit/main/',
      },

      // ==================================================
      // Custom Styling
      // ==================================================

      customCss: ['./src/styles/custom.css'],

      // ==================================================
      // Sidebar Navigation
      // ==================================================

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
              label: 'Resource Directory',
              link: '/useful-links/',
            },
            {
              label: 'Reference Library',
              link: '/reference-library/',
            },
            {
              label: 'Credits',
              link: '/credits/',
            },
          ],
        },

        {
          label: 'ℹ️ About',
          collapsed: false,
          items: [
            {
              label: 'About Akcent Docs',
              link: '/about/',
            },
            {
              label: 'Contact Me',
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