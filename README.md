# <picture><source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f37f/512.webp" type="image/webp"><img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f37f/512.gif" alt="🍿" width="32" height="32"></picture> [Tainted Turnips](https://seth-way.github.io/tainted-turnips/#/) <picture><source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f37f/512.webp" type="image/webp"><img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f37f/512.gif" alt="🍿" width="32" height="32"></picture>

### Abstract:
[//]: <> (Briefly describe what you built and its features. What problem is the app solving? How does this application solve that problem?)

A react-based, movie app that allows users to view, filter and discover movie titles all through a sleek and responsive UI.

### Installation Instructions:
[//]: <> (What steps does a person have to take to get your app cloned down and running?)

> [!WARNING]
> **[Node.js](https://nodejs.org/en) & [npm](https://www.npmjs.com/) are required to run this app.**<br>
> _Please ensure you have both installed on your machine before proceeding._

- _(optional) Fork this project to your own Github account._
- Clone the repository to your local machine.
- `cd` into the project folder.
- Use the `npm install` command to install the project dependencies.
- Use the `npm start` command to run webpack.
- Check the console for the `PORT` and copy/paste `localhost:PORT` into your web browser.

### Preview of App:
[//]: <> (Provide ONE gif or screenshot of your application - choose the "coolest" piece of functionality to show off.)

#### Desktop:
<picture><img src="/docs/desktop-navigation.gif" alt="app navigation preview on desktop" width="650px"/></picture>

#### Mobile:
<picture><img src="/docs/mobile-navigation.gif" alt="app navigation preview on mobile" width="250px"/></picture>

### Context:
[//]: <> (Give some context for the project here. How long did you have to work on it? How far into the Turing program are you?)

This group project took 2 Turing students roughly 10 days or 30 hours to complete. We were in our 13th week of intensive front-end web development training.

### Contributors:
[//]: <> (Who worked on this application? Link to their GitHubs.)

This project was built by [Marshall Hotaling](https://github.com/marshallhotaling) & [Seth Way](https://github.com/seth-way).

### Learning Goals:
[//]: <> (What were the learning goals of this project? What tech did you work with?)

- Sharpen competencies of React fundamentals
- Test React components & asynchronous JS
- Practice refactoring
- Create a multi-page UX using Router

### Wins + Challenges:
[//]: <> (What are 2-3 wins you have from this project? What were some challenges you faced - and how did you get over them?)

- When trying to deploy this site to GitHub pages, it did not work well with the BrowserRouter we used for page navigation. After thorough research, we refactored our router to use a HashRouter and were able to successfully deploy a working version of our app.
- This app was our first introduction to working with Cypress's testing suite. It is a robust and powerful library but it can be challenging to maneuver initially. We were able to successfully test and validate our entire app's UI, as well as any sad paths that could happen due to possible network errors.
