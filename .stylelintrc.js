module.exports = {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-rational-order",
    "stylelint-prettier/recommended",
  ],
  plugin: ["stylelint-order", "stylelint-config-rational-order/plugin"],
  rules: {
    // recommended rules
    "comment-empty-line-before": null,
    "scss/dollar-variable-empty-line-before": ["never", { ignore: ["after-comment", "inside-single-line-block", "after-dollar-variable"] }],
    "scss/at-rule-no-unknown": true,
    "scss/at-mixin-pattern": null,
    "at-rule-empty-line-before": [
      "always",
      {
        ignore: ["after-comment", "first-nested"],
        except: [
          "after-same-name",
          "blockless-after-blockless",
          "blockless-after-same-name-blockless",
          "inside-block",
        ],
      },
    ],
    "order/properties-order": [],
    "plugin/rational-order": [
      true,
      {
        "border-in-box-model": false,
        "empty-line-between-groups": false,
      },
    ],
  },
};
