// import path from 'path';
// import HtmlWebpackPlugin from 'html-webpack-plugin';
// import { CleanWebpackPlugin } from 'clean-webpack-plugin';
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const isDevelopment = process.env.REACT_APP_ENV !== 'production';

// /**
//  * Webpack configuration object.
//  *
//  * @type {Object}
//  * @property {string} entry - The entry point of the application.
//  * @property {Object} output - The output configuration for the bundled files.
//  * @property {string} output.filename - The filename pattern for the bundled files.
//  * @property {string} output.path - The output directory for the bundled files.
//  * @property {string} output.publicPath - The public URL path for the bundled files.
//  * @property {string} mode - The mode of the webpack build (development or production).
//  * @property {string} devtool - The devtool configuration for source mapping.
//  * @property {Object} module - The module configuration for handling different file types.
//  * @property {Array} module.rules - The rules for different file types.
//  * @property {Object} plugins - The plugins used in the webpack build.
//  * @property {Object} optimization - The optimization configuration for the build.
//  * @property {Object} devServer - The configuration for the webpack development server.
//  * @property {Object} resolve - The configuration for resolving module requests.
//  */

// const config = {
//   entry: './src/index.js',
//   output: {
//     filename: isDevelopment ? '[name].bundle.js' : '[name].[contenthash].bundle.min.js',
//     path: path.resolve(__dirname, 'dist'),
//     publicPath: '/',
//   },
//   mode: isDevelopment ? 'development' : 'production',
//   devtool: isDevelopment ? 'eval-source-map' : 'source-map',
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//         },
//       },
//       {
//         test: /\.module\.css$/,
//         use: [
//           'style-loader',
//           {
//             loader: 'css-loader',
//             options: {
//               modules: true,
//             },
//           },
//         ],
//       },
//       {
//         test: /\.css$/,
//         exclude: /\.module\.css$/,
//         use: [
//           'style-loader',
//           'css-loader',
//         ],
//       },
//       {
//         test: /\.(png|jpe?g|gif|svg)$/i,
//         use: [
//           {
//             loader: 'url-loader',
//             options: {
//               limit: 8192,
//               name: 'images/[name].[hash].[ext]',
//             },
//           },
//         ],
//       },
//       {
//         test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
//         use: [
//           {
//             loader: 'file-loader',
//             options: {
//               name: 'fonts/[name].[hash].[ext]',
//             },
//           },
//         ],
//       },
//     ],
//   },
//   plugins: [
//     new CleanWebpackPlugin(),
//     new HtmlWebpackPlugin({
//       template: './public/index.html',
//     }),
//   ],
//   optimization: {
//     splitChunks: {
//       chunks: 'all',
//     },
//     runtimeChunk: 'single',
//   },
//   devServer: {
//     historyApiFallback: true,
//     static: './dist',
//   },
//   resolve: {
//     extensions: ['.js', '.jsx'],
//   },
// };

// export default config;