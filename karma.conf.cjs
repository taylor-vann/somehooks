module.exports = function (config) {
  config.set({
    autoWatch: false,
    basePath: "",
    browsers: ["ChromeHeadless", "FirefoxHeadless"],
    concurrency: 3,
    esm: {
      nodeResolve: true,
      compatibility: "esm",
      preserveSymlinks: true,
    },
    frameworks: ["esm", "jasmine"],
    files: [
      {
        pattern: "test/**/*.js",
        watched: true,
        type: "module",
      },
    ],
    plugins: [
      require.resolve("@open-wc/karma-esm"),
      require.resolve("karma-chrome-launcher"),
      require.resolve("karma-firefox-launcher"),
      require.resolve("karma-jasmine"),
    ],
    singleRun: true,
  });
};
