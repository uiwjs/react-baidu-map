import webpack, { Configuration } from 'webpack';
import { LoaderConfOptions } from 'kkt';
import lessModules from '@kkt/less-modules';
import { disableScopePlugin } from '@kkt/scope-plugin-options';
import { mdCodeModulesLoader } from 'markdown-react-code-preview-loader';
import pkg from './package.json';

export default (conf: Configuration, env: 'production' | 'development', options: LoaderConfOptions) => {
  conf = lessModules(conf, env, options);
  conf = mdCodeModulesLoader(conf);
  conf = disableScopePlugin(conf);
  // Get the project version.
  conf.plugins!.push(
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(pkg.version),
    }),
  );
  conf.module!.exprContextCritical = false;
  conf.ignoreWarnings = [{ module: /node_modules[\\/]parse5[\\/]/ }];

  if (env === 'production') {
    conf.output = { ...conf.output, publicPath: './' };
    conf.optimization = {
      ...conf.optimization,
      splitChunks: {
        cacheGroups: {
          reactvendor: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: 'react-vendor',
            chunks: 'all',
          },
          babelstandalone: {
            test: /[\\/]node_modules[\\/](@babel[\\/]standalone)[\\/]/,
            name: 'babel-standalone-vendor',
            chunks: 'all',
          },
          prismjs: {
            test: /[\\/]node_modules[\\/](refractor)[\\/]/,
            name: 'refractor-vendor',
            chunks: 'all',
          },
          codemirror: {
            test: /[\\/]node_modules[\\/](@codemirror)[\\/]/,
            name: 'codemirror-vendor',
            chunks: 'all',
          },
          uiw: {
            test: /[\\/]node_modules[\\/](@uiw)[\\/]/,
            name: 'uiw-vendor',
            chunks: 'all',
          },
          parse5: {
            test: /[\\/]node_modules[\\/](parse5)[\\/]/,
            name: 'parse5-vendor',
            chunks: 'all',
          },
        },
      },
    };
  }
  return conf;
};
