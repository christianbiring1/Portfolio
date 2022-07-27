/* ******************************** PROJECTS LIST ********************************************** */

const projects = [
  {
    image: './images/Genuine-charity.png',
    id: 6,
    projectName: 'Genuine Charity',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    projectDescription: 'This project I have built was based on an online website for a conference. I have been provided some design guidelines to create the website, but I have personalized the content, and some features, i.e, instead of a conference web App I have built a website for charity and care.',
    liveDemo: 'https://christianbiring1.github.io/Capstone_project-module1/',
    sourceCode: '',
    class: 'genuineCharity',
  },

  {
    image: './images/Covid-App.png',
    id: 0,
    projectName: 'Covid-19 App',
    stack: ['HTML5', 'CSS3', 'React', 'Redux', 'Covid API'],
    projectDescription: 'This project is about building a mobile web application to check a list of metrics (numeric values) that I had to create making use of React and Redux. I have selected an API that provides numeric data about a the covid-19 views case in the world per country then build the webapp around it',
    liveDemo: 'https://chris-metrics-webapp.herokuapp.com/',
    sourceCode: 'https://github.com/christianbiring1/metrics-webapp',
    class: 'covidApp',
  },

  {
    image: './images/bookstore-react.png',
    id: 1,
    projectName: 'BookStore',
    stack: ['HTML5', 'CSS3', 'React', 'Redux', 'API'],
    projectDescription: `The Bookstore is a website similar to the "Awesome Books" website built in the previous module. I had to create an MVP version of it that allows the user to:
                        Display a list of books.
                        Add a book.
                        Remove a selected book`,
    liveDemo: 'https://chrisbookstore.herokuapp.com/',
    sourceCode: 'https://github.com/christianbiring1/bookstore',
    class: 'bookstore',
  },

  {
    image: './images/chris-math-magician.png',
    id: 2,
    projectName: 'Math magician',
    stack: ['HTML5', 'CSS3', 'React'],
    projectDescription: 'Math Magician application is a simple but effective simple web calculator that allows users to execute simple mathematical calculations. I had to set up the environment and tools needed to develop a React application',
    liveDemo: 'https://chris-math-magician.herokuapp.com/',
    sourceCode: 'https://github.com/christianbiring1/math_magician',
    class: 'mathmagician',
  },

  {
    image: './images/movieposter.png',
    id: 3,
    projectName: 'Movie poster',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'TVMaze API'],
    projectDescription: 'This project was about building my own web application based on an external API. I had to select an API of TVMaze that provides data about the movie show and then build the webapp around it.',
    liveDemo: 'https://christianbiring1.github.io/Movies_poster-Capstone2/',
    sourceCode: 'https://github.com/christianbiring1/Movies_poster-Capstone2',
    class: 'movie',
  },

  {
    image: './images/leader-board.png',
    id: 4,
    projectName: 'Leader board',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'API'],
    projectDescription: 'In this activity I had to set up the project for the Leaderboard list app, using webpack and ES6 features, notably modules. I had to develop the version of the app following a wireframe',
    liveDemo: 'https://christianbiring1.github.io/Leaderboard/',
    sourceCode: 'https://github.com/christianbiring1/Leaderboard',
    class: 'leaderboard',
  },

  {
    image: './images/To-Do_list.png',
    id: 5,
    projectName: 'To Do list',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'LocalStorage'],
    projectDescription: 'In this project, I had to build a simple HTML list of To Do tasks. The user will be able to create, update and delete (CRUD)the tasks. This simple web page was built using webpack and served by a webpack dev server.',
    liveDemo: 'https://christianbiring1.github.io/To-Do_list/',
    sourceCode: 'https://github.com/christianbiring1/To-Do_list',
    class: 'todolist',
  },

];

export default projects;