# eslint-config-kael89

## ESLint configuration for JavaScript projects

This the base [ESLint](https://eslint.org/) configuration I use in personal JavaScript projects, as an installable `npm` package:

✔ Extends the popular [Airbnb Style Guide](https://github.com/airbnb/javascript)

✔ Uses [Prettier](https://prettier.io/) for code formatting

✔ Provides additional linting for [Jest](https://jestjs.io/), [React](https://reactjs.org/)

### Usage

1. Install the package and its minimum required peer dependencies:

```bash
npm install kael89/eslint-config-kael89#v1.1.0 eslint prettier
```

2. Extend this package in your [ESLint configuration](https://eslint.org/docs/user-guide/configuring). The simplest way to do so is adding an `eslintConfig` stanza in your project's `package.json`:

```json
  "eslintConfig": {
    "extends": "kael89"
  }
```

**Author:** Kostas Karvounis https://codinglicks.com
