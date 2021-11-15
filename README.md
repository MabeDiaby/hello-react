[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

## SEIR 1018 | November 15, 2021

# Hello React

Create a simple `<Hello ${name}/>` component in React, and then pass the name as props between components.

## Prerequisites

- React
- Create-react-app

## Instructions

1. Clone this repo into your computer and `cd` into it
1. Run `git checkout -b dev` to switch your development branch
1. Run `npx create-react-app .` -- To create a new react app inside this repo.
2. Change into the newly created project directory with `cd hello-react`.
3. Follow the requirements below.

## Requirements

For this exercise, you're going to build a `<Hello />` component that renders
some data passed in as props.

### Setup

Create a file called `Hello.js` in the `src/` directory.

### Function Component

Using a function, define a component called `Hello` that renders an `h1` with
the text `"Hello World"` in it. 

Update your `<App>` component so that it renders your new `Hello` component.

### Using the Props Object

Update your component so that it accepts a `name` property. Instead of rendering
`"Hello World"`, your `Hello` component should now render a message with the
value of `name`.

Update your `Hello` component in `App.js` so that you're passing in a name as
a prop.

### BONUS

Feeling ambitious? 

Copy the array below and paste it into your `App.js` file above the `App` function.

```js
const names = ['Eddie Van Halen', 'Jimi Hendrix', 'Wes Montgomery', 'Frank Zappa', 'John Mayer']
```

Using the `names` array, render a `Hello` component for each person in the array.



This is your chance to play with React before we move on to Hooks next week, use this as a sandbox to nest components, style them as you want (headers, footers, asides), and pass props down as much as you can.

--

Create a new directory called Components and create a file within it called `Greetings.jsx`. 
1. Connect the `Greetings.jsx` file to your `Hello.js` file and add the component within the return statement. 
2. Create an array called welcomeMessages that has mutiple strings of different messages. 
3. Map over the welcomeMessages array so that it displays all of them. 
4. Add props to the parameter of the Greetings function and add a prop called newUser in your Greeting component in the `Hello.js` file. 
5. Set newUser to true. 
6. Write a ternary opertator so that if the newUser is true it will show a welcomeMessage or it will say 'No User Found'. 


Import a font from https://fonts.google.com/. 

## Plagiarism

Take a moment to refamiliarize yourself with the [Plagiarism policy](https://git.generalassemb.ly/DC-WDI/Administrative/blob/master/plagiarism.md). Plagiarized work will not be accepted.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
