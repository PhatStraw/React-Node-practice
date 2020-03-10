# ✔Webpack:

Its a module bundler which lets us bundle our project files into a single file.
It requires a webpack.config.js file in the root folder. Where we tell our webpack how to work with our application by giving entry point information and also output information.


# ✔Babel:

Its a JavaScript compiler. Babel on its own actually has no functionality. Yeah its a compiler but its not going to compile anything by default. We have to add various pulgins and presets to add support particular language features. You can check this out by visiting Babel website. In babel website navigation bar section you will find Try It Out. Click on it and you will get a new window.


# ✔Install & Configure Babel:

npm install @babel/core @babel/preset-env @babel/preset-react babel-loader --save-dev

We already know about @babel/preset-env and @babel/preset-react. Now what is @babel/core and babel-loader.

    @babel/core :- It allows us to run babel from tools like webpack.
    babel-loader :- Its a webpack plugin. It allows us to teach webpack how to run babel when webpack sees certain files.

Lets configure babel by creating a .babelrc file inside the root of the project directory with following contents inside of it.


# ✔Install DevServer:

Run this below command in the terminal.

npm install webpack-dev-server --save-dev


# ✔Loading the Styles: 

To load our style.css file we need to setup new rules in webpack.config.js file.

Before that we need to install some new loader.

npm install css-loader style-loader --save-dev

1.css-loader: Allows webpack to load our CSS assets.
2.style-loader: Take CSS and adds it to the DOM by injecting a <style> tag.
