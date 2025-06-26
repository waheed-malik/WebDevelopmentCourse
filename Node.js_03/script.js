 // NPM understanding
  // npm-> node- package manager 
    

 // installing and uninstalling anything basics & advanced
 // understanding node_modules
// dependencies =>packages and packages ki dependencies

// devdependencies=> aise package jo sirf devevlopemnt kai time kaam ayn gy

// scripts - understanding default scripts PATH and custom scripts
// Sure Waheed! Here's the **theory-only content in English** for your topic:
// **"NPM Understanding – Basics to Advanced"**

// ---




// ## 📦 NPM (Node Package Manager) – Theory

// ### ✅ What is NPM?

// * NPM stands for **Node Package Manager**.
// * It is the **default package manager for Node.js**.
// * It helps developers to **install, update, remove, and manage** packages (libraries, tools, frameworks).
// * Comes pre-installed with Node.js.

// ---

// ### ✅ Installing Packages

// #### 📌 Basic Installation (Local):

// ```bash
// npm install package-name
// ```

// * Installs the package **locally** into the `node_modules` folder.
// * The package is added to `dependencies` in `package.json`.

// #### 📌 Global Installation:

// ```bash
// npm install -g package-name
// ```

// * Installs the package **globally**, available for use in any project.
// * Common for tools like `nodemon`, `create-react-app`, etc.

// #### 📌 Dev Dependencies:

// ```bash
// npm install --save-dev package-name
// ```

// * Used for packages only needed during development (e.g., testing tools, linters).
// * Added to `devDependencies` in `package.json`.

// ---

// ### ✅ Uninstalling Packages

// #### 📌 Local Uninstall:

// ```bash
// npm uninstall package-name
// ```

// #### 📌 Global Uninstall:

// ```bash
// npm uninstall -g package-name
// ```

// ---

// ### ✅ Understanding `node_modules`

// * This folder contains **all installed packages** and their internal dependencies.
// * It is automatically created when packages are installed.
// * It can grow large and should be **excluded from version control** (`.gitignore`).

// ---

// ### ✅ Understanding `dependencies` & `devDependencies`

// * Located in the `package.json` file.

// ```json
// "dependencies": {
//   "express": "^4.18.2"
// },
// "devDependencies": {
//   "nodemon": "^3.0.1"
// }
// ```

// * **dependencies**: Required for the app to run in production.
// * **devDependencies**: Only needed during development/testing.

// ---

// ### ✅ Understanding `scripts`

// * The `scripts` section in `package.json` allows you to define custom terminal commands.

// ```json
// "scripts": {
//   "start": "node app.js",
//   "dev": "nodemon app.js",
//   "test": "echo 'Running tests...'"
// }
// ```

// #### 📌 Default Script Paths:

// * `start` can be run using `npm start`.
// * `test` can be run using `npm test`.

// #### 📌 Custom Scripts:

// * Must be run using `npm run script-name`, e.g.:

// ```bash
// npm run dev
// ```

// ---

// Let me know if you want this turned into a PDF or slide-friendly format!

console.log("ali")