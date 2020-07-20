const Theme =require('./theme.config')
module.exports = {
    css: {
        loaderOptions: {
            less: {
                globalVars: Theme.config
            }
        }
    }
}