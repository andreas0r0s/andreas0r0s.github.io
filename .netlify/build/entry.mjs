import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BnmFyo73.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_B-fbfR9S.mjs');
const _page1 = () => import('./chunks/about_B-bN5sXM.mjs');
const _page2 = () => import('./chunks/home-mmouzo_B43VVzvo.mjs');
const _page3 = () => import('./chunks/backend2022_D0KqdU0s.mjs');
const _page4 = () => import('./chunks/email_C8S2Llum.mjs');
const _page5 = () => import('./chunks/github_BISyZOqH.mjs');
const _page6 = () => import('./chunks/linkedin_DbfMQfHs.mjs');
const _page7 = () => import('./chunks/telegram_Vk7OTGYN.mjs');
const _page8 = () => import('./chunks/spotfilm_DWTmsUwU.mjs');
const _page9 = () => import('./chunks/studie1_DbFktee9.mjs');
const _page10 = () => import('./chunks/studie2_BbhRBSJQ.mjs');
const _page11 = () => import('./chunks/work1_BWgPrUc4.mjs');
const _page12 = () => import('./chunks/work2_DQZWi6Rp.mjs');
const _page13 = () => import('./chunks/index_Cu9Pmcnu.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about/about.md", _page1],
    ["src/pages/blogs/home-mmouzo.md", _page2],
    ["src/pages/certificates/backend2022.md", _page3],
    ["src/pages/contact/email.md", _page4],
    ["src/pages/contact/github.md", _page5],
    ["src/pages/contact/linkedin.md", _page6],
    ["src/pages/contact/telegram.md", _page7],
    ["src/pages/projects/spotfilm.md", _page8],
    ["src/pages/studies/studie1.md", _page9],
    ["src/pages/studies/studie2.md", _page10],
    ["src/pages/works/work1.md", _page11],
    ["src/pages/works/work2.md", _page12],
    ["src/pages/index.astro", _page13]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "16215f02-c286-4966-8c62-8c10ba747ffb"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
