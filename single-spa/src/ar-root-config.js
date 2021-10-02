import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: (location) => location.pathname === '/',
});

registerApplication({
  name: "@ar/react-single",
  app: () => System.import("@ar/react-single"),
  activeWhen: (location) => location.pathname === '/react-single',
});

registerApplication({
  name: "@ar/react-multiples",
  app: () => System.import("@ar/react-multiples"),
  activeWhen: ['/react-multiples'],
});

registerApplication({
  name: "@ar/react-lazy",
  app: () => System.import("@ar/react-lazy"),
  activeWhen: ['/react-lazy'],
});

registerApplication({
  name: "@ar/react-route",
  app: () => System.import("@ar/react-route"),
  activeWhen: (location) => location.pathname ===  '/react-route',
});

registerApplication({
  name: "@ar/react-header",
  app: () => System.import("@ar/react-header"),
  activeWhen: ['/'],
});

start({
  urlRerouteOnly: true,
});
