# OrionHealth test app

Frontend application to handle clinicians and patients.

Author: Carlos Arboleda carlosaepn@gmail.com

Project based on [Workflow Frontend Engineer Technical Assessment](https://github.com/orionhealth/workflow-frontend-engineer-technical-assessment):

## Tech Stack

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Material UI](https://mui.com/)
- [Emotion](https://emotion.sh/docs/introduction)
- [fetch-mock](https://www.wheresrhys.co.uk/fetch-mock/)

The routing structure was implemented using [React Router](https://reactrouter.com/en/main)

The application was built considering [web accessibility standards](https://www.w3.org/WAI/)

## Structure

- `/components` folder contains presentational components with styles

- `/containers` folder contains components with more focus on handling data and behavior

- `/routes` folder contains the routing logic for protected paths

- `/types` folder contains typescript definitions

- `/utils/api-service` contains the handlers to fetch api

- `/utils/auth-context` contains the handlers for React Provider and authentication

- `/utils/fn-helper` contains helper functions

## Pending work

Testing is an essential pending part on hold due to the time. A good approach for unit and integration testing is [React Testing Library](https://testing-library.com/) based on [Jest](https://jestjs.io/)

There are a few TODO points in the project which can be improved with more time using custom hooks for better abstraction.

Some type definitions can be more flexible through generics `<T>`

Styling improvement is a pending piece as well

## How to use

Install dependencies

```shell
npm install
```

## Running the App

```shell
npm start
```

This should start up your browser listen on PORT: 3300.
