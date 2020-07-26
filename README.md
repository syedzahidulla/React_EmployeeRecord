This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In this project we are able to see a page with user details which when clicked opens as a modal in which details of the employee start time and end time is mentioned and date picker is also available to see the employee activity on different dates

There are 3 components in it.

1. App.js - Master Component which maintains state of the app and is responsible to call all other components.
2. Userlist.js- This component is responsible for displaying users list through a file data.json which contains all user details
3. userDetails.js - This is a modal component to display results based on data selected

NOTE: By Default Today's Date has been selected in date picker to make UI Look expression and make user realise about the date picker element.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

