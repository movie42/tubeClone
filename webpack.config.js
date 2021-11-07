const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  entry: {
    main: "./assets/js/main.js",
    comments: "./assets/js/comments.js",
    videos: "./assets/js/videos.js",
    editor: "./assets/js/editor.js",
    viewer: "./assets/js/viewer.js"
  },
  mode: "development",
  watch: true,
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/styles.css"
    })
  ],
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "static"),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    browsers: ["last 2 chrome versions"]
                  },
                  debug: true
                }
              ]
            ]
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  }
};
