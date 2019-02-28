# investment-api

The main purpose of this repository is to show a good end-to-end project and workflow configuration 


# Pre-reqs
To build and run this app locally you will need a few things:
- Install [Node.js](https://nodejs.org/en/)

# Getting started

- Install dependencies
```
cd <project>
yarn install
```
- Build and run the project
```
yarn build
yarn start
```


## `dependencies`

| Package                         | Description                                                           |
| ------------------------------- | --------------------------------------------------------------------- |
| async                           | Utility library that provides asynchronous control flow.               |
| bcrypt-nodejs                   | Library for hashing and salting user passwords.                       |
| bluebird                        | Promise library                                                       |
| body-parser                     | Express 4 middleware.                                                 |
| compression                     | Express 4 middleware.                                                 |                                    |
| dotenv                          | Loads environment variables from .env file.                            |
| errorhandler                    | Express 4 middleware.                                                 |
| express                         | Node.js web framework.                                              |
| express-validator               | Easy form validation for Express.                                           |
| lodash                          | General utility library.                                                      |
| nodemailer                      | Node.js library for sending emails.                                         |
| request                         | Simplified HTTP request library.                                       |
| request-promise                 | Promisified HTTP request library. Let's us use async/await             |
| winston                         | Logging library                                                       |

## `devDependencies`

| Package                         | Description                                                           |
| ------------------------------- | --------------------------------------------------------------------- |
| @types                          | Dependencies in this folder are `.d.ts` files used to provide types    |
| chai                            | Testing utility library that makes it easier to write tests           |
| concurrently                    | Utility that manages multiple concurrent tasks. Used with npm scripts |
| jest                            | Testing library for JavaScript.                              |
| nodemon                         | Utility that automatically restarts node process when it crashes      |
| supertest                       | HTTP assertion library.                                               |
| ts-jest                         | A preprocessor with sourcemap support to help use TypeScript wit Jest.||
| tslint                          | Linter (similar to ESLint) for TypeScript files                        |
| typescript                      | JavaScript compiler/type checker that boosts JavaScript productivity  |

To install or update these dependencies you can use `npm install` or `npm update`.
