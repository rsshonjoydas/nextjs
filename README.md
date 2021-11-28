[![Facebook-Page][facebook-shield]][facebook-url]
[![Twitter][twitter-shield]][twitter-url]
[![Instagram][instagram-shield]][instagram-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<p align="center">
  <h3 align="center">Next JS</h3>
  <div align="center"><h3>Project Link: <a href="https://github.com/rsshonjoydas/next-js">GitHub</a> or <a href="https://codesandbox.io/s/github/rsshonjoydas/next-js/tree/main">CodeSandbox</a></h3></div></p>

- [Next js](#next-js)
  - [React vs Next](#react-vs-next)
  - [Why learn Next JS](#why-learn-next-js)
- [Routing](#routing)
- [Pre-rendering & Data Fetching](#pre-rendering--data-fetching)
  - [Types of pre-rendering](#types-of-pre-rendering)
  - [Why pre-render?](#why-pre-render)
  - [Static Generation](#static-generation)
  - [getStaticProps](#getstaticprops)
- [API Routes](#api-routes)

### Next js

- Next is a React frontend development web framework created by Vercel (formerly Zeit) that enables functionality such as server-side rendering and static site generation.

#### React vs Next

1. React JS
   - Not quite possible to build a full feature rich application ready to be deployed for production
   - React is a library for building user interfaces
   - You have to make decisions on other features of the app like routing, styling, authentication etc.
2. Next JS
   - A package that uses React for building user interface
   - Loaded with a lot more feature that enable you to build full fledged production ready application.
   - Features exactly like routing, styling, authentication, bundle optimization etc.
   - There's no need to install additional packages, Next.js provides everything for you.
   - Opinions and conversions need to be followed to implement the above said feature

#### Why learn Next JS

Next.js simplifies the process of building a React application for production.

1. File based routing
2. Pre-rendering
3. API routes
4. Support for CSS modules
5. Authentication
6. Dev and Prod build system

### Routing

1. Page based routing mechanism - Pages are associated with a route based on their file name
2. Nested routes - Nested folder structure, files wil be automatically routed in the same way in the URL
3. Dynamic routes - Can be created by adding square brackets to a page name
4. Catch all routes - Add three dots inside square brackets to create catch all route. Helpful when you want different URL's for the same page layout or even when you're working with pages where some of the route parameters are optional
5. Link components to navigate on click of an element
6. useRouter hook's router.push or router.replace method to navigate programmatically
7. How to create a custom 404 page

### Pre-rendering & Data Fetching

#### Types of pre-rendering

1. Static Generation
   - without data
   - with data
   - Incremental Static Generation
   - dynamic parameters when fetching data
2. Server-side Rendering
   - data fetching
3. Client-side data fetching
4. Combining pre-rendering with client-side data fetching

#### Why pre-render?

1. Pre-rendering improves performance
   - In a React app, you need to wait for the JavaScript to be executed
   - Perhaps fetch data from an external API and then render the UI
   - There is a wait time for the user
   - With a pre-rendered page, the HTML is already generated and loads faster
2. Pre-rendering helps with SEO
   - If you're building a blog or an e-commerce site, SEO is a concern
   - With a React app, if the search engine hits your page, it only sees a div tag with id equal to root
   - If search engine hits a pre-rendered page though, all the content is present in the source code which will help index that page
   - If SEO is of concern for your app, pre-rendering is what you want

#### Static Generation

- A method of pre-rendering where the HTML pages are generated at build time.
- The HTML with all the data that makes up the content of the page are generated in advance when you build your application.
- Recommended method to pre-render pages whenever possible
- Page can be build once, cached by a CDN and served to the client almost instantly.
- Example Blog pages, e-commerce product pages, documentation and marketing pages.
- Prod Server - An optimized build is created once and you deploy that build. You don't make code changes on the go once it is deployed.
- Dev Server - We should be able to make changes in our code and we want that code to immediately reflect in the browser.
- Next JS, by default, without any configuration, statically generates every page in our app when we build it for production. This allows the page to be cached by a CDN and indexed by a search engine.

#### getStaticProps

1.  - getStaticProps runs only on the server side
    - The function will never run client-side
    - The code you write inside getStaticProps won't even be included in the JS bundle that is sent to the browser.
2.  - You can write server-side code directly in getStaticProps
    - Accessing the file system using the fs module or querying a database can be done inside getStaticProps
    - You also don't have to worry about including API keys in getStaticProps as that won't make it to the browser.
3.  - getStaticProps is allowed only in a page and can't be run from a regular component file
    - It is used only for pre-rendering andnot client-side data fetching.
4.  - getStaticProps should return an object and object should contain a props key which is an object.
    - In our example, we returned an object & the object contained a props key which was an object as well
5.  - getStaticProps will run at build time
    - During development, getStaticProps runs on every request.

### API Routes

- API routes feature & how to create a basic API in Next.js

  - Handle POST request
  - Handle GET requests
  - Dynamic API routes
  - Handle DELETE requests
  - Catch all API routes

- Next JS is a full stack framework
- You can write the frontend code in React and also write APIs that can be called by the frontend code.
- API routes allow you to create RESTful endpoints as part of your Next.js application folder structure
- Within the pages folder, you need to create a folder called 'api'
- You can add business logic without needing to write any additional custom server code and without having to configure any API routes
- Next JS gives you everything you need to write full-stack React + Node applications

<!-- MARKDOWN LINKS & IMAGES -->

[facebook-shield]: https://img.shields.io/badge/-Facebook-black.svg?style=flat-square&logo=facebook&color=555&logoColor
[facebook-url]: https://facebook.com/rsshonjoydas
[twitter-shield]: https://img.shields.io/badge/-Facebook-black.svg?style=flat-square&logo=twitter&color=555&logoColor
[twitter-url]: https://twitter.com/rsshonjoydas
[instagram-shield]: https://img.shields.io/badge/-Instagram-black.svg?style=flat-square&logo=instagram&color=555&logoColor
[instagram-url]: https://instagram.com/rsshonjoydas
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB
[linkedin-url]: https://linkedin.com/in/rsshonjoydas
