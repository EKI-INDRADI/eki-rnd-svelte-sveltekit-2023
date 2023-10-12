## Tutorial : 

:link: [Udemy](https://www.udemy.com/course/master-svelte-framework-the-complete-course-2023)

<details>
  <summary>JavaScript runtime</summary>

1. [NodeJs](https://nodejs.org/en) or [Multi Nodejs / Nvm Windows](https://github.com/EKI-INDRADI/install-multi-nodejs-version-windows) or [Multi Nodejs / Nvm Linux](https://github.com/EKI-INDRADI/install-multi-nodejs-version-linux)

</details>

<details>
  <summary>Extentions Visual Studio Code</summary>
  
1. [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)

2. [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

3. [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

4. [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)

</details>

<details>
  <summary>Tools</summary>

1. [Svelte Society Tools](https://sveltesociety.dev/tools)

2. [REPL (WEB SVELTE CODE)](https://svelte.dev/repl/hello-world?version=3.50.1)

3. [Allow CORS: Access-Control-Allow-Origin](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf/related)

</details>



<details>
  <summary>EKI-20230927-002-Svelte-up-and-Running</summary>

```sh

npm init vite@latest

Project Name : demo
Select a framework : Svelte
Select a variant : JavaScript


  cd demo     
  npm install 
  npm run dev

```

</details>


<details>
  <summary>EKI-20230927-003-Svelte Project Tour</summary>

```sh
./package.json

  "scripts": {
    "dev": "vite",                 ---> npm run dev (run from code)
    "build": "vite build",         ---> npm run build (build code to production ./dist) 
    "preview": "vite preview"      ---> npm run preview (preview production ./dist)
  },

```

</details>

<details>
  <summary>EKI-20230928-007-Styles</summary>

```svelte

<style>
  h1 {
    color : red;
  }

  h2 {
    color : blue;
  }

  /* 
  
  include <Fun /> (not recomended) 
  
  :global(h2) {
    color : blue;
  } 

  recomended 
  create ./src/global.css
  update ./src/main.js

  
  */

</style>


```

</details>

<details>
  <summary>EKI-20230929-009-Color-Picker-Challenge</summary>


```sh

  https://milligram.io/#getting-started

  update ./index.html
  update ./src/App.svelte

```

index.html

```html
  <head>
    
    <!-- Google Fonts -->
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic"
    />

    <!-- CSS Reset -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"
    />

    <!-- Milligram CSS -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css"
    />

  </head>

  <body>
    <!-- <div id="app"></div> -->
    <div class="container" id="app"></div>
    <script type="module" src="/src/main.js"></script>
  </body>

```

</details>

<details>
  <summary>EKI-20231008-019-Deploying-Magic-Gather-Challenge</summary>

```sh

source : ./mtg-counter

github public : https://github.com/EKI-INDRADI/mtg-counter-deploy

server : https://vercel.com

deploy :

- https://mtg-counter-deploy.vercel.app/ 

- https://mtg-counter-deploy-m65aoeg47-eki-indradis-projects.vercel.app/

- https://mtg-counter-deploy-git-main-eki-indradis-projects.vercel.app/


```

</details>

## EKI INDRADI

"TIME > KNOWLEDGE > MONEY". #2024_3_DIGIT_MOTIVATION

## Reference : 

:link: https://www.udemy.com/course/master-svelte-framework-the-complete-course-2023


