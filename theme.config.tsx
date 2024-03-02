import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

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
      Sleepless Dev
    </div>
  ),
  project: {
    link: "https://github.com/shuding/nextra-docs-template",
  },
  chat: {
    link: "https://discord.gg/VYV7S9WxTM",
  },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    text: "Sleepless Documentation",
  },
};

export default config;
