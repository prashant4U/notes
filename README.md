## Demo

See the demo at [https://notes-two-theta.vercel.app/](https://notes-two-theta.vercel.app/).

## Execution Steps

In the project directory, you have to install dependencies first:

```shell
npm install
```

after completing with dependencies In the project directory, you can run:

```shell
npm start
```

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Folders structure of this project:

```shell
└──notes
   ├── public
   │     └── index.html
   ├── src
         ├── actions
         ├── apis
         ├── components
         ├── css
         ├── reducers
         └── test
```

## Unit Testing

have configured and used [RITEway Testing Framework](https://github.com/ericelliott/riteway) for unit testing purpose, RITEway produces standard TAP output, so it's easy to integrate with just about any test formatter and reporting tool. (TAP is a well established standard with hundreds (thousands?) of integrations).

you can run test cases using below command

```shell
npm test
```
