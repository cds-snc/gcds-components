const config = {
  core: {
    builder: 'webpack5',
  },
  stories: [
    '../src/**/*.mdx',
    '../stories/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/html-webpack5',
    options: {},
  },
  docs: {
    autodocs: false,
    defaultName: 'Stories'
  },
};

export default config;