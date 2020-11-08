module.exports = {
  publicPath: "./",
  devServer: {
    proxy: {
      "/api": {
        target: "http://xxxx/device/", // 对应自己的接口
        changeOrigin: true, //跨域开启
        ws: true, //websocket开启
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
