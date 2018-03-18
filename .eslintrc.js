module.exports = {
  "env": {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  "extends":[ "airbnb-base","plugin:vue/essential"],
  "parserOptions": {
    "parser": "babel-eslint",
    "ecmaVersion": 2017,
    "sourceType": "module"
  },
  "plugins": ["vue",'import'],
  "rules": {
      "indent": ["error",2,{ "SwitchCase": 1 }],
      "comma-dangle":["error","only-multiline"],
      "linebreak-style":[  "error","windows"],
      "quotes": ["error","single"],
      "semi": [  "error",  "always"],
      "max-len": ["error", {"code": 160, "ignoreUrls": true, "ignoreStrings": true }]
  }
}
