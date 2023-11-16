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


<details>
  <summary>EKI-20231024-031-Getting-Started</summary>

```sh

npm create svelte@latest intro-site

Which Svelte app template?
- Skeleton project


Select Additional options ( user arrow keys/space bar)

Add Type checking with TypeScript?
- Yes, using Javascript with JSDoc comments

Add ESLint for code linting?
- No

Add pretier for code formatting?
- Yes

Add Playwright for browser testing?
- No

Add Vitest for unit testing?
- No


--

cd intro-site

npm install

npm run dev -- --open  (for auto open default browser & auto open page http://localhost:5173)


```

</details>


<details>
  <summary>EKI-20231025-033-Pages-and-Routes</summary>

```sh

http://localhost:5173/about

http://localhost:5173/contact

```

</details>


<details>
  <summary>EKI-20231025-034-Routing-Parameters</summary>

```sh

http://localhost:5173/person/1
http://localhost:5173/color/blue
http://localhost:5173/color/red


```

</details>


<details>
  <summary>EKI-20231110-035-Server-Load-Function-With-Environment-Variables</summary>

```sh

https://polygon.io/dashboard/api-keys
https://polygon.io/docs/stocks


create .env

API_KEY=D4qU8yDgffTwUTztFGmu_745j8xMOfdX
PUBLIC_API_KEY=unujnmsadWHJjkhuasdNMWnuacd_123kjjbasdbhkj
RANDOM_NUMBER=7

https://polygon.io/docs/options/getting-started
http://localhost:5173/stock/O:SPY251219C00650000
http://localhost:5173/stock/O:TSLA230113C00015000


http://localhost:5173/random/7
http://localhost:5173/random/32

```

</details>


<details>
  <summary>EKI-20231112-036-Random-Number-Challenge</summary>

```sh

create .env

RANDOM_NUMBER=7

http://localhost:5173/random/7
http://localhost:5173/random/32

```

</details>


<details>
  <summary>EKI-20231112-037-Layouts</summary>

```sh

create .env

SUPER_SECRET=sshhh!!!

http://localhost:5173/contact
http://localhost:5173/about

```

</details>


<details>
  <summary>EKI-20231115-038-Prefetching-Links-and-Page-Store</summary>

```sh

https://kit.svelte.dev/docs/link-options

data-sveltekit-preload-data

```

```svelte

<nav>
  <li><a data-sveltekit-preload-data href="/">Home</a></li>
	<li><a data-sveltekit-preload-data href="contact">Contact</a></li>
	<li><a data-sveltekit-preload-data href="about">About</a></li>
</nav>



```

data-sveltekit-preload-data = perpindahan routes menjadi lebih cepat memanfaat fungsi cache (tidak reload network)


```sh

https://kit.svelte.dev/docs/modules#$app-stores


```


```svelte

<script>

import { getStores, navigating, page, updated } from '$app/stores';

</script>

```

'$app/stores' = untuk mengeluarkan informasi dari fungsi terkait , ex : digunakan untuk check url path dengan tujuan untuk memvalidasi page layout link active  (brubah warna)


</details>



<details>
  <summary>EKI-20231116-039-Challenge-build-a-personal-webpage</summary>

```sh
https://kit.svelte.dev/

cd eki-rnd-svelte-sveltekit-2023
npm create svelte@latest personal-site

Which Svelte app template?
- Sekelton project

Add type checking with TypeScript?
- Yes, using Javascript with JSDoc comments

Select additional options (use arrow keys/space bar)

│  ◻ Add ESLint for code linting
│  ◼ Add Prettier for code formatting
│  ◻ Add Playwright for browser testing
│  ◻ Add Vitest for unit testing
│  ◻ Try out Svelte 5 beta


cd personal-site
npm install
npm run dev -- --open

```


```sh

https://getbootstrap.com/

cd personal-site
npm i bootstrap@5.3.2 -D


https://getbootstrap.com/docs/5.3/components/navbar/


```


```sh

https://zenquotes.io/
https://docs.zenquotes.io/zenquotes-documentation/
https://zenquotes.io/api/random/[your_key]

```

```sh

https://kit.svelte.dev/docs/modules#$app-stores

```



</details>

## EKI INDRADI

"TIME > KNOWLEDGE > MONEY". #2024_3_DIGIT_MOTIVATION

## Reference : 

:link: https://www.udemy.com/course/master-svelte-framework-the-complete-course-2023


