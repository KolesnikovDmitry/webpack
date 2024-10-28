module.exports = function () {
    return {
        devServer: {
            static: "./source",
            compress: true,
            port: 9000,
            hot: true,
            liveReload: true,
            client: {
                overlay: {
                    errors: true,
                    warnings: false,
                },
                logging: 'warn',
            },
        },
    }
}