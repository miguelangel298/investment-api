# investment-api

.


# Pre-reqs
* [Docker](https://www.docker.com/)
* [Yarn](https://yarnpkg.com/en/)

### Installing

- Install dependencies
```
cd <project>
yarn install
```
copy the ENV in the project:
```
 docker-compose exec web cp .env.example .env
```
run docker and connect to container:
```
 docker-compose up --build
```
run migration for creating the tables:
```
 docker-compose exec web yarn db:migrate
```
run seeder:
```
 docker-compose exec web yarn db:seed
```

### Tests

run tests unitaires:
```
 docker-compose exec web yarn test:unit
```
run tests intégration:
```
 docker-compose exec web yarn test:integration
```
run all tests:
```
 docker-compose exec web yarn test:all
```
