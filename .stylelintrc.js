module.exports = {
  extends: ["stylelint-config-standard-scss", "stylelint-config-prettier-scss"],
  plugins: ["stylelint-scss"],
  rules: {
    // recommended rules
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "scss/at-mixin-pattern": null,
  },
};
