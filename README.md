# RESTful API for To-Do List Web Application

I have build different projects similar to this so I would be reusing most of the code to do this task.

## Manual Installation

Install the dependencies:

```bash
yarn install
```

## Commands

Running locally:

```bash
yarn dev
```

Running in production:

```bash
yarn start
```

Testing:

```bash
# run all tests
yarn test

# run all tests in watch mode
yarn test:watch

# run test coverage
yarn coverage
```

Docker:

```bash
# run docker container in development mode
yarn docker:dev

# run docker container in production mode
yarn docker:prod

# run all tests in a docker container
yarn docker:test
```

Linting:

```bash
# run ESLint
yarn lint

# fix ESLint errors
yarn lint:fix

# run prettier
yarn prettier

# fix prettier errors
yarn prettier:fix
```

## Environment Variables

The environment variables can be found and modified in the `.env` file. They come with these default values:

```bash
# Port number
PORT=3000

# URL of the Mongo DB
MONGODB_URL=mongodb://127.0.0.1:27017/node-tasklist

# JWT
# JWT secret key
JWT_SECRET=thisisasamplesecret
# Number of minutes after which an access token expires
JWT_ACCESS_EXPIRATION_MINUTES=30
# Number of days after which a refresh token expires
JWT_REFRESH_EXPIRATION_DAYS=30
# Number of minutes after which a reset password token expires
JWT_RESET_PASSWORD_EXPIRATION_MINUTES=10
```

## Project Structure

```
src\
 |--config\         # Environment variables and configuration related things
 |--controllers\    # Route controllers (controller layer)
 |--docs\           # Swagger files
 |--middlewares\    # Custom express middlewares
 |--models\         # Mongoose models (data layer)
 |--routes\         # Routes
 |--services\       # Business logic (service layer)
 |--utils\          # Utility classes and functions
 |--validations\    # Request data validation schemas
 |--app.js          # Express app
 |--index.js        # App entry point
```

### API Endpoints

List of available routes:

**Auth routes**:\
`POST /v1/auth/register` - register\
`POST /v1/auth/login` - login\

**Task routes**:\
`POST /v1/tasks` - create a task\
`GET /v1/tasks` - get all tasks\
`GET /v1/tasks/:taskId` - get task\
`PATCH /v1/tasks/:taskId` - update task\
`DELETE /v1/tasks/:taskId` - delete task

