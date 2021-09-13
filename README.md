# MindTalesChat

The repository for MindTalesChat app

Project Name: MindTalesChat

Project Description

MindTalesChat is simple chat demo application for intel based Mac only

Prerequisites

iOS : XCode(12.0) onwards

Android : Android Studio(4.2.2) with gradle(4.2.1) onwards

Editor : Visual Studio Code

Main technologies used

	•	React Native A framework for building native apps with React. 

	•	Redux A state management library used to manage data used by application. 

	•	Redux Saga Redux-saga is a redux middleware library, which enables us to use redux asynchronously. 

How to Setup Project

Steps to setup the project

Step 1: Clone this repository.

Step 2: Go to the cloned repo and open in terminal.

Step 3: Install the Application with npm i

Step 4: cd to iOS directory. And install pods with pod install


How to Run the Project

	1.	cd to the project directory

	2.	Run and build for either OS

	◦	Run iOS app - npm run ios

	◦	Run Android app - npm run android

	▪	Start Genymotion or Native emulator or connect physical device 

	◦	Note: This npm scripts will lint your code first. If there are no lint errors, then it will run the ios or android app. Otherwise it will show the lint errors in the terminal.

Coding Style used

This project adheres to JavaScript Standard for coding style. To maintain coding standards, utilising features of ES6 and follow best development practices of react-native, this project also uses ES6, some rules of eslint-airbnb, eslint-plugin-react and eslint-plugin-react-native.

	1.	To Lint - Use the npm script lint. To run it bash npm run lint 2. Auto Lint on Commit

This is implemented using husky. So husky will prevent code-commits having lint errors. There is no additional setup needed.

	2.	Understanding Lint Errors - The linting rules are from JS Standard and React-Standard. Regular JS errors can be found with descriptions here, while React errors and descriptions can be found here.


