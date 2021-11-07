# Lab - 7. React.js: Catalog page
## Description:
Continue work on your React App by adding a page with Items list (see the link to wireframe of Catalog page above).

## Requirements: 
-	All of the requirements for previous React.js works should be kept.
-	Code style: 
-	Use array.map() method for rendering your items list
-	Routing (switching between pages) should work now. 
-   Use react-router-dom library: https://reactrouter.com/web/guides/quick-start
-	All UI elements (buttons / select) should have corresponding React components (PrimaryButton.jsx / Select.jsx  etc.)
## Functionality:
(filter / search / view more) is still not required (you have to complete it on next works)


# Lab - 8. React.js: Item page

## Description:
Continue work on your React App by adding a page for  your Item (see the link to wireframe of Item page above). Also, now, you have to make all your previous pages (Home & Catalog) more interactive.

## Requirements: 
-	All of the requirements for previous React.js works should be kept.
-	Code style: 
-	Your items should be stored inside the state or context (your choice) of your page
https://uk.reactjs.org/docs/hooks-state.html
https://uk.reactjs.org/docs/hooks-reference.html#usecontext
-	For your state management use useState() inside Functional Component  instead of this.state and Class component
-	If you decided to use context, use useContext() hook instead of Context.Consumer
https://www.robinwieruch.de/react-usecontext-hook
##	Functionality (IMPORTANT):
-	Home page: “View more” button should display more elements on the same page Tip: Elements can be just random paragraph & heading, use your imagination ;)
-	Catalog page: You should be able to filter your items list, by applying different filters by item's properties (i.e size/color/type)
-	Catalog page: Search by any text property option should also work
-	Catalog & Item pages: “View more” action on every item should refer to corresponding Item page, with correct information about item (get the info from your state/context)

# Lab - 9. React.js: Connecting to REST API

# Description:
Finally! Now, you are about to put a final touches on all pages you created - implement interaction with your REST API server.

# Requirements: 
-	All of the requirements for previous React.js works should be kept.
-	Code style: 
-	For any http request - use axios library
https://github.com/axios/axios#installing
-	All your API functions should be separated into single file (or folder, if you want) - just like you saw in Live coding for 5 lab with fetch() function
##	Functionality: 
-	On Catalog Page - all items should now be fetched from your backend with GET method (using axios)
-	Search with filters - should also be implemented with GET request (search by text field can be left as it is)
Hint: pass filters as url parameter
-	Before response from your GET method is received you have to display a Spinner(Loader component) to the user. Something like this: https://projects.lukehaas.me/css-loaders/



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
