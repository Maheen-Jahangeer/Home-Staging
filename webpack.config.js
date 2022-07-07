const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'development',
    entry:{
        bundle:path.resolve(__dirname, 'src/index.js')},
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename:'[name].js',
        //for avoid renaming images
        assetModuleFilename: '[name][ext]'
    },
    devServer:{
        static:{
            directory: path.resolve(__dirname, 'dist')
        },
        port:3000,
        open:true,
        hot:true,
        compress:true,
        historyApiFallback:true
    },
    module:{
        rules:[
            {
                test:/\.scss$/,
                use:['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            },
            {
                test:/\.ts$/,
                use:'ts-loader',
                exclude:/node_modules/
            },
            {
                test:/\.(png|svg|jpg|jpeg|gif)$/i,
                type:'asset/resource'
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            filename:'index.html',
            title:'Home Stagin'
        })
    ]
}