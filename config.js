System.config({
  "baseURL": "/",
  "transpiler": "traceur",
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  },
  "buildCSS": false,
  "defaultJSExtensions": true,
  "vulvanizeHTML": {
    "excludes": [
      "jspm_packages/github/Polymer/polymer@1.0.6/polymer.html"
    ]
  }
});

System.config({
  "map": {
    "chai": "npm:chai@3.0.0",
    "marked": "github:chjj/marked@0.3.3",
    "mocha": "npm:mocha@2.2.5",
    "polymer": "github:Polymer/polymer@1.0.6",
    "polymerjs": "test/polymer/polymer",
    "traceur": "github:jmcriffey/bower-traceur@0.0.88",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.88",
    "webcomponents": "github:webcomponents/webcomponentsjs@0.7.12",
    "webcomponentsjs": "github:webcomponents/webcomponentsjs@0.7.6",
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.3.1"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:buffer@3.3.1": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.6",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:chai@3.0.0": {
      "assertion-error": "npm:assertion-error@1.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "deep-eql": "npm:deep-eql@0.1.3",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "type-detect": "npm:type-detect@1.0.0"
    },
    "npm:deep-eql@0.1.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "type-detect": "npm:type-detect@0.1.1"
    },
    "npm:mocha@2.2.5": {
      "css": "github:systemjs/plugin-css@0.1.13"
    }
  }
});

