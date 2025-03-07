import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import icon from "astro-icon";
import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify';
// import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), compress()],
  output: "server",
  adapter: netlify(),
  //adapter: vercel(),
  site: 'https://andreas0r0s.github.io',
  //base: '', # Do not set if: a) page is served from the root folder; or b) repo is located: https://github.com/<USERNAME>/<USERNAME>.github.io
});