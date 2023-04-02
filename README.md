# Clinical portal

Frontend application to handle clinicians and patients.

This application has been modified as
[micro-app](https://martinfowler.com/articles/micro-frontends.html).

In production, the application can be built and placed in any storage service
like [AWS S3](https://aws.amazon.com/s3/) or
[Google storage](https://cloud.google.com/storage/docs/introduction) and be
served through a CDN. For this sample, we are using
[GitHub pages](https://docs.github.com/en/pages) to enable a public host that
serves the files needed to mount it in the container app.

Please refer to the
[container app](https://github.com/carl0sarb0leda/microf-container-app) for more
information.

Author: Carlos Arboleda carlosaepn@gmail.com

## Tech Stack

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Material UI](https://mui.com/)
- [Emotion](https://emotion.sh/docs/introduction)
- [Fetch-mock](https://www.wheresrhys.co.uk/fetch-mock/)

The routing structure was implemented using
[React Router](https://reactrouter.com/en/main)

The application was built considering
[web accessibility standards](https://www.w3.org/WAI/)

## Structure

- `/components` folder contains presentational components with styles

- `/containers` folder contains components with more focus on handling data and
  behavior

- `/routes` folder contains the routing logic for protected paths

- `/types` folder contains typescript definitions

- `/utils/api-service` contains the handlers to fetch api

- `/utils/auth-context` contains the handlers for React Provider and
  authentication

- `/utils/fn-helper` contains helper functions

## Pending work

Testing is an essential pending part on hold due to the time. A good approach
for unit and integration testing is
[React Testing Library](https://testing-library.com/) based on
[Jest](https://jestjs.io/)

There are a few TODO points in the project which can be improved with more time
using custom hooks for better abstraction.

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

This should start up your browser listen on PORT: 3302.
