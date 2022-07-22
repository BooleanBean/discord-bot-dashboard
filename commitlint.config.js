module.exports = {
   extends: ["@commitlint/config-conventional"],
   rules: {
      // TODO: add scope enum
      // 'scope-enum': [2, 'always', ['scope', 'scope']],
      "type-enum": [
         2,
         "always",
         [
            "feat",
            "fix",
            "docs",
            "chore",
            "style",
            "refactor",
            "ci",
            "test",
            "perf",
            "revert",
            "vercel",
         ],
      ],
   },
};
