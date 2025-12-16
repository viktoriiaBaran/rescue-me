module.exports = {
  "*/**/*.{js,jsx}": [
    "prettier --write",
    "eslint --fix",
    "eslint",
  ],
  "*/**/*.{ts,tsx}" : [
    "prettier --write",
    "eslint --fix",
    "eslint",
    // "tsc"
  ],
  "*/**/*.{json,css,md}": [
    "prettier --write"
  ]
}
