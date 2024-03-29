import { LoaderConfOptions, WebpackConfiguration } from 'kkt';

export default (conf: WebpackConfiguration, env: 'production' | 'development', options: LoaderConfOptions) => {
  if (options.bundle) {
    conf.output!.library = '@uiw/react-baidu-map';
    conf.externals = {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      },
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom',
      },
    };
  }
  return conf;
};
