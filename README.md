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

created a new folder called components inside src, this is a convention for creating new components

to create attributes to able to pass them through the <Todo /> html tag
we need to create something on the Todo.js file to pick up those values
to make that happen we use the parameter "props" inside the Todo(props) function
props is a key value JS object which will hold all the attributes
then we can use from App.js the props.property_name inside Todo.js component

listen click on delete button, onClick we are just pointing to the name of function which handles the todo delete
onClick={deleteHandler}
and then we created a nested function deleteHandler() inside Todo() function in charge of the above listed items
