# Notes for Reviewer

Hi Nick,

I hope all is going well with you. I'm writing this note to request feedback on this take-home assignment. I was only able to set aside a week to work on this assignment due to other responsibilites. Despite the time constraint, I did my best to complete the assignment to the best of my abilities and look forward to your feedback. Your expertise and experience will be invaluable to me, and I believe that your suggestions and recommendations will help me improve my skills and grow professionally. Below I have outlined what I completed.

I completed all of the required features and (2) of the optional features: disable ability to navigate to /challenge route when signed out, and display "loading" state when attempting to join challenge. Given more time, I am confident that I could complete the rest of the optional challenges.

I wrote a few unit tests although more would be needed to complete testing: 

1. The challenge page needs a test around joining challenges. 
2. An integration test is also needed.

I used the svg library that was mentioned in the code, "react-inlinesvg". I would refactor this to use the more performant "react-svg". React-svg is more lightweight, has improved parsing performance, and has some caching advantages. With more time I would be able to make that change.

I enjoyed working on this well organized take home assignment. I appreciate that I was able to reuse a lot of the existing code.

I have a couple suggestions for improving the repo:
* Add an .nvmrc file with a node version of v16.19.0. The app was not compiling with later node versions
* Update React Scripts. It was creating an iframe overlay before. I updated to "react-scripts": "^5.0.1"

Thank you in advance for your support and assistance. I look forward to hearing from you.

Regards,
Paul

# Joro Front-End Coding Challenge

This app is a low fidelity version of the Joro app. In order to reduce setup work, this is a web app that demonstrates some of the same functionality as the mobile app i.e. ability to login, view challenges, and join a challenge.

If you pass the code challenge we will also use this app for our code pairing interview, since it is a codebase that both you and we will be familiar with.

To complete the coding challenge you will be required to add some features (listed below) along with tests. Please note, there are items that have been deliberately left out i.e. an SVG library. This is done so that you are able to weigh trade-offs and decide which tools are best to use. There are lots of different ways to complete the challenge so we are not looking for the one "right" way. Our general advice is:

Follow the structure and patterns of the code as you find them
If you don't want to follow certain patterns please explain why (there are always better ways to do things).
You can make any changes you want (add new files, add packages, etc) but none of these things are required.
Aim for decent test coverage for any code you add.

## Challenge Description

You will have access to the following 3 endpoints. Feel free to use and modify the existing redux setup or use another strategy for data fetching and state management.

* `POST /interviews/login` which returns the user as a JSON object upon successful login: `{ id, firstName, lastName, email, password }`. You can use the following credentials to successfully login: `{ email: "testuser@joro.tech, password: mockUserPassword }`.
* `GET /interviews/challenges` which returns a list of challenges the user can join. Each challenge of the list has the following format: `{ id, name, contentKey, timePeriod, category }`.
* `POST /interviews/challenges/:challengeId` which returns an userChallenge upon successfully enrolling in a challenge: `{ userId, challengeId }`


You may use any of the components provided within the `components/` folder and also add additional components.

### Required features to implement

* Working Sign In page with client and server side validation.
* Challenges page, which displays user information as well as a list of challenges. 
* Simple loading state while challenges load. 
* Ability to join a challenge. Once joined, display "joined" card state according to design specs.
* Persist redux state between page reloads.
* Authentication and Challenges component unit tests. 

### Optional features to implement

* Disable ability to navigate directly to challenges page unless user is successfully authenticated (including pasting /challenges url to navigate).
* If one challenge has been joined, disable ability to join others.
* Add an animation to the loading page. 
* Display "loading" state when attempting to join challenge according to design specs.
* Include an integration test.
* Additional stylistic changes aside from design specs provided below.

### Design Specs

* [Figma Designs](https://www.figma.com/file/aZ4bl7Ubrb0D45a928N34N/Front-End-Coding-Challenge?node-id=10%3A81)
* Assets from designs found in `src/assets/svg` folder.

Order of pages in the Figma link: 

#### Sign In Page

* Sign In Page (Default)
* Sign In Page (Input Field Active State)
* Sign In Page (Server Error)
* Sign In Page (Loading State)

#### Challenges Page

* Loading Page
* Challenges Page (Default)
* Challenges Page (Joining State)challenges-join-loading.png)
* Challenges Page (Joined State)

## Running and Testing the App

Create-react-app was used to create this repository. Documentation can be found [here](https://facebook.github.io/create-react-app/docs). In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


## How to return your challenge to Joro

You should assume we will run the same steps you did (the ones listed above). Feel free to add any notes to this README or a new file. Zip up the directory and attach to an email addressed to [nick@joro.tech](mailto:nick@joro.tech). You do not need to include a git repo.

Email the same address if you have _any_ questions and if you want to give us any feedback we will be very grateful.
