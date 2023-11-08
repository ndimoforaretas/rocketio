# 07.11.2023 - CSS Frameworks- Tailwind CSS

## 1. What is Tailwind CSS?

- It is a `utility-first` CSS framework that is it provides `low-level utility classes` that let you build completely custom designs.
- Other frameworks like Bootstrap, Foundation, etc. provide pre-built components that you can use to build your website. They are known as `component-first` frameworks.
- In Tailwind, there is therefore no pre-built components. You have to build them yourself using the utility classes provided by Tailwind.

### What are utility classes?

- Utility classes are classes that are used to style elements. They are usually `very specific` and are used to apply `a single style` to an element.
- For example, if you want to apply a `margin` to an element, you can use the `m-4` class. This will apply a `margin of 1rem` to the element.

Advantages of Tailwind CSS:

- The class names are named according to what they do.
- the class names are very short and easy to remember.
- You can build any design you want.
- Building and testing layouts is very fast.
- Tailwind has conditional class naming for breakpoints as well as states like hover, focus, etc. For example, if you want to apply a `margin of 1rem` on `small screens` and `2rem` on `large screens`, you can use the `sm:m-4 lg:m-8` class.

## Basic Setup

- In vs code,
  - install the Tailwind CSS IntelliSense extension.
  - install the PostCSS Language Support extension.
- In the terminal,
  - run `npm init -y` to initialize the project.
  - run `npm install -D tailwindcss` to install Tailwind CSS.
  - run `npx tailwindcss init` to create a `tailwind.config.js` file.
  - run `npm install -D prettier-plugin-tailwindcss` to install the Tailwind CSS plugin for Prettier.
- Modify the `tailwind.config.js` file as follows:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

- modify the `scripts` in the `package.json` file as follows:

```json
{
  "scripts": {
    "build": "tailwind -i ./input.css -o ./css/style.css",
    "watch": "tailwind -i ./input.css -o ./css/style.css --watch",
    "prettier": "npx prettier --write **/*.html"
  }
}
```

- create a `.gitignore` file and add the following:

```gitignore
node_modules
```

strg + alt + e
