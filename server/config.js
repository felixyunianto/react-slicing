require("ignore-styles");
require("@babel/register")({
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    [
      "transform-assets",
      {
        extensions: ["css", "svg", 'png', "jpg"],
        name: "static/media/[name].[hash:8].[ext]",
      },
    ],
  ],
  
});

require('./index');