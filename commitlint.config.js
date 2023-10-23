module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "chore",
        "feat",
        "fix",
        "change",
        "docs",
        "refactor",
        "test",
        "build",
        "ci",
        "revert",
      ],
    ],
  },
};
