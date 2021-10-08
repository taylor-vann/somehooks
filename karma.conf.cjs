module.exports = function (config) {
  config.set({
    autoWatch: false,
    basePath: "",
    browsers: ["ChromeHeadless", "FirefoxHeadless"],
    browserDisconnectTimeout: 300000,
    browserNoActivityTimeout: 360000,
    captureTimeout: 420000,
    concurrency: 10,
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
    logLevel: config.LOG_INFO,
    plugins: [
      require.resolve("@open-wc/karma-esm"),
      require.resolve("karma-chrome-launcher"),
      require.resolve("karma-firefox-launcher"),
      require.resolve("karma-jasmine"),
    ],
    reporters: ['progress'],
  });
};
