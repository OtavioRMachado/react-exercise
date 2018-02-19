# The Bands List exercise.
The app was created with the `create-react-app` script. I ended up working around five to six hours to achieve this result:

Libs used:

* **Prop-types** to document components;
* **Enzyme** as a renderer for testing purposes;
* **Chai** to use expects;
* **Eslint** as a linter;
## Running the Application:
To install all dependencies, type:
```
npm install
```

To start the application locally, type:
```
npm start
```

## Running tests and linter
To run the tests, type:
```
npm test
```

To run the linter, type:
```
npm run lint
```

## Next steps:
If I was supposed to keep working on the project, these are the following items I would focus on:

1. Separating fetch from the container and testing it properly;
2. Using react-router to create a separate page for band details when clicking on a band;
3. Separating band presentation in a different component.

If this was supposed to turn into a big application, I would consider using Redux to spread information across my components and use Docker to build the app in a VM.
