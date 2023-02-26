<div style="display:flex; align-items: center">
  <h1 style="position:relative; top: -6px" >Epic Movie Quotes</h1>
</div>

---

Epic Movie Quotes is an application of movies and quotes. Verified user can add own movies and quotes. also see quotes from other users.

#

### Table of Contents

- [Prerequisites](#prerequisites)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)

#

### prerequisites

- <img src="/readme/assets/node.png" width="35" style="position: relative; top: 4px" /> Node JS @12.X and up
- <img src="/readme/assets/npm.png" width="35" style="position: relative; top: 4px" /> npm @6 and up

#

### Tech Stack

- <img src="/readme/assets/next.png" height="18" style="position: relative; top: 4px" /> [Next.js](https://nextjs.org/) - front-end framework
- <img src="/readme/assets/framer.png" height="18" style="position: relative; top: 4px; width: 18px" /> [Framer-Motion](https://www.framer.com/) - Animation tool
- <img src="/readme/assets/axios.png" height="18" style="position: relative; top: 4px; width: 18px" /> [Axios](https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser and node.js
- <img src="/readme/assets/form.png" height="18" style="position: relative; top: 4px; width: 18px" /> [React Hook Form](https://react-hook-form.com/) - validation package
- <img src="/readme/assets/i18next.png" height="18" style="position: relative; top: 4px; width: 18px" /> [i18Next](https://www.i18next.com/) - internationalization-framework written in and for JavaScript
- <img src="/readme/assets/redux.png" height="18" style="position: relative; top: 4px; width: 18px" /> [Redux Toolkit](https://redux-toolkit.js.org/) - state management tool
- <img src="/readme/assets/scroll.png" height="18" style="position: relative; top: 4px; width: 18px" /> [React infinite scroll component](https://www.npmjs.com/package/react-infinite-scroll-component) - scrolling tool

#

### Getting Started

1\. First of all you need to clone Epic Movie Quotes from github:

```sh
git@github.com:RedberryInternship/kheladze-epic-movie-quotes-front.git
```

2\. Next step requires install all the dependencies

```sh
npm install
```

or

```sh
yarn
```

and then

```sh
npm run dev
```

##### Now, you should be good to go!

### Project Structure

```bash

├─── components
├───├─── Component
├───├───├─── Component.tsx
├───├───├─── useComponent.ts
├───├───├─── index.ts
├───├─── index.ts
├─── hooks
├───├─── index.ts
├───├─── useGlobalHook.ts
├─── pages
├───├─── index.ts
├───├─── page.tsx
├─── public
├───├─── locales
├───├───├─── en
├───├───├─── ka
├─── schemas
├───├─── index.ts
├───├─── schema.ts
├─── services
├───├─── axios.ts
├─── store
├───├─── index.ts
├───├─── store.ts
├───├─── slice.ts
├─── styles
├─── types
├─── package-lock.json
├─── package.json
├─── next.config.json
├─── tsconfig.json

```
