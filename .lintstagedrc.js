module.exports = {
  "*.{ts,tsx}": [
    "eslint --fix",
    "prettier --write"
  ],
  "*.{json,md,css,scss}": [
    "prettier --write"
  ],
  "*package.json": "sort-package-json"
};