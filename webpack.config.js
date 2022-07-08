const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const miniCssExtractPlugin = require('mini-css-extract-plugin');

const cssLoader = {
    test: /\.css$/,
    use: [{
        loader:miniCssExtractPlugin.loader
    },
        {
            loader: "typings-for-css-modules-loader",
            options: {
                importLoaders: 1,
                modules: true,
                namedExport: true,
                camelCase: true,
                localIdentName: "prechex-ui-components-" + "[local]"
            }
        }
    ]
};


module.exports = {
    mode:'development',
    resolve:{
        extensions:['.tsx', '.ts', '.js']
    },
    entry:{
        bundle:path.resolve(__dirname, './public/index.tsx')},
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
                test:/\.s[ac]ss$/i,
                use:[ {
                    loader:miniCssExtractPlugin.loader
                },{
                    loader: "typings-for-css-modules-loader",
                    options: {
                        importLoaders: 1,
                        modules: true,
                        namedExport: true,
                        camelCase: true,
                        sass: true,
                        localIdentName: '[local]'
                    }
                },
                { loader: "sass-loader" }
            ]},
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
                test:/\.(ts|tsx)$/,
                enforce: 'pre',
                use:'ts-loader',
                exclude:/node_modules/
            },
            {
                test:/\.(png|svg|jpg|jpeg|gif)$/i,
                type:'asset/resource'
            },
            cssLoader
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            filename:'index.html',
            title:'Home Stagin',
            template:path.resolve(__dirname, 'public/index.html')
        }),
        new miniCssExtractPlugin ({
            filename:"[name].css"
        })
        // new ReactRefreshWebpackPlugin
    ]
}