module.exports = {
    context: __dirname + "/",
    entry: {
        tests: "./src/tests.js",
        index: ["./src/index.js"]
    },
    output: {
        path: __dirname,
        filename: "[name].js"
    },
    module:{loaders: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
                plugins: ['transform-object-rest-spread'],
                presets:['es2015']
            }
        }
    ]}
};
