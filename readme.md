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


<details>
  <summary>EKI-20231130-040-Deploying-to-Vercel</summary>

```sh

source : ./personal-site

github public : https://github.com/EKI-INDRADI/personal-site-deploy

server : https://vercel.com

deploy :

- https://personal-site-deploy.vercel.app/ 

- https://personal-site-deploy-kiri65i85-eki-indradis-projects.vercel.app


```

</details>

<details>
  <summary>EKI-20231201-041-Forms-or-Form-Actions</summary>

```sh
#https://kit.svelte.dev/docs/form-actions


```

</details>


<details>
  <summary>EKI-20231202-042-Page-Rendering-Options</summary>

PRERENDER


mirip seperti constructor pada angular

```ts

// contoh angular :

// eksekusi sebelum ui muncul (PRERENDER)

constructor  { 
// run ...
}

// vs 

// eksekusi setelah ui muncul
ngOnit { 
// run  ..
}

```

perintah prerender pada sveltkit

+page.js
```js
export const prerender = true
```



--

SERVER SIDE VS CLIENT SIDE
```sh
# https://chat.openai.com/

ssr: true/false

Pada SvelteKit, SSR (Server-Side Rendering) dan CSR (Client-Side Rendering) adalah dua metode rendering yang berbeda untuk menghasilkan halaman web. SvelteKit memungkinkan Anda mengonfigurasi opsi halaman (page options) untuk mengontrol perilaku rendering halaman. Berikut adalah beberapa perbedaan antara opsi halaman untuk SSR dan CSR:

Pada halaman SSR, opsi ini biasanya diatur sebagai true untuk menunjukkan bahwa halaman tersebut akan di-render di sisi server.

Pada halaman CSR, opsi ini biasanya diatur sebagai false untuk menunjukkan bahwa halaman tersebut akan di-render di sisi klien.

// SSR Page
export let ssr = true;

// CSR Page
export let ssr = false;

```

```sh

#https://kit.svelte.dev/docs/page-options

# +page.js
export const ssr = false;
// If both `ssr` and `csr` are `false`, nothing will be rendered!


# +page.js
export const csr = false;
// If both `csr` and `ssr` are `false`, nothing will be rendered!

```



perbedaanya hanya berpengaruh ketika production


STEP 1

intro-site\src\routes\about\+page.js
```sh

export const prerender = true

```

intro-site\src\routes\contact\+page.server.js
```sh

export const csr = false;
export const ssr = true;

```

intro-site\src\routes\person\[id]\+page.js
```sh

export const csr = true;
export const ssr = false;

```

STEP 2


```sh
npm run build

npm run preview
```


STEP 3 (result)

http://localhost:4173/about (prerender) - view source

```html

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<link rel="icon" href="./favicon.png" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		
		<link href="./_app/immutable/assets/0.42d40de3.css" rel="stylesheet">
		<link rel="modulepreload" href="./_app/immutable/entry/start.57f840f0.js">
		<link rel="modulepreload" href="./_app/immutable/chunks/scheduler.cc1c0861.js">
		<link rel="modulepreload" href="./_app/immutable/chunks/singletons.9f3dd68e.js">
		<link rel="modulepreload" href="./_app/immutable/chunks/parse.bee59afc.js">
		<link rel="modulepreload" href="./_app/immutable/entry/app.e42f94c0.js">
		<link rel="modulepreload" href="./_app/immutable/chunks/index.10b1266b.js">
		<link rel="modulepreload" href="./_app/immutable/nodes/0.ab433938.js">
		<link rel="modulepreload" href="./_app/immutable/chunks/stores.96802055.js">
		<link rel="modulepreload" href="./_app/immutable/nodes/2.27ed13f7.js">
		<link rel="modulepreload" href="./_app/immutable/nodes/5.1f578d22.js">
	</head>
	<body data-sveltekit-preload-data="hover">
		<div style="display: contents">   <nav> <li><a data-sveltekit-preload-data href="/" class="svelte-1fbb995" data-svelte-h="svelte-xnw5qc">Home</a></li> <li><a data-sveltekit-preload-data href="contact" class="svelte-1fbb995" data-svelte-h="svelte-g9fcr8">Contact</a></li> <li><a data-sveltekit-preload-data href="about" class="svelte-1fbb995 active" data-svelte-h="svelte-1bvyusd">About</a></li> </nav> <h1>eki</h1> <h2>Path : /about</h2> <main><h2>SUPER SECRET PLEASE DONT LOOK &quot;sshhh!!!&quot;.</h2> <h1 data-svelte-h="svelte-soqi9t">About</h1>   </main> 
			
			<script>
				{
					__sveltekit_og4cwl = {
						base: new URL(".", location).pathname.slice(0, -1),
						env: {"PUBLIC_API_KEY":"unujnmsadWHJjkhuasdNMWnuacd_123kjjbasdbhkj"}
					};

					const element = document.currentScript.parentElement;

					const data = [{"type":"data","data":{name:"eki"},"uses":{}},{"type":"data","data":{secret:"sshhh!!!"},"uses":{}},null];

					Promise.all([
						import("./_app/immutable/entry/start.57f840f0.js"),
						import("./_app/immutable/entry/app.e42f94c0.js")
					]).then(([kit, app]) => {
						kit.start(app, element, {
							node_ids: [0, 2, 5],
							data,
							form: null,
							error: null
						});
					});
				}
			</script>
		</div>
	</body>
</html>

```

