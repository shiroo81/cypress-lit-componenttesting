import {defineConfig} from 'cypress';

const config = defineConfig({
  includeShadowDom: true,
  component: {
    devServer: {
      bundler: 'vite'
    },
  }
});

export default config;
