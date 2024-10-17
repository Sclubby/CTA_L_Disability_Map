const path = require('path');

module.exports = {
    mode: 'development', // or 'production' for production builds
    entry: './wwwroot/js/map.js', // Entry point for your JavaScript
    output: {
        filename: 'bundle.js', // Output file name
        path: path.resolve(__dirname, 'wwwroot/js'), // Output directory
    },
    module: {
        rules: [
            {
                test: /\.m?js$/, // Match JavaScript files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // Use Babel for transpiling
                    options: {
                        presets: ['@babel/preset-env'], // Use the preset for ES6
                    },
                },
            },
        ],
    },
    resolve: {
        fallback: {
            fs: false,
            path: require.resolve('path-browserify'), // Resolving path-browserify
            crypto: require.resolve('crypto-browserify'),
            stream: require.resolve('stream-browserify'),
        },
    },
};
