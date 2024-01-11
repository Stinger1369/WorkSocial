module.exports = {
  env: {
    node: true, // Spécifie l'environnement Node.js
    es6: true, // Active la prise en charge d'ES6
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended", // Si vous utilisez Prettier
  ],
  parserOptions: {
    ecmaVersion: 2018, // ou une version plus récente selon vos besoins
    sourceType: "module", // Si vous utilisez des modules ES6
  },
  rules: {
    // Placez ici vos règles personnalisées
    "no-console": "off",
    "no-restricted-syntax": [
      "error",
      {
        selector:
          "CallExpression[callee.object.name='console'][callee.property.name!=/^(error|warn|info)$/]",
        message:
          "You can only call the error(), warn() and info() methods from the console object",
      },
    ],
    "no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: false,
        varsIgnorePattern: "upload",
        argsIgnorePattern: "result",
      },
    ],
  },
};
