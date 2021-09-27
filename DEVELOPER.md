# Developer Doc

This is a guide to the various scripts and functionality that can be used to compile and build out the plugin.

## Gutenburg Blocks

Located in the `blocks` folder

### NPM Commands/Tasks

```
"test": "echo \"You have Strava watts\" && exit 1",
"build": "wp-scripts build blocks/index.js",
"format:js:src": "wp-scripts format-js",
"lint:js:src": "wp-scripts lint-js",
"packages-update": "wp-scripts packages-update",
"start": "wp-scripts start blocks/index.js"
```

## Plugin

This is for the plugin in general. Everything is a Gulp command.

### Styles

Compile SASS `gulp sass`

Minify CSS `gulp mincss`

CSS linting with Stylelint `gulp lintcss`

### Scripts

Minify JS `gulp scripts`

JS linting with JSHint `gulp lintjs`

Make JS pretty `gulp beautifyjs`

### PHP

PHP Code Sniffer `gulp phpcs`

PHP Code Beautifier `gulp phpcbf`

### Other

Create plugin ZIP file for distribution `gulp zip`
