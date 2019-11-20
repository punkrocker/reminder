module.exports = {
    entry: __dirname + "/src/renderer.tsx", //唯一入口文件
    output: {
        path: __dirname + "/public", //打包后文件的存放路径
        filename: "bundle.js" //打包后文件的名称
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        modules: ['node_modules']
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)$/,
                loader: "awesome-typescript-loader",
                exclude: /node_modules/,
            },
        ]
    }
}
