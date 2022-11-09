// Configuracion inicial
const HtmlWebpackPlugin    = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin           = require("copy-webpack-plugin");
const CssMinimizerPlugin   = require('css-minimizer-webpack-plugin')
const TerserPlugin         = require('terser-webpack-plugin')

module.exports = {
    mode: 'production',

    output: {
        clean: true, // Mantiene el directorio de distribucion (./dist) limpio
        filename: 'main.[contenthash].js' // Crea un hash al archivo para no ser guardado en cache
    },

    module: {
        rules: [
            { // Regla para archivos *.html
                test: /\.html$/, // Busca los archivo *.html
                loader: 'html-loader',
                options: {
                        sources: false //Carga los recursos como imagenes.
                }
            },
            { // Regla para archivos *.css
                test: /\.css$/, // Busca los archivo *.css,
                exclude: /styles.css$/, // Debe ser ignorado porque sera tratado individualmente
                use: [ 'style-loader', 'css-loader' ]
            },
            { // Regla para un archivo en especifico
                test: /styles.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']  
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader'
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            }
        ]
    },

    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin(),
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Mi Webpack app',
            // Por defecto llama al archivo index.html
            // filename: 'index.html'
            // Este es de donde se basa el generador
            template: './src/index.html'
        }),

        new MiniCssExtractPlugin({
            // filename: 'nuevo-estilo.css',
            // filename: '[name].css', // Asi le decimos que use el nombre por defecto
            filename: '[name].[fullhash].css', //Crea un nombre con un hash para que no se mantenga en cache
            ignoreOrder: false
        }), 

        new CopyPlugin({
            patterns: [
              { from: 'src/assets/', to: 'assets/' },
            ],
        }),            
    ],
};

