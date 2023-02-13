# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

O projeto é um web app que permite que o usuário pesquise por um perfil no Github a partir do nome de usuário, e exibe algumas informações sobre esse usuário, como nome, avatar, bio, localização e e-mail.

O projeto consiste em duas partes principais:

A primeira parte é a tela de busca (Search.tsx), onde o usuário pode inserir o nome de usuário e iniciar a pesquisa. Quando o usuário pressiona "Enter", a função getUserData é acionada, que usa a API do Github para recuperar informações sobre o usuário. A resposta da API é então passada para o componente InfoUser, que exibe as informações na tela.

A segunda parte é o componente InfoUser.tsx, que exibe as informações do usuário recuperadas da API. Esse componente recebe as informações do usuário como uma prop chamada userData e renderiza as informações do usuário na tela.

O projeto também foi modificado para incluir a funcionalidade de exibir informações sobre os seguidores do usuário pesquisado. Para isso, foi adicionada uma nova prop chamada followers no componente InfoUser.tsx, que recebe um array de objetos contendo informações sobre os seguidores do usuário. As informações dos seguidores são então renderizadas na tela do mesmo modo que as informações do usuário pesquisado.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
