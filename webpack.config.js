var webpack = require('webpack')
var debug = process.env.NODE_ENV !== 'production'
var path = require('path')

module.exports = {
   entry: [
      './src/index.js'
   ],
   output: {
      path: __dirname,
      publicPath: '/dist/',
      filename: 'bundle.js'
   },
   devtool: 'source-map',
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['react', 'es2015', 'stage-1'],
               plugins: ['react-html-attrs']
            }
         }
      ]
   },
   resolve: {
      modules: [
         path.resolve(__dirname, 'src'),
         path.resolve(__dirname, 'node_modules')
      ],
      extensions: ['*', '.js', '.jsx']
   },
   devServer: {
      historyApiFallback: true,
      contentBase: './'
   },
   plugins: debug ? [] : [
      new webpack.DefinePlugin({'process.env': { NODE_ENV: JSON.stringify('production') }}),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
   ]
}
