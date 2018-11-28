const {injectBabelPlugin, getBabelLoader} = require('react-app-rewired');
const path = require('path');
module.exports = function override(config, env) {
    config = injectBabelPlugin([
        'import', {
            libraryName: 'antd-mobile',
            style: 'css'
        }
    ], config);
    const babelLoader = getBabelLoader(config.module.rules);
    console.log(babelLoader)
    const pwd = path.resolve();
    babelLoader.include = [path.normalize(`${pwd}/src`)];
    // use babelrc
    babelLoader.options.babelrc = true;
    return config;
};