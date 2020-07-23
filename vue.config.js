const Theme =require('./theme.config')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    configureWebpack: {
        plugins:[
            new CleanWebpackPlugin(), //打包时自动删除dist文件夹
        ]
    },
    css: {
        loaderOptions: {
            less: {
                globalVars: Theme.config
            }
        }
    }
}