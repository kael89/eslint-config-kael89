# eslint-config-kael89

## ESLint configuration for JavaScript projects

This the base [ESLint](https://eslint.org/) configuration I use in personal projects, as an installable `npm` package:

✔ Extends the popular [Airbnb Style Guide](https://github.com/airbnb/javascript)

✔ Can be used for both generic JavaScript and React.js projects

✔ Uses [Prettier](https://prettier.io/) for code formatting

### Usage

1. Install the package and its peer dependencies:

```bash
npm install kael89/eslint-config-kael89#v1.1.0 eslint prettier
```

2. Extend from this package in your [ESLint configuration](https://eslint.org/docs/user-guide/configuring). Simplest way is to add an `eslintConfig` stanza in your project's `package.json`:

```json
  "eslintConfig": {
    "extends": "kael89"
  }
```

**Author:** Kostas Karvounis https://codinglicks.com
