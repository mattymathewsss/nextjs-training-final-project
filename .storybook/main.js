module.exports = {
  stories: ['../components/**/*.stories.mdx', '../components/**/*.stories.@(js|jsx|ts|tsx)', '../pages/**/*.stories.mdx', '../pages/**/*.stories.@(js|jsx|ts|tsx)'],
  /** Expose public folder to storybook as static */
  staticDirs: ['../public'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', 'storybook-css-modules-preset', 'storybook-addon-next-router', {
    /**
     * Fix Storybook issue with PostCSS@8
     * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
     */
    name: '@storybook/addon-postcss',
    options: {
      postcssLoaderOptions: {
        implementation: require('postcss')
      }
    }
  }, '@storybook/addon-mdx-gfm'],
  framework: '@storybook/nextjs',
  core: {
    builder: '@storybook/builder-webpack5'
  },
  docs: {
    autodocs: true
  }
};