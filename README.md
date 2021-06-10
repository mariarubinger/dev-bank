# DevBank

DevBank is a banking application using ReactJS and Firebase.

## Preview Desktop
![dev-bank-1](https://user-images.githubusercontent.com/66969881/121602558-63bccc80-ca3f-11eb-8e97-e6beb8932ef9.png)

![dev-bank-2](https://user-images.githubusercontent.com/66969881/121602595-720ae880-ca3f-11eb-8544-141fcc2dbfa5.png)

![dev-bank-3](https://user-images.githubusercontent.com/66969881/121602630-80f19b00-ca3f-11eb-8960-959034e9d107.png)

## Features
- Registry
- Login
- Balance
- Transactions
- Logout

## Technologies
 - [React](https://pt-br.reactjs.org/)
    - [Create React App](https://github.com/facebook/create-react-app)
    - [React Router](https://reactrouter.com/)
    - [Styled Components](https://styled-components.com/)
 - [Firebase](https://firebase.google.com/)
    - [Cloud Firestore](https://firebase.google.com/docs/firestore)

## Cloning project

```
> Clone repository
git clone https://github.com/mariarubinger/dev-bank

> Enter folder
cd dev-bank
```

## Setup
```
> yarn start
```

## Firebase

This app uses Firebase services.

- Go to https://console.firebase.google.com/ to login and create a new project in the console.

- In the 'Authentication' session you will change the status to 'enabled'.

- The configuration required to connect to Firebase is defined in the .env.local file at the root of this repository. Add API_KEY, AUTH_DOMAIN and PROJECT_ID. These values can be found in Project Settings > Your Apps > SDK Settings > Settings.

- Go to 'Firestore Database' and click 'Start Collection' to create a collection within the project. In this project, we have two collections, the 'users' collection and the 'transactions' collection. More details can be found in the firestore.js file which is in the services folder.

## Notes to 4cadia

### How you can test

- I sent my firestore credentions by e-mail, please replace this information on .env.local file.

- Use my account to login:

    e-mail: maria@gmail.com | senha: 123456

