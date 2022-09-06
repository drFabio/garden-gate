/**
 * Babel is only being used by Jest
 *
 * @todo Figure out how to make it simpler, if we could only use the Next.JS , storybook tooling that would be better
 */

const {
  compilerOptions: { paths },
} = require("./tsconfig.json");

function turnTsConfigPathIntoAlias() {
  return Object.entries(paths).reduce(
    (acc, [key, [value]]) => ({
      ...acc,
      [key.replace("/*", "")]: `./${value.replace("/*", "")}`,
    }),
    {}
  );
}
const alias = turnTsConfigPathIntoAlias();

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
        alias,
      },
    ],
  ],
};
