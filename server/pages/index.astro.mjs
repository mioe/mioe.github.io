/* empty css                                 */
import { e as createComponent, s as spreadAttributes, u as unescapeHTML, r as renderTemplate, f as createAstro, h as addAttribute, k as renderHead, l as renderSlot, m as maybeRenderHead, n as renderComponent } from '../chunks/astro/server_BddHL4bu.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

function createSvgComponent({ meta, attributes, children }) {
  const Component = createComponent((_, props) => {
    const normalizedProps = normalizeProps(attributes, props);
    return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const background = createSvgComponent({"meta":{"src":"/_astro/background.BPKAcmfN.svg","width":1440,"height":1024,"format":"svg"},"attributes":{"width":"1440","height":"1024","fill":"none"},"children":"<path fill=\"url(#a)\" fill-rule=\"evenodd\" d=\"M-217.58 475.75c91.82-72.02 225.52-29.38 341.2-44.74C240 415.56 372.33 315.14 466.77 384.9c102.9 76.02 44.74 246.76 90.31 366.31 29.83 78.24 90.48 136.14 129.48 210.23 57.92 109.99 169.67 208.23 155.9 331.77-13.52 121.26-103.42 264.33-224.23 281.37-141.96 20.03-232.72-220.96-374.06-196.99-151.7 25.73-172.68 330.24-325.85 315.72-128.6-12.2-110.9-230.73-128.15-358.76-12.16-90.14 65.87-176.25 44.1-264.57-26.42-107.2-167.12-163.46-176.72-273.45-10.15-116.29 33.01-248.75 124.87-320.79Z\" clip-rule=\"evenodd\" style=\"opacity:.154\" /><path fill=\"url(#b)\" fill-rule=\"evenodd\" d=\"M1103.43 115.43c146.42-19.45 275.33-155.84 413.5-103.59 188.09 71.13 409 212.64 407.06 413.88-1.94 201.25-259.28 278.6-414.96 405.96-130 106.35-240.24 294.39-405.6 265.3-163.7-28.8-161.93-274.12-284.34-386.66-134.95-124.06-436-101.46-445.82-284.6-9.68-180.38 247.41-246.3 413.54-316.9 101.01-42.93 207.83 21.06 316.62 6.61Z\" clip-rule=\"evenodd\" style=\"opacity:.154\" /><defs><linearGradient id=\"b\" x1=\"373\" x2=\"1995.44\" y1=\"1100\" y2=\"118.03\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#D83333\" /><stop offset=\"1\" stop-color=\"#F041FF\" /></linearGradient><linearGradient id=\"a\" x1=\"107.37\" x2=\"1130.66\" y1=\"1993.35\" y2=\"1026.31\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#3245FF\" /><stop offset=\"1\" stop-color=\"#BC52EE\" /></linearGradient></defs>"});

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="stylesheet" href="/assets/styles/fonts.css"><title>Misha Gezha</title>${renderHead()}</head> <body class="flex flex-col min-h-[100svh]" data-astro-cid-sckkx6r4> <img id="background"${addAttribute(background.src, "src")} alt="" fetchpriority="high" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/runner/work/dev-mioe-page/dev-mioe-page/src/layouts/Layout.astro", void 0);

const $$Greetings = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<article class="flex flex-col-reverse gap-[24px] items-center md:flex-row md:gap-[42px]"> <div class="flex flex-col gap-[6px]"> <h1 class="text-2xl font-bold">Misha Gezha</h1> <p>Versatile Software Engineer, crafting challenging products with extra attention to detail.</p> <div class="inline-flex gap-[4px] items-center"> <div class="i-mi:carbon-location h-[16px] w-[16px]"></div> <p class="text-xs">Russia, Rostov-on-Don</p> </div> <footer> <a href="/" target="_blank">telegram</a> <a href="/" target="_blank">github</a> </footer> </div> <div> <img class="border-4 border-white rounded-[16px] w-[400px] drop-shadow-lg" src="/assets/images/duckduckduck.webp" alt="duckduckduck" fetchpriority="high"> </div> </article>`;
}, "/home/runner/work/dev-mioe-page/dev-mioe-page/src/components/Greetings.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="mx-auto p-[32px] max-w-[768px] w-full"> ${renderComponent($$result2, "Greetings", $$Greetings, {})} </main> ` })}`;
}, "/home/runner/work/dev-mioe-page/dev-mioe-page/src/pages/index.astro", void 0);

const $$file = "/home/runner/work/dev-mioe-page/dev-mioe-page/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
