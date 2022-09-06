/**
 * Babel is only being used by Jest
 *
 * @todo Figure out how to make it simpler, if we could only use the Next.JS , storybook tooling that would be better
 */
module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@components": "./ui-components",
          "@stories": "./stories",
        },
      },
    ],
  ],
};
