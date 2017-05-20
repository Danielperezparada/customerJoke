# CustomerJoke

## Instructions:

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

### Local

To be able to work in local you have to have a MongoDB instance up and runing in your local machine with this specifications:

```sh
hostName: "localhost"
port: 27017
database:" customerJoke"
connector: "mongodb"
```

Install all the modules that the application needs with the following command:

```sh
npm install
```

Once the installation is complete you can do the followings commands:

1.- To start the server and play with it:
```sh
npm run start-dev
```

2.- To run all the test, check lint and generate reports:
```sh
npm test
```

3.- To just run unit test and see some reports:
```sh
npm run unit-test
```

4.- To just run end to end test and see some reports:
```sh
npm run e2e-test
```

### Docker

Install all the modules that the application needs with the following command:

```sh
npm install
```

Once the installation is complete you have to do in the root of the project the following command:
```sh
docker-compose up
```

This command run for you all this process:
1.- Pull down from Dockerhub the node, and mongo images that we need as dependency
2.- Create the image of customerJoke based on the Dockerfile of the project
3.- Rise up the container of mongo and customerJoke and link it between them

Onece the command finish, you will have a server up and running in your host (a ubuntu VM in my case).

