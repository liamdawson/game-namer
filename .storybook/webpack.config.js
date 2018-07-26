// https://storybook.js.org/configurations/typescript-config/

module.exports = (baseConfig, env, config) => {
    config.module.rules.push({
        test: /\.tsx?$/,
        use: [
            require.resolve("ts-loader"),
            require.resolve("react-docgen-typescript-loader")
        ]
    });
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
};
