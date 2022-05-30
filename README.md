# chinook-backend
This is the backend for chinook-web-app app which does basic CRUD functions(only create and update for POC) on PostgreSQL Database and is automatically deployed using Github action to AWS lambda, AWS Api Gateway using serverless framework.

## Application Architecture
<img width="1126" alt="Screenshot 2022-05-27 at 12 09 09 PM" src="https://user-images.githubusercontent.com/54775196/170645119-f1a34aaf-d8ce-4913-a3c6-4417184904a5.png">

## Features

- Continous Integration and Deployment using Github Actions.
- Uses Serverless framework.
- Uses AWS Lambda +  AWS API Gateway + AWS RDS.
- Does NOT use any ORM framework, only the pg library.

## Quick Start

Create a `.env` file with the following properties:

- USERNAME: The username of the postgres user.

- HOST: The connection endpoint of the postgres database.

- DATABASE: The name of the postgres database.

- PASSWORD: The password of the postgres database.

- PORT: The exposed port of the postgres database.

Then run the following command:

```bash
npm i
npm start
```
The api will get exposed at `localhost:8001`.


## Endpoints

- /api/v1/users `GET`
- /api/v1/users  `POST`

## Demo
API is hosted [here](https://7bxeljut40.execute-api.ap-south-1.amazonaws.com/dev/api/v1/users).

Click [here](https://github.com/Apra487/chinook-poc-web-app) for the frontend-repo.


