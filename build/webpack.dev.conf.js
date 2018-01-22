'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const express = require('express')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

//添加mock数据

const app = express()
var apiRouter = express.Router();
var goodsData = require('./../mock/goods.json');
apiRouter.get('/goods', function (req, res, next) {
  // console.log(goodsData);
  res.json(goodsData);
});
app.use(router);

apiRouter.get('/',function(req,res){
  res.send('hello world')
})

app.listen(config.dev.port + 1,function () {
  console.log('Ready')
})

// express
// var apiServer = express()
// var bodyParser = require('body-parser')
// apiServer.use(bodyParser.urlencoded({ extended: true }))
// apiServer.use(bodyParser.json())
// var apiRouter = express.Router()
// var fs = require('fs')
// apiRouter.route('/:apiName')
// .all(function (req, res) {
//   fs.readFile('./../mock/goods.json', 'utf8', function (err, data) {
//     if (err) throw err
//     var data = JSON.parse(data)
//     if (data[req.params.apiName]) {
//       res.json(data[req.params.apiName])
//     } else {
//       res.send('no such api name')
//     }
//   })
// })
//
// apiServer.use('/goods', apiRouter);
// apiServer.listen(config.dev.port + 1, function (err) {
//   if (err) {
//     console.log(err)
//     return
//   }
//   console.log('Listening at http://localhost:' + (config.dev.port + 1) + '\n')
// })
// express

// jsonServer
// const jsonServer = require('json-server')
// const apiServer = jsonServer.create()
// const apiRouter = jsonServer.router('/goods.json')
// const middlewares = jsonServer.defaults()
//
// // Set default middlewares (logger, static, cors and no-cache)
// apiServer.use(middlewares)
// apiServer.use('/goods', apiRouter)
// apiServer.use(apiRouter)
//
// apiServer.listen(config.dev.port + 1, () => {
//   console.log('JSON apiServer is running')
// })
// jsonServer

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)


const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({sourceMap: config.dev.cssSourceMap, usePostCSS: true})
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index1.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        {from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html')},
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? {warnings: false, errors: true}
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    }
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
          ? utils.createNotifierCallback()
          : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