http://localhost:4173/contact (csr=false, ssr=true) - view source , halaman akan dirender di server

```html


<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<link rel="icon" href="./favicon.png" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		
		<link href="./_app/immutable/assets/0.42d40de3.css" rel="stylesheet">
	</head>
	<body data-sveltekit-preload-data="hover">
		<div style="display: contents">   <nav> <li><a data-sveltekit-preload-data href="/" class="svelte-1fbb995" data-svelte-h="svelte-xnw5qc">Home</a></li> <li><a data-sveltekit-preload-data href="contact" class="svelte-1fbb995 active" data-svelte-h="svelte-g9fcr8">Contact</a></li> <li><a data-sveltekit-preload-data href="about" class="svelte-1fbb995" data-svelte-h="svelte-1bvyusd">About</a></li> </nav> <h1>eki</h1> <h2>Path : /contact</h2> <main><h2 data-svelte-h="svelte-1xrwqqx">Contact Special Layout</h2> <h1 data-svelte-h="svelte-tbczl2">Contact</h1>    <form method="POST"> <label for="email" data-svelte-h="svelte-1p9d3fm">Email</label> <input type="email" name="email" id="email"> <br>    <label for="Message" data-svelte-h="svelte-10jibt4">Message</label> <br> <textarea name="message" id="message" cols="30" rows="10"></textarea> <br>    <button type="submit" data-svelte-h="svelte-7fuxb2">Send Message</button></form>  </main> </div>
	</body>
</html>


```

http://localhost:4173/person/1 (csr=true, ssr=false) - view source , halaman akan dirender di client

```html

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<link rel="icon" href="../favicon.png" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		
	</head>
	<body data-sveltekit-preload-data="hover">
		<div style="display: contents">
			<script>
				{
					__sveltekit_og4cwl = {
						base: new URL("..", location).pathname.slice(0, -1),
						env: {"PUBLIC_API_KEY":"unujnmsadWHJjkhuasdNMWnuacd_123kjjbasdbhkj"}
					};

					const element = document.currentScript.parentElement;

					Promise.all([
						import("../_app/immutable/entry/start.57f840f0.js"),
						import("../_app/immutable/entry/app.e42f94c0.js")
					]).then(([kit, app]) => {
						kit.start(app, element);
					});
				}
			</script>
		</div>
	</body>
</html>

```

--

sveltekit adapter
```sh
https://kit.svelte.dev/docs/adapters

# intro-site\svelte.config.js

# import adapter from '@sveltejs/adapter-auto'; // default

# @sveltejs/adapter-cloudflare for Cloudflare Pages
# @sveltejs/adapter-cloudflare-workers for Cloudflare Workers
# @sveltejs/adapter-netlify for Netlify
# @sveltejs/adapter-node for Node servers
# @sveltejs/adapter-static for static site generation (SSG)
# @sveltejs/adapter-vercel for Vercel

# comunity adapter https://sveltesociety.dev/components#adapters

```

example : 

```bash

npm install --save-dev @sveltejs/adapter-static

```

Konfigurasi adapter:
Tambahkan adapter tersebut ke konfigurasi SvelteKit di berkas svelte.config.js:

svelte.config.js
```js

import adapter from '@sveltejs/adapter-auto';
// import adapter from '@sveltejs/adapter-static';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	}
};

export default config;

```

```bash

npm run build

```



</details>


<details>
  <summary>EKI-20231202-043-Form-Challenge</summary>

```sh
https://kit.svelte.dev/

cd eki-rnd-svelte-sveltekit-2023
npm create svelte@latest form-challenge

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


cd form-challenge
npm install
npm run dev -- --open

```

</details>

<details>
  <summary>EKI-20231204-044-Error-Pages</summary>

```sh

# NOT FOUND ERROR HANDLE
http://localhost:5173/person/44

# FOUND
http://localhost:5173/person/1


# ERROR HANDLE
http://localhost:5173/random/2

```


```js

    // 1
    if (+params.id === 44) {
        throw error(404, {message : 'Person not found'})
    }


    //2
    // create intro-site\src\routes\+error.svelte  <<< auto redirect handle error with ui, makesure name '+error.svelte'

```

</details>

<details>
  <summary>EKI-20231204-045-API-Routes</summary>


```sh

# API - SERVER SIDE ROUTE
# https://kit.svelte.dev/docs/routing#server

# intro-site\src\routes\fish\+server.js
# http://localhost:5173/fish

# intro-site\src\routes\shark\+server.js
# http://localhost:5173/shark

```


</details>


## EKI INDRADI

"TIME > KNOWLEDGE > MONEY". #2024_3_DIGIT_MOTIVATION

## Reference : 

:link: https://www.udemy.com/course/master-svelte-framework-the-complete-course-2023


