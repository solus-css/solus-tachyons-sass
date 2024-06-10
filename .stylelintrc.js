module.exports = {
  extends: ["stylelint-config-standard-scss"],
  plugin: ["stylelint-prettier"],
  rules: {
    // recommended rules
    "at-rule-no-unknown": null,
    "comment-empty-line-before": null,
    "scss/at-rule-no-unknown": true,
    "scss/at-mixin-pattern": null,
    "at-rule-empty-line-before": [
      "never",
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
  },
};
