const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const paths = require('./config/paths');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

function srcPath(subdir) {
    return path.join(__dirname, "src", subdir);
}

module.exports = {
    devServer: {
        historyApiFallback: true,
    },
    entry: './src/index.tsx',
    mode: 'production',
    module: {
        rules: [
            {
                enforce: 'pre',
                include: paths.appSrc,
                loader: require.resolve('source-map-loader'),
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['react', 'stage-0']
                },
                test: /\.(js|jsx|mjs)$/,
            },
            {
                oneOf: [
                    {
                        include: paths.appSrc,
                        test: /\.(ts|tsx)$/,
                        use: [
                            {
                                loader: require.resolve('ts-loader'),
                                options: {
                                    transpileOnly: true,
                                },
                            },
                        ],
                    },
                    {
                        test: /.(woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
                        use: 'url-loader?limit=1024&name=fonts/[name].[ext]'
                    },
                    {
                        test: /\.(jpg|jpeg|gif|png)$/,
                        use: 'url-loader?limit=10&mimetype=image/(jpg|jpeg|gif|png)&name=images/[name].[ext]'
                    },
                    {
                        include: paths.appSrc,
                        test: /\.(scss|css)$/,
                        use: [{
                            loader: "style-loader" // creates style nodes from JS strings
                        }, {
                            loader: "css-loader" // translates CSS into CommonJS
                        }, {
                            loader: "sass-loader" // compiles Sass to CSS
                        }]
                    },
                    {
                        exclude: [/\.js$/, /\.html$/, /\.json$/],
                        loader: require.resolve('file-loader'),
                        options: {
                            name: 'static/media/[name].[hash:8].[ext]',
                        },
                    },
                ],
            },
        ],
        strictExportPresence: true,
    },
    optimization: {
        minimize: true,
    },
    output: {
        chunkFilename: './static/js/[name].[chunkhash:8].chunk.js',
        filename: './static/js/[name].[chunkhash:8].js',
        path: path.resolve(__dirname, 'build'),
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './public/index.html' })
    ],
    resolve: {
        alias: {
            src: srcPath('src')
        },
        extensions: ['.tsx', '.ts', '.js'],
        plugins: [
            new TsconfigPathsPlugin({ configFile: "./tsconfig.json" }),
        ]
    },
    stats: 'none',
}