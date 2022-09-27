import { defineConfig } from "cypress";

const config = defineConfig({
  includeShadowDom: true,

  component: {
    devServer: {
      bundler: "vite",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

export default config;
