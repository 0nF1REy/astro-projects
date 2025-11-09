module.exports = {
  customSyntax: "postcss-html",
  extends: ["stylelint-config-standard"],
  plugins: ["stylelint-order"],
  rules: {
    "selector-class-pattern":
      "^[a-z0-9]+([a-z0-9]*(__[a-z0-9]+)?(-[a-z0-9]+)*)?$",
    "at-rule-no-unknown": [
      true,
      { ignoreAtRules: ["media", "supports", "keyframes", "layer"] },
    ],
    "order/properties-order": [],
  },
};
