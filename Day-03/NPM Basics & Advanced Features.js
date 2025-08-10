//NPM Understanding :-

// NPM (Node Package Manager) is a package manager for JavaScript, primarily used for Node.js applications.
// It allows developers to install, share, and manage dependencies in their projects.
// NPM is the default package manager for Node.js and is included when you install Node.js.
// To use NPM, you typically initialize a project with `npm init`, which creates a package.json file.
// You can then install packages using `npm install <package-name>`, and they will be added to your project.
// NPM also allows you to publish your own packages for others to use.

//Installing & Uninstalling – Basics & Advanced :-
// To install a package, you can use the command `npm install <package-name>`.
// To uninstall a package, you can use the command `npm uninstall <package-name>`.
// To install a package globally, you can use the `-g` flag: `npm install -g <package-name>`.
// To uninstall a global package, use `npm uninstall -g <package-name>`.
// To install a specific version of a package, you can specify the version: `npm install <package-name>@<version>`.
// To update a package, you can use `npm update <package-name>`.
// To see all installed packages, you can run `npm list`.
// To see globally installed packages, you can run `npm list -g --depth=0`.


// Understanding Node modules :-

// Node.js has a built-in module system that allows you to include and use modules in your application.
// You can create your own modules by creating a JavaScript file and exporting functions or variables using `module.exports`.
// To use a module, you can require it using `const moduleName = require('./moduleFileName')`.

// Dependencies vs DevDependencies :-

// In a Node.js project, you can specify dependencies and devDependencies in the package.json file.
// Dependencies are packages required for your application to run in production, while devDependencies are packages needed
// only during development (e.g., testing, build tools).
// To install a package as a dependency, you can use `npm install <package-name>`.
// To install a package as a devDependency, you can use `npm install <package-name> --save-dev`.
// To see the difference, you can check the package.json file after installing packages.


// Scripts - understanding default scripts PATH and custom scripts :-

// NPM allows you to define scripts in the package.json file under the "scripts" section.
// These scripts can be run using `npm run <script-name>`.
// For example, you can define a script to start your application:
// "scripts": { 
//   "start": "node app.js"
// }
// You can also create custom scripts for tasks like testing, building, or deploying your application.
// To run a script, you can use `npm run <script-name>`.
// NPM also provides some default scripts like `npm start`, `npm test`, and `npm run build`.
// You can also use `npm run` to see a list of all available scripts in your project.
// To run a script defined in package.json, you can use `npm run <script-name>`.
// For example, if you have a script defined as "test": "mocha", you can run it with `npm run test`.  
