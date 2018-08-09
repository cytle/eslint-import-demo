# eslint-import-demo

This project is just to illustrate an [issue](https://github.com/benmosher/eslint-plugin-import/issues/1158) of `eslint-import-resolver-webpack`.

When the path is not an absolute path, `eslint-import-resolver-webpack` will use packageDir to join configPath. As shown in the following code.

```js
// https://github.com/benmosher/eslint-plugin-import/blob/master/resolvers/webpack/index.js#L342-L344
if (!path.isAbsolute(configPath)) {
  configPath = path.join(packageDir, configPath)
}
```

If there is a project with the following structure, an exception will be thrown when I execute the following command.

```txt
.
├── README.md
├── package.json
├── src
│   └── storage
│       ├── index.js
│       └── package.json
├── utils
│   └── a.js
├── .eslintrc.js
└── webpack.config.js
```

```bash
npx eslint src/storage/index.js
```

```txt
Error resolving webpackConfig { Error: Cannot find module '/Users/xsp/src/js/eslint-import-demo/src/storage/webpack.config.js'
    at Function.Module._resolveFilename (module.js:547:15)
    at Function.Module._load (module.js:474:25)
    at Module.require (module.js:596:17)
    at require (internal/module.js:11:18)
    at Object.exports.resolve (/Users/xsp/src/js/eslint-import-demo/node_modules/eslint-import-resolver-webpack/index.js:69:27)
    at v2 (/Users/xsp/src/js/eslint-import-demo/node_modules/eslint-module-utils/resolve.js:94:23)
    at withResolver (/Users/xsp/src/js/eslint-import-demo/node_modules/eslint-module-utils/resolve.js:99:16)
    at fullResolve (/Users/xsp/src/js/eslint-import-demo/node_modules/eslint-module-utils/resolve.js:116:22)
    at relative (/Users/xsp/src/js/eslint-import-demo/node_modules/eslint-module-utils/resolve.js:61:10)
    at resolve (/Users/xsp/src/js/eslint-import-demo/node_modules/eslint-module-utils/resolve.js:180:12) code: 'MODULE_NOT_FOUND' }
```
