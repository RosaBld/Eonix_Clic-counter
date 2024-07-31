# Counter app

## Overview
This project is a counter clicker, provided as part of the application process for the position of Junior Web Developer at Eonix Mons. The goal of the project was to complete and enhance the existing application.

## Installation
To install the project, follow these steps:

1. Clone the repository:
```sh
git clone https://github.com/RosaBld/Eonix_Clic-counter.git 
```

2. Install dependencies using pnpm:
```sh
pnpm install
```

## Problem Statement
1. Implement functionality to increment the counter with each click.
2. Add functionality to decrement the counter (modify the UI if necessary), ensuring the counter does not go below 0.
3. Refactor the code so that the counter logic is no longer in the HomeContainer component.
4. Host the completed project on your GitHub (or another platform).

**Bonus**: Implement unit testing.


## Solution Description
### Task 1: Increment Counter
- **Solution**: Understood the existing code structure and identified that the onClick handler for the button was missing. Added the necessary onClick event to increment the counter.
- **Challenges**: Understanding the logic and structure of an unfamiliar project.

### Task 2: Decrement Counter
- **Solution**: Followed the existing logic for incrementation to implement decrementation, ensuring the counter does not go below zero. Added some styling to improve the user interface.
- **Challenges**: Ensured no files or actions were missing for decrementation.

### Task 3: Refactor Code
- **Solution**: Moved the counter clicker code to a separate file (src/counter/), leaving index.js to handle only the necessary imports and rendering.
- **Challenges**: Ensured the refactoring met the project requirements and maintained functionality.

### Task 4: Deploy Project
- **Solution**: Deployed the project on Vercel, as it is already linked to my GitHub account.
- **Challenges**: None encountered.
- **Live Demo**: [Clic Counter](https://eonix-clic-counter-git-main-rosablds-projects.vercel.app/)

### Bonus: Unit Testing
- **Solution**: Unable to implement unit tests at this time.
- **Challenges**: Encountered multiple issues with Jest configuration, including missing dependencies and ES6 conflicts. Updates to the packages led to further conflicts, preventing the application from starting.

## Technologies Used
- React App
- JavaScript
- React Redux
- SASS (for button styling)


## Start project
To start the project, use the command: 
```sh
npm run start
```

