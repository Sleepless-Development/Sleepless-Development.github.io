import React from 'react';
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';

function useHead() {
  const { asPath } = useRouter();
  const { frontMatter, title } = useConfig();
  const url = `https://sleepless-development.github.io/${asPath}`;
  const description = frontMatter.description || "Documentation for Sleepless resources for FiveM";

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href="/static/ox.ico" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:url" content={url} />
    </>
  );
}

function useNextSeoProps() {
  const { asPath } = useRouter();
  const arr = asPath.replace(/[-_]/g, ' ').split('/');
  const category = (arr[1][0] !== '#' && arr[1]) || 'Sleepless';
  const rawTitle = arr[arr.length - 1];
  const title = /[a-z]/.test(rawTitle) && /[A-Z]/.test(rawTitle) ? rawTitle : '%s';

  return {
    titleTemplate: `${title} - ${
      rawTitle === category ? 'Documentation' : category.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())
    }`,
  };
}

const config: DocsThemeConfig = {
  logo: (
    <div
      style={{
        paddingLeft: '65px',
        lineHeight: '38px',
        background: "url('https://i.imgur.com/ZIFuQi2.png') no-repeat left",
        backgroundSize: '65px',
        fontWeight: 550,
      }}
    >
      Sleepless
    </div>
  ),
  project: {
    link: 'https://github.com/Sleepless-Development/Sleepless-Development.github.io/',
  },
  chat: {
    link: 'https://discord.gg/aUczAF8gd2',
  },
  docsRepositoryBase: 'https://github.com/Sleepless-Development/Sleepless-Development.github.io/blob/main',
  footer: {
    text: 'Sleepless',
  },
  // search: {
  //   component: <Search />,
  // },
  head: useHead,
  primaryHue: { dark: 200, light: 200 },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },

  useNextSeoProps: useNextSeoProps,
};

export default config;