npx create-react-app react-practice-1-ui
cd react-practice-1-ui
npm install
npm start
ctrl+c on the integrated terminal to finish the server execution

check that node_modules folder is included in the .gitignore file (if not, add it)

index.js will be the starting point of our react app
will be the first code executed in the browser when we load the app in the browser

cleaned up src
cd src

# If you're using a Mac or Linux:
rm -f *

# Or, if you're on Windows:
del *

# Then, switch back to the project folder
cd ..

- App.test.js
- logo.svg
- reportWebVitals
- setupTests.js
- delete just the styles on index.css file

there we are importing ReactDom from the react-dom library
ReactDom object calls the render method and has two parameters
<App /> => this means JSX special synthax to use our own html element
document.getElementById('root') => where this element should be rendered in the real DOM

then on the public file we can find the index.html file where we have the div id 'root' which is selected by document.getElementById('root')
