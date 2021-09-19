require("ignore-styles");
require("@babel/register")({
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    ["@babel/preset-react", { targets: { node: "current" } }],
  ],
  plugins: [
    "@babel/plugin-syntax-jsx",
    [
      "transform-assets",
      {
        extensions: ["css", "svg", "png", "jpg"],
        name: "static/media/[name].[hash:8].[ext]",
      },
    ],
  ],
});

require("./index");
