export default {
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          convertColors: {
            currentColor: true,
          },
          removeViewBox: false,
        },
      },
    },
    {
      name: "removeAttrs",
      params: {
        attrs: ["class"],
      },
    },
    "removeDimensions",
  ],
};
