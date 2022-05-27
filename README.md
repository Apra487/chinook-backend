# chinook-backend
This is the backend for chinook-web-app app which does basic CRUD functions(only create and update for POC) on PostgreSQL Database and is automatically deployed using Github action to AWS lambda, AWS Api Gateway using serverless framework.

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
sls offline start 
```


