module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: "> 0.2%, last 2 versions, not dead", // You can specify the valid query here.
      },
    ],
  ],
}
