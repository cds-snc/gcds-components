import { dirname, join } from "path";
const config = {
  core: {},
  stories: [
    '../src/**/*.mdx',
    '../stories/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-mdx-gfm"),
    "@storybook/addon-webpack5-compiler-babel",
    "@chromatic-com/storybook"
  ],
  framework: {
    name: getAbsolutePath("@storybook/html-webpack5"),
    options: {},
  },
  staticDirs: [{ from: '../dist/gcds/gcds-map', to: '/dist/gcds/gcds-map' }],
  docs: {
    autodocs: false,
    defaultName: 'Stories'
  },
  webpackFinal: async (config) => {
    // Use ts-loader for .ts and .tsx files
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
          options: {
            transpileOnly: true,
          },
        },
      ],
    });
    /* this is for mapml.js which is imported at run time */
    config.module.rules.push({
      test: /\.(js|ts)$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            plugins: [require.resolve('babel-plugin-transform-import-meta')],
          },
        },
      ],
    });
    
    config.resolve.extensions.push('.ts', '.tsx');


    return config;
  }
};
export default config;

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}
