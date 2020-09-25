import path from 'path';
import webpack from 'webpack';
import { OptionConf, Webpack, ModuleScopePluginOpts, LoaderOneOf } from 'kkt';
import WorkboxWebpackPlugin from 'workbox-webpack-plugin';

export const moduleScopePluginOpts: ModuleScopePluginOpts = [
  path.resolve(process.cwd(), 'README.md'),
  path.resolve(process.cwd(), 'src'),
  path.resolve(process.cwd(), 'src/APILoader/README.md'),
  path.resolve(process.cwd(), 'src/Circle/README.md'),
  path.resolve(process.cwd(), 'src/Control/README.md'),
  path.resolve(process.cwd(), 'src/CopyrightControl/README.md'),
  path.resolve(process.cwd(), 'src/GeolocationControl/README.md'),
  path.resolve(process.cwd(), 'src/OverviewMapControl/README.md'),
  path.resolve(process.cwd(), 'src/ScaleControl/README.md'),
  path.resolve(process.cwd(), 'src/MapTypeControl/README.md'),
  path.resolve(process.cwd(), 'src/PanoramaControl/README.md'),
  path.resolve(process.cwd(), 'src/CanvasLayer/README.md'),
  path.resolve(process.cwd(), 'src/GroundOverlay/README.md'),
  path.resolve(process.cwd(), 'src/CustomOverlay/README.md'),
  path.resolve(process.cwd(), 'src/InfoWindow/README.md'),
  path.resolve(process.cwd(), 'src/Label/README.md'),
  path.resolve(process.cwd(), 'src/Map/README.md'),
  path.resolve(process.cwd(), 'src/Marker/README.md'),
  path.resolve(process.cwd(), 'src/NavigationControl/README.md'),
  path.resolve(process.cwd(), 'src/PointCollection/README.md'),
  path.resolve(process.cwd(), 'src/Polyline/README.md'),
  path.resolve(process.cwd(), 'src/TileLayer/README.md'),
  path.resolve(process.cwd(), 'src/CurveLine/README.md'),
  path.resolve(process.cwd(), 'src/DrawingManager/README.md'),
  path.resolve(process.cwd(), 'src/Polygon/README.md'),
  path.resolve(process.cwd(), 'src/withMap/README.md'),
];

export const loaderOneOf: LoaderOneOf = [
  [require.resolve('@kkt/loader-less'), {}],
]

export default (conf: webpack.Configuration, opts: OptionConf, webpack: Webpack) => {
  const pkg = require(path.resolve(process.cwd(), 'package.json'));
  conf.module!.rules.map((item) => {
    if (item.oneOf) {
      item.oneOf.unshift({
        test: /\.md$/,
        use: require.resolve('raw-loader'),
      });
    }
    return item;
  });
  // 获取版本
  conf.plugins!.push(
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(pkg.version),
    })
  );

  /**
   * Fix `.chunk.js is 5.38 MB, and won't be precached. Configure maximumFileSizeToCacheInBytes to change this limit.`
   */
  if (conf.plugins) {
    conf.plugins = conf.plugins.map((item) => {
      if (item.constructor && item.constructor.name && /(GenerateSW)/.test(item.constructor.name)) {
        return null;
      }
      return item;
    }).filter(Boolean) as webpack.Plugin[];
    // Generate a service worker script that will precache, and keep up to date,
    // the HTML & assets that are part of the Webpack build.
    if (opts.isEnvProduction) {
      conf.plugins.push(new WorkboxWebpackPlugin.GenerateSW({
        maximumFileSizeToCacheInBytes: 1024 * 1024 * 8,
        clientsClaim: true,
        exclude: [/\.map$/, /asset-manifest\.json$/],
        navigateFallback: opts.publicUrlOrPath + '/index.html',
        navigateFallbackDenylist: [
          // Exclude URLs starting with /_, as they're likely an API call
          new RegExp('^/_'),
          // Exclude any URLs whose last part seems to be a file extension
          // as they're likely a resource and not a SPA route.
          // URLs containing a "?" character won't be blacklisted as they're likely
          // a route with query params (e.g. auth callbacks).
          new RegExp('/[^/?]+\\.[^/]+$'),
        ],
      }))
    }
  }

  return conf;
}
