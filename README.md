React Component Example
---

```bash
npm run watch # Listen compile .ts files.
npm run build # compile .ts files.

npm run start
```

The components are placed in the `src` directory.

## babel

If `--target=react`, the babel environment(`--env-name=esm:dev`) variable supports development mode.

```json
{
  "scripts": {
    "watch": "tsbb watch --target react --env-name esm:dev"
  }
}
```

Babel configuration example:

```json
{
  "env": {
    "cjs": {
      "plugins": [
        [
          "babel-plugin-transform-remove-imports",
          { "test": "(less|css)$" }
        ]
      ]
    },
    "esm": {
      "plugins": [
        [
          "babel-plugin-transform-rename-import",
          { "original": "^(.+?)\\.less$", "replacement": "$1.css" }
        ]
      ]
    },
    "esm:dev": {
      "presets": [
        [
          "@tsbb/babel-preset-tsbb",
          {
            "modules": false,
            "targets": {
              "browsers": [ "last 2 versions" ]
            },
            "transformRuntime": { "useESModules": true }
          }
        ]
      ]
    }
}
```