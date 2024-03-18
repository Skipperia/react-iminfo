const rules = require('./webpack.rules');

rules.push({
    test: /\.css$/,
    use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

rules.push({
    test: /\.(png|jpe?g|gif)$/i,
    use: [
        {
            loader: 'file-loader',
            options: {
                name: '[path][name].[ext]',
            },
        },
    ],
});


module.exports = {
    module: {
        rules,
    },
};
