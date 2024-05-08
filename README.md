# React Components

This repository contains a collection of React components that cover various functionalities. Below is an overview of what you'll find in this project:

 DEMO: you can see the application in action [here](https://react-components-angelica.netlify.app/).

- Color Game:

https://github.com/AYolimaArias/React-Components-Front/assets/125715473/c4d5ac5b-1eda-41a8-a23e-8e83caf68500

- Doable:

https://github.com/AYolimaArias/React-Components-Front/assets/125715473/b98d7b78-8f69-4118-872e-a409651c9dde

## Resources

- [**Design in Figma:**](https://www.figma.com/file/QJQjUm1zlJmtB7NrVFKBwX/React-Evaluation?type=design&node-id=0-1&mode=design)-> Designed by https://www.codeable.la/ .Detailed design of the project available for reference.
- **doable-api.json file:** A file at the root of the repository that can be imported into tools like Insomnia to interact with the API.

## Installation

- Make sure your NodeJS and npm versions are updated to `React ^18.2.0`

- Install dependencies: 

```
$ npm install
```

- Star the server: 

```
$ npm run start
```

## The Project
This project challenges you to complete the implementation of various React components, including:

### Component App
- The home page already has complete styles and header, but still needs logic to conditionally render the Home, ColorGame, and Doable components.
- Navigation between these components is done through the "page" state variable.

### Component ColorGame
- This component offers an interactive game that challenges the user to find specific colors.
- It includes an RGB color panel and functions to manage the game logic.

### Component Doable
- This component is a task application that uses user authentication.
- It renders different views depending on the user's authentication state.
- It includes functions for creating, editing, and deleting tasks, as well as sorting and filtering.

## Testing
Testing has been implemented for some React components in this project.

- Command to run the test:

```
$ npm run test
```

Enjoy exploring this project, and we hope it proves useful for your development!
